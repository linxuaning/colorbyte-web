---
title: "How to Improve Scanned Photo Quality: Fix Scanner Artifacts the Right Way"
description: "Scanner dust, JPEG compression, moire patterns, color shift — learn what causes each problem and the exact AI workflow to fix them. A practical guide for anyone digitizing a family photo archive."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Thomas Reid"
authorRole: "Document Digitization Specialist"
authorBio: "Thomas Reid has spent fifteen years working in document preservation and digitization for libraries, archives, and private collectors. He has personally overseen the scanning and restoration of more than 40,000 historic photographs."
category: "How-To"
tags: ["Scanned Photos", "Scanner", "Photo Restoration", "Digitization", "Photo Quality"]
image: "/blog/restore-old-photos.webp"
coverColor: "from-stone-500 via-neutral-600 to-zinc-700"
coverEmoji: "🖥️"
featured: false
faq:
  - q: "Why do my scanned photos look worse than the originals?"
    a: "Scanned photos often look worse than the physical originals for several compounding reasons. First, a scanner's lamp ages over time, shifting toward yellow or blue tones that were not present in the original print. Second, most scanner software applies JPEG compression by default, introducing blocky artifacts that were not in the physical photo. Third, any dust or lint on the scanner glass gets magnified and rendered as sharp smudges because the scanner's optical system is focused precisely on the glass surface. Finally, when scanning printed photos from books or magazines, the halftone dot pattern of the original printing interacts with the scanner's sampling grid to create moire — repeating wave-like interference patterns. Understanding which problem you are dealing with determines whether the fix is mechanical (cleaning the glass), setting-based (switching to TIFF output), or post-processing (AI artifact removal)."
  - q: "What DPI should I scan old photos at for best quality?"
    a: "For standard print-sized photos (4x6 or 5x7 inches), 600 DPI is the practical minimum for preservation-quality output. At 600 DPI a typical 4x6 photo scans at roughly 2400x3600 pixels — enough resolution for an AI enhancement tool to work with and enough for high-quality large-format printing later. Scanning at 1200 DPI doubles the file size but is worth it for small originals (wallet photos, photobooth strips) or images with fine detail you want to recover. 2400 DPI and above is generally only necessary for film negatives, slides, or miniature formats. Scanning at 300 DPI — the scanner default on many consumer models — is sufficient for web sharing but will limit what AI enhancement can recover, since the model needs pixel data to reconstruct from."
  - q: "How do I remove moire patterns from scanned photos?"
    a: "Moire patterns appear when scanning photos that were originally printed using halftone dots — newspapers, magazines, and some older photobooks all use this printing process. The dots and the scanner's sampling frequency interfere with each other, creating ripple-like patterns across the image. There are two approaches. The first is scanner-side: most flatbed scanners have a 'descreening' or 'descreen' option in their driver software; enabling it applies a mild blur before sampling to break up the halftone pattern. The second is post-processing: after scanning, running the image through ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover) and [denoiser](/photo-denoiser) in sequence effectively suppresses moire because the neural network distinguishes real photographic detail from repetitive interference patterns. For severe moire, slightly rotating the original on the glass before scanning (by 5–10 degrees) can also shift the interference frequency enough to reduce its visibility."
  - q: "Can AI really fix scanner artifacts, or do I need Photoshop?"
    a: "AI tools in 2026 handle the most common scanner artifacts — JPEG blocking, grain, soft focus from a dirty lens, and color cast — faster and with less manual work than Photoshop for the vast majority of photos. Where Photoshop still wins is on unusual or structural damage: a large physical tear that the scanner rendered as a hard white line across a face, or a section of the photo that is so overexposed by scanner lamp reflection that there is literally no pixel data to recover from. For those cases, a skilled retoucher using Photoshop's content-aware tools will produce better results than any automated pipeline. For typical digitization problems — compression artifacts, scanner grain, fading, and soft focus — the ArtImageHub workflow of [JPEG artifact removal](/jpeg-artifact-remover) followed by [denoising](/photo-denoiser) and [old photo restoration](/old-photo-restoration) consistently outperforms manual work in terms of time-to-result and consistency across a large batch."
  - q: "Should I save scanned photos as JPEG or TIFF?"
    a: "Save the raw scan as TIFF. JPEG compression is lossy — every time a JPEG is saved, it discards pixel information it considers redundant, and those discarded details cannot be recovered. A TIFF file from a 600 DPI scan of a 4x6 photo will be roughly 40–60 MB, compared to 2–5 MB for a JPEG at the same resolution, but the quality difference in fine texture and color gradients is significant when you later apply AI enhancement. Think of the TIFF as your archival master file — you scan once, save as TIFF, then create JPEG or PNG derivatives from it as needed. If your scanner only offers JPEG output (common on cheaper all-in-one printers), set the JPEG quality to the maximum available setting (usually labeled 'Fine' or 'Best' rather than a percentage), which minimizes — but does not eliminate — the compression artifacts."
---

> **Tools referenced in this guide**: [Photo Denoiser](/photo-denoiser) · [Photo Deblurrer](/photo-deblurrer) · [JPEG Artifact Remover](/jpeg-artifact-remover) · [Photo Enhancer](/photo-enhancer) · [Old Photo Restoration](/old-photo-restoration) · [Photo Colorizer](/photo-colorizer)

> **Quick path**: If your scanned photos have compression artifacts, grain, or fading, the [ArtImageHub](/photo-enhancer) pipeline — JPEG artifact removal → denoising → restoration — costs $4.99 one-time, processes in under 90 seconds, and requires no photo editing experience.

Scanning old photos feels like it should be simple: place the photo on the glass, press the button, done. In practice, the output often looks disappointingly flat, grainy, or marked with strange lines and patterns that were never in the original print.

Most of these problems have predictable causes — and most of them are fixable, either by adjusting how you scan or by running the output through the right AI tools in the right order. This guide covers both.

## What Are the Most Common Scanning Quality Problems?

### Scanner Dust and Scratches

The scanner's glass surface is optically focused — meaning any particle sitting on it is in perfect, razor-sharp focus. A single hair or speck of dust that is invisible to the naked eye will render as a crisp bright line or blob across your photo. This is different from physical damage on the photo itself: the artifact is on the glass, not the original, so cleaning the glass removes it completely before scanning. If you discover it after the fact, ArtImageHub's [photo denoiser](/photo-denoiser) can suppress many small dust artifacts, though large bright streaks may require the [old photo restoration](/old-photo-restoration) tool which is better equipped to reconstruct missing or overexposed regions.

### JPEG Compression from Scanner Software

Most flatbed scanner software defaults to JPEG output, and many compress aggressively. JPEG compression works by grouping the image into 8x8 pixel blocks and discarding fine detail it judges unnecessary. On a photo of a face, this creates the familiar "blockiness" around transitions — especially visible in skin tones and sky gradients. The fix on the front end is switching your scanner output to TIFF. If the scan is already compressed, ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover) uses SwinIR to detect and suppress the block grid pattern while preserving underlying photographic detail.

### Color Shift from Scanner Lamp Aging

Scanner lamps age with use. As a lamp ages, its color temperature shifts — typically toward yellow or green tones. A scan made with a well-used lamp can show a distinct color cast across the entire image that was not present in the physical print. This is different from fading in the original photo: an aged lamp creates a uniform shift while fading from photo chemistry tends to cluster in specific tones (yellowing shadows, faded highlights). Running the output through [old photo restoration](/old-photo-restoration) handles both issues, since the model is trained on color-degraded photos and has learned to distinguish original tonality from lamp-induced drift.

### Moire Patterns from Halftone Originals

Moire is the interference pattern that appears when you scan a photo that was printed using halftone dots — newspapers, magazines, photobooks, and some older commercial prints all use this technique. The scanner's sampling grid and the print's dot grid interact to create repeating wave-like patterns across the image. Enable the "descreening" option in your scanner's software before scanning halftone originals. If the scan is already done, the [JPEG artifact remover](/jpeg-artifact-remover) followed by the [denoiser](/photo-denoiser) can suppress the pattern because neural networks distinguish repetitive interference from real photographic texture.

### Scanner Glass Dirt as Smudges

Unlike sharp dust particles, smudges from fingerprints or oily residue scatter light before it reaches the optical sensor. The result is a soft, cloudy area rather than a sharp line. Prevention is the right approach: wipe the glass with a microfiber cloth and a drop of lens cleaner before each session. If you already have smudge artifacts in a scan, the [photo deblurrer](/photo-deblurrer) can recover some sharpness in mildly affected areas, though the soft-light effect of a large smudge can exceed what any AI enhancement can recover cleanly.

## How Do Scanner Resolution Settings Affect Final Quality?

DPI (dots per inch) controls how much of the original photo's physical detail the scanner captures.

| DPI | Use Case | File Size (4x6 photo) |
|---|---|---|
| 300 | Web sharing only | ~2–4 MB JPEG |
| 600 | Standard preservation | ~40–60 MB TIFF |
| 1200 | Small originals, fine detail | ~150–200 MB TIFF |
| 2400+ | Film negatives, slides | 500 MB+ TIFF |

At 300 DPI, AI enhancement tools have limited source data to reconstruct from — the model cannot invent detail that was never captured. At 600 DPI, every tool in the ArtImageHub pipeline has enough pixel information to work effectively. Beyond 1200 DPI for standard prints, the law of diminishing returns applies: you are capturing grain in the paper rather than additional photographic detail.

## What Is the Step-by-Step AI Enhancement Workflow for Scanned Photos?

The order of operations matters. Applying tools in the wrong sequence can amplify artifacts rather than suppress them.

**Step 1 — Remove JPEG Artifacts First**

If your scan has any JPEG compression in it (even at high quality), start with [JPEG artifact removal](/jpeg-artifact-remover). SwinIR's block-suppression model works best on unmodified compressed input — other enhancement tools applied first can reshape the block patterns in ways that make them harder to detect.

**Step 2 — Denoise**

After artifacts are removed, run [photo denoising](/photo-denoiser). NAFNet's denoising model targets random pixel noise — scanner grain, film grain transferred during scanning, and sensor noise from consumer scanner hardware. Denoising after artifact removal means the model is not mistaking JPEG blocks for genuine noise.

**Step 3 — Old Photo Restoration**

Run [old photo restoration](/old-photo-restoration) to address structural damage: scratches on the original print, fading, missing emulsion, and color cast. At this stage the image is clean enough that the restoration model can focus on genuine photo damage rather than scanning artifacts.

**Step 4 — Upscale if Needed**

If you need a larger print from a smaller original, the [photo enhancer](/photo-enhancer) applies Real-ESRGAN upscaling with detail synthesis. Upscaling last — after all cleanup is done — prevents the upscaler from magnifying any residual artifacts.

**Optional — Colorize**

For black-and-white originals, add a [colorization](/photo-colorizer) step using DDColor after restoration is complete. Colorizing on a clean, restored image produces significantly more accurate results than colorizing a noisy or artifact-heavy scan.

## How Can You Prevent Scanner Problems Before They Happen?

Prevention eliminates most scanner artifact problems entirely:

- **Clean the glass before every session.** Use a microfiber cloth and lens cleaner, not paper towels (which scratch glass over time).
- **Set output format to TIFF.** This single change eliminates compression artifact problems entirely.
- **Use the highest quality setting your scanner offers.** Even when forced to use JPEG, setting quality to maximum significantly reduces block artifacts.
- **Enable descreening for halftone originals.** Any photo originally from a book, newspaper, or magazine needs this setting.
- **Let the scanner warm up.** Cold lamps have slightly different color output. Running a blank scan before your first photo takes 30 seconds and avoids a color shift on the first image in a batch.
- **Handle originals by the edges.** Fingerprints on the photo surface transfer to the glass and back to the photo during scanning.

A clean scan is always easier to work with than a problematic one — but if you are working from existing scans, the four-step AI workflow above addresses the most common problems systematically.
