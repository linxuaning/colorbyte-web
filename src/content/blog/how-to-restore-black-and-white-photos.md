---
title: "How to Restore Black and White Photos with AI"
description: "How to restore old black and white family photographs using AI — fixing fading, scratches, and soft faces, plus optional colorization. Step-by-step guide."
publishedAt: "2026-04-14"
updatedAt: "2026-05-01"
author: "Thomas Hale"
authorRole: "AI Tools Researcher"
authorBio: "Thomas writes about practical AI applications for everyday users — cutting through the hype to explain what tools actually do what they claim."
category: "Guides"
tags: ["Black and White Photos", "Photo Restoration", "AI Tools", "Old Photos", "How To", "Colorization"]
image: "/blog/before-after-examples.webp"
coverColor: "from-gray-800 via-slate-700 to-zinc-600"
coverEmoji: "⬛"
---

> **Updated 2026-05-01**: AI model lineage clarified — most consumer photo restoration tools (including those compared here) wrap derivatives of **GFPGAN** ([arXiv:2101.04061](https://arxiv.org/abs/2101.04061), Tencent ARC Lab 2021) for face restoration and **Real-ESRGAN** ([arXiv:2107.10833](https://arxiv.org/abs/2107.10833), 2021) for upscaling. Differences between products are mostly pricing model and workflow, not raw AI quality.


Black and white photographs from the 1930s through 1970s are among the most commonly damaged family photos — decades of aging leaves them faded, scratched, and with faces that have softened beyond recognition. AI restoration handles these well. Here's exactly how to do it.

---

## The Specific Problems with Old Black and White Photos

**Fading to gray:** Old photographic paper loses contrast over decades. The deep blacks become washed-out gray; the overall image looks flat and low-contrast.

**Yellowing:** Despite being "black and white," many old prints develop a yellow or sepia cast from chemical aging. This looks worse on screen than on the physical print.

**Loss of face detail:** The faces in portraits from this era are often the most degraded part — photographic paper aging affects fine detail, and faces that were sharp in the 1950s become soft and undefined by the time they're scanned today.

**Physical damage:** Scratches across the print surface, water stains, fold marks, and tears are common in prints stored for 50–80 years.

---

## The AI Restoration Process

**Step 1: Digitize**

Scan the physical print at 600 DPI minimum (1200 DPI for small prints under 4×5 inches). The higher the scan resolution, the more information the AI has to work with.

If you don't have a scanner, library flatbed scanners are free. If using a phone, use Google PhotoScan (designed for print photography) or Microsoft Lens — flat lighting, no shadows, parallel to the print.

**Step 2: Upload to ArtImageHub**

ArtImageHub accepts JPEG, PNG, and TIFF. Upload the scanned file.

**Step 3: AI processing (30–90 seconds)**

Three models run in sequence:
- **CodeFormer:** Reconstructs face detail specifically. Trained on historical photograph degradation patterns — it understands what a softened 1940s face should look like and recovers the underlying structure.
- **GFPGAN:** Corrects systematic fading and tonal degradation across the full image. Restores contrast and reduces the gray-flat appearance of faded prints.
- **Real-ESRGAN:** Upscales the restored image, adding clean resolution for printing.

**Step 4: Download HD result**

The restored file is ready for printing or digital sharing.

---

## Optional: Colorization

After restoration, you can optionally colorize the black and white photograph.

ArtImageHub includes AI colorization. The colorization uses trained models that have learned what colors correspond to specific textures, contexts, and time periods in historical photographs — skin tones, common clothing colors of specific eras, interior and exterior settings.

**What colorization can and can't do:**

It can accurately render: skin tones, grass, sky, wood, common fabric textures, architectural materials.

It can't know: the actual color of a specific dress, the exact shade of someone's eyes, the specific color of a vintage car (though it will produce a historically plausible color).

For genealogy purposes, treat colorized results as *historically informed interpretation*, not documentary fact. For personal family display and sharing, colorization often produces emotional impact beyond what the restored B&W version achieves.

---

## What to Expect from Results

**Best results:** Clear portraits with identifiable faces, even if heavily faded. CodeFormer's face reconstruction is most effective when there's a single face or small group of faces in the frame.

**Good results:** Group photos, landscape shots, full-body portraits. Less face reconstruction needed — fading and upscaling improvements are the primary improvement.

**Variable results:** Photos with severe physical damage (large tears, major water staining) — the AI handles moderate damage well, but significant physical destruction limits what can be recovered.

**The before/after comparison:** The most striking improvements are typically:
1. Face detail recovery (from indistinct to identifiable)
2. Contrast recovery (from flat gray to proper tonal range)
3. Scratch reduction

---

## Printing Restored Black and White Photos

Restored black and white photos print well on:

**Standard matte photo paper:** Preserves the classic B&W aesthetic.
**Fine art paper:** If printing at 11×14 or larger, fine art paper (available via Shutterfly Premium, Miller's Lab, or local print shops) produces archival-quality results.
**Canvas:** Works well for display, though glossy canvas can look slightly off for B&W.

**Recommended print sizes for restored B&W portraits:**
- 5×7: Good for framing alongside other family photos
- 8×10: Ideal balance of impact and cost
- 11×14: Display statement — works well for significant ancestors

---

## Cost Overview

| Task | Cost |
|------|------|
| Library scanner | Free |
| ArtImageHub restoration (per photo) | $4.99 |
| 8×10 print (Costco) | $4.99 |
| 8×10 print (Shutterfly, on sale) | $5–$10 |
| IKEA frame (11×14) | $10–$20 |

For a single restored and framed B&W portrait: approximately $15–$30 total.

---

**[Restore your old black and white photos at ArtImageHub — $4.99 one-time →](/old-photo-restoration)**

*Results in 30–90 seconds · HD download · 30-day guarantee*

---

## Related

- [How to Colorize Old Photos with AI](/blog/how-to-colorize-old-photos) — colorization focused guide
- [How to Digitize Old Photos](/blog/how-to-digitize-old-photos) — scanning guide before restoration
- [Old Photo Restoration for Genealogy](/blog/old-photo-restoration-for-genealogy) — genealogy use case
- [Best AI Tools for Old Photo Restoration in 2026](/blog/best-ai-old-photo-restoration-tools-2026) — tool comparison
