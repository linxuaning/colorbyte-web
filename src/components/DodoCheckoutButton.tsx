"use client";

import { useEffect, useState } from "react";
import {
  clearPendingPaymentFunnelSource,
  paymentFunnelPayload,
  storePendingPaymentFunnelSource,
  trackCreateOrderResult,
  trackPaymentCancel,
  trackPaymentClick,
  trackPaymentRecoveryAction,
  trackPaymentStarted,
} from "@/lib/analytics";
import type { PaymentFunnelSource } from "@/lib/payment-funnel";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const CHECKOUT_ITEM_LABEL = `Original-quality download - ${PRO_PRICE_TEXT}`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INLINE_EMAIL_GATE_MESSAGE = "Enter a valid email before checkout";

interface DodoCheckoutButtonProps {
  checkoutEmail?: string;
  resumeTaskId?: string;
  funnelSource?: PaymentFunnelSource;
}

type DodoCheckoutResponse = {
  session_id?: string;
  checkout_url?: string;
  amount?: string;
};

const readErrorDetail = async (response: Response): Promise<string> => {
  try {
    const data = await response.json();
    const detail = typeof data?.detail === "string" ? data.detail : "";
    return detail || `http_${response.status}`;
  } catch {
    return `http_${response.status}`;
  }
};

export default function DodoCheckoutButton({
  checkoutEmail,
  resumeTaskId,
  funnelSource = {},
}: DodoCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const manualSupportEmail = "support@artimagehub.com";
  const normalizedCheckoutEmail = checkoutEmail?.trim().toLowerCase() || "";
  const hasValidInlineEmail = EMAIL_REGEX.test(normalizedCheckoutEmail);

  useEffect(() => {
    if (validationMessage && hasValidInlineEmail) {
      setValidationMessage(null);
    }
  }, [hasValidInlineEmail, validationMessage]);

  const startCheckout = async () => {
    if (!API_BASE) {
      setError("Missing NEXT_PUBLIC_API_URL: payment endpoint is not configured.");
      return;
    }

    if (!hasValidInlineEmail) {
      setValidationMessage(INLINE_EMAIL_GATE_MESSAGE);
      return;
    }

    setLoading(true);
    setError(null);
    setValidationMessage(null);

    try {
      localStorage.setItem("artimagehub_email", normalizedCheckoutEmail);
      trackPaymentClick(CHECKOUT_ITEM_LABEL, funnelSource);
      storePendingPaymentFunnelSource(funnelSource, resumeTaskId);
      trackPaymentStarted(CHECKOUT_ITEM_LABEL, funnelSource);

      const response = await fetch(`${API_BASE}/api/payment/dodo-create-checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedCheckoutEmail,
          resume_task_id: resumeTaskId || null,
          ...paymentFunnelPayload(funnelSource),
        }),
      });

      if (!response.ok) {
        clearPendingPaymentFunnelSource();
        const detail = await readErrorDetail(response);
        trackCreateOrderResult(false, detail, funnelSource);
        throw new Error(`Failed to create checkout (${detail})`);
      }

      const data = (await response.json()) as DodoCheckoutResponse;
      if (!data.checkout_url) {
        clearPendingPaymentFunnelSource();
        trackCreateOrderResult(false, "missing_checkout_url", funnelSource);
        throw new Error("Checkout link is missing in payment response");
      }

      if (data.amount) {
        const backendAmount = Number.parseFloat(String(data.amount));
        if (Number.isFinite(backendAmount) && Math.abs(backendAmount - PRO_PRICE_USD) > 0.0001) {
          clearPendingPaymentFunnelSource();
          trackCreateOrderResult(false, "amount_mismatch", funnelSource);
          throw new Error(
            `Price mismatch: UI ${PRO_PRICE_TEXT} vs checkout $${backendAmount.toFixed(2)}`
          );
        }
      }

      trackCreateOrderResult(true, data.session_id || "session_created", funnelSource);
      window.location.href = data.checkout_url;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to start checkout";
      clearPendingPaymentFunnelSource();
      trackPaymentCancel("dodo_checkout_error", funnelSource);
      setError(message);
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

  if (error) {
    return (
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
        <p className="text-sm font-medium text-amber-800">
          Payment processor temporarily unavailable. Your card was not charged.
        </p>
        <p className="mt-1 text-xs text-amber-600">
          Contact us and we&apos;ll send you a direct payment link within 24 hours.
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
        {loading ? "Redirecting to DodoPayments..." : `Pay ${PRO_PRICE_TEXT} with DodoPayments`}
      </button>

      {/* Expectation-setting line — GA4 shows ~58% of create_order_success
          visits never complete payment. Surprise at the billing-address form
          is the most likely cause. Flagging it upfront converts the moment
          from "wait, what?" to an anticipated step. */}
      <p className="mt-2 text-center text-[11px] leading-snug text-white/60">
        Secure checkout — you&rsquo;ll enter name &amp; billing address on the
        next page (takes ~30 seconds).
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
