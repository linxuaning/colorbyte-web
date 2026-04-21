import type { Metadata } from "next";
import { Suspense } from "react";
import EnhanceClient from "@/app/photo-enhancer/enhance-client";
import FloatingCTA from "@/components/FloatingCTA";
import LiveActivity from "@/components/LiveActivity";
import ProofSampleGallery from "@/components/ProofSampleGallery";
import { routing } from "@/i18n/routing";
import { getLocaleSEO } from "@/lib/i18n/locale-map";
import type { FaqItem, HowToStep } from "@/lib/i18n/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getLocaleSEO(locale)?.enhancer;

  const languageAlternates: Record<string, string> = {
    "x-default": "/photo-enhancer",
  };
  for (const loc of routing.locales) {
    const path =
      loc === routing.defaultLocale
        ? "/photo-enhancer"
        : `/${loc}/photo-enhancer`;
    languageAlternates[loc] = path;
  }

  return {
    title: d?.title ?? "AI Photo Enhancer Free: Enhance Photo Quality Online in Seconds",
    description:
      d?.description ??
      "Best free AI photo enhancer to improve photo quality online. Fix blurry photos, 4x upscale resolution, enhance faces. No signup, instant results in 30 seconds.",
    keywords: (d?.keywords as string[] | undefined) ?? [
      "AI photo enhancer",
      "photo enhancer free",
      "enhance photo quality",
      "AI photo enhancement",
      "improve photo quality online",
    ],
    alternates: {
      canonical: `/${locale}/photo-enhancer`,
      languages: languageAlternates as Record<string, string>,
    },
    openGraph: {
      title: d?.title ?? "AI Photo Enhancer — Enhance Photo Quality Free Online",
      description:
        d?.description ??
        "Best free AI photo enhancer. Improve photo quality, fix blur, 4x upscale. No signup, instant results.",
      type: "website",
      images: [
        {
          url: "/blog/before-after-examples.webp",
          width: 1200,
          height: 630,
          alt: "AI photo enhancer before and after comparison",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: d?.title ?? "AI Photo Enhancer — Enhance Photo Quality Free",
      description:
        d?.description ??
        "Best free AI photo enhancer. Improve photo quality, fix blur, 4x upscale.",
      images: ["/blog/before-after-examples.webp"],
    },
  };
}

const DEFAULT_HOW_TO_STEPS: readonly HowToStep[] = [
  { name: "Upload your photo", text: "Upload any blurry, low-resolution, or low-quality photo. Supported formats: JPG, PNG, WEBP up to 20MB. No signup required." },
  { name: "AI enhances your photo in seconds", text: "AI removes blur, upscales resolution up to 4×, and enhances face detail automatically. Results are ready in 30 seconds." },
  { name: "Preview free, download HD with Pro", text: "Preview the enhanced result instantly for free. Pro Lifetime Access ($4.99 one-time) unlocks the original-quality HD download." },
];

function buildHowToSchema(steps: readonly HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Enhance Photo Quality Online with AI",
    description: "Improve photo quality with AI in 3 steps. Fix blur, upscale resolution, enhance faces. Free preview — original-quality download for $4.99.",
    totalTime: "PT2M",
    tool: [{ "@type": "HowToTool", name: "ArtImageHub Photo Enhancer" }],
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  };
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Photo Enhancer",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    description: "One-time payment. Pro Lifetime Access — unlimited enhancements on all tools.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2847",
  },
};

const DEFAULT_FAQ_ITEMS: readonly FaqItem[] = [
  { q: "Is the photo enhancer free to use?", a: "Yes — enhancement preview is free. Download the original quality result requires Pro Lifetime Access ($4.99 one-time). No subscription." },
  { q: "How long does AI photo enhancement take?", a: "Most photos are enhanced in 30 seconds. Complex images may take up to 90 seconds." },
  { q: "Are my photos kept private?", a: "Yes. All photos are transmitted over encrypted HTTPS and permanently deleted from our servers within 24 hours. We never share or train on your photos." },
];

function buildFaqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default async function LocalePhotoEnhancerPage({ params }: Props) {
  const { locale } = await params;
  const d = getLocaleSEO(locale)?.enhancer;

  const h1 = d?.h1 ?? "Enhance Photo Quality with AI — Free";
  const subtitle =
    d?.subtitle ??
    "Upload your photo. AI removes blur, upscales resolution, and enhances faces in seconds. Free preview — Pro Lifetime Access for $4.99.";
  const badge = d?.badge ?? "Free Preview · No Signup";

  const howToSchema = buildHowToSchema(d?.howToSteps ?? DEFAULT_HOW_TO_STEPS);
  const faqSchema = buildFaqSchema(d?.faqItems ?? DEFAULT_FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            {badge}
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            {h1}
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            {subtitle}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6e6e73]">
            {[
              { icon: "✓", text: "10,000+ photos enhanced" },
              { icon: "✓", text: "4.8★ average rating" },
              { icon: "✓", text: "Results in 30 seconds" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 -mt-2 mb-8">
        <LiveActivity />
      </div>

      {/* Main tool */}
      <div id="upload" className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <EnhanceClient landingPage={`/${locale}/photo-enhancer`} />
        </Suspense>
      </div>

      <ProofSampleGallery
        className="bg-white py-8 sm:py-10"
        title="Before & After Examples"
        description="See what AI photo enhancement looks like on real blurry and low-quality photos."
      />

      <FloatingCTA landingPage={`/${locale}/photo-enhancer`} />
    </div>
  );
}
