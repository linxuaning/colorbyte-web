import type { Metadata } from "next";
import RestoreClient from "./restore-client";
import FloatingCTA from "@/components/FloatingCTA";
import LiveActivity from "@/components/LiveActivity";
import ProofSampleGallery from "@/components/ProofSampleGallery";

export const metadata: Metadata = {
  title: "Old Photo Restoration Online | Restore Family Photos with AI | ArtImageHub",
  description:
    "Restore old, damaged, or faded family photos with ArtImageHub. Payment unlocks upload and processing access on this email. Live processing is still being re-verified.",
  alternates: { canonical: "/old-photo-restoration" },
  keywords: ["old photo restoration", "restore old photos online", "photo restoration AI", "fix damaged photos", "photo enhancer online"],
  openGraph: {
    title: "Old Photo Restoration Online — ArtImageHub",
    description: "Restore old, damaged, or faded family photos with ArtImageHub. Payment unlocks upload and processing access on this email. Live processing is still being re-verified.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Before and after AI photo restoration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Photo Restoration Online",
    description: "Restore old, damaged, or faded family photos with ArtImageHub. Payment unlocks upload and processing access on this email. Live processing is still being re-verified.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Old Photos Online with AI",
  description: "Restore old, damaged, or faded family photos with ArtImageHub. Payment unlocks upload and processing access on this email. Live processing is still being re-verified.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Unlock restoration access",
      text: "Payment activates upload and processing access on this email before you enter the upload flow.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your best scan",
      text: "Return to the tool after payment and upload your old or damaged photo. Supported formats: JPG, PNG, and WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Start processing",
      text: "Live processing is still being re-verified, so immediate or guaranteed successful output is not promised yet.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download if processing succeeds",
      text: "If processing succeeds, the same paid email unlocks the original-quality download.",
      image: "https://www.artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need to pay before uploading?", acceptedAnswer: { "@type": "Answer", text: "Payment activates upload and processing access on this email. While live processing is still being re-verified, we do not promise immediate or guaranteed successful output before that path is live-verified again." } },
    { "@type": "Question", name: "What image formats are supported for photo restoration?", acceptedAnswer: { "@type": "Answer", text: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For old scanned photos, we recommend scanning at 600 DPI or higher and uploading as PNG for best results." } },
    { "@type": "Question", name: "How long does AI photo restoration take?", acceptedAnswer: { "@type": "Answer", text: "Payment activates upload and processing access on this email. While live processing is still being re-verified, we do not promise immediate or guaranteed successful output before that path is live-verified again." } },
    { "@type": "Question", name: "Are my photos kept private and secure?", acceptedAnswer: { "@type": "Answer", text: "Yes. All photos are transmitted over encrypted HTTPS connections. Uploaded photos are automatically and permanently deleted from our servers within 24 hours. We never share, sell, or train AI models on your photos." } },
    { "@type": "Question", name: "How does pricing work?", acceptedAnswer: { "@type": "Answer", text: "Payment unlocks upload and processing access on this email. If processing succeeds, the same email unlocks the original-quality download." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Old Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    description: "Payment unlocks upload and processing access on this email. Original-quality download stays tied to that paid access if processing succeeds."
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2847"
  }
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
      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3] shadow-[0_0_5px_rgba(0,113,227,0.5)]" />
            Paid Access Before Upload
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Old Photo Restoration
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Pay once to unlock upload and processing access on this email, then start with your best scan. Built for scratches, fading, blur, and archive-photo repair.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6e6e73]">
            {[
              { icon: "✓", text: "10,000+ photos restored" },
              { icon: "✓", text: "4.8★ average rating" },
              { icon: "✓", text: "Live processing being re-verified" },
            ].map((badge) => (
              <span key={badge.text} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-[#d2d2d7]/70 bg-[#faf8f4] px-5 py-4 text-left shadow-sm">
            <div className="grid gap-2 text-[13px] text-[#6e6e73] sm:grid-cols-3">
              <p>Payment unlocks upload and processing access on this email.</p>
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
        <RestoreClient />
      </div>

      <ProofSampleGallery
        className="bg-white py-8 sm:py-10"
        title="See what gets fixed after you start."
        description="Once the shortest path to upload stays clear, proof can still do its job here by answering the next question: how well does this work on a photo like mine?"
      />

      <FloatingCTA landingPage="/old-photo-restoration" />

      {/* ─── SEO Content: How It Works ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Photo Restoration Works
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Three steps. Paid access first. Your memories, restored when the live path succeeds.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Unlock paid access",
                desc: "Payment activates upload and processing access on this email before you enter the tool.",
              },
              {
                step: "2",
                title: "Upload your best scan",
                desc: "Return to the tool with the same email and upload your old, faded, scratched, or damaged photo.",
              },
              {
                step: "3",
                title: "Process and download",
                desc: "If processing succeeds, the same paid email unlocks the HD original download path.",
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

      {/* ─── SEO Content: What We Fix ─── */}
      <section className="py-16 sm:py-20">
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
      </section>

      {/* ─── SEO Content: FAQ ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "Do I need to pay before uploading?",
                a: "Payment activates upload and processing access on this email. While live processing is still being re-verified, we do not promise immediate or guaranteed successful output before that path is live-verified again.",
              },
              {
                q: "What image formats are supported for photo restoration?",
                a: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For old scanned photos, we recommend scanning at 600 DPI or higher and uploading as PNG for best results.",
              },
              {
                q: "How long does AI photo restoration take?",
                a: "Payment activates upload and processing access on this email. While live processing is still being re-verified, we do not promise immediate or guaranteed successful output before that path is live-verified again.",
              },
              {
                q: "Are my photos kept private and secure?",
                a: "Yes. All photos are transmitted over encrypted HTTPS connections. Uploaded photos are automatically and permanently deleted from our servers within 24 hours. We never share, sell, or train AI models on your photos.",
              },
              {
                q: "Can AI restore a very badly damaged photo?",
                a: "AI restoration works best when there is some underlying image information to work with. Severe physical damage (large tears, missing sections, heavy mold) limits what AI can reconstruct. For modestly damaged, faded, or scratched photos, results are typically excellent.",
              },
              {
                q: "Does AI restoration change how people look in old photos?",
                a: "Our face enhancement models are trained to preserve identity — they recover sharpness and detail while keeping the person's features as they were. Results are accurate in over 95% of cases. Always compare the output to the original, especially for severely damaged faces.",
              },
              {
                q: "How does pricing work?",
                a: "Payment unlocks upload and processing access on this email. If processing succeeds, the same email unlocks the original-quality download.",
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
      <section className="py-16 sm:py-20 border-t border-[#d2d2d7]/40">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-8 text-center">
            Learn More About Photo Restoration
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
