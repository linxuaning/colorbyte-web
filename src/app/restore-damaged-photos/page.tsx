import type { Metadata } from "next";
import RestoreClient from "../old-photo-restoration/restore-client";
import FloatingCTA from "@/components/FloatingCTA";
import LiveActivity from "@/components/LiveActivity";
import ProofSampleGallery from "@/components/ProofSampleGallery";

export const metadata: Metadata = {
  title: "Restore Damaged Photos Online — AI Fixes Scratches & Tears (2026)",
  description:
    "Upload a damaged photo, AI repairs scratches, tears, fading, and water damage in 30 seconds. 12,400+ photos restored. $4.99 one-time — no Photoshop needed.",
  alternates: { canonical: "/restore-damaged-photos" },
  keywords: [
    "restore damaged photos",
    "damaged photo repair online",
    "fix scratched photos",
    "repair torn photos online",
    "AI photo restoration",
    "restore faded photos",
    "water damaged photo repair",
  ],
  openGraph: {
    title: "Restore Damaged Photos Online — ArtImageHub",
    description:
      "AI-powered damaged photo restoration. Fix scratches, tears, fading, and water damage in seconds. No skills required.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Before and after damaged photo restoration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restore Damaged Photos Online — ArtImageHub",
    description:
      "AI-powered damaged photo restoration. Fix scratches, tears, fading, and water damage in seconds.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Damaged Photos Online with AI",
  description:
    "Restore damaged, torn, faded, or scratched photos with AI in under 60 seconds using ArtImageHub.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Unlock access",
      text: "Complete a one-time payment to activate upload and processing access on your email.",
      image: "https://artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your damaged photo",
      text: "Return with the same email and upload your damaged photo. Supported formats: JPG, PNG, WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "AI repairs the damage",
      text: "AI analyzes each damaged area — scratches, tears, fading, blur — and applies targeted corrections to each region.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download the restored photo",
      text: "Your paid email unlocks the full-resolution, restored download. Print-ready results at the same dimensions as your original.",
      image: "https://artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of photo damage can AI restore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI restoration handles scratches and fine lines, tears and physical damage, color fading, yellowing, water stains, mold marks, soft focus, and missing edges. For most old family photos with typical age-related wear, the AI handles the job completely without any manual retouching.",
      },
    },
    {
      "@type": "Question",
      name: "How damaged does a photo have to be before AI can't fix it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI restoration works best when some underlying image information survives. If more than 20% of the photo is physically missing, AI fills with plausible content based on context. For modestly damaged, faded, or scratched photos — the vast majority of old family photos — results are typically excellent.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay before uploading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Payment activates upload and processing access on your email. Complete checkout first, then return here with the same email to start restoring your damaged photos.",
      },
    },
    {
      "@type": "Question",
      name: "What image formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For damaged originals, scan at 600 DPI or higher and upload as PNG for the best restoration results.",
      },
    },
    {
      "@type": "Question",
      name: "Are my photos kept private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All photos are transmitted over encrypted HTTPS. Uploaded photos are automatically deleted from our servers within 24 hours. We never share, sell, or use your photos to train AI models.",
      },
    },
    {
      "@type": "Question",
      name: "Can you restore a photo that is torn in pieces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the photo is torn in pieces, digitize each piece first, then use photo editing software to align the pieces before uploading. AI restoration can then heal the seam lines and reconstruct missing areas at the edges. If large sections are entirely missing, AI fills using contextual guessing — results are plausible but not pixel-accurate to the original.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to restore a damaged photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Restoration costs $4.99 per photo — a one-time payment, no subscription. For comparison, professional manual retouching services typically cost $30–$150 per image and take 3–7 days.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Damaged Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    description:
      "One-time payment to restore a damaged photo. Unlocks upload, processing, and full-resolution download.",
  },
};

export default function RestoreDamagedPhotosPage() {
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
            AI Damage Repair
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Restore Damaged Photos
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            AI repairs scratches, tears, fading, and water damage in under 60 seconds.
            Upload once, get a print-ready result back — no Photoshop skills needed.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6e6e73]">
            {[
              { icon: "✓", text: "10,000+ photos restored" },
              { icon: "✓", text: "4.8★ average rating" },
              { icon: "✓", text: "Results in under 60 seconds" },
            ].map((badge) => (
              <span key={badge.text} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-[#d2d2d7]/70 bg-[#faf8f4] px-5 py-4 text-left shadow-sm">
            <div className="grid gap-2 text-[13px] text-[#6e6e73] sm:grid-cols-3">
              <p>Pay once to unlock upload and processing on your email.</p>
              <p>Uploads are encrypted and deleted within 24 hours.</p>
              <p>Supports JPG, PNG, and WEBP up to 20 MB.</p>
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
        <RestoreClient landingPage="/restore-damaged-photos" />
      </div>

      <ProofSampleGallery
        className="bg-white py-8 sm:py-10"
        title="See what gets fixed after you start."
        description="Real results from damaged originals — scratches removed, colors revived, faces sharpened."
      />

      <FloatingCTA landingPage="/restore-damaged-photos" />

      {/* ─── SEO Content: How It Works ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Damaged Photo Restoration Works
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Four steps from damaged original to print-ready result.
            </p>
          </div>

          <div className="grid sm:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Unlock access",
                desc: "One-time payment activates upload and processing on your email.",
              },
              {
                step: "2",
                title: "Upload your photo",
                desc: "Return with the same email. Upload your damaged scan — JPG, PNG, or WEBP up to 20MB.",
              },
              {
                step: "3",
                title: "AI repairs damage",
                desc: "The model identifies each damage type — scratch, fade, tear — and applies targeted corrections per region.",
              },
              {
                step: "4",
                title: "Download result",
                desc: "Your paid email unlocks the full-resolution, restored download. Print-ready at any size.",
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

      {/* ─── SEO Content: Types of Damage ─── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What Kinds of Damage Can AI Repair?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              From surface scratches to severe physical damage — the AI handles the full range of common photo deterioration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Scratches and fine lines",
                desc: "Physical marks from handling, storage, or accidents. AI detects linear damage patterns and removes them while preserving underlying detail.",
              },
              {
                title: "Tears and missing edges",
                desc: "Physical pieces missing from the photo. AI fills damaged edges and tears using context from the surrounding image.",
              },
              {
                title: "Fading and yellowing",
                desc: "Chemical degradation causes colors to fade and paper to yellow over decades. AI corrects tonal shifts and restores original color balance.",
              },
              {
                title: "Water and mold damage",
                desc: "Water stains and flood damage create distinctive discoloration patterns. AI significantly reduces or eliminates these moisture artifacts.",
              },
              {
                title: "Blurry and soft faces",
                desc: "Old cameras often produced soft or out-of-focus faces. Dedicated face enhancement models reconstruct sharpness and natural detail.",
              },
              {
                title: "Low resolution and grain",
                desc: "Old scans produce grainy, low-resolution images. AI super-resolution upscales up to 4× with convincing, natural-looking detail.",
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

      {/* ─── SEO Content: Comparison Table ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Ways to Restore Damaged Photos
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Compare your options before you decide.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#d2d2d7]/60 bg-white">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[#d2d2d7]/40">
                  <th className="px-6 py-4 text-left font-semibold text-[#1d1d1f]">Method</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#1d1d1f]">Time</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#1d1d1f]">Cost</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#1d1d1f]">Skill Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/30">
                <tr className="bg-[#f0f6ff]">
                  <td className="px-6 py-4 font-semibold text-[#0071e3]">AI tool (ArtImageHub)</td>
                  <td className="px-6 py-4 text-[#1d1d1f]">Under 1 minute</td>
                  <td className="px-6 py-4 text-[#1d1d1f]">$4.99 / photo</td>
                  <td className="px-6 py-4 text-[#1d1d1f]">None</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-[#1d1d1f]">Photoshop (DIY)</td>
                  <td className="px-6 py-4 text-[#6e6e73]">2–10 hours</td>
                  <td className="px-6 py-4 text-[#6e6e73]">$55+/month</td>
                  <td className="px-6 py-4 text-[#6e6e73]">Advanced</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-[#1d1d1f]">Professional retoucher</td>
                  <td className="px-6 py-4 text-[#6e6e73]">3–7 days</td>
                  <td className="px-6 py-4 text-[#6e6e73]">$30–$150 / photo</td>
                  <td className="px-6 py-4 text-[#6e6e73]">None (you hire)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-[#1d1d1f]">Local print shop</td>
                  <td className="px-6 py-4 text-[#6e6e73]">2–5 days</td>
                  <td className="px-6 py-4 text-[#6e6e73]">$20–$80 / photo</td>
                  <td className="px-6 py-4 text-[#6e6e73]">None (you hire)</td>
                </tr>
              </tbody>
            </table>
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
                q: "What types of photo damage can AI restore?",
                a: "AI restoration handles scratches and fine lines, tears and physical damage, color fading, yellowing, water stains, mold marks, soft focus, and missing edges. For most old family photos with typical age-related wear, the AI handles the job completely without any manual retouching.",
              },
              {
                q: "How damaged does a photo have to be before AI can't fix it?",
                a: "AI works best when some underlying image information survives. If more than 20% of the photo is physically missing, AI fills with plausible content based on context. For modestly damaged, faded, or scratched photos — the vast majority of old family photos — results are typically excellent.",
              },
              {
                q: "Do I need to pay before uploading?",
                a: "Yes. Payment activates upload and processing access on your email. Complete checkout first, then return here with the same email to start restoring.",
              },
              {
                q: "What image formats are supported?",
                a: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For damaged originals, scan at 600 DPI or higher and upload as PNG for best results.",
              },
              {
                q: "Are my photos kept private?",
                a: "Yes. All photos are transmitted over encrypted HTTPS. Uploaded photos are automatically and permanently deleted from our servers within 24 hours. We never share, sell, or train AI models on your photos.",
              },
              {
                q: "Can you restore a photo that is torn in pieces?",
                a: "If the photo is torn in pieces, digitize each piece first, then use photo editing software to align the pieces before uploading. AI restoration can then heal the seam lines and reconstruct missing areas at the edges.",
              },
              {
                q: "How much does it cost to restore a damaged photo?",
                a: "Restoration costs $4.99 per photo — a one-time payment, no subscription. Professional manual retouching typically costs $30–$150 per image and takes 3–7 days.",
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

      {/* ─── SEO Content: Related Reading ─── */}
      <section className="py-16 sm:py-20 border-t border-[#d2d2d7]/40 bg-[#faf8f4]">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-8 text-center">
            More Photo Restoration Tools
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                href: "/old-photo-restoration",
                title: "Old Photo Restoration",
                desc: "The complete AI restoration tool for old, faded, and aged family photos.",
              },
              {
                href: "/blog/fix-old-photos-online",
                title: "Fix Old Photos Online: Complete Guide",
                desc: "Step-by-step guide to digitizing and restoring damaged originals at home.",
              },
              {
                href: "/blog/old-photo-restoration-guide",
                title: "Photo Restoration Guide",
                desc: "Everything you need to know before restoring your first damaged photo.",
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
