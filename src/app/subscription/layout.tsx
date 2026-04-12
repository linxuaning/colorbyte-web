import type { Metadata } from "next";

const CHECKOUT_TITLE = "Unlock Upload + HD Access — ArtImageHub";
const CHECKOUT_DESCRIPTION =
  "One-time $4.99 payment unlocks upload and processing access on your email. No subscription. Return with the same email to upload and get your HD restored photo.";

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
