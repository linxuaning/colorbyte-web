import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';
import FloatingCTA from '@/components/FloatingCTA';
import LiveActivity from '@/components/LiveActivity';

export const metadata: Metadata = {
  title: 'Fix Blurry Photos Online Free | AI Photo Deblur in Seconds',
  description: 'Fix blurry photos instantly with AI. Sharpen out-of-focus images, enhance faces, remove motion blur. Free online tool - no signup, results in 30 seconds.',
  keywords: [
    'fix blurry photos',
    'fix blurry pictures',
    'unblur photo online',
    'sharpen blurry image',
    'fix out of focus photo',
    'deblur photo free',
    'remove blur from photo',
    'fix motion blur',
    'sharpen old photos',
    'fix blurry face in photo'
  ],
  alternates: { canonical: '/fix-blurry-photos' },
  openGraph: {
    title: 'Fix Blurry Photos Online Free | AI Photo Sharpening',
    description: 'Fix blurry photos instantly with AI. Free online tool - results in 30 seconds.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Before and after fixing blurry photo' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix Blurry Photos Online Free',
    description: 'Sharpen blurry images with AI. Free, no signup required.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Fix Blurry Photos Online",
  description: "Fix blurry, out-of-focus, or motion-blurred photos using AI enhancement — free, no signup required, results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Enhancement" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your blurry photo",
      text: "Click the upload area and select your blurry photo. Supports JPG, PNG, WEBP up to 20MB. Works with any type of blur.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI fixes the blur",
      text: "Our AI analyzes and corrects blur patterns — including motion blur, out-of-focus blur, and camera shake. Processing takes 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download your sharp photo",
      text: "Preview before/after comparison and download your sharpened photo. 3 photos free, no signup required.",
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Photo Deblur Tool",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "3 free fixes, Pro Lifetime $29.9"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    ratingCount: "1856"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can AI really fix blurry photos?", acceptedAnswer: { "@type": "Answer", text: "Yes! Modern AI can fix many types of blur including slight out-of-focus, camera shake, and motion blur. AI works best on photos with moderate blur where some detail is preserved. Extremely blurry photos (severe motion blur or completely out of focus) may have limited improvement." } },
    { "@type": "Question", name: "What types of blur can be fixed?", acceptedAnswer: { "@type": "Answer", text: "AI can fix: 1) Out-of-focus blur - when the camera focused on the wrong area, 2) Camera shake - slight blur from unsteady hands, 3) Motion blur - blur from moving subjects, 4) Low-light blur - softness from slow shutter speeds. Results vary based on blur severity." } },
    { "@type": "Question", name: "Is there a free way to fix blurry photos?", acceptedAnswer: { "@type": "Answer", text: "Yes! ArtImageHub offers 3 free photo fixes with no signup required. Free users get 720p output. Pro Lifetime ($29.9 one-time) gives unlimited fixes at full resolution." } },
    { "@type": "Question", name: "Will fixing blur make my photo look fake?", acceptedAnswer: { "@type": "Answer", text: "Good AI enhancement preserves natural appearance while adding sharpness. Our AI is trained to avoid over-sharpening artifacts. Always compare before/after to ensure you're happy with the result." } },
    { "@type": "Question", name: "Can I fix blurry faces in photos?", acceptedAnswer: { "@type": "Answer", text: "Yes! Face enhancement is one of our AI's strongest features. It can sharpen blurry faces, restore facial detail, and enhance eyes and features while maintaining natural appearance." } },
  ],
};

export default function FixBlurryPhotosPage() {
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
      <section className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(79,70,229,0.08),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:py-18 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-[14px] font-semibold text-indigo-700 shadow-sm">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI-Powered Blur Fix
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.08] text-[#1d1d1f]">
            Fix Blurry Photos <span className="text-indigo-600">Instantly</span>
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-xl mx-auto">
            Upload your blurry photo and let AI sharpen it in 30 seconds. Fix out-of-focus shots, motion blur, and soft images — <strong className="text-[#1d1d1f]">free to try</strong>.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#6e6e73]">
            <span className="flex items-center gap-1.5">
              <span className="text-indigo-600 font-bold">✓</span>
              Works on any blur type
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-indigo-600 font-bold">✓</span>
              No signup required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-indigo-600 font-bold">✓</span>
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
            { icon: "✓", text: "50,000+ photos fixed" },
            { icon: "✓", text: "4.8★ satisfaction" },
            { icon: "✓", text: "AI face enhancement" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5">
              <span className="text-indigo-600 font-bold">{badge.icon}</span>
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

      {/* Types of Blur Section */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              What Types of Blur Can AI Fix?
            </h2>
            <p className="mt-3 text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
              Our AI handles the most common types of photo blur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Out-of-Focus",
                desc: "When your camera focused on the wrong area. AI reconstructs sharp detail from soft edges.",
                quality: "Great results",
              },
              {
                icon: "📱",
                title: "Camera Shake",
                desc: "Slight blur from unsteady hands. Very common in phone photos and low light.",
                quality: "Excellent results",
              },
              {
                icon: "🏃",
                title: "Motion Blur",
                desc: "Blur from moving subjects (kids, pets, sports). AI can partially recover detail.",
                quality: "Good results",
              },
              {
                icon: "🌙",
                title: "Low-Light Blur",
                desc: "Softness from slow shutter speeds in dark conditions. Combined with noise reduction.",
                quality: "Good results",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-[#d2d2d7]/60 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-[1.6] mb-3">{item.desc}</p>
                <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-700 text-[12px] font-medium rounded-full">
                  {item.quality}
                </span>
              </div>
            ))}
          </div>

          {/* Honesty note */}
          <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-[14px] text-amber-900">
              <strong>🔍 Realistic expectations:</strong> AI can significantly improve moderately blurry photos but can't perform miracles on extremely blurry images. The best results come from photos where some detail is still visible. Try your photo free to see what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              How AI Fixes Blurry Photos
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload your photo",
                desc: "Select your blurry photo. Our AI accepts any image format up to 20MB.",
              },
              {
                step: "2",
                title: "AI analyzes & sharpens",
                desc: "AI identifies blur patterns and reconstructs sharp detail. Special attention to faces.",
              },
              {
                step: "3",
                title: "Download the result",
                desc: "Compare before/after and download. Free users get 3 photos at 720p resolution.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-[18px]">
                  {item.step}
                </div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] text-center mb-12">
            Fixing Blurry Photos: FAQ
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "Can AI really fix blurry photos?",
                a: "Yes! Modern AI can fix many types of blur including slight out-of-focus, camera shake, and motion blur. AI works best on photos with moderate blur where some detail is preserved. Extremely blurry photos may have limited improvement — but it's free to try.",
              },
              {
                q: "What types of blur work best?",
                a: "Best results: camera shake, slight out-of-focus. Good results: motion blur, low-light blur. Limited results: severe motion blur, completely out-of-focus. The AI can enhance faces even in moderately blurry photos.",
              },
              {
                q: "Can I fix blurry faces in photos?",
                a: "Yes! Face enhancement is one of our AI's strongest features. It can sharpen blurry faces, restore facial detail, and enhance eyes and features while maintaining natural appearance.",
              },
              {
                q: "Is fixing blurry photos free?",
                a: "Yes! ArtImageHub offers 3 free photo fixes with no signup required. Free users get 720p output. For unlimited fixes at full resolution, Pro Lifetime is $29.9 one-time (not a subscription).",
              },
              {
                q: "Will the fixed photo look fake or over-processed?",
                a: "Good AI enhancement preserves natural appearance. Our AI is trained to avoid over-sharpening artifacts and halos. You can compare before/after to ensure you're happy before downloading.",
              },
              {
                q: "How long does it take to fix a blurry photo?",
                a: "Most photos are processed in 15-30 seconds. Complex images with multiple faces or severe blur may take up to 60 seconds.",
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">
            Ready to Fix Your Blurry Photos?
          </h2>
          <p className="text-indigo-100 text-[17px] mb-8 max-w-lg mx-auto">
            Upload your photo and see the AI magic in 30 seconds. No signup, no credit card — just sharp results.
          </p>
          <Link
            href="#upload"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[17px] font-bold text-indigo-700 hover:bg-indigo-50 active:scale-[0.98] transition-all shadow-xl"
          >
            Fix Your Photo Free — Try Now
          </Link>
          <p className="mt-4 text-indigo-200 text-[13px]">
            3 free photos · No signup · Results in 30 seconds
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
            <Link href="/ai-photo-fixer" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40">
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">AI Photo Fixer</h3>
              <p className="text-sm text-[#6b5344]">AI-powered photo repair</p>
            </Link>
            <Link href="/damaged-photo-repair" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-[#d2d2d7]/40">
              <h3 className="font-semibold text-lg text-[#2c2416] mb-2">Damaged Photo Repair</h3>
              <p className="text-sm text-[#6b5344]">Fix scratches, tears, and damage</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
