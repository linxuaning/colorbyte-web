"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  consumePendingPaymentFunnelContext,
  type PaymentFunnelSource,
  trackPaymentCancel,
} from "@/lib/analytics";
import { buildPaymentFunnelQuery } from "@/lib/payment-funnel";

const getToolEntryPath = (landingPage?: string) => {
  if (
    landingPage === "/photo-enhancer" ||
    landingPage === "/photo-colorizer" ||
    landingPage === "/old-photo-restoration"
  ) {
    return landingPage;
  }

  return "/old-photo-restoration";
};

const getToolLabel = (path: string) => {
  switch (path) {
    case "/photo-enhancer":
      return "photo enhancer";
    case "/photo-colorizer":
      return "photo colorizer";
    default:
      return "restore tool";
  }
};

interface PendingCancelContext {
  source?: PaymentFunnelSource;
  resumeTaskId?: string;
}

export default function PaymentCancelClient() {
  const [pendingContext, setPendingContext] = useState<PendingCancelContext>({});

  useEffect(() => {
    const pending = consumePendingPaymentFunnelContext();
    queueMicrotask(() => {
      setPendingContext(pending || {});
    });
    trackPaymentCancel("paypal_cancel_page", pending?.source);
  }, []);

  const source = pendingContext.source || {};
  const resumeTaskId = pendingContext.resumeTaskId?.trim() || "";
  const toolPath = getToolEntryPath(source.landingPage);
  const toolLabel = getToolLabel(toolPath);
  const toolCopy = resumeTaskId ? "your result" : `the ${toolLabel}`;

  const returnParams = new URLSearchParams(buildPaymentFunnelQuery(source));
  if (resumeTaskId) {
    returnParams.set("resume_task_id", resumeTaskId);
  }
  const returnQuery = returnParams.toString();
  const checkoutHref = returnQuery ? `/subscription?${returnQuery}` : "/subscription";
  const toolHref = returnQuery ? `${toolPath}?${returnQuery}` : toolPath;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-[#f5f5f7] px-5">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">
        <h1 className="text-[28px] font-bold text-[#1d1d1f]">No worries!</h1>
        <p className="mt-3 text-[15px] text-[#6e6e73]">
          Your preview is still there. Return whenever you&apos;re ready to pay once for the original-quality download.
        </p>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
          <p className="text-[13px] font-semibold text-amber-900">What stays ready</p>
          <ul className="mt-2 space-y-1.5 text-[13px] text-amber-950">
            <li>1. Your preview remains available</li>
            <li>2. The original-quality download still unlocks with one payment</li>
            <li>3. You can come back and finish checkout when you&apos;re ready</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href={checkoutHref}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0071e3] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#0077ed]"
          >
            Return to Checkout
          </Link>
        </div>

        <p className="mt-4 text-[12px] leading-[1.6] text-[#6e6e73]">
          Want to work on another photo first?{" "}
          <Link href={toolHref} className="font-medium text-[#0071e3] hover:underline">
            Go back to {toolCopy}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
