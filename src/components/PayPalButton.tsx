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
  trackPaymentSuccessOnce,
} from "@/lib/analytics";
import type { PaymentFunnelSource } from "@/lib/payment-funnel";

declare global {
  interface PayPalApproveData {
    orderID: string;
  }

  interface PayPalButtonsConfig {
    createOrder: () => Promise<string>;
    onApprove: (data: PayPalApproveData) => Promise<void>;
    onError: (error: unknown) => void;
    style: {
      color: string;
      shape: string;
      label: string;
      height: number;
    };
  }

  interface PayPalNamespace {
    Buttons: (
      config: PayPalButtonsConfig,
    ) => { render: (selector: string) => Promise<void> | void };
  }

  interface Window {
    paypal?: PayPalNamespace;
  }
}

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID?.trim() || "";
const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const CHECKOUT_ITEM_LABEL = `Original-quality download - $${PRO_PRICE_USD.toFixed(2)}`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INLINE_EMAIL_GATE_MESSAGE = "Enter a valid email before checkout";

type CreateOrderTrackedError = Error & {
  trackDetail?: string;
};

interface PayPalButtonProps {
  onSuccess?: (orderId: string) => void;
  onError?: (error: unknown) => void;
  checkoutEmail?: string;
  resumeTaskId?: string;
  funnelSource?: PaymentFunnelSource;
}

export default function PayPalButton({
  onSuccess,
  onError,
  checkoutEmail,
  resumeTaskId,
  funnelSource = {},
}: PayPalButtonProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const [retryNonce, setRetryNonce] = useState(0);
  const manualSupportEmail = "support@artimagehub.com";
  const normalizedCheckoutEmail = checkoutEmail?.trim().toLowerCase() || "";
  const requiresInlineEmail = checkoutEmail !== undefined;
  const hasValidInlineEmail = EMAIL_REGEX.test(normalizedCheckoutEmail);

  useEffect(() => {
    if (validationMessage && hasValidInlineEmail) {
      setValidationMessage(null);
    }
  }, [hasValidInlineEmail, validationMessage]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("payment_debug_fail") === "1" && retryNonce === 0) {
        setError("Debug forced failure state");
        return;
      }
    }

    if (!API_BASE) {
      setError(
        "Missing NEXT_PUBLIC_API_URL: payment endpoint is not configured."
      );
      return;
    }

    if (!PAYPAL_CLIENT_ID) {
      setError(
        "Missing NEXT_PUBLIC_PAYPAL_CLIENT_ID: PayPal checkout is not configured."
      );
      return;
    }

    // Load PayPal SDK
    if (window.paypal) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setError("Failed to load PayPal SDK");
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        `script[src*="paypal.com/sdk/js"]`
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [retryNonce]);

  useEffect(() => {
    if (
      !loaded ||
      !window.paypal ||
      error
    ) {
      return;
    }

    const container = document.getElementById("paypal-button-container");
    if (container) {
      container.innerHTML = "";
    }

    let suppressNextPayPalOnError = false;

    // Render PayPal button
    window.paypal
      .Buttons({
        createOrder: async () => {
          try {
            suppressNextPayPalOnError = false;
            const payerEmail = requiresInlineEmail
              ? normalizedCheckoutEmail
              : localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
            if (!payerEmail || !EMAIL_REGEX.test(payerEmail)) {
              setValidationMessage(INLINE_EMAIL_GATE_MESSAGE);
              throw new Error(INLINE_EMAIL_GATE_MESSAGE);
            }
            setValidationMessage(null);
            localStorage.setItem("artimagehub_email", payerEmail);
            trackPaymentClick(CHECKOUT_ITEM_LABEL, funnelSource);
            storePendingPaymentFunnelSource(funnelSource, resumeTaskId);
            trackPaymentStarted(CHECKOUT_ITEM_LABEL, funnelSource);

            const response = await fetch(`${API_BASE}/api/payment/paypal-create-order`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: payerEmail,
                ...paymentFunnelPayload(funnelSource),
              }),
            });

            if (!response.ok) {
              clearPendingPaymentFunnelSource();
              throw Object.assign(new Error("Failed to create order"), {
                trackDetail: `http_${response.status}`,
              } satisfies Pick<CreateOrderTrackedError, "trackDetail">);
            }

            const data = await response.json();
            const backendAmount = Number.parseFloat(String(data.amount ?? ""));
            if (Number.isFinite(backendAmount) && Math.abs(backendAmount - PRO_PRICE_USD) > 0.0001) {
              throw new Error(
                `Price mismatch: UI ${PRO_PRICE_TEXT} vs order $${backendAmount.toFixed(2)}`
              );
            }
            trackCreateOrderResult(true, data.order_id, funnelSource);
            return data.order_id;
          } catch (err) {
            console.error("Create order error:", err);
            const isInlineEmailGateError =
              err instanceof Error && err.message === INLINE_EMAIL_GATE_MESSAGE;
            const trackedError =
              err instanceof Error
                ? (err as CreateOrderTrackedError)
                : (Object.assign(new Error("Failed to create order"), {
                    trackDetail: "unknown_error",
                  } satisfies Pick<CreateOrderTrackedError, "trackDetail">) as CreateOrderTrackedError);
            trackCreateOrderResult(
              false,
              isInlineEmailGateError
                ? "inline_email_gate"
                : trackedError.trackDetail || trackedError.message,
              funnelSource
            );
            if (!isInlineEmailGateError) {
              suppressNextPayPalOnError = true;
              clearPendingPaymentFunnelSource();
              setError(trackedError.message);
              if (onError) onError(trackedError);
            }
            throw trackedError;
          }
        },
        onApprove: async (data: PayPalApproveData) => {
          try {
            const captureEmail = requiresInlineEmail
              ? normalizedCheckoutEmail
              : localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
            const response = await fetch(`${API_BASE}/api/payment/paypal-capture-payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                order_id: data.orderID,
                email: captureEmail || undefined,
              }),
            });

            if (!response.ok) {
              throw new Error("Failed to capture payment");
            }

            const result = await response.json();

            if (result.success) {
              clearPendingPaymentFunnelSource();
              trackPaymentSuccessOnce(PRO_PRICE_USD, data.orderID, funnelSource);

              if (onSuccess) {
                onSuccess(data.orderID);
              } else {
                // Redirect to success page
                const successParams = new URLSearchParams({
                  order_id: data.orderID,
                  email: result.email,
                });
                if (resumeTaskId) {
                  successParams.set("resume_task_id", resumeTaskId);
                }
                Object.entries(funnelSource).forEach(([key, value]) => {
                  if (!value) return;
                  const queryKey =
                    key === "landingPage"
                      ? "landing_page"
                      : key === "ctaSlot"
                        ? "cta_slot"
                        : key === "entryVariant"
                          ? "entry_variant"
                          : "checkout_source";
                  successParams.set(queryKey, value);
                });
                window.location.href = `/payment/success?${successParams.toString()}`;
              }
            } else {
              throw new Error("Payment capture failed");
            }
          } catch (err) {
            console.error("Capture payment error:", err);
            clearPendingPaymentFunnelSource();
            trackPaymentCancel("capture_error", funnelSource);
            setError("Payment failed");
            if (onError) onError(err);
          }
        },
        onError: (err: unknown) => {
          const isInlineEmailGateError =
            err instanceof Error && err.message === INLINE_EMAIL_GATE_MESSAGE;
          if (isInlineEmailGateError) {
            setValidationMessage(INLINE_EMAIL_GATE_MESSAGE);
            return;
          }
          if (suppressNextPayPalOnError) {
            suppressNextPayPalOnError = false;
            return;
          }
          clearPendingPaymentFunnelSource();
          console.error("PayPal error:", err);
          trackPaymentCancel("paypal_sdk_error", funnelSource);
          setError("Payment failed");
          if (onError) onError(err);
        },
        style: {
          color: "blue",
          shape: "pill",
          label: "pay",
          height: 40,
        },
      })
      .render("#paypal-button-container");
  }, [
    loaded,
    onSuccess,
    onError,
    retryNonce,
    error,
    hasValidInlineEmail,
    normalizedCheckoutEmail,
    requiresInlineEmail,
    resumeTaskId,
    funnelSource,
  ]);

  const handleRetryPayment = () => {
    trackPaymentRecoveryAction("retry_payment", funnelSource);
    setError(null);
    setRetryNonce((v) => v + 1);
  };

  const handleManualCheckoutSupport = () => {
    trackPaymentRecoveryAction("manual_checkout_support", funnelSource);
    const savedEmail =
      normalizedCheckoutEmail ||
      localStorage.getItem("artimagehub_email")?.trim() ||
      "unknown";
    const subject = encodeURIComponent("Manual Checkout Support Needed");
    const body = encodeURIComponent(
      `Hi ArtImageHub team,\n\nI cannot complete PayPal checkout.\nEmail: ${savedEmail}\nPurchase: ${CHECKOUT_ITEM_LABEL}\n\nPlease send me a valid payment link.\n\nThanks.`
    );
    window.location.href = `mailto:${manualSupportEmail}?subject=${subject}&body=${body}`;
  };

  if (error) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
        <p className="text-sm font-medium text-amber-800">
          PayPal is temporarily unavailable. Your card was not charged.
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

  if (!loaded) {
    return (
      <div className="flex h-10 items-center justify-center rounded-full bg-[#0071e3] text-[14px] font-medium text-white">
        Loading PayPal...
      </div>
    );
  }

  return (
    <>
      <div id="paypal-button-container" className="mt-8"></div>
      {validationMessage && (
        <div className="mt-3 rounded-xl border border-white/15 bg-white/5 p-3 text-center">
          <p className="text-sm font-medium text-white">{validationMessage}</p>
          <p className="mt-1 text-xs text-white/70">
            Add the email that should receive activation, receipt, and HD access, then try PayPal again.
          </p>
        </div>
      )}
    </>
  );
}
