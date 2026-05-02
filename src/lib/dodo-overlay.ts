/**
 * Lazy loader + helper for the dodopayments-checkout overlay SDK.
 *
 * Backend `dodo_create_checkout` returns a hosted checkout URL today; this
 * helper opens that URL inside Dodo's overlay component instead of
 * navigating away (`window.location.href = url`). On any failure path —
 * SDK module fetch, init throw, open throw — we transparently fall back
 * to the legacy redirect so a flaky CDN never blocks payment entry.
 *
 * The SDK is loaded dynamically (`import("dodopayments-checkout")`) the
 * first time someone calls `openDodoOverlay`, and the Initialize call is
 * kept idempotent via `initialized`. We don't import the SDK at module
 * load because it pulls a sizable client bundle and most visitors never
 * reach the pay button on a given session.
 */

const DODO_MODE: "test" | "live" =
  (process.env.NEXT_PUBLIC_DODO_MODE?.trim().toLowerCase() === "test")
    ? "test"
    : "live";

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

async function loadModule(): Promise<DodoModule | null> {
  if (typeof window === "undefined") return null;
  if (!modulePromise) {
    modulePromise = import("dodopayments-checkout")
      .then((mod) => mod as unknown as DodoModule)
      .catch(() => null);
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
 *   - "overlay" if the overlay opened successfully
 *   - "redirect" if any failure caused a fallback to window.location.href
 *
 * Caller can branch UX (e.g. show "complete payment in popup" copy only
 * when overlay opened).
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
    return "overlay";
  } catch {
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
