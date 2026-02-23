import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'Restore Faded Photos | Bring Back Vibrant Colors with AI',
  description: 'Restore faded photos to their original vibrancy with AI. Fix sun damage, yellowing, and color degradation in seconds. Free to try, instant results.',
  keywords: [
    'restore faded photos',
    'fix faded photos',
    'faded photo restoration',
    'restore faded pictures',
    'bring back faded photos',
    'faded color restoration',
    'fix sun damaged photos',
    'restore yellowed photos',
    'faded photograph repair',
    'color restoration old photos'
  ],
  alternates: { canonical: '/restore-faded-photos' },
  openGraph: {
    title: 'Restore Faded Photos | AI Color Recovery',
    description: 'Bring back vibrant colors to faded photos. AI fixes sun damage and yellowing instantly.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Faded photo restoration before and after' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restore Faded Photos - AI Powered',
    description: 'Fix faded, yellowed photos instantly. Free AI restoration.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Faded Photos",
  description: "Restore faded photographs to their original colors using AI — fix sun damage, yellowing, and color degradation in seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Faded Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your faded photo",
      text: "Upload any faded, yellowed, or sun-damaged photo. Our AI works with all levels of fading.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores original colors",
      text: "Advanced AI analyzes the fading pattern and reconstructs original colors based on remaining color data and trained knowledge of natural tones.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download your vibrant photo",
      text: "Preview the color restoration and download. 3 photos free, no signup required.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Why do photos fade over time?", acceptedAnswer: { "@type": "Answer", text: "Photos fade due to: UV light exposure breaking down dyes, chemical reactions in photo paper, humidity and temperature fluctuations, and natural dye instability. Color photos from the 1970s-90s are especially prone to fading as dye technology was less stable than modern prints." } },
    { "@type": "Question", name: "Can AI really restore faded colors?", acceptedAnswer: { "@type": "Answer", text: "Yes! AI analyzes remaining color information and uses deep learning models trained on millions of photos to reconstruct original tones. Even severely faded photos often retain enough data for AI to restore surprisingly accurate colors. Results are typically excellent for moderate fading." } },
    { "@type": "Question", name: "Will restoration look natural or over-saturated?", acceptedAnswer: { "@type": "Answer", text: "Our AI is trained to restore natural-looking colors, not artificial oversaturation. The goal is accurate reconstruction of original tones based on the photo's era and subject matter. You can always adjust if you prefer more or less vibrant results." } },
    { "@type": "Question", name: "Can you restore photos that are almost completely faded?", acceptedAnswer: { "@type": "Answer", text: "AI can work with severely faded photos, but results depend on how much color data remains. Photos with visible image detail usually restore well. Completely washed-out photos with no discernible detail have limited restoration potential." } },
    { "@type": "Question", name: "Is faded photo restoration free?", acceptedAnswer: { "@type": "Answer", text: "Yes! Try 3 faded photo restorations free, no signup required. See your results instantly. Pro Lifetime ($29.9 one-time) gives unlimited restorations at full resolution." } },
  ],
};

export default function RestoreFadedPhotosPage() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(245,158,11,0.06),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-[14px] font-semibold text-amber-700 shadow-sm">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Color Recovery
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Restore <span className="text-amber-600">Faded</span> Photos
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            Bring back the vibrant colors time has stolen. AI analyzes fading patterns and reconstructs original tones — <strong className="text-[#1d1d1f]">results in 30 seconds</strong>.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#6e6e73]">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">✓</span>
              Fixes sun damage
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">✓</span>
              Removes yellowing
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">✓</span>
              Natural results
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 py-6">
        <LiveActivity />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6e6e73]">
          {[
            { icon: "✓", text: "50,000+ faded photos restored" },
            { icon: "✓", text: "4.8★ satisfaction" },
            { icon: "✓", text: "Natural color recovery" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">{badge.icon}</span>
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

      {/* Why Photos Fade */}
      <section className="border-t border-[#d2d2d7]/40 bg-gradient-to-br from-amber-50 to-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Why Photos Fade — And How AI Fixes It
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Understanding fading helps you prevent future damage and appreciate the restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Causes */}
            <div className="bg-white rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-4 flex items-center gap-2">
                <span className="text-amber-500">☀️</span> Why Photos Fade
              </h3>
              <ul className="space-y-3">
                {[
                  { cause: "UV Light Exposure", detail: "Sunlight breaks down photo dyes over years" },
                  { cause: "Chemical Degradation", detail: "Photo paper chemicals react and decay" },
                  { cause: "Heat & Humidity", detail: "Temperature fluctuations accelerate fading" },
                  { cause: "Unstable Dyes", detail: "1970s-90s photos used less stable dyes" },
                ].map((item) => (
                  <li key={item.cause} className="flex gap-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <div>
                      <span className="font-medium text-[#1d1d1f]">{item.cause}:</span>
                      <span className="text-[#6e6e73] ml-1">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* How AI Fixes */}
            <div className="bg-white rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-4 flex items-center gap-2">
                <span className="text-amber-500">🤖</span> How AI Restores Colors
              </h3>
              <ul className="space-y-3">
                {[
                  { step: "Analyzes Remaining Data", detail: "Finds color information still in the image" },
                  { step: "Maps Fading Patterns", detail: "Identifies which colors faded most" },
                  { step: "Reconstructs Tones", detail: "Uses training data to restore natural colors" },
                  { step: "Balances Results", detail: "Ensures natural look without oversaturation" },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <span className="text-amber-500 mt-1">✓</span>
                    <div>
                      <span className="font-medium text-[#1d1d1f]">{item.step}:</span>
                      <span className="text-[#6e6e73] ml-1">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fading Types */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Types of Fading We Restore
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🌅",
                title: "Sun Fading",
                desc: "Photos displayed in sunlight lose color unevenly. Reds and yellows often fade first.",
                result: "Excellent restoration",
              },
              {
                icon: "📜",
                title: "Yellowing",
                desc: "Chemical aging turns whites and light areas yellow or sepia-toned over decades.",
                result: "Excellent restoration",
              },
              {
                icon: "🎨",
                title: "Color Shift",
                desc: "Different dyes fade at different rates, causing unnatural color casts (often magenta or cyan).",
                result: "Great restoration",
              },
              {
                icon: "☁️",
                title: "Overall Fading",
                desc: "Entire photo loses saturation and contrast uniformly from age and storage conditions.",
                result: "Excellent restoration",
              },
              {
                icon: "💧",
                title: "Humidity Damage",
                desc: "Moisture causes blotchy fading and color bleeding in specific areas.",
                result: "Good restoration",
              },
              {
                icon: "📸",
                title: "Polaroid Fading",
                desc: "Instant photos fade distinctively with characteristic color loss patterns.",
                result: "Good restoration",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-xl p-6 border border-[#d2d2d7]/40">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6] mb-3">{item.desc}</p>
                <span className="inline-block px-2 py-1 bg-amber-50 text-amber-700 text-[12px] font-medium rounded-full">
                  {item.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Era Guide */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#f5f5f7] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Photo Era Fading Guide
          </h2>

          <div className="space-y-4">
            {[
              { era: "1950s-1960s", issue: "Early color processes, prone to severe red/magenta fading", tip: "Often respond well to AI restoration despite age" },
              { era: "1970s", issue: "Kodacolor/Ektachrome era, notorious for fading especially reds", tip: "Common restoration candidates, usually excellent results" },
              { era: "1980s", issue: "Improved dyes but still susceptible, often show cyan shifts", tip: "Very restorable, AI handles color shifts well" },
              { era: "1990s", issue: "Better stability but cheap processing caused issues", tip: "Usually mild fading, easy to restore" },
              { era: "Polaroids", issue: "Unique fading: whites yellow, colors shift unpredictably", tip: "Distinctive challenges but AI adapts to patterns" },
            ].map((item) => (
              <div key={item.era} className="flex gap-4 p-5 bg-white rounded-xl border border-[#d2d2d7]/40">
                <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 font-bold text-sm">
                  {item.era}
                </div>
                <div>
                  <p className="text-[14px] text-[#1d1d1f] font-medium">{item.issue}</p>
                  <p className="text-[13px] text-[#6e6e73] mt-1">💡 {item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Faded Photo Restoration FAQ
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "Why do photos fade over time?",
                a: "UV light breaks down photo dyes, chemical reactions in paper degrade colors, and humidity accelerates decay. 1970s-90s color photos are especially prone to fading due to less stable dye technology.",
              },
              {
                q: "Can AI really restore faded colors accurately?",
                a: "Yes! AI analyzes remaining color data and uses deep learning trained on millions of photos to reconstruct original tones. Even severely faded photos often retain enough information for excellent results.",
              },
              {
                q: "Will the restoration look natural?",
                a: "Our AI is trained for natural-looking restoration, not artificial oversaturation. The goal is accurate reconstruction of how the photo originally looked, based on era-appropriate color science.",
              },
              {
                q: "Can completely faded photos be restored?",
                a: "AI works best when some color data remains. Photos with visible detail usually restore well. Completely washed-out photos with no discernible image have limited restoration potential.",
              },
              {
                q: "Is faded photo restoration free?",
                a: "Yes! Try 3 restorations free, no signup required. See instant results. Pro Lifetime ($29.9 one-time) gives unlimited full-resolution restorations.",
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Bring Your Faded Memories Back to Life
          </h2>
          <p className="text-amber-100 text-[17px] mb-8 max-w-lg mx-auto">
            Those washed-out photos still hold their colors — hidden beneath years of fading. Let AI reveal them again.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-amber-700 hover:bg-amber-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Restore Faded Photo Free — Try Now
          </Link>
          <p className="mt-4 text-amber-200 text-[13px]">
            3 free restorations · No signup · Natural color recovery
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 px-5 bg-[#f5f5f7]">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">More Restoration Tools</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/colorize-photos-free" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-amber-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Photo Colorization</h4>
              <p className="text-[13px] text-[#6e6e73]">Add color to B&W photos</p>
            </Link>
            <Link href="/enhance-old-photos" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-amber-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Photo Enhancement</h4>
              <p className="text-[13px] text-[#6e6e73]">Sharpen and enhance details</p>
            </Link>
            <Link href="/old-photo-restoration" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-amber-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Full Restoration</h4>
              <p className="text-[13px] text-[#6e6e73]">Complete photo restoration</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
