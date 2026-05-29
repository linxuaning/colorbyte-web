import type { Metadata } from "next";
import SubscriptionClient from "./subscription-client";

export const metadata: Metadata = {
  title: "Unlock Upload + HD Access — ArtImageHub",
  description:
    "One-time $4.99 payment unlocks upload and processing access on your email. No subscription. Return with the same email to upload and get your HD restored photo.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/subscription" },
  openGraph: {
    title: "Unlock Upload + HD Access — ArtImageHub",
    description:
      "One-time $4.99 payment unlocks upload and processing access on your email. No subscription. Return with the same email to upload and get your HD restored photo.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlock Upload + HD Access — ArtImageHub",
    description:
      "One-time $4.99 payment unlocks upload and processing access on your email. No subscription. Return with the same email to upload and get your HD restored photo.",
  },
};

export default function SubscriptionPage() {
  return <SubscriptionClient />;
}
