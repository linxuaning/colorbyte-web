import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'Damaged Photo Repair Online | AI Fixes Torn & Scratched Photos',
  description: 'Repair damaged photos online with AI. Fix torn, scratched, water-damaged, and faded photos in seconds. Free tool - no signup required, results in 30 seconds.',
  keywords: [
    'damaged photo repair',
    'repair damaged photos',
    'fix damaged photos online',
    'torn photo repair',
    'scratched photo repair',
    'photo damage repair',
    'repair old damaged photos',
    'fix ripped photos',
    'restore damaged pictures',
    'damaged picture repair'
  ],
  alternates: { canonical: '/damaged-photo-repair' },
  openGraph: {
    title: 'Damaged Photo Repair | AI Fixes Torn & Scratched Photos',
    description: 'Repair torn, scratched, and water-damaged photos with AI. Free online tool.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Before and after damaged photo repair' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damaged Photo Repair - AI Powered',
    description: 'Fix torn, scratched, and damaged photos online. Free, no signup.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Repair Damaged Photos Online",
  description: "Repair torn, scratched, and damaged photographs using AI — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Damaged Photo Repair" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your damaged photo",
      text: "Scan your damaged photo at high resolution (600 DPI+) and upload. AI works best with clean scans.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes and repairs damage",
      text: "Our AI identifies scratches, tears, fading, and other damage, then reconstructs the missing or damaged areas.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download your repaired photo",
      text: "Preview the repair and download. 3 photos free, no signup required.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What types of photo damage can AI repair?", acceptedAnswer: { "@type": "Answer", text: "AI can repair: scratches, small tears, water stains, fading, yellowing, foxing spots, creases, and moderate physical damage. For photos with large missing sections (over 30% of image), results may be limited." } },
    { "@type": "Question", name: "Can AI repair a torn photo?", acceptedAnswer: { "@type": "Answer", text: "Yes, AI can repair torn photos if you scan both pieces together aligned properly. For clean tears, results are excellent. For tears with missing pieces, AI will attempt to reconstruct based on surrounding context." } },
    { "@type": "Question", name: "How should I scan a damaged photo?", acceptedAnswer: { "@type": "Answer", text: "Scan at 600 DPI minimum. For torn photos, align pieces as closely as possible on the scanner. Don't tape the original - tape damages photos. Just position the pieces carefully for scanning." } },
    { "@type": "Question", name: "Is damaged photo repair free?", acceptedAnswer: { "@type": "Answer", text: "Yes! Try 3 damaged photo repairs free, no signup required. Free users get 720p output. Pro Lifetime ($29.9 one-time) gives unlimited repairs at full resolution." } },
    { "@type": "Question", name: "Can AI repair water-damaged photos?", acceptedAnswer: { "@type": "Answer", text: "Yes, AI can remove water stains, reduce warping artifacts, and restore colors affected by water damage. Severe water damage with emulsion loss has limited repair options." } },
  ],
};

export default function DamagedPhotoRepairPage() {
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
      <section className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(225,29,72,0.06),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-[14px] font-semibold text-rose-700 shadow-sm">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Save Your Memories
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            <span className="text-rose-600">Damaged</span> Photo Repair
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            AI repairs torn, scratched, water-damaged, and faded photos in 30 seconds. Don't lose your memories to physical damage — <strong className="text-[#1d1d1f]">restore them today</strong>.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#6e6e73]">
            <span className="flex items-center gap-1.5">
              <span className="text-rose-600 font-bold">✓</span>
              Fixes scratches & tears
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-rose-600 font-bold">✓</span>
              Removes water damage
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-rose-600 font-bold">✓</span>
              Restores fading
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 py-6">
        <LiveActivity />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6e6e73]">
          {[
            { icon: "✓", text: "25,000+ damaged photos repaired" },
            { icon: "✓", text: "4.8★ satisfaction" },
            { icon: "✓", text: "Works on severe damage" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5">
              <span className="text-rose-600 font-bold">{badge.icon}</span>
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

      {/* Damage Types Section */}
      <section className="border-t border-[#d2d2d7]/40 bg-gradient-to-br from-rose-50 to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What Damage Can AI Repair?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Our AI is trained to handle the most common types of photo damage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "✂️",
                title: "Scratches & Scuffs",
                desc: "Surface scratches from handling, storage, or accidents. AI identifies scratch patterns and removes them.",
                success: "Excellent results",
              },
              {
                icon: "📄",
                title: "Tears & Rips",
                desc: "Torn photos can be scanned in pieces. AI reconstructs the missing areas based on context.",
                success: "Great for clean tears",
              },
              {
                icon: "💧",
                title: "Water Damage",
                desc: "Water stains, warping, and color bleeding from floods, spills, or humidity damage.",
                success: "Good results",
              },
              {
                icon: "🌅",
                title: "Fading & Yellowing",
                desc: "Chemical degradation from light exposure and aging. AI restores original tones and contrast.",
                success: "Excellent results",
              },
              {
                icon: "📍",
                title: "Foxing Spots",
                desc: "Brown spots from fungal growth or chemical reactions in paper. AI removes while preserving detail.",
                success: "Great results",
              },
              {
                icon: "🔥",
                title: "Heat & Fire Damage",
                desc: "Partial burn damage, heat warping, smoke staining. Limited but possible repair for moderate damage.",
                success: "Varies by severity",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-rose-100 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6] mb-3">{item.desc}</p>
                <span className="inline-block px-2 py-1 bg-rose-50 text-rose-700 text-[12px] font-medium rounded-full">
                  {item.success}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-[14px] text-amber-900">
              <strong>⚠️ Limitations:</strong> AI cannot repair photos with large missing sections (over 30% of image), severe chemical deterioration, or complete emulsion loss. For these cases, consult a professional photo restorer.
            </p>
          </div>
        </div>
      </section>

      {/* How to Scan Damaged Photos */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            How to Scan Damaged Photos for Best Results
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 p-5 bg-[#f5f5f7] rounded-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">For torn photos: Align pieces carefully</h3>
                <p className="text-[14px] text-[#6e6e73]">Position torn pieces as close together as possible on the scanner. Don't tape the original photo — tape causes permanent damage. Just position carefully and scan.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#f5f5f7] rounded-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">Scan at 600 DPI or higher</h3>
                <p className="text-[14px] text-[#6e6e73]">Higher resolution captures more detail for AI to work with. For severely damaged photos, use 1200 DPI if your scanner supports it.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#f5f5f7] rounded-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">For curled/warped photos: Use a heavy book</h3>
                <p className="text-[14px] text-[#6e6e73]">Gently flatten curled photos under heavy books for a few hours before scanning. Don't force — this can crack brittle photos.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#f5f5f7] rounded-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-bold">4</div>
              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">Save as PNG (lossless)</h3>
                <p className="text-[14px] text-[#6e6e73]">JPEG compression adds artifacts that interfere with AI repair. Always save damaged photo scans as PNG or TIFF.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Damaged Photo Repair FAQ
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "What types of photo damage can AI repair?",
                a: "AI can repair: scratches, small tears, water stains, fading, yellowing, foxing spots, creases, and moderate physical damage. For photos with large missing sections (over 30%), results may be limited.",
              },
              {
                q: "Can AI repair a torn photo?",
                a: "Yes! Scan both pieces aligned together. For clean tears, results are excellent. For tears with missing pieces, AI reconstructs based on surrounding context — results depend on what's missing.",
              },
              {
                q: "Can AI repair water-damaged photos?",
                a: "Yes. AI removes water stains, reduces warping artifacts, and restores colors affected by water damage. Severe damage with emulsion loss has limited repair options.",
              },
              {
                q: "Is damaged photo repair free?",
                a: "Yes! Try 3 damaged photo repairs free, no signup required. Free users get 720p output. Pro Lifetime ($29.9 one-time) gives unlimited repairs at full resolution.",
              },
              {
                q: "Should I repair the physical photo or just restore digitally?",
                a: "Digital restoration is usually the better option. It's non-destructive (original preserved), reversible, and much cheaper than professional physical repair. Keep your original safe and work with digital copies.",
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-rose-600 to-pink-600">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Don't Let Damage Destroy Your Memories
          </h2>
          <p className="text-rose-100 text-[17px] mb-8 max-w-lg mx-auto">
            Every damaged photo is a memory at risk. Repair yours in 30 seconds — before more detail is lost.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-rose-700 hover:bg-rose-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Repair Your Photo Free — Try Now
          </Link>
          <p className="mt-4 text-rose-200 text-[13px]">
            3 free repairs · No signup · Works on most damage types
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 px-5 bg-[#f5f5f7]">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">More Repair Tools</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/fix-water-damaged-photos" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-rose-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Water Damage Repair</h4>
              <p className="text-[13px] text-[#6e6e73]">Specialized water damage tools</p>
            </Link>
            <Link href="/remove-scratches-from-photos" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-rose-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Scratch Removal</h4>
              <p className="text-[13px] text-[#6e6e73]">Remove scratches and scuffs</p>
            </Link>
            <Link href="/old-photo-restoration" className="block p-4 bg-white rounded-lg border border-[#d2d2d7]/60 hover:border-rose-500/40 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Full Restoration</h4>
              <p className="text-[13px] text-[#6e6e73]">Complete photo restoration</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
