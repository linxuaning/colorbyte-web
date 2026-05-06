---
title: "How to Improve Scanned Document Photo Quality: Fix Blur, Noise, and Artifacts"
description: "Step-by-step guide to fixing blurry scanned photos of documents — passports, ID cards, birth certificates, and historical records. Covers flatbed scanner artifacts, phone camera scan issues, Moire patterns, and old document degradation."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Viktor Chen"
authorRole: "Portrait and Commercial Photographer"
authorBio: "Viktor photographs commercial portraits and headshots for professionals and tests AI enhancement tools for practical business applications. He's helped hundreds of clients improve existing photos for LinkedIn, press kits, and marketing materials."
category: "How-To"
tags: ["Scanned Photos", "Document Photo", "JPEG Artifacts", "Photo Denoiser", "Photo Enhancer", "Scan Quality"]
image: "/blog/improve-scanned-document-photo-quality.jpg"
coverColor: "from-slate-700 via-gray-700 to-zinc-800"
coverEmoji: "🗂️"
faq:
  - question: "What is the best way to improve a scanned photo of a document?"
    answer: "The workflow depends on how the scan was made. For phone camera scans (the most common source of quality loss), start with JPEG Artifact Remover to undo the compression the scanning app applied, then run Photo Deblurrer if the phone was handheld and there is visible motion blur, then Photo Denoiser to clean up sensor noise, and finally Photo Enhancer if the resolution is still insufficient. For older documents — passports, birth certificates, historical records — run Old Photo Restoration first, which handles yellowing, foxing, and brown age spots as a single pass, then follow with Photo Denoiser and Photo Enhancer if needed. The key rule: always treat the scanning artifact before treating the document degradation. Layering AI tools in the wrong order amplifies the artifact instead of removing it. A final note: AI tools improve visual quality but do not perform OCR — they cannot make illegible text readable if the underlying scan resolution was too low."
  - question: "Why do phone camera scans look worse than flatbed scanner scans?"
    answer: "Flatbed scanners use a CCD (charge-coupled device) sensor that moves at a fixed distance from a flat glass bed in a perfectly controlled light environment. The geometry is fixed — no perspective, no uneven lighting, no motion. Phone camera scans introduce four quality problems that flatbeds avoid entirely: perspective distortion from non-perpendicular capture angles, uneven lighting from ambient room light rather than controlled illumination, motion blur from handheld camera shake during the exposure, and heavy JPEG compression from scanning apps optimizing file size over image quality. At 600 DPI, a flatbed captures roughly 6× the resolvable detail of a phone camera held 30 centimeters from a document. For passports and ID cards that need to show legible text and clear facial detail, a flatbed scanner is always the better first step if one is available. If only a phone scan is possible, stabilize the phone on a flat surface and use the highest quality JPEG setting in the scanning app."
  - question: "How do I fix a scanned photo that has a Moire pattern or grid artifact?"
    answer: "Moire patterns appear when you scan a printed photo — the halftone dot pattern of the print interferes with the regular pixel grid of the scanner, producing a visible grid or mesh across the image. The most reliable fix is prevention: scanning the original print at a slightly different angle (5–15 degrees off axis) or at a significantly different resolution (change from 300 DPI to 400 DPI or vice versa) disrupts the interference pattern before it forms. After the fact, JPEG Artifact Remover reduces Moire somewhat because both Moire and JPEG block artifacts are regular repeating patterns, and the model was trained to suppress periodic noise. However, severe Moire — where the interference pattern has the same frequency as the facial features — cannot be fully removed without also blurring the underlying image. For historical photos with heavy Moire from newsprint or magazine sources, re-scanning at a different angle is more effective than any AI correction applied afterward."
  - question: "Can AI improve a scanned passport or ID card photo?"
    answer: "Yes, with an important limitation: AI can improve the visual quality of the photo embedded in a passport or ID card — reduce compression artifacts, sharpen soft edges, denoise grain — but it cannot make illegible text become readable if the original resolution was too low. For the facial photo on an ID document, Photo Enhancer's 4× upscaling brings a 300-DPI scan of a typical passport photo (roughly 35×45 mm) to a detail level where individual facial features are clearly distinguishable in digital display and standard print. The face-aware processing component — based on GFPGAN — reconstructs eye detail, lash edges, and skin texture that soft or noisy scans lose. For the alphanumeric data fields on the document itself, the minimum usable scan resolution is 300 DPI; 600 DPI is the archival standard. ArtImageHub's tools improve visual quality only — they do not perform OCR and cannot extract or interpret text fields on a document."
  - question: "What resolution should I scan a document photo at for archival purposes?"
    answer: "300 DPI is the minimum for a scanned document photo to remain legible when printed at the original physical size. At 300 DPI, a 35×45 mm passport photo produces a 414×531 pixel image — sufficient for screen display and small prints, but marginal for AI enhancement because the upscaling model has less source detail to work with. 600 DPI is the archival standard for document photos: it produces an 827×1063 pixel image from the same passport photo, giving the AI tools a meaningful signal to enhance from. For historical records where the physical document shows fine print, stamps, or handwriting alongside the embedded photo, 1200 DPI captures the full detail of the document surface. Save the original scan as a lossless TIFF before running any AI processing — the AI-enhanced version is your delivery copy, but the unmodified scan is your archival master."
---

> **Editorial trust notice**: This guide is published by [ArtImageHub](/about), an AI photo restoration and enhancement service. Technical claims are grounded in peer-reviewed research: upscaling via [Real-ESRGAN](https://arxiv.org/abs/2107.10833) (Wang et al. 2021); face restoration via [GFPGAN](https://arxiv.org/abs/2101.04061) (Wang et al., Tencent ARC Lab 2021).

> **Quick path**: If you have a scanned document photo ready to fix, [ArtImageHub's Photo Enhancer](/photo-enhancer) handles denoising, artifact removal, and 4× upscaling in a single browser workflow — $4.99 one-time, no subscription, no watermark on HD download.

A scanned photo of a passport from 1987 should not look like it was transmitted by fax. The image was once clear enough to verify someone's identity — but scanning, compression, and age have stacked enough quality loss that you can barely see the subject's eyes. This guide is about reversing that stack, tool by tool, in the right order.

"Scanned document photos" here means something specific: photographs embedded in documents — passports, ID cards, birth certificates, insurance cards, old postcards, historical records. This is different from pure document scanning for OCR, where dedicated document-digitization tools (Adobe Scan, Microsoft Lens) are the right answer. We are dealing with the photo image itself, and the goal is visual clarity, not text extraction.

---

## What Types of Artifacts Do Scanned Document Photos Have?

The damage profile depends entirely on how the scan was made and how old the document is.

**Flatbed scanner artifacts** are less destructive but still present. Flatbed CCDs introduce pixel-level random variation (scan noise) that compounds visibly when you upscale. The scanner head moving across the document can produce faint horizontal banding in areas of smooth tone. If you are scanning a printed photo — a photo that was itself printed on a halftone press — the regular dot pattern of the print creates Moire interference with the scanner's pixel grid.

**Phone camera scan artifacts** are more damaging and more common. The four compounding problems: perspective distortion from non-perpendicular capture, uneven lighting from ambient rather than controlled illumination, motion blur from handheld camera shake, and heavy JPEG compression from the scanning app. Any one of these alone is manageable; all four together is why a phone camera scan of a passport photo can look worse than a photocopy.

**Old document degradation** is a separate layer on top of the scanning artifact. Paper yellows from acid oxidation. Foxing — the brown circular spots common on documents stored in humid conditions — spreads across the image area. Water stains from leaks or flooding leave tide-mark patterns. Fold lines cut across the image, creating sharp-edged discontinuities.

---

## What Is the Correct Fix Workflow?

### For Phone Camera Scans

The order of operations matches the order of artifact severity.

| Step | Tool | Why |
|------|------|-----|
| 1 | [JPEG Artifact Remover](/jpeg-artifact-remover) | Scanning apps apply heavy JPEG compression; block artifacts are the first layer of damage to remove |
| 2 | [Photo Deblurrer](/photo-deblurrer) | If the phone was handheld, motion blur is present; deblurring after artifact removal works on cleaner signal |
| 3 | [Photo Denoiser](/photo-denoiser) | Phone sensors produce grain that is separate from JPEG artifacts; remove it after structure is restored |
| 4 | [Photo Enhancer](/photo-enhancer) | Upscale 2–4× only after all noise and artifacts are cleared; upscaling amplifies whatever remains |

Running Photo Enhancer first is the most common mistake. Upscaling an artifact-laden image makes the artifacts larger, not smaller.

### For Old Document Photos (Paper Degradation)

| Step | Tool | Why |
|------|------|-----|
| 1 | [Old Photo Restoration](/old-photo-restoration) | Handles yellowing, foxing, water staining, and fold lines in a single pass trained specifically on aged paper damage |
| 2 | [Photo Denoiser](/photo-denoiser) | Restoration can introduce some smoothing artifacts; denoising cleans the result |
| 3 | [Photo Enhancer](/photo-enhancer) | Final upscale after the image surface is clean |

---

## How to Fix a Moire Pattern?

Moire is harder than other artifacts because it is a structural interference pattern, not a random noise source. When a flatbed scanner at 300 DPI captures a halftone-printed photo, the regular dots of the print (typically 85–150 lines per inch for magazines, 65–100 for newspapers) create a visible grid or mesh in the scan.

**Prevention is more effective than correction.** Scanning at 5–15 degrees off-axis from the document's printed halftone direction disrupts the interference before it forms. Changing scan resolution from 300 DPI to 400 DPI or 500 DPI changes the beat frequency of the interference, often pushing the Moire to a spatial frequency below visible perception.

**After the fact:** [JPEG Artifact Remover](/jpeg-artifact-remover) suppresses Moire somewhat — both Moire and JPEG block artifacts are periodic patterns, and the AI model suppresses periodic noise. For severe Moire, where the interference frequency is close to the frequency of facial features, full removal without blurring the face underneath is not achievable in software alone.

---

## What Resolution Standards Apply to Document Photos?

| Use case | Recommended DPI | Result for 35×45 mm passport photo |
|----------|-----------------|------------------------------------|
| Screen display only | 150 DPI | 207×265 px — acceptable for web |
| Print at original size | 300 DPI | 414×531 px — minimum for legibility |
| AI enhancement input | 600 DPI | 827×1063 px — enough signal for 4× upscale |
| Archival master | 1200 DPI | 1654×2126 px — full surface detail preserved |

Save the unmodified scan as a TIFF at archival resolution. The AI-enhanced output is a delivery copy. The original scan is the permanent record.

---

## What Can AI Not Do for Document Photos?

ArtImageHub's enhancement tools improve visual quality — sharpness, noise, compression artifacts, color accuracy. They do not perform OCR. If the original scan resolution was too low to capture individual letterforms in a serial number or date field, no AI enhancement will make those characters readable. Enhancement recovers detail that exists in the source but was degraded; it cannot invent detail that was never captured.

For identity documents where the text must be legible (not just the photo), scan at 600 DPI minimum. For historical records with fine handwriting or stamps, 1200 DPI gives the AI the source material it needs to produce a sharp, readable result.

---

## What Are the Most Common Questions About Scanned Document Photo Quality?

**What is the best way to improve a scanned photo of a document?**

The workflow depends on how the scan was made. For phone camera scans (the most common source of quality loss), start with JPEG Artifact Remover to undo the compression the scanning app applied, then run Photo Deblurrer if the phone was handheld and there is visible motion blur, then Photo Denoiser to clean up sensor noise, and finally Photo Enhancer if the resolution is still insufficient. For older documents — passports, birth certificates, historical records — run Old Photo Restoration first, which handles yellowing, foxing, and brown age spots as a single pass, then follow with Photo Denoiser and Photo Enhancer if needed. The key rule: always treat the scanning artifact before treating the document degradation. Layering AI tools in the wrong order amplifies the artifact instead of removing it.

**Why do phone camera scans look worse than flatbed scanner scans?**

Flatbed scanners use a CCD sensor that moves at a fixed distance from a flat glass bed in a perfectly controlled light environment. The geometry is fixed — no perspective, no uneven lighting, no motion. Phone camera scans introduce four quality problems that flatbeds avoid entirely: perspective distortion from non-perpendicular capture angles, uneven lighting from ambient room light rather than controlled illumination, motion blur from handheld camera shake during the exposure, and heavy JPEG compression from scanning apps optimizing file size over image quality. At 600 DPI, a flatbed captures roughly 6× the resolvable detail of a phone camera held 30 centimeters from a document. For passports and ID cards that need to show legible text and clear facial detail, a flatbed scanner is always the better first step if one is available.

**How do I fix a scanned photo that has a Moire pattern or grid artifact?**

Moire patterns appear when you scan a printed photo — the halftone dot pattern of the print interferes with the regular pixel grid of the scanner, producing a visible grid or mesh across the image. The most reliable fix is prevention: scanning the original print at a slightly different angle (5–15 degrees off axis) or at a significantly different resolution disrupts the interference pattern before it forms. After the fact, JPEG Artifact Remover reduces Moire somewhat because both Moire and JPEG block artifacts are regular repeating patterns. However, severe Moire — where the interference pattern has the same frequency as the facial features — cannot be fully removed without also blurring the underlying image. For historical photos with heavy Moire from newsprint or magazine sources, re-scanning at a different angle is more effective than any AI correction applied afterward.

**Can AI improve a scanned passport or ID card photo?**

Yes, with an important limitation: AI can improve the visual quality of the photo embedded in a passport or ID card — reduce compression artifacts, sharpen soft edges, denoise grain — but it cannot make illegible text become readable if the original resolution was too low to capture individual letterforms. For the facial photo on an ID document, Photo Enhancer's 4× upscaling brings a 300-DPI scan of a typical passport photo to a detail level where individual facial features are clearly distinguishable in digital display and standard print. For the alphanumeric data fields, the minimum usable scan resolution is 300 DPI; 600 DPI is the archival standard. ArtImageHub's tools improve visual quality only — they do not perform OCR and cannot extract or interpret the text fields on a document.

**What resolution should I scan a document photo at for archival purposes?**

300 DPI is the minimum for a scanned document photo to remain legible when printed at the original physical size. At 300 DPI, a 35×45 mm passport photo produces a 414×531 pixel image — sufficient for screen display and small prints, but marginal for AI enhancement because the upscaling model has less source detail to work with. 600 DPI is the archival standard for document photos: it produces an 827×1063 pixel image from the same passport photo, giving the AI tools a meaningful signal to enhance from. For historical records where the physical document shows fine print, stamps, or handwriting alongside the embedded photo, 1200 DPI captures the full detail of the document surface. Save the original scan as a lossless TIFF before running any AI processing — the AI-enhanced version is your delivery copy, but the unmodified scan is your archival master.

---

## Where Can I Learn More About AI Photo Enhancement?

- [How to Fix JPEG Artifacts in Old Photos](/blog/ai-image-enhancer)
- [AI Photo Restoration vs. Photoshop: Which Is Better?](/blog/ai-photo-restoration-vs-photoshop)
- [Best AI Photo Restoration Tools 2026: Compared](/blog/best-ai-photo-restoration-tools-2026-compared)

---

If you have a scanned document photo ready to process, start with [JPEG Artifact Remover](/jpeg-artifact-remover) for phone camera scans or [Old Photo Restoration](/old-photo-restoration) for aged documents. Both are included in the $4.99 one-time ArtImageHub plan — no subscription, no watermark on HD downloads.
