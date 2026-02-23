import type { Metadata } from "next";
import Link from "next/link";
import RestoreClient from "../old-photo-restoration/restore-client";

export const metadata: Metadata = {
  title: "Enhance Old Photos Free | AI Old Photo Enhancer Online",
  description:
    "Enhance old photos free with AI. Improve quality of vintage pictures, sharpen faded photographs, restore clarity to old family photos. No signup, instant enhancement in 30 seconds.",
  alternates: { canonical: "/enhance-old-photos" },
  keywords: [
    "enhance old photos",
    "old photo enhancer",
    "enhance old pictures",
    "improve old photo quality",
    "old photo enhancement",
    "enhance vintage photos",
    "AI old photo enhancer",
    "enhance faded photos",
    "old photo quality improvement",
  ],
  openGraph: {
    title: "Enhance Old Photos Free — AI Old Photo Enhancer",
    description:
      "Free AI old photo enhancer. Improve vintage picture quality, sharpen faded photos, restore clarity. No signup required.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Old photo enhancement before and after",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhance Old Photos Free Online",
    description:
      "AI old photo enhancer. Improve vintage picture quality, sharpen faded photos. Free, instant results.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Enhance Old Photos with AI",
  description:
    "Improve quality of old photographs using AI enhancement — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Old Photo Enhancer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your old photo",
      text: "Click upload or drag and drop your old photograph. Works with scanned prints, faded pictures, vintage photos from any era. Supports JPG, PNG, WEBP up to 20MB.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI enhances your photo",
      text: "Our AI automatically detects and enhances old photos: sharpening faded details, improving contrast, enhancing faces, and increasing resolution. All enhancements are applied automatically.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for enhancement",
      text: "The AI processes your old photo with face enhancement, super resolution, and quality improvement. Most photos are enhanced in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your enhanced photo",
      text: "Preview the before/after comparison showing quality improvement. Download your enhanced photo—free users get 3 downloads per day at 720p. Pro users get original resolution.",
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
      name: "What does AI old photo enhancement do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI old photo enhancement improves multiple aspects of vintage photographs: sharpening blurry or faded details, enhancing facial features for clarity, increasing resolution through super resolution upscaling, correcting faded colors and contrast, and reducing grain and noise. All improvements are applied automatically based on what your specific photo needs.",
      },
    },
    {
      "@type": "Question",
      name: "Is the old photo enhancer free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ArtImageHub offers 3 free old photo enhancements per day with no account required. Free downloads are 720p resolution. For unlimited enhancements at original resolution, Pro Lifetime costs $29.9 one-time (not a subscription).",
      },
    },
    {
      "@type": "Question",
      name: "Can AI enhance very old photos from the 1800s?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our AI is trained on historical photographs and effectively enhances photos from any era—daguerreotypes, tintypes, cabinet cards, early paper prints, and photos from every decade since photography began. The AI understands period-specific characteristics and enhances appropriately.",
      },
    },
    {
      "@type": "Question",
      name: "Will enhancement change how people look in old photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, our AI preserves the authentic appearance of subjects. Face enhancement clarifies and sharpens existing features rather than changing them. The goal is revealing what was originally captured with improved clarity, not altering appearances.",
      },
    },
    {
      "@type": "Question",
      name: "Is enhancement different from restoration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enhancement and restoration overlap but have different focuses. Enhancement improves overall quality (sharpness, contrast, resolution) of any old photo. Restoration specifically repairs damage (scratches, tears, stains). Our tool does both—it enhances quality while also repairing common damage automatically.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Old Photo Enhancer",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/enhance-old-photos",
  description:
    "Free AI old photo enhancer that improves quality of vintage photographs. Sharpen faded pictures, enhance faces, increase resolution. No signup required, instant results.",
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
    "AI Old Photo Enhancement",
    "Face Sharpening & Clarity",
    "4× Resolution Upscaling",
    "Fading Correction",
    "Automatic Quality Improvement",
    "Free (3 photos/day)",
  ],
};

export default function EnhanceOldPhotosPage() {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(139,94,60,0.08),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            Free — No Signup Required
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Enhance Old Photos Free with AI
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-lg mx-auto">
            Improve quality of vintage photographs instantly. AI sharpens faded
            details, enhances faces, and increases resolution—bringing old
            memories back to life.
          </p>
        </div>
      </div>

      {/* Tool Component */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <RestoreClient />
      </div>

      {/* SEO Content Section */}
      <div className="border-t border-[#d2d2d7]/40 bg-[#faf8f4]">
        <div className="mx-auto max-w-4xl px-5 py-16">
          {/* What Enhancement Does */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              What AI Old Photo Enhancement Does
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Sharpens Faded Details",
                  desc: "AI detects soft, faded areas and intelligently sharpens them, revealing detail that seemed lost to time.",
                },
                {
                  title: "Enhances Faces",
                  desc: "Facial features are detected and enhanced with special attention to eyes, skin texture, and expressions for natural clarity.",
                },
                {
                  title: "Increases Resolution",
                  desc: "4× super resolution upscaling makes small old photos printable at large sizes without pixelation.",
                },
                {
                  title: "Corrects Fading",
                  desc: "Faded colors and washed-out contrast are automatically corrected to restore vibrancy.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-6 border border-[#d4bc91]/40"
                >
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Types of Old Photos */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              What Old Photos Can AI Enhance?
            </h2>
            <div className="rounded-xl bg-white p-8 border border-[#d4bc91]/40">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    era: "1800s Photographs",
                    types: "Daguerreotypes, tintypes, cabinet cards, CDVs",
                  },
                  {
                    era: "Early 1900s",
                    types: "Silver gelatin prints, postcards, studio portraits",
                  },
                  {
                    era: "1920s-1950s",
                    types: "Family snapshots, wedding photos, military portraits",
                  },
                  {
                    era: "1960s-1980s",
                    types: "Color prints, Polaroids, school photos, vacation pics",
                  },
                  {
                    era: "Scanned Prints",
                    types: "Any scanned photograph from albums or frames",
                  },
                  {
                    era: "Damaged Photos",
                    types: "Faded, yellowed, scratched, or water-damaged prints",
                  },
                ].map((item) => (
                  <div key={item.era} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#8B5E3C] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#1d1d1f]">
                        {item.era}:
                      </span>{" "}
                      <span className="text-[#6e6e73]">{item.types}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhancement vs Restoration */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Enhancement vs Restoration: What's the Difference?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-6 border border-[#d4bc91]/40">
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3">
                  Enhancement
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6] mb-3">
                  Improves overall quality of any old photo:
                </p>
                <ul className="space-y-1.5 text-[14px] text-[#6e6e73]">
                  <li>• Sharpening and clarity</li>
                  <li>• Resolution increase</li>
                  <li>• Contrast improvement</li>
                  <li>• Face detail enhancement</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-6 border border-[#d4bc91]/40">
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3">
                  Restoration
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6] mb-3">
                  Repairs specific damage on old photos:
                </p>
                <ul className="space-y-1.5 text-[14px] text-[#6e6e73]">
                  <li>• Scratch removal</li>
                  <li>• Tear repair</li>
                  <li>• Stain removal</li>
                  <li>• Missing area reconstruction</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[14px] text-[#6e6e73] text-center">
              Our tool does both—enhancing quality while also repairing common
              damage automatically.
            </p>
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
                  Enlarge enhanced photos to 4K for large prints without quality loss.
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
                  Complete restoration including damage repair for family pictures.
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
                  Add vibrant color to black and white photos with AI colorization.
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
                  Fix scratched photos and repair surface damage on vintage prints.
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
                  q: "What does AI old photo enhancement do?",
                  a: "AI enhancement sharpens faded details, enhances facial features, increases resolution 4×, corrects fading, and reduces grain—all automatically based on what your photo needs.",
                },
                {
                  q: "Is the old photo enhancer free?",
                  a: "Yes, 3 free enhancements per day with no account. Free downloads are 720p. Pro Lifetime ($29.9 one-time) offers unlimited enhancements at original resolution.",
                },
                {
                  q: "Can AI enhance very old photos from the 1800s?",
                  a: "Yes! Our AI handles photos from any era—daguerreotypes, tintypes, and all vintage formats. It understands period characteristics and enhances appropriately.",
                },
                {
                  q: "Will enhancement change how people look?",
                  a: "No, AI preserves authentic appearances. Face enhancement clarifies existing features rather than changing them—revealing what was originally captured.",
                },
                {
                  q: "What's the difference between enhancement and restoration?",
                  a: "Enhancement improves overall quality (sharpness, contrast, resolution). Restoration repairs damage (scratches, tears, stains). Our tool does both automatically.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl bg-white border border-[#d4bc91]/40 overflow-hidden"
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
