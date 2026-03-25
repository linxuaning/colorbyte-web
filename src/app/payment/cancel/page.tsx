import type { Metadata } from "next";
import PaymentCancelClient from "./client";

export const metadata: Metadata = {
  title: "Checkout Cancelled — Return When Ready",
  description: "Your preview is still waiting. Return anytime to unlock the original-quality download for $4.99.",
  robots: { index: false, follow: false },
};

export default function PaymentCancelPage() {
  return <PaymentCancelClient />;
}
