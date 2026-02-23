import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'Vintage Photo Restoration | AI Restores Antique Photos in Seconds',
  description: 'Restore vintage and antique photos with AI. Fix faded sepia prints, repair daguerreotypes, enhance Victorian portraits. Free online tool - results in 30 seconds.',
  keywords: [
    'vintage photo restoration',
    'antique photo restoration',
    'restore vintage photos',
    'restore antique photographs',
    'victorian photo restoration',
    'sepia photo restoration',
    'daguerreotype restoration',
    'restore heritage photos',
    'restore historical photos',
    'old portrait restoration'
  ],
  alternates: { canonical: '/vintage-photo-restoration' },
  openGraph: {
    title: 'Vintage Photo Restoration | AI for Antique Photos',
    description: 'Restore vintage photos with AI. Fix sepia prints, repair antique photographs. Free to try.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Before and after vintage photo restoration' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vintage Photo Restoration - AI Powered',
    description: 'Restore antique and vintage photos in seconds. Free, no signup required.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Vintage Photos with AI",
  description: "Restore vintage, antique, and heritage photographs using AI restoration — free, no signup required.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Vintage Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Scan and upload your vintage photo",
      text: "Scan your vintage photo at 600 DPI or higher, then upload. Supports JPG, PNG, WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores the photo",
      text: "Our AI trained on historical photographs repairs fading, scratches, and damage while preserving the authentic vintage character.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download your restored vintage photo",
      text: "Preview the restoration and download. Keep the sepia tones or colorize — your choice.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can AI restore very old vintage photos from the 1800s?", acceptedAnswer: { "@type": "Answer", text: "Yes! Our AI is trained on historical photographs from the 1850s onwards. It can restore daguerreotypes, tintypes, cabinet cards, and Victorian-era portraits. Results depend on the original photo's condition — severely damaged photos may have limited restoration." } },
    { "@type": "Question", name: "Will AI restoration remove the vintage look?", acceptedAnswer: { "@type": "Answer", text: "No — our AI preserves the authentic vintage character by default. It repairs damage without removing the natural aging that gives vintage photos their charm. You can optionally colorize, but the sepia/B&W aesthetic is preserved unless you choose otherwise." } },
    { "@type": "Question", name: "How should I scan vintage photos for best results?", acceptedAnswer: { "@type": "Answer", text: "Scan at 600 DPI minimum (1200 DPI for small prints). Use a flatbed scanner, not a phone camera. Save as PNG or TIFF to avoid compression artifacts. Clean the scanner glass and handle photos with cotton gloves." } },
    { "@type": "Question", name: "Can AI restore photos on old photo paper that's deteriorating?", acceptedAnswer: { "@type": "Answer", text: "AI restoration works on the digital scan, not the physical photo. The digital restoration can remove signs of paper deterioration (yellowing, foxing, silvering) from the image. For physical preservation, consult an archivist." } },
    { "@type": "Question", name: "Is vintage photo restoration free?", acceptedAnswer: { "@type": "Answer", text: "Yes! Try 3 vintage photo restorations free, no signup required. Free users get 720p output. Pro Lifetime ($29.9 one-time) gives unlimited restorations at full resolution." } },
  ],
};

export default function VintagePhotoRestorationPage() {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(180,83,9,0.06),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-[14px] font-semibold text-amber-800 shadow-sm">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Heritage Photo Specialist
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            <span className="text-amber-700">Vintage</span> Photo Restoration
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            AI trained on historical photographs from the 1850s to 1970s. Restore antique portraits, sepia prints, and family heirlooms — <strong className="text-[#1d1d1f]">preserving their authentic character</strong>.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#6e6e73]">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-700 font-bold">✓</span>
              Victorian to 1970s
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-700 font-bold">✓</span>
              Preserves vintage look
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-700 font-bold">✓</span>
              Optional colorization
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 py-6">
        <LiveActivity />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6e6e73]">
          {[
            { icon: "✓", text: "10,000+ vintage photos restored" },
            { icon: "✓", text: "4.9★ from genealogists" },
            { icon: "✓", text: "Trained on historical photos" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5">
              <span className="text-amber-700 font-bold">{badge.icon}</span>
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

      {/* Era Support Section */}
      <section className="border-t border-[#d2d2d7]/40 bg-gradient-to-br from-amber-50 to-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Restoring Photos from Every Era
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Our AI understands the unique characteristics of photos from different time periods.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                era: "1850s-1890s",
                title: "Victorian Era",
                types: "Daguerreotypes, tintypes, albumen prints, cabinet cards",
                challenges: "Silver oxidation, case damage, emulsion lifting",
              },
              {
                era: "1900s-1930s",
                title: "Early 20th Century",
                types: "Silver gelatin prints, sepia tones, postcards",
                challenges: "Yellowing, foxing spots, paper deterioration",
              },
              {
                era: "1940s-1950s",
                title: "Mid-Century",
                types: "Black & white prints, early color photos",
                challenges: "Fading, scratches, water damage, storage wear",
              },
              {
                era: "1960s-1970s",
                title: "Color Era Begins",
                types: "Kodachrome, Ektachrome, instant photos",
                challenges: "Color shifting, magenta cast, chemical fading",
              },
              {
                era: "1980s-1990s",
                title: "Modern Vintage",
                types: "35mm prints, Polaroids, disposable camera shots",
                challenges: "Light damage, humidity damage, poor processing",
              },
              {
                era: "Any Era",
                title: "Family Heirlooms",
                types: "Portraits, wedding photos, military photos, school photos",
                challenges: "Whatever time has done, AI can help restore",
              },
            ].map((item) => (
              <div key={item.era} className="bg-white rounded-xl p-6 border border-amber-200/60 shadow-sm">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">{item.era}</div>
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#6e6e73] mb-2"><strong>Types:</strong> {item.types}</p>
                <p className="text-[13px] text-amber-800"><strong>AI fixes:</strong> {item.challenges}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scanning Tips */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            How to Scan Vintage Photos for Best Results
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">Use a flatbed scanner</h3>
                  <p className="text-[14px] text-[#6e6e73]">Phone cameras add distortion and uneven lighting. A flatbed scanner captures true detail.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">Scan at 600 DPI minimum</h3>
                  <p className="text-[14px] text-[#6e6e73]">Higher resolution gives AI more detail to work with. For small prints, use 1200 DPI.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">Save as PNG or TIFF</h3>
                  <p className="text-[14px] text-[#6e6e73]">Avoid JPEG compression which adds artifacts. Use lossless formats for archival quality.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">Clean the scanner glass</h3>
                  <p className="text-[14px] text-[#6e6e73]">Dust and smudges appear in the scan. Use microfiber cloth and glass cleaner.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">Handle with cotton gloves</h3>
                  <p className="text-[14px] text-[#6e6e73]">Fingerprints on vintage photos cause permanent damage. Use clean cotton gloves.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold">6</div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">Don't remove from frames</h3>
                  <p className="text-[14px] text-[#6e6e73]">Old photos may be stuck to glass. Scan through glass rather than risk damage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Vintage Photo Restoration FAQ
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "Can AI restore very old vintage photos from the 1800s?",
                a: "Yes! Our AI is trained on historical photographs from the 1850s onwards. It can restore daguerreotypes, tintypes, cabinet cards, and Victorian-era portraits. Results depend on the original condition.",
              },
              {
                q: "Will AI restoration remove the vintage look?",
                a: "No — our AI preserves the authentic vintage character by default. It repairs damage without removing the natural aging. You can optionally colorize, but the sepia/B&W aesthetic is preserved unless you choose otherwise.",
              },
              {
                q: "Should I colorize my vintage photos?",
                a: "It's personal preference. Colorization can bring photos to life but changes their historical character. Many genealogists prefer keeping the original tones for authenticity. Try both and decide!",
              },
              {
                q: "Can AI restore photos with silver mirroring?",
                a: "Yes, AI can reduce or eliminate silver mirroring (the bluish-silver sheen on old prints). It works by reconstructing the underlying image detail. Severe mirroring may have limited improvement.",
              },
              {
                q: "Is vintage photo restoration free?",
                a: "Yes! Try 3 vintage photo restorations free, no signup required. Free users get 720p output. Pro Lifetime ($29.9 one-time) gives unlimited restorations at full resolution.",
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Preserve Your Family History
          </h2>
          <p className="text-amber-100 text-[17px] mb-8 max-w-lg mx-auto">
            Every vintage photo tells a story. Restore yours in 30 seconds — before more detail is lost to time.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-amber-700 hover:bg-amber-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Restore Your Vintage Photo Free
          </Link>
          <p className="mt-4 text-amber-200 text-[13px]">
            3 free photos · No signup · Preserves authenticity
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
            <Link href="/restore-photos-online" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40">
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">Restore Photos Online</h3>
              <p className="text-sm text-[#6b5344]">Web-based restoration in 30 seconds</p>
            </Link>
            <Link href="/restore-old-photos-free" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40">
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">Free Photo Restoration</h3>
              <p className="text-sm text-[#6b5344]">Try 3 photos completely free</p>
            </Link>
            <Link href="/restore-faded-photos" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40">
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">Restore Faded Photos</h3>
              <p className="text-sm text-[#6b5344]">Bring back faded colors</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
