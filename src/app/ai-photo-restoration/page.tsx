import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'AI Photo Restoration | Restore Old Photos with Artificial Intelligence',
  description: 'AI photo restoration brings old, damaged photos back to life in seconds. Advanced neural networks fix scratches, enhance faces, and colorize B&W. Free to try, instant results.',
  keywords: [
    'AI photo restoration',
    'artificial intelligence photo restoration',
    'AI restore old photos',
    'AI photo repair',
    'neural network photo restoration',
    'machine learning photo restoration',
    'AI photo enhancement',
    'deep learning photo restoration',
    'AI image restoration',
    'automatic photo restoration'
  ],
  alternates: { canonical: '/ai-photo-restoration' },
  openGraph: {
    title: 'AI Photo Restoration | Advanced Neural Network Restoration',
    description: 'Restore old photos with AI. Neural networks fix damage, enhance faces, add color. Instant results.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'AI photo restoration before and after' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Photo Restoration - Neural Network Powered',
    description: 'Advanced AI restores old photos in 30 seconds. Try free now.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Photos with AI",
  description: "Use advanced AI and neural networks to restore old, damaged, or faded photos in seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo",
      text: "Upload any old, damaged, or faded photo. Our AI accepts JPG, PNG, and WebP formats up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes and restores",
      text: "Advanced neural networks analyze your photo, identify damage, enhance faces, restore colors, and repair imperfections — all in about 30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download restored photo",
      text: "Preview the AI restoration and download. 3 photos free, no signup required. Pro gives unlimited full-resolution downloads.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is AI photo restoration?", acceptedAnswer: { "@type": "Answer", text: "AI photo restoration uses artificial intelligence and neural networks to automatically repair and enhance old or damaged photographs. Unlike manual restoration that requires a skilled artist working hours per photo, AI can analyze damage patterns, reconstruct missing details, enhance faces, and restore colors in seconds." } },
    { "@type": "Question", name: "How does AI restore old photos?", acceptedAnswer: { "@type": "Answer", text: "AI photo restoration uses deep learning models trained on millions of images. The neural network learns what photos should look like, then applies that knowledge to identify and fix problems: removing scratches, filling torn areas, sharpening blurry faces, correcting faded colors, and even colorizing black and white photos." } },
    { "@type": "Question", name: "Is AI photo restoration as good as professional restoration?", acceptedAnswer: { "@type": "Answer", text: "For most photos, AI produces results comparable to professional restoration — often indistinguishable. AI excels at common issues: fading, scratches, blur, color correction. Professionals may still be better for severe damage requiring artistic judgment, like reconstructing large missing areas." } },
    { "@type": "Question", name: "Is AI photo restoration free?", acceptedAnswer: { "@type": "Answer", text: "Yes! Try 3 AI photo restorations completely free, no signup required. See your results instantly. Pro Lifetime ($4.99 one-time) unlocks unlimited restorations at full resolution forever." } },
    { "@type": "Question", name: "What types of damage can AI fix?", acceptedAnswer: { "@type": "Answer", text: "AI can fix: fading and color degradation, scratches and surface damage, small tears and creases, blur and low resolution, yellowing and age spots, water stains, and can colorize black and white photos. Limitations include large missing sections (over 30% of image) and severe chemical deterioration." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "3 free restorations, Pro Lifetime $4.99"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2500"
  }
};

export default function AIPhotoRestorationPage() {
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
      <section className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(139,92,246,0.06),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[14px] font-semibold text-violet-700 shadow-sm">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Powered by Neural Networks
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            <span className="text-violet-600">AI</span> Photo Restoration
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            Advanced artificial intelligence restores old, damaged photos in 30 seconds. Neural networks trained on millions of images — <strong className="text-[#1d1d1f]">now working for your memories</strong>.
          </p>

          {/* AI capabilities */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#6e6e73]">
            <span className="flex items-center gap-1.5">
              <span className="text-violet-600 font-bold">✓</span>
              Deep learning
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-violet-600 font-bold">✓</span>
              Face enhancement
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-violet-600 font-bold">✓</span>
              Auto colorization
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="mx-auto max-w-3xl px-5 py-6">
        <LiveActivity />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6e6e73]">
          {[
            { icon: "✓", text: "100,000+ AI restorations" },
            { icon: "✓", text: "4.8★ user rating" },
            { icon: "✓", text: "30-second processing" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5">
              <span className="text-violet-600 font-bold">{badge.icon}</span>
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

      {/* How AI Works */}
      <section className="border-t border-[#d2d2d7]/40 bg-gradient-to-br from-violet-50 to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Restores Your Photos
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Advanced neural networks analyze and repair damage automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-violet-100 shadow-sm text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">Damage Detection</h3>
              <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                Neural networks scan your photo and identify every type of damage: scratches, tears, fading, blur, color shifts, and noise.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-violet-100 shadow-sm text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">AI Reconstruction</h3>
              <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                Deep learning models trained on millions of images reconstruct damaged areas, enhance faces, and restore colors to their original vibrancy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-violet-100 shadow-sm text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">Quality Optimization</h3>
              <p className="text-[14px] text-[#6e6e73] leading-[1.6]">
                Final AI pass optimizes sharpness, contrast, and detail while maintaining natural appearance. No over-processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            What Our AI Can Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Face Enhancement",
                desc: "AI-powered GFPGAN technology specifically trained on facial features. Reconstructs blurry faces with remarkable detail.",
                badge: "Most Popular",
              },
              {
                icon: "🎨",
                title: "Auto Colorization",
                desc: "Neural networks trained on historical photos add realistic color to black and white images. Period-accurate results.",
                badge: "AI Exclusive",
              },
              {
                icon: "🔍",
                title: "Super Resolution",
                desc: "Real-ESRGAN upscales low-resolution photos up to 4x while adding genuine detail, not just blur.",
                badge: "HD Quality",
              },
              {
                icon: "✨",
                title: "Scratch Removal",
                desc: "AI identifies and removes scratches, dust, and surface damage while preserving underlying detail.",
                badge: "Automatic",
              },
              {
                icon: "🌅",
                title: "Color Restoration",
                desc: "Restores faded colors to their original vibrancy. Fixes yellowing, color shifts, and degradation.",
                badge: "Smart Fix",
              },
              {
                icon: "📐",
                title: "Crease & Tear Repair",
                desc: "Reconstructs torn and creased areas using context from surrounding image data.",
                badge: "AI Magic",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-xl p-6 border border-[#d2d2d7]/40 relative">
                {item.badge && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-violet-100 text-violet-700 text-[11px] font-semibold rounded-full">
                    {item.badge}
                  </span>
                )}
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs Traditional */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#f5f5f7] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            AI vs Traditional Restoration
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-violet-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                  <span className="text-violet-700 font-bold">AI</span>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f]">AI Restoration</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "30 seconds per photo",
                  "$4.99 for unlimited photos",
                  "Consistent quality every time",
                  "Available 24/7 instantly",
                  "No shipping originals",
                  "Trained on millions of photos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#6e6e73]">
                    <span className="text-violet-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">👤</span>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f]">Manual Restoration</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "1-2 weeks turnaround",
                  "$25-100+ per photo",
                  "Quality varies by artist",
                  "Business hours only",
                  "May require mailing photos",
                  "Better for severe damage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#6e6e73]">
                    <span className="text-gray-400 font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-5 bg-violet-50 border border-violet-200 rounded-xl">
            <p className="text-[14px] text-violet-900">
              <strong>Best approach:</strong> Start with AI restoration for most photos. It handles 90% of restoration needs excellently. Reserve professional services for severe damage requiring human artistic judgment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            AI Photo Restoration FAQ
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "What is AI photo restoration?",
                a: "AI photo restoration uses artificial intelligence and neural networks to automatically repair old or damaged photographs. Unlike manual restoration requiring skilled artists working hours per photo, AI analyzes damage patterns, reconstructs missing details, enhances faces, and restores colors in seconds.",
              },
              {
                q: "How does AI restore old photos?",
                a: "Deep learning models are trained on millions of images to learn what photos should look like. The neural network identifies problems (scratches, blur, fading) and fixes them by referencing its training data. Face enhancement uses specialized GFPGAN models; colorization uses models trained on historical color photos.",
              },
              {
                q: "Is AI as good as professional restoration?",
                a: "For most photos, AI produces results comparable to professional work — often indistinguishable. AI excels at common issues: fading, scratches, blur, color correction, face enhancement. Professionals may be better for severe damage requiring artistic reconstruction of large missing areas.",
              },
              {
                q: "What damage can AI fix?",
                a: "AI handles: fading and color degradation, scratches and surface damage, small tears and creases, blur and low resolution, yellowing and age spots, water stains. It can also colorize B&W photos. Limitations: large missing sections (over 30%), severe chemical deterioration.",
              },
              {
                q: "Is AI photo restoration free?",
                a: "Try 3 AI restorations completely free, no signup required. See your results instantly before committing. Pro Lifetime ($4.99 one-time) unlocks unlimited full-resolution restorations forever.",
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-violet-600 to-purple-600">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Let AI Restore Your Photos
          </h2>
          <p className="text-violet-100 text-[17px] mb-8 max-w-lg mx-auto">
            Neural networks trained on millions of images are ready to restore your memories. Try it free — see results in 30 seconds.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-violet-700 hover:bg-violet-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Try AI Restoration Free — Upload Now
          </Link>
          <p className="mt-4 text-violet-200 text-[13px]">
            3 free restorations · No signup · Powered by neural networks
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
              href="/restore-photos-online"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Restore Photos Online
              </h3>
              <p className="text-sm text-[#6b5344]">
                Web-based restoration in 30 seconds
              </p>
            </Link>

            <Link
              href="/best-photo-restoration-software"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Software Comparison
              </h3>
              <p className="text-sm text-[#6b5344]">
                Compare top restoration tools
              </p>
            </Link>

            <Link
              href="/restore-old-photos-free"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Free Photo Restoration
              </h3>
              <p className="text-sm text-[#6b5344]">
                Try 3 photos completely free
              </p>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/vintage-photo-restoration"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40"
            >
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">
                Vintage Photo Restoration
              </h3>
              <p className="text-sm text-[#6b5344]">
                Restore photos from any era
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
          </div>
        </div>
      </section>
    </div>
  );
}
