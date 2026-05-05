import type { Metadata } from "next";
import { Suspense } from "react";
import DenoiseClient from "@/app/photo-denoiser/denoise-client";
import { routing } from "@/i18n/routing";
import { getLocaleSEO } from "@/lib/i18n/locale-map";
import type { FaqItem } from "@/lib/i18n/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getLocaleSEO(locale)?.denoiser;

  const languageAlternates: Record<string, string> = { "x-default": "/photo-denoiser" };
  for (const loc of routing.locales) {
    languageAlternates[loc] =
      loc === routing.defaultLocale ? "/photo-denoiser" : `/${loc}/photo-denoiser`;
  }

  return {
    title: d?.title ?? "AI Photo Denoiser Free: Remove Noise & Grain from Photos Online",
    description:
      d?.description ??
      "Remove noise, grain, and digital artifacts from photos online with AI. NAFNet-powered denoising preserves fine detail while eliminating sensor noise, grain, and JPEG artifacts. $4.99 one-time.",
    keywords: (d?.keywords as string[] | undefined) ?? [
      "AI photo denoiser", "remove noise from photo", "photo grain remover", "image noise reduction", "denoise photo online",
    ],
    alternates: {
      canonical: `/${locale}/photo-denoiser`,
      languages: languageAlternates as Record<string, string>,
    },
    openGraph: {
      title: d?.title ?? "AI Photo Denoiser — Remove Noise & Grain Free Online",
      description:
        d?.description ??
        "Remove sensor noise, grain, and JPEG artifacts from photos with AI. NAFNet SIDD model. $4.99 one-time.",
      type: "website",
      images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "AI photo denoiser before and after" }],
    },
    twitter: {
      card: "summary_large_image",
      title: d?.title ?? "AI Photo Denoiser — Remove Grain & Noise Online",
      description: d?.description ?? "Remove noise, grain, and artifacts from photos with AI. NAFNet-powered. $4.99 one-time.",
      images: ["/blog/before-after-examples.webp"],
    },
  };
}

const DEFAULT_FAQ_ITEMS: readonly FaqItem[] = [
  { q: "What types of noise can be removed?", a: "NAFNet on SIDD handles real-world smartphone sensor noise, including: high-ISO grain from low-light photography, color (chroma) noise, luminance noise, and mixed noise. It also reduces JPEG compression artifacts." },
  { q: "How long does denoising take?", a: "30–60 seconds per photo depending on image size and server load." },
  { q: "What does it cost?", a: "$4.99 one-time payment. No subscription." },
];

export default async function LocalePhotoDenoiserPage({ params }: Props) {
  const { locale } = await params;
  const d = getLocaleSEO(locale)?.denoiser;

  const h1 = d?.h1 ?? "Remove Noise from Photos with AI";
  const subtitle =
    d?.subtitle ??
    "Eliminate grain, sensor noise, and JPEG artifacts from any photo. NAFNet preserves fine detail while cleaning every pixel. $4.99 one-time.";
  const badge = d?.badge ?? "One-Time Payment · No Subscription";
  const faqItems = d?.faqItems ?? DEFAULT_FAQ_ITEMS;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3] shadow-[0_0_5px_rgba(0,113,227,0.5)]" />
            {badge}
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            {h1}
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Tool */}
      <div className="mx-auto max-w-3xl px-5 pb-16">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <DenoiseClient />
        </Suspense>
      </div>

      {/* FAQ */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-[#1d1d1f] text-center mb-10">
            FAQ
          </h2>
          <dl className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-xl border border-[#d2d2d7]/60 bg-white p-6">
                <dt className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.q}</dt>
                <dd className="text-[15px] text-[#6e6e73] leading-[1.65]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
