import type { Metadata } from "next";
import Link from "next/link";
import RestoreClient from "../old-photo-restoration/restore-client";

export const metadata: Metadata = {
  title: "Fix Water Damaged Photos Free | AI Photo Water Damage Repair",
  description:
    "Fix water damaged photos free with AI. Repair flood damaged pictures, remove water stains, restore photos damaged by moisture. No signup, instant results in 30 seconds.",
  alternates: { canonical: "/fix-water-damaged-photos" },
  keywords: [
    "fix water damaged photos",
    "water damaged photo repair",
    "restore water damaged pictures",
    "fix flood damaged photos",
    "remove water stains from photos",
    "water damage photo restoration",
    "repair moisture damaged photos",
    "fix photos damaged by water",
  ],
  openGraph: {
    title: "Fix Water Damaged Photos Free — AI Water Damage Repair",
    description:
      "AI fixes water damaged photos instantly. Repair flood damage, remove water stains, restore moisture damaged pictures. Free, no signup.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Water damaged photo repair before and after",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Water Damaged Photos Free Online",
    description:
      "AI water damage repair for photos. Fix flood damage, remove stains, restore pictures. Free online tool.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Fix Water Damaged Photos with AI",
  description:
    "Repair water damaged photographs using AI restoration — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [
    { "@type": "HowToTool", name: "ArtImageHub Water Damage Photo Repair" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your water damaged photo",
      text: "Click upload or drag and drop your water damaged photograph. Works with flood damaged photos, pictures with water stains, and moisture affected prints. Supports JPG, PNG, WEBP up to 20MB.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes water damage",
      text: "Our AI detects water stains, discoloration, bleeding colors, and other moisture damage patterns. The deep learning model determines appropriate restoration for each affected area.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for repair",
      text: "The AI processes your photo, removing water damage while restoring colors and detail. Most water damage repairs complete in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your restored photo",
      text: "Preview the before/after comparison showing water damage removed. Download your repaired photo—free users get 3 downloads per day at 720p resolution.",
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
      name: "Can AI fix water damaged photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI can significantly improve most water damaged photos. It removes water stains, corrects discoloration, and restores faded areas. However, photos where water completely destroyed the image (emulsion dissolved or paper disintegrated) cannot be fully recovered—AI works best when underlying image information remains.",
      },
    },
    {
      "@type": "Question",
      name: "Is water damage photo repair free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ArtImageHub offers 3 free water damage repairs per day with no account required. Free downloads are 720p resolution. For unlimited repairs at original resolution, Pro Lifetime costs $4.99 one-time (not a subscription).",
      },
    },
    {
      "@type": "Question",
      name: "What types of water damage can AI fix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI effectively repairs water stains and tide marks, color bleeding and running, yellowing from moisture, mold and mildew staining, warping distortion artifacts, and fading from humidity exposure. Severe damage where the photo emulsion has dissolved may have limited recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Should I dry water damaged photos before scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, photos must be completely dry before scanning. If photos are still wet, carefully separate them (don't pull apart stuck photos), lay flat on absorbent paper, and air dry away from direct heat or sunlight. Once dry, scan at 600 DPI for best AI restoration results.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI fix photos damaged in floods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can repair many flood-damaged photos if the underlying image remains. Flood damage often includes mud stains, water marks, and color shifts—all of which AI handles well. Photos submerged for extended periods may have emulsion damage that limits recovery.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Water Damage Photo Repair",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/fix-water-damaged-photos",
  description:
    "Free AI-powered water damage photo repair. Fix flood damaged photos, remove water stains, restore moisture damaged pictures in 30 seconds. No signup required.",
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
    "Water Stain Removal",
    "Color Bleeding Correction",
    "Mold/Mildew Stain Repair",
    "Flood Damage Restoration",
    "Free (3 photos/day)",
    "30-Second Processing",
  ],
};

export default function FixWaterDamagedPhotosPage() {
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
            Fix Water Damaged Photos Free
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-lg mx-auto">
            AI repairs water damaged photos instantly. Remove water stains, fix
            flood damage, restore moisture-affected pictures in 30 seconds.
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
          {/* Types of Water Damage */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Types of Water Damage AI Can Fix
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  type: "Water Stains & Tide Marks",
                  desc: "Ring-shaped stains from water exposure are detected and removed. AI restores the original appearance beneath the stain.",
                  effectiveness: "Excellent",
                },
                {
                  type: "Color Bleeding",
                  desc: "When water causes colors to run or bleed into other areas, AI separates and corrects the affected colors.",
                  effectiveness: "Very Good",
                },
                {
                  type: "Yellowing & Discoloration",
                  desc: "Moisture causes paper to yellow and colors to shift. AI corrects color balance and removes discoloration.",
                  effectiveness: "Excellent",
                },
                {
                  type: "Mold & Mildew Stains",
                  desc: "Dark spots from mold growth are identified and removed, restoring the underlying image.",
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

          {/* Emergency Tips */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              What to Do If Your Photos Get Wet
            </h2>
            <div className="rounded-xl bg-white p-8 border border-[#d2d2d7]/40">
              <p className="text-[15px] text-[#6e6e73] leading-[1.8] mb-4">
                If you have water damaged photos, follow these steps before
                scanning for AI restoration:
              </p>
              <ol className="space-y-3 text-[15px] text-[#6e6e73] leading-[1.6]">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white text-[12px] font-bold">
                    1
                  </span>
                  <span>
                    <strong className="text-[#1d1d1f]">Don't pull apart stuck photos.</strong>{" "}
                    Wet photos stick together. Submerge in clean, room-temperature
                    water and gently separate.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white text-[12px] font-bold">
                    2
                  </span>
                  <span>
                    <strong className="text-[#1d1d1f]">Rinse with clean water.</strong>{" "}
                    Gently rinse to remove dirt, mud, or contaminants. Don't rub the
                    surface.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white text-[12px] font-bold">
                    3
                  </span>
                  <span>
                    <strong className="text-[#1d1d1f]">Air dry flat, face up.</strong>{" "}
                    Lay on absorbent paper away from direct heat or sunlight. Change
                    paper as it absorbs moisture.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white text-[12px] font-bold">
                    4
                  </span>
                  <span>
                    <strong className="text-[#1d1d1f]">Scan when completely dry.</strong>{" "}
                    Scan at 600 DPI or higher for best AI restoration results.
                  </span>
                </li>
              </ol>
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
                  Complete restoration for old family photos with face enhancement.
                </p>
              </Link>
              <Link
                href="/remove-scratches-from-photos"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Remove Scratches
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Fix scratched photos and repair surface damage on prints.
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
                  After water damage repair, enhance quality and sharpen details.
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
                  q: "Can AI fix water damaged photos?",
                  a: "Yes, AI repairs most water damaged photos effectively. It removes water stains, corrects discoloration, and fixes color bleeding. Photos with completely dissolved emulsion have limited recovery potential.",
                },
                {
                  q: "Is water damage photo repair free?",
                  a: "Yes, 3 free repairs per day with no account. Free downloads are 720p. Pro Lifetime ($4.99 one-time) offers unlimited repairs at original resolution.",
                },
                {
                  q: "What types of water damage can AI fix?",
                  a: "AI fixes water stains, tide marks, color bleeding, yellowing, mold stains, and fading from humidity. Severe emulsion damage may have limited recovery.",
                },
                {
                  q: "Can AI fix photos damaged in floods?",
                  a: "AI can repair many flood-damaged photos if underlying image information remains. Mud stains, water marks, and color shifts are handled well.",
                },
                {
                  q: "Should I dry photos before scanning?",
                  a: "Yes, photos must be completely dry. Air dry flat on absorbent paper, away from direct heat. Never use a hair dryer or put in sun.",
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
