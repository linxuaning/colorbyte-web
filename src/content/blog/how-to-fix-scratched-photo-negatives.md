---
title: "How to Fix Scratched Photo Negatives: Scanning and AI Restoration Guide"
description: "Scratched film negatives produce scan artifacts that AI restoration can remove — if you know how to scan correctly first. A complete guide to scratch removal from 35mm and medium-format negatives."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya has spent 8 years helping families recover damaged and faded photographs using the latest AI restoration technology."
category: "Guides"
tags: ["Scratched Negatives", "Film Negative Restoration", "Photo Restoration", "AI Photo Restoration", "Negative Scanning"]
image: "/blog/og-default.jpg"
coverColor: "#f5f0e8"
coverEmoji: "🖼️"
faq:
  - question: "What causes scratches on film negatives, and how do they appear in scans?"
    answer: "Film negative scratches come from several sources: dust particles trapped between film and camera transport mechanism, improper rewinding that drags the film across the cartridge lip, cleaning the film with abrasive materials, or physical damage during storage. Scratches on the emulsion side of the film appear as dark lines in a negative scan because emulsion loss lets light pass through where there should be density. Scratches on the base side appear as bright or light lines because the clear scratch refracts light differently than the surrounding base. Both types translate to linear marks in your scanned image — running parallel to the film transport direction for camera mechanism scratches, or in random directions for handling damage. AI restoration models like Real-ESRGAN and NAFNet are trained on exactly this type of linear artifact and can reconstruct the underlying image content beneath and around scratch lines with high accuracy."
  - question: "Should I try to clean or repair scratched negatives before scanning?"
    answer: "You can safely clean the base side of a negative (the shiny side opposite the emulsion) with a soft, anti-static brush or clean compressed air to remove loose dust and debris. Do not apply liquids directly to the film. Never touch or clean the emulsion side (the dull, slightly tacky side) — it is fragile and touching it adds fingerprints that are harder to remove than the original scratch. For base-side scratches specifically, some photographers use a drop of pure mineral oil applied to a soft cloth and very gently rubbed along the scratch direction to fill the optical disruption before scanning — this is a film-lab technique called wet mounting that temporarily makes base scratches less visible. Emulsion-side scratches cannot be filled or repaired physically. In both cases, do not skip the digital restoration step: even after cleaning, fine scratches remain in the scan and AI restoration removes them more cleanly than manual spotting in photo editing software."
  - question: "What scan settings produce the best input for AI scratch removal?"
    answer: "Scan scratched negatives at 2400 DPI minimum, and 4800 DPI for 35mm frames where you plan to make large prints. Higher resolution gives the AI restoration model more pixels around each scratch to analyze, which improves the accuracy of the reconstruction. Scan in color mode even for black-and-white negatives — the color channel data helps the AI distinguish scratch artifacts from genuine grain patterns. If your scanner has a Digital ICE or similar infrared-based dust removal system, use it on base-side scratches — it works by detecting physical discontinuities in the film base using infrared light and can significantly reduce the scratch visibility before the file reaches the AI. Digital ICE does not work on emulsion-side damage because the emulsion itself is opaque to infrared. For emulsion scratches, skip the hardware removal and let the AI handle it."
  - question: "Can AI restoration fill in scratches that cross faces or important subjects?"
    answer: "Yes — scratch removal across facial regions is one of the strongest use cases for GFPGAN, the face restoration model used by ArtImageHub. When a scratch runs across a face in a scanned negative, GFPGAN identifies the face geometry and reconstructs the underlying skin, eye, and hair detail using its trained understanding of facial structure. The reconstruction is semantically guided — the model knows that a line cutting across a nose or cheek is damage, not a feature, and fills it with plausible facial content that matches the surrounding context. For scratches across eyes specifically, GFPGAN typically produces very accurate reconstruction because it has deep training data on eye structure. The results are most convincing when the scratch is narrow relative to the face size in the frame. Wide gouges covering large areas of the face require the model to invent more content and may produce slightly less naturalistic results."
  - question: "How much does it cost to restore scans from scratched negatives at ArtImageHub?"
    answer: "ArtImageHub charges $4.99 one-time per photo for the complete restoration pipeline — NAFNet noise reduction, Real-ESRGAN upscaling, GFPGAN face restoration, and DDColor colorization for black-and-white negatives. There is no subscription and no per-download fee after the initial payment. For a roll of 36 frames with moderate scratch damage, restoring all frames costs around $180 at ArtImageHub — compared to professional negative retouching services that typically charge $25 to $75 per frame for manual scratch removal. For selective restoration of only the most important frames from a roll, the one-time model makes it easy to restore three or five key photos without committing to a subscription."
---

> **Quick start**: Upload your scratched negative scan to [ArtImageHub](https://artimagehub.com) for AI scratch removal — Real-ESRGAN, GFPGAN, and NAFNet run automatically — $4.99 one-time, results in about 60 seconds.

## Why Do Film Negative Scratches Cause So Much Trouble in the Digital Age?

Film negatives survived in attics and boxes for decades without anyone caring much about the surface scratches. The scratches were always there, but when you made a print in a darkroom, the enlarger and paper process softened them slightly — they were less visible in the final print than they appear in a high-resolution flatbed scan.

Modern film scanning changes the equation. A flatbed scanner at 2400 DPI captures every surface imperfection in hard-edged digital detail. Scratches that were barely visible in a 1970s 4x6 print become dramatic black or white lines across your digital image — because the scanner captures physical reality more faithfully than the optical printing process ever did.

This is actually good news for restoration. The same faithful capture that makes scratches look worse also gives AI restoration models more precise information about where the damage is and what surrounds it. A scratch in a high-resolution scan has clean, sharp edges that make it straightforward for AI inpainting to detect and fill.

## What Are the Different Types of Film Negative Scratches?

Not all scratches are the same, and understanding the type of scratch you have determines how you approach both the scanning and the restoration.

**Emulsion-side scratches** are the most serious type. The emulsion is the light-sensitive layer that contains the actual photographic image. A scratch on the emulsion side physically removes image material — there is genuinely no image information where the scratch is, just missing emulsion. In a scan, emulsion scratches appear as dark lines (in a negative scan) because light passes straight through where the image layer used to be. AI restoration fills these by reconstructing plausible content from surrounding context.

**Base-side scratches** damage only the clear plastic or acetate support layer, not the emulsion. The image is preserved above the scratch, but the scratch disrupts how light passes through the base during scanning, creating a bright or light-toned line in the scan. Base-side scratches are physically less destructive — the image information is there — but they still create visual artifacts that require removal.

**Transportation scratches** run in straight, parallel lines along the film transport direction. They are typically consistent in width and spacing and often run the full length of a roll. These are the most common type from camera mechanism problems and are among the easiest for AI models to detect and remove because of their consistent geometry.

**Random handling scratches** run in arbitrary directions from being dragged across a surface or stored in contact with abrasive materials. These are less predictable but still well within what AI restoration can handle.

## How Do You Prepare Scratched Negatives for Scanning?

Preparation before scanning reduces the amount of work the AI has to do and produces better final results.

**Clean with compressed air first.** Use short bursts of clean compressed air to remove loose dust and debris from both sides of the negative. Hold the negative vertically to let debris fall away rather than being blown along the surface.

**Use an anti-static brush on the base side.** An anti-static brush strokes away static-held dust from the clear base side without touching the emulsion. Static charge is the primary reason dust sticks to film during scanning — reducing it reduces the number of small dust spots the AI needs to remove along with the scratches.

**Do not clean the emulsion side with anything other than air.** The emulsion is fragile. Any physical contact risks adding fingerprints or new fine scratches. Air cleaning is the only safe intervention on the emulsion side.

**Use your scanner's infrared scratch removal if available.** Scanners with Digital ICE, FARE, or equivalent infrared-based dust and scratch removal systems detect base-side physical defects using infrared light that passes through the base but not through emulsion. Enable this feature for base-side scratches. It will not help with emulsion-side scratches — the emulsion appears opaque to infrared — but for base scratches it significantly reduces visible lines before the file reaches the AI.

**Scan at 2400 DPI minimum.** Higher resolution gives the AI more pixels around each scratch for context-based reconstruction.

## How Does Real-ESRGAN Handle Scratch Artifacts in Negatives?

Real-ESRGAN was trained on photographs with a wide variety of real-world degradation, including linear scratch artifacts similar to what film scanning produces. The model's approach to scratch removal is embedded in its general training — it learns to distinguish between intentional image content and degradation artifacts, then reconstructs plausible content where artifacts are detected.

For parallel transportation scratches, Real-ESRGAN often performs well because the geometry is consistent and the surrounding image content provides strong context for reconstruction. For a scratch running through a blue sky, the model fills with appropriate sky texture. For a scratch running through a fabric pattern, it reconstructs the pattern using the visible portion on either side of the scratch as reference.

Where Real-ESRGAN works in combination with the AI pipeline, the upscaling pass that follows scratch removal benefits from the cleaned input — a 2400 DPI scratched scan, after scratch removal and upscaling, produces a 9600-pixel output that looks like a pristine original rather than a restored copy.

## What Does GFPGAN Contribute When Scratches Cross Faces?

The most emotionally difficult scratches to see are the ones that cross a face — a line cutting through a grandmother's eye, a long scratch down the middle of a family portrait. GFPGAN is specifically designed for this scenario.

GFPGAN's face restoration model has deep training in facial geometry and structure. When it encounters a scratch crossing a face, it does not treat the scratch as an unknown area to fill generically — it treats it as damaged facial content to reconstruct. The model knows the three-dimensional structure of a human face, how features relate to each other geometrically, and what the undamaged portions of the face tell it about the damaged region.

In practice, a scratch crossing an eye will be filled with reconstruction that shows a recognizable eye with natural iris shape, eyelid structure, and appropriate skin tone — not a generic blur. A scratch through a lip will show a plausible lip continuation matching the undamaged side. The results are rarely perfect at the pixel level, but at normal viewing distance and print size they are convincing.

## What Is the Complete Workflow for Restoring Scratched Negative Scans?

Following this sequence produces the best results:

**1. Physical preparation.** Clean with compressed air and anti-static brush. Enable infrared scratch removal in your scanner software if available.

**2. Scan at high resolution.** 2400 DPI for 35mm, 1200 DPI for medium format (the larger frame size gives you equivalent pixel count). Scan in color mode even for black-and-white negatives.

**3. Save the raw scan.** Keep an unmodified copy of your original scan before any restoration. This is your archival record — if restoration technology improves in the future, you want the original data to work with.

**4. Export to PNG for upload.** JPEG compression creates block artifacts that AI models may confuse with genuine image content. Export from your scanning software to PNG or TIFF, then use PNG for the upload.

**5. Upload to ArtImageHub.** At [ArtImageHub](https://artimagehub.com), the pipeline runs NAFNet noise reduction, Real-ESRGAN upscaling and scratch removal, and GFPGAN face restoration automatically for $4.99 one-time. For black-and-white negatives, DDColor colorization is also available.

**6. Review and download.** Check the output particularly in the areas where scratches crossed important content. Download the HD result.

**7. Repeat for priority frames.** At $4.99 per photo, you can prioritize the most important frames from a roll and restore selectively without a subscription commitment.

At [ArtImageHub](https://artimagehub.com), the full restoration pipeline handles scratch removal alongside upscaling, face enhancement, and noise reduction — all in a single upload, no technical knowledge required.
