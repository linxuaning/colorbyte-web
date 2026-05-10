import type { Metadata } from "next";
import HomeView from "./home-view";
import { enHomePage } from "@/lib/i18n/en";

// EN homepage at /. Renders the shared HomeView with the English
// content payload (single source of truth shared with /{locale}/ variants).
// 2026-05-10: refactored from inline strings into HomeView+enHomePage so
// non-EN locale pages can render their localized homepage instead of the
// EN re-export (user reported KO/JA showing EN content).

export const metadata: Metadata = {
  title: enHomePage.metaTitle,
  description: enHomePage.metaDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ArtImageHub",
    title: enHomePage.ogTitle,
    description: enHomePage.ogDescription,
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "AI photo restoration before and after comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: enHomePage.ogTitle,
    description: enHomePage.ogDescription,
    images: ["/blog/before-after-examples.webp"],
  },
};

export default function HomePage() {
  return <HomeView content={enHomePage} />;
}
