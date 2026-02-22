import type { Metadata } from "next";
import RestoreClient from "./restore-client";

export const metadata: Metadata = {
  title: "Old Photo Restoration Online Free | AI Restore Photos in Seconds",
  description:
    "Restore old, damaged, or faded photos instantly with AI. Fix scratches, enhance faces, and bring your memories back to life. Free online tool, no signup required.",
  alternates: { canonical: "/old-photo-restoration" },
  keywords: ["old photo restoration", "restore old photos online free", "photo restoration AI", "fix damaged photos", "photo enhancer online"],
  openGraph: {
    title: "Old Photo Restoration Online Free — ArtImageHub",
    description: "Restore old, damaged photos instantly with AI. Fix scratches, enhance faces, colorize — free, no signup.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.jpg", width: 1200, height: 630, alt: "Before and after AI photo restoration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Photo Restoration Online Free",
    description: "Restore old, damaged photos instantly with AI. Free, no signup.",
    images: ["/blog/before-after-examples.jpg"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Old Photos Online with AI",
  description: "Restore damaged, faded, or old photographs using AI photo restoration — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo",
      text: "Click the upload area and select your old or damaged photo. Supported formats: JPG, PNG, WEBP up to 20MB.",
      image: "https://artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Choose restoration options",
      text: "Select the enhancement options you need: Face Enhancement, Super Resolution, or Colorization — or use all three.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait 30 seconds",
      text: "The AI processes your photo automatically. Most restorations complete in 15–30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download your restored photo",
      text: "Preview the before/after result and download your restored photo in high resolution. Free users get 720p; Pro users get original resolution.",
      image: "https://artimagehub.com/blog/after-1.jpg",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is AI photo restoration free?", acceptedAnswer: { "@type": "Answer", text: "Yes — ArtImageHub is free to use. Free users can restore 3 photos per day at 720p with a small watermark, no account required. The Pro plan ($9.90/month) gives you unlimited restorations in original resolution with no watermark, plus a 7-day free trial." } },
    { "@type": "Question", name: "What image formats are supported for photo restoration?", acceptedAnswer: { "@type": "Answer", text: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For old scanned photos, we recommend scanning at 600 DPI or higher and uploading as PNG for best results." } },
    { "@type": "Question", name: "How long does AI photo restoration take?", acceptedAnswer: { "@type": "Answer", text: "Most photos restore in 15–30 seconds. Heavily damaged photos or photos processed with multiple enhancements may take up to 60–90 seconds." } },
    { "@type": "Question", name: "Are my photos kept private and secure?", acceptedAnswer: { "@type": "Answer", text: "Yes. All photos are transmitted over encrypted HTTPS connections. Uploaded photos are automatically and permanently deleted from our servers within 24 hours. We never share, sell, or train AI models on your photos." } },
    { "@type": "Question", name: "What is the difference between the free plan and Pro?", acceptedAnswer: { "@type": "Answer", text: "Free plan: 3 restorations per day, 720p output, watermark on downloads. Pro plan ($9.90/month): unlimited restorations, original full resolution output, no watermark. Start with a 7-day free trial — no charge until the trial ends." } },
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
      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(0,113,227,0.07),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3] shadow-[0_0_5px_rgba(0,113,227,0.5)]" />
            Free AI Restoration
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Restore Old Photos Online
          </h1>
          <p className="mt-4 text-[17px] text-[#6e6e73] leading-[1.6] max-w-md mx-auto">
            Upload your photo and let AI restore it in seconds. Face enhancement, super resolution, and colorization — free.
          </p>
        </div>
      </div>

      {/* Main tool */}
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <RestoreClient />
      </div>

      {/* ─── SEO Content: How It Works ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Photo Restoration Works
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Three steps. Thirty seconds. Your memories, restored.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload your photo",
                desc: "Drag and drop or click to upload. Supports JPG, PNG, and WEBP up to 20MB. Any old, faded, scratched, or damaged photo works.",
              },
              {
                step: "2",
                title: "AI restores it",
                desc: "Our AI analyzes the damage and applies face enhancement, super-resolution, and scratch removal automatically. Takes 15–30 seconds.",
              },
              {
                step: "3",
                title: "Download the result",
                desc: "Compare before and after, then download your restored photo. Free users get 720p; Pro users get full original resolution.",
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
                q: "Is AI photo restoration free?",
                a: "Yes — ArtImageHub is free to use. Free users can restore 3 photos per day at 720p with a small watermark, no account required. The Pro plan ($9.90/month) gives you unlimited restorations in original resolution with no watermark, plus a 7-day free trial.",
              },
              {
                q: "What image formats are supported for photo restoration?",
                a: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For old scanned photos, we recommend scanning at 600 DPI or higher and uploading as PNG for best results.",
              },
              {
                q: "How long does AI photo restoration take?",
                a: "Most photos restore in 15–30 seconds. Heavily damaged photos or photos processed with multiple enhancements (face enhancement + super resolution + colorization) may take up to 60–90 seconds.",
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
                q: "What is the difference between the free plan and Pro?",
                a: "Free plan: 3 restorations per day, 720p output resolution, watermark on downloads, no account required. Pro plan ($9.90/month): unlimited restorations, original full resolution output, no watermark. Start with a 7-day free trial — no charge until the trial ends.",
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
