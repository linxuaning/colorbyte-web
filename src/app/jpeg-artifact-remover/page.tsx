import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import JpegClient from "./jpeg-client";

export const metadata: Metadata = {
  title: "Remove JPEG Artifacts Online Free: AI JPEG Artifact Remover — Fix Pixelated Photos",
  description:
    "Fix JPEG compression artifacts, pixelation, blocking, and ringing in photos with AI. SwinIR model restores clean images from heavily compressed JPEGs. $4.99 one-time, no subscription.",
  keywords: [
    "remove jpeg artifacts",
    "fix jpeg compression",
    "jpeg artifact remover",
    "fix pixelated photo",
    "remove compression artifacts",
    "fix blocky photo",
    "jpeg artifact removal online",
    "ai image quality enhancer",
    "fix compressed image",
    "image artifact removal",
  ],
  openGraph: {
    title: "AI JPEG Artifact Remover — Fix Pixelated & Compressed Photos",
    description:
      "Remove JPEG compression artifacts, blocking, and ringing from photos using SwinIR AI. $4.99 one-time — no subscription, no app install.",
    url: "https://artimagehub.com/jpeg-artifact-remover",
    type: "website",
  },
  alternates: { canonical: "https://artimagehub.com/jpeg-artifact-remover" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "ArtImageHub JPEG Artifact Remover",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web Browser",
      url: "https://artimagehub.com/jpeg-artifact-remover",
      description:
        "AI-powered JPEG artifact remover using SwinIR. Fixes blocking, ringing, banding, and pixelation from over-compressed JPEG images in 30–60 seconds. $4.99 one-time payment.",
      offers: {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
      },
      featureList: [
        "JPEG blocking artifact removal",
        "Ringing / halo artifact fix",
        "Color banding correction",
        "Pixelation smoothing",
        "SwinIR AI model (JPEG CAR benchmark)",
        "30–60 second processing",
        "Full-resolution HD download",
        "No subscription required",
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Remove JPEG Artifacts with AI",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Pay once to unlock",
          text: "Complete a one-time $4.99 payment to unlock the JPEG Artifact Remover. No subscription needed.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Upload your compressed photo",
          text: "Return with the same email and upload your pixelated or blocky JPG, PNG, or WEBP photo (up to 20 MB).",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "AI cleans the compression artifacts",
          text: "SwinIR analyzes the compression patterns and restores clean image detail in 30–60 seconds.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Download the clean result",
          text: "Download your artifact-free photo in full resolution with no watermark.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are JPEG artifacts and why do they appear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JPEG artifacts are visual distortions caused by lossy compression. When a photo is saved as JPEG at low quality settings, the compression algorithm discards fine detail to reduce file size. This creates blocking (blocky 8×8 pixel squares), ringing (halos around sharp edges), banding (abrupt color transitions), and pixelation. The lower the JPEG quality setting, the more severe the artifacts.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI really fix JPEG compression artifacts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — AI models trained specifically for JPEG artifact reduction can recover significant detail. SwinIR (Shifted Window Transformer) learns the statistical patterns of JPEG compression from thousands of image pairs, then reconstructs the likely original content. It removes blocking, softens ringing, and restores smooth gradients. Results depend on compression severity — quality 40–75 images respond best.",
          },
        },
        {
          "@type": "Question",
          name: "What types of compression damage does it fix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blocking artifacts (mosaic-like 8×8 squares), ringing/halo artifacts around edges, color banding in smooth gradients, general pixelation and loss of fine detail. It works on any image that has been JPEG-compressed at quality 75 or below, including photos re-saved multiple times.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from just upscaling or sharpening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upscaling makes images bigger but preserves the artifacts. Sharpening enhances edges but also sharpens the blocky compression squares, making them more visible. SwinIR's JPEG artifact correction model specifically targets and removes compression patterns before any other enhancement. The result is a genuinely cleaner image, not just a sharper one.",
          },
        },
        {
          "@type": "Question",
          name: "Does this cost a monthly subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The JPEG Artifact Remover is $4.99 one-time — separate from other ArtImageHub tools. One payment gives unlimited access to artifact removal with no recurring charges.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://artimagehub.com" },
        { "@type": "ListItem", position: 2, name: "JPEG Artifact Remover", item: "https://artimagehub.com/jpeg-artifact-remover" },
      ],
    },
  ],
};

export default function JpegArtifactRemoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {/* Hero */}
        <section className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-1.5 text-[13px] font-medium text-[#6e6e73]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]" />
            AI JPEG Artifact Remover · SwinIR · $4.99 one-time
          </div>
          <h1 className="text-[40px] font-bold tracking-[-0.04em] text-[#1d1d1f] sm:text-[52px]">
            Remove JPEG Artifacts{" "}
            <span className="text-[#0071e3]">with AI</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-[1.65] text-[#6e6e73]">
            Fix blocky, pixelated, and over-compressed photos in 30–60 seconds.
            SwinIR AI removes blocking, ringing, and banding from JPEG compression. $4.99 one-time — no subscription, no app install.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[13px] text-[#6e6e73]">
            {[
              "Blocking artifacts",
              "Ringing & halos",
              "Color banding",
              "30–60 sec results",
              "No subscription",
            ].map((f) => (
              <span key={f} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-[#34c759]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* Tool */}
        <Suspense fallback={<div className="mt-10 h-64 animate-pulse rounded-2xl bg-[#f5f5f7]" />}>
          <JpegClient />
        </Suspense>

        {/* What it fixes */}
        <section className="mt-20">
          <h2 className="text-center text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            What JPEG Damage Does It Fix?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Blocking Artifacts",
                desc: "JPEG divides images into 8×8 pixel blocks during compression. At low quality, these blocks become visible as a mosaic or grid pattern across smooth areas.",
              },
              {
                title: "Ringing & Halos",
                desc: "Sharp edges in JPEG images develop ghost outlines and halos — oscillating patterns that spread from high-contrast boundaries into surrounding areas.",
              },
              {
                title: "Color Banding",
                desc: "Smooth color gradients (skies, skin tones, shadows) show abrupt color steps instead of smooth transitions after heavy JPEG compression or repeated re-saving.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#d2d2d7]/40 bg-[#f5f5f7] p-6">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6e6e73]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works technically */}
        <section className="mt-20 rounded-2xl border border-[#d2d2d7]/40 bg-[#f5f5f7] p-10">
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            How AI Artifact Removal Works
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-[#6e6e73]">
            Standard JPEG compression uses Discrete Cosine Transform (DCT) to convert image blocks into frequency
            components, then discards high-frequency information. This is irreversible — once you save a JPEG at
            quality 40, those pixels are gone.
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#6e6e73]">
            ArtImageHub uses{" "}
            <strong className="text-[#1d1d1f]">SwinIR</strong> (Swin Transformer for Image Restoration, ICCV 2021).
            The JPEG compression artifact reduction variant was trained on hundreds of thousands of image pairs at
            compression qualities 10–75. It learns the statistical fingerprint of each artifact type and reconstructs
            the most likely original pixel values — recovering smooth gradients, clean edges, and fine texture.
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#6e6e73]">
            The result is not a guess or a blur — it is a learned reconstruction based on what real, uncompressed
            images look like. Skin tones become smooth, text edges become crisp, and sky gradients lose their steps.
          </p>
        </section>

        {/* Comparison */}
        <section className="mt-20">
          <h2 className="text-center text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            How Does It Compare?
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-[#d2d2d7]/40">
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Tool</th>
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Cost</th>
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Removes Blocking?</th>
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Platform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ArtImageHub JPEG Remover", "$4.99 one-time", "Yes — SwinIR AI", "Browser"],
                  ["Topaz DeNoise AI", "$99/year", "Partial (noise-focused)", "Desktop"],
                  ["Lightroom Detail panel", "$9.99/month", "Limited", "Desktop"],
                  ["Photoshop Reduce Noise", "$22.99/month", "Manual, limited", "Desktop"],
                  ["Online free tools", "Free", "Very limited", "Browser"],
                ].map(([tool, price, blocking, platform]) => (
                  <tr key={tool} className="border-b border-[#d2d2d7]/20">
                    <td className={`py-3 pr-4 font-medium ${tool.startsWith("ArtImage") ? "text-[#0071e3]" : "text-[#1d1d1f]"}`}>{tool}</td>
                    <td className="py-3 pr-4 text-[#6e6e73]">{price}</td>
                    <td className="py-3 pr-4 text-[#6e6e73]">{blocking}</td>
                    <td className="py-3 text-[#6e6e73]">{platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* When to use */}
        <section className="mt-20">
          <h2 className="text-center text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            When Should You Use It?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Printing compressed photos",
                desc: "Screen-quality JPEGs look fine at 72 PPI but show blocking at 300 DPI print resolution. Clean up compression before sending to the printer.",
              },
              {
                title: "Screenshots and screen recordings",
                desc: "Screen captures saved as JPEG, video frame exports, and heavily compressed social media downloads all carry DCT blocking artifacts.",
              },
              {
                title: "Old email attachments",
                desc: "Photos shared via early email or messaging apps were often auto-compressed to <100KB. These small files carry extreme compression that blocks out fine detail.",
              },
              {
                title: "Re-saved JPEGs",
                desc: "Every time a JPEG is opened and re-saved, compression artifacts compound. Photos edited and re-saved repeatedly can become visibly degraded.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#d2d2d7]/40 bg-[#f5f5f7] p-6">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6e6e73]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-center text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-5">
            {[
              {
                q: "What are JPEG artifacts?",
                a: "JPEG artifacts are visual distortions from lossy compression: blocking (mosaic squares), ringing (halos around edges), and banding (abrupt color steps). They appear when photos are saved at low JPEG quality or compressed multiple times.",
              },
              {
                q: "Can AI really recover quality from a highly compressed JPEG?",
                a: "For moderate compression (quality 40–75), AI models like SwinIR recover significant quality — smooth gradients, crisp edges, and reduced blocking. For extreme compression (quality below 20), artifacts are reduced but original detail cannot be fully reconstructed.",
              },
              {
                q: "Is this different from upscaling?",
                a: "Yes. Upscaling makes the image larger but preserves the artifacts at higher resolution. JPEG artifact removal specifically targets and removes compression patterns first, then you can optionally upscale. Running both produces the best result.",
              },
              {
                q: "How long does it take?",
                a: "30–60 seconds per photo depending on image size and server load.",
              },
              {
                q: "Is there a subscription?",
                a: "No. The JPEG Artifact Remover is $4.99 one-time — separate from other ArtImageHub tools. One payment gives unlimited access to artifact removal with no recurring charges.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#d2d2d7]/40 bg-[#f5f5f7] p-6">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f]">{item.q}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#6e6e73]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-20 rounded-2xl bg-[#f5f5f7] p-8 text-center">
          <p className="text-[15px] font-semibold text-[#1d1d1f]">Other AI Photo Tools</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {[
              { href: "/old-photo-restoration", label: "Old Photo Restoration" },
              { href: "/photo-colorizer", label: "Photo Colorizer" },
              { href: "/photo-enhancer", label: "Photo Enhancer" },
              { href: "/photo-denoiser", label: "Photo Denoiser" },
              { href: "/photo-deblurrer", label: "Photo Deblurrer" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[#d2d2d7]/60 bg-white px-4 py-2 text-[13px] text-[#1d1d1f] hover:border-[#0071e3]/40 hover:text-[#0071e3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
