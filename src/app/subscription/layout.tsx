import type { Metadata } from "next";

const CHECKOUT_TITLE = "Unlock Upload + HD Access — ArtImageHub";
const CHECKOUT_DESCRIPTION =
  "Pay first, then return to the tool and upload with the same email. Live processing is still being re-verified, so immediate successful output is not promised yet.";

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
