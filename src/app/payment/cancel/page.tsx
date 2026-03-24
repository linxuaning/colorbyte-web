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
    <div className="flex min-h-[60vh] items-center justify-center">
      <PaymentCancelTracker />
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-bold">No worries!</h1>
        <p className="mt-2 text-muted-foreground">
          Your preview is still there. Return whenever you&apos;re ready to pay once for the original-quality download.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/subscription"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open Checkout
          </Link>
          <Link
            href="/old-photo-restoration"
            className="inline-flex h-10 items-center justify-center rounded-lg border px-6 text-sm font-medium transition-colors hover:bg-muted"
          >
            Back to Restore Tool
          </Link>
        </div>
      </div>
    </div>
  );
}
