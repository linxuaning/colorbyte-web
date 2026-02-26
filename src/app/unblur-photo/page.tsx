import type { Metadata } from "next";
import Link from "next/link";
import EnhanceClient from "../photo-enhancer/enhance-client";

export const metadata: Metadata = {
  title: "Unblur Photo Free Online | AI Fix Blurry Photos Instantly",
  description:
    "Unblur photos free online with AI. Fix blurry pictures, sharpen images, and restore clarity in 30 seconds. No signup required. Works on selfies, old photos, and any blurry image.",
  alternates: { canonical: "/unblur-photo" },
  keywords: [
    "unblur photo",
    "fix blurry photos",
    "unblur image free",
    "fix blurry pictures online",
    "sharpen blurry image",
    "deblur photo",
    "make blurry picture clear",
    "AI unblur",
  ],
  openGraph: {
    title: "Unblur Photo Free Online — Fix Blurry Photos with AI",
    description:
      "Fix blurry photos instantly with AI. Unblur images, sharpen pictures, restore clarity. Free online tool.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Blurry photo before and after AI unblur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unblur Photo Free Online — AI Fix Blurry Photos",
    description:
      "Fix blurry photos with AI. Unblur images, sharpen pictures, restore clarity in seconds. Free, no signup.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Unblur Photos Online Free",
  description:
    "Fix blurry photos and sharpen images using AI — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Unblur Tool" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your blurry photo",
      text: "Click the upload area or drag and drop your blurry photo. Works with any image: selfies, old photos, screenshots, or any blurry picture. Supports JPG, PNG, WEBP up to 20MB.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes and fixes blur",
      text: "Our AI detects blur patterns, identifies faces and objects, and applies intelligent sharpening. The deep learning model restores detail that appears lost in blurry images.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for processing",
      text: "The AI processes your photo with face-aware enhancement and super resolution upscaling to fix blur and restore clarity. Most images are unblurred in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your clear photo",
      text: "Preview the before/after comparison and download your unblurred photo. Free users get 3 downloads per day at 720p. Pro Lifetime offers unlimited downloads at original resolution.",
      image: "https://www.artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really fix blurry photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI can significantly improve many blurry photos. Our AI uses deep learning trained on millions of images to intelligently predict and restore detail that appears lost. It works best on slightly to moderately blurry images where some detail remains. Extremely blurry or completely out-of-focus photos may see limited improvement, as there's less information for AI to work with.",
      },
    },
    {
      "@type": "Question",
      name: "Is the photo unblur tool free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ArtImageHub offers 3 free photo unblurs per day with no account required. Free downloads are 720p resolution. For unlimited unblurring at original resolution, Pro Lifetime costs $4.99 one-time (not a subscription).",
      },
    },
    {
      "@type": "Question",
      name: "What types of blur can AI fix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI works best on: (1) Motion blur from camera shake or moving subjects, (2) Soft focus from improper focusing, (3) Compression blur from low-quality images or heavy JPEG compression, (4) Old photo blur from deterioration or poor scanning. Severe optical blur from extremely out-of-focus shots is harder to fix, as less original detail exists.",
      },
    },
    {
      "@type": "Question",
      name: "Will unblurring change my photo's colors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI preserves your photo's original colors while fixing blur. It focuses on restoring sharpness and detail without altering color balance. However, some slight color enhancement may occur as part of overall quality improvement.",
      },
    },
    {
      "@type": "Question",
      name: "Can I unblur faces in photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our AI includes face-aware enhancement that specifically detects and enhances facial features. Blurry faces are sharpened with attention to eyes, skin texture, and facial structure. This works especially well for portraits, group photos, and selfies where faces are the main subject.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Photo Unblur Tool",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/unblur-photo",
  description:
    "Free AI-powered photo unblur tool that fixes blurry pictures, sharpens images, and restores clarity in 30 seconds. Works on selfies, old photos, and any blurry image. No signup required.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    description: "Free tier: 3 photos per day at 720p",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2400",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI Photo Unblur (3 free/day)",
    "Fix Motion Blur",
    "Fix Soft Focus",
    "Face-Aware Sharpening",
    "4× Super Resolution",
    "30-Second Processing",
  ],
};

export default function UnblurPhotoPage() {
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

      {/* Hero Section - SEO Optimized for "unblur photo" / "fix blurry photos" */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            Free — No Signup Required
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Unblur Photo Free Online
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-lg mx-auto">
            Fix blurry photos instantly with AI. Upload any blurry picture and
            get a clear, sharp image in 30 seconds. No account needed.
          </p>
        </div>
      </div>

      {/* Tool Component */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <EnhanceClient />
      </div>

      {/* SEO Content Section */}
      <div className="border-t border-[#d2d2d7]/40 bg-[#f5f5f7]">
        <div className="mx-auto max-w-4xl px-5 py-16">
          {/* Types of Blur Section */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              What Types of Blur Can AI Fix?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Motion Blur",
                  desc: "Camera shake or moving subjects create motion blur. AI analyzes blur patterns and reconstructs sharp detail, making shaky photos clear again.",
                  works: "Works well",
                },
                {
                  title: "Soft Focus",
                  desc: "When the camera focuses on the wrong area, subjects appear soft. AI sharpens focal areas and enhances edge definition for clearer results.",
                  works: "Works well",
                },
                {
                  title: "Compression Blur",
                  desc: "Low-quality JPEGs or heavily compressed images lose detail. AI upscaling and enhancement recovers sharpness lost to compression artifacts.",
                  works: "Works well",
                },
                {
                  title: "Severe Out-of-Focus",
                  desc: "Extremely out-of-focus photos where subjects are unrecognizable have limited recovery potential. AI can improve but not fully restore them.",
                  works: "Limited improvement",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-6 border border-[#d2d2d7]/40"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[17px] font-semibold text-[#1d1d1f]">
                      {item.title}
                    </h3>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                        item.works === "Works well"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.works}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How AI Unblur Works */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              How AI Unblurs Your Photos
            </h2>
            <div className="rounded-xl bg-white p-8 border border-[#d2d2d7]/40">
              <p className="text-[15px] text-[#6e6e73] leading-[1.8] mb-4">
                Our AI uses advanced deep learning to fix blurry photos through
                multiple techniques:
              </p>
              <ul className="space-y-3 text-[15px] text-[#6e6e73] leading-[1.6]">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Blur Pattern Analysis:
                    </strong>{" "}
                    The AI identifies what type of blur affects your image—motion,
                    soft focus, or compression—and applies targeted fixes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Face-Aware Enhancement:
                    </strong>{" "}
                    Faces are detected and enhanced with special attention to
                    eyes, skin texture, and facial features for natural-looking
                    results.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Super Resolution Upscaling:
                    </strong>{" "}
                    4× upscaling adds detail that appears lost in the original,
                    making small or low-resolution photos sharp and printable.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Intelligent Sharpening:
                    </strong>{" "}
                    Unlike basic sharpening filters that add noise, AI
                    selectively enhances edges and textures while preserving
                    smooth areas.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Common Uses for Photo Unblurring
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Old Family Photos",
                  desc: "Restore clarity to faded, scanned photos from decades past.",
                },
                {
                  title: "Blurry Selfies",
                  desc: "Fix selfies ruined by camera shake or poor lighting.",
                },
                {
                  title: "Screenshot Enhancement",
                  desc: "Sharpen low-quality screenshots and screen captures.",
                },
                {
                  title: "Social Media Photos",
                  desc: "Improve compressed photos downloaded from social platforms.",
                },
                {
                  title: "Group Photos",
                  desc: "Enhance group shots where someone moved during capture.",
                },
                {
                  title: "Product Images",
                  desc: "Sharpen product photos for better e-commerce listings.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-5 border border-[#d2d2d7]/40"
                >
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools Section */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Related Photo Tools
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/ai-photo-upscaler"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  AI Photo Upscaler
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  After unblurring, upscale to 4K for large prints without quality loss.
                </p>
              </Link>
              <Link
                href="/enhance-old-photos"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Enhance Old Photos
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Full enhancement for vintage photos: sharpen, restore faces, fix fading.
                </p>
              </Link>
              <Link
                href="/restore-old-family-photos"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Restore Family Photos
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Complete restoration for damaged family photos including scratch and tear repair.
                </p>
              </Link>
              <Link
                href="/colorize-photos-free"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Colorize Photos Free
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Add color to black and white photos with AI colorization.
                </p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can AI really fix blurry photos?",
                  a: "Yes, AI can significantly improve many blurry photos by intelligently predicting and restoring detail. It works best on slightly to moderately blurry images. Extremely blurry photos see limited improvement as there's less information for AI to work with.",
                },
                {
                  q: "Is the photo unblur tool free?",
                  a: "Yes! ArtImageHub offers 3 free photo unblurs per day with no account required. Free downloads are 720p resolution. Pro Lifetime ($4.99 one-time) offers unlimited unblurring at original resolution.",
                },
                {
                  q: "What types of blur can AI fix?",
                  a: "AI works best on motion blur (camera shake), soft focus, and compression blur. Severe out-of-focus blur is harder to fix as less original detail exists to work with.",
                },
                {
                  q: "Can I unblur faces in photos?",
                  a: "Yes! Our AI includes face-aware enhancement that detects and specifically enhances facial features. Blurry faces are sharpened with attention to eyes, skin texture, and facial structure.",
                },
                {
                  q: "How long does unblurring take?",
                  a: "Most photos are unblurred in 15-30 seconds. Very large images may take up to 60 seconds.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl bg-white border border-[#d2d2d7]/40 overflow-hidden"
                >
                  <summary className="cursor-pointer px-6 py-4 text-[16px] font-semibold text-[#1d1d1f] flex items-center justify-between">
                    {item.q}
                    <span className="text-[#6e6e73] group-open:rotate-180 transition-transform">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-[14px] text-[#6e6e73] leading-[1.7]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
