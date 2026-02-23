import type { Metadata } from "next";
import ColorizeClient from "./colorize-client";

export const metadata: Metadata = {
  title: "Photo Colorizer: Colorize Black and White Photos with AI Free",
  description:
    "Best AI photo colorizer to colorize black and white photos online free. Turn old family photos, historical images into vivid color in 30 seconds. No signup, instant results.",
  alternates: { canonical: "/photo-colorizer" },
  keywords: [
    "photo colorizer",
    "colorize black and white photos",
    "AI photo colorization",
    "black and white to color",
    "colorize old photos",
    "photo colorizer online free",
    "AI colorizer",
    "old photo colorizer",
  ],
  openGraph: {
    title: "Photo Colorizer — Colorize Black & White Photos Free Online",
    description:
      "Best AI photo colorizer. Turn black and white photos into vivid color instantly. Free, no signup required.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Photo colorizer before and after - black and white to color",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Colorizer — Colorize Black & White Photos Free",
    description:
      "Best AI photo colorizer. Turn black and white photos into color instantly. Free online tool.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Colorize Black and White Photos with AI",
  description: "Add realistic colors to black and white photos using AI colorization — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Colorizer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your black and white photo",
      text: "Click the upload area and select your black and white or grayscale photo. Supported formats: JPG, PNG, WEBP up to 20MB.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes the photo",
      text: "Our AI model analyzes the image content, identifies objects, faces, landscapes, and predicts realistic colors based on patterns learned from millions of color photos.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for colorization",
      text: "The AI processes your photo and applies natural-looking colors. Most colorizations complete in 15–30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your colorized photo",
      text: "Preview the before/after result and download your colorized photo in high resolution. Free users get 720p; Pro users get original resolution.",
      image: "https://www.artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is AI photo colorization free?", acceptedAnswer: { "@type": "Answer", text: "Yes — ArtImageHub offers a free trial with 3 photos to test the AI colorization quality, no account or credit card required. Pro Lifetime is a one-time payment of $29.9 for unlimited colorizations in original resolution with no watermark, lifetime access." } },
    { "@type": "Question", name: "How accurate is AI photo colorization?", acceptedAnswer: { "@type": "Answer", text: "AI colorization predicts colors based on patterns learned from millions of photos. While it's often very accurate for common objects (sky=blue, grass=green), it guesses colors for specific items like clothing or eyes. Results are artistic interpretation, not historical fact. For best accuracy, AI works well on clear photos with recognizable subjects." } },
    { "@type": "Question", name: "What image formats are supported?", acceptedAnswer: { "@type": "Answer", text: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. Both grayscale and black & white photos work. For best results, use high-resolution scans (600 DPI or higher)." } },
    { "@type": "Question", name: "How long does colorization take?", acceptedAnswer: { "@type": "Answer", text: "Most photos are colorized in 15–30 seconds. Very large or complex images may take up to 60 seconds." } },
    { "@type": "Question", name: "Can I colorize old family photos?", acceptedAnswer: { "@type": "Answer", text: "Yes! ArtImageHub is perfect for colorizing old family photos, vintage pictures, historical images, and any black & white photographs. The AI works well on portraits, landscapes, and everyday scenes from any era." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Colorizer",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/photo-colorizer",
  description: "AI-powered photo colorization tool that adds realistic colors to black and white photos in seconds. Free online tool for colorizing old family photos, historical images, and vintage pictures.",
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
    "AI Colorization of Black & White Photos",
    "Realistic Color Prediction",
    "Face-Aware Colorization",
    "High Resolution Output",
    "Instant Results in 30 Seconds",
  ],
};

export default function PhotoColorizerPage() {
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
            Free AI Colorization
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Turn Black & White Photos into Color
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Upload your photo and let AI add realistic colors in seconds. Perfect for old family photos, historical images, and vintage pictures — free.
          </p>
        </div>
      </div>

      <ColorizeClient />
    </div>
  );
}
