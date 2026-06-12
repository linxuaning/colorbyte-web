import type { Metadata } from "next";
import OccasionRestorationLanding from "@/components/OccasionRestorationLanding";

const path = "/genealogy-photo-restoration";

export const metadata: Metadata = {
  title: "Genealogy Photo Restoration | Restore Ancestor Photos Online",
  description:
    "Restore genealogy and ancestor photos with AI. Pay $4.99 once, repair fading, scratches, and faces, then download the original-quality result.",
  alternates: { canonical: path },
  keywords: [
    "genealogy photo restoration",
    "restore ancestor photos",
    "family tree photo restoration",
    "restore genealogy pictures",
    "old ancestor photo repair",
    "restore heritage photos",
  ],
  openGraph: {
    title: "Genealogy Photo Restoration Online",
    description:
      "Restore ancestor photos for family trees and heritage projects with a $4.99 pay-first unlock.",
    type: "website",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Genealogy photo restoration before and after" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Genealogy Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  url: `https://artimagehub.com${path}`,
  offers: { "@type": "Offer", price: "4.99", priceCurrency: "USD" },
};

export default function GenealogyPhotoRestorationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OccasionRestorationLanding
        config={{
          badge: "Genealogy Photo Restoration",
          title: "Restore Ancestor Photos for Genealogy",
          description:
            "Clean up faded ancestor portraits, family tree photos, and inherited archive scans. Pay $4.99 once to unlock upload, AI restoration, and original-quality download.",
          proof: ["Built for family archives", "Email-tied access", "No annual genealogy bundle"],
          whyTitle: "Why Genealogy Photos Need Different Priorities",
          whyItems: [
            { title: "Identity preservation", body: "Ancestor photos need clearer faces without changing likeness, expression, or historical character." },
            { title: "Archive workflow", body: "Use restored files in family trees, printed books, reunion boards, and shared family folders." },
            { title: "Low project cost", body: "A $4.99 unlock fits a finite genealogy batch better than annual genealogy subscriptions." },
            { title: "Scan-friendly", body: "Works with cabinet cards, tintypes, early paper prints, and modern scans of old albums." },
          ],
          damageTitle: "Genealogy Photo Damage AI Can Improve",
          damageItems: [
            { label: "Faded portraits", body: "Bring back facial contrast and clothing detail in old ancestor photos." },
            { label: "Foxing spots", body: "Reduce brown age spots and paper stains common in archive prints." },
            { label: "Creases", body: "Clean fold lines and handling marks from photos stored in boxes." },
            { label: "Low resolution", body: "Upscale small scans for clearer family tree profiles and prints." },
          ],
          workflowTitle: "How to Restore an Ancestor Photo",
          workflowItems: [
            { title: "Unlock access", body: "Pay $4.99 first so upload, processing, and download are available on your email." },
            { title: "Scan carefully", body: "Use 600 DPI or higher, scan in color mode, and avoid aggressive scanner sharpening." },
            { title: "Save and document", body: "Download the restored file and keep the original scan for your genealogy records." },
          ],
          faq: [
            { q: "Is this a replacement for MyHeritage photo tools?", a: "It is a focused restoration alternative when you only need photo repair. ArtImageHub is $4.99 pay-first access, not an annual genealogy subscription." },
            { q: "Can AI restore very old 1800s ancestor photos?", a: "Yes, if enough image detail remains. Severe missing sections still have limits, but faded faces, spots, scratches, and soft detail often improve substantially." },
            { q: "Do I get a free genealogy photo preview?", a: "No. ArtImageHub follows a pay-first model: checkout first, then upload, process, and download through the paid email." },
          ],
          related: [
            { href: "/restore-old-family-photos", title: "Family Photo Restoration", body: "Restore inherited family albums and old portraits." },
            { href: "/artimagehub-vs-myheritage", title: "ArtImageHub vs MyHeritage", body: "Compare one-time restoration with genealogy subscriptions." },
            { href: "/restore-old-photos-without-photoshop", title: "Without Photoshop", body: "Restore archive photos without manual retouching skills." },
          ],
        }}
      />
    </>
  );
}
