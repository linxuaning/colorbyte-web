import type { Metadata } from "next";
import Link from "next/link";
import RestoreClient from "../old-photo-restoration/restore-client";

export const metadata: Metadata = {
  title: "Restore Old Family Photos Free Online | AI Photo Restoration",
  description:
    "Restore old family photos free with AI. Fix faded grandparent photos, repair damaged family pictures, enhance vintage portraits. No signup required, instant results.",
  alternates: { canonical: "/restore-old-family-photos" },
  keywords: [
    "restore old family photos",
    "restore old family photos free",
    "family photo restoration",
    "restore grandparents photos",
    "fix old family pictures",
    "vintage family photo restoration",
    "restore damaged family photos",
    "old family portrait restoration",
  ],
  openGraph: {
    title: "Restore Old Family Photos Free — AI Photo Restoration",
    description:
      "Restore old family photos free with AI. Fix faded, damaged family pictures in 30 seconds. No signup required.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Old family photo restoration before and after",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restore Old Family Photos Free Online",
    description:
      "AI family photo restoration. Fix faded grandparent photos, repair damaged pictures. Free, instant results.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Old Family Photos Free Online",
  description:
    "Restore damaged, faded old family photographs using AI — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Family Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your old family photo",
      text: "Click the upload area or drag and drop your old family photo. Works with scanned prints, faded photographs, and damaged family pictures. Supports JPG, PNG, WEBP up to 20MB.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores your family photo",
      text: "Our AI automatically detects and fixes common family photo damage: fading, yellowing, scratches, and blurry faces. Face enhancement is automatically applied to restore facial details.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for restoration",
      text: "The AI processes your family photo with face-aware enhancement and damage repair. Most restorations complete in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your restored family photo",
      text: "Preview the before/after comparison and download your restored family photo. Free users get 3 downloads per day. Share the restored photo with your family!",
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
      name: "Can AI restore very old family photos from the 1800s-1900s?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our AI is trained on historical photographs and handles old family photos from any era—daguerreotypes, cabinet cards, early paper prints, and photos from every decade. The AI understands period-specific damage patterns and restores photos appropriately for their age.",
      },
    },
    {
      "@type": "Question",
      name: "Is it really free to restore family photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ArtImageHub offers 3 free family photo restorations per day with no account required. Free downloads are 720p resolution. For unlimited restorations at original resolution, Pro Lifetime costs $29.9 one-time (not a subscription).",
      },
    },
    {
      "@type": "Question",
      name: "Can AI fix faces in old family portraits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our AI includes specialized face enhancement that detects and restores facial features in family portraits. Faded faces are sharpened, eyes and skin texture are enhanced, and blurry features are clarified while maintaining the person's natural appearance.",
      },
    },
    {
      "@type": "Question",
      name: "Will restoration change how my family members look?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, our AI preserves the authentic appearance of your family members. Face enhancement clarifies existing features rather than changing them. The goal is to restore what was originally captured, not alter how people look.",
      },
    },
    {
      "@type": "Question",
      name: "Can I restore multiple family photos at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently, photos are restored one at a time. Free users can restore 3 photos per day. Pro Lifetime users can restore unlimited photos. For large family photo collections, the process is quick—each photo takes only 30 seconds.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Family Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/restore-old-family-photos",
  description:
    "Free AI-powered tool to restore old family photos. Fix faded grandparent photos, repair damaged family pictures, enhance vintage portraits in 30 seconds. No signup required.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    description: "Free tier: 3 family photos per day at 720p",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2400",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Free Family Photo Restoration (3/day)",
    "AI Face Enhancement for Portraits",
    "Fading and Yellowing Correction",
    "Scratch and Damage Repair",
    "4× Resolution Upscaling",
    "Optional Colorization",
  ],
};

export default function RestoreOldFamilyPhotosPage() {
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
            Restore Old Family Photos Free
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-lg mx-auto">
            Bring your family memories back to life. AI restores faded
            grandparent photos, repairs damaged family pictures, and enhances
            vintage portraits in 30 seconds.
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
          {/* Why Restore Family Photos */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Why Restore Your Old Family Photos?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Preserve Family History",
                  desc: "Old family photos are irreplaceable records of your heritage. Restoration preserves these memories before further deterioration makes them unrecoverable.",
                },
                {
                  title: "Connect Generations",
                  desc: "Share restored photos with children and grandchildren. Clear images of ancestors create meaningful connections to family history.",
                },
                {
                  title: "Create Beautiful Prints",
                  desc: "Restored family photos make stunning prints for display, family reunions, or memorial tributes. Transform faded snapshots into gallery-worthy images.",
                },
                {
                  title: "Complete Family Trees",
                  desc: "Genealogy research benefits from clear photographs. Restored images help identify relatives and document family lineage.",
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

          {/* Common Family Photo Damage */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              What Damage Can AI Fix in Family Photos?
            </h2>
            <div className="rounded-xl bg-white p-8 border border-[#d4bc91]/40">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    damage: "Fading & Yellowing",
                    fix: "AI corrects color shifts and restores original tones",
                  },
                  {
                    damage: "Blurry Faces",
                    fix: "Face enhancement sharpens facial features naturally",
                  },
                  {
                    damage: "Scratches & Tears",
                    fix: "AI fills damaged areas seamlessly",
                  },
                  {
                    damage: "Water Damage",
                    fix: "Stains and water marks are removed",
                  },
                  {
                    damage: "Low Resolution",
                    fix: "4× upscaling adds detail for printing",
                  },
                  {
                    damage: "Age Spots & Foxing",
                    fix: "Brown spots from aging are cleaned",
                  },
                ].map((item) => (
                  <div key={item.damage} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#8B5E3C] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#1d1d1f]">
                        {item.damage}:
                      </span>{" "}
                      <span className="text-[#6e6e73]">{item.fix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Tools Section */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Related Photo Tools
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/remove-scratches-from-photos"
                className="group rounded-xl bg-white p-5 border border-[#d4bc91]/40 hover:border-[#8B5E3C]/60 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#8B5E3C] mb-1.5">
                  Remove Scratches
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Fix scratched family photos and repair surface damage on prints.
                </p>
              </Link>
              <Link
                href="/fix-water-damaged-photos"
                className="group rounded-xl bg-white p-5 border border-[#d4bc91]/40 hover:border-[#8B5E3C]/60 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#8B5E3C] mb-1.5">
                  Fix Water Damage
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Repair water damaged family photos, remove stains and discoloration.
                </p>
              </Link>
              <Link
                href="/colorize-photos-free"
                className="group rounded-xl bg-white p-5 border border-[#d4bc91]/40 hover:border-[#8B5E3C]/60 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#8B5E3C] mb-1.5">
                  Colorize Photos Free
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Add color to black and white family photos with AI colorization.
                </p>
              </Link>
              <Link
                href="/enhance-old-photos"
                className="group rounded-xl bg-white p-5 border border-[#d4bc91]/40 hover:border-[#8B5E3C]/60 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#8B5E3C] mb-1.5">
                  Enhance Old Photos
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Sharpen faded details and improve quality of vintage photographs.
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
                  q: "Can AI restore very old family photos from the 1800s?",
                  a: "Yes! Our AI handles photos from any era—daguerreotypes, tintypes, cabinet cards, and early paper prints. The AI understands period-specific damage and restores appropriately.",
                },
                {
                  q: "Is it really free to restore family photos?",
                  a: "Yes, 3 free restorations per day with no account. Free downloads are 720p. Pro Lifetime ($29.9 one-time) offers unlimited restorations at original resolution.",
                },
                {
                  q: "Will restoration change how my family members look?",
                  a: "No, our AI preserves authentic appearances. Face enhancement clarifies existing features rather than changing them. The goal is restoring what was originally captured.",
                },
                {
                  q: "Can I add color to black and white family photos?",
                  a: "Yes! Enable the colorization option to transform black and white family photos into color. AI predicts historically appropriate colors based on the photo's era and content.",
                },
                {
                  q: "How should I scan old family photos for best results?",
                  a: "Scan at 600 DPI or higher for best restoration results. Clean the scanner glass, handle photos by edges, and scan in color mode even for black and white photos to capture subtle toning.",
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
