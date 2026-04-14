import type { Metadata } from "next";
import EnhanceClient from "./enhance-client";

export const metadata: Metadata = {
  title: "AI Photo Enhancer — Sharpen Faces & Upscale 4x Online (2026)",
  description:
    "Enhance blurry or low-quality photos with AI. Face sharpening, 4x upscaling, noise reduction in 30 seconds. $4.99 one-time — no subscription, no watermark.",
  alternates: { canonical: "/photo-enhancer" },
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
    title: "AI Photo Enhancer | Enhance Photo Quality with AI | ArtImageHub",
    description:
      "Enhance blurry, low-quality, or faded photos with AI. One-time $4.99 payment. Sharper faces, 4× upscaling, noise reduction. Results in 30–90 seconds.",
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
    title: "AI Photo Enhancer | Enhance Photo Quality with AI | ArtImageHub",
    description:
      "Enhance blurry, low-quality, or faded photos with AI. One-time $4.99 payment. Sharper faces, 4× upscaling, noise reduction. Results in 30–90 seconds.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Enhance Photo Quality with AI",
  description: "Enhance blurry, low-quality, or faded photos with AI. One-time $4.99 payment. Sharper faces, 4× upscaling, noise reduction. Results in 30–90 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Enhancer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Unlock enhancement access",
      text: "One-time $4.99 payment unlocks upload and enhancement access on your email. No subscription.",
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
      name: "Start processing",
      text: "AI enhances your photo in 30–90 seconds — face sharpening, super-resolution, and color correction in one pass.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download if processing succeeds",
      text: "Your paid email unlocks the HD enhanced download. Compare before/after and save your improved photo.",
      image: "https://artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need paid access before enhancement?", acceptedAnswer: { "@type": "Answer", text: "Yes. A one-time $4.99 payment unlocks upload and processing access on your email. No subscription. Return to the tool with the same email to upload and enhance your photo." } },
    { "@type": "Question", name: "What does AI photo enhancement do?", acceptedAnswer: { "@type": "Answer", text: "AI photo enhancement improves photo quality in multiple ways: (1) Face enhancement detects and sharpens faces, fixing eyes, skin, and facial details. (2) Super resolution upscales images 4× without losing quality. (3) Noise reduction removes grain and artifacts. (4) Color correction improves contrast and vibrancy. All automatically in one click." } },
    { "@type": "Question", name: "Can AI fix blurry photos?", acceptedAnswer: { "@type": "Answer", text: "Yes, to an extent. AI photo enhancement can significantly improve slightly blurry photos by sharpening details and applying super resolution. However, extremely blurry or out-of-focus photos cannot be fully recovered — AI predictions work best when some detail remains in the original image." } },
    { "@type": "Question", name: "What image formats are supported?", acceptedAnswer: { "@type": "Answer", text: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. Works with any photo: old photos, selfies, portraits, product images, landscapes, and more." } },
    { "@type": "Question", name: "How long does enhancement take?", acceptedAnswer: { "@type": "Answer", text: "Most photos are enhanced in 30–90 seconds. Complex images with many faces or high-resolution uploads may take up to 3 minutes. The AI applies face sharpening, super-resolution, and color correction in a single pass." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Enhancer",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://artimagehub.com/photo-enhancer",
  description: "Enhance blurry, low-quality, or faded photos with AI. One-time $4.99 payment. Sharper faces, 4× upscaling, noise reduction. Results in 30–90 seconds.",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2400",
  },
  featureList: [
    "AI Photo Quality Enhancement",
    "Face-Aware Enhancement",
    "4× Super Resolution Upscaling",
    "Automatic Noise Reduction",
    "Color Correction",
    "Paid Access Before Upload",
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

      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3] shadow-[0_0_5px_rgba(0,113,227,0.5)]" />
            Paid Access Before Enhancement
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            AI Photo Enhancer
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Unlock paid access on this email, then upload your photo for enhancement, sharpening, and upscale. Best for blur, low resolution, and weak detail.
          </p>
        </div>
      </div>

      <EnhanceClient />
    </div>
  );
}
