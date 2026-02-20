import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Your Subscription — ArtImageHub Pro",
  description: "View your ArtImageHub Pro subscription status, billing date, and manage your account. Cancel or upgrade anytime.",
  alternates: { canonical: "/subscription" },
  robots: { index: false, follow: false },
};

export default function SubscriptionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
