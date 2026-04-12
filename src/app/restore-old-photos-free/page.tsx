import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'Restore Old Photos Free | AI Photo Restoration - No Signup',
  description: 'Restore old photos free with an AI preview. No signup, no credit card. See the restored result in 30 seconds, then unlock the original-quality download for $4.99.',
  keywords: [
    'restore old photos free',
    'free photo restoration',
    'restore photos online free',
    'old photo restoration free',
    'fix old photos free',
    'repair old photos free',
    'free AI photo restoration',
    'restore damaged photos free',
    'photo restoration no signup',
    'free photo enhancer'
  ],
  alternates: { canonical: '/restore-old-photos-free' },
  openGraph: {
    title: 'Restore Old Photos Free | AI Photo Restoration',
    description: 'Restore old photos free with an AI preview. No signup required. Preview first, then unlock the original-quality download for $4.99.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Before and after free AI photo restoration' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restore Old Photos Free - No Signup Required',
    description: 'Fix scratches, enhance faces, and colorize old photos with a free preview first. Unlock the original-quality download for $4.99.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Old Photos Free Online",
  description: "Restore damaged, faded, or old photographs using free AI photo restoration — no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Free AI Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo free",
      text: "Click the upload area and select your old or damaged photo. No signup or account required. Supports JPG, PNG, WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores automatically",
      text: "Our free AI analyzes damage and applies face enhancement, super-resolution, and scratch removal. Takes 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download your restored photo",
      text: "Preview the before/after result for free first. When you want the original-quality restored photo, pay $4.99 once to unlock the download.",
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Free Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free preview first, $4.99 original-quality download unlock"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2847"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is this photo restoration really free?", acceptedAnswer: { "@type": "Answer", text: "Yes — you can create a free preview with ArtImageHub without signing up or entering a card. When you want the original-quality restored photo, pay $4.99 once to unlock that download." } },
    { "@type": "Question", name: "What's the catch with free photo restoration?", acceptedAnswer: { "@type": "Answer", text: "The free part is the preview. You get to see the restored result first. If you want the clean original-quality file, you unlock that download for $4.99 once instead of starting a subscription." } },
    { "@type": "Question", name: "Do I need to create an account for free restoration?", acceptedAnswer: { "@type": "Answer", text: "No. You can upload and preview a restored photo without creating an account. We only ask for an email when you decide to unlock the original-quality download." } },
    { "@type": "Question", name: "What quality do I get with free restoration?", acceptedAnswer: { "@type": "Answer", text: "The AI restoration itself is the same. The difference is the file you take home: free preview first, then a $4.99 unlock for the original-quality download." } },
    { "@type": "Question", name: "How does free compare to paid photo restoration?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub lets you preview the restoration for free first, then unlock the original-quality download for $4.99 once. Many competitors push subscriptions or higher one-time prices before you know whether the result is good enough." } },
  ],
};

export default function RestoreOldPhotosFreePage() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(34,197,94,0.1),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* Free Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-2 text-[14px] font-semibold text-green-700 shadow-sm">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free Preview · No Signup · No Credit Card
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Restore Old Photos <span className="text-green-600">Free</span>
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            Upload your old, damaged, or faded photo. AI restores it in 30 seconds. <strong className="text-[#1d1d1f]">Start with a free preview</strong> and unlock the original-quality download only if you like the result.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#6e6e73]">
            <span className="flex items-center gap-1.5">
              <span className="text-green-600 font-bold">✓</span>
              No signup required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-600 font-bold">✓</span>
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-600 font-bold">✓</span>
              Results in 30 seconds
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 py-6">
        <LiveActivity />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6e6e73]">
          {[
            { icon: "✓", text: "10,000+ previews created" },
            { icon: "✓", text: "4.8★ user rating" },
            { icon: "✓", text: "Same AI as paid version" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5">
              <span className="text-green-600 font-bold">{badge.icon}</span>
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

      {/* Why Free Section */}
      <section className="border-t border-[#d2d2d7]/40 bg-gradient-to-br from-green-50 to-emerald-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Why Is Photo Restoration Free?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              We believe everyone deserves to preserve their family memories.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: "🎁",
                title: "Free Preview First",
                desc: "See the restored result before paying. Only unlock the original-quality file if the preview is worth it to you.",
              },
              {
                icon: "🔓",
                title: "No Account Needed",
                desc: "We don't want your email. Just upload, restore, download. Your photos are processed instantly and deleted from our servers within 24 hours.",
              },
              {
                icon: "💎",
                title: "Same AI Quality",
                desc: "The restoration model is the same. The difference is what you download: preview first, then the original-quality file after the $4.99 unlock.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Paid Comparison */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Free Preview vs Original Download
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#d2d2d7]">
                  <th className="py-4 px-4 text-[#1d1d1f] font-semibold">Feature</th>
                  <th className="py-4 px-4 text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Free Preview</span>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <span className="inline-block px-3 py-1 bg-[#0071e3] text-white rounded-full text-sm font-semibold">$4.99 Unlock</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/60">
                <tr>
                  <td className="py-4 px-4 text-[#1d1d1f]">What you see first</td>
                  <td className="py-4 px-4 text-center text-[#6e6e73]">Restored preview</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Same restored result</td>
                </tr>
                <tr className="bg-[#f5f5f7]/50">
                  <td className="py-4 px-4 text-[#1d1d1f]">AI Quality</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">✓ Same</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">✓ Same</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-[#1d1d1f]">Download Resolution</td>
                  <td className="py-4 px-4 text-center text-[#6e6e73]">Preview</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Full Original</td>
                </tr>
                <tr className="bg-[#f5f5f7]/50">
                  <td className="py-4 px-4 text-[#1d1d1f]">Face Enhancement</td>
                  <td className="py-4 px-4 text-center text-green-600">✓</td>
                  <td className="py-4 px-4 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-[#1d1d1f]">Colorization</td>
                  <td className="py-4 px-4 text-center text-green-600">✓</td>
                  <td className="py-4 px-4 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-[#f5f5f7]/50">
                  <td className="py-4 px-4 text-[#1d1d1f]">Super Resolution</td>
                  <td className="py-4 px-4 text-center text-green-600">✓</td>
                  <td className="py-4 px-4 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-[#1d1d1f]">Signup Required</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">No</td>
                  <td className="py-4 px-4 text-center text-[#6e6e73]">Email only</td>
                </tr>
                <tr className="bg-[#f5f5f7]/50">
                  <td className="py-4 px-4 text-[#1d1d1f]">Price</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold text-lg">$0</td>
                  <td className="py-4 px-4 text-center text-[#0071e3] font-bold text-lg">$4.99 once</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-center text-blue-900">
              <strong>💡 Pro tip:</strong> Use this page to judge the preview first. If the restore is good enough for print, archive, or sharing, unlock the original-quality file for $4.99 once.
            </p>
          </div>
        </div>
      </section>

      {/* Compare to Other "Free" Options */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-4">
            How We Compare to Other &quot;Free&quot; Tools
          </h2>
          <p className="text-center text-[#6e6e73] mb-12 max-w-2xl mx-auto">
            Many tools claim to be free but add watermarks, require signups, or have hidden limits.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ArtImageHub", free: "Free preview, no signup", catch: "$4.99 only if you want the original-quality file", best: true },
              { name: "Remini", free: "5 photos/day with watermark", catch: "$9.99/mo for no watermark", best: false },
              { name: "Fotor", free: "Basic features only", catch: "Upgrade popup every action", best: false },
              { name: "PhotoRoom", free: "With watermark", catch: "Subscription for clean output", best: false },
            ].map((tool) => (
              <div key={tool.name} className={`rounded-xl p-5 ${tool.best ? 'bg-green-50 border-2 border-green-400 ring-2 ring-green-100' : 'bg-white border border-[#d2d2d7]/60'}`}>
                {tool.best && (
                  <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">✓ Best Free Option</div>
                )}
                <h3 className="font-bold text-[#1d1d1f] mb-2">{tool.name}</h3>
                <p className="text-[13px] text-green-700 mb-2">{tool.free}</p>
                <p className="text-[12px] text-[#6e6e73]">Catch: {tool.catch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Free Photo Restoration FAQ
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "Is this photo restoration really free?",
                a: "Yes. You can create a free preview with ArtImageHub without signing up or entering a card. When you want the original-quality restored photo, pay $4.99 once to unlock that download.",
              },
              {
                q: "What's the catch with free photo restoration?",
                a: "The free part is the preview. You get to see the restored result first. If you want the clean original-quality file, you unlock that download for $4.99 once instead of starting a subscription.",
              },
              {
                q: "Do I need to create an account for free restoration?",
                a: "No. You can upload and preview a restored photo without creating an account. We only ask for an email when you decide to unlock the original-quality download.",
              },
              {
                q: "What quality do I get with free restoration?",
                a: "The AI restoration itself is the same. The difference is the file you take home: free preview first, then a $4.99 unlock for the original-quality download.",
              },
              {
                q: "Are my photos safe and private?",
                a: "Yes. All photos are transmitted over encrypted HTTPS. Uploaded photos are automatically deleted from our servers within 24 hours. We never share, sell, or use your photos to train AI.",
              },
              {
                q: "What happens after the free preview?",
                a: "If the preview looks good, you can unlock the original-quality restored photo for $4.99 once. If it is not good enough, you can stop there without starting a subscription.",
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

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Start with a Free Preview Right Now
          </h2>
          <p className="text-green-100 text-[17px] mb-8 max-w-lg mx-auto">
            Upload your photo and see the AI restore it in 30 seconds. No signup. No credit card. Unlock the original-quality file only if you want it.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-green-700 hover:bg-green-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Start Free Preview Now
          </Link>
          <p className="mt-4 text-green-200 text-[13px]">
            Scroll up to upload your photo · Results in 30 seconds
          </p>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-4 bg-[#f3ede3]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-[#2c2416] mb-8">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/ai-photo-restoration"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                AI Photo Restoration
              </h3>
              <p className="text-sm text-[#6b5344]">
                Learn how AI restores old photos
              </p>
            </Link>

            <Link
              href="/fix-blurry-photos"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Fix Blurry Photos
              </h3>
              <p className="text-sm text-[#6b5344]">
                Sharpen blurry images with AI
              </p>
            </Link>

            <Link
              href="/restore-faded-photos"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Restore Faded Photos
              </h3>
              <p className="text-sm text-[#6b5344]">
                Bring back faded colors and detail
              </p>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/photo-restoration-service"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Photo Restoration Service
              </h3>
              <p className="text-sm text-[#6b5344]">
                Professional AI restoration service
              </p>
            </Link>

            <Link
              href="/best-photo-restoration-software"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Best Photo Restoration Software
              </h3>
              <p className="text-sm text-[#6b5344]">
                Compare top restoration tools 2026
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
