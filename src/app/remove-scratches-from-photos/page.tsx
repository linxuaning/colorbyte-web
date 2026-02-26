import type { Metadata } from "next";
import Link from "next/link";
import RestoreClient from "../old-photo-restoration/restore-client";

export const metadata: Metadata = {
  title: "Remove Scratches from Photos Free | AI Photo Scratch Remover",
  description:
    "Remove scratches from old photos free with AI. Fix scratched pictures, repair damaged photographs, restore vintage prints. No signup, instant scratch removal in 30 seconds.",
  alternates: { canonical: "/remove-scratches-from-photos" },
  keywords: [
    "remove scratches from photos",
    "remove scratches from old photos",
    "photo scratch remover",
    "fix scratched photos",
    "AI scratch removal",
    "repair scratched pictures",
    "remove scratches from pictures free",
    "photo scratch repair",
  ],
  openGraph: {
    title: "Remove Scratches from Photos Free — AI Scratch Remover",
    description:
      "AI removes scratches from old photos instantly. Fix scratched pictures, repair damaged photographs free. No signup required.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Photo scratch removal before and after",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remove Scratches from Photos Free Online",
    description:
      "AI photo scratch remover. Fix scratched old photos, repair damaged pictures instantly. Free online tool.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Remove Scratches from Photos with AI",
  description:
    "Remove scratches and damage from old photographs using AI — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Photo Scratch Remover" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your scratched photo",
      text: "Click the upload area or drag and drop your scratched photograph. Works with scanned prints, old photos with surface damage, and vintage pictures with scratches. Supports JPG, PNG, WEBP up to 20MB.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI detects and removes scratches",
      text: "Our AI automatically detects scratches, scuffs, and surface damage across your entire photo. The deep learning model fills damaged areas with appropriate content based on surrounding pixels.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for processing",
      text: "The AI processes your photo, removing scratches while preserving important details. Most scratch removal completes in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your scratch-free photo",
      text: "Preview the before/after comparison to see scratches removed. Download your repaired photo—free users get 3 downloads per day at 720p resolution.",
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
      name: "Can AI really remove scratches from photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! AI scratch removal uses deep learning to detect scratches and intelligently fill them with appropriate content. The AI analyzes surrounding pixels to reconstruct damaged areas naturally. It works well on light to moderate scratches; very deep or wide scratches may show some artifacts.",
      },
    },
    {
      "@type": "Question",
      name: "Is the photo scratch remover free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ArtImageHub offers 3 free scratch removals per day with no account required. Free downloads are 720p resolution. For unlimited scratch removal at original resolution, Pro Lifetime costs $4.99 one-time (not a subscription).",
      },
    },
    {
      "@type": "Question",
      name: "What types of scratches can AI remove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI effectively removes surface scratches from handling, fine hairline scratches, scuff marks, light abrasions, and dust scratches from scanning. Deep gouges, tears, or missing sections may require additional manual editing for perfect results.",
      },
    },
    {
      "@type": "Question",
      name: "Will scratch removal affect photo quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI preserves photo quality while removing scratches. In fact, the combined face enhancement and super resolution often improves overall quality. The AI targets only damaged areas, leaving undamaged portions untouched.",
      },
    },
    {
      "@type": "Question",
      name: "Can I remove scratches from faces in photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our AI includes face-aware processing that carefully handles scratches across facial features. The face enhancement model ensures natural results when scratches cross eyes, skin, or other facial areas.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Photo Scratch Remover",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/remove-scratches-from-photos",
  description:
    "Free AI-powered photo scratch remover. Remove scratches from old photos, fix damaged pictures, repair vintage prints in 30 seconds. No signup required.",
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
    "AI Scratch Detection & Removal",
    "Surface Damage Repair",
    "Face-Aware Processing",
    "Free (3 photos/day)",
    "30-Second Processing",
    "Before/After Comparison",
  ],
};

export default function RemoveScratchesFromPhotosPage() {
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

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            Free — No Signup Required
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Remove Scratches from Photos Free
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-lg mx-auto">
            AI removes scratches from old photos instantly. Fix scratched
            pictures, repair surface damage, and restore vintage prints in 30
            seconds.
          </p>
        </div>
      </div>

      {/* Tool Component */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <RestoreClient />
      </div>

      {/* SEO Content Section */}
      <div className="border-t border-[#d2d2d7]/40 bg-[#f5f5f7]">
        <div className="mx-auto max-w-4xl px-5 py-16">
          {/* Types of Scratches */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              What Types of Scratches Can AI Remove?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  type: "Surface Scratches",
                  desc: "Light scratches from handling, storage, or everyday wear. These are the easiest for AI to remove completely.",
                  effectiveness: "Excellent",
                },
                {
                  type: "Hairline Scratches",
                  desc: "Fine, thin scratches often caused by dust during scanning or improper cleaning. AI fills these seamlessly.",
                  effectiveness: "Excellent",
                },
                {
                  type: "Scuff Marks",
                  desc: "Larger areas of surface abrasion from rubbing or sliding. AI reconstructs texture and detail.",
                  effectiveness: "Very Good",
                },
                {
                  type: "Deep Scratches",
                  desc: "Scratches that penetrate through the emulsion layer. AI fills but may show slight artifacts on very deep damage.",
                  effectiveness: "Good",
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className="rounded-xl bg-white p-6 border border-[#d2d2d7]/40"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[17px] font-semibold text-[#1d1d1f]">
                      {item.type}
                    </h3>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                        item.effectiveness === "Excellent"
                          ? "bg-green-100 text-green-700"
                          : item.effectiveness === "Very Good"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.effectiveness}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How AI Removes Scratches */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              How AI Removes Scratches from Photos
            </h2>
            <div className="rounded-xl bg-white p-8 border border-[#d2d2d7]/40">
              <p className="text-[15px] text-[#6e6e73] leading-[1.8] mb-4">
                Our AI uses advanced deep learning to detect and remove
                scratches:
              </p>
              <ul className="space-y-3 text-[15px] text-[#6e6e73] leading-[1.6]">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Scratch Detection:
                    </strong>{" "}
                    AI identifies scratches by analyzing contrast, texture, and
                    patterns that differ from natural photo content.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Content-Aware Fill:
                    </strong>{" "}
                    The AI analyzes surrounding pixels and generates appropriate
                    content to fill scratched areas naturally.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Face-Aware Processing:
                    </strong>{" "}
                    Special attention is given to scratches across faces,
                    ensuring natural facial feature restoration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">
                      Texture Matching:
                    </strong>{" "}
                    The AI matches texture and grain of the original photo, so
                    repaired areas blend seamlessly.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Tips for Best Scratch Removal Results
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  tip: "Scan at High Resolution",
                  desc: "600 DPI or higher captures scratch detail for better AI detection and removal.",
                },
                {
                  tip: "Clean Scanner Glass",
                  desc: "Dust on the scanner can add scratches to your scan. Clean glass before scanning.",
                },
                {
                  tip: "Use Color Mode",
                  desc: "Scan in color even for B&W photos—AI uses color information to detect scratches.",
                },
                {
                  tip: "Don't Over-Compress",
                  desc: "Save scans as high-quality JPG or PNG. Heavy compression hides scratch details.",
                },
              ].map((item) => (
                <div
                  key={item.tip}
                  className="rounded-xl bg-white p-5 border border-[#d2d2d7]/40"
                >
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1.5">
                    {item.tip}
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
                href="/restore-old-family-photos"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Restore Family Photos
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Complete restoration for old family photos including face enhancement.
                </p>
              </Link>
              <Link
                href="/fix-water-damaged-photos"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Fix Water Damage
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Repair water stains, mold damage, and moisture discoloration.
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
                  After scratch removal, enhance overall quality and sharpen details.
                </p>
              </Link>
              <Link
                href="/ai-photo-upscaler"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  AI Photo Upscaler
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Enlarge repaired photos to 4K for large prints without quality loss.
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
                  q: "Can AI really remove scratches from photos?",
                  a: "Yes! AI scratch removal uses deep learning to detect scratches and fill them with appropriate content. It works well on light to moderate scratches; very deep scratches may show some artifacts.",
                },
                {
                  q: "Is the photo scratch remover free?",
                  a: "Yes, 3 free scratch removals per day with no account. Free downloads are 720p. Pro Lifetime ($4.99 one-time) offers unlimited processing at original resolution.",
                },
                {
                  q: "What types of scratches can AI remove?",
                  a: "AI effectively removes surface scratches, hairline scratches, scuff marks, and light abrasions. Deep gouges or tears may require additional editing for perfect results.",
                },
                {
                  q: "Can I remove scratches from faces?",
                  a: "Yes! Face-aware processing carefully handles scratches across facial features, ensuring natural results when scratches cross eyes, skin, or other areas.",
                },
                {
                  q: "How long does scratch removal take?",
                  a: "Most photos are processed in 15-30 seconds. The AI analyzes the entire image and removes all detected scratches in one pass.",
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
