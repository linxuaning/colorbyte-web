import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import DeblurClient from "./deblur-client";

export const metadata: Metadata = {
  title: "Unblur Image Online Free: AI Photo Deblurrer — Fix Blurry Photos in 30 Seconds",
  description:
    "Fix blurry, out-of-focus, and motion-blurred photos with AI. NAFNet deblurring model recovers sharp details from blurry portraits, wedding photos, and old pictures. $4.99 one-time, no subscription.",
  keywords: [
    "unblur image",
    "fix blurry photo",
    "photo deblurrer",
    "sharpen blurry photo AI",
    "remove motion blur",
    "fix out of focus photo",
    "unblur photo online",
    "image sharpening AI",
    "deblur photo online free",
    "AI photo sharpener",
  ],
  openGraph: {
    title: "AI Photo Deblurrer — Fix Blurry Photos in 30 Seconds",
    description:
      "Recover sharp details from blurry, out-of-focus, or motion-blurred photos using NAFNet AI. $4.99 one-time — no subscription, no app install.",
    url: "https://artimagehub.com/photo-deblurrer",
    type: "website",
  },
  alternates: { canonical: "https://artimagehub.com/photo-deblurrer" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "ArtImageHub Photo Deblurrer",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web Browser",
      url: "https://artimagehub.com/photo-deblurrer",
      description:
        "AI-powered photo deblurrer using NAFNet (GoPro model). Fixes motion blur, defocus blur, and camera shake in 30–60 seconds. $4.99 one-time payment.",
      offers: {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
      },
      featureList: [
        "Motion blur removal",
        "Defocus/out-of-focus correction",
        "Camera shake fix",
        "NAFNet AI model (GoPro benchmark)",
        "30–60 second processing",
        "Full-resolution HD download",
        "No subscription required",
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Fix a Blurry Photo with AI",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Pay once to unlock",
          text: "Complete a one-time $4.99 payment to unlock the Photo Deblurrer. No subscription needed.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Upload your blurry photo",
          text: "Return with the same email and upload your JPG, PNG, or WEBP photo (up to 20 MB).",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "AI sharpens the photo",
          text: "NAFNet analyzes the blur type and restores sharp detail in 30–60 seconds.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Download the sharp result",
          text: "Download your sharp photo in full resolution with no watermark.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI really fix a blurry photo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — for moderate blur. AI deblurring models like NAFNet learn from thousands of blurry/sharp image pairs and recover edge sharpness, fine texture, and face detail. Best results on motion blur and mild defocus. Severely blurry photos (where over 50% of detail is lost) are improved but not fully restored.",
          },
        },
        {
          "@type": "Question",
          name: "What types of blur can it fix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Motion blur (camera or subject movement), mild defocus/out-of-focus, camera shake blur, and general softness. The NAFNet GoPro model is specifically trained on real motion blur scenarios. It does not fix extreme blur where original detail is completely gone.",
          },
        },
        {
          "@type": "Question",
          name: "How long does photo deblurring take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "30–60 seconds per photo depending on image size and server load.",
          },
        },
        {
          "@type": "Question",
          name: "Is it different from just sharpening in Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Photoshop's Unsharp Mask and Smart Sharpen enhance edge contrast, which creates the appearance of sharpness but doesn't recover lost detail and introduces halos. AI deblurring reconstructs the missing high-frequency information from learned patterns, producing genuine detail recovery rather than just contrast enhancement.",
          },
        },
        {
          "@type": "Question",
          name: "Does this cost a monthly subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Photo Deblurrer is $4.99 one-time — separate from other ArtImageHub tools. One payment gives unlimited access to deblurring with no recurring charges.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://artimagehub.com" },
        { "@type": "ListItem", position: 2, name: "Photo Deblurrer", item: "https://artimagehub.com/photo-deblurrer" },
      ],
    },
  ],
};

export default function PhotoDeblurrerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {/* Hero */}
        <section className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-1.5 text-[13px] font-medium text-[#6e6e73]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]" />
            AI Photo Deblurrer · NAFNet · $4.99 one-time
          </div>
          <h1 className="text-[40px] font-bold tracking-[-0.04em] text-[#1d1d1f] sm:text-[52px]">
            Fix Blurry Photos{" "}
            <span className="text-[#0071e3]">with AI</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-[1.65] text-[#6e6e73]">
            Restore sharp detail from motion-blurred, out-of-focus, or camera-shake photos in 30–60 seconds.
            NAFNet AI model. $4.99 one-time — no subscription, no app install.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[13px] text-[#6e6e73]">
            {[
              "Motion blur",
              "Defocus / out-of-focus",
              "Camera shake",
              "30–60 sec results",
              "No subscription",
            ].map((f) => (
              <span key={f} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-[#34c759]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* Tool */}
        <Suspense fallback={<div className="mt-10 h-64 animate-pulse rounded-2xl bg-[#f5f5f7]" />}>
          <DeblurClient />
        </Suspense>

        {/* What it fixes */}
        <section className="mt-20">
          <h2 className="text-center text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            What Blur Types Does It Fix?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Motion Blur",
                desc: "Fast-moving subjects or camera shake during exposure. Common in sports, kids, pets, and handheld low-light shooting.",
              },
              {
                title: "Defocus / Out-of-Focus",
                desc: "Subject outside the focal plane — shallow depth-of-field misses, or autofocus locking on the wrong area.",
              },
              {
                title: "General Softness",
                desc: "Overall lack of sharpness from low megapixel count, excessive in-camera processing, or JPEG over-compression.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#d2d2d7]/40 bg-[#f5f5f7] p-6">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6e6e73]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works technically */}
        <section className="mt-20 rounded-2xl border border-[#d2d2d7]/40 bg-[#f5f5f7] p-10">
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            How AI Deblurring Works
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-[#6e6e73]">
            Traditional sharpening (Photoshop Unsharp Mask, Lightroom Clarity) increases edge contrast but
            doesn&apos;t recover lost high-frequency detail. It creates halos and an artificial &quot;over-sharpened&quot; look.
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#6e6e73]">
            ArtImageHub uses{" "}
            <strong className="text-[#1d1d1f]">NAFNet</strong> (Nonlinear Activation Free Network, ECCV 2022 —
            the same model family used for denoising). The deblurring variant was trained on the{" "}
            <strong className="text-[#1d1d1f]">GoPro dataset</strong> — real motion-blurred photos captured at high
            frame rates, paired with the sharp originals. This means the model has learned what real blur looks like
            and how to reverse it, rather than relying on manual filter rules.
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#6e6e73]">
            The result is genuine detail reconstruction: recovered hair strands, readable text, and clear faces
            where blur had softened everything to mush.
          </p>
        </section>

        {/* Comparison */}
        <section className="mt-20">
          <h2 className="text-center text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            How Does It Compare?
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-[#d2d2d7]/40">
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Tool</th>
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Cost</th>
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Works on JPEG?</th>
                  <th className="py-3 text-left font-semibold text-[#1d1d1f]">Platform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ArtImageHub Deblurrer", "$4.99 one-time", "Yes", "Browser"],
                  ["Topaz Sharpen AI", "$99/year", "Yes (best on RAW)", "Desktop"],
                  ["Lightroom AI Sharpen", "$9.99/month", "Limited", "Desktop"],
                  ["Adobe Photoshop", "$22.99/month", "Manual filters only", "Desktop"],
                  ["Unblur Image (free tools)", "Free", "Limited quality", "Browser"],
                ].map(([tool, price, jpeg, platform]) => (
                  <tr key={tool} className="border-b border-[#d2d2d7]/20">
                    <td className={`py-3 pr-4 font-medium ${tool.startsWith("ArtImage") ? "text-[#0071e3]" : "text-[#1d1d1f]"}`}>{tool}</td>
                    <td className="py-3 pr-4 text-[#6e6e73]">{price}</td>
                    <td className="py-3 pr-4 text-[#6e6e73]">{jpeg}</td>
                    <td className="py-3 text-[#6e6e73]">{platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-center text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-5">
            {[
              {
                q: "Can AI really fix a blurry photo?",
                a: "Yes — for moderate blur. AI deblurring models like NAFNet recover edge sharpness and fine texture from blurry images. Best results on motion blur and mild defocus. Severely blurry photos (over 50% detail lost) are improved but not fully restored.",
              },
              {
                q: "Is it different from Photoshop's Unsharp Mask?",
                a: "Significantly different. Photoshop's Unsharp Mask enhances edge contrast to create the appearance of sharpness — it doesn't recover lost information and often introduces halos. NAFNet reconstructs missing high-frequency detail from learned patterns across thousands of real blur examples.",
              },
              {
                q: "What types of blur does it fix?",
                a: "Motion blur from subject or camera movement, mild defocus/out-of-focus, camera shake, and general softness. It does not fix extreme blur where the original detail is completely gone.",
              },
              {
                q: "How long does it take?",
                a: "30–60 seconds per photo depending on image size and server load.",
              },
              {
                q: "Is there a subscription?",
                a: "No. The Photo Deblurrer is $4.99 one-time — separate from other ArtImageHub tools. One payment gives unlimited access to deblurring with no recurring charges.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#d2d2d7]/40 bg-[#f5f5f7] p-6">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f]">{item.q}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#6e6e73]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-20 rounded-2xl bg-[#f5f5f7] p-8 text-center">
          <p className="text-[15px] font-semibold text-[#1d1d1f]">Other AI Photo Tools</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {[
              { href: "/old-photo-restoration", label: "Old Photo Restoration" },
              { href: "/photo-colorizer", label: "Photo Colorizer" },
              { href: "/photo-enhancer", label: "Photo Enhancer" },
              { href: "/photo-denoiser", label: "Photo Denoiser" },
              { href: "/jpeg-artifact-remover", label: "JPEG Artifact Remover" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[#d2d2d7]/60 bg-white px-4 py-2 text-[13px] text-[#1d1d1f] hover:border-[#0071e3]/40 hover:text-[#0071e3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
