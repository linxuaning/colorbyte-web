import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled — Try Free Version",
  description: "No worries — you can still use ArtImageHub free. Start restoring old photos with AI, no payment required.",
  robots: { index: false, follow: false },
};

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-bold">No worries!</h1>
        <p className="mt-2 text-muted-foreground">
          You can try 3 photos free anytime, no credit card needed. Upgrade to Pro Lifetime when ready for unlimited access.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/#pricing"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Plans
          </Link>
          <Link
            href="/old-photo-restoration"
            className="inline-flex h-10 items-center justify-center rounded-lg border px-6 text-sm font-medium transition-colors hover:bg-muted"
          >
            Try Free Version
          </Link>
        </div>
      </div>
    </div>
  );
}
