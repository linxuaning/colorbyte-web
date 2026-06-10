import type { Metadata } from "next";
import OccasionRestorationLanding from "@/components/OccasionRestorationLanding";

const path = "/memorial-photo-restoration";

export const metadata: Metadata = {
  title: "Memorial Photo Restoration | Restore Photos for Tributes",
  description:
    "Restore memorial photos for tributes, services, and keepsake prints. $4.99 pay-first AI restoration with original-quality download.",
  alternates: { canonical: path },
  keywords: [
    "memorial photo restoration",
    "restore photo for memorial",
    "funeral photo restoration",
    "tribute photo restoration",
    "restore obituary photo",
    "restore photo for funeral program",
  ],
  openGraph: {
    title: "Memorial Photo Restoration Online",
    description:
      "Restore tribute and memorial photos online with a $4.99 pay-first unlock and original-quality download.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Memorial photo restoration before and after" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Memorial Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  url: `https://artimagehub.com${path}`,
  offers: { "@type": "Offer", price: "4.99", priceCurrency: "USD" },
};

export default function MemorialPhotoRestorationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OccasionRestorationLanding
        config={{
          badge: "Memorial Photo Restoration",
          title: "Restore Photos for Memorial Tributes",
          description:
            "Prepare a clearer portrait for a memorial service, obituary, keepsake frame, or family tribute. Pay $4.99 once, then upload for AI restoration and original-quality download.",
          proof: ["Fast online workflow", "Original-quality download", "No subscription"],
          whyTitle: "When a Memorial Photo Needs to Be Clear",
          whyItems: [
            { title: "Tribute displays", body: "Use a restored image for service programs, slideshow covers, framed tables, or printed remembrance cards." },
            { title: "Gentle correction", body: "Improve clarity and remove damage without making the person look different." },
            { title: "Short deadline", body: "AI restoration is built for urgent online turnaround when mail-in services are too slow." },
            { title: "One-time need", body: "A memorial image is usually a finite project, so a $4.99 one-time unlock fits better than a subscription." },
          ],
          damageTitle: "Memorial Photo Issues AI Can Improve",
          damageItems: [
            { label: "Blurred faces", body: "Clarify soft portraits for printing and display." },
            { label: "Scratches", body: "Remove marks across faces, clothing, and backgrounds." },
            { label: "Fading", body: "Recover contrast and reduce washed-out color or yellowing." },
            { label: "Small files", body: "Upscale older scans so they hold up better in programs and frames." },
          ],
          workflowTitle: "How to Restore a Memorial Photo",
          workflowItems: [
            { title: "Unlock before upload", body: "Complete the $4.99 checkout first. Paid access is required before processing." },
            { title: "Use the clearest source", body: "Upload the best scan or digital copy you have, ideally without filters or compression." },
            { title: "Download for printing", body: "Save the original-quality restored file for tribute materials and family sharing." },
          ],
          faq: [
            { q: "Can this restore a photo for an obituary or funeral program?", a: "Yes. Use the clearest source image available, then download the restored original-quality file for your designer, printer, or family organizer." },
            { q: "Will the restoration change the person's face?", a: "The restoration aims to clarify the original image while preserving likeness. Extremely damaged or tiny photos have natural limits." },
            { q: "Can I inspect the output first?", a: "No. ArtImageHub is pay-first: one $4.99 payment unlocks upload, AI processing, and original-quality download." },
          ],
          related: [
            { href: "/restore-old-family-photos", title: "Family Photos", body: "Restore portraits and inherited family photos." },
            { href: "/fix-blurry-photos", title: "Fix Blurry Photos", body: "Improve soft or low-detail portraits." },
            { href: "/photo-restoration-service", title: "Restoration Service", body: "Compare online AI restoration with traditional services." },
          ],
        }}
      />
    </>
  );
}
