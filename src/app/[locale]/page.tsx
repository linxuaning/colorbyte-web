import type { Metadata } from "next";
import HomeView from "@/app/home-view";
import { routing } from "@/i18n/routing";
import { getHomePageContent } from "@/lib/i18n/locale-map";

// Locale homepage at /{locale}/ (es, pt-BR, fr, de, ja, ko, zh-CN). Renders
// the shared HomeView with the locale's HomePageContent payload, falling
// back to EN for any field a locale has not yet translated. EN root stays
// at / via src/app/page.tsx — only non-default locales generate here.
// 2026-05-10: replaced the EN re-export shim with locale-aware rendering
// after user reported KO/JA homepage showing English content.

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getHomePageContent(locale);

  // Build hreflang alternates for the apex homepage cluster.
  const languageAlternates: Record<string, string> = {
    "x-default": "/",
  };
  for (const loc of routing.locales) {
    languageAlternates[loc] = loc === routing.defaultLocale ? "/" : `/${loc}`;
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates as Record<string, string>,
    },
    openGraph: {
      type: "website",
      siteName: "ArtImageHub",
      title: content.ogTitle,
      description: content.ogDescription,
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
      title: content.ogTitle,
      description: content.ogDescription,
      images: ["/blog/before-after-examples.webp"],
    },
  };
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params;
  const content = getHomePageContent(locale);
  return <HomeView content={content} />;
}
