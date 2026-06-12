import type { Metadata } from "next";
import OccasionRestorationLanding from "@/components/OccasionRestorationLanding";

const path = "/restore-old-wedding-photos";

export const metadata: Metadata = {
  title: "Restore Old Wedding Photos Online | AI Wedding Photo Restoration",
  description:
    "Restore old wedding photos with AI. Fix fading, scratches, blur, and yellowing after a $4.99 pay-first unlock. Original-quality download included.",
  alternates: { canonical: path },
  keywords: [
    "restore old wedding photos",
    "wedding photo restoration",
    "restore faded wedding photos",
    "repair old wedding pictures",
    "vintage wedding photo restoration",
    "fix damaged wedding photos",
  ],
  openGraph: {
    title: "Restore Old Wedding Photos Online",
    description:
      "AI restoration for faded, scratched, and damaged wedding photos. $4.99 pay-first unlock, no subscription.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Wedding photo restoration before and after" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Wedding Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  url: `https://artimagehub.com${path}`,
  offers: { "@type": "Offer", price: "4.99", priceCurrency: "USD" },
};

export default function RestoreOldWeddingPhotosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OccasionRestorationLanding
        config={{
          badge: "Wedding Photo Restoration",
          title: "Restore Old Wedding Photos",
          description:
            "Bring back faded wedding portraits, anniversary prints, and heirloom ceremony photos. Pay $4.99 once, then upload for AI restoration and original-quality download.",
          proof: ["Pay-first access", "Fixes fading and scratches", "No subscription"],
          whyTitle: "Why Wedding Photos Deserve a Focused Restoration Pass",
          whyItems: [
            { title: "Irreplaceable moments", body: "Wedding photos often become the central image for anniversaries, family albums, and memorial displays." },
            { title: "Faces matter", body: "AI face enhancement clarifies eyes, smiles, and soft portrait detail while preserving the original appearance." },
            { title: "Print-ready output", body: "Original-quality download is suitable for family prints, frames, and keepsake books." },
            { title: "Fast turnaround", body: "Skip mailing a fragile print away. Scan or photograph it, then restore online after checkout." },
          ],
          damageTitle: "Common Wedding Photo Problems AI Can Repair",
          damageItems: [
            { label: "Faded colors", body: "Recover washed-out dresses, suits, flowers, and warm indoor lighting." },
            { label: "Yellowing", body: "Reduce age-related paper discoloration and restore neutral whites." },
            { label: "Scratches", body: "Clean surface marks across faces, clothing, and backgrounds." },
            { label: "Soft focus", body: "Sharpen faces and improve clarity for old portrait prints." },
          ],
          workflowTitle: "How to Restore a Wedding Photo",
          workflowItems: [
            { title: "Pay once", body: "Complete the $4.99 checkout first. This unlocks upload and processing on your email." },
            { title: "Upload the best scan", body: "Scan at 600 DPI if possible, or photograph the print in even light." },
            { title: "Download the result", body: "AI restores the image, then your paid email unlocks the original-quality download." },
          ],
          faq: [
            { q: "Do I need to pay before uploading the wedding photo?", a: "Yes. ArtImageHub is pay-first: $4.99 unlocks upload, AI processing, and original-quality download. There is no preview-before-payment step." },
            { q: "Can AI restore a black and white wedding photo?", a: "Yes. Restoration can clean damage and sharpen detail. If you also want color, use the colorization option after restoration." },
            { q: "Will the restored photo look like a modern selfie?", a: "No. The goal is to clarify the original wedding photo, not change the couple's appearance or make the image look artificial." },
          ],
          related: [
            { href: "/restore-old-family-photos", title: "Family Photos", body: "Restore grandparents, parents, and family archive photos." },
            { href: "/restore-faded-photos", title: "Faded Photos", body: "Recover washed-out colors and yellowed prints." },
            { href: "/remove-scratches-from-photos", title: "Scratch Repair", body: "Clean scratches and surface damage from old prints." },
          ],
        }}
      />
    </>
  );
}
