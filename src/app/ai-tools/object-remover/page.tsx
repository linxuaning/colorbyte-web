import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ObjectRemoverClient from "./object-remover-client";
import FloatingCTA from "@/components/FloatingCTA";
import CollapsibleSection from "@/components/CollapsibleSection";
import DodoQuickCheckoutButton from "@/components/DodoQuickCheckoutButton";

export const metadata: Metadata = {
  title: "AI Object Remover Online — Remove Objects, People, Watermarks · $4.99",
  description:
    "Remove unwanted objects, people, watermarks, or backgrounds from photos with AI in seconds. Brush over what you want gone, AI fills the gap naturally. One-time $4.99 payment. HD download included.",
  alternates: {
    canonical: "/ai-tools/object-remover",
    languages: {
      "x-default": "/ai-tools/object-remover",
      en: "/ai-tools/object-remover",
    },
  },
  keywords: [
    "object remover online",
    "ai object removal",
    "remove person from photo",
    "remove watermark from image",
    "photo inpainting",
    "ai inpaint",
    "remove background object",
  ],
  openGraph: {
    title: "AI Object Remover — ArtImageHub",
    description:
      "Remove unwanted objects, people, or watermarks from photos. Brush over them, AI fills the gap. $4.99 one-time, HD download.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Before and after AI object removal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Object Remover Online",
    description:
      "Remove unwanted objects, people, or watermarks from photos. Brush over them, AI fills the gap. $4.99 one-time.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Remove Objects from Photos with AI",
  description:
    "Remove unwanted objects, people, or watermarks from any photo in 4 steps. Results in 5–15 seconds.",
  totalTime: "PT2M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Object Remover" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pay once to unlock access",
      text: "One-time $4.99 payment unlocks AI object removal on your email. No subscription. Secure checkout.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your photo",
      text: "Return to the tool with the same email and upload the photo you want to clean up. Supported: JPG, PNG, WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Brush over what you want to remove",
      text: "Use the brush tool to paint over the object, person, or watermark you want gone. Adjust brush size as needed. Undo and clear are available.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "AI fills the gap and you download",
      text: "Click Remove. The LaMa AI model fills the area naturally based on surrounding context, usually in 5–15 seconds. Download the HD result.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What can the AI object remover delete from a photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "People, vehicles, signs, watermarks, power lines, photo-bombers, trash, and most rigid or semi-rigid objects. Works best when the surrounding background is repeatable or has natural texture (sky, grass, walls, water).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay before using the object remover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A one-time $4.99 payment unlocks the object remover on your email. No subscription required. After payment, return with the same email to use the tool.",
      },
    },
    {
      "@type": "Question",
      name: "What image formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG, JPEG, PNG, and WEBP up to 20MB per file. For best results, upload the highest-resolution version of the photo you have.",
      },
    },
    {
      "@type": "Question",
      name: "How long does object removal take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most photos process in 5–15 seconds. Larger images or heavy network conditions may take up to 60 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Are my photos kept private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All photos are transmitted over encrypted HTTPS. Uploaded photos are automatically deleted within 24 hours. We never share, sell, or train AI models on your photos.",
      },
    },
    {
      "@type": "Question",
      name: "Will it work on busy backgrounds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI inpainting works best when the area around what you remove has a consistent or natural texture. For complex backgrounds (faces, text, fine patterns directly behind the object), results vary — try a smaller brush stroke and only remove the unwanted part.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Object Remover",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  url: "https://artimagehub.com/ai-tools/object-remover",
  description:
    "AI-powered inpainting tool that removes unwanted objects, people, watermarks, and distractions from photos. Brush over the area, AI fills the gap. One-time $4.99 payment.",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    description:
      "One-time payment. Unlocks AI object removal and HD original download.",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://artimagehub.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Tools",
      item: "https://artimagehub.com/ai-tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Object Remover",
      item: "https://artimagehub.com/ai-tools/object-remover",
    },
  ],
};

export default function ObjectRemoverPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-8 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            Pay Once · No Subscription
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            AI Object Remover
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Brush over anything you want gone — people, watermarks, signs, power
            lines — AI fills the gap. One-time $4.99 unlocks unlimited removals
            and HD download.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6e6e73]">
            {[
              { icon: "✓", text: "Results in 5–15 seconds" },
              { icon: "✓", text: "No subscription" },
              { icon: "✓", text: "HD original download" },
            ].map((badge) => (
              <span key={badge.text} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <DodoQuickCheckoutButton
              label="$4.99 — Get Started"
              className="inline-flex h-12 items-center rounded-full bg-[#0071e3] px-7 text-[15px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.97] transition-all duration-200 shadow-md shadow-[#0071e3]/30"
              funnelSource={{
                landingPage: "/ai-tools/object-remover",
                ctaSlot: "hero_above_fold",
              }}
            />
          </div>
        </div>
      </div>

      {/* Tool */}
      <div id="upload" className="mx-auto max-w-3xl px-5 py-6 sm:py-16">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <ObjectRemoverClient />
        </Suspense>
      </div>

      <FloatingCTA landingPage="/ai-tools/object-remover" />

      {/* How It Works */}
      <CollapsibleSection title="how it works" className="py-8 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Object Removal Works
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Four steps. One-time payment. Clean photos in under a minute.
            </p>
          </div>
          <div className="grid sm:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Pay once to unlock",
                desc: "$4.99 one-time payment unlocks the object remover on your email.",
              },
              {
                step: "2",
                title: "Upload your photo",
                desc: "JPG, PNG, or WEBP up to 20MB. Highest resolution gives the best result.",
              },
              {
                step: "3",
                title: "Brush over what to remove",
                desc: "Paint over the object, person, or watermark. Adjust brush size, undo as needed.",
              },
              {
                step: "4",
                title: "AI fills the gap",
                desc: "LaMa inpainting reconstructs the area in 5–15 seconds. Download the HD result.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0071e3] text-white font-bold text-[18px]">
                  {item.step}
                </div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* What it removes */}
      <CollapsibleSection
        title="what AI object removal handles"
        className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-8 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What Can AI Object Removal Handle?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              From small distractions to full-frame objects — works best when
              what surrounds the object has a natural or repeatable texture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "People & photo-bombers",
                desc: "Remove strangers, ex-partners, or photo-bombers from travel and family photos. Works best on uniform backgrounds (sky, walls, grass).",
              },
              {
                title: "Watermarks & logos",
                desc: "Strip watermarks, stamps, and date labels from photos you own. AI fills the gap based on the surrounding image area.",
              },
              {
                title: "Power lines & wires",
                desc: "Clean up landscape and city photos by removing distracting overhead wires, antennas, and signage.",
              },
              {
                title: "Trash & street clutter",
                desc: "Clear cans, cones, parked cars, and street furniture from architecture and travel photos.",
              },
              {
                title: "Signs & billboards",
                desc: "Remove unwanted signs, banners, and billboards while preserving the building or scene behind them.",
              },
              {
                title: "Photographer reflections",
                desc: "Erase your own reflection from windows, mirrors, glossy surfaces, and bodies of water.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d2d2d7]/60 bg-white p-6"
              >
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[#d2d2d7]/60 bg-white p-6"
              >
                <dt className="text-[16px] font-semibold text-[#1d1d1f] mb-2">
                  {item.name}
                </dt>
                <dd className="text-[15px] text-[#6e6e73] leading-[1.65]">
                  {item.acceptedAnswer.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related tools */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Other AI Photo Tools
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                href: "/old-photo-restoration",
                title: "Old Photo Restoration",
                desc: "Repair scratches, fading, blur, and water damage on family photos.",
              },
              {
                href: "/photo-colorizer",
                title: "AI Photo Colorizer",
                desc: "Add natural color to black-and-white photos automatically.",
              },
              {
                href: "/photo-enhancer",
                title: "AI Photo Enhancer",
                desc: "Sharpen, denoise, and upscale photos to print quality.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-xl border border-[#d2d2d7]/60 bg-white p-5 hover:border-[#0071e3]/40 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.55] mb-2">
                  {item.desc}
                </p>
                <span className="text-[12px] font-medium text-[#0071e3] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Try it <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
