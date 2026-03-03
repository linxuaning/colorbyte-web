"use client";

import { useEffect, useState } from "react";
import { trackPaymentClick, trackPaymentSuccess } from "@/lib/analytics";

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

const PAYPAL_CLIENT_ID =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ||
  "AUvrJOLI-3fFmi6NqnpLfrYMatI8Soq0INYBgrNZgf33CwWFooIuXKYFla781UexEYaOfbqBkRpkiaEr";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const PRO_PRICE_USD = 29.9;
const PRO_PLAN_LABEL = `Pro Lifetime - $${PRO_PRICE_USD.toFixed(2)}`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface PayPalButtonProps {
  onSuccess?: (orderId: string) => void;
  onError?: (error: unknown) => void;
}

export default function PayPalButton({ onSuccess, onError }: PayPalButtonProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryNonce, setRetryNonce] = useState(0);
  const manualSupportEmail = "support@artimagehub.com";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("payment_debug_fail") === "1") {
        setError("Debug forced failure state");
        return;
      }
    }

    if (!API_BASE) {
      setError("API is not configured");
      return;
    }

    if (!PAYPAL_CLIENT_ID) {
      setError("PayPal is not configured");
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
  }, []);

  useEffect(() => {
    if (!loaded || !window.paypal || error) return;

    const container = document.getElementById("paypal-button-container");
    if (container) {
      container.innerHTML = "";
    }

    // Render PayPal button
    window.paypal
      .Buttons({
        createOrder: async () => {
          try {
            // Track payment button click
            trackPaymentClick(PRO_PLAN_LABEL);

            let checkoutEmail = localStorage.getItem("artimagehub_email")?.trim().toLowerCase();
            if (!checkoutEmail || !EMAIL_REGEX.test(checkoutEmail)) {
              const input = window.prompt("Enter your email for payment receipt and activation:")?.trim().toLowerCase();
              if (!input || !EMAIL_REGEX.test(input)) {
                throw new Error("A valid email is required before checkout");
              }
              checkoutEmail = input;
              localStorage.setItem("artimagehub_email", checkoutEmail);
            }

            const response = await fetch(`${API_BASE}/api/payment/paypal-create-order`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: checkoutEmail,
              }),
            });

            if (!response.ok) {
              throw new Error("Failed to create order");
            }

            const data = await response.json();
            return data.order_id;
          } catch (err) {
            console.error("Create order error:", err);
            setError(err instanceof Error ? err.message : "Failed to create order");
            if (onError) onError(err);
            throw err;
          }
        },
        onApprove: async (data: PayPalApproveData) => {
          try {
            const response = await fetch(`${API_BASE}/api/payment/paypal-capture-payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                order_id: data.orderID,
              }),
            });

            if (!response.ok) {
              throw new Error("Failed to capture payment");
            }

            const result = await response.json();

            if (result.success) {
              // Track successful payment
              trackPaymentSuccess(PRO_PRICE_USD);

              if (onSuccess) {
                onSuccess(data.orderID);
              } else {
                // Redirect to success page
                window.location.href = `/payment/success?order_id=${data.orderID}&email=${result.email}`;
              }
            } else {
              throw new Error("Payment capture failed");
            }
          } catch (err) {
            console.error("Capture payment error:", err);
            setError("Payment failed");
            if (onError) onError(err);
          }
        },
        onError: (err: unknown) => {
          console.error("PayPal error:", err);
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
  }, [loaded, onSuccess, onError, retryNonce, error]);

  const handleRetryPayment = () => {
    setError(null);
    setRetryNonce((v) => v + 1);
  };

  const handleManualCheckoutSupport = () => {
    const savedEmail = localStorage.getItem("artimagehub_email")?.trim() || "unknown";
    const subject = encodeURIComponent("Manual Checkout Support Needed");
    const body = encodeURIComponent(
      `Hi ColorByte team,\n\nI cannot complete PayPal checkout.\nEmail: ${savedEmail}\nPlan: Pro Lifetime ($29.90)\n\nPlease send me a valid payment link.\n\nThanks.`
    );
    window.location.href = `mailto:${manualSupportEmail}?subject=${subject}&body=${body}`;
  };

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center">
        <p className="text-sm font-medium text-red-700">
          Sorry—PayPal is temporarily unavailable and your payment was not charged.
        </p>
        <p className="mt-1 text-xs text-red-600">
          Please try `Retry Payment` first. If it still fails, use `Manual Checkout Support`.
        </p>
        <p className="mt-2 text-xs text-red-600">Technical detail: {error}</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleRetryPayment}
            className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-4 py-2 text-sm font-medium text-white hover:bg-[#005bb5]"
          >
            Retry Payment
          </button>
          <button
            type="button"
            onClick={handleManualCheckoutSupport}
            className="inline-flex items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-4 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7]"
          >
            Manual Checkout Support
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

  return <div id="paypal-button-container" className="mt-8"></div>;
}
