import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlock Pro Lifetime — ArtImageHub",
  description: "Complete the one-time checkout that unlocks original-quality restores, downloads, and future Pro sessions on the same email.",
  alternates: { canonical: "/subscription" },
  robots: { index: false, follow: false },
};

export default function SubscriptionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
