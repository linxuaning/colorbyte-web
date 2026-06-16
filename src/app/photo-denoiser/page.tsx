import type { Metadata } from "next";
import { Suspense } from "react";
import DenoiseClient from "./denoise-client";

export const metadata: Metadata = {
  title: "AI Photo Denoiser: Remove Noise & Grain from Photos Online",
  description:
    "Remove noise, grain, and digital artifacts from photos online with AI. NAFNet-powered denoising preserves fine detail while eliminating sensor noise, JPEG artifacts, and low-light grain.",
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
    title: "AI Photo Denoiser — Remove Noise & Grain from Photos",
    description:
      "Remove sensor noise, grain, and JPEG artifacts from photos with AI. NAFNet SIDD model, one-time $4.99 for HD download.",
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
    title: "AI Photo Denoiser — Remove Grain & Noise Online",
    description:
      "Remove noise, grain, and artifacts from photos with AI. NAFNet-powered.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Remove Noise from a Photo with AI",
  description:
    "Remove sensor noise, grain, and digital artifacts from any photo using AI denoising — $4.99 one-time unlock, results in 30–60 seconds.",
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
      name: "What exactly is AI photo denoising and how is it different from blur filters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI photo denoising uses machine learning models to detect and remove noise patterns from images while preserving the underlying signal. Traditional blur-based denoising (Gaussian blur, median filter) reduces noise by averaging neighboring pixels, which sacrifices sharpness and fine texture in exchange for smoother output. AI denoising is fundamentally different: the model is trained on millions of paired noisy and clean images, learning the statistical signature of real-world noise (sensor noise, ISO grain, JPEG compression artifacts) versus actual image content (edges, textures, details). At inference time it subtracts only what it identifies as noise, leaving sharp edges and fine texture intact. ArtImageHub uses NAFNet (Chen et al., ECCV 2022) trained on the SIDD dataset of real-world smartphone noise, achieving state-of-the-art PSNR of 39.96 dB on SIDD benchmarks at publication time.",
      },
    },
    {
      "@type": "Question",
      name: "What AI model powers the ArtImageHub photo denoiser?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ArtImageHub runs NAFNet (Nonlinear Activation Free Network), a peer-reviewed denoising architecture published by Chen et al. at ECCV 2022. NAFNet replaces the GELU/Sigmoid activation functions used by earlier denoising networks with simpler element-wise operations, which made it both faster and more accurate than predecessor architectures like DnCNN, FFDNet, and CBDNet. The specific weights ArtImageHub uses were trained on SIDD (Smartphone Image Denoising Dataset, Abdelhamed et al., CVPR 2018) — paired noisy and clean photos captured from five smartphone cameras across 10 different scenes. SIDD training is what makes NAFNet effective on real-world digital photo noise rather than synthetic Gaussian noise. The same model architecture is used across academic and commercial photo denoising pipelines, so ArtImageHub is running the published research directly without proprietary modifications.",
      },
    },
    {
      "@type": "Question",
      name: "What types of photo noise can ArtImageHub actually remove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAFNet trained on SIDD handles the noise types most commonly seen in real-world digital photography. High-ISO grain from low-light photography (smartphone or DSLR shots taken at ISO 1600 or above) is the strongest case — visible color and luminance noise patterns are removed cleanly while preserving edge detail. JPEG compression artifacts (blocky 8x8 patterns and ringing around edges) are partially reduced as a side effect, though the dedicated JPEG Artifact Remover tool produces better results for that specific case. Color noise (chroma noise) showing as random colored speckles in shadow areas is handled well. Film grain from analog scans may respond less predictably because NAFNet was trained on digital sensor noise, not film grain — film tends to have a different statistical signature that the model wasn't optimized for. For film grain specifically, consider a film-emulation tool or Photoshop's manual noise reduction.",
      },
    },
    {
      "@type": "Question",
      name: "Is photo denoising sold separately from photo restoration on ArtImageHub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the denoiser and restoration tools are independent $4.99 purchases. ArtImageHub uses an unbundled per-feature pricing model: photo restoration (crack repair, face enhancement with GFPGAN, colorization with DDColor, super-resolution with Real-ESRGAN) is one $4.99 one-time purchase. Photo denoising (NAFNet noise removal) is a separate $4.99 one-time purchase. JPEG artifact removal, photo deblurring, and other tools each unlock with their own $4.99 payment. This pricing structure means you only pay for the tools you actually use rather than buying a bundle that includes capabilities you do not need. Each tool unlock is tied to your email address and persists indefinitely — you can return later to use that tool again without re-paying. There are no bundles, subscriptions, or recurring charges. Buy what you need, when you need it.",
      },
    },
    {
      "@type": "Question",
      name: "What image formats and file sizes does the photo denoiser support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG, PNG, and WEBP files up to 20 MB per upload are supported. The denoiser works on photos from any source — smartphone exports from iOS and Android, RAW-converted JPEGs from DSLR or mirrorless cameras, scanned images saved as JPG or PNG, screenshots, and downloaded images from social media or messaging apps. For best results, upload the original highest-quality image before any additional compression, editing, or sharing. Re-saving a denoised result as JPEG at low quality can reintroduce compression artifacts the model just removed, partially undoing the denoising. If you plan to share the denoised result, save it as PNG (lossless) or as JPEG at quality 90 or higher. HEIC files from iPhone are not currently supported — convert to JPG or PNG first using your phone's share menu or any image converter. Files larger than 20 MB should be downsized in your image software before upload.",
      },
    },
    {
      "@type": "Question",
      name: "How is AI photo denoising different from photo sharpening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Denoising and sharpening are opposite operations that solve different problems. Sharpening increases local contrast at edges to create the visual perception of crispness — Unsharp Mask in Photoshop, Detail Enhancer in Lightroom, and similar tools all work by amplifying high-frequency content. The catch is that noise is also high-frequency content, so sharpening tends to amplify grain along with edges, often making compressed or noisy photos look worse rather than better. AI denoising specifically models what noise looks like and subtracts it from the image, leaving real edges and textures intact. The two operations also have an order: denoising should always come first, then sharpening if needed. Sharpening a noisy photo amplifies noise; sharpening a denoised photo enhances real detail. Apply ArtImageHub's denoiser first, then if you want extra crispness use Photoshop, Lightroom, or any sharpening tool on the cleaned output. Running them in the wrong order produces visibly worse results.",
      },
    },
    {
      "@type": "Question",
      name: "How long does AI photo denoising take per image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most photos finish denoising in 30–60 seconds end-to-end, including upload, AI processing, and result rendering. Processing time scales with image dimensions: a typical 12-megapixel smartphone photo (4000x3000 pixels) takes about 30 seconds, a 24-megapixel DSLR photo takes 45 to 60 seconds, and a 50-megapixel medium-format scan can take up to 90 seconds. The NAFNet model runs the full image through the network in a single pass without tiling for images under about 25 megapixels, which avoids edge artifacts at tile boundaries. For very large images above 25 megapixels, the system uses overlapping tile processing that adds a few seconds of overhead. If you are processing a batch of denoising work, the per-image cost stays consistent — there is no warmup penalty after the first image, since the model stays loaded between requests for paid users. Processing time is the same for paid users.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ArtImageHub's NAFNet denoiser and Topaz DeNoise AI or Adobe AI Denoise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Topaz DeNoise AI ($79/year) and Adobe Lightroom AI Denoise ($9.99+/month) are commercial denoising tools using proprietary AI models. The underlying technology is similar across all three products — modern AI denoising converged on transformer-based or efficient CNN architectures trained on real-world noise datasets. Differences are mostly in user interface (Topaz is desktop with sliders, Adobe is integrated into Lightroom workflow, ArtImageHub is web-based with one-click processing), pricing model (Topaz is annual subscription, Adobe is monthly subscription, ArtImageHub is $4.99 one-time per project), and the specific training data (each vendor uses their own dataset). For a typical user denoising a finite batch of photos, ArtImageHub's $4.99 one-time pricing is dramatically cheaper than committing to a monthly or annual subscription. For users who denoise photos every week as part of a professional workflow, Topaz or Adobe make more sense as ongoing tools. Quality differences between the three on most real-world photos are smaller than the marketing implies.",
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
    "AI-powered photo denoising tool that removes grain, sensor noise, and digital artifacts from photos using NAFNet. One-time $4.99 for HD download.",
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
            What Does an AI Photo Denoiser Actually Remove?
          </h2>
          <p className="text-[16px] text-[#444] leading-[1.7] mb-5">
            AI photo denoising uses machine learning to detect and separate noise from signal in digital images. Unlike Gaussian blur or median filtering — which reduce noise by averaging pixels and sacrificing sharpness — AI denoising models learn to distinguish noise patterns from real image structure, preserving edges and fine texture while removing grain.
          </p>
          <p className="text-[16px] text-[#444] leading-[1.7] mb-5">
            ArtImageHub uses <strong>NAFNet</strong> (Nonlinear Activation Free Network, Chen et al., ECCV 2022) trained on the <strong>SIDD dataset</strong> (Abdelhamed et al., CVPR 2018) — real-world smartphone noise from five different devices across 10 scenes. NAFNet achieved state-of-the-art PSNR of 39.96 dB on the SIDD benchmark at publication, outperforming earlier architectures like DnCNN, FFDNet, and CBDNet.
          </p>
          <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
            <strong>When to use it:</strong> High-ISO low-light shots, scanned film photos with grain, JPEG compressed images with blocking artifacts, and smartphone night-mode photos where processing introduced color noise. Processing takes 30–60 seconds per image. HD download is included in the one-time $4.99 payment.
          </p>
        </div>
      </section>

      {/* Competitor comparison */}
      <section className="border-t border-[#d2d2d7]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-8 text-center">
            How Does ArtImageHub Compare to Other Denoisers?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#d2d2d7]/60">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[#d2d2d7]/60 bg-[#f5f5f7]">
                  <th className="px-4 py-3 text-left font-semibold text-[#1d1d1f]">Tool</th>
                  <th className="px-4 py-3 text-center font-semibold text-[#1d1d1f]">Price</th>
                  <th className="px-4 py-3 text-center font-semibold text-[#1d1d1f]">Model</th>
                  <th className="px-4 py-3 text-center font-semibold text-[#1d1d1f]">No Subscription</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/40 bg-white">
                <tr className="bg-blue-50/40">
                  <td className="px-4 py-3 font-semibold text-[#0071e3]">ArtImageHub</td>
                  <td className="px-4 py-3 text-center">$4.99 one-time</td>
                  <td className="px-4 py-3 text-center">NAFNet SIDD</td>
                  <td className="px-4 py-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#444]">Topaz DeNoise AI</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">$79/year</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">Proprietary</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">❌</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#444]">Adobe Lightroom AI Denoise</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">$9.99+/month</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">Adobe Sensei</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">❌</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#444]">DxO PhotoLab</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">$229 one-time</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">PRIME / DeepPRIME</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">✅</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#444]">Neat Image</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">$44.90 one-time</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">Traditional NR</td>
                  <td className="px-4 py-3 text-center text-[#6e6e73]">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-[#6e6e73] text-center">
            ArtImageHub is the lowest-cost AI denoiser with no subscription required. Best for occasional use or single-project needs.
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
                q: "What exactly is AI photo denoising and how is it different from blur filters?",
                a: "AI photo denoising uses machine learning models to detect and remove noise patterns from images while preserving the underlying signal. Traditional blur-based denoising (Gaussian blur, median filter) reduces noise by averaging neighboring pixels, which sacrifices sharpness and fine texture in exchange for smoother output. AI denoising is fundamentally different: the model is trained on millions of paired noisy and clean images, learning the statistical signature of real-world noise (sensor noise, ISO grain, JPEG compression artifacts) versus actual image content (edges, textures, details). At inference time it subtracts only what it identifies as noise, leaving sharp edges and fine texture intact. ArtImageHub uses NAFNet (Chen et al., ECCV 2022) trained on the SIDD dataset of real-world smartphone noise, achieving state-of-the-art PSNR of 39.96 dB on SIDD benchmarks at publication time.",
              },
              {
                q: "What AI model powers the ArtImageHub photo denoiser?",
                a: "ArtImageHub runs NAFNet (Nonlinear Activation Free Network), a peer-reviewed denoising architecture published by Chen et al. at ECCV 2022. NAFNet replaces the GELU/Sigmoid activation functions used by earlier denoising networks with simpler element-wise operations, which made it both faster and more accurate than predecessor architectures like DnCNN, FFDNet, and CBDNet. The specific weights ArtImageHub uses were trained on SIDD (Smartphone Image Denoising Dataset, Abdelhamed et al., CVPR 2018) — paired noisy and clean photos captured from five smartphone cameras across 10 different scenes. SIDD training is what makes NAFNet effective on real-world digital photo noise rather than synthetic Gaussian noise. The same model architecture is used across academic and commercial photo denoising pipelines, so ArtImageHub is running the published research directly without proprietary modifications.",
              },
              {
                q: "What types of photo noise can ArtImageHub actually remove?",
                a: "NAFNet trained on SIDD handles the noise types most commonly seen in real-world digital photography. High-ISO grain from low-light photography (smartphone or DSLR shots taken at ISO 1600 or above) is the strongest case — visible color and luminance noise patterns are removed cleanly while preserving edge detail. JPEG compression artifacts (blocky 8×8 patterns and ringing around edges) are partially reduced as a side effect, though the dedicated JPEG Artifact Remover tool produces better results for that specific case. Color noise (chroma noise) showing as random colored speckles in shadow areas is handled well. Film grain from analog scans may respond less predictably because NAFNet was trained on digital sensor noise, not film grain — film tends to have a different statistical signature that the model wasn't optimized for. For film grain specifically, consider a film-emulation tool or Photoshop's manual noise reduction.",
              },
              {
                q: "Is photo denoising sold separately from photo restoration on ArtImageHub?",
                a: "Yes, the denoiser and restoration tools are independent $4.99 purchases. ArtImageHub uses an unbundled per-feature pricing model: photo restoration (crack repair, face enhancement with GFPGAN, colorization with DDColor, super-resolution with Real-ESRGAN) is one $4.99 one-time purchase. Photo denoising (NAFNet noise removal) is a separate $4.99 one-time purchase. JPEG artifact removal, photo deblurring, and other tools each unlock with their own $4.99 payment. This pricing structure means you only pay for the tools you actually use rather than buying a bundle that includes capabilities you do not need. Each tool unlock is tied to your email address and persists indefinitely — you can return later to use that tool again without re-paying. There are no bundles, subscriptions, or recurring charges. Buy what you need, when you need it.",
              },
              {
                q: "What image formats and file sizes does the photo denoiser support?",
                a: "JPG, PNG, and WEBP files up to 20 MB per upload are supported. The denoiser works on photos from any source — smartphone exports from iOS and Android, RAW-converted JPEGs from DSLR or mirrorless cameras, scanned images saved as JPG or PNG, screenshots, and downloaded images from social media or messaging apps. For best results, upload the original highest-quality image before any additional compression, editing, or sharing. Re-saving a denoised result as JPEG at low quality can reintroduce compression artifacts the model just removed, partially undoing the denoising. If you plan to share the denoised result, save it as PNG (lossless) or as JPEG at quality 90 or higher. HEIC files from iPhone are not currently supported — convert to JPG or PNG first using your phone's share menu or any image converter. Files larger than 20 MB should be downsized in your image software before upload.",
              },
              {
                q: "How is AI photo denoising different from photo sharpening?",
                a: "Denoising and sharpening are opposite operations that solve different problems. Sharpening increases local contrast at edges to create the visual perception of crispness — Unsharp Mask in Photoshop, Detail Enhancer in Lightroom, and similar tools all work by amplifying high-frequency content. The catch is that noise is also high-frequency content, so sharpening tends to amplify grain along with edges, often making compressed or noisy photos look worse rather than better. AI denoising specifically models what noise looks like and subtracts it from the image, leaving real edges and textures intact. The two operations also have an order: denoising should always come first, then sharpening if needed. Sharpening a noisy photo amplifies noise; sharpening a denoised photo enhances real detail. Apply ArtImageHub's denoiser first, then if you want extra crispness use Photoshop, Lightroom, or any sharpening tool on the cleaned output. Running them in the wrong order produces visibly worse results.",
              },
              {
                q: "How long does AI photo denoising take per image?",
                a: "Most photos finish denoising in 30–60 seconds end-to-end, including upload, AI processing, and result rendering. Processing time scales with image dimensions: a typical 12-megapixel smartphone photo (4000×3000 pixels) takes about 30 seconds, a 24-megapixel DSLR photo takes 45 to 60 seconds, and a 50-megapixel medium-format scan can take up to 90 seconds. The NAFNet model runs the full image through the network in a single pass without tiling for images under about 25 megapixels, which avoids edge artifacts at tile boundaries. For very large images above 25 megapixels, the system uses overlapping tile processing that adds a few seconds of overhead. If you are processing a batch of denoising work, the per-image cost stays consistent — there is no warmup penalty after the first image, since the model stays loaded between requests for paid users. Processing time is the same for paid users.",
              },
              {
                q: "What is the difference between ArtImageHub's NAFNet denoiser and Topaz DeNoise AI or Adobe AI Denoise?",
                a: "Topaz DeNoise AI ($79/year) and Adobe Lightroom AI Denoise ($9.99+/month) are commercial denoising tools using proprietary AI models. The underlying technology is similar across all three products — modern AI denoising converged on transformer-based or efficient CNN architectures trained on real-world noise datasets. Differences are mostly in user interface (Topaz is desktop with sliders, Adobe is integrated into Lightroom workflow, ArtImageHub is web-based with one-click processing), pricing model (Topaz is annual subscription, Adobe is monthly subscription, ArtImageHub is $4.99 one-time per project), and the specific training data (each vendor uses their own dataset). For a typical user denoising a finite batch of photos, ArtImageHub's $4.99 one-time pricing is dramatically cheaper than committing to a monthly or annual subscription. For users who denoise photos every week as part of a professional workflow, Topaz or Adobe make more sense as ongoing tools. Quality differences between the three on most real-world photos are smaller than the marketing implies.",
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
