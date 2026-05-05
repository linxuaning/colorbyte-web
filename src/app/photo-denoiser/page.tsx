import type { Metadata } from "next";
import { Suspense } from "react";
import DenoiseClient from "./denoise-client";

export const metadata: Metadata = {
  title: "AI Photo Denoiser Free: Remove Noise & Grain from Photos Online",
  description:
    "Remove noise, grain, and digital artifacts from photos online with AI. NAFNet-powered denoising preserves fine detail while eliminating sensor noise, JPEG artifacts, and low-light grain. Free preview.",
  alternates: {
    canonical: "/photo-denoiser",
  },
  keywords: [
    "AI photo denoiser",
    "remove noise from photo",
    "photo grain remover",
    "image noise reduction",
    "denoise photo online",
    "remove grain from photo",
    "AI noise reduction",
    "photo noise removal free",
    "reduce image noise",
  ],
  openGraph: {
    title: "AI Photo Denoiser — Remove Noise & Grain from Photos Free",
    description:
      "Remove sensor noise, grain, and JPEG artifacts from photos with AI. NAFNet SIDD model. Free preview, one-time $4.99 for HD download.",
    type: "website",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "AI photo denoiser before and after comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Photo Denoiser — Remove Grain & Noise Free Online",
    description:
      "Remove noise, grain, and artifacts from photos with AI. NAFNet-powered. Free preview.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Remove Noise from a Photo with AI",
  description:
    "Remove sensor noise, grain, and digital artifacts from any photo using AI denoising — free preview, results in 30–60 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Denoiser" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Unlock the denoiser",
      text: "Complete a one-time $4.99 checkout. The same email unlocks all future denoising sessions.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your noisy photo",
      text: "Return with the same email and upload any noisy photo. Supported formats: JPG, PNG, WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "AI removes noise with NAFNet",
      text: "The NAFNet SIDD model analyzes noise patterns and removes grain while preserving image detail. Processing takes 30–60 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download the denoised photo",
      text: "Preview the before/after result and download your clean photo in full resolution.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI photo denoising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI photo denoising uses machine learning to detect and remove noise patterns from images — including sensor noise from high-ISO shots, JPEG compression artifacts, and low-light grain. Unlike simple blurring, AI denoising preserves edge sharpness and fine texture while removing only the noise component. ArtImageHub uses NAFNet (Nonlinear Activation Free Network, Chen et al., 2022) trained on the SIDD dataset of real-world smartphone noise.",
      },
    },
    {
      "@type": "Question",
      name: "What AI model powers the photo denoiser?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ArtImageHub uses NAFNet (Nonlinear Activation Free Network, Chen et al., 2022) trained on SIDD (Smartphone Image Denoising Dataset). NAFNet achieved state-of-the-art PSNR on SIDD benchmarks at publication and is specifically designed for real-world camera noise removal rather than synthetic noise patterns.",
      },
    },
    {
      "@type": "Question",
      name: "What types of noise can be removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAFNet trained on SIDD handles real-world smartphone sensor noise best, including: high-ISO grain from low-light photography, color noise (chroma noise), luminance noise, and mixed noise typical of smartphone cameras. It also partially reduces JPEG compression artifacts and banding. Film grain from analog scans may respond less well than digital sensor noise.",
      },
    },
    {
      "@type": "Question",
      name: "Is photo denoising separate from photo restoration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — ArtImageHub charges separately for each feature. Photo restoration (old photo repair with face enhancement) costs $4.99 one-time. Photo denoising (noise removal with NAFNet) is a separate $4.99 one-time purchase. Each tool can be unlocked independently. You do not need to buy both to use either.",
      },
    },
    {
      "@type": "Question",
      name: "What image formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG, PNG, and WEBP up to 20MB per file. Works with smartphone photos, DSLR exports, scanned images, and screenshots.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Denoiser",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://artimagehub.com/photo-denoiser",
  description:
    "AI-powered photo denoising tool that removes grain, sensor noise, and digital artifacts from photos using NAFNet. Free preview, one-time $4.99 for HD download.",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Real-World Noise Removal",
    "NAFNet SIDD Model",
    "Grain & Artifact Elimination",
    "Edge-Preserving Denoising",
    "High-ISO Photo Cleanup",
    "Results in 30–60 Seconds",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://artimagehub.com/" },
    { "@type": "ListItem", position: 2, name: "Photo Denoiser", item: "https://artimagehub.com/photo-denoiser" },
  ],
};

export default function PhotoDenoiserPage() {
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

      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3] shadow-[0_0_5px_rgba(0,113,227,0.5)]" />
            NAFNet SIDD Model
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Remove Noise from Photos with AI
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Eliminate grain, sensor noise, and JPEG artifacts from any photo. NAFNet preserves fine detail while cleaning every pixel.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 pb-16">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <DenoiseClient />
        </Suspense>
      </div>

      {/* GEO: What Is AI Photo Denoising */}
      <section className="border-t border-[#d2d2d7]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6 text-center">
            What Is AI Photo Denoising?
          </h2>
          <p className="text-[16px] text-[#444] leading-[1.7] mb-5">
            AI photo denoising uses machine learning to detect and separate noise from signal in digital images. Unlike Gaussian blur or median filtering — which reduce noise by averaging pixels and sacrificing sharpness — AI denoising models learn to distinguish noise patterns from real image structure, preserving edges and fine texture while removing grain.
          </p>
          <p className="text-[16px] text-[#444] leading-[1.7] mb-5">
            ArtImageHub uses <strong>NAFNet</strong> (Nonlinear Activation Free Network, Chen et al., ECCV 2022) trained on the <strong>SIDD dataset</strong> (Abdelhamed et al., CVPR 2018) — real-world smartphone noise from five different devices across 10 scenes. NAFNet achieved state-of-the-art PSNR of 39.96 dB on the SIDD benchmark at publication, outperforming earlier architectures like DnCNN, FFDNet, and CBDNet.
          </p>
          <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
            <strong>When to use it:</strong> High-ISO low-light shots, scanned film photos with grain, JPEG compressed images with blocking artifacts, and smartphone night-mode photos where processing introduced color noise. Processing takes 30–60 seconds per image. Free preview; HD download is a one-time $4.99 payment.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-[#1d1d1f] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: "What is AI photo denoising?",
                a: "AI photo denoising uses machine learning to detect and remove noise patterns from images — including sensor noise from high-ISO shots, JPEG compression artifacts, and low-light grain. Unlike simple blurring, AI denoising preserves edge sharpness and fine texture while removing only the noise component. ArtImageHub uses NAFNet (Chen et al., 2022) trained on the SIDD dataset of real-world smartphone noise.",
              },
              {
                q: "What AI model powers the denoiser?",
                a: "ArtImageHub uses NAFNet (Nonlinear Activation Free Network, Chen et al., ECCV 2022) trained on SIDD. NAFNet achieved state-of-the-art PSNR of 39.96 dB on SIDD benchmarks and is designed specifically for real-world camera noise removal.",
              },
              {
                q: "What types of noise can be removed?",
                a: "NAFNet on SIDD handles real-world smartphone sensor noise, including: high-ISO grain from low-light photography, color (chroma) noise, luminance noise, and mixed noise. It also reduces JPEG compression artifacts. Film grain from analog scans may respond less predictably than digital sensor noise.",
              },
              {
                q: "Is photo denoising separate from photo restoration?",
                a: "Yes — each feature costs $4.99 one-time and is purchased independently. Buying restoration does not unlock denoising, and vice versa. Each tool can be unlocked and used on its own.",
              },
              {
                q: "What image formats are supported?",
                a: "JPG, PNG, and WEBP up to 20MB per file. Works with smartphone photos, DSLR exports, scanned images, and screenshots.",
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
    </div>
  );
}
