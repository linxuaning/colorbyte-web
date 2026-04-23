import type { Metadata } from "next";
import ColorizeClient from "../photo-colorizer/colorize-client";
import FloatingCTA from "@/components/FloatingCTA";
import LiveActivity from "@/components/LiveActivity";
import ProofSampleGallery from "@/components/ProofSampleGallery";

export const metadata: Metadata = {
  title: "Old Photo Colorization Online | Add Realistic Color to B&W Photos | ArtImageHub",
  description:
    "Colorize old black and white photos with AI in 30 seconds. Realistic skin tones, period-accurate colors, face-aware processing. Preview free, unlock HD download for $4.99.",
  alternates: { canonical: "/old-photo-colorization" },
  keywords: [
    "old photo colorization",
    "colorize old photos online",
    "AI photo colorization",
    "black and white photo to color",
    "colorize vintage photos",
    "old photo color restoration",
    "colorize family photos online",
  ],
  openGraph: {
    title: "Old Photo Colorization Online — ArtImageHub",
    description:
      "AI colorization for old black and white photos. Realistic, period-accurate colors in 30 seconds. Preview free.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Old black and white photo colorized with AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Photo Colorization Online — ArtImageHub",
    description:
      "Colorize old black and white photos with AI. Realistic colors in 30 seconds. Preview free.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Colorize Old Photos Online with AI",
  description:
    "Add realistic, period-accurate color to old black and white photos using ArtImageHub AI colorization.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Colorizer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your old black and white photo",
      text: "Click the upload area or drag and drop your black and white photo. Supports JPG, PNG, WEBP up to 20MB. No account needed to preview.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes and colorizes",
      text: "The AI identifies faces, objects, era context, and common color patterns to apply realistic, natural-looking colors.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Review your free colorization preview",
      text: "Compare the before and after. The preview is free with no watermark on screen. Take as long as you need.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Unlock the full-resolution download",
      text: "If you're happy with the result, unlock the original-quality colorized download for $4.99. One-time payment, no subscription.",
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
      name: "How accurate is AI colorization on very old photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI colorization is highly accurate for recognizable elements: sky (blue), vegetation (green), skin tones, stone, and wood. For specific items — exact eye color, clothing shade, interior paint — the AI makes historically informed guesses based on patterns learned from millions of photographs. Results are realistic artistic interpretations, not pixel-perfect recreations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I colorize photos from the 1800s and early 1900s?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI handles photos from any era — daguerreotypes, tintypes, cabinet cards, and early paper prints. The model understands historical context and applies period-appropriate colors for clothing, interiors, and settings.",
      },
    },
    {
      "@type": "Question",
      name: "Should I restore a damaged photo before colorizing it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for best results. If your photo has scratches, tears, fading, or water damage, run it through old photo restoration first. Colorization on a clean image produces significantly better results than colorizing a damaged one. Use our /old-photo-restoration tool first, then colorize.",
      },
    },
    {
      "@type": "Question",
      name: "Is the preview really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Uploading and viewing the colorized preview is free with no account required. If you want the original-quality file to download, print, or share, that costs $4.99 — a one-time payment, no subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Are my old family photos kept private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All uploads are transmitted over encrypted HTTPS. Uploaded photos are automatically deleted from our servers within 24 hours. We never share, sell, or train AI models on your personal photos.",
      },
    },
    {
      "@type": "Question",
      name: "How long does old photo colorization take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most photos are colorized in 15–30 seconds. Complex images with many fine details may take up to 60 seconds. You'll see the result as soon as processing completes.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI colorize a photo that is also damaged or faded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but results are better if you restore the damage first. The colorization AI works better on intact image data. If your photo has significant damage, use old photo restoration first, then run the colorization pass on the cleaned result.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Old Photo Colorization",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    description:
      "Free colorization preview. Unlock original-quality colorized download for $4.99. One-time payment, no subscription.",
  },
};

export default function OldPhotoColorizationPage() {
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
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            Free Preview — No Signup Required
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Old Photo Colorization
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Add realistic, period-accurate color to old black and white photos in 30 seconds.
            Preview free — unlock the HD download for $4.99 when you want to keep it.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6e6e73]">
            {[
              { icon: "✓", text: "Free preview — no account needed" },
              { icon: "✓", text: "4.8★ average rating" },
              { icon: "✓", text: "Results in 30 seconds" },
            ].map((badge) => (
              <span key={badge.text} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-[#d2d2d7]/70 bg-[#faf8f4] px-5 py-4 text-left shadow-sm">
            <div className="grid gap-2 text-[13px] text-[#6e6e73] sm:grid-cols-3">
              <p>Preview colorization free. Pay $4.99 to download the HD original.</p>
              <p>Uploads encrypted and deleted within 24 hours.</p>
              <p>Supports JPG, PNG, WEBP up to 20 MB.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 -mt-2 mb-8">
        <LiveActivity />
      </div>

      {/* Main tool */}
      <div id="upload" className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <ColorizeClient />
      </div>

      <ProofSampleGallery
        className="bg-white py-8 sm:py-10"
        title="See colorization results before you commit."
        description="Real before/after results from old family photos — faces, clothing, landscapes, and historical settings."
      />

      <FloatingCTA landingPage="/old-photo-colorization" />

      {/* ─── SEO Content: How It Works ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Old Photo Colorization Works
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Upload once. Preview free. Download when you're ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Upload your photo",
                desc: "Drag and drop or click to browse. No account needed — the preview is always free.",
              },
              {
                step: "2",
                title: "AI colorizes in 30s",
                desc: "The model identifies faces, objects, era context, and applies realistic, natural-looking colors per region.",
              },
              {
                step: "3",
                title: "Review the result",
                desc: "Compare before and after in the slider. The preview is free to view — take as long as you need.",
              },
              {
                step: "4",
                title: "Download for $4.99",
                desc: "One-time payment. No subscription. Your paid email unlocks the original-quality colorized file.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0071e3] text-white font-bold text-[18px]">
                  {item.step}
                </div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO Content: What the AI Handles ─── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What AI Photo Colorization Can Do
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Deep learning trained on millions of photographs — understanding faces, eras, and natural color patterns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Skin tones and faces",
                desc: "The AI recognizes facial features and applies natural, era-appropriate skin colors. Works on portraits from any decade.",
              },
              {
                title: "Period-accurate clothing",
                desc: "Clothing colors are inferred from fabric patterns and era context. Results reflect the style of the decade, not just generic colors.",
              },
              {
                title: "Landscapes and nature",
                desc: "Sky, grass, trees, soil, water — all colorized with natural tones based on context, light direction, and learned patterns.",
              },
              {
                title: "Historical settings",
                desc: "For period photographs, the AI understands architecture, interiors, vehicles, and street scenes of specific eras.",
              },
              {
                title: "Very old formats",
                desc: "Tintypes, daguerreotypes, cabinet cards, and early paper prints — the AI handles the unique tonal range of historical photographic formats.",
              },
              {
                title: "Family group photos",
                desc: "Group portraits with multiple subjects, different clothing, and complex backgrounds are colorized with individual attention per region.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#d2d2d7]/60 bg-white p-6">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO Content: Restore First, Then Colorize ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Best Results: Restore First, Then Colorize
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Colorization works on whatever image data it receives. Start with a clean, restored photo for the best color output.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#d2d2d7]/60 bg-white p-8">
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
                Step 1 — If damaged
              </div>
              <h3 className="text-[20px] font-bold text-[#1d1d1f] mb-3">Restore Damage First</h3>
              <p className="text-[15px] text-[#6e6e73] leading-[1.7] mb-5">
                If your photo has scratches, tears, fading, or water damage, run it through
                AI restoration first. Clean image data produces significantly better colorization results.
              </p>
              <a
                href="/old-photo-restoration"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#1d1d1f] px-6 text-[13px] font-semibold text-white hover:bg-[#2d2d2f] transition-colors"
              >
                Repair Damage First →
              </a>
            </div>

            <div className="rounded-2xl border border-[#0071e3]/20 bg-[#f0f6ff] p-8">
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0071e3]">
                Step 2 — Colorize
              </div>
              <h3 className="text-[20px] font-bold text-[#1d1d1f] mb-3">Add Realistic Color</h3>
              <p className="text-[15px] text-[#6e6e73] leading-[1.7] mb-5">
                Upload your clean, restored photo here. The AI adds period-accurate,
                realistic colors — faces, clothing, backgrounds, and all.
              </p>
              <a
                href="#upload"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0071e3] px-6 text-[13px] font-semibold text-white hover:bg-[#0077ed] transition-colors"
              >
                Colorize Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEO Content: FAQ ─── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "How accurate is AI colorization on very old photos?",
                a: "AI colorization is highly accurate for recognizable elements: sky, vegetation, skin tones, stone, and wood. For specific items — exact eye color, clothing shade, interior paint — the AI makes historically informed guesses based on patterns learned from millions of photographs. Results are realistic artistic interpretations.",
              },
              {
                q: "Can I colorize photos from the 1800s and early 1900s?",
                a: "Yes. The AI handles photos from any era — daguerreotypes, tintypes, cabinet cards, and early paper prints. The model understands historical context and applies period-appropriate colors for clothing, interiors, and settings.",
              },
              {
                q: "Should I restore a damaged photo before colorizing it?",
                a: "Yes, for best results. If your photo has scratches, tears, fading, or water damage, run it through old photo restoration first. Colorization on a clean image produces significantly better results than colorizing a damaged one.",
              },
              {
                q: "Is the preview really free?",
                a: "Yes. Uploading and viewing the colorized preview is free with no account required. If you want the original-quality file to download, print, or share, that costs $4.99 — a one-time payment, no subscription.",
              },
              {
                q: "Are my old family photos kept private?",
                a: "Yes. All uploads are transmitted over encrypted HTTPS. Uploaded photos are automatically deleted from our servers within 24 hours. We never share, sell, or train AI models on your personal photos.",
              },
              {
                q: "How long does old photo colorization take?",
                a: "Most photos are colorized in 15–30 seconds. Complex images with many fine details may take up to 60 seconds.",
              },
              {
                q: "Can AI colorize a photo that is also damaged or faded?",
                a: "Yes, but results are better if you restore the damage first. For best output: restore → then colorize.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-[#d2d2d7]/60 bg-white p-6">
                <dt className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.q}</dt>
                <dd className="text-[15px] text-[#6e6e73] leading-[1.65]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── SEO Content: Related Tools ─── */}
      <section className="py-16 sm:py-20 border-t border-[#d2d2d7]/40 bg-[#faf8f4]">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-8 text-center">
            Related Photo Restoration Tools
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                href: "/old-photo-restoration",
                title: "Old Photo Restoration",
                desc: "Fix scratches, fading, tears, and damage before you colorize. The essential first step for damaged originals.",
              },
              {
                href: "/restore-damaged-photos",
                title: "Restore Damaged Photos",
                desc: "Dedicated repair tool for physically damaged photos — scratches, tears, water damage, and missing edges.",
              },
              {
                href: "/colorize-photos-free",
                title: "Colorize Photos Free",
                desc: "Same AI colorizer — free preview for any black and white photo, unlock HD download when you're ready.",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block rounded-xl border border-[#d2d2d7]/60 bg-white p-6 hover:border-[#0071e3]/40 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
