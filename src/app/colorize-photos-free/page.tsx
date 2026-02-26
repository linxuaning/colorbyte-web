import type { Metadata } from "next";
import Link from "next/link";
import ColorizeClient from "../photo-colorizer/colorize-client";

export const metadata: Metadata = {
  title: "Colorize Black and White Photos Free Online | AI Photo Colorizer",
  description:
    "Colorize black and white photos free online with AI. Transform old family photos, historical images, and vintage pictures into vivid color in 30 seconds. No signup, no watermark on free tier.",
  alternates: { canonical: "/colorize-photos-free" },
  keywords: [
    "colorize black and white photos free",
    "colorize photos free online",
    "black and white to color free",
    "free photo colorizer",
    "colorize old photos free",
    "AI photo colorization free",
    "turn black and white photo to color",
  ],
  openGraph: {
    title: "Colorize Black and White Photos Free Online — ArtImageHub",
    description:
      "Transform black and white photos to color for free with AI. No signup required, instant results.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.jpg",
        width: 1200,
        height: 630,
        alt: "Black and white photo colorization before and after example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colorize Black and White Photos Free Online",
    description:
      "Free AI photo colorizer. Transform old black and white photos to vivid color in seconds.",
    images: ["/blog/before-after-examples.jpg"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Colorize Black and White Photos Free Online",
  description:
    "Transform black and white photos to color for free using AI colorization — no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Free Photo Colorizer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your black and white photo",
      text: "Click the upload area or drag and drop your black and white photo. Supports JPG, PNG, WEBP up to 20MB. No account needed.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI adds realistic colors automatically",
      text: "Our AI analyzes faces, objects, landscapes, and context to predict historically accurate colors. The deep learning model was trained on millions of color photographs.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for colorization",
      text: "The AI processes your photo and applies natural-looking colors. Most photos are colorized in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your colorized photo free",
      text: "Preview the before/after comparison and download your colorized photo. Free users get 3 downloads per day at 720p resolution with no watermark.",
      image: "https://www.artimagehub.com/blog/after-1.jpg",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it really free to colorize black and white photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ArtImageHub offers 3 free photo colorizations per day with no account or credit card required. Free downloads are 720p resolution with no watermark. For unlimited colorizations at original resolution, Pro Lifetime costs $4.99 one-time (not a subscription).",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is AI photo colorization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI colorization uses deep learning trained on millions of photographs to predict realistic colors. It's highly accurate for common elements like sky (blue), grass (green), skin tones, and typical clothing. For specific items like eye color or exact clothing shades, AI makes educated guesses based on context. Results are artistic interpretations, not historical documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What types of black and white photos work best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI colorization works best on clear, well-exposed photographs with recognizable subjects. Portraits, family photos, landscapes, and everyday scenes produce excellent results. Very dark, damaged, or extremely low-resolution images may need restoration before colorization for best results.",
      },
    },
    {
      "@type": "Question",
      name: "Can I colorize old family photos from the 1900s?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! ArtImageHub is perfect for colorizing old family photos from any era—1800s daguerreotypes, early 1900s portraits, 1920s-1960s family snapshots, and any black and white photograph. The AI handles period-appropriate colorization, understanding historical context for natural results.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account to colorize photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No account is required. Simply upload your black and white photo and download the colorized result immediately. Creating an account is only needed if you purchase Pro Lifetime for unlimited downloads.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Free Photo Colorizer",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/colorize-photos-free",
  description:
    "Free online AI photo colorizer that transforms black and white photos into vivid color. Colorize old family photos, historical images, and vintage pictures in 30 seconds with no signup required.",
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
    "Free Photo Colorization (3/day)",
    "AI-Powered Realistic Colors",
    "No Signup Required",
    "Face-Aware Colorization",
    "30-Second Processing",
    "Before/After Comparison",
  ],
};

export default function ColorizePhotosFree() {
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

      {/* Hero Section - SEO Optimized for "colorize black and white photos free" */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            100% Free — No Signup Required
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Colorize Black and White Photos Free Online
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-lg mx-auto">
            Transform your old black and white photos into vivid color with AI.
            Free to use, no account needed. Get realistic colorization in 30
            seconds.
          </p>
        </div>
      </div>

      {/* Tool Component */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <ColorizeClient />
      </div>

      {/* SEO Content Section */}
      <div className="border-t border-[#d2d2d7]/40 bg-[#f5f5f7]">
        <div className="mx-auto max-w-4xl px-5 py-16">
          {/* Why Colorize Section */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Why Colorize Your Black and White Photos?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Bring Family History to Life",
                  desc: "See your ancestors as they really looked. Colorization adds emotional connection to old family photographs, making past generations feel more real and relatable.",
                },
                {
                  title: "Preserve Historical Moments",
                  desc: "Historical events captured in black and white gain new context when colorized. See the true colors of vintage cars, period clothing, and historical settings.",
                },
                {
                  title: "Create Stunning Prints",
                  desc: "Colorized photos make beautiful prints for display, gifts, or family albums. Transform a faded snapshot into a vibrant conversation piece.",
                },
                {
                  title: "Share on Social Media",
                  desc: "Colorized historical photos get more engagement. Share your family history with vivid images that capture attention and spark conversations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-6 border border-[#d2d2d7]/40"
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

          {/* How AI Colorization Works */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              How AI Photo Colorization Works
            </h2>
            <div className="rounded-xl bg-white p-8 border border-[#d2d2d7]/40">
              <p className="text-[15px] text-[#6e6e73] leading-[1.8] mb-4">
                Our AI colorizer uses deep learning neural networks trained on
                millions of color photographs. The AI analyzes your black and
                white image to understand:
              </p>
              <ul className="space-y-3 text-[15px] text-[#6e6e73] leading-[1.6]">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">Faces and skin tones:</strong>{" "}
                    The AI recognizes facial features and applies natural,
                    realistic skin colors appropriate for the photograph's era
                    and context.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">Objects and context:</strong>{" "}
                    Sky, grass, trees, buildings, vehicles—the AI identifies
                    common objects and applies appropriate colors based on
                    learned patterns.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">Historical accuracy:</strong>{" "}
                    For period photos, the AI considers era-appropriate colors
                    for clothing, interiors, and settings.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools Section */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Related Photo Tools
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/enhance-old-photos"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Enhance Old Photos
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Improve quality of vintage photos with AI enhancement and face restoration.
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
                  Fix damaged family photos, repair scratches, and restore old memories.
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
                  Enlarge your colorized photos to 4K for printing without losing quality.
                </p>
              </Link>
              <Link
                href="/old-photo-restoration"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Old Photo Restoration
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Complete restoration including damage repair, enhancement, and colorization.
                </p>
              </Link>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section>
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is it really free to colorize black and white photos?",
                  a: "Yes! ArtImageHub offers 3 free colorizations per day with no account required. Free downloads are 720p resolution. For unlimited colorizations at original resolution, Pro Lifetime is a one-time $4.99 payment (not a subscription).",
                },
                {
                  q: "How accurate is AI photo colorization?",
                  a: "AI colorization is highly accurate for common elements like sky, grass, skin tones, and typical objects. The AI makes educated guesses for specific items like exact clothing colors. Results are artistic interpretations based on learned patterns from millions of photographs.",
                },
                {
                  q: "What types of black and white photos work best?",
                  a: "Clear, well-exposed photographs with recognizable subjects work best. Portraits, family photos, landscapes, and everyday scenes produce excellent results. Very dark or heavily damaged images may benefit from restoration before colorization.",
                },
                {
                  q: "Can I colorize very old photos from the 1800s-1900s?",
                  a: "Absolutely! Our AI handles photos from any era—daguerreotypes, tintypes, cabinet cards, and early paper prints. The AI understands historical context and applies period-appropriate colors.",
                },
                {
                  q: "Do I need to create an account?",
                  a: "No account is required for free colorization. Simply upload your photo and download the result. Accounts are only needed for Pro Lifetime purchases.",
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
