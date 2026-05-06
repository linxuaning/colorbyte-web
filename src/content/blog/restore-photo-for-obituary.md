---
title: "How to Restore a Photo for an Obituary or Memorial Service (Step-by-Step)"
description: "A compassionate, practical guide to restoring and improving old or damaged photos for newspaper obituaries, funeral programs, memorial slideshows, and gravestone portraits — often in under 10 minutes."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Catherine Mills"
authorRole: "Family Historian and Photo Archivist"
authorBio: "Catherine helps families digitize and restore their photo archives. She's processed over 8,000 family photos spanning four generations and writes about practical photo restoration for non-technical audiences."
category: "How-To"
tags: ["Photo Restoration", "Obituary", "Memorial", "Old Photo Repair", "Funeral Program"]
image: "/blog/restore-photo-for-obituary.jpg"
coverColor: "from-slate-600 via-stone-500 to-amber-700"
coverEmoji: "🕯️"
faq:
  - q: "How do I restore an old photo for an obituary when I'm running out of time?"
    a: "Start with the [Old Photo Restoration](/old-photo-restoration) tool — upload your scan and the AI addresses fading, scratches, and yellowing in 30–60 seconds. Download the result immediately as a JPEG. If it still looks grainy, run that output through the [Photo Denoiser](/photo-denoiser) next — another 30–60 seconds. For a face that is still soft or slightly out of focus, add the [Photo Deblurrer](/photo-deblurrer). Finally, run the cleaned image through the [Photo Enhancer](/photo-enhancer) to upscale it to print-ready resolution. The entire four-step sequence takes under 10 minutes, which is feasible even when a newspaper obituary deadline is 24 hours away. Each step is a separate upload — always save your output after each tool before moving to the next. You do not need any prior photo editing experience; each tool is a single upload and a single download with no technical settings to configure."
  - q: "What resolution does a newspaper obituary photo need to be?"
    a: "Most daily and community newspapers request a digital JPEG at a minimum of 300 DPI at the size it will print. A standard 2×2-inch obituary photo at 300 DPI equals 600×600 pixels — that is the absolute floor, not the target. Aim to provide at least 900×900 pixels (equivalent to 2×2 inches at 450 DPI) so the newspaper's layout team has room to resize without quality loss. Larger is always better: a 1200×1200-pixel file gives editors complete flexibility. Before submitting, call the newspaper's obituary department and ask exactly what format they prefer — most accept standard JPEG, and the majority have no file size limit above 10 MB. If your original photo is smaller than 600×600 pixels, the [Photo Enhancer](/photo-enhancer) can upscale it 4× while recovering facial sharpness — a 300×300-pixel original becomes a clean 1200×1200-pixel file suitable for newspaper print in a single step."
  - q: "Can AI colorize a black-and-white photo of a loved one for a memorial?"
    a: "Yes. ArtImageHub's [Photo Colorizer](/photo-colorizer) applies a deep learning model trained on millions of portrait image pairs to generate plausible, natural-looking color from a grayscale original. Skin tones, hair, and backgrounds come out realistic in the majority of cases, particularly for portraits taken between the 1940s and 1980s where the model has dense training coverage. The limitation worth knowing clearly: AI colorization predicts statistically likely colors based on image context — it does not recover the actual colors of the original scene, which were never recorded on the black-and-white film. If you know the person's eye color or hair color, compare the AI result against that knowledge before finalizing. For a slideshow, funeral program, or framed memorial display where emotional resonance is the goal rather than documentary accuracy, AI colorization is typically a meaningful and well-received upgrade from a black-and-white source."
  - q: "How do I improve a low-resolution Facebook profile photo for a funeral program?"
    a: "Facebook compresses uploaded photos and caps profile images at 170×170 pixels on display — the full-resolution download is often 400×400 pixels or smaller depending on when the original photo was uploaded to the platform. That resolution is marginal for a printed funeral program, which typically requires 300 DPI at the physical print size. Upload the profile photo to [Photo Enhancer](/photo-enhancer), which runs a 4× upscale using Real-ESRGAN — a model specifically trained on real-world photo degradation rather than clean synthetic test images. A 400×400-pixel Facebook download becomes a 1600×1600-pixel output with recovered facial sharpness and skin texture detail. If the face still looks soft after upscaling, run the output through [Photo Deblurrer](/photo-deblurrer) as a second pass. For a standard 4×5-inch photo in a printed program at 300 DPI, you need 1200×1500 pixels — achievable from most Facebook profile sources using the 4× upscale."
  - q: "What is the best way to enlarge an old wallet-size photo for a framed memorial portrait?"
    a: "Wallet-size prints measure 2.5×3.5 inches. Scanned at 600 DPI, a wallet print produces a 1500×2100-pixel digital file — a solid starting point for enlargement. If the scan was done at 300 DPI, the file is only 750×1050 pixels, which requires more AI inference work to enlarge cleanly. Run the scanned file through [Old Photo Restoration](/old-photo-restoration) first if there is any physical damage, then upload to [Photo Enhancer](/photo-enhancer) for a 4× upscale. If the face is still not crisp after upscaling, add a pass through [Photo Deblurrer](/photo-deblurrer). For an 8×10-inch framed portrait printed on canvas at 150 DPI, you need 1200×1500 pixels. For a photographic paper print at 300 DPI, you need 2400×3000 pixels. A 4× upscale from a 600-DPI wallet scan produces 6000×8400 pixels — well above both thresholds. Save as JPEG at maximum quality before sending to a print shop."
---

> **A note on timing**: Newspaper obituaries are typically due within 24–48 hours of death. Funeral programs often need to be print-ready within 3–5 days. AI restoration at ArtImageHub takes 30–60 seconds per tool — a full four-step workflow runs in under 10 minutes. This guide walks through exactly what to do, in order, without any technical background required.

When a family member dies and arrangements need to be made quickly, one of the smallest but most emotionally weighted tasks is finding a good photo. Not a photo that exists — one that exists and is usable. The best available image is often old, faded, or taken in a different era of photography. It may be a wallet-size print from the 1970s, a scanned school portrait with a crease across the corner, or a Facebook profile picture taken on an early smartphone camera.

AI photo restoration cannot replace a photograph that was never taken, but it can make the photograph that does exist look the way it deserves to for a funeral program, newspaper obituary, memorial slideshow, or framed portrait. This guide explains the full workflow — what order to apply tools, why, and what results to expect honestly.

---

## What Are the Four Most Common Situations?

Most families arriving at this task face one of four problems:

| Problem | What it looks like | Which tool to start with |
|---|---|---|
| Old and damaged | Fading, yellowing, scratches, spots | [Old Photo Restoration](/old-photo-restoration) |
| Low resolution | Pixelated, soft edges | [Photo Enhancer](/photo-enhancer) |
| Blurry or soft | Motion blur, out of focus | [Photo Deblurrer](/photo-deblurrer) |
| Black-and-white | Family wants color for the memorial | [Photo Colorizer](/photo-colorizer) |

Many photos have more than one problem. A 1965 print may be faded, scratched, and low-resolution after scanning — that requires running through restoration before upscaling. The section below covers the recommended order for each combination.

---

## How Do I Choose the Right Starting Tool?

Start with whichever problem is most severe, then work through the chain.

**If the photo is damaged (scratches, fading, yellowing):** Start with [Old Photo Restoration](/old-photo-restoration). This fixes the physical damage first. A scratched photo run through an upscaler before restoration will upscale the scratches along with the image.

**If the photo is low-resolution but undamaged:** Start with [Photo Enhancer](/photo-enhancer). This upscales the image 4× using a model trained on real photo degradation.

**If the photo is blurry:** Start with [Photo Deblurrer](/photo-deblurrer) if the blur is the dominant problem. If the photo is also damaged, restore first.

**If the photo is black-and-white and the family wants color:** Run [Photo Colorizer](/photo-colorizer) last in the chain, after all quality problems are fixed. Colorizing a blurry or scratched image first makes the damage harder to remove in subsequent steps.

---

## What Is the Full Restoration Workflow for a Memorial Photo?

The complete step-by-step sequence for a photo with multiple problems:

**Step 1 — Old Photo Restoration** (if the photo has physical damage)
Upload your scanned or photographed image to [Old Photo Restoration](/old-photo-restoration). The AI model addresses fading, color yellowing, scratches, dust spots, and surface damage. Processing takes 30–60 seconds. Download the result before moving to the next step.

**Step 2 — Photo Denoiser** (if the result from Step 1 looks grainy)
Some older photos, especially those digitized from prints, develop visible grain after restoration processing. Upload the Step 1 output to [Photo Denoiser](/photo-denoiser). This removes digital grain without blurring edges.

**Step 3 — Photo Deblurrer** (if the face or key subject is soft)
If the photo was slightly out of focus when taken, or if motion blur occurred during the original exposure, the [Photo Deblurrer](/photo-deblurrer) can recover sharpness in facial features. This step is particularly effective on portraits where the eyes and mouth are the priority area.

**Step 4 — Photo Enhancer** (for print quality)
Run the cleaned image through [Photo Enhancer](/photo-enhancer) to upscale it to a print-ready resolution. Newspapers typically require 300 DPI at 2×2 inches (600×600 pixels minimum, larger preferred). Canvas prints for memorial portraits typically require 150 DPI at the final physical size. The 4× upscale with face-aware processing handles both targets from a typical scanned family photo.

**Step 5 — Photo Colorizer** (optional, if converting B&W to color)
If the family wants a colorized version of a black-and-white photograph, run the finished image from Step 4 through [Photo Colorizer](/photo-colorizer). Colorizing a fully restored and sharpened image produces the most realistic results.

Total time for all five steps: under 10 minutes.

---

## How Honest Should I Be About What AI Can Do?

AI photo restoration improves most photos substantially. It is worth being clear about one limitation: if the original photograph is very small (under 200×200 pixels) and severely damaged, the AI will improve it, but a very small or very blurry starting point constrains what any tool can recover. The model can reconstruct detail that is plausible given the context, but it cannot recover information that was never recorded. A deeply scratched, faded, 150×150-pixel image will look better after processing — it will not look like a studio portrait.

For most practical memorial use cases (newspaper obituary, slideshow, printed program), AI restoration produces results that are significantly more dignified than the damaged original. For large-format framed portraits or gravestone engraving, start with the highest-resolution source you can find, even if it means scanning the original print on a flatbed scanner at 600 DPI rather than photographing it with a phone.

---

## What Specs Does the Newspaper Actually Need?

Before you finalize the photo, call or email the newspaper's obituary department and ask what they require. Requirements vary by publication, but the most common specifications:

- **Format**: JPEG or TIFF
- **Minimum resolution**: 300 DPI at the print size (typically 2×2 inches = 600×600 pixels)
- **Preferred resolution**: 450–600 DPI at print size (900–1200 pixels on the short side)
- **Email size limit**: Most papers accept files up to 10 MB without issue

If the photo is for a funeral program printed by a local print shop, ask the shop for their print spec. Most consumer-grade digital printers handle 200–300 DPI well; professional offset printing needs 300 DPI minimum.

---

## Where Do I Start If I Only Have One Photo Available?

The photo does not need to be perfect to be worth restoring. Upload it to [Old Photo Restoration](/old-photo-restoration) and see what the AI produces in under a minute. If the result is usable, proceed through the workflow above. If the starting point is very small or heavily damaged, the AI will still improve it — just set the expectation that AI assists the photo rather than replacing what time has taken.

For related reading on what AI photo tools can and cannot do, see our guides on [AI photo restoration limitations](/blog/ai-photo-restoration-limitations) and [how AI image enhancement works](/blog/ai-photo-enhancement-technology-2026).

---

**Also helpful:**
- [Complete Guide: Colorize Old Photos Step-by-Step](/blog/complete-guide-colorize-old-photos)
- [Best Free Old Photo Restoration Tool](/blog/best-free-old-photo-restoration-tool)
- [AI Photo Restoration vs Photoshop: Which Is Faster?](/blog/ai-photo-restoration-vs-photoshop)
