import type { Metadata } from "next";
import RestoreClient from "./restore-client";
import FloatingCTA from "@/components/FloatingCTA";
import LiveActivity from "@/components/LiveActivity";
import ProofSampleGallery from "@/components/ProofSampleGallery";

export const metadata: Metadata = {
  title: "Old Photo Restoration Online | Restore Family Photos with AI | ArtImageHub",
  description:
    "Restore old, damaged, or faded family photos with AI. Fix scratches, fading, blur, and water damage. HD original download for $4.99. Results in 30–90 seconds.",
  alternates: { canonical: "/old-photo-restoration" },
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
      image: "https://www.artimagehub.com/blog/before-1.jpg",
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
      image: "https://www.artimagehub.com/blog/after-1.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need to pay before uploading?", acceptedAnswer: { "@type": "Answer", text: "Yes. A one-time $4.99 payment unlocks upload and processing access on your email. No subscription required. After payment, return to the tool with the same email to upload and restore your photo." } },
    { "@type": "Question", name: "What image formats are supported for photo restoration?", acceptedAnswer: { "@type": "Answer", text: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For old scanned photos, we recommend scanning at 600 DPI or higher and uploading as PNG for best results." } },
    { "@type": "Question", name: "How long does AI photo restoration take?", acceptedAnswer: { "@type": "Answer", text: "Most photos are restored in 30–90 seconds. Complex images with heavy damage or many faces may take up to 3 minutes. The AI processes scratches, fading, blur, and color correction in one pass." } },
    { "@type": "Question", name: "Are my photos kept private and secure?", acceptedAnswer: { "@type": "Answer", text: "Yes. All photos are transmitted over encrypted HTTPS connections. Uploaded photos are automatically and permanently deleted from our servers within 24 hours. We never share, sell, or train AI models on your photos." } },
    { "@type": "Question", name: "How does pricing work?", acceptedAnswer: { "@type": "Answer", text: "One-time $4.99 payment. No subscription. Payment unlocks upload and processing access — if you're not satisfied, we offer a 30-day money-back guarantee. Email support@artimagehub.com." } },
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
    description: "One-time payment. Unlocks upload, AI processing, and HD original download."
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2847"
  }
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
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            Pay Once · No Subscription
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Old Photo Restoration
          </h1>
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
          <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-[#d2d2d7]/70 bg-[#faf8f4] px-5 py-4 text-left shadow-sm">
            <div className="grid gap-2 text-[13px] text-[#6e6e73] sm:grid-cols-3">
              <p>One-time $4.99 payment. No subscription required.</p>
              <p>Uploads encrypted and deleted within 24 hours.</p>
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

      {/* 30-Day Guarantee + Trust */}
      <div className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-8">
        <div className="mx-auto max-w-3xl px-5">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg className="h-8 w-8 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">30-Day Guarantee</p>
                <p className="text-[12px] text-[#6e6e73]">Full refund, no questions asked</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white border border-[#d4bc91]/40 px-5 py-4">
              <svg className="h-8 w-8 shrink-0 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-[#1d1d1f]">Secure & Private</p>
                <p className="text-[12px] text-[#6e6e73]">Photos deleted in 24 hours</p>
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
            What Customers Are Saying
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

      {/* ─── SEO Content: How It Works ─── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Photo Restoration Works
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Three steps. One-time payment. Your memories restored in under two minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pay once to unlock",
                desc: "$4.99 one-time payment unlocks upload and processing access on your email. No subscription.",
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
      </section>

      {/* ─── SEO Content: What We Fix ─── */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
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
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "Do I need to pay before uploading?",
                a: "Yes. A one-time $4.99 payment unlocks upload and processing access on your email. No subscription. After payment, return to the tool with the same email to upload and restore your photo.",
              },
              {
                q: "What image formats are supported for photo restoration?",
                a: "We accept JPG, JPEG, PNG, and WEBP formats up to 20MB per file. For old scanned photos, we recommend scanning at 600 DPI or higher and uploading as PNG for best results.",
              },
              {
                q: "How long does AI photo restoration take?",
                a: "Most photos are restored in 30–90 seconds. Complex images with heavy damage or many faces may take up to 3 minutes. The AI processes scratches, fading, blur, and color correction in one pass.",
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
                q: "How does pricing work and is there a refund policy?",
                a: "One-time $4.99 payment. No subscription. We offer a 30-day money-back guarantee — if you're not satisfied with your restoration, email support@artimagehub.com for a full refund.",
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
