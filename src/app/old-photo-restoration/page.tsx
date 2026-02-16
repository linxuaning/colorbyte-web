import type { Metadata } from "next";
import RestoreClient from "./restore-client";

export const metadata: Metadata = {
  title:
    "Old Photo Restoration Online Free | AI Restore Photos in Seconds",
  description:
    "Restore old, damaged, or faded photos instantly with AI. Fix scratches, enhance faces, and bring your memories back to life. Free online tool, no signup.",
  alternates: {
    canonical: "/old-photo-restoration",
  },
  openGraph: {
    title: "Old Photo Restoration Online Free",
    description:
      "Restore old photos instantly with AI. Free online tool, no signup required.",
    type: "website",
  },
};

export default function OldPhotoRestorationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          AI Photo Restoration — Restore Old Photos Online Free
        </h1>
        <p className="mt-3 text-muted-foreground">
          Upload your old photo and let AI restore it in seconds. Face
          enhancement, super resolution, and colorization. Free 720p download.
        </p>
      </div>
      <RestoreClient />
    </div>
  );
}
