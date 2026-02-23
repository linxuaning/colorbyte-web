import type { Metadata } from "next";
import EnhanceClient from "./enhance-client";

export const metadata: Metadata = {
  title: "AI Photo Enhancer — Enhance Photo Quality Free Online",
  description:
    "Enhance photo quality instantly with AI. Fix blurry photos, improve resolution, and restore old pictures. Free online photo enhancement tool, no signup required.",
  alternates: { canonical: "/photo-enhancer" },
  keywords: ["photo enhancer", "enhance photo quality", "AI photo enhancement", "improve photo quality", "photo quality enhancer online"],
  openGraph: {
    title: "AI Photo Enhancer Free — ArtImageHub",
    description: "Enhance photo quality instantly with AI. Fix blurry photos, improve resolution. Free, no signup.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Photo enhancement before and after" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Photo Enhancer — Free Photo Quality Enhancement",
    description: "Enhance photo quality with AI. Fix blurry photos, improve resolution. Free, instant results.",
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
      image: "https://www.artimagehub.com/blog/before-1.jpg",
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
      text: "Preview the before/after result and download your enhanced photo in high resolution. Free users get 720p; Pro users get original resolution.",
      image: "https://www.artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is AI photo enhancement free?", acceptedAnswer: { "@type": "Answer", text: "Yes — ArtImageHub offers a free trial with 3 photos to test the AI enhancement quality, no account or credit card required. Pro Lifetime is a one-time payment of $29.9 for unlimited enhancements in original resolution with no watermark, lifetime access." } },
    { "@type": "Question", name: "What does AI photo enhancement do?", acceptedAnswer: { "@type": "Answer", text: "AI photo enhancement improves photo quality in multiple ways: (1) Face enhancement detects and sharpens faces, fixing eyes, skin, and facial details. (2) Super resolution upscales images 4× without losing quality. (3) Noise reduction removes grain and artifacts. (4) Color correction improves contrast and vibrancy. All automatically in one click." } },
    { "@type": "Question", name: "Can AI fix blurry photos?", acceptedAnswer: { "@type": "Answer", text: "Yes, to an extent. AI photo enhancement can significantly improve slightly blurry photos by sharpening details and applying super resolution. However, extremely blurry or out-of-focus photos cannot be fully recovered — AI predictions work best when some detail remains in the original image." } },
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
  url: "https://www.artimagehub.com/photo-enhancer",
  description: "AI-powered photo enhancement tool that improves photo quality, fixes blurry photos, and enhances resolution in seconds. Free online tool for enhancing selfies, old photos, product images, and any picture.",
  offers: {
    "@type": "Offer",
    price: "29.9",
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
    "Instant Results in 30 Seconds",
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

      <EnhanceClient />
    </div>
  );
}
