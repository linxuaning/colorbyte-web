---
title: "How to Digitize Old Photos (Before Restoring Them)"
description: "How to properly digitize old family photographs before AI restoration — scanning vs. phone photography, DPI settings, best equipment, and free options."
publishedAt: "2026-04-14"
updatedAt: "2026-05-04"
author: "Thomas Hale"
authorRole: "AI Tools Researcher"
authorBio: "Thomas writes about practical AI applications for everyday users — cutting through the hype to explain what tools actually do what they claim."
category: "Guides"
tags: ["Digitize Old Photos", "Scanning", "Photo Preservation", "How To", "Old Photos"]
image: "/blog/before-after-examples.webp"
coverColor: "from-slate-700 via-gray-700 to-zinc-600"
coverEmoji: "🖨️"
faq:
  - question: "Can AI restoration handle digitize old photos (before restoring them)?"
    answer: "Yes. AI restoration via GFPGAN (face) + Real-ESRGAN (upscale) handles most cases of digitize old photos (before restoring them) effectively. Upload, wait ~60 seconds, download. For severe cases (large missing areas, catastrophic damage), AI fills with plausible content but cannot invent fully lost detail."
  - question: "How much does it cost?"
    answer: "ArtImageHub: $4.99 one-time for unlimited HD restoration. Compared to professional retouching ($50-300 per photo) or DIY Photoshop (2-10 hours per photo), AI is the cost-effective path for finite family-history projects."
  - question: "What scan resolution should I use?"
    answer: "1200 DPI minimum for standard 4x6 prints. 2400 DPI for small-format originals where face detail recovery is essential. Color mode preserves natural tones even on B&W photos. Save the unmodified scan as your archival record."
  - question: "How long does the workflow take?"
    answer: "AI restoration: 30-90 seconds per photo. Manual workflow: 30 min to several hours per photo depending on damage and skill. Professional retoucher: 3-7 days turnaround. For finite family-history projects (50-300 photos), AI is the only path that completes in reasonable time."
  - question: "When should I seek professional conservation?"
    answer: "For irreplaceable historical artifacts (museum-grade items, daguerreotypes, photos with verified monetary value above ~$500), professional conservation is recommended. For most family photos with typical age-related damage, AI restoration produces results equivalent to or better than $150-300 professional retouching at a fraction of the cost."
---

> **Editorial trust notice**: This guide is published by [ArtImageHub](/about), an AI photo restoration service charging $4.99 one-time. Technical claims rest on peer-reviewed research: face restoration via [GFPGAN](https://arxiv.org/abs/2101.04061) (Wang et al., Tencent ARC Lab 2021); upscaling via [Real-ESRGAN](https://arxiv.org/abs/2107.10833) (Wang et al. 2021).

> **Updated 2026-05-01**: AI model lineage clarified — most consumer photo restoration tools (including those compared here) wrap derivatives of **GFPGAN** ([arXiv:2101.04061](https://arxiv.org/abs/2101.04061), Tencent ARC Lab 2021) for face restoration and **Real-ESRGAN** ([arXiv:2107.10833](https://arxiv.org/abs/2107.10833), 2021) for upscaling. Differences between products are mostly pricing model and workflow, not raw AI quality.

> **⚡ Quick path**: For most users, [ArtImageHub](/old-photo-restoration) handles this automatically in 60 seconds — **$4.99 one-time, no subscription, no watermark on HD download**. The detailed manual workflow follows below for technical users or curious readers.


Before AI restoration can work its best, the input scan matters. Here's how to digitize old family photographs properly — covering equipment, settings, free options, and common mistakes.

---

## Why Digitizing Quality Matters for AI Restoration

AI restoration models like CodeFormer and GFPGAN work on the information present in the digital file. A poorly photographed or low-resolution scan limits what the AI can reconstruct:

- **Too low DPI:** The AI can't recover detail that wasn't captured
- **Glare on the scan:** Bright spots hide underlying image information permanently
- **Shadows from phone camera:** Darken areas of the print that the AI can't see through
- **Blurry capture:** Reduces the information the AI has to work with

A good scan gives AI restoration the maximum information to work with.

---

---

> **Skip the manual work?** Most readers at this point realize AI restoration is 30-100x faster than DIY for typical results. [Try AI restoration on this photo →](/old-photo-restoration) — $4.99 once, unlimited HD downloads, no subscription.

---


## Option 1: Flatbed Scanner (Best Quality)

A flatbed scanner produces the highest quality digitization for flat prints:

**Settings for old photos:**
- **DPI:** 600 DPI minimum for standard prints. 1200 DPI for photos smaller than 3×5 inches (more scan detail = more for the AI to work with).
- **Color mode:** Color (even for black-and-white photos — scanning in color captures tonal nuance better)
- **File format:** TIFF for archival; JPEG at 90%+ quality for processing
- **Bit depth:** 24-bit minimum; 48-bit if scanning for archival

**Equipment options:**

*Own a scanner:* Epson Perfection V39, V600, or similar (~$90–$250) are reliable choices.

*Free option — library scanners:* Many public library branches have flatbed scanners available for free. Quality varies by location but is typically 600–1200 DPI. Call ahead to confirm availability and whether you can use your own drive.

*Free option — UPS/FedEx stores:* Some locations have flatbed scanners for customer use, typically a small per-scan fee.

---

## Option 2: Phone Photography (Practical Alternative)

Phone cameras have improved substantially and can produce usable scans with proper technique:

**Use a scanning app:**
- **Microsoft Lens:** Excellent for flat documents and photos — auto-detects edges, corrects perspective, removes glare when possible
- **Google PhotoScan:** Designed specifically for photo prints — captures multiple angles to reduce glare, stitches into a clean composite
- **Adobe Scan:** Good edge detection and basic enhancement

**Technique for phone scanning:**
1. Place the print on a flat, matte, neutral-colored surface (avoid glossy surfaces that reflect)
2. Use natural indirect light (overcast window light) or even indoor lighting without direct flash
3. Hold the phone directly above the print — parallel, not at an angle
4. Fill the frame with the print (no border required — apps crop automatically)
5. Use both hands or prop the phone for a stable shot — camera shake blurs detail

**What phone scanning can't match:**
- 600+ DPI equivalent resolution for small prints
- Elimination of glare from highly reflective old prints
- Consistent results across many prints

For a few photos where you don't have access to a flatbed scanner, Google PhotoScan + good lighting produces usable results for AI restoration.

---

## Option 3: Dedicated Photo Scanning Services

**When this makes sense:** You have hundreds of prints to digitize and don't want to do it yourself.

**Services:**
- **ScanMyPhotos.com:** ~$0.08–0.35 per print, ships box of photos, returns originals with USB drive
- **Legacybox:** ~$0.64–$1.00 per item, handles prints + film + slides
- **Local camera/print shops:** Often offer scanning, prices vary

**Quality:** Generally 300–600 DPI, acceptable for AI restoration.

---

## Common Mistakes to Avoid

**Too low DPI:** A 72 DPI phone screenshot is not a scan. Aim for 600 DPI equivalent minimum.

**Glare:** Highly reflective old glossy prints are prone to glare. Use Google PhotoScan's multi-shot mode to eliminate it. Indirect lighting helps.

**Scanning in black-and-white mode:** Even B&W photos contain tonal information better preserved in color scan mode.

**Dirty scanner glass:** Dust on the scanner glass shows up in scans. Clean with a soft cloth before scanning.

**Curved prints:** Old prints often curl. Gently flatten under a heavy book (overnight) before scanning. Don't force curved prints flat on the scanner — it damages them.

**Low file quality JPEG:** JPEG at 50% quality introduces compression artifacts that AI can mistake for image detail. Use 90%+ quality or TIFF.

---

## After Digitizing: AI Restoration

Once you have a clean 600+ DPI scan, AI restoration can work with the full information present in the original print:

1. **Upload to ArtImageHub** — the service accepts JPEG, PNG, TIFF
2. **Processing takes 30–90 seconds** — CodeFormer reconstructs face detail, GFPGAN corrects fading and yellowing, Real-ESRGAN handles upscaling
3. **Download HD result** — ready for printing at any standard print size

The combination of a good scan + AI restoration produces results that aren't possible with either alone.

---

**[Restore your digitized old photos at ArtImageHub — $4.99 one-time →](/old-photo-restoration)**

*Results in 30–90 seconds · HD download · 30-day guarantee*

---

## Related

- [Photo Restoration Near Me: Options Compared](/blog/photo-restoration-near-me) — local options overview
- [How to Restore Old Photos: Free Options vs Paid AI](/blog/how-to-restore-old-photos-free-vs-paid) — full restoration overview
- [Old Photo Restoration as a Gift](/blog/old-photo-restoration-gifts) — gift guide
- [Best AI Tools for Old Photo Restoration in 2026](/blog/best-ai-old-photo-restoration-tools-2026) — 7-tool ranked comparison

## Quick method comparison: AI vs DIY vs Professional

| Method | Time per photo | Cost | Skill required | Result quality |
|--------|----------------|------|----------------|----------------|
| **AI ([ArtImageHub](/old-photo-restoration))** | 60 seconds | **$4.99 once** (unlimited HD) | None | Excellent (GFPGAN + Real-ESRGAN) |
| Photoshop DIY | 2–10 hours | Photoshop subscription ($55+/mo) | Advanced | Variable (depends on your skill) |
| Professional retoucher | 3–7 days turnaround | $50–300 per photo | None (you hire) | Excellent (but 30x cost) |
| Local print shop | 2–5 days | $20–80 per photo | None | Good |

For typical family-history photos, AI restoration matches professional retoucher quality at 1/30th the cost and 1/4000th the time. For high-monetary-value historical artifacts (museum-grade items), professional conservation is still warranted.



For era-specific damage profiles, see [Old Photo Restoration by Decade complete index](/blog/old-photo-restoration-by-decade-complete-index).

For damage-specific recovery protocols, see [Old Photo Damage Recovery by Type complete guide](/blog/old-photo-damage-recovery-by-type-complete-guide).

Try [ArtImageHub](/old-photo-restoration) directly — $4.99 one-time for unlimited HD restoration.
