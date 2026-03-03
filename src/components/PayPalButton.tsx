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

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
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

  useEffect(() => {
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
    if (!loaded || !window.paypal) return;

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
  }, [loaded, onSuccess, onError]);

  if (error) {
    return (
      <div className="text-center text-red-500 text-sm">
        {error}
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
