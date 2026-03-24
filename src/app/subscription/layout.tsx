import type { Metadata } from "next";

const CHECKOUT_TITLE = "Download HD Original — $4.99";
const CHECKOUT_DESCRIPTION =
  "Restore and preview for free, then pay once to unlock the original-quality download on the same email.";

export const metadata: Metadata = {
  title: CHECKOUT_TITLE,
  description: CHECKOUT_DESCRIPTION,
  alternates: { canonical: "/subscription" },
  robots: { index: false, follow: false },
  openGraph: {
    title: CHECKOUT_TITLE,
    description: CHECKOUT_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: CHECKOUT_TITLE,
    description: CHECKOUT_DESCRIPTION,
  },
};

export default function SubscriptionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
