import type { Metadata } from "next";
import Link from "next/link";
import EnhanceClient from "../photo-enhancer/enhance-client";

export const metadata: Metadata = {
  title: "AI Photo Upscaler Free | Upscale Image to 4K Online",
  description:
    "Free AI photo upscaler to upscale images to 4K online. Enlarge photos without losing quality, increase image resolution 4x. No signup, instant results in 30 seconds.",
  alternates: { canonical: "/ai-photo-upscaler" },
  keywords: [
    "AI photo upscaler",
    "upscale image",
    "image upscaler free",
    "upscale photo to 4K",
    "AI image upscaler",
    "enlarge photo without losing quality",
    "increase image resolution",
    "photo upscaler online free",
    "upscale image AI",
  ],
  openGraph: {
    title: "AI Photo Upscaler Free — Upscale Images to 4K Online",
    description:
      "Free AI photo upscaler. Enlarge images to 4K without losing quality. No signup, instant 4x upscaling.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "AI photo upscaler before and after - low res to 4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Photo Upscaler Free — Upscale to 4K Online",
    description:
      "Free AI image upscaler. Enlarge photos 4x without losing quality. Instant results, no signup.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Upscale Photos to 4K with AI",
  description:
    "Enlarge photos and increase image resolution using AI upscaling — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Upscaler" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo to upscale",
      text: "Click upload or drag and drop your photo. Works with any image: low-resolution photos, small thumbnails, old scans, or compressed images. Supports JPG, PNG, WEBP up to 20MB.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes and upscales",
      text: "Our AI uses Real-ESRGAN super resolution to intelligently upscale your image 4x. The deep learning model adds realistic detail rather than simply stretching pixels.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds for processing",
      text: "The AI processes your photo with intelligent upscaling and detail enhancement. Most images are upscaled in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your 4K upscaled photo",
      text: "Preview the before/after comparison showing resolution increase. Download your upscaled photo—free users get 3 downloads per day at 720p output. Pro users get full 4x resolution.",
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
      name: "Can AI really upscale photos without losing quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! AI upscaling is fundamentally different from traditional resizing. Instead of stretching pixels (which creates blur), AI predicts and generates new detail based on patterns learned from millions of images. The result is a larger image with realistic detail that looks natural rather than pixelated or blurry.",
      },
    },
    {
      "@type": "Question",
      name: "Is the AI photo upscaler free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ArtImageHub offers 3 free upscales per day with no account required. Free downloads are 720p resolution. For unlimited upscaling at full 4x resolution output, Pro Lifetime costs $29.9 one-time (not a subscription).",
      },
    },
    {
      "@type": "Question",
      name: "How much can AI upscale my photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI upscales images by 4x in each dimension. A 500x500 pixel image becomes 2000x2000 pixels. This is enough to take a small web image and make it print-ready. Very small images (under 100px) may show some artifacts as there's limited information to work with.",
      },
    },
    {
      "@type": "Question",
      name: "What types of images can I upscale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI upscaling works on any image: photos, screenshots, digital art, scanned documents, old photos, social media images, and thumbnails. It works especially well on photographs with faces, landscapes, and natural textures. Very compressed or extremely low-quality images may show some limitations.",
      },
    },
    {
      "@type": "Question",
      name: "Will upscaling make my blurry photo sharp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI upscaling can improve slightly blurry images by adding detail during the enlargement process. However, severely blurry photos remain blurry at larger size—upscaling increases resolution but doesn't fix focus issues. For blurry photos, try our unblur tool first, then upscale the result.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Upscaler",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/ai-photo-upscaler",
  description:
    "Free AI photo upscaler that enlarges images to 4K without losing quality. Upscale photos 4x with intelligent detail enhancement. No signup required, instant results.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    description: "Free tier: 3 upscales per day at 720p output",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2400",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "4× AI Photo Upscaling",
    "Real-ESRGAN Super Resolution",
    "Detail Enhancement",
    "Free (3 photos/day)",
    "No Quality Loss",
    "30-Second Processing",
  ],
};

export default function AIPhotoUpscalerPage() {
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
            Free 4× Upscaling — No Signup
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            AI Photo Upscaler: Upscale to 4K Free
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-lg mx-auto">
            Enlarge photos without losing quality. AI upscaling increases
            resolution 4× with intelligent detail enhancement. Transform small
            images into print-ready quality.
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
          {/* AI vs Traditional Upscaling */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              AI Upscaling vs Traditional Resizing
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-6 border border-[#d2d2d7]/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f]">
                    Traditional Resizing
                  </h3>
                </div>
                <ul className="space-y-2 text-[14px] text-[#6e6e73]">
                  <li>• Stretches existing pixels</li>
                  <li>• Creates blur and pixelation</li>
                  <li>• No new detail added</li>
                  <li>• Quality degrades with size</li>
                  <li>• Unusable for printing</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-6 border border-green-200 bg-green-50/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f]">
                    AI Upscaling
                  </h3>
                </div>
                <ul className="space-y-2 text-[14px] text-[#6e6e73]">
                  <li>• Generates new realistic detail</li>
                  <li>• Maintains sharpness and clarity</li>
                  <li>• Intelligent texture enhancement</li>
                  <li>• Quality preserved at 4× size</li>
                  <li>• Print-ready output</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              When to Use AI Photo Upscaling
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Print Old Photos",
                  desc: "Upscale small scans to print-ready resolution for framing or photo books.",
                },
                {
                  title: "Enlarge Thumbnails",
                  desc: "Make small web images or thumbnails usable at full size.",
                },
                {
                  title: "Social Media Images",
                  desc: "Recover quality from compressed images downloaded from social platforms.",
                },
                {
                  title: "Old Screenshots",
                  desc: "Upscale low-resolution screenshots for presentations or documents.",
                },
                {
                  title: "Product Photos",
                  desc: "Enlarge product images for e-commerce without losing detail.",
                },
                {
                  title: "Digital Art",
                  desc: "Upscale artwork for printing or higher-resolution displays.",
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

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-6">
              How AI Photo Upscaling Works
            </h2>
            <div className="rounded-xl bg-white p-8 border border-[#d2d2d7]/40">
              <p className="text-[15px] text-[#6e6e73] leading-[1.8] mb-4">
                Our AI uses Real-ESRGAN (Enhanced Super-Resolution Generative
                Adversarial Network) to intelligently upscale images:
              </p>
              <ul className="space-y-3 text-[15px] text-[#6e6e73] leading-[1.6]">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">Pattern Recognition:</strong>{" "}
                    The AI identifies textures, edges, and patterns in your image
                    to understand what kind of detail to generate.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">Detail Generation:</strong>{" "}
                    Based on patterns learned from millions of high-resolution
                    images, AI generates realistic new detail for the enlarged
                    version.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">Face Enhancement:</strong>{" "}
                    Faces are detected and given special attention with GFPGAN
                    face restoration for natural-looking facial details at any
                    size.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071e3] shrink-0" />
                  <span>
                    <strong className="text-[#1d1d1f]">Artifact Removal:</strong>{" "}
                    JPEG compression artifacts and noise are cleaned during
                    upscaling, resulting in a cleaner enlarged image.
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
                href="/unblur-photo"
                className="group rounded-xl bg-white p-5 border border-[#d2d2d7]/40 hover:border-[#0071e3]/40 hover:shadow-md transition-all"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] mb-1.5">
                  Unblur Photo
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">
                  Fix blurry photos before upscaling for best results.
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
                  Full enhancement including face restoration, sharpening, and quality improvement.
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
                  Complete restoration for old family photos with damage repair.
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
                  Add color to black and white photos after upscaling.
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
                  q: "Can AI really upscale photos without losing quality?",
                  a: "Yes! AI upscaling generates new realistic detail instead of stretching pixels. The result is a larger image that looks natural rather than pixelated or blurry.",
                },
                {
                  q: "Is the AI photo upscaler free?",
                  a: "Yes, 3 free upscales per day with no account. Free downloads are 720p. Pro Lifetime ($29.9 one-time) offers unlimited upscaling at full 4x resolution.",
                },
                {
                  q: "How much can AI upscale my photo?",
                  a: "Our AI upscales 4× in each dimension. A 500×500 image becomes 2000×2000. This is enough to make small web images print-ready.",
                },
                {
                  q: "Will upscaling fix my blurry photo?",
                  a: "AI upscaling can improve slightly blurry images by adding detail. Severely blurry photos need our unblur tool first, then upscaling.",
                },
                {
                  q: "What image types can I upscale?",
                  a: "Any image works: photos, screenshots, art, scans, social media images, thumbnails. It works especially well on photographs with faces and natural textures.",
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
