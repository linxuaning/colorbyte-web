---
title: "How to Restore Old Photos for Ancestry Websites"
description: "Step-by-step guide to restoring old photos for Ancestry, FamilySearch, and MyHeritage. File formats, size limits, EXIF metadata, and how AI restoration improves face recognition."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["ancestry photo restoration", "genealogy photo upload", "FamilySearch photos", "old photo restoration for family tree"]
image: "/images/blog/how-to-restore-old-photos-for-ancestry-websites.jpg"
coverColor: "#f5f0eb"
coverEmoji: "🌳"
faq:
  - question: "What file format and size should I use when uploading restored photos to Ancestry.com?"
    answer: "Ancestry.com accepts JPEG, PNG, GIF, BMP, and TIFF files for photo uploads to family trees and the Ancestry Photo section. JPEG is the recommended format for restored photographs: it produces smaller file sizes without visible quality loss at 90-95% quality settings, and it loads faster in Ancestry's photo viewer. The maximum file size per upload on Ancestry is 25MB for most account types, which is well above what a typical restored JPEG will occupy — a high-quality JPEG of a restored 4x6 print at 1200 DPI is usually 3-8MB. For display in Ancestry family trees, photos are resized to a maximum display width of approximately 1200-1600 pixels, but the full-resolution original is preserved and available for download by tree collaborators. Upload the full-resolution AI-restored output, not a screen-resolution version, so collaborators who download your images have the highest-quality version available. Avoid uploading TIFF files directly to Ancestry — they are technically supported but slow to load and not well handled by the Ancestry mobile app."
  - question: "How does AI photo restoration improve face recognition in genealogy databases?"
    answer: "Genealogy platforms including MyHeritage and Ancestry use face detection and recognition algorithms to suggest matches between photographs across different family trees and user accounts. These algorithms work by detecting facial landmark points — eye corners, nose bridge, jawline — and comparing them against a database of detected faces. Degraded photographs present a direct problem: low resolution, blur, noise, and damage artifacts all reduce the number of landmarks the face detection algorithm can locate reliably, producing false non-matches or failing to detect faces at all. AI restoration addresses each of these degradation modes. GFPGAN, the face restoration model in ArtImageHub's pipeline, specifically reconstructs facial detail — eyes, skin texture, hair edges — that face detection algorithms rely on. Real-ESRGAN upscaling increases pixel count in facial regions, giving the detection algorithm more information. In practical testing, AI-restored photographs consistently produce more face detection hits and higher match confidence scores than degraded originals. Restoring a portrait before uploading to MyHeritage's photo section is a direct improvement to genealogical matching effectiveness."
  - question: "What EXIF metadata should I embed in genealogy photos before uploading?"
    answer: "Embedding metadata before uploading photographs to genealogy platforms creates a permanent, machine-readable record of what the photograph documents. The most important fields to complete are: DateTimeOriginal (the estimated date the original photograph was taken, in YYYY:MM:DD format — use an approximate year if exact date is unknown, e.g., 1942:00:00); ImageDescription (free-text description including names of people pictured, relationship, location, and occasion); Artist or Copyright (the name of the photograph's owner or submitting family member); and GPSLatitude/GPSLongitude (approximate location if known — a town center coordinates is sufficient). For software, use ExifTool (free, command-line) or the metadata editor built into Adobe Bridge or Lightroom. Many genealogy platforms read ImageDescription and display it as the photo caption, saving you the step of re-entering caption text in the platform's web interface. Platforms vary in which EXIF fields they display: Ancestry shows description and date; FamilySearch shows all embedded fields in its photo detail view; MyHeritage parses date and description fields. Always embed before uploading — most platforms strip or ignore metadata added after upload."
  - question: "What resolution should restored photos be for genealogy platform display versus downloading?"
    answer: "Genealogy platforms display photos at screen resolution — typically 1200-1600 pixels wide in the photo viewer — but store and serve the original upload at full resolution. The two use cases have different requirements. For display quality, 1200x1600 pixels is the effective ceiling — anything above this is resized down for display and the extra pixels are invisible on screen. For download quality, research and printing, and future-proofing as platform display resolutions improve, upload the full AI-restored resolution. ArtImageHub's restoration output is typically 2x-4x the input pixel dimensions, so a 1200 DPI scan of a 4x6 print (2400x3600 input) may produce a 4800x7200 output after Real-ESRGAN upscaling. This 4800x7200 pixel file at 300 DPI prints as a 16x24 inch enlargement — far more useful for future use than a screen-resolution download. FamilySearch specifically recommends uploading the highest-resolution version available, citing long-term preservation as the rationale. Upload full resolution; let the platform handle display resizing."
  - question: "What are the privacy considerations for uploading restored family photos to genealogy websites?"
    answer: "The main privacy concern on genealogy platforms is photographs of living individuals. Ancestry, FamilySearch, and MyHeritage all have terms of service that permit uploading photos of living people to private family trees with controlled visibility, but public tree settings expose those photos to all platform users and, in some cases, to search engine indexing. Best practice for photos containing living individuals: set the relevant tree section to private, or tag the living individuals as living (Ancestry auto-hides living individuals' details from public view). For photographs containing only deceased individuals — which covers nearly all old photo restoration use cases — public tree settings are generally appropriate. Note that AI-restored photographs are significantly clearer than originals, which can make previously unidentifiable background individuals identifiable. If a restored group photo reveals faces that were not visible in the original, consider whether any of those individuals may still be living before publishing. Platform-specific note: MyHeritage's face recognition runs on all uploaded photos regardless of privacy setting; if you want to prevent face-matching on a photo, keep it in a private tree section."
---

> **Restore photos for your family tree**: [Old Photo Restoration](/old-photo-restoration) — $4.99 one-time, no subscription. Preview free before downloading.

Genealogy platforms have transformed how families document and share their history. Ancestry.com, FamilySearch, and MyHeritage now hold billions of photographs from family trees around the world, and their face recognition and matching tools connect photographs across different family branches that would never have been linked manually. AI photo restoration makes these tools significantly more effective — and it makes your family's photographic record dramatically more usable for future generations.

This guide covers the complete workflow for restoring old photographs specifically for genealogy platform use: preparation, restoration, metadata embedding, upload format requirements, and the face recognition benefits of uploading a restored rather than original image.

## Why Does Photo Quality Matter for Genealogy Platforms?

Genealogy platforms are no longer passive photo albums. Ancestry's ThruLines and MyHeritage's Theory of Relativity tools use photograph matching to suggest DNA connections and tree overlaps. FamilySearch's indexing volunteers use photograph quality to transcribe names and dates from documents and portraits. These algorithmic tools fail when photograph quality is too low for their underlying detection models.

The face recognition system that powers MyHeritage's Smart Matches and Ancestry's photo discoveries requires detectable faces to function. A blurry, faded, or scratched portrait that a human viewer recognizes immediately as a face may register zero detected faces in an automated system — making it invisible to matching algorithms and generating no family connection suggestions.

AI restoration changes this. Running a damaged portrait through [ArtImageHub's Old Photo Restoration](https://artimagehub.com/old-photo-restoration) — which uses GFPGAN for face detail reconstruction and Real-ESRGAN for overall upscaling — produces an image that face detection algorithms can process reliably. The same photograph that generated zero face matches as a damaged original may generate multiple high-confidence matches after restoration.

## What Are the File Requirements for Each Major Platform?

Each genealogy platform has different technical specifications. Uploading the wrong format or an oversized file wastes effort.

**Ancestry.com:**
- Accepted formats: JPEG, PNG, GIF, BMP, TIFF
- Maximum file size: 25MB per image
- Recommended: JPEG at 90-95% quality
- Display resolution: resized to approximately 1200-1600px wide for viewer
- Storage: full-resolution original preserved

**FamilySearch:**
- Accepted formats: JPEG, PNG, GIF, TIFF, PDF (for document scans)
- Maximum file size: 15MB for photos, 30MB for documents
- Recommended: JPEG for restored photographs, TIFF for document preservation
- FamilySearch actively encourages highest-resolution uploads for preservation

**MyHeritage:**
- Accepted formats: JPEG, PNG, GIF, BMP
- Maximum file size: 10MB per image (standard accounts)
- Note: MyHeritage does not accept TIFF directly — convert to high-quality JPEG first
- Face recognition runs on all uploaded photos, regardless of privacy setting

**Findmypast:**
- Accepted formats: JPEG, PNG
- Maximum file size: 10MB
- Primarily used for document images, not portraits

For all platforms, upload the full-resolution restored output from ArtImageHub rather than a downsized version. Platforms resize for display but preserve originals — giving collaborators access to full-resolution downloads.

## How Should You Embed Metadata Before Uploading?

Metadata embedded in the image file creates a permanent, platform-independent record of what the photograph documents. When you upload to a genealogy platform, that embedded data pre-fills caption and date fields, saving re-entry time and ensuring the information survives if the photograph is downloaded and uploaded elsewhere.

**Key EXIF fields to complete before uploading:**

- **DateTimeOriginal:** The date the original photograph was taken. Use YYYY:MM:DD format. If only the year is known, use 1945:00:00. If approximate, use the midpoint of the estimated range.
- **ImageDescription:** Free-text caption including full names of all identified individuals, their relationship (e.g., "maternal grandmother"), location, and occasion. This is the field most platforms display as the photo caption.
- **Artist:** Name of the photograph's owner or submitting family member — useful for tracking source when the photo circulates across trees.
- **UserComment:** Additional notes that do not fit in ImageDescription — photographer name if known, negative number, source archive.
- **GPSLatitude/GPSLongitude:** Approximate coordinates of where the photograph was taken. A town center is sufficient — precision to the meter is unnecessary and potentially a privacy concern for living individuals' addresses.

**Software for metadata embedding:**
- **ExifTool** (free, cross-platform command-line): the most capable option, supports batch processing
- **Adobe Bridge** (free with Creative Cloud membership): graphical interface for ExifTool-compatible fields
- **DigiKam** (free, open source): full-featured photo manager with EXIF editing

Embed metadata after restoration but before upload. Some platforms strip metadata on upload; embedding ensures the information exists in your local archive copy regardless.

## What Is the Right Restoration Workflow for Genealogy Uploads?

The optimal workflow sequences tools in a specific order that maximizes the value of each processing step.

**Step 1: Scan correctly.** Scan prints at 600 DPI minimum; small prints (wallet size, cabinet cards) at 1200 DPI; negatives at 4800 DPI. Save as TIFF.

**Step 2: Remove compression artifacts if needed.** If your source is a JPEG (downloaded from another platform, scanned to JPEG, or photographed with a smartphone), run it through a denoising pass first to remove JPEG blocking artifacts before restoration.

**Step 3: Restore.** Upload to [Old Photo Restoration](https://artimagehub.com/old-photo-restoration). The tool applies Real-ESRGAN upscaling and NAFNet denoising automatically. Preview the result for free, then download the full-resolution output for $4.99 (one-time, covers all ArtImageHub tools).

**Step 4: Face enhancement if needed.** For portraits where face detail is the primary concern — an ancestor portrait you want to identify or match — run through [Photo Enhancer](https://artimagehub.com/photo-enhancer), which applies an additional GFPGAN face restoration pass optimized for clarity.

**Step 5: Embed metadata.** Add EXIF fields using ExifTool or DigiKam before upload.

**Step 6: Upload.** Upload the metadata-embedded, full-resolution JPEG to your genealogy platform(s).

## How Does Restoration Affect Face Recognition Matching Results?

The improvement in face recognition match rates from AI restoration is not subtle. Face detection algorithms require a minimum number of detectable facial landmarks — typically 68 specific points on the face — to generate a usable face descriptor for matching. Degraded photographs frequently fall below this threshold.

GFPGAN, the face restoration model in ArtImageHub's pipeline, was specifically designed to reconstruct the fine facial features — eye corners, nose tip, lip edges, chin contour — that landmark detection algorithms rely on. By reconstructing these features from damaged or low-resolution source images, GFPGAN effectively converts a photograph that was below the detection threshold into one that generates complete landmark sets.

In practical genealogy use, the impact appears most clearly in:
- **Group portraits:** Individual faces in a group photo are small relative to the frame. Upscaling and face restoration make each face large enough for reliable detection.
- **Formal studio portraits:** These benefit most from GFPGAN specifically because the faces are the primary subject and damage is visible in the exact regions the algorithm needs.
- **Document portraits:** Immigration papers, military ID photos, and school yearbook photographs are small by design. Upscaling these before upload dramatically improves match rates.

## What Are the Privacy Considerations for Genealogy Photo Uploads?

Old photograph restoration creates a new consideration that does not apply to uploading unrestored originals: restored photographs are significantly clearer and more identifiable than their damaged predecessors.

A group photograph that was too blurry to identify background individuals may, after AI restoration, clearly show faces that can be identified. Before uploading a restored group photograph to a public tree, consider whether any of those newly visible background individuals might be living — in which case, public posting without consent may not be appropriate.

For photographs of deceased individuals only (which covers the vast majority of old photograph restoration use cases), public tree settings are appropriate on all major platforms. The genealogical research exception in most privacy frameworks covers research, archival, and family documentation use of historical images.

Platform-specific note: MyHeritage's face recognition runs on all uploaded photographs regardless of the privacy setting of the containing tree section. If you want to prevent face-matching on a specific photograph for privacy reasons, do not upload it to MyHeritage at all.

The standard advice applies: when in doubt about a living individual's privacy preferences, keep the photograph in a private tree section and ask before making it public.

Your ancestors left you these photographs as a record of their lives. Restoring and properly documenting them at [artimagehub.com](https://artimagehub.com) before adding them to your family tree is the highest-quality contribution you can make to the genealogical record.
