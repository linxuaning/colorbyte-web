import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'Photo Restoration Service | Professional Quality, Instant Results',
  description: 'Professional photo restoration service powered by AI. Restore old, damaged, and faded photos in seconds. No mailing photos, no waiting weeks. Try free today.',
  keywords: [
    'photo restoration service',
    'photo restoration services',
    'professional photo restoration',
    'photo restoration near me',
    'online photo restoration service',
    'best photo restoration service',
    'photo restoration company',
    'old photo restoration service',
    'digital photo restoration service',
    'picture restoration service'
  ],
  alternates: { canonical: '/photo-restoration-service' },
  openGraph: {
    title: 'Photo Restoration Service | Professional Quality, Instant Results',
    description: 'Professional photo restoration service powered by AI. Instant results, no waiting weeks.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Before and after photo restoration service' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Restoration Service - AI Powered',
    description: 'Professional-quality photo restoration. Instant results, no mailing photos.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use Our Photo Restoration Service",
  description: "Get professional-quality photo restoration in seconds using our AI-powered service — no mailing photos, no waiting weeks.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Photo Restoration Service" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo",
      text: "Upload any old, damaged, or faded photo. Supports JPG, PNG, WebP up to 10MB.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores your photo",
      text: "Professional-grade AI analyzes and restores your photo in 30 seconds — fixing damage, enhancing faces, restoring colors.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download your restored photo",
      text: "Preview and download your professionally restored photo. 3 free restorations, no signup required.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How does AI photo restoration compare to traditional services?", acceptedAnswer: { "@type": "Answer", text: "AI photo restoration delivers professional-quality results in seconds vs. 1-2 weeks for traditional services. Cost is significantly lower ($29.9 for unlimited vs. $25-100+ per photo), and you don't need to mail your precious originals. AI excels at common restoration needs; traditional services may still be better for severe damage requiring human artistic judgment." } },
    { "@type": "Question", name: "Is this a real photo restoration service?", acceptedAnswer: { "@type": "Answer", text: "Yes, this is a real photo restoration service powered by advanced AI instead of manual work. The results are professional-quality — our AI is trained on millions of photos and can fix fading, damage, enhance faces, colorize B&W photos, and more. Over 100,000 photos have been restored using our service." } },
    { "@type": "Question", name: "How much does the photo restoration service cost?", acceptedAnswer: { "@type": "Answer", text: "Try 3 photos free, no signup required. Pro Lifetime access is $29.9 one-time payment — unlimited restorations forever at full resolution. Compare to traditional services charging $25-100+ per photo with 1-2 week turnaround." } },
    { "@type": "Question", name: "Do I need to mail my original photos?", acceptedAnswer: { "@type": "Answer", text: "No! That's the beauty of our digital service. Simply scan or photograph your original and upload it. Your precious original stays safe with you. We only work with digital copies." } },
    { "@type": "Question", name: "What if I'm not satisfied with the restoration?", acceptedAnswer: { "@type": "Answer", text: "Try it free first — 3 photos, no commitment. See your results before paying anything. If Pro results don't meet your expectations, we offer a satisfaction guarantee." } },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ArtImageHub Photo Restoration Service",
  description: "Professional AI-powered photo restoration service. Restore old, damaged, and faded photos instantly.",
  provider: {
    "@type": "Organization",
    name: "ArtImageHub"
  },
  serviceType: "Photo Restoration",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photo Restoration Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Free Trial",
        description: "3 free photo restorations",
        price: "0",
        priceCurrency: "USD"
      },
      {
        "@type": "Offer",
        name: "Pro Lifetime",
        description: "Unlimited photo restorations at full resolution",
        price: "29.9",
        priceCurrency: "USD"
      }
    ]
  }
};

export default function PhotoRestorationServicePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(16,185,129,0.06),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[14px] font-semibold text-emerald-700 shadow-sm">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Professional Quality
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Photo Restoration <span className="text-emerald-600">Service</span>
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            Professional photo restoration — powered by AI, delivered in seconds. No mailing photos. No waiting weeks. <strong className="text-[#1d1d1f]">Try free now</strong>.
          </p>

          {/* Comparison callout */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-[13px] text-amber-800">
            <span className="font-semibold">Traditional: $50-100/photo, 1-2 weeks</span>
            <span className="text-amber-400">→</span>
            <span className="font-semibold text-emerald-700">ArtImageHub: $29.9 unlimited, 30 seconds</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 py-6">
        <LiveActivity />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6e6e73]">
          {[
            { icon: "✓", text: "100,000+ photos restored" },
            { icon: "✓", text: "4.8★ customer satisfaction" },
            { icon: "✓", text: "Instant delivery" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      {/* Main Tool */}
      <div id="upload" className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
        <RestoreClient />
      </div>

      <FloatingCTA />

      {/* Service Comparison */}
      <section className="border-t border-[#d2d2d7]/40 bg-gradient-to-br from-gray-50 to-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Why Choose AI Over Traditional Services?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              See how our AI restoration service compares to traditional photo restoration shops.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-[#d2d2d7]/60 overflow-hidden">
              <thead>
                <tr className="border-b border-[#d2d2d7]/60">
                  <th className="p-4 text-left text-[14px] font-semibold text-[#1d1d1f]">Feature</th>
                  <th className="p-4 text-center text-[14px] font-semibold text-emerald-700 bg-emerald-50">ArtImageHub AI</th>
                  <th className="p-4 text-center text-[14px] font-semibold text-[#6e6e73]">Traditional Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/40">
                <tr>
                  <td className="p-4 text-[14px] text-[#1d1d1f]">Turnaround Time</td>
                  <td className="p-4 text-center text-[14px] text-emerald-700 font-semibold bg-emerald-50/50">30 seconds</td>
                  <td className="p-4 text-center text-[14px] text-[#6e6e73]">1-2 weeks</td>
                </tr>
                <tr>
                  <td className="p-4 text-[14px] text-[#1d1d1f]">Cost Per Photo</td>
                  <td className="p-4 text-center text-[14px] text-emerald-700 font-semibold bg-emerald-50/50">$29.9 unlimited</td>
                  <td className="p-4 text-center text-[14px] text-[#6e6e73]">$25-100+ each</td>
                </tr>
                <tr>
                  <td className="p-4 text-[14px] text-[#1d1d1f]">Mail Original Photos?</td>
                  <td className="p-4 text-center text-[14px] text-emerald-700 font-semibold bg-emerald-50/50">No - 100% digital</td>
                  <td className="p-4 text-center text-[14px] text-[#6e6e73]">Usually required</td>
                </tr>
                <tr>
                  <td className="p-4 text-[14px] text-[#1d1d1f]">Preview Before Paying</td>
                  <td className="p-4 text-center text-[14px] text-emerald-700 font-semibold bg-emerald-50/50">Yes - 3 free</td>
                  <td className="p-4 text-center text-[14px] text-[#6e6e73]">Rarely</td>
                </tr>
                <tr>
                  <td className="p-4 text-[14px] text-[#1d1d1f]">Consistent Quality</td>
                  <td className="p-4 text-center text-[14px] text-emerald-700 font-semibold bg-emerald-50/50">Always consistent</td>
                  <td className="p-4 text-center text-[14px] text-[#6e6e73]">Varies by artist</td>
                </tr>
                <tr>
                  <td className="p-4 text-[14px] text-[#1d1d1f]">Availability</td>
                  <td className="p-4 text-center text-[14px] text-emerald-700 font-semibold bg-emerald-50/50">24/7 instant</td>
                  <td className="p-4 text-center text-[14px] text-[#6e6e73]">Business hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-5 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-[14px] text-blue-900">
              <strong>Note:</strong> For severely damaged photos with large missing sections (over 30%), traditional services with human artists may provide better results. Our AI excels at fading, scratches, tears, colorization, and face enhancement.
            </p>
          </div>
        </div>
      </section>

      {/* What We Restore */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            What Our Service Restores
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Faded Colors",
                desc: "Restore vibrant colors to photos that have faded from age, sunlight, or chemical degradation.",
              },
              {
                icon: "👤",
                title: "Blurry Faces",
                desc: "AI face enhancement brings clarity and detail back to blurry or low-resolution faces.",
              },
              {
                icon: "✂️",
                title: "Scratches & Damage",
                desc: "Remove scratches, tears, water stains, and physical damage from old photos.",
              },
              {
                icon: "🎬",
                title: "Black & White Photos",
                desc: "Add realistic color to B&W photos — see your ancestors in full color for the first time.",
              },
              {
                icon: "🔍",
                title: "Low Resolution",
                desc: "Upscale small photos to high resolution while maintaining sharpness and detail.",
              },
              {
                icon: "📷",
                title: "Old Film Photos",
                desc: "Restore photos from any era — daguerreotypes, tintypes, instant film, and more.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-xl p-6 border border-[#d2d2d7]/40">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#f5f5f7] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Your Photos Are Safe With Us
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Encrypted Upload</h3>
              <p className="text-[14px] text-[#6e6e73]">All uploads are encrypted in transit and at rest. Your photos never leave secure servers.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Auto-Deleted in 24h</h3>
              <p className="text-[14px] text-[#6e6e73]">Photos are automatically deleted from our servers within 24 hours. We don't keep copies.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">No Human Review</h3>
              <p className="text-[14px] text-[#6e6e73]">AI processes your photos automatically. No human ever sees your private family photos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Photo Restoration Service FAQ
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "How does AI photo restoration compare to traditional services?",
                a: "AI delivers professional-quality results in 30 seconds vs. 1-2 weeks. Cost is $29.9 for unlimited photos vs. $25-100+ per photo. You don't mail precious originals. AI excels at common restoration needs; traditional services may be better for severe damage requiring human judgment.",
              },
              {
                q: "Is this a real photo restoration service?",
                a: "Yes! We're a real photo restoration service powered by advanced AI instead of manual work. Our AI is trained on millions of photos and delivers professional-quality results. Over 100,000 photos have been restored using our service.",
              },
              {
                q: "How much does your photo restoration service cost?",
                a: "Try 3 photos completely free, no signup required. Pro Lifetime is $29.9 one-time — unlimited restorations forever at full resolution. Compare to traditional services charging $25-100+ per photo.",
              },
              {
                q: "Do I need to mail my original photos?",
                a: "Never! Simply scan or photograph your original and upload. Your precious originals stay safe with you. We work only with digital copies, eliminating the risk of loss or damage during shipping.",
              },
              {
                q: "What if the restoration doesn't meet my expectations?",
                a: "Try it free first — 3 photos, no commitment. See your results before paying anything. Our AI works great for most restoration needs, and you can see exactly what you'll get before upgrading to Pro.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-[#d2d2d7]/60 bg-[#f5f5f7] p-6">
                <dt className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.q}</dt>
                <dd className="text-[15px] text-[#6e6e73] leading-[1.65]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Professional Photo Restoration in Seconds
          </h2>
          <p className="text-emerald-100 text-[17px] mb-8 max-w-lg mx-auto">
            Stop waiting weeks and paying hundreds. Get professional-quality results instantly — try 3 photos free.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-emerald-700 hover:bg-emerald-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Try Our Service Free — Upload Now
          </Link>
          <p className="mt-4 text-emerald-200 text-[13px]">
            3 free restorations · No signup · Instant results
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 px-5 bg-[#f5f5f7]">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">More Restoration Services</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/old-photo-restoration" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-emerald-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Old Photo Restoration</h4>
              <p className="text-[13px] text-[#6e6e73]">Restore any vintage photo</p>
            </Link>
            <Link href="/colorize-photos-free" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-emerald-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Photo Colorization</h4>
              <p className="text-[13px] text-[#6e6e73]">Add color to B&W photos</p>
            </Link>
            <Link href="/damaged-photo-repair" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-emerald-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Damaged Photo Repair</h4>
              <p className="text-[13px] text-[#6e6e73]">Fix torn and scratched photos</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
