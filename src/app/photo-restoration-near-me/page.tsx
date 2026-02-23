import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Photo Restoration Near Me: Find Local & Online Services (2026)',
  description: 'Looking for photo restoration near you? Compare local shops vs online AI restoration. Save 80% with instant online restoration. Free trial, no appointment needed.',
  keywords: 'photo restoration near me, photo restoration services, local photo restoration, old photo repair near me, vintage photo restoration',
  openGraph: {
    title: 'Photo Restoration Near Me: Local vs Online Comparison',
    description: 'Compare local photo restoration shops vs online AI services. Save time and money with instant restoration.',
    type: 'article',
  },
};

export default function PhotoRestorationNearMePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber-100/40 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Photo Restoration Near Me</span>
          </nav>

          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            Local & Online Guide
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Photo Restoration<br />
            <span className="text-amber-600">Near Me</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl">
            Comparing local photo restoration shops vs online AI services. Discover which option saves you time and money while delivering professional results.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/old-photo-restoration"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Try Online Restoration Free →
            </Link>
            <a
              href="#local-vs-online"
              className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-amber-500 text-slate-900 font-bold rounded-lg transition-all"
            >
              Compare Options ↓
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>No appointment needed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Instant results (30 sec)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Save 80% vs local shops</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section id="local-vs-online" className="px-6 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
            Local Shop vs Online AI: Quick Comparison
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Local Shop */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-200">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Local Photo Shop</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Average Cost</div>
                  <div className="text-2xl font-black text-slate-900">$50-150<span className="text-base font-normal text-slate-600">/photo</span></div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Processing Time</div>
                  <div className="text-xl font-bold text-slate-900">1-4 weeks</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Convenience</div>
                  <div className="text-xl font-bold text-slate-900">Appointment required</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Human expertise</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Face-to-face consultation</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Handles physical prints</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-red-600 mt-0.5">✗</span>
                  <span className="text-slate-700">Expensive per photo</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-red-600 mt-0.5">✗</span>
                  <span className="text-slate-700">Long wait times</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-red-600 mt-0.5">✗</span>
                  <span className="text-slate-700">Must drop off/pick up</span>
                </div>
              </div>

              <div className="text-center text-sm font-bold text-slate-900">
                Best for: Extremely damaged heirlooms
              </div>
            </div>

            {/* Online AI */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 border-4 border-amber-500 relative">
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-amber-500 text-white font-black text-sm rounded-full shadow-lg rotate-12">
                RECOMMENDED
              </div>

              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Online AI Restoration</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Average Cost</div>
                  <div className="text-2xl font-black text-amber-600">$29.9<span className="text-base font-normal text-slate-600"> lifetime</span></div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Processing Time</div>
                  <div className="text-xl font-bold text-amber-600">30 seconds</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Convenience</div>
                  <div className="text-xl font-bold text-amber-600">Instant, 24/7</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Instant results</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">No appointment needed</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">80% cheaper per photo</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Unlimited restorations</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Try free before buying</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Works from home</span>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/old-photo-restoration"
                  className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all"
                >
                  Try ArtImageHub Free →
                </Link>
              </div>
            </div>
          </div>

          {/* Cost Calculator */}
          <div className="mt-12 p-8 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">💰 Cost Comparison: 20 Photos</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-slate-600 mb-2">Local Shop</div>
                <div className="text-3xl font-black text-slate-900">$1,000-3,000</div>
                <div className="text-xs text-slate-500">($50-150 per photo)</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-2">Online AI</div>
                <div className="text-3xl font-black text-green-600">$29.90</div>
                <div className="text-xs text-slate-500">(one-time, unlimited)</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-2">You Save</div>
                <div className="text-3xl font-black text-amber-600">$970-2,970</div>
                <div className="text-xs text-slate-500">(97% savings!)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finding Local Services */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-8">
            How to Find Local Photo Restoration Services
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-slate-700 leading-relaxed">
              If you prefer working with a local shop, here's how to find reputable photo restoration services in your area:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Search Methods</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">1.</span>
                  <span className="text-slate-700">Google "photo restoration near me" + your city</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">2.</span>
                  <span className="text-slate-700">Check camera/photo shops (many offer restoration)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">3.</span>
                  <span className="text-slate-700">Visit Costco/Walgreens photo centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">4.</span>
                  <span className="text-slate-700">Ask local photography studios</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What to Ask</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">📋</span>
                  <span className="text-slate-700">How long will restoration take?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">💰</span>
                  <span className="text-slate-700">What's the cost per photo?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">🖼️</span>
                  <span className="text-slate-700">Can I see before/after samples?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">⚠️</span>
                  <span className="text-slate-700">What damage types can you fix?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <h4 className="font-bold text-slate-900 mb-2">⚠️ Important: Always Get a Quote First</h4>
            <p className="text-slate-700 text-sm">
              Local shops often charge $50-150+ per photo. For 10+ photos, this can cost $500-1,500.
              <Link href="/old-photo-restoration" className="text-amber-600 hover:text-amber-700 font-medium underline ml-1">
                Compare with online AI restoration at $29.90 lifetime
              </Link>
              before committing to expensive local services.
            </p>
          </div>
        </div>
      </section>

      {/* When to Choose What */}
      <section className="px-6 py-16 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
            Which Option Is Right for You?
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Choose Online AI If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">You have 5+ photos to restore (saves hundreds of dollars)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">You want instant results (no 2-4 week wait)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Photos have standard damage (fading, scratches, discoloration)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">You prefer working from home</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-slate-700">Budget is a concern</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link
                  href="/old-photo-restoration"
                  className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all"
                >
                  Try ArtImageHub Free (3 Photos) →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Choose Local Shop If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">⚡</span>
                  <span className="text-slate-700">Photo is extremely damaged (70%+ missing/destroyed)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">⚡</span>
                  <span className="text-slate-700">It's a priceless family heirloom (wedding, ancestors)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">⚡</span>
                  <span className="text-slate-700">You need custom artistic interpretation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">⚡</span>
                  <span className="text-slate-700">Physical print needs repair (torn, moldy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">⚡</span>
                  <span className="text-slate-700">Money is no concern</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h4 className="font-bold text-slate-900 mb-2">💡 Pro Tip: Hybrid Approach</h4>
              <p className="text-slate-700">
                Many people use <Link href="/old-photo-restoration" className="text-amber-600 hover:text-amber-700 font-medium underline">online AI for 90% of their photos</Link> ($29.90 lifetime),
                then take only the most precious 1-2 heirlooms to local shops for custom work. This saves $500-2,000 while still getting professional care for special photos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How much does local photo restoration cost?',
                a: 'Local photo restoration shops typically charge $50-150 per photo. High-end studios can charge $200-500 for severely damaged heirlooms. Online AI restoration costs $29.90 for unlimited lifetime use, saving 80-95% compared to local shops.',
              },
              {
                q: 'Is online photo restoration as good as local shops?',
                a: 'For standard damage (fading, scratches, discoloration), AI restoration quality equals or exceeds local shops at 1/10th the cost. Local shops excel only at extremely damaged photos (70%+ missing) requiring artistic reconstruction.',
              },
              {
                q: 'How long does photo restoration take at local shops?',
                a: 'Local shops typically take 1-4 weeks for restoration. Some offer rush service (3-7 days) for an additional fee. Online AI restoration completes in 30 seconds.',
              },
              {
                q: 'Do I need an appointment for local photo restoration?',
                a: 'Yes, most local photo restoration services require appointments for consultation and drop-off. Online restoration requires no appointment and works 24/7.',
              },
              {
                q: 'What if I can\'t find photo restoration near me?',
                a: 'Online AI restoration works from anywhere. Try ArtImageHub free (3 photos, no signup) to see instant results. If you prefer local service, many shops offer mail-in restoration nationwide.',
              },
              {
                q: 'Are local photo restoration shops better for old photos?',
                a: 'Not necessarily. AI restoration is specifically trained on vintage photos from 1850s-1990s and handles age-related damage (yellowing, fading, spotting) extremely well. Local shops are better only for photos with extreme physical damage.',
              },
              {
                q: 'Can local shops restore torn or water-damaged photos?',
                a: 'Yes, local shops can physically repair torn prints and stabilize water damage before scanning. However, AI can restore the digital image quality after scanning, so a hybrid approach (local repair + online restoration) often works best.',
              },
              {
                q: 'Do CVS or Walgreens offer photo restoration?',
                a: 'CVS and Walgreens photo centers offer basic scanning but don\'t provide restoration services. They can scan your old photos, which you can then restore online with AI for much less than local restoration shops.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg border-2 border-slate-200 p-6 group">
                <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Skip the Wait. Restore Photos Instantly.
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            No appointment. No waiting. No expensive per-photo fees. Try 3 photos free and see the quality for yourself.
          </p>
          <Link
            href="/old-photo-restoration"
            className="inline-block px-12 py-5 bg-white hover:bg-amber-50 text-amber-700 font-black text-xl rounded-xl transition-all shadow-2xl hover:shadow-3xl"
          >
            Restore Photos Online Now →
          </Link>
          <p className="text-sm text-amber-100 mt-6">
            3 free photos • 30-second results • $29.9 lifetime for unlimited
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Photo Restoration Services',
            description: 'Find local and online photo restoration services. Compare costs, quality, and turnaround times.',
            url: 'https://www.artimagehub.com/photo-restoration-near-me',
          }),
        }}
      />
    </div>
  );
}
