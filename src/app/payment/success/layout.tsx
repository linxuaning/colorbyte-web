import type { Metadata } from "next";

const PAYMENT_SUCCESS_TITLE = "Paid Access Activated — Return to the Tool";
const PAYMENT_SUCCESS_DESCRIPTION =
  "Your one-time checkout succeeded. Return to the tool in the allowed pre-upload state with the same email to start processing.";

export const metadata: Metadata = {
  title: PAYMENT_SUCCESS_TITLE,
  description: PAYMENT_SUCCESS_DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: PAYMENT_SUCCESS_TITLE,
    description: PAYMENT_SUCCESS_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAYMENT_SUCCESS_TITLE,
    description: PAYMENT_SUCCESS_DESCRIPTION,
  },
};

export default function PaymentSuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
