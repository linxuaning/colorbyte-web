"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  buildPaymentFunnelQuery,
  readPaymentFunnelSource,
  trackPaymentSuccess,
} from "@/lib/analytics";

const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const orderId = searchParams.get("order_id");
  const resumeTaskId = searchParams.get("resume_task_id")?.trim() || "";
  const funnelSource = readPaymentFunnelSource(searchParams);

  useEffect(() => {
    // 🚨 CRITICAL: Save subscription to localStorage so user can access paid features
    if (email) {
      localStorage.setItem("artimagehub_email", email);
      console.log("✅ Subscription saved to localStorage:", email);
    }

    if (orderId) {
      const dedupeKey = `payment_success_tracked_${orderId}`;
      if (!sessionStorage.getItem(dedupeKey)) {
        trackPaymentSuccess(PRO_PRICE_USD, orderId, funnelSource);
        sessionStorage.setItem(dedupeKey, "1");
      }
    }
  }, [email, funnelSource, orderId]);

  const restartPath = resumeTaskId
    ? funnelSource.landingPage || "/old-photo-restoration"
    : "/old-photo-restoration";
  const restartParams = new URLSearchParams(buildPaymentFunnelQuery(funnelSource));
  if (resumeTaskId) {
    restartParams.set("resume_task_id", resumeTaskId);
  }
  const restartQuery = restartParams.toString();
  const restartHref = restartQuery ? `${restartPath}?${restartQuery}` : restartPath;
  const comparisonReturnHref =
    !resumeTaskId &&
    funnelSource.landingPage &&
    funnelSource.landingPage !== "/old-photo-restoration"
      ? (() => {
          const compareParams = new URLSearchParams(buildPaymentFunnelQuery(funnelSource));
          const compareQuery = compareParams.toString();
          return compareQuery
            ? `${funnelSource.landingPage}?${compareQuery}`
            : funnelSource.landingPage;
        })()
      : "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f5f7] flex items-center justify-center px-5">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-[28px] font-bold text-[#1d1d1f] mb-3">
            Payment Successful!
          </h1>

          <p className="text-[15px] text-[#6e6e73] mb-6">
            Your Pro Lifetime access has been activated.
          </p>

          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-left">
            <p className="text-[13px] font-semibold text-green-800">Do this next</p>
            <ul className="mt-2 space-y-1.5 text-[13px] text-green-900">
              <li>1. Go back to your restore flow</li>
              <li>2. Download in original quality with no watermark</li>
              <li>3. Keep using the same email for future Pro restores</li>
            </ul>
          </div>

          {/* Order Details */}
          {email && (
            <div className="bg-[#f5f5f7] rounded-xl p-5 mb-6 text-left">
              <div className="space-y-2">
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6e6e73]">Email:</span>
                  <span className="font-medium text-[#1d1d1f]">{email}</span>
                </div>
                {orderId && (
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#6e6e73]">Order ID:</span>
                    <span className="font-mono text-[11px] text-[#1d1d1f]">
                      {orderId.slice(0, 20)}...
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6e6e73]">Plan:</span>
                  <span className="font-medium text-[#1d1d1f]">Pro Lifetime</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6e6e73]">Amount:</span>
                  <span className="font-medium text-[#1d1d1f]">{PRO_PRICE_TEXT}</span>
                </div>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="bg-blue-50 rounded-xl p-5 mb-8 text-left">
            <p className="text-[13px] font-semibold text-[#0071e3] mb-3">
              What you get:
            </p>
            <ul className="space-y-2 text-[13px] text-[#1d1d1f]">
              <li className="flex items-start gap-2">
                <span className="text-[#0071e3] mt-0.5">✓</span>
                <span>Unlimited photo restorations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0071e3] mt-0.5">✓</span>
                <span>Original quality downloads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0071e3] mt-0.5">✓</span>
                <span>No watermarks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0071e3] mt-0.5">✓</span>
                <span>Lifetime access to all future features</span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <Link
            href={restartHref}
            className="block w-full h-12 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full flex items-center justify-center transition-colors"
          >
            Return to Your Restore
          </Link>

          {comparisonReturnHref ? (
            <Link
              href={comparisonReturnHref}
              className="mt-3 block w-full text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] hover:underline"
            >
              Back to the comparison page
            </Link>
          ) : null}

          <Link
            href={email ? `/subscription?email=${encodeURIComponent(email)}` : "/subscription"}
            className="mt-3 block w-full h-11 border border-[#d2d2d7] text-[#1d1d1f] text-[14px] font-medium rounded-full flex items-center justify-center transition-colors hover:bg-[#f5f5f7]"
          >
            Open My Pro Access
          </Link>

          <p className="mt-4 text-[12px] text-[#86868b]">
            Questions?{" "}
            <a
              href="mailto:support@artimagehub.com"
              className="text-[#0071e3] hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f5f7] flex items-center justify-center px-5">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <div className="animate-pulse">
            <div className="mx-auto w-20 h-20 bg-gray-200 rounded-full mb-6"></div>
            <div className="h-8 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
