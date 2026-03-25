import type { Metadata } from "next";
import Link from "next/link";
import PaymentCancelTracker from "./tracker";

export const metadata: Metadata = {
  title: "Checkout Cancelled — Return When Ready",
  description: "Your preview is still waiting. Return anytime to unlock the original-quality download for $4.99.",
  robots: { index: false, follow: false },
};

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-[#f5f5f7] px-5">
      <PaymentCancelTracker />
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
            href="/subscription"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0071e3] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#0077ed]"
          >
            Return to Checkout
          </Link>
        </div>

        <p className="mt-4 text-[12px] leading-[1.6] text-[#6e6e73]">
          Want to work on another photo first?{" "}
          <Link href="/old-photo-restoration" className="font-medium text-[#0071e3] hover:underline">
            Go back to the restore tool
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
