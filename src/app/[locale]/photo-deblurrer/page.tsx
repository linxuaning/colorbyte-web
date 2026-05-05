import type { Metadata } from "next";
import { Suspense } from "react";
import DeblurClient from "@/app/photo-deblurrer/deblur-client";
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
  const d = getLocaleSEO(locale)?.deblurrer;

  const languageAlternates: Record<string, string> = { "x-default": "/photo-deblurrer" };
  for (const loc of routing.locales) {
    languageAlternates[loc] =
      loc === routing.defaultLocale ? "/photo-deblurrer" : `/${loc}/photo-deblurrer`;
  }

  return {
    title: d?.title ?? "Unblur Image Online Free: AI Photo Deblurrer — Fix Blurry Photos",
    description:
      d?.description ??
      "Fix blurry, out-of-focus, and motion-blurred photos with AI. NAFNet deblurring model recovers sharp details. $4.99 one-time, no subscription.",
    keywords: (d?.keywords as string[] | undefined) ?? [
      "unblur image", "fix blurry photo", "photo deblurrer", "sharpen blurry photo AI", "remove motion blur",
    ],
    alternates: {
      canonical: `/${locale}/photo-deblurrer`,
      languages: languageAlternates as Record<string, string>,
    },
    openGraph: {
      title: d?.title ?? "AI Photo Deblurrer — Fix Blurry Photos Online",
      description:
        d?.description ??
        "Recover sharp details from blurry, out-of-focus, or motion-blurred photos using NAFNet AI. $4.99 one-time.",
      type: "website",
      images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "AI photo deblurrer before and after" }],
    },
    twitter: {
      card: "summary_large_image",
      title: d?.title ?? "AI Photo Deblurrer — Fix Blurry Photos Online",
      description: d?.description ?? "Fix motion blur, defocus, and camera shake with AI. $4.99 one-time.",
      images: ["/blog/before-after-examples.webp"],
    },
  };
}

const DEFAULT_FAQ_ITEMS: readonly FaqItem[] = [
  { q: "What types of blur can be fixed?", a: "Motion blur (camera or subject movement), mild defocus/out-of-focus, camera shake blur, and general softness. The NAFNet GoPro model is specifically trained on real motion blur scenarios." },
  { q: "How long does deblurring take?", a: "30–60 seconds per photo depending on image size and server load." },
  { q: "What does it cost?", a: "$4.99 one-time payment. No subscription." },
];

export default async function LocalePhotoDeblurrerPage({ params }: Props) {
  const { locale } = await params;
  const d = getLocaleSEO(locale)?.deblurrer;

  const h1 = d?.h1 ?? "Fix Blurry Photos with AI";
  const subtitle =
    d?.subtitle ??
    "NAFNet AI sharpens motion blur, camera shake, and out-of-focus images in 30–60 seconds. $4.99 one-time.";
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
          <DeblurClient />
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
