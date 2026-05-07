---
title: "How to Restore Scanned Slides and Film Negatives with AI (Step-by-Step Guide)"
description: "Slides and film negatives have unique damage patterns — dust scratches, cyan color casts, Kodachrome fading. This guide covers scanning resolution, step-by-step AI restoration workflow, and which film types respond best."
publishedAt: "2026-05-07"
author: "Bernard Holloway"
authorRole: "Film Photographer & Darkroom Archivist"
authorBio: "Bernard Holloway has worked in analog photography and darkroom archiving for over two decades. He specializes in the digitization and restoration of estate and family film archives, with a particular focus on slide and negative collections from the 1950s through the 1980s."
category: "How-To"
tags: ["Slides", "Film Negatives", "Photo Restoration", "Scanning", "Analog Photography"]
coverColor: "from-orange-500 via-red-600 to-rose-700"
coverEmoji: "🎞️"
faq:
  - q: "What resolution should I scan 35mm slides and negatives for best AI restoration results?"
    a: "For 35mm slides and color negatives, scan at 4800 DPI minimum. This produces an output file of approximately 6700 × 4500 pixels from a standard 35mm frame — large enough that AI restoration models have genuine image detail to work with rather than interpolating structure from a low-resolution base. Scanning below 2400 DPI on 35mm material produces files where film grain is actually smaller than the scanner's optical resolution, meaning real image information is being discarded before the AI even sees the file. For medium format negatives (120/220 film), 6400 DPI is the recommended target. For large format (4×5 or 8×10 sheet film), 2400 DPI is usually sufficient because the negative area is dramatically larger. The scanner's true optical resolution always matters more than software-interpolated maximum values — always use the hardware-native DPI setting rather than the scanner software's highest interpolated option."
  - q: "Why do old slide scans have a cyan or magenta color cast, and can AI fix it?"
    a: "Color casts in aged slide scans come from dye layer instability in the original emulsion. Different dye layers fade at different rates — the cyan-forming layer, magenta-forming layer, and yellow-forming layer each have different chemical stability. Kodachrome slides, though extremely stable compared to most color reversal films, tend to shift toward a yellow-red warmth when the cyan dyes degrade over decades. Ektachrome slides notoriously shift toward cyan and green because the magenta dye layer is the least stable of the three. Negative films develop their own cast through emulsion aging, and the orange mask used in color negative film can shift as well. AI restoration tools trained on color correction can address moderate casts effectively. ArtImageHub's old photo restoration pipeline handles color correction as part of the full restoration workflow, using the same models developed for faded color prints and slides. Severe casts from very degraded emulsion may require manual color correction in Lightroom before AI processing."
  - q: "What causes white or bright line scratches on slide scans, and how do I remove them?"
    a: "The bright white or light-colored lines you see on slide scans are dust particles and physical scratches on the film surface itself, not on the glass of the slide mount. During scanning, the scanner's light source illuminates dust as bright specks and linear scratches as white streaks — they appear bright because the scanner reads them as transparent gaps in the otherwise density-bearing emulsion. Some flatbed scanners offer Digital ICE (infrared scratch detection), which electronically identifies these artifacts and removes them during the scan — if your scanner has this feature and you are scanning C-41 color negative or E-6 transparency film, use it. Digital ICE does not work on black-and-white silver-based film. For scans that already have dust artifacts, ArtImageHub's JPEG artifact remover (powered by SwinIR) and photo enhancer effectively reduce fine dust and scratch patterns. Larger physical scratches that penetrate through the emulsion layers respond best to the full old photo restoration pipeline."
  - q: "Which types of slides and negatives respond best to AI restoration?"
    a: "Color slides and negatives from the 1970s and 1980s that were stored in reasonable conditions respond best. The emulsion still retains most of its detail, and the degradation is primarily chemical (color shift, mild grain increase) rather than physical (emulsion cracking, peeling, mold). Kodachrome 64 slides from this era, even with moderate yellowing, typically produce excellent AI restoration results because the underlying silver structure remains intact beneath the dye layers. C-41 color negative film from the 1980s and 1990s similarly has good archival stability and responds well. Older Ektachrome from the 1960s and 1970s (the slides that have gone fully green or magenta) are more challenging and may require manual color correction before AI processing. Black-and-white negatives from any era are among the easiest to restore — the silver image is chemically stable, and the main issues are grain, physical damage, and scan quality, all of which AI denoising and enhancement address directly."
  - q: "Should I restore slides in one pass or use a multi-step workflow?"
    a: "A multi-step workflow produces significantly better results than running everything in one pass. The correct sequence is: first, address dust and scan artifacts using the JPEG artifact remover; second, run the denoiser to reduce film grain without softening image detail — film grain at 4800 DPI is substantial and will compound in later steps if left untreated; third, run the full old photo restoration pipeline for color correction and damage repair; fourth, for black-and-white negatives you want colorized, run the photo colorizer last. Running colorization on a grainy, unrestored scan produces noticeably poor results because the AI reads grain as texture information and incorporates it into color assignments, producing a muddy, confused result. ArtImageHub's tools work in this sequence naturally — each is a separate $4.99 one-time purchase, and you simply upload the output of one step as the input to the next, processing them in order."
---

> **Quick path**: If you have a scanned slide or negative ready to restore, start with the [JPEG artifact remover](/jpeg-artifact-remover) for dust cleanup, then [photo denoiser](/photo-denoiser) for grain, then [old photo restoration](/old-photo-restoration) for color and damage — **$4.99 one-time per tool, no subscription**. Full workflow detail below.

> **Related tools**: [Old Photo Restoration](/old-photo-restoration) — [Photo Colorizer](/photo-colorizer) — [Photo Denoiser](/photo-denoiser) — [JPEG Artifact Remover](/jpeg-artifact-remover) — [Photo Enhancer](/photo-enhancer)

Slides and film negatives are among the most rewarding — and most technically demanding — subjects for AI photo restoration. Unlike a print that has faded or torn, a well-preserved slide or negative still contains extraordinary image detail: fine grain, sharp edges, and a tonal range that many modern digital cameras still struggle to match. The challenge is that decades of storage, imperfect scanning, and emulsion aging introduce a specific set of problems that require a specific restoration approach.

This guide covers the full workflow: understanding what damage looks like on slides and negatives, scanning at the right resolution, and the step-by-step AI restoration sequence that extracts the best possible result from your digitized film archive.

## What Damage Looks Like on Scanned Slides and Negatives

Film damage differs from print damage in important ways. Prints fade from the outside in; slides and negatives degrade from within the emulsion layers, and the damage manifests differently depending on the film type, storage conditions, and scanning method.

**Dust and surface scratches** appear as bright white or light-colored streaks and specks on the final scan. The scanner's light source illuminates surface particles as if they were transparent gaps in the emulsion — which is why dust reads as bright rather than dark. Linear scratches run in the direction the film traveled through the camera or projector gate.

**Color casts from emulsion aging** are the most visually obvious problem on old color slides. Ektachrome slides from the 1960s and 1970s are notorious for a cyan-green shift as their magenta dye layer degrades faster than the others. Kodachrome slides tend toward yellow-red warmth in the cyan channel. Agfachrome and Fujifilm reversal films have their own characteristic cast profiles. Color negative films develop casts differently because of the orange masking layer — shifts often appear as an overall green or magenta tint once the negative is converted.

**Film grain** at high scan resolution is substantial, especially in fast (high ISO) films from the 1970s and earlier. At 4800 DPI, 35mm Tri-X pushed to ISO 1600 produces visible grain that will compound into noise patterns if not addressed before AI upscaling.

**Physical damage** — emulsion cracking, silver mirroring on B&W negatives, mold foxing spots, and water tide marks — occurs primarily in slides and negatives that were stored in poor conditions (humidity fluctuations, heat, or direct contact with other materials).

## Scanning Resolution Recommendations

Getting the scan right is the prerequisite for good AI restoration. AI models can recover detail that scanning compressed, but they cannot invent detail that was never captured.

**35mm film (36×24mm frame)**: Scan at **4800 DPI optical**. This produces a file of approximately 6,700 × 4,500 pixels. At this resolution you are capturing the grain structure of the film, which means you have all the real image information the emulsion contains. Scanning at 2400 DPI sacrifices detail; scanning at 9600 DPI provides no additional useful information and produces enormous files.

**Medium format (6×4.5cm to 6×9cm frames)**: Scan at **6400 DPI** for smaller medium format frames, or **4800 DPI** for 6×9cm where the larger negative area more than compensates. Medium format negatives scanned at 6400 DPI produce files in the 20–40 megapixel range — ideal for large-print output.

**Large format (4×5 inch or larger sheet film)**: **2400 DPI** is typically sufficient. A 4×5 inch sheet at 2400 DPI produces a 9,600 × 12,000 pixel file — over 100 megapixels — which is more than enough for any practical use.

**Slide mounts**: Always remove glass-mounted slides before scanning if they show Newton rings (the interference-pattern rainbow that appears when glass contacts glass). Cardboard-mounted slides can usually be scanned as-is.

## Step-by-Step AI Restoration Workflow

The order of operations matters significantly. Each step produces a cleaner input for the next.

**Step 1 — Dust and artifact removal**: Upload your freshly scanned slide or negative to [ArtImageHub's JPEG artifact remover](/jpeg-artifact-remover) (powered by SwinIR). This step addresses fine dust specks, surface scratches, and the compression artifacts that flatbed scanner software sometimes introduces. For slides with severe physical dust, this step alone transforms the scan from distracting to workable.

**Step 2 — Film grain reduction**: Upload the artifact-cleaned image to [the photo denoiser](/photo-denoiser) (NAFNet-based). Film grain at 4800 DPI is substantial — in fast films it can overwhelm fine detail in subsequent enhancement steps. The NAFNet denoiser distinguishes between grain structure and image structure, reducing the former while preserving edge sharpness and fine detail in the latter. Do not skip this step even for relatively fine-grained films; the improvement to subsequent color correction is notable.

**Step 3 — Color correction and overall restoration**: Upload the denoised image to [old photo restoration](/old-photo-restoration). This step handles color cast correction (the cyan Ektachrome shift, the yellow Kodachrome warmth, the green color negative cast), overall tonal balance, and any remaining physical damage. The AI models in this pipeline have been trained on period-appropriate color profiles and can distinguish between the color palette of a 1960s slide that has aged correctly versus one whose colors have drifted.

**Step 4 — Colorization for black-and-white negatives (optional)**: If you are working with a black-and-white negative and want a colorized version, run [the photo colorizer](/photo-colorizer) as the final step, after denoising and restoration are complete. DDColor-based colorization reads edge detail, tonal distribution, and contextual scene information to assign historically plausible color to B&W images. Running colorization on a noisy, unrestored scan produces poor results because the model reads grain as texture and incorporates it into color assignments.

**Step 5 — Enhancement and upscaling (optional)**: For slides or negatives that will be printed large or used for detailed examination, run [the photo enhancer](/photo-enhancer) after restoration. Real-ESRGAN upscaling recovers edge sharpness and fine detail, and is especially useful for slightly soft medium-format scans where the scanner's optical resolution was at its limit.

## Which Slides and Negatives Respond Best to AI Restoration

**Best candidates**: Color slides and negatives from the 1970s–1990s stored in reasonable conditions (cool, dry, in archival sleeves or slide boxes). Kodachrome 64 — the standard of the family slide collection — is exceptionally stable and produces excellent restoration results even after decades. The underlying silver image is intact; the only task is color adjustment and grain management. C-41 process color negatives from the 1980s and 1990s are similarly well-suited.

**Good candidates**: Ektachrome and similar E-6 slides from the 1970s and 1980s, even with significant green or cyan shift. The detail is there; the color correction task is heavier but AI handles it well when the emulsion is physically intact.

**Challenging cases**: Slides from the 1950s and early 1960s processed with early Anscochrome, Ferraniacolor, or other less stable processes often have severe color degradation where entire dye channels have nearly disappeared. Manual color correction in Lightroom before AI processing is recommended for these.

**Black-and-white negatives of any era**: One of the easiest categories. The silver image is chemically stable for centuries in proper storage, and AI restoration deals primarily with grain, scratches, and physical damage — all well within the models' capabilities.

## A Note on Film Types and the AI Colorizer

When running the photo colorizer on black-and-white negatives, providing context about the decade and subject helps you evaluate results. DDColor's training data reflects real-world color distributions, so a 1950s domestic scene will typically receive era-appropriate colors (warm skin tones, period-accurate clothing hues) rather than modern over-saturated color grading. For slides from specific geographic regions or unusual subject matter, compare the colorizer's output against historical reference photos of similar scenes to validate the color palette.

---

**Related Tools on ArtImageHub:**
- [Old Photo Restoration](/old-photo-restoration) — color correction and damage repair for slides and prints
- [Photo Colorizer](/photo-colorizer) — add historically accurate color to B&W negatives
- [Photo Denoiser](/photo-denoiser) — remove film grain before enhancement
- [JPEG Artifact Remover](/jpeg-artifact-remover) — clean up dust and scan artifacts
- [Photo Enhancer](/photo-enhancer) — upscale and sharpen after restoration

**Related Reading:**
- [AI Photo Restoration vs. Photoshop: Honest Comparison](/blog/ai-photo-restoration-vs-photoshop)
- [AI vs. Professional Photo Restoration](/blog/ai-vs-professional-photo-restoration)
- [Complete Guide to Colorizing Old Photos](/blog/complete-guide-colorize-old-photos)
