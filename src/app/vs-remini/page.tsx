import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ArtImageHub vs Remini: Full Photo Restore vs Face-Only Enhancement (2026)",
  description:
    "Honest head-to-head: ArtImageHub restores the whole old photo (scratches, fading, torn corners), Remini focuses on sharpening faces. One-time $4.99 vs monthly subscription. Pick the right tool for your photos.",
  alternates: { canonical: "/vs-remini" },
  openGraph: {
    title: "ArtImageHub vs Remini — Full Photo Restore Compared (2026)",
    description:
      "Whole-photo restoration vs face-only enhancement. Pricing, quality, workflow, and which tool fits your old family photos.",
    type: "article",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "ArtImageHub vs Remini — old photo restoration comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtImageHub vs Remini (2026)",
    description: "Photo restoration comparison for real buyers — scratches, fading, full-photo repair.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ArtImageHub better than Remini for old photo restoration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For old family photos with scratches, fading, tears, or water damage, ArtImageHub usually produces stronger whole-photo results because its pipeline repairs the entire image, not just faces. Remini is designed primarily around face sharpening on mobile, so portraits tend to come out crisp but the rest of the photo (torn corners, stains, chemical fading) is often left as-is.",
      },
    },
    {
      "@type": "Question",
      name: "Which one is cheaper over time: ArtImageHub or Remini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ArtImageHub uses a one-time $4.99 unlock for original-quality downloads — no renewal. Remini is subscription-based (monthly or yearly plans); the exact amount varies by region and promotion, but across 12 or 36 months the cumulative cost is substantially higher than a single $4.99 payment. If you only need to restore a batch of family photos once, one-time wins on total cost.",
      },
    },
    {
      "@type": "Question",
      name: "Does ArtImageHub work on mobile like Remini does?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ArtImageHub is a web tool, so it runs in any browser on phone, tablet, or desktop — no app install. Remini is primarily an app. If you prefer a no-install workflow on a desktop with a larger screen, ArtImageHub is more convenient. If you shoot and fix directly on your phone, Remini's app may feel more native.",
      },
    },
    {
      "@type": "Question",
      name: "Can Remini restore scratches and torn corners like ArtImageHub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remini's models are primarily trained on face enhancement and upscaling — not on inpainting physical damage like scratches, creases, or torn edges. ArtImageHub's pipeline is built for whole-photo restoration, so it addresses scratches, fading, discoloration, blur, and water damage as part of the same pass. For heavily damaged old prints, this difference is significant.",
      },
    },
    {
      "@type": "Question",
      name: "What about quality — do the AI models produce similar results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On portraits where the face is the dominant subject and the rest of the photo is intact, both tools can produce sharp faces. Remini often goes slightly more aggressive on facial detail, which some users love and others find overly smoothed. ArtImageHub aims for more natural skin texture and preserves the rest of the photo (backgrounds, clothing, objects) in parallel. On photos with heavy damage elsewhere, ArtImageHub's whole-image approach typically wins on perceived realism.",
      },
    },
    {
      "@type": "Question",
      name: "How should I compare both tools fairly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the same source photo for both and evaluate four things: (1) face detail recovery, (2) background and non-face content fidelity, (3) artifact control — does it invent details that weren't there?, and (4) total cost for your actual use. ArtImageHub uses one-time pay-first access ($4.99) for the full-quality download; Remini uses a subscription. Running both on the same photo is the fastest way to see which output matches your expectations.",
      },
    },
    {
      "@type": "Question",
      name: "Who should choose Remini over ArtImageHub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose Remini if your primary use case is selfie and modern portrait enhancement on a phone, especially if you already have a Remini subscription or prefer an always-on mobile app. Remini's face sharpening on clean modern photos is its strongest play.",
      },
    },
    {
      "@type": "Question",
      name: "Who should choose ArtImageHub over Remini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose ArtImageHub if you're restoring old family photos with physical damage (scratches, fading, water stains, torn corners), if you want a one-time payment instead of a recurring subscription, or if you prefer working on a desktop browser with a larger screen when handling precious irreplaceable prints.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ArtImageHub vs Remini (2026): Full Photo Restore vs Face-Only Enhancement",
  description:
    "Honest comparison of ArtImageHub and Remini for old photo restoration — quality, pricing, workflow, and use case fit.",
  datePublished: "2026-03-04",
  dateModified: "2026-04-23",
  author: { "@type": "Organization", name: "ArtImageHub" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://artimagehub.com/vs-remini" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://artimagehub.com/" },
    { "@type": "ListItem", position: 2, name: "ArtImageHub vs Remini", item: "https://artimagehub.com/vs-remini" },
  ],
};


export default function VsReminiPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-4xl px-5 py-14">
        {/* Hero */}
        <h1 className="text-4xl font-bold text-[#2c2416]">ArtImageHub vs Remini (2026)</h1>
        <p className="mt-4 text-[#6b5344] text-lg">
          Remini is great at sharpening faces. ArtImageHub restores the whole photo — scratches, fading, torn
          corners, water damage, and faces in one pass. This comparison is for people who want honest guidance
          on which tool fits which kind of photo, and how the pricing actually works out over time.
        </p>

        {/* TL;DR box */}
        <section className="mt-8 rounded-2xl border border-[#d4bc91]/60 bg-white p-6">
          <h2 className="text-xl font-semibold text-[#2c2416]">Two-line verdict</h2>
          <p className="mt-3 text-[#6b5344]">
            <strong className="text-[#2c2416]">Old, damaged family photos:</strong> ArtImageHub. One-time $4.99,
            whole-photo restoration including scratches and fading.
          </p>
          <p className="mt-2 text-[#6b5344]">
            <strong className="text-[#2c2416]">Modern selfies and portraits on mobile:</strong> Remini. App-native,
            strong face detail, subscription model.
          </p>
        </section>

        {/* Best Fit + CTA */}
        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Who this page is for</h2>
          <p className="mt-3 text-[#6b5344]">
            You found a box of family photos in a closet or an attic. Some are yellowed, some have creases, one
            has a visible scratch across your grandmother's face. You want the best tool to bring these photos
            back — not just to sharpen the faces, but to repair the whole image so you can print and share them.
            You're also tired of adding another monthly subscription to your life.
          </p>
          <p className="mt-3 text-[#6b5344]">
            If that's you, ArtImageHub is built for exactly this job. The one-time $4.99 unlocks full upload,
            AI restoration, and original-quality HD download — covered permanently, not per-month.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/old-photo-restoration?landing_page=%2Fvs-remini&cta_slot=hero_try_tool_first&entry_variant=comparison_page"
              className="inline-flex items-center rounded-full bg-[#8B5E3C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6f4a2e]"
            >
              Start restoring your photos
            </Link>
            <Link
              href="/subscription?landing_page=%2Fvs-remini&cta_slot=hero_pay_first&entry_variant=comparison_page&checkout_source=comparison_direct"
              className="inline-flex items-center rounded-full border border-[#d4bc91] bg-white px-5 py-2.5 text-sm font-semibold text-[#2c2416] hover:bg-[#f8f1e6]"
            >
              Unlock lifetime access ($4.99 one-time)
            </Link>
          </div>
        </section>

        {/* Side-by-side comparison */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Side-by-side at a glance</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#d4bc91]/40 bg-white">
            <table className="w-full text-sm text-[#2c2416]">
              <thead className="bg-[#f8f1e6]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                  <th className="px-4 py-3 text-left font-semibold">ArtImageHub</th>
                  <th className="px-4 py-3 text-left font-semibold">Remini</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d4bc91]/30">
                <tr>
                  <td className="px-4 py-3 font-medium">Primary focus</td>
                  <td className="px-4 py-3">Whole-photo restoration — faces, backgrounds, damage</td>
                  <td className="px-4 py-3">Face sharpening and portrait enhancement</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Scratches and tears</td>
                  <td className="px-4 py-3">Repaired automatically in the same pass</td>
                  <td className="px-4 py-3">Not a core feature — usually left in place</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Fading / discoloration</td>
                  <td className="px-4 py-3">Color correction across the full image</td>
                  <td className="px-4 py-3">Limited — face-local adjustments only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Pricing</td>
                  <td className="px-4 py-3">$4.99 one-time, lifetime unlock</td>
                  <td className="px-4 py-3">Subscription (monthly or yearly)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Platform</td>
                  <td className="px-4 py-3">Web — any browser, any device</td>
                  <td className="px-4 py-3">Primarily mobile app (iOS / Android)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Upload workflow</td>
                  <td className="px-4 py-3">Pay $4.99, upload, HD download</td>
                  <td className="px-4 py-3">Install app, subscribe, process on device</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Typical output size</td>
                  <td className="px-4 py-3">Original resolution preserved (HD download)</td>
                  <td className="px-4 py-3">App output sized for mobile viewing / sharing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Privacy</td>
                  <td className="px-4 py-3">Uploads deleted within 24 hours, not used for training</td>
                  <td className="px-4 py-3">App-based terms — consult Remini's policy</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Best use case</td>
                  <td className="px-4 py-3">Old family albums, heirlooms, damaged prints</td>
                  <td className="px-4 py-3">Modern portraits and selfies on mobile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What ArtImageHub does differently */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c2416]">What ArtImageHub does differently</h2>
          <p className="mt-3 text-[#6b5344]">
            The core technical difference is scope. Remini's pipeline is built around face detection and face
            super-resolution — the models were trained to produce sharp, identity-preserving faces and they do
            that well. When you hand Remini a photo that's mostly about a face, the result can be striking.
          </p>
          <p className="mt-3 text-[#6b5344]">
            ArtImageHub's pipeline treats the whole photo as the canvas to restore. Scratches and creases are
            detected and inpainted. Faded chemical dyes are color-corrected. Water stains and mold are softened.
            Faces are enhanced in a separate pass so they still come out sharp, but the background, clothing,
            furniture, and everything else in the image gets the same restoration attention. For a
            fifty-year-old wedding photo or a great-grandparent's portrait, this produces a more complete result
            because the whole image is what makes the memory — not just the face in the middle.
          </p>
          <p className="mt-3 text-[#6b5344]">
            A practical way to see this: pick a photo with a visible scratch that crosses both a face and the
            background. Run it through both tools. Remini will typically sharpen the face but leave the scratch
            visible on the background. ArtImageHub aims to remove the scratch from both the face and the
            background in a single pass.
          </p>
        </section>

        {/* What Remini does well */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#2c2416]">What Remini does well — honestly</h2>
          <p className="mt-3 text-[#6b5344]">
            Remini earned its popularity because its face enhancement is genuinely strong. On a recent selfie
            or a portrait where the rest of the photo is already in good condition, Remini's output is often
            immediately impressive. The mobile app workflow is tight: shoot, enhance, share. If your photos are
            born on your phone and live on your phone, that flow matters.
          </p>
          <p className="mt-3 text-[#6b5344]">
            Remini's subscription model also means you can process a lot of photos for the price of the
            subscription window. For someone enhancing dozens of modern portraits per month, that works out
            fine. The tradeoff is that the subscription keeps running whether you use it heavily or not.
          </p>
        </section>

        {/* Pricing deep dive */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Pricing: total cost over 12 and 36 months</h2>
          <p className="mt-3 text-[#6b5344]">
            This is where most real buyers make the decision. Subscription pricing looks small per month and
            adds up over time; one-time pricing looks bigger per purchase and then stops.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#d4bc91]/40 bg-white">
            <table className="w-full text-sm text-[#2c2416]">
              <thead className="bg-[#f8f1e6]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Horizon</th>
                  <th className="px-4 py-3 text-left font-semibold">ArtImageHub</th>
                  <th className="px-4 py-3 text-left font-semibold">Remini (typical subscription)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d4bc91]/30">
                <tr>
                  <td className="px-4 py-3 font-medium">Initial payment</td>
                  <td className="px-4 py-3">$4.99 one-time</td>
                  <td className="px-4 py-3">Monthly plan kicks in after any free trial</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">12 months</td>
                  <td className="px-4 py-3">$4.99 total</td>
                  <td className="px-4 py-3">Roughly 12× the monthly rate (check the current rate in the app)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">36 months</td>
                  <td className="px-4 py-3">$4.99 total</td>
                  <td className="px-4 py-3">Roughly 36× the monthly rate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">If you stop using it</td>
                  <td className="px-4 py-3">Lifetime access stays, nothing to cancel</td>
                  <td className="px-4 py-3">Must cancel to stop billing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#6b5344]">
            We deliberately don't publish Remini's exact rate because it changes with promotions and regions.
            Check the current rate in the Remini app and do the math for your horizon — that's the honest
            comparison.
          </p>
        </section>

        {/* Use case walkthroughs */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Use case walkthroughs</h2>

          <div className="mt-4 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
            <h3 className="text-lg font-semibold text-[#2c2416]">1. Restoring a 1940s wedding photo with a scratch</h3>
            <p className="mt-2 text-[#6b5344]">
              The photo has yellowed, there's a creased diagonal scratch, and the bride's face is soft from the
              original camera. ArtImageHub handles all three problems together: the yellowing is color-corrected,
              the scratch is inpainted on face and background, and the face is enhanced. Remini can sharpen the
              bride's face well but typically leaves the scratch and the yellowing on the dress and background.
              ArtImageHub is the better fit here.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
            <h3 className="text-lg font-semibold text-[#2c2416]">2. A recent phone selfie that's slightly blurry</h3>
            <p className="mt-2 text-[#6b5344]">
              No physical damage, just a moving subject and low light. Remini is tuned for this exact case. If
              your day-to-day is modern portraits on your phone, Remini's mobile workflow is faster. ArtImageHub's
              Photo Enhancer can also handle this, but the time-to-result gap narrows for clean modern photos.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
            <h3 className="text-lg font-semibold text-[#2c2416]">3. A water-damaged group photo from the 1970s</h3>
            <p className="mt-2 text-[#6b5344]">
              Six people in the image, irregular water stains across multiple faces, and the print has some mold
              spots. ArtImageHub's whole-image pipeline addresses the stains and spots across every face and the
              background. A face-only approach leaves the non-face stains visible. For this restoration job,
              ArtImageHub is the stronger choice.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
            <h3 className="text-lg font-semibold text-[#2c2416]">4. A black-and-white portrait you want in color</h3>
            <p className="mt-2 text-[#6b5344]">
              Colorization is a separate job from damage repair. ArtImageHub has a dedicated <Link href="/photo-colorizer?landing_page=%2Fvs-remini&cta_slot=usecase_colorize&entry_variant=comparison_page" className="text-[#8B5E3C] underline">Photo Colorizer</Link> that
              handles this. If your photo also has damage, run restoration first, then colorization. Remini
              doesn't focus on colorization as its primary play.
            </p>
          </div>
        </section>

        {/* Speed and workflow */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Speed and workflow differences</h2>
          <p className="mt-3 text-[#6b5344]">
            ArtImageHub's typical restore time is 30 to 90 seconds per photo from upload to download. The web
            interface works identically on desktop and mobile browsers, so you can scan a batch of photos on a
            desktop scanner and process them on the same machine. The workflow is: pay once, upload, process,
            download — no install, no subscription management.
          </p>
          <p className="mt-3 text-[#6b5344]">
            Remini's mobile-first workflow is strong if your photos already live on your phone. If you're
            working from scanned prints on a desktop, the app friction is higher — you need to transfer photos
            to the phone, then process, then transfer back.
          </p>
        </section>

        {/* Download rights */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Output quality and download rights</h2>
          <p className="mt-3 text-[#6b5344]">
            ArtImageHub preserves the original resolution of your upload and provides an HD download of the
            restored output — no watermark, no resolution cap. The restored file is yours to print, share, or
            archive. Uploads are deleted from our servers within 24 hours and are never used for training.
          </p>
          <p className="mt-3 text-[#6b5344]">
            Remini's output quality and export rights depend on your current plan and the app's terms of
            service. Check the app directly for what tier you're on.
          </p>
        </section>

        {/* Expanded FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-[#d4bc91]/40 bg-white p-5">
              <summary className="cursor-pointer text-[16px] font-semibold text-[#2c2416]">
                Which tool handles scratches and torn corners better?
              </summary>
              <p className="mt-3 text-sm text-[#6b5344]">
                ArtImageHub. Its pipeline is built to inpaint physical damage across the full image. Remini's
                models are tuned for face detail and usually leave scratches and torn edges in place.
              </p>
            </details>
            <details className="rounded-xl border border-[#d4bc91]/40 bg-white p-5">
              <summary className="cursor-pointer text-[16px] font-semibold text-[#2c2416]">
                Can I use ArtImageHub on my phone?
              </summary>
              <p className="mt-3 text-sm text-[#6b5344]">
                Yes. ArtImageHub is a web app, so it runs in any mobile browser without an install. Large scanned
                photos may be easier to handle on a desktop browser with a bigger preview, but mobile works end
                to end.
              </p>
            </details>
            <details className="rounded-xl border border-[#d4bc91]/40 bg-white p-5">
              <summary className="cursor-pointer text-[16px] font-semibold text-[#2c2416]">
                Does ArtImageHub have a free trial like Remini?
              </summary>
              <p className="mt-3 text-sm text-[#6b5344]">
                For old photo restoration, ArtImageHub uses one-time pay-first access — $4.99 unlocks upload,
                processing, and HD download. There isn't a free trial on the restoration flow. Our colorizer
                and enhancer tools offer a free preview if you want to see the AI output quality first on a
                different type of photo before purchasing.
              </p>
            </details>
            <details className="rounded-xl border border-[#d4bc91]/40 bg-white p-5">
              <summary className="cursor-pointer text-[16px] font-semibold text-[#2c2416]">
                What if I'm not happy with the result?
              </summary>
              <p className="mt-3 text-sm text-[#6b5344]">
                Reach out to our support email and we'll work with you. The $4.99 is designed to give access to
                the full-quality output so you can evaluate on your actual photos.
              </p>
            </details>
            <details className="rounded-xl border border-[#d4bc91]/40 bg-white p-5">
              <summary className="cursor-pointer text-[16px] font-semibold text-[#2c2416]">
                Can I use both tools together?
              </summary>
              <p className="mt-3 text-sm text-[#6b5344]">
                Sure. If you have a photo where the face needs very aggressive sharpening beyond what
                ArtImageHub's natural-skin preference provides, some users run ArtImageHub first for damage
                repair, then export and pass the face portion through Remini for extra face crispness. This is
                a niche workflow; most photos don't need both.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 rounded-2xl border border-[#d4bc91]/60 bg-[#f8f1e6] p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">If your photos have damage, start here</h2>
          <p className="mt-3 text-[#6b5344]">
            One-time $4.99 unlocks upload, AI restoration, and HD download. No subscription, no resolution cap,
            no watermark. Restoration typically finishes in under two minutes per photo.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/old-photo-restoration?landing_page=%2Fvs-remini&cta_slot=footer_try_tool_first&entry_variant=comparison_page"
              className="inline-flex items-center rounded-full bg-[#8B5E3C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6f4a2e]"
            >
              Start your restoration
            </Link>
            <Link
              href="/subscription?landing_page=%2Fvs-remini&cta_slot=footer_pay_first&entry_variant=comparison_page&checkout_source=comparison_direct"
              className="inline-flex items-center rounded-full border border-[#d4bc91] bg-white px-5 py-2.5 text-sm font-semibold text-[#2c2416] hover:bg-[#f8f1e6]"
            >
              Unlock lifetime access ($4.99)
            </Link>
          </div>
        </section>

        {/* Related tools */}
        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Related tools</h2>
          <ul className="mt-4 list-disc pl-6 text-[#6b5344] space-y-2">
            <li><Link href="/old-photo-restoration?landing_page=%2Fvs-remini&cta_slot=related_tools&entry_variant=comparison_page" className="text-[#8B5E3C] underline">Old Photo Restoration</Link> — the main restoration tool.</li>
            <li><Link href="/photo-enhancer?landing_page=%2Fvs-remini&cta_slot=related_tools&entry_variant=comparison_page" className="text-[#8B5E3C] underline">AI Photo Enhancer</Link> — sharpen and upscale clean modern photos.</li>
            <li><Link href="/photo-colorizer?landing_page=%2Fvs-remini&cta_slot=related_tools&entry_variant=comparison_page" className="text-[#8B5E3C] underline">Photo Colorizer</Link> — add realistic color to black-and-white originals.</li>
            <li><Link href="/vs-photoshop-restoration" className="text-[#8B5E3C] underline">ArtImageHub vs Photoshop restoration</Link> — if you're comparing against a manual editor instead.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
