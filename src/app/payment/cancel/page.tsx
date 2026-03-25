import type { Metadata } from "next";
import Link from "next/link";
import PaymentCancelTracker from "./tracker";
import {
  buildPaymentFunnelQuery,
  readPaymentFunnelSourceFromSearchParams,
} from "@/lib/payment-funnel";

export const metadata: Metadata = {
  title: "Checkout Cancelled — Paid Access Not Activated",
  description: "Checkout was not completed. Return to the paid tool flow or reopen checkout when you are ready.",
  robots: { index: false, follow: false },
};

type PaymentCancelPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function PaymentCancelPage({ searchParams = {} }: PaymentCancelPageProps) {
  const funnelSource = readPaymentFunnelSourceFromSearchParams(searchParams);
  const checkoutQuery = buildPaymentFunnelQuery(funnelSource);
  const checkoutHref = checkoutQuery ? `/subscription?${checkoutQuery}` : "/subscription";
  const toolHref = funnelSource.landingPage || "/old-photo-restoration";

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <PaymentCancelTracker />
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-bold">Checkout Cancelled</h1>
        <p className="mt-2 text-muted-foreground">
          Paid access was not activated. Return to checkout when you are ready, or go back to the tool where the upload gate is waiting.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={checkoutHref}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return to Checkout
          </Link>
          <Link
            href={toolHref}
            className="inline-flex h-10 items-center justify-center rounded-lg border px-6 text-sm font-medium transition-colors hover:bg-muted"
          >
            Back to Tool Paywall
          </Link>
        </div>
      </div>
    </div>
  );
}
