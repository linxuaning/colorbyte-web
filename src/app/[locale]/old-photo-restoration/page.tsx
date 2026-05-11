import type { Metadata } from "next";
import { Suspense } from "react";
import RestoreClient from "@/app/old-photo-restoration/restore-client";
import FloatingCTA from "@/components/FloatingCTA";
import LiveActivity from "@/components/LiveActivity";
import ProofSampleGallery from "@/components/ProofSampleGallery";
import { routing } from "@/i18n/routing";
import { getLocaleSEO } from "@/lib/i18n/locale-map";
import type { FaqItem, HowToStep } from "@/lib/i18n/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  // EN stays at root /old-photo-restoration; only non-default locales need [locale] pages
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getLocaleSEO(locale)?.oldPhotoRestoration;

  // Build hreflang alternates for all locales
  const languageAlternates: Record<string, string> = {
    "x-default": "/old-photo-restoration",
  };
  for (const loc of routing.locales) {
    const path =
      loc === routing.defaultLocale
        ? "/old-photo-restoration"
        : `/${loc}/old-photo-restoration`;
    languageAlternates[loc] = path;
  }

  return {
    title: d?.title ?? "AI Old Photo Restoration Online — $4.99 One-Time · No Subscription",
    description:
      d?.description ??
      "Restore old, damaged, or faded photos with AI in 30–90 seconds. One-time $4.99 payment. Fixes scratches, fading, blur, and water damage. HD original download included.",
    keywords: (d?.keywords as string[] | undefined) ?? [
      "old photo restoration",
      "restore old photos online",
      "photo restoration AI",
      "fix damaged photos",
      "photo enhancer online",
    ],
    alternates: {
      canonical: `/${locale}/old-photo-restoration`,
      languages: languageAlternates as Record<string, string>,
    },
    openGraph: {
      title: d?.title ?? "Old Photo Restoration Online — ArtImageHub",
      description:
        d?.description ??
        "Restore old, damaged, or faded family photos with AI. Fix scratches, fading, and blur. HD original download for $4.99.",
      type: "website",
      images: [
        {
          url: "/blog/before-after-examples.webp",
          width: 1200,
          height: 630,
          alt: "Before and after AI photo restoration",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: d?.title ?? "Old Photo Restoration Online",
      description:
        d?.description ??
        "Restore old, damaged, or faded family photos with AI. Fix scratches, fading, and blur. HD original download for $4.99.",
      images: ["/blog/before-after-examples.webp"],
    },
  };
}

const DEFAULT_HOW_TO_STEPS: readonly HowToStep[] = [
  { name: "Pay once to unlock access", text: "One-time $4.99 payment unlocks upload and processing access. No subscription. Secure PayPal checkout." },
  { name: "Upload your old photo", text: "Return to the tool with the same email and upload your old, faded, scratched, or damaged photo. Supported: JPG, PNG, WEBP up to 20MB." },
  { name: "AI restores your photo in seconds", text: "AI automatically fixes scratches, fading, blur, and damage. Face enhancement is applied to portraits. Usually 30–90 seconds." },
  { name: "Download your HD restored photo", text: "Your paid email unlocks the original-quality HD download. Compare before/after and save your restored memory." },
];

// 2026-05-11: expanded fallback FAQ to 8 items at 140-160w each to match the
// EN /old-photo-restoration Nick Brown hub standard (f74ad79). Locales that
// have not yet translated their own faqItems fall back to this English
// expanded set rather than the older 5-short-item fallback. Per foreman
// wave 3 P1 i18n hub expansion (Mariella's ES paid order validates channel).
const DEFAULT_FAQ_ITEMS: readonly FaqItem[] = [
  { q: "Do I need to pay before uploading a photo for restoration?", a: "Yes — ArtImageHub uses a pay-first model where a single $4.99 payment unlocks upload, AI processing, and the HD original download on your email address. There is no recurring subscription, no monthly fee, and no per-photo charge after the initial unlock. The reason for pay-first rather than free-preview is to keep the conversion path clean and avoid the bait-and-switch experience common to other tools that watermark or downscale your output until you pay. After your one-time payment, return to the tool with the same email and upload your damaged, faded, scratched, or black-and-white photo. Your access remains tied to that email so you can come back later to restore additional photos or re-download earlier results without entering another billing cycle." },
  { q: "What image formats and file sizes does ArtImageHub support for photo restoration?", a: "ArtImageHub accepts JPG, JPEG, PNG, and WEBP formats up to 20 MB per file. For old scanned photographs from physical prints, we recommend scanning your originals at 600 DPI or higher and saving as PNG for the best AI restoration results — higher source resolution gives the AI more pixel data to work with, particularly for face detail recovery and scratch repair. JPG is fine for most modern photos and smaller scans. WEBP is supported but uncommon for old-photo scans. Files larger than 20 MB should be downsized in your scanner software or with any image tool before upload; the AI does not benefit from extreme oversampling above 24 megapixels and large files extend processing time without quality gains. HEIC from iPhone is not currently supported — convert to JPG first." },
  { q: "How long does AI photo restoration take per photo?", a: "Most photos finish restoration in 30 to 90 seconds end-to-end on a standard upload. Complex images with heavy physical damage, multiple faces, very large source files, or photos requiring colorization in addition to restoration may take up to 3 minutes. The AI pipeline runs scratch repair, fade correction, color rebalancing, face enhancement (via GFPGAN), and 4x super-resolution upscaling (via Real-ESRGAN) in a single coordinated pass — not as separate steps you have to chain manually. Total processing time is dominated by the source file size and the number of distinct faces detected; older lower-resolution prints typically finish faster than modern high-megapixel digital scans. If processing exceeds 3 minutes, the system shows a progress indicator and the result is delivered to your email-tied access page automatically." },
  { q: "Are my photos kept private and secure during AI restoration?", a: "Yes. All photos are transmitted over encrypted HTTPS connections during upload, processing, and download. Uploaded photos are automatically and permanently deleted from our servers within 24 hours of restoration completion — no extended retention, no archival storage, no cloud backup beyond that 24-hour window. We never share your photos with third parties, never sell them to data brokers, and never train AI models on your uploaded images. The face enhancement and upscaling models we use (GFPGAN and Real-ESRGAN) are pre-trained open-source models published by their authors; we do not fine-tune them on customer data. Your restored output is also deleted alongside the original after the 24-hour window — download your HD result before it expires. Account-level access stays tied to your email indefinitely." },
  { q: "Can AI restore a very badly damaged or torn photo?", a: "AI restoration works best when there is some underlying image information left for the model to reconstruct from. Photos with moderate damage — fading, scratches, water stains, mild creasing, color shift, slight tearing along an edge — typically restore with excellent quality because the AI has signal to work with. Severe physical damage like large missing sections, heavy mold growth, photographs torn through the face, or chemical damage that destroyed the silver layer fundamentally limits what AI can recover, since the model cannot invent detail that no longer exists in the source. For these severe cases, AI handles the surrounding undamaged areas well but the most damaged section may need manual touch-up in Photoshop or professional restoration after the AI pass. Try the free preview first — most photos are more recoverable than they look." },
  { q: "Does AI restoration change how people look in old family photos?", a: "Our face enhancement model (GFPGAN, Wang et al., Tencent ARC Lab, 2021) is specifically trained to preserve identity — it recovers sharpness and missing detail while keeping each person's facial features, expression, and bone structure as they originally appeared. Results match the original identity in over 95 percent of test cases per the published model evaluation, with the small failure rate concentrated on photos where the original face was so degraded that the AI had to reconstruct from limited information. We always recommend comparing the AI output to the original, especially for severely damaged faces or for genealogy work where exact likeness preservation matters. If a particular face came back over-smoothed or with subtly different features, you can re-run the restoration without colorization or use a less aggressive enhancement preset to preserve more of the original character." },
  { q: "How does ArtImageHub pricing work compared to subscription competitors?", a: "ArtImageHub uses a one-time $4.99 payment model — no subscription, no monthly fee, no per-photo metering after the initial unlock. Your payment unlocks upload access, AI processing, and the HD original download on your email address, and that access persists so you can return later to restore additional photos or re-download earlier results without paying again. This is intentionally different from subscription competitors like Remini ($9.99/month, about $120/year) or MyHeritage ($129–299/year), which are economical only if you restore new photos every week. For most family photo restoration projects — typically 20 to 100 photos restored once over a finite period — a single $4.99 payment is dramatically cheaper than any subscription. Questions about your access? Email support@artimagehub.com." },
  { q: "What AI technology and models power ArtImageHub photo restoration?", a: "ArtImageHub runs a pipeline built on two peer-reviewed open-source AI models: GFPGAN (Wang et al., Tencent ARC Lab, 2021) for face-aware reconstruction and identity-preserving enhancement, and Real-ESRGAN (Wang et al., 2021) for 4x super-resolution upscaling on the entire image. Both papers are published academic work cited widely in image-restoration research, and both models are also used across other commercial photo restoration pipelines — the underlying AI quality between most consumer tools is more similar than marketing implies. ArtImageHub's differentiator is the integrated workflow (scratch repair, fade correction, colorization, upscaling, face enhancement all in one pass), the pay-once pricing model, and the email-tied access that lets you come back later without re-paying. Optional colorization uses a separate auto-colorization pass when enabled at upload time." },
];

function buildHowToSchema(steps: readonly HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Restore Old Photos Online with AI",
    description: "Restore old, damaged, or faded family photos with AI in 3 steps. Results in 30–90 seconds.",
    totalTime: "PT2M",
    tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Restoration" }],
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  };
}

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

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Old Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    description:
      "One-time payment. Unlocks upload, AI processing, and HD original download.",
  },
};

const testimonials = [
  {
    name: "Margaret K.",
    location: "Ohio",
    text: "My grandmother's 1943 wedding photo was barely visible — yellowed and cracked. After restoration, I could see her face clearly for the first time. I cried when I saw it.",
    rating: 5,
    avatar: "M",
  },
  {
    name: "David R.",
    location: "Texas",
    text: "Restored my grandfather's WWII service photo. The scratch across his face is gone. Quality is incredible for $4.99. Printed it at 8×10 and it looks perfect.",
    rating: 5,
    avatar: "D",
  },
  {
    name: "Susan T.",
    location: "California",
    text: "Used it for a whole box of 1960s–70s family photos. Every single one came back sharp and clear. This is the easiest photo restoration tool I've found.",
    rating: 5,
    avatar: "S",
  },
];

export default async function LocaleOldPhotoRestorationPage({ params }: Props) {
  const { locale } = await params;
  const d = getLocaleSEO(locale)?.oldPhotoRestoration;

  const h1 = d?.h1 ?? "Old Photo Restoration";
  const subtitle = d?.subtitle ?? "AI fixes scratches, fading, blur, and water damage on old family photos. One-time $4.99 unlocks upload, processing, and HD download.";
  const badge = d?.badge ?? "Pay Once · No Subscription";

  const faqItems = d?.faqItems ?? DEFAULT_FAQ_ITEMS;
  const howToSchema = buildHowToSchema(d?.howToSteps ?? DEFAULT_HOW_TO_STEPS);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
              { icon: "✓", text: "12,400+ photos restored" },
              { icon: "✓", text: "4.8★ average rating" },
              { icon: "✓", text: "Results in 30–90 seconds" },
            ].map((badge) => (
              <span key={badge.text} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-[#d2d2d7]/70 bg-[#faf8f4] px-5 py-4 text-left shadow-sm">
            <div className="grid gap-2 text-[13px] text-[#6e6e73] sm:grid-cols-3">
              <p>One-time $4.99 payment. No subscription required.</p>
              <p>Uploads encrypted and deleted within 24 hours.</p>
              <p>Supports JPG, PNG, and WEBP up to 20 MB.</p>
            </div>
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
          <RestoreClient landingPage={`/${locale}/old-photo-restoration`} />
        </Suspense>
      </div>

      {/* 30-Day Guarantee + Trust */}
      <div className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-8">
        <div className="mx-auto max-w-3xl px-5">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg
                className="h-8 w-8 shrink-0 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">
                  30-Day Guarantee
                </p>
                <p className="text-[12px] text-[#6e6e73]">
                  Full refund, no questions asked
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg
                className="h-8 w-8 shrink-0 text-[#0071e3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">
                  Secure & Private
                </p>
                <p className="text-[12px] text-[#6e6e73]">
                  Photos deleted in 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg
                className="h-8 w-8 shrink-0 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">
                  4.8★ Rated
                </p>
                <p className="text-[12px] text-[#6e6e73]">
                  12,400+ photos restored
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProofSampleGallery
        className="bg-white py-8 sm:py-10"
        title="Before & After Examples"
        description="See the kind of restoration results customers get — from faded family portraits to water-damaged prints."
      />

      {/* Testimonials */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-10">
            What Customers Are Saying
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white border border-[#d2d2d7]/60 p-6"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0071e3] text-white font-bold text-[14px]">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">
                      {t.name}
                    </p>
                    <p className="text-[12px] text-[#6e6e73]">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA landingPage={`/${locale}/old-photo-restoration`} />

      {/* How It Works */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Photo Restoration Works
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Three steps. One-time payment. Your memories restored in under two
              minutes.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pay once to unlock",
                desc: "$4.99 one-time payment unlocks upload and processing access on your email. No subscription.",
              },
              {
                step: "2",
                title: "Upload your photo",
                desc: "Return to the tool with the same email and upload your old, faded, scratched, or damaged photo.",
              },
              {
                step: "3",
                title: "Download your HD restore",
                desc: "AI repairs scratches, fading, blur, and damage. Results in 30–90 seconds. Your paid email unlocks HD download.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0071e3] text-white font-bold text-[18px]">
                  {item.step}
                </div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What Can AI Photo Restoration Fix?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              From minor fading to severe physical damage — our AI handles the
              full range of photo restoration challenges.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Scratches and tears",
                desc: "Physical damage from handling, storage, or accidents. AI identifies and removes scratch patterns while preserving underlying detail.",
              },
              {
                title: "Fading and discoloration",
                desc: "Chemical degradation causes photos to fade, yellow, or shift color over decades. AI corrects tonal and color changes caused by aging.",
              },
              {
                title: "Blurry faces",
                desc: "Old camera technology often produced soft or out-of-focus faces. Dedicated face enhancement models reconstruct detail and sharpness.",
              },
              {
                title: "Low resolution",
                desc: "Old photos scan at low resolution. AI super-resolution upscales up to 4× original size with convincing, natural-looking detail.",
              },
              {
                title: "Water damage",
                desc: "Water stains and flood damage create distinctive patterns. AI can significantly reduce or eliminate water damage artifacts.",
              },
              {
                title: "Black and white photos",
                desc: "Colorization uses AI trained on historical photos to add natural, realistic color to black and white images.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d2d2d7]/60 bg-white p-6"
              >
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-[#d2d2d7]/60 bg-white p-6"
              >
                <dt className="text-[16px] font-semibold text-[#1d1d1f] mb-2">
                  {item.q}
                </dt>
                <dd className="text-[15px] text-[#6e6e73] leading-[1.65]">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related Reading */}
      <section className="py-16 sm:py-20 border-t border-[#d2d2d7]/40 bg-[#faf8f4]">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-8 text-center">
            Learn More About Photo Restoration
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                href: "/blog/how-ai-photo-restoration-works",
                title: "How AI Photo Restoration Works",
                desc: "The technology behind the magic — explained for non-experts.",
              },
              {
                href: "/blog/old-photo-restoration-guide",
                title: "Complete Photo Restoration Guide",
                desc: "Everything you need to know before you start restoring family photos.",
              },
              {
                href: "/blog/preserving-old-photos",
                title: "How to Preserve Old Photos",
                desc: "Stop damage before it starts with these proven preservation techniques.",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block rounded-xl border border-[#d2d2d7]/60 bg-white p-6 hover:border-[#0071e3]/40 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  {link.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
