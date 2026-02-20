import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to ArtImageHub Pro! — You're All Set",
  description: "Your ArtImageHub Pro subscription is active. Start restoring old photos with unlimited AI-powered restorations.",
  robots: { index: false, follow: false },
};

export default function PaymentSuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
