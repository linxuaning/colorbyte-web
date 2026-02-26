"use client";

import { useEffect, useState } from "react";
import { trackPaymentClick, trackPaymentSuccess } from "@/lib/analytics";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PAYPAL_CLIENT_ID =
  "AUvrJOLI-3fFmi6NqnpLfrYMatI8Soq0INYBgrNZgf33CwWFooIuXKYFla781UexEYaOfbqBkRpkiaEr";

interface PayPalButtonProps {
  onSuccess?: (orderId: string) => void;
  onError?: (error: any) => void;
}

export default function PayPalButton({ onSuccess, onError }: PayPalButtonProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
            trackPaymentClick('Pro Lifetime - $4.99');

            const response = await fetch(
              "https://colorbyte-api.onrender.com/api/payment/paypal-create-order",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: "user@example.com", // Will be updated to collect email
                }),
              }
            );

            if (!response.ok) {
              throw new Error("Failed to create order");
            }

            const data = await response.json();
            return data.order_id;
          } catch (err) {
            console.error("Create order error:", err);
            setError("Failed to create order");
            if (onError) onError(err);
            throw err;
          }
        },
        onApprove: async (data: any) => {
          try {
            const response = await fetch(
              "https://colorbyte-api.onrender.com/api/payment/paypal-capture-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  order_id: data.orderID,
                }),
              }
            );

            if (!response.ok) {
              throw new Error("Failed to capture payment");
            }

            const result = await response.json();

            if (result.success) {
              // Track successful payment
              trackPaymentSuccess(4.99);

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
        onError: (err: any) => {
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
