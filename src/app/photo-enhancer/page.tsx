import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import EnhanceClient from "./enhance-client";

export const metadata: Metadata = {
  title: "AI Photo Enhancer Free: Enhance Photo Quality Online in Seconds",
  description:
    "Best free AI photo enhancer to improve photo quality online. Fix blurry photos, 4x upscale resolution, enhance faces. No signup, instant results in 30 seconds.",
  alternates: {
    canonical: "/photo-enhancer",
    languages: {
      "x-default": "/photo-enhancer",
      en: "/photo-enhancer",
      es: "/es/photo-enhancer",
      "pt-BR": "/pt-BR/photo-enhancer",
      fr: "/fr/photo-enhancer",
      de: "/de/photo-enhancer",
      ja: "/ja/photo-enhancer",
      ko: "/ko/photo-enhancer",
    },
  },
  keywords: [
    "AI photo enhancer",
    "photo enhancer free",
    "enhance photo quality",
    "AI photo enhancement",
    "improve photo quality online",
    "photo quality enhancer",
    "AI image enhancer free",
    "enhance image quality",
    "photo upscaler",
  ],
  openGraph: {
    title: "AI Photo Enhancer — Enhance Photo Quality Free Online",
    description:
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
    title: "AI Photo Enhancer Free — Improve Photo Quality Online",
    description:
      "Best AI photo enhancer. Improve quality, fix blur, 4x upscale. Free online, instant results.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Enhance Photo Quality with AI",
  description: "Improve photo quality and fix blurry photos using AI photo enhancement — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Enhancer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo",
      text: "Click the upload area and select any photo you want to enhance. Works with selfies, old photos, product images, or any picture. Supported formats: JPG, PNG, WEBP up to 20MB.",
      image: "https://artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes the photo",
      text: "Our AI model analyzes the image quality, detects faces, and identifies areas that need enhancement. It applies face enhancement, super resolution, and quality improvements automatically.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for processing",
      text: "The AI enhances your photo with face-aware processing and 4× super resolution. Most enhancements complete in 15–30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your enhanced photo",
      text: "Preview the before/after result and download your enhanced photo in high resolution. Free users get a watermarked preview; HD original download is $4.99 one-time.",
      image: "https://artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is AI photo enhancement free?", acceptedAnswer: { "@type": "Answer", text: "Yes — ArtImageHub lets you enhance and preview your photo for free, no account or credit card required. If you want the HD original without a watermark, the download is a one-time $4.99 payment." } },
    { "@type": "Question", name: "What does AI photo enhancement do?", acceptedAnswer: { "@type": "Answer", text: "AI photo enhancement applies four operations automatically: (1) Face enhancement using GFPGAN (Wang et al., Tencent ARC Lab, 2021) reconstructs facial detail — sharpening eyes, skin, and features. (2) Super-resolution using Real-ESRGAN (Wang et al., 2021) upscales up to 4× original size. (3) Noise reduction removes grain and compression artifacts. (4) Color correction improves contrast and vibrancy. All run in a single processing pass." } },
    { "@type": "Question", name: "What AI models power the photo enhancer?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub uses Real-ESRGAN (Wang et al., 2021) for 4× super-resolution upscaling and GFPGAN (Wang et al., Tencent ARC Lab, 2021) for face-specific reconstruction. Both are peer-reviewed, open-source models. For face-forward photos, both models run in the same processing pass." } },
    { "@type": "Question", name: "How much does super-resolution upscaling improve image size?", acceptedAnswer: { "@type": "Answer", text: "Real-ESRGAN upscales up to 4× original dimensions. A 500×500px photo becomes 2000×2000px. The model uses learned detail patterns rather than pixel interpolation, producing sharp output rather than blurry enlargement. A 300 DPI scan at 4×4 inches can become print-quality at 8×8 inches after upscaling." } },
    { "@type": "Question", name: "Can AI fix blurry photos?", acceptedAnswer: { "@type": "Answer", text: "AI photo enhancement significantly improves slightly blurry photos. For motion blur and soft focus on portrait photos, GFPGAN restores face sharpness well. Extreme blur (heavily out-of-focus or severely motion-blurred landscapes) cannot be fully recovered — AI works best when some detail remains in the original." } },
    { "@type": "Question", name: "What image formats are supported?", acceptedAnswer: { "@type": "Answer", text: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. Works with any photo: old photos, selfies, portraits, product images, landscapes, and more." } },
    { "@type": "Question", name: "How long does enhancement take?", acceptedAnswer: { "@type": "Answer", text: "Most photos are enhanced in 15–30 seconds. Very large or complex images may take up to 60 seconds." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Enhancer",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://artimagehub.com/photo-enhancer",
  description: "AI-powered photo enhancement tool that improves photo quality, fixes blurry photos, and enhances resolution in seconds. Free online tool for enhancing selfies, old photos, product images, and any picture.",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "AI Photo Quality Enhancement",
    "Face-Aware Enhancement",
    "4× Super Resolution Upscaling",
    "Automatic Noise Reduction",
    "Color Correction",
    "Instant Results in 30 Seconds",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://artimagehub.com/" },
    { "@type": "ListItem", position: 2, name: "Photo Enhancer", item: "https://artimagehub.com/photo-enhancer" },
  ],
};

export default function PhotoEnhancerPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3] shadow-[0_0_5px_rgba(0,113,227,0.5)]" />
            Free AI Enhancement
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Enhance Photo Quality with AI
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Upload any photo and let AI improve quality instantly. Fix blurry images, enhance faces, upscale resolution — free.
          </p>
        </div>
      </div>

      <Suspense fallback={<div className="min-h-[400px]" />}>
        <EnhanceClient />
      </Suspense>

      {/* ─── GEO: What Is AI Photo Enhancement ─── */}
      <section className="border-t border-[#d2d2d7]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6 text-center">
            What Is AI Photo Enhancement?
          </h2>
          <p className="text-[16px] text-[#444] leading-[1.7] mb-5">
            AI photo enhancement applies machine learning models to improve the technical quality of a photograph — automatically, without manual editing. It covers four operations: (1) face-aware reconstruction using <strong>GFPGAN</strong> (Wang et al., Tencent ARC Lab, 2021), which sharpens facial detail while preserving identity; (2) super-resolution upscaling up to 4× using <strong>Real-ESRGAN</strong> (Wang et al., 2021); (3) automatic noise reduction; and (4) contrast and color correction.
          </p>
          <p className="text-[16px] text-[#444] leading-[1.7] mb-5">
            ArtImageHub&rsquo;s Photo Enhancer runs this full pipeline in a single upload pass — no manual step selection required. Processing takes 15–30 seconds. Free to preview; HD download without watermark is a one-time $4.99 payment.
          </p>
          <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
            <strong>Resolution output:</strong> Real-ESRGAN upscales up to 4× original dimensions. A 500×500px photo becomes 2000×2000px using learned detail patterns rather than pixel interpolation — producing sharp output rather than blurry enlargement. A 300 DPI scan at 4×4 inches can become print-ready at 8×8 inches after upscaling.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-[#1d1d1f] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: "Is AI photo enhancement free?",
                a: "Yes — ArtImageHub lets you enhance and preview your photo for free, no account or credit card required. If you want the HD original without a watermark, the download is a one-time $4.99 payment.",
              },
              {
                q: "What does AI photo enhancement do?",
                a: "AI photo enhancement applies four operations automatically: (1) Face enhancement using GFPGAN reconstructs facial detail. (2) Super-resolution using Real-ESRGAN upscales up to 4× original size. (3) Noise reduction removes grain and compression artifacts. (4) Color correction improves contrast and vibrancy. All run in a single processing pass.",
              },
              {
                q: "What AI models power the photo enhancer?",
                a: "ArtImageHub uses Real-ESRGAN (Wang et al., 2021) for 4× super-resolution upscaling and GFPGAN (Wang et al., Tencent ARC Lab, 2021) for face-specific reconstruction. Both are peer-reviewed, open-source models that run together in a single processing pass for face-forward photos.",
              },
              {
                q: "How much does super-resolution upscaling improve image size?",
                a: "Real-ESRGAN upscales up to 4× original dimensions — a 500×500px photo becomes 2000×2000px. The model uses learned detail patterns rather than pixel interpolation, so output looks sharp rather than blurry when enlarged. A 300 DPI scan at 4×4 inches can become print-ready at 8×8 inches.",
              },
              {
                q: "Can AI fix blurry photos?",
                a: "AI enhancement significantly improves slightly blurry photos. For motion blur and soft focus on portrait photos, GFPGAN restores face sharpness well. Extreme blur (heavily out-of-focus or severely motion-blurred images) cannot be fully recovered — AI works best when some detail remains in the original.",
              },
              {
                q: "What image formats are supported?",
                a: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. Works with any photo: old photos, selfies, portraits, product images, and landscapes.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-[#d2d2d7]/60 bg-white p-6">
                <dt className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.q}</dt>
                <dd className="text-[15px] text-[#6e6e73] leading-[1.65]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── See How We Compare ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-[#1d1d1f]">
              See How We Compare
            </h2>
            <p className="mt-3 text-[15px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Looking at other AI enhancers and upscalers? Here&rsquo;s how ArtImageHub stacks up on quality, speed, and price.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: "remini", label: "vs Remini", desc: "Face-restore mobile app vs full-photo enhancement." },
              { slug: "topaz-gigapixel", label: "vs Topaz Gigapixel", desc: "Pro upscaling suite vs one-click web tool." },
              { slug: "vanceai", label: "vs VanceAI", desc: "Modular AI editor vs streamlined enhancement workflow." },
              { slug: "lets-enhance", label: "vs Let’s Enhance", desc: "Subscription upscaler vs one-time-payment enhancer." },
              { slug: "picwish", label: "vs PicWish", desc: "All-purpose AI editor vs focused photo enhancer." },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/blog/artimagehub-vs-${item.slug}`}
                className="group block rounded-xl border border-[#d2d2d7]/60 bg-white p-5 hover:border-[#0071e3]/40 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-1.5">
                  {item.label}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.55] mb-2">
                  {item.desc}
                </p>
                <span className="text-[12px] font-medium text-[#0071e3] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Read <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] text-[#6e6e73]">
            <Link href="/blog?category=comparisons" className="text-[#0071e3] hover:underline">
              See all ArtImageHub comparisons →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
