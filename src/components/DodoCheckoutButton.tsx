"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  clearPendingPaymentFunnelSource,
  paymentFunnelPayload,
  readGaClientId,
  storePendingPaymentFunnelSource,
  trackCreateOrderResult,
  trackPaymentCancel,
  trackPaymentClick,
  trackPaymentRecoveryAction,
  trackPaymentStarted,
} from "@/lib/analytics";
import {
  redirectToDodoCheckout,
} from "@/lib/dodo-overlay";
import {
  enrichFunnelSource,
  type PaymentFunnelSource,
} from "@/lib/payment-funnel";
import { fetchCheckoutWithFallback } from "@/lib/checkout-request";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "https://colorbyte-api.onrender.com";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const CHECKOUT_ITEM_LABEL = `Original-quality download - ${PRO_PRICE_TEXT}`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INLINE_EMAIL_GATE_MESSAGE = "Enter a valid email before checkout";
const PAYMENT_WARMUP_TIMEOUT_MS = 2500;

interface DodoCheckoutButtonProps {
  checkoutEmail?: string;
  resumeTaskId?: string;
  funnelSource?: PaymentFunnelSource;
  featureKey?: string;
}

type DodoCheckoutResponse = {
  session_id?: string;
  checkout_url?: string;
  amount?: string;
  already_owned?: boolean;
};

type ValidDodoCheckoutResponse = DodoCheckoutResponse & {
  checkout_url: string;
};

type PrefetchedCheckout = {
  email: string;
  key: string;
  data: ValidDodoCheckoutResponse;
};

type CheckoutErrorKind =
  | "timeout"
  | "network"
  | "http"
  | "missing_checkout_url"
  | "amount_mismatch"
  | "already_owned"
  | "unknown";

type CheckoutErrorState = {
  title: string;
  detail: string;
  kind: CheckoutErrorKind;
};

class CheckoutStartError extends Error {
  kind: CheckoutErrorKind;

  constructor(kind: CheckoutErrorKind, message: string) {
    super(message);
    this.name = "CheckoutStartError";
    this.kind = kind;
  }
}

const readErrorDetail = async (response: Response): Promise<string> => {
  try {
    const data = await response.json();
    const detail = typeof data?.detail === "string" ? data.detail : "";
    return detail || `http_${response.status}`;
  } catch {
    return `http_${response.status}`;
  }
};

const warmPaymentDependency = async (): Promise<void> => {
  if (typeof window === "undefined" || !API_BASE) return;

  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    PAYMENT_WARMUP_TIMEOUT_MS,
  );

  try {
    await fetch(`${API_BASE}/api/payment/dodo-health`, {
      cache: "no-store",
      signal: controller.signal,
    });
  } catch {
    // Best-effort prewarm only. Checkout creation remains the source of truth.
  } finally {
    window.clearTimeout(timeoutId);
  }
};

export default function DodoCheckoutButton({
  checkoutEmail,
  resumeTaskId,
  funnelSource = {},
  featureKey = "restoration",
}: DodoCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<CheckoutErrorState | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const prefetchedCheckoutRef = useRef<PrefetchedCheckout | null>(null);
  const prefetchPromiseRef = useRef<Promise<PrefetchedCheckout | null> | null>(null);
  const manualSupportEmail = "support@artimagehub.com";
  const normalizedCheckoutEmail = checkoutEmail?.trim().toLowerCase() || "";
  const hasValidInlineEmail = EMAIL_REGEX.test(normalizedCheckoutEmail);

  const checkoutKey = JSON.stringify({
    featureKey,
    resumeTaskId: resumeTaskId || null,
    funnelSource,
  });

  useEffect(() => {
    if (validationMessage && hasValidInlineEmail) {
      setValidationMessage(null);
    }
  }, [hasValidInlineEmail, validationMessage]);

  useEffect(() => {
    if (hasValidInlineEmail) {
      void warmPaymentDependency();
    }
  }, [hasValidInlineEmail]);

  const getEnrichedSource = useCallback(() =>
    enrichFunnelSource(funnelSource, {
      ctaSlot: "pay_gate_main",
      checkoutSource: "intermediate_redirect",
    }), [funnelSource]);

  const validateCheckoutData = (data: DodoCheckoutResponse): ValidDodoCheckoutResponse => {
    if (!data.checkout_url) {
      throw new CheckoutStartError("missing_checkout_url", "Checkout link is missing in payment response.");
    }

    if (data.amount) {
      const backendAmount = Number.parseFloat(String(data.amount));
      if (Number.isFinite(backendAmount) && Math.abs(backendAmount - PRO_PRICE_USD) > 0.0001) {
        throw new CheckoutStartError(
          "amount_mismatch",
          `Price mismatch: UI ${PRO_PRICE_TEXT} vs checkout $${backendAmount.toFixed(2)}.`
        );
      }
    }

    return data as ValidDodoCheckoutResponse;
  };

  const createCheckout = useCallback(async (
    enrichedSource: PaymentFunnelSource,
  ): Promise<ValidDodoCheckoutResponse> => {
    const response = await fetchCheckoutWithFallback(API_BASE, {
      email: normalizedCheckoutEmail,
      feature_key: featureKey,
      resume_task_id: resumeTaskId || null,
      ga_client_id: readGaClientId() || null,
      ...paymentFunnelPayload(enrichedSource),
    });

    if (!response.ok) {
      const detail = await readErrorDetail(response);
      throw new CheckoutStartError("http", `Payment API returned ${detail}.`);
    }

    const data = (await response.json()) as DodoCheckoutResponse;
    // T151 soft-prompt: backend skipped session creation because this email
    // already owns the feature. Surface a friendly "already have access" state
    // (not an error / not a charge) instead of trying to redirect.
    if (data.already_owned) {
      throw new CheckoutStartError("already_owned", "You already have access to this feature.");
    }
    return validateCheckoutData(data);
  }, [featureKey, normalizedCheckoutEmail, resumeTaskId]);

  const getOrCreateCheckout = async (
    enrichedSource: PaymentFunnelSource,
  ): Promise<ValidDodoCheckoutResponse> => {
    const cached = prefetchedCheckoutRef.current;
    if (
      cached &&
      cached.email === normalizedCheckoutEmail &&
      cached.key === checkoutKey &&
      cached.data.checkout_url
    ) {
      return cached.data;
    }

    if (prefetchPromiseRef.current) {
      const prefetched = await prefetchPromiseRef.current;
      if (
        prefetched &&
        prefetched.email === normalizedCheckoutEmail &&
        prefetched.key === checkoutKey &&
        prefetched.data.checkout_url
      ) {
        return prefetched.data;
      }
    }

    return createCheckout(enrichedSource);
  };

  useEffect(() => {
    if (!hasValidInlineEmail || !API_BASE) return;
    if (
      prefetchedCheckoutRef.current?.email === normalizedCheckoutEmail &&
      prefetchedCheckoutRef.current?.key === checkoutKey
    ) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const enrichedSource = getEnrichedSource();
      const promise = createCheckout(enrichedSource)
        .then((data) => {
          const prefetched = { email: normalizedCheckoutEmail, key: checkoutKey, data };
          prefetchedCheckoutRef.current = prefetched;
          return prefetched;
        })
        .catch(() => null)
        .finally(() => {
          prefetchPromiseRef.current = null;
        });
      prefetchPromiseRef.current = promise;
    }, 350);

    return () => window.clearTimeout(timeoutId);
  }, [checkoutKey, createCheckout, getEnrichedSource, hasValidInlineEmail, normalizedCheckoutEmail]);

  const startCheckout = async () => {
    if (!API_BASE) {
      setError({
        kind: "unknown",
        title: "Payment is not configured. Your card was not charged.",
        detail: "Missing payment API configuration. Please request a direct payment link.",
      });
      return;
    }

    if (!hasValidInlineEmail) {
      setValidationMessage(INLINE_EMAIL_GATE_MESSAGE);
      return;
    }

    setLoading(true);
    setError(null);
    setValidationMessage(null);

    // Auto-fill funnel attribution from the browser when the caller hasn't
    // already supplied it. Caller-provided values always win.
    const enrichedSource = getEnrichedSource();

    try {
      localStorage.setItem("artimagehub_email", normalizedCheckoutEmail);
      trackPaymentClick(CHECKOUT_ITEM_LABEL, enrichedSource);
      storePendingPaymentFunnelSource(enrichedSource, resumeTaskId);
      trackPaymentStarted(CHECKOUT_ITEM_LABEL, enrichedSource);

      const data = await getOrCreateCheckout(enrichedSource);

      trackCreateOrderResult(true, data.session_id || "session_created", enrichedSource);
      redirectToDodoCheckout(data.checkout_url);
    } catch (err) {
      let nextError: CheckoutErrorState;
      if (err instanceof DOMException && (err.name === "TimeoutError" || err.name === "AbortError")) {
        nextError = {
          kind: "timeout",
          title: "Checkout request timed out. Your card was not charged.",
          detail: "The payment API stayed slow after a retry. Try again, or request a direct payment link.",
        };
      } else if (err instanceof CheckoutStartError && err.kind === "already_owned") {
        nextError = {
          kind: "already_owned",
          title: "You already have access ✓",
          detail: "This purchase is already active on your email — no need to pay again.",
        };
      } else if (err instanceof CheckoutStartError) {
        const title =
          err.kind === "http"
            ? "Payment API returned an error. Your card was not charged."
            : "Checkout could not start. Your card was not charged.";
        nextError = { kind: err.kind, title, detail: err.message };
      } else if (err instanceof TypeError) {
        nextError = {
          kind: "network",
          title: "Browser could not reach the payment API. Your card was not charged.",
          detail: "This is usually a temporary network, VPN, or browser connection issue. Try again, or request a direct payment link.",
        };
      } else {
        nextError = {
          kind: "unknown",
          title: "Checkout could not start. Your card was not charged.",
          detail: err instanceof Error ? err.message : "Failed to start checkout.",
        };
      }
      clearPendingPaymentFunnelSource();
      trackPaymentCancel(`dodo_checkout_error_${nextError.kind}`, enrichedSource);
      setError(nextError);
    } finally {
      setLoading(false);
    }
  };

  const handleRetryPayment = () => {
    trackPaymentRecoveryAction("retry_payment", funnelSource);
    setError(null);
    void startCheckout();
  };

  const handleManualCheckoutSupport = () => {
    trackPaymentRecoveryAction("manual_checkout_support", funnelSource);
    const savedEmail =
      normalizedCheckoutEmail ||
      localStorage.getItem("artimagehub_email")?.trim() ||
      "unknown";
    const subject = encodeURIComponent("Manual Checkout Support Needed");
    const body = encodeURIComponent(
      `Hi ArtImageHub team,\n\nI cannot complete DodoPayments checkout.\nEmail: ${savedEmail}\nPurchase: ${CHECKOUT_ITEM_LABEL}\n\nPlease send me a valid payment link.\n\nThanks.`
    );
    window.location.href = `mailto:${manualSupportEmail}?subject=${subject}&body=${body}`;
  };

  if (error && error.kind === "already_owned") {
    // T151 soft-prompt: friendly "already have access" — NOT an error, no charge,
    // no retry/payment-link CTA (those would re-trigger checkout).
    return (
      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
        <p className="text-sm font-medium text-emerald-800">{error.title}</p>
        <p className="mt-1 text-xs text-emerald-600">{error.detail}</p>
        <button
          type="button"
          onClick={() => setError(null)}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0071e3] px-4 py-2 text-sm font-medium text-white hover:bg-[#005bb5]"
        >
          Got it
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
        <p className="text-sm font-medium text-amber-800">
          {error.title}
        </p>
        <p className="mt-1 text-xs text-amber-600">
          {error.detail}
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleManualCheckoutSupport}
            className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-4 py-2 text-sm font-medium text-white hover:bg-[#005bb5]"
          >
            Get a Payment Link
          </button>
          <button
            type="button"
            onClick={handleRetryPayment}
            className="inline-flex items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-4 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void startCheckout()}
        disabled={loading}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0071e3] px-6 text-[14px] font-semibold text-white transition hover:bg-[#005bb5] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Opening secure checkout..." : `Pay ${PRO_PRICE_TEXT} securely`}
      </button>

      {/* Expectation-setting line — GA4 shows ~58% of create_order_success
          visits never complete payment. Surprise at the billing-address form
          is the most likely cause. Flagging it upfront converts the moment
          from "wait, what?" to an anticipated step. */}
      <p className="mt-2 text-center text-[11px] leading-snug text-white/60">
        Secure DodoPayments popup — keep this tab open; name and billing
        details usually take ~30 seconds.
      </p>

      {validationMessage && (
        <div className="mt-3 rounded-xl border border-white/15 bg-white/5 p-3 text-center">
          <p className="text-sm font-medium text-white">{validationMessage}</p>
          <p className="mt-1 text-xs text-white/70">
            Add the email that should receive activation, receipt, and HD access, then try DodoPayments again.
          </p>
        </div>
      )}
    </>
  );
}
