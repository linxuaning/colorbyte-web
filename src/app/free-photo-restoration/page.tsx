import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'Free Photo Restoration Online — See AI Results Before Paying (2026)',
  description: 'Free photo restoration preview: upload any old photo, AI restores it in 30 seconds. No signup, no credit card for preview. HD download $4.99 if you like the result.',
  keywords: [
    'free photo restoration',
    'photo restoration free',
    'free photo restoration online',
    'restore photos free',
    'free old photo restoration',
    'free photo repair',
    'restore old photos free online',
    'free picture restoration',
    'free photo restoration service',
    'free AI photo restoration'
  ],
  alternates: { canonical: '/free-photo-restoration' },
  openGraph: {
    title: 'Free Photo Restoration | No Signup Required',
    description: 'Restore old photos online with a free preview first. No signup required. Unlock the original-quality download for $4.99 if the result is worth keeping.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Free photo restoration before and after' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Photo Restoration - No Signup',
    description: 'Restore old photos with a free preview first. AI-powered, instant results, no account needed until you unlock the original-quality file.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Photos for Free",
  description: "Restore old, damaged photos completely free using AI — no signup, no credit card, instant results.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Free Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo for free",
      text: "Upload any old or damaged photo. No account creation, no signup, no credit card required. Supports JPG, PNG, WebP.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores your photo instantly",
      text: "Our free AI analyzes and restores your photo in about 30 seconds — fixing damage, enhancing faces, restoring colors.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download your restored photo free",
      text: "Preview the restored result first. When you want the original-quality photo, unlock the download for $4.99 on the same email.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is photo restoration really free?", acceptedAnswer: { "@type": "Answer", text: "Yes — the preview is free. You can upload a photo, see the restored result, and decide later whether the original-quality download is worth a one-time $4.99 unlock." } },
    { "@type": "Question", name: "Do I need to create an account?", acceptedAnswer: { "@type": "Answer", text: "No account is needed to get the preview. We only ask for an email if you decide to unlock the original-quality restored photo." } },
    { "@type": "Question", name: "What's the catch with free photo restoration?", acceptedAnswer: { "@type": "Answer", text: "The free part is the preview. You see the AI result first, then decide whether to pay $4.99 once for the original-quality file. That is much lower risk than starting a subscription before you know the outcome." } },
    { "@type": "Question", name: "What's the difference between Free and Pro?", acceptedAnswer: { "@type": "Answer", text: "The restoration model is the same. Free gives you the preview first. The $4.99 unlock gives you the clean original-quality download with no watermark." } },
    { "@type": "Question", name: "Why is this free when others charge $25+ per photo?", acceptedAnswer: { "@type": "Answer", text: "AI automation keeps processing costs low. We let you judge the result with a free preview first, then charge $4.99 only when you want the original-quality restored photo." } },
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
};

export default function FreePhotoRestorationPage() {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(34,197,94,0.06),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* FREE Badge - prominent */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-green-400 bg-green-50 px-5 py-2.5 text-[15px] font-bold text-green-700 shadow-sm">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            FREE PREVIEW — No Signup Required
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            <span className="text-green-600">Free</span> Photo Restoration
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            Restore old, damaged photos with AI and start with a <strong className="text-green-700">free preview</strong>. No signup, no credit card. Unlock the original-quality file only if the result is worth keeping.
          </p>

          {/* Free guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#6e6e73]">
            <span className="flex items-center gap-1.5">
              <span className="text-green-600 font-bold">✓</span>
              Free preview first
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-600 font-bold">✓</span>
              No account needed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-600 font-bold">✓</span>
              No credit card
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 py-6">
        <LiveActivity />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6e6e73]">
          {[
            { icon: "✓", text: "100,000+ previews created" },
            { icon: "✓", text: "4.8★ rating" },
            { icon: "✓", text: "Same AI as the paid file" },
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

      {/* Free vs Pro Comparison */}
      <section className="border-t border-[#d2d2d7]/40 bg-gradient-to-br from-gray-50 to-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Free Preview vs Original Download
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              The model is the same. The difference is whether you stop at the preview or unlock the original-quality file.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Tier */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                FREE PREVIEW
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Free Preview</h3>
                <p className="text-4xl font-black text-green-600 mb-6">$0</p>
                <ul className="space-y-3">
                  {[
                    { text: "See the restored result first", included: true },
                    { text: "AI damage repair", included: true },
                    { text: "Face enhancement", included: true },
                    { text: "Color restoration", included: true },
                    { text: "Preview output", included: true },
                    { text: "No signup required", included: true },
                    { text: "Original-quality download", included: false },
                    { text: "No-watermark final file", included: false },
                  ].map((item) => (
                    <li key={item.text} className={`flex items-center gap-2 text-[14px] ${item.included ? 'text-[#1d1d1f]' : 'text-[#6e6e73] line-through'}`}>
                      <span className={item.included ? 'text-green-600' : 'text-gray-300'}>
                        {item.included ? '✓' : '—'}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#upload"
                  className="mt-6 block w-full py-3 text-center bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                >
                  Start Free Preview
                </Link>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="bg-white rounded-2xl p-8 border border-[#d2d2d7]/60 relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                $4.99 UNLOCK
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Original Download</h3>
                <p className="text-4xl font-black text-[#1d1d1f] mb-1">$4.99</p>
                <p className="text-sm text-[#6e6e73] mb-6">one-time unlock</p>
                <ul className="space-y-3">
                  {[
                    { text: "Original-quality restored file", included: true },
                    { text: "AI damage repair", included: true },
                    { text: "Face enhancement", included: true },
                    { text: "Color restoration", included: true },
                    { text: "Full original resolution", included: true },
                    { text: "No watermark", included: true },
                    { text: "Email-based access lookup", included: true },
                    { text: "No watermarks", included: true },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-2 text-[14px] text-[#1d1d1f]">
                      <span className="text-blue-600">✓</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#upload"
                  className="mt-6 block w-full py-3 text-center bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Try Free First, Upgrade Later
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[14px] text-[#6e6e73]">
            <strong>No pressure:</strong> Preview first. Only unlock the original-quality file if you love the result.
          </p>
        </div>
      </section>

      {/* Why Free Works */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Why We Offer Free Photo Restoration
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4 text-2xl">
                🤖
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">AI Makes It Possible</h3>
              <p className="text-[14px] text-[#6e6e73]">Traditional restoration costs $25-100+ because humans spend hours per photo. AI processes in seconds at near-zero cost.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4 text-2xl">
                📈
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Unlocks Fund Previews</h3>
              <p className="text-[14px] text-[#6e6e73]">People who want the original-quality file pay $4.99 once. That keeps the preview layer open for everyone else.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4 text-2xl">
                🎯
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">We Win When You Win</h3>
              <p className="text-[14px] text-[#6e6e73]">Every restored photo is a preserved memory. Your success stories bring more users. Growth funds better AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Free */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#f5f5f7] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Everything Included in the Preview
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✨", title: "Damage Repair", desc: "Scratches, tears, water damage, fading — all fixed free" },
              { icon: "👤", title: "Face Enhancement", desc: "AI sharpens and restores blurry faces automatically" },
              { icon: "🎨", title: "Color Restoration", desc: "Faded colors restored to original vibrancy" },
              { icon: "🖼️", title: "B&W Colorization", desc: "Add realistic color to black and white photos" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#d2d2d7]/40">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{item.title}</h3>
                <p className="text-[13px] text-[#6e6e73]">{item.desc}</p>
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
                q: "Is photo restoration really free?",
                a: "Yes. The preview is free. You can upload a photo, see the restored result, and decide later whether the original-quality download is worth a one-time $4.99 unlock.",
              },
              {
                q: "Do I need to create an account?",
                a: "No account is needed for the preview. We only ask for an email if you decide to unlock the original-quality restored photo.",
              },
              {
                q: "What's the catch?",
                a: "The free part is the preview. You see the AI result first, then decide whether to pay $4.99 once for the original-quality file.",
              },
              {
                q: "What's the difference between Free and Pro?",
                a: "The restoration model is the same. Free gives you the preview first. The $4.99 unlock gives you the clean original-quality download with no watermark.",
              },
              {
                q: "Why is this free when others charge $25+ per photo?",
                a: "AI automation keeps costs low. We let you judge the result with a free preview first, then charge only when you want the original-quality restored photo.",
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Start with a Free Preview Right Now
          </h2>
          <p className="text-green-100 text-[17px] mb-8 max-w-lg mx-auto">
            No signup. No credit card. Just upload a photo, see the AI result, and unlock the original-quality file only if it is worth keeping.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-green-700 hover:bg-green-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Start Free Preview — Upload Now
          </Link>
          <p className="mt-4 text-green-200 text-[13px]">
            Free preview · No account · Results in 30 seconds
          </p>
        </div>
      </section>

      {/* Related Free Tools */}
      <section className="py-12 px-5 bg-[#f5f5f7]">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">More Free Tools</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/colorize-photos-free" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-green-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Free Colorization</h4>
              <p className="text-[13px] text-[#6e6e73]">Add color to B&W photos free</p>
            </Link>
            <Link href="/restore-old-photos-free" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-green-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Free Old Photo Restoration</h4>
              <p className="text-[13px] text-[#6e6e73]">Restore vintage photos free</p>
            </Link>
            <Link href="/enhance-old-photos" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-green-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Free Photo Enhancer</h4>
              <p className="text-[13px] text-[#6e6e73]">Enhance any photo free</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
