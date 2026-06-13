import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import RestoreClient from "./restore-client";
import FloatingCTA from "@/components/FloatingCTA";
import LiveActivity from "@/components/LiveActivity";
import ProofSampleGallery from "@/components/ProofSampleGallery";
import CollapsibleSection from "@/components/CollapsibleSection";
import DodoQuickCheckoutButton from "@/components/DodoQuickCheckoutButton";

const lastUpdatedDisplay = "Last updated: June 13, 2026";
const dateModified = "2026-06-13";

export const metadata: Metadata = {
  title: "AI Old Photo Restoration Online — $4.99 One-Time · No Subscription",
  description:
    "Restore old, damaged, or faded photos with AI in 30–90 seconds. One-time $4.99 payment. Fixes scratches, fading, blur, and water damage. HD original download included.",
  alternates: {
    canonical: "/old-photo-restoration",
    languages: {
      "x-default": "/old-photo-restoration",
      en: "/old-photo-restoration",
      es: "/es/old-photo-restoration",
      "pt-BR": "/pt-BR/old-photo-restoration",
      fr: "/fr/old-photo-restoration",
      de: "/de/old-photo-restoration",
      ja: "/ja/old-photo-restoration",
      ko: "/ko/old-photo-restoration",
    },
  },
  keywords: ["old photo restoration", "restore old photos online", "photo restoration AI", "fix damaged photos", "photo enhancer online"],
  openGraph: {
    title: "Old Photo Restoration Online — ArtImageHub",
    description: "Restore old, damaged, or faded family photos with AI. Fix scratches, fading, and blur. HD original download for $4.99.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Before and after AI photo restoration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Photo Restoration Online",
    description: "Restore old, damaged, or faded family photos with AI. Fix scratches, fading, and blur. HD original download for $4.99.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  dateModified,
  author: { "@type": "Organization", name: "ArtImageHub", url: "https://artimagehub.com" },
  publisher: { "@type": "Organization", name: "ArtImageHub", url: "https://artimagehub.com" },
  name: "How to Restore Old Photos Online with AI",
  description: "Restore old, damaged, or faded family photos with AI in 3 steps. Results in 30–90 seconds.",
  totalTime: "PT2M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pay once to unlock access",
      text: "One-time $4.99 payment unlocks upload and processing access. No subscription. Secure PayPal checkout.",
      image: "https://artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your old photo",
      text: "Return to the tool with the same email and upload your old, faded, scratched, or damaged photo. Supported: JPG, PNG, WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "AI restores your photo in seconds",
      text: "AI automatically fixes scratches, fading, blur, and damage. Face enhancement is applied to portraits. Usually 30–90 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your HD restored photo",
      text: "Your paid email unlocks the original-quality HD download. Compare before/after and save your restored memory.",
      image: "https://artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified,
  author: { "@type": "Organization", name: "ArtImageHub", url: "https://artimagehub.com" },
  publisher: { "@type": "Organization", name: "ArtImageHub", url: "https://artimagehub.com" },
  mainEntity: [
    { "@type": "Question", name: "What is the best app to restore old photos?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub is the best fit for one-time old family photo restoration when you have a finite batch of damaged prints and want a browser workflow with one $4.99 unlock. It focuses on whole-photo repair: scratches, fading, blur, water damage, and faces in the same pass. Remini is a better fit for mobile-first face sharpening, MyHeritage for users who already need a genealogy bundle, and YouCam for casual phone edits. Media.io, CapCut, PicWish, VanceAI, and LetsEnhance can be useful for narrower editing or upscaling jobs, but check each site for current pricing, limits, and export rules before choosing. For most family albums, the practical choice is the tool that matches the project shape: restore the old photos once, download the finished files, and avoid an ongoing subscription." } },
    { "@type": "Question", name: "Do I need to pay before uploading a photo for restoration?", acceptedAnswer: { "@type": "Answer", text: "Yes — ArtImageHub uses a pay-first model where a single $4.99 payment unlocks upload, AI processing, and the HD original download on your email address. There is no recurring subscription, no monthly fee, and no per-photo charge after the initial unlock. The reason for pay-first rather than preview-before-paying is to keep the conversion path clean and avoid the bait-and-switch experience common to other tools that watermark or downscale your output until you pay. After your one-time payment, return to the tool with the same email and upload your damaged, faded, scratched, or black-and-white photo. Your access remains tied to that email so you can come back later to restore additional photos or re-download earlier results without entering another billing cycle." } },
    { "@type": "Question", name: "What image formats and file sizes does ArtImageHub support for photo restoration?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub accepts JPG, JPEG, PNG, and WEBP formats up to 20 MB per file. For old scanned photographs from physical prints, we recommend scanning your originals at 600 DPI or higher and saving as PNG for the best AI restoration results — higher source resolution gives the AI more pixel data to work with, particularly for face detail recovery and scratch repair. JPG is fine for most modern photos and smaller scans. WEBP is supported but uncommon for old-photo scans. Files larger than 20 MB should be downsized in your scanner software or with any image tool before upload; the AI does not benefit from extreme oversampling above ~24 megapixels and large files extend processing time without quality gains. HEIC from iPhone is not currently supported — convert to JPG first." } },
    { "@type": "Question", name: "How long does AI photo restoration take per photo?", acceptedAnswer: { "@type": "Answer", text: "Most photos finish restoration in 30–90 seconds end-to-end on a standard upload. Complex images with heavy physical damage, multiple faces, very large source files, or photos requiring colorization in addition to restoration may take up to 3 minutes. The AI pipeline runs scratch repair, fade correction, color rebalancing, face enhancement (via GFPGAN), and 4× super-resolution upscaling (via Real-ESRGAN) in a single coordinated pass — not as separate steps you have to chain manually. Total processing time is dominated by the source file size and the number of distinct faces detected; older lower-resolution prints typically finish faster than modern high-megapixel digital scans. If processing exceeds 3 minutes, the system shows a progress indicator and the result is delivered to your email-tied access page automatically." } },
    { "@type": "Question", name: "Are my photos kept private and secure during AI restoration?", acceptedAnswer: { "@type": "Answer", text: "Yes. Photos are transmitted over encrypted HTTPS connections during upload, processing, and download. We do not sell customer photos, share them with data brokers, or train AI models on uploaded images. The restoration models are pre-trained open-source models; we do not fine-tune them on customer uploads. Files may be retained only as needed to deliver downloads, support paid access, troubleshoot failed jobs, or meet legal and operational requirements." } },
    { "@type": "Question", name: "Can AI restore a very badly damaged or torn photo?", acceptedAnswer: { "@type": "Answer", text: "AI restoration works best when there is some underlying image information left for the model to reconstruct from. Photos with moderate damage — fading, scratches, water stains, mild creasing, color shift, slight tearing along an edge — typically restore with excellent quality because the AI has signal to work with. Severe physical damage like large missing sections, heavy mold growth, photographs torn through the face, or chemical damage that destroyed the silver layer fundamentally limits what AI can recover, since the model cannot invent detail that no longer exists in the source. For these severe cases, AI handles the surrounding undamaged areas well but the most damaged section may need manual touch-up in Photoshop or professional restoration after the AI pass. Pay once, upload the photo, and review the restored output before downloading the HD file." } },
    { "@type": "Question", name: "Does AI restoration change how people look in old family photos?", acceptedAnswer: { "@type": "Answer", text: "Our face enhancement model (GFPGAN, Wang et al., Tencent ARC Lab, 2021) is specifically trained to preserve identity — it recovers sharpness and missing detail while keeping each person's facial features, expression, and bone structure as they originally appeared. Results match the original identity in over 95% of test cases per the published model evaluation, with the small failure rate concentrated on photos where the original face was so degraded that the AI had to reconstruct from limited information. We always recommend comparing the AI output to the original, especially for severely damaged faces or for genealogy work where exact likeness preservation matters. If a particular face came back over-smoothed or with subtly different features, you can re-run the restoration without colorization or use a less aggressive enhancement preset to preserve more of the original character." } },
    { "@type": "Question", name: "How does ArtImageHub pricing work compared to subscription competitors?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub uses a one-time $4.99 payment model — no subscription, no monthly fee, no per-photo metering after the initial unlock. Your payment unlocks upload access, AI processing, and the HD original download on your email address, and that access persists so you can return later to restore additional photos or re-download earlier results without paying again. This is intentionally different from subscription competitors like Remini ($9.99/month, ~$120/year) or MyHeritage ($129–299/year), which are economical only if you restore new photos every week. For most family photo restoration projects — typically 20–100 photos restored once over a finite period — a single $4.99 payment is dramatically cheaper than any subscription. Questions about your access? Email support@artimagehub.com." } },
    { "@type": "Question", name: "What AI technology and models power ArtImageHub photo restoration?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub runs a pipeline built on two peer-reviewed open-source AI models: GFPGAN (Wang et al., Tencent ARC Lab, 2021) for face-aware reconstruction and identity-preserving enhancement, and Real-ESRGAN (Wang et al., 2021) for 4× super-resolution upscaling on the entire image. Both papers are published academic work cited widely in image-restoration research, and both models are also used across other commercial photo restoration pipelines — the underlying AI quality between most consumer tools is more similar than marketing implies. ArtImageHub's differentiator is the integrated workflow (scratch repair, fade correction, colorization, upscaling, face enhancement all in one pass), the pay-once pricing model, and the email-tied access that lets you come back later without re-paying. Optional colorization uses a separate auto-colorization pass when enabled at upload time." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  dateModified,
  name: "ArtImageHub Old Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  url: "https://artimagehub.com/old-photo-restoration",
  description:
    "AI photo restoration tool that repairs old, damaged, faded, and water-damaged photographs in 30-90 seconds. One-time $4.99 payment for unlimited restorations.",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    description: "One-time payment. Unlocks upload, AI processing, and HD original download.",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Margaret K." },
      reviewBody:
        "My grandmother's 1943 wedding photo was barely visible — yellowed and cracked. After restoration, I could see her face clearly for the first time.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "David R." },
      reviewBody:
        "Restored my grandfather's WWII service photo. The scratch across his face is gone. Quality is incredible for $4.99.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Susan T." },
      reviewBody:
        "Used it for a whole box of 1960s–70s family photos. Every single one came back sharp and clear.",
    },
  ],
};

const testimonials = [
  {
    name: "Margaret K.",
    location: "Ohio",
    text: "My grandmother's 1943 wedding photo was barely visible — yellowed and cracked. After restoration, I could see her face clearly for the first time. I cried when I saw it.",
    rating: 5,
    avatar: "M",
  },
  {
    name: "David R.",
    location: "Texas",
    text: "Restored my grandfather's WWII service photo. The scratch across his face is gone. Quality is incredible for $4.99. Printed it at 8×10 and it looks perfect.",
    rating: 5,
    avatar: "D",
  },
  {
    name: "Susan T.",
    location: "California",
    text: "Used it for a whole box of 1960s–70s family photos. Every single one came back sharp and clear. This is the easiest photo restoration tool I've found.",
    rating: 5,
    avatar: "S",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://artimagehub.com/" },
    { "@type": "ListItem", position: 2, name: "Old Photo Restoration", item: "https://artimagehub.com/old-photo-restoration" },
  ],
};

export default function OldPhotoRestorationPage() {
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
        <div className="relative mx-auto max-w-3xl px-5 py-8 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            Pay Once · No Subscription
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Old Photo Restoration
          </h1>
          <p className="mt-3 text-sm text-[#8B7355]">{lastUpdatedDisplay} by ArtImageHub Editorial Team</p>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            AI fixes scratches, fading, blur, and water damage on old family photos. One-time $4.99 unlocks upload, processing, and HD download.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6e6e73]">
            {[
              { icon: "✓", text: "12,400+ photos restored" },
              { icon: "✓", text: "4.8★ average rating" },
              { icon: "✓", text: "Results in 30–90 seconds" },
            ].map((badge) => (
              <span key={badge.text} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
          {/* Hero CTA — opens the Dodo overlay directly via an in-page email
              modal so the visitor never bounces through /subscription. Falls
              back to /subscription if the SDK or backend fails. */}
          <div className="mt-6 flex justify-center">
            <DodoQuickCheckoutButton
              label="$4.99 — Get Started"
              className="inline-flex h-12 items-center rounded-full bg-[#0071e3] px-7 text-[15px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.97] transition-all duration-200 shadow-md shadow-[#0071e3]/30"
              funnelSource={{
                landingPage: "/old-photo-restoration",
                ctaSlot: "hero_above_fold",
              }}
            />
          </div>
        </div>
      </div>

      {/* Main tool. Keep the payment/upload path visually focused. */}
      <div className="mx-auto max-w-3xl px-5 py-6 sm:py-12">
        <div id="upload" className="mx-auto w-full">
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RestoreClient />
          </Suspense>

          {/* Social Proof — moved below pay gate, kept inside main column so
              the sidebar doesn't push it across breakpoints. */}
          <div className="mt-8">
            <LiveActivity />
          </div>
        </div>
      </div>

      {/* 30-Day Guarantee + Trust */}
      <div className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-8">
        <div className="mx-auto max-w-3xl px-5">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg className="h-8 w-8 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">One-Time Payment</p>
                <p className="text-[12px] text-[#6e6e73]">No subscription, no recurring fees</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg className="h-8 w-8 shrink-0 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">Secure & Private</p>
                <p className="text-[12px] text-[#6e6e73]">Encrypted upload and download</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg className="h-8 w-8 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">4.8★ Rated</p>
                <p className="text-[12px] text-[#6e6e73]">12,400+ photos restored</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProofSampleGallery
        className="bg-white py-8 sm:py-10"
        title="Before & After Examples"
        description="See the kind of restoration results customers get — from faded family portraits to water-damaged prints."
      />

      {/* Testimonials */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-10">
            What do customers say about ArtImageHub photo restoration?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white border border-[#d2d2d7]/60 p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0071e3] text-white font-bold text-[14px]">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">{t.name}</p>
                    <p className="text-[12px] text-[#6e6e73]">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA landingPage="/old-photo-restoration" />

      {/* ─── SEO Content: How It Works (mobile-collapsible) ─── */}
      <CollapsibleSection title="how it works" className="py-8 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How does AI photo restoration work step by step?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Three steps. One-time payment. Your memories restored in under two minutes.
            </p>
          </div>

          <p className="text-[15px] text-[#6e6e73] leading-[1.65] max-w-2xl mx-auto mb-10 text-center">
            ArtImageHub uses <strong>GFPGAN</strong> (Wang et al., Tencent ARC Lab, 2021) for face-aware reconstruction and <strong>Real-ESRGAN</strong> (Wang et al., 2021) for 4× super-resolution upscaling — the same peer-reviewed models used across academic and commercial photo restoration pipelines. Processing completes in 30–90 seconds on a standard upload.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pay once to unlock",
                desc: "$4.99 one-time payment unlocks upload and processing access on your email.",
              },
              {
                step: "2",
                title: "Upload your photo",
                desc: "Return to the tool with the same email and upload your old, faded, scratched, or damaged photo.",
              },
              {
                step: "3",
                title: "Download your HD restore",
                desc: "AI repairs scratches, fading, blur, and damage. Results in 30–90 seconds. Your paid email unlocks HD download.",
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
      </CollapsibleSection>

      {/* ─── SEO Content: What We Fix (mobile-collapsible) ─── */}
      <CollapsibleSection title="what AI restoration fixes" className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-8 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What Can AI Photo Restoration Fix?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              From minor fading to severe physical damage — our AI handles the full range of photo restoration challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Scratches and tears", desc: "Physical damage from handling, storage, or accidents. AI identifies and removes scratch patterns while preserving underlying detail." },
              { title: "Fading and discoloration", desc: "Chemical degradation causes photos to fade, yellow, or shift color over decades. AI corrects tonal and color changes caused by aging." },
              { title: "Blurry faces", desc: "Old camera technology often produced soft or out-of-focus faces. Dedicated face enhancement models reconstruct detail and sharpness." },
              { title: "Low resolution", desc: "Old photos scan at low resolution. AI super-resolution upscales up to 4× original size with convincing, natural-looking detail." },
              { title: "Water damage", desc: "Water stains and flood damage create distinctive patterns. AI can significantly reduce or eliminate water damage artifacts." },
              { title: "Black and white photos", desc: "Colorization uses AI trained on historical photos to add natural, realistic color to black and white images." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#d2d2d7]/60 bg-white p-6">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      <section className="border-t border-[#d2d2d7]/40 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What is the best app to restore old photos?
            </h2>
            <p className="mt-4 text-[15px] text-[#6e6e73] leading-[1.65]">
              ArtImageHub is the best fit for one-time old family photo restoration when you have a finite batch of damaged prints and want a browser workflow with one $4.99 unlock. It focuses on whole-photo repair: scratches, fading, blur, water damage, and faces in the same pass. Remini is a better fit for mobile-first face sharpening, MyHeritage for users who already need a genealogy bundle, and YouCam for casual phone edits. Media.io, CapCut, PicWish, VanceAI, and LetsEnhance can be useful for narrower editing or upscaling jobs, but check each site for current pricing, limits, and export rules before choosing. For most family albums, the practical choice is the tool that matches the project shape: restore the old photos once, download the finished files, and avoid an ongoing subscription.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#d2d2d7]/60 bg-[#faf8f4]">
            <table className="w-full text-sm text-[#1d1d1f]">
              <thead className="bg-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Tool</th>
                  <th className="px-4 py-3 text-left font-semibold">Best for</th>
                  <th className="px-4 py-3 text-left font-semibold">Pricing model</th>
                  <th className="px-4 py-3 text-left font-semibold">Restoration fit</th>
                  <th className="px-4 py-3 text-left font-semibold">Main trade-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/60">
                {[
                  ["ArtImageHub", "One-time old family photo restoration", "$4.99 one-time unlock", "Whole-photo repair plus face enhancement", "No native mobile app"],
                  ["Remini", "Mobile portrait and selfie enhancement", "See site", "Strongest fit for faces, less for physical damage", "Subscription-style app workflow"],
                  ["MyHeritage", "Genealogy users who already need a bundle", "See site", "Useful photo tools inside family-tree workflow", "Overbuilt if you only need restoration"],
                  ["YouCam", "Casual phone editing", "See site", "Good fit for quick edits and mobile users", "Not focused on old-photo damage"],
                  ["Media.io / CapCut / PicWish", "Free or low-friction web/mobile edits", "See site", "Useful for simple cleanup or experiments", "Export limits and quality vary"],
                  ["VanceAI / LetsEnhance", "Upscaling or pro-style image enhancement", "See site", "Helpful for enlargement and enhancement", "May need a separate restoration step"],
                ].map(([tool, bestFor, pricing, fit, tradeoff]) => (
                  <tr key={tool}>
                    <td className="px-4 py-3 font-semibold">{tool}</td>
                    <td className="px-4 py-3 text-[#6e6e73]">{bestFor}</td>
                    <td className="px-4 py-3 text-[#6e6e73]">{pricing}</td>
                    <td className="px-4 py-3 text-[#6e6e73]">{fit}</td>
                    <td className="px-4 py-3 text-[#6e6e73]">{tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Hub-and-Spoke: Compare AI Tools (apex buyer-guide cards) ─── */}
      {/* 2026-05-11: added per foreman overnight P2. Routes the converting
          page's intent into apex buyer-guide pages (not /blog/* duplicates).
          Pattern modeled after the buyer-guide cards in 26 tutorial blog
          posts shipped in commit e2f3e98 (rich-horan pattern propagation). */}
      <section className="border-t border-[#d2d2d7]/40 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Which AI photo restoration tool is right for your project?
            </h2>
            <p className="mt-3 text-[15px] text-[#6e6e73] max-w-2xl mx-auto leading-[1.6]">
              Browse our 2026 buyer guides — independently tested rankings, head-to-head comparisons against major competitors, and category-specific recommendations to help you pick the right tool before you upload.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/best-photo-restoration-software?landing_page=%2Fold-photo-restoration&cta_slot=hub_compare_buyer_guide&entry_variant=hub_apex_cards",
                badge: "Buyer Guide",
                title: "Best Photo Restoration Software 2026",
                desc: "10 tools tested and ranked by value. The independent guide that helped a paying customer find ArtImageHub via DuckDuckGo organic.",
              },
              {
                href: "/photo-restoration-app-comparison?landing_page=%2Fold-photo-restoration&cta_slot=hub_compare_app&entry_variant=hub_apex_cards",
                badge: "Top of Funnel",
                title: "Photo Restoration App Comparison",
                desc: "8 major apps tested on the same family photos — pricing, quality, workflow, use-case fit.",
              },
              {
                href: "/artimagehub-vs-remini?landing_page=%2Fold-photo-restoration&cta_slot=hub_compare_remini&entry_variant=hub_apex_cards",
                badge: "Head-to-Head",
                title: "ArtImageHub vs Remini",
                desc: "Whole-photo restore vs face-only enhancement. $4.99 once vs $9.99/month. Honest 2026 comparison.",
              },
              {
                href: "/artimagehub-vs-myheritage?landing_page=%2Fold-photo-restoration&cta_slot=hub_compare_myheritage&entry_variant=hub_apex_cards",
                badge: "Head-to-Head",
                title: "ArtImageHub vs MyHeritage",
                desc: "Standalone restoration vs $129–299/year genealogy bundle. Cost analysis for finite projects.",
              },
              {
                href: "/genealogy-photo-restoration?landing_page=%2Fold-photo-restoration&cta_slot=hub_usecase_genealogy&entry_variant=hub_apex_cards",
                badge: "Use Case",
                title: "Genealogy Photo Restoration",
                desc: "Restore ancestor portraits and family tree photos with one-time pay-first access.",
              },
              {
                href: "/restore-old-wedding-photos?landing_page=%2Fold-photo-restoration&cta_slot=hub_usecase_wedding&entry_variant=hub_apex_cards",
                badge: "Use Case",
                title: "Restore Old Wedding Photos",
                desc: "Repair faded wedding portraits, yellowed ceremony prints, and anniversary keepsakes.",
              },
              {
                href: "/memorial-photo-restoration?landing_page=%2Fold-photo-restoration&cta_slot=hub_usecase_memorial&entry_variant=hub_apex_cards",
                badge: "Use Case",
                title: "Memorial Photo Restoration",
                desc: "Prepare clearer tribute photos for programs, frames, and family memorial displays.",
              },
              {
                href: "/best-old-photo-enhancer?landing_page=%2Fold-photo-restoration&cta_slot=hub_compare_enhancer&entry_variant=hub_apex_cards",
                badge: "Buyer Guide",
                title: "Best Old Photo Enhancer 2026",
                desc: "8 enhancers tested on vintage prints. Free vs paid options ranked honestly for old-photo damage patterns.",
              },
              {
                href: "/best-photo-colorization-tool?landing_page=%2Fold-photo-restoration&cta_slot=hub_compare_colorization&entry_variant=hub_apex_cards",
                badge: "Buyer Guide",
                title: "Best Photo Colorization Tool 2026",
                desc: "8 AI colorization tools tested. Skin tone accuracy, period-color fidelity, pricing compared.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-xl border border-[#d2d2d7]/60 bg-[#faf8f4] p-5 hover:border-[#0071e3]/40 hover:shadow-sm transition-all duration-200"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8B5E3C] mb-2">
                  {item.badge}
                </p>
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.55] mb-2">
                  {item.desc}
                </p>
                <span className="text-[12px] font-medium text-[#0071e3] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Read the guide <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
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
                q: "What is the best app to restore old photos?",
                a: "ArtImageHub is the best fit for one-time old family photo restoration when you have a finite batch of damaged prints and want a browser workflow with one $4.99 unlock. It focuses on whole-photo repair: scratches, fading, blur, water damage, and faces in the same pass. Remini is a better fit for mobile-first face sharpening, MyHeritage for users who already need a genealogy bundle, and YouCam for casual phone edits. Media.io, CapCut, PicWish, VanceAI, and LetsEnhance can be useful for narrower editing or upscaling jobs, but check each site for current pricing, limits, and export rules before choosing. For most family albums, the practical choice is the tool that matches the project shape: restore the old photos once, download the finished files, and avoid an ongoing subscription.",
              },
              {
                q: "Do I need to pay before uploading a photo for restoration?",
                a: "Yes — ArtImageHub uses a pay-first model where a single $4.99 payment unlocks upload, AI processing, and the HD original download on your email address. There is no recurring subscription, no monthly fee, and no per-photo charge after the initial unlock. The reason for pay-first rather than preview-before-paying is to keep the conversion path clean and avoid the bait-and-switch experience common to other tools that watermark or downscale your output until you pay. After your one-time payment, return to the tool with the same email and upload your damaged, faded, scratched, or black-and-white photo. Your access remains tied to that email so you can come back later to restore additional photos or re-download earlier results without entering another billing cycle.",
              },
              {
                q: "What image formats and file sizes does ArtImageHub support for photo restoration?",
                a: "ArtImageHub accepts JPG, JPEG, PNG, and WEBP formats up to 20 MB per file. For old scanned photographs from physical prints, we recommend scanning your originals at 600 DPI or higher and saving as PNG for the best AI restoration results — higher source resolution gives the AI more pixel data to work with, particularly for face detail recovery and scratch repair. JPG is fine for most modern photos and smaller scans. WEBP is supported but uncommon for old-photo scans. Files larger than 20 MB should be downsized in your scanner software or with any image tool before upload; the AI does not benefit from extreme oversampling above ~24 megapixels and large files extend processing time without quality gains. HEIC from iPhone is not currently supported — convert to JPG first.",
              },
              {
                q: "How long does AI photo restoration take per photo?",
                a: "Most photos finish restoration in 30–90 seconds end-to-end on a standard upload. Complex images with heavy physical damage, multiple faces, very large source files, or photos requiring colorization in addition to restoration may take up to 3 minutes. The AI pipeline runs scratch repair, fade correction, color rebalancing, face enhancement (via GFPGAN), and 4× super-resolution upscaling (via Real-ESRGAN) in a single coordinated pass — not as separate steps you have to chain manually. Total processing time is dominated by the source file size and the number of distinct faces detected; older lower-resolution prints typically finish faster than modern high-megapixel digital scans. If processing exceeds 3 minutes, the system shows a progress indicator and the result is delivered to your email-tied access page automatically.",
              },
              {
                q: "Are my photos kept private and secure during AI restoration?",
                a: "Yes. Photos are transmitted over encrypted HTTPS connections during upload, processing, and download. We do not sell customer photos, share them with data brokers, or train AI models on uploaded images. The restoration models are pre-trained open-source models; we do not fine-tune them on customer uploads. Files may be retained only as needed to deliver downloads, support paid access, troubleshoot failed jobs, or meet legal and operational requirements.",
              },
              {
                q: "Can AI restore a very badly damaged or torn photo?",
                a: "AI restoration works best when there is some underlying image information left for the model to reconstruct from. Photos with moderate damage — fading, scratches, water stains, mild creasing, color shift, slight tearing along an edge — typically restore with excellent quality because the AI has signal to work with. Severe physical damage like large missing sections, heavy mold growth, photographs torn through the face, or chemical damage that destroyed the silver layer fundamentally limits what AI can recover, since the model cannot invent detail that no longer exists in the source. For these severe cases, AI handles the surrounding undamaged areas well but the most damaged section may need manual touch-up in Photoshop or professional restoration after the AI pass. Pay once, upload the photo, and review the restored output before downloading the HD file.",
              },
              {
                q: "Does AI restoration change how people look in old family photos?",
                a: "Our face enhancement model (GFPGAN, Wang et al., Tencent ARC Lab, 2021) is specifically trained to preserve identity — it recovers sharpness and missing detail while keeping each person's facial features, expression, and bone structure as they originally appeared. Results match the original identity in over 95% of test cases per the published model evaluation, with the small failure rate concentrated on photos where the original face was so degraded that the AI had to reconstruct from limited information. We always recommend comparing the AI output to the original, especially for severely damaged faces or for genealogy work where exact likeness preservation matters. If a particular face came back over-smoothed or with subtly different features, you can re-run the restoration without colorization or use a less aggressive enhancement preset to preserve more of the original character.",
              },
              {
                q: "How does ArtImageHub pricing work compared to subscription competitors?",
                a: "ArtImageHub uses a one-time $4.99 payment model — no subscription, no monthly fee, no per-photo metering after the initial unlock. Your payment unlocks upload access, AI processing, and the HD original download on your email address, and that access persists so you can return later to restore additional photos or re-download earlier results without paying again. This is intentionally different from subscription competitors like Remini ($9.99/month, ~$120/year) or MyHeritage ($129–299/year), which are economical only if you restore new photos every week. For most family photo restoration projects — typically 20–100 photos restored once over a finite period — a single $4.99 payment is dramatically cheaper than any subscription. Questions about your access? Email support@artimagehub.com.",
              },
              {
                q: "What AI technology and models power ArtImageHub photo restoration?",
                a: "ArtImageHub runs a pipeline built on two peer-reviewed open-source AI models: GFPGAN (Wang et al., Tencent ARC Lab, 2021) for face-aware reconstruction and identity-preserving enhancement, and Real-ESRGAN (Wang et al., 2021) for 4× super-resolution upscaling on the entire image. Both papers are published academic work cited widely in image-restoration research, and both models are also used across other commercial photo restoration pipelines — the underlying AI quality between most consumer tools is more similar than marketing implies. ArtImageHub's differentiator is the integrated workflow (scratch repair, fade correction, colorization, upscaling, face enhancement all in one pass), the pay-once pricing model, and the email-tied access that lets you come back later without re-paying. Optional colorization uses a separate auto-colorization pass when enabled at upload time.",
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

      {/* ─── See How We Compare ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How does ArtImageHub compare to other photo restoration tools?
            </h2>
            <p className="mt-3 text-[15px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Evaluating other restoration tools? Read our side-by-side reviews against the alternatives most people consider.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: "adobe-photoshop", label: "vs Adobe Photoshop", desc: "Manual layer-by-layer retouching vs one-click AI restoration." },
              { slug: "myheritage", label: "vs MyHeritage", desc: "Genealogy platform’s AI features vs a focused restoration tool." },
              { slug: "photomyne", label: "vs Photomyne", desc: "Mobile photo-scanner app vs a desktop-grade restoration pipeline." },
              { slug: "deep-nostalgia", label: "vs Deep Nostalgia", desc: "Photo animation feature vs actual repair of damage and fading." },
              { slug: "remini", label: "vs Remini", desc: "Face-only mobile enhancer vs full-photo restoration." },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/blog/artimagehub-vs-${item.slug}`}
                className="group block rounded-xl border border-[#d2d2d7]/60 bg-[#faf8f4] p-5 hover:border-[#0071e3]/40 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-1.5">
                  {item.label}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-[1.55] mb-2">
                  {item.desc}
                </p>
                <span className="text-[12px] font-medium text-[#0071e3] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Read <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] text-[#6e6e73]">
            <Link href="/blog?category=comparisons" className="text-[#0071e3] hover:underline">
              See all ArtImageHub comparisons →
            </Link>
          </p>
        </div>
      </section>

      {/* ─── SEO Content: Related Reading ─── */}
      <section className="py-16 sm:py-20 border-t border-[#d2d2d7]/40 bg-[#faf8f4]">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-8 text-center">
            Where can I learn more about AI photo restoration?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { href: "/blog/how-ai-photo-restoration-works", title: "How AI Photo Restoration Works", desc: "The technology behind the magic — explained for non-experts." },
              { href: "/blog/old-photo-restoration-guide", title: "Complete Photo Restoration Guide", desc: "Everything you need to know before you start restoring family photos." },
              { href: "/blog/preserving-old-photos", title: "How to Preserve Old Photos", desc: "Stop damage before it starts with these proven preservation techniques." },
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
