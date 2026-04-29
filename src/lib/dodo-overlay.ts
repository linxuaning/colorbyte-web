/**
 * Lazy loader + helper for the dodopayments-checkout overlay SDK.
 *
 * Backend `dodo_create_checkout` returns a hosted checkout URL today; this
 * helper opens that URL inside Dodo's overlay component instead of
 * navigating away (`window.location.href = url`). Every async leg is
 * Promise.race'd against an explicit timeout so a hung CDN, frozen
 * Initialize, or silent-failed Checkout.open can NEVER leave the user
 * stuck on a "Opening secure checkout..." spinner — the timeout fires,
 * the helper returns "redirect", and the caller falls back to the
 * legacy hosted-page navigation. (try/catch alone can't catch a
 * never-settling promise; that was the 2026-04-28 P0 root cause.)
 *
 * The SDK is loaded dynamically (`import("dodopayments-checkout")`) the
 * first time someone calls `openDodoOverlay`. We don't import the SDK at
 * module load because it pulls a sizable client bundle and most visitors
 * never reach the pay button on a given session.
 */

const DODO_MODE: "test" | "live" =
  (process.env.NEXT_PUBLIC_DODO_MODE?.trim().toLowerCase() === "test")
    ? "test"
    : "live";

// Per-leg timeouts. Tuned conservatively — a healthy SDK loads, inits,
// and opens its overlay well under 1s on any network we care about.
const MODULE_LOAD_TIMEOUT_MS = 5000;
const OVERLAY_MOUNT_TIMEOUT_MS = 5000;

type DodoEvent = { event_type?: string; type?: string } & Record<string, unknown>;
type DodoCheckout = {
  open: (args: { checkoutUrl: string }) => void;
  close: () => void;
  isOpen: () => boolean;
};
type DodoModule = {
  DodoPayments: {
    Initialize: (args: {
      mode: "test" | "live";
      displayType: "overlay" | "inline";
      onEvent: (event: DodoEvent) => void;
    }) => void;
    Checkout: DodoCheckout;
  };
};

let modulePromise: Promise<DodoModule | null> | null = null;
let initialized = false;
let activeOnEvent: ((event: DodoEvent) => void) | null = null;

/**
 * Race a promise against a fixed wall-clock timeout. Resolves with the
 * promise's value on success, or rejects with `Error("timeout_<ms>ms_<label>")`
 * if the timeout wins. Crucially this is NOT just a try/catch wrapper —
 * if the underlying promise NEVER settles (the case that bit us in 4-28
 * P0), the timeout still fires.
 */
function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  label: string,
): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(
      () => reject(new Error(`timeout_${ms}ms_${label}`)),
      ms,
    );
  });
  return Promise.race([promise, timeoutPromise]).finally(() => {
    if (timer !== null) clearTimeout(timer);
  });
}

async function loadModule(): Promise<DodoModule | null> {
  if (typeof window === "undefined") return null;
  if (!modulePromise) {
    modulePromise = withTimeout(
      import("dodopayments-checkout").then(
        (mod) => mod as unknown as DodoModule,
      ),
      MODULE_LOAD_TIMEOUT_MS,
      "module_load",
    ).catch(() => {
      // Reset so a future call gets a fresh attempt rather than the
      // poisoned cached null. Lets a transient network blip recover.
      modulePromise = null;
      return null;
    });
  }
  return modulePromise;
}

async function ensureInitialized(): Promise<DodoModule | null> {
  const mod = await loadModule();
  if (!mod) return null;
  if (!initialized) {
    try {
      mod.DodoPayments.Initialize({
        mode: DODO_MODE,
        displayType: "overlay",
        onEvent: (event) => {
          // Re-dispatch to whichever caller is currently waiting.
          activeOnEvent?.(event);
        },
      });
      initialized = true;
    } catch {
      return null;
    }
  }
  return mod;
}

/**
 * Poll `Checkout.isOpen()` (and DOM as a fallback signal) until either
 * the overlay reports open or the timeout elapses. We need this because
 * `Checkout.open()` itself returns synchronously even when its overlay
 * never actually mounts (network blocked, CSP, iframe sandbox refusal).
 * Without this gate, the modal stays "Opening secure checkout..." forever.
 */
function waitForOverlayMount(mod: DodoModule, ms: number): Promise<void> {
  const start = Date.now();
  return new Promise<void>((resolve, reject) => {
    const tick = () => {
      let isOpen = false;
      try {
        isOpen = mod.DodoPayments.Checkout.isOpen();
      } catch {
        isOpen = false;
      }
      if (!isOpen && typeof document !== "undefined") {
        // Defense in depth: if the SDK got confused about its own state
        // but did mount a DOM element, treat that as success.
        const fallbackHit = document.querySelector(
          'iframe[src*="dodopayments"], [data-dodo-checkout], [data-dodo-overlay], #dodo-checkout-overlay',
        );
        if (fallbackHit) isOpen = true;
      }
      if (isOpen) {
        resolve();
        return;
      }
      if (Date.now() - start > ms) {
        reject(new Error(`timeout_${ms}ms_overlay_mount`));
        return;
      }
      setTimeout(tick, 150);
    };
    tick();
  });
}

export interface OpenDodoOverlayOptions {
  checkoutUrl: string;
  /**
   * Called when the SDK reports a successful payment. Receivers should
   * navigate the parent page to the post-payment surface; the overlay
   * will close itself on the SDK's own teardown.
   */
  onSuccess?: () => void;
  /** Called when the user dismisses the overlay without paying. */
  onCancel?: () => void;
  /** Called when an SDK error fires inside the overlay session. */
  onError?: (event: DodoEvent) => void;
}

/**
 * Opens the checkout URL in Dodo's overlay. Returns:
 *   - "overlay" if the overlay opened AND mounted within the timeout
 *   - "redirect" if any failure (including timeout) caused a fallback to
 *     window.location.href
 *
 * The caller does NOT need to handle hung promises — every leg here has
 * a hard timeout. If "redirect" is returned, the navigation has already
 * been initiated (see `window.location.href` assignments below).
 */
export async function openDodoOverlay(
  options: OpenDodoOverlayOptions,
): Promise<"overlay" | "redirect"> {
  const mod = await ensureInitialized();
  if (!mod) {
    if (typeof window !== "undefined") window.location.href = options.checkoutUrl;
    return "redirect";
  }

  // Wire the event handler for this open call.
  activeOnEvent = (event: DodoEvent) => {
    const type = (event.event_type || event.type || "").toString().toLowerCase();
    if (
      type.includes("succeeded") ||
      type.includes("success") ||
      type.includes("completed") ||
      type.includes("paid")
    ) {
      options.onSuccess?.();
    } else if (type.includes("cancel") || type.includes("close") || type.includes("dismiss")) {
      options.onCancel?.();
    } else if (type.includes("error") || type.includes("fail")) {
      options.onError?.(event);
    }
  };

  try {
    mod.DodoPayments.Checkout.open({ checkoutUrl: options.checkoutUrl });
  } catch {
    if (typeof window !== "undefined") window.location.href = options.checkoutUrl;
    return "redirect";
  }

  // `open()` returned synchronously — but did the overlay actually mount?
  // Poll for DOM/state confirmation; fall back if the timeout wins.
  try {
    await waitForOverlayMount(mod, OVERLAY_MOUNT_TIMEOUT_MS);
    return "overlay";
  } catch {
    try {
      mod.DodoPayments.Checkout.close();
    } catch {
      // overlay may already be torn down or never-mounted; ignore
    }
    if (typeof window !== "undefined") window.location.href = options.checkoutUrl;
    return "redirect";
  }
}

export function closeDodoOverlay(): void {
  loadModule().then((mod) => {
    if (!mod) return;
    try {
      mod.DodoPayments.Checkout.close();
    } catch {
      // overlay may have already torn down
    }
  });
}

/**
 * `fetch()` wrapper that aborts after `ms` milliseconds via AbortController.
 * The browser's native `fetch` doesn't time out by default; on a hung
 * connection it can wait minutes (or until the user reloads). Caller-side
 * timeout is mandatory for any user-blocking checkout call so the flow
 * can fall back instead of freezing on "Opening secure checkout..."
 */
export async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit,
  ms: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Default timeout for the dodo-create-checkout POST. */
export const CHECKOUT_FETCH_TIMEOUT_MS = 5000;
