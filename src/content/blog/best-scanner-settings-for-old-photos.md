---
title: "Best Scanner Settings for Old Photos"
description: "Best DPI, color depth, and format for scanning old photos, negatives, and slides — and how scan resolution directly affects AI restoration output quality."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["scanner settings for old photos", "photo scanning resolution", "digitize old photos", "flatbed scanner guide"]
image: "/images/blog/best-scanner-settings-for-old-photos.jpg"
coverColor: "#f5f0eb"
coverEmoji: "🖨️"
faq:
  - question: "What DPI should I use to scan old printed photographs?"
    answer: "For standard printed photographs — 4x6, 5x7, or 8x10 inch prints — scan at 600 DPI as a baseline minimum. At 600 DPI, a 4x6 print produces a 2400x3600 pixel file, which is adequate for most display and digital sharing purposes. For prints smaller than 4x6 inches (wallet photos, cabinet card portraits, school photos), scan at 1200 DPI to ensure the output file has enough pixels for AI upscaling tools to work with effectively. Scanning at higher resolution than the print actually contains does not add information — a blurry print scanned at 4800 DPI is still a blurry image, just a larger file. The practical ceiling for most reflective prints is 1200-2400 DPI before you are capturing scanner noise rather than image detail. Save at 600 DPI for good originals, 1200 DPI for small or damaged prints, and always use TIFF format to avoid JPEG compression artifacts in the source file."
  - question: "What resolution is needed to scan 35mm negatives and slides?"
    answer: "35mm film negatives and slides require 4800 DPI as a practical minimum for high-quality results. At 4800 DPI, a 35mm frame (24x36mm) produces approximately a 4500x6750 pixel output file — roughly equivalent to a 30 megapixel digital photograph. This level of detail allows AI upscaling tools like Real-ESRGAN to recover grain-level information and produce enlargements up to 20x30 inches at full quality. Medium-format negatives (120 film, 6x6cm or 6x7cm frames) contain even more information and should be scanned at 2400 DPI minimum, which produces a comparable pixel count given the larger frame size. Dedicated film scanners outperform flatbed scanner film adapters at these resolutions because they use glass-mounted film holders that keep the film perfectly flat — even slight film curl creates focus inconsistencies at 4800 DPI that degrade sharpness across the frame. If your flatbed includes a film adapter, use it for a first pass, but consider dedicated scanner service for irreplaceable negatives."
  - question: "Should I scan in 24-bit or 48-bit color depth?"
    answer: "Scan damaged or faded photographs in 48-bit color depth (16 bits per channel). The extra bit depth captures tonal gradations in highlight and shadow regions that 24-bit scanning clips or quantizes — information that becomes critical when you process the scan through AI restoration tools. For a severely faded print where the entire image sits in the upper quarter of the tonal range, 24-bit scanning collapses those pale tones into a narrow range that loses distinction — 48-bit preserves them. For well-preserved prints with full tonal range, 24-bit is sufficient and produces smaller files. The practical rule: if the photograph looks pale, flat, or has visible color shifts from dye fading, scan at 48-bit. File sizes at 48-bit are double the equivalent 24-bit scan. ArtImageHub accepts standard 24-bit JPEG or PNG input — convert and tonally correct 48-bit TIFF files in editing software before uploading for restoration."
  - question: "What is the correct way to handle warped or stuck photographs before scanning?"
    answer: "Never force a warped photograph flat against the scanner platen. Applying pressure to a severely warped or stuck print can cause cracking, delamination, or tearing of the emulsion layer, which is the irreversible loss of image information. For mildly warped prints, place them in a humidity-controlled environment — a sealed plastic bag with a small damp sponge, not touching the photo — for 24-48 hours to allow the paper substrate to reabsorb moisture and relax. Then press gently under a stack of books between sheets of acid-free tissue for another 24 hours before scanning. For photographs stuck to glass (common in old frames) or stuck to each other, do not attempt separation without professional guidance. A photograph conservator can use controlled humidity chambers and separation solvents. Scanning through the glass is a viable workaround for stuck-to-glass photos — the glass introduces some optical distortion but preserves the image. AI deblurring via NAFNet can partially compensate for glass-induced softness after scanning."
  - question: "How does scanning resolution affect what AI restoration can recover?"
    answer: "AI restoration models work with existing pixel information — they cannot invent detail that was never captured in the scan. Real-ESRGAN, the upscaling model in ArtImageHub's pipeline, uses learned patterns from millions of photographs to extrapolate fine detail, but output quality is directly bounded by input resolution. A 300 DPI scan of a damaged print gives Real-ESRGAN limited raw material, and the upscaled result shows visible interpolation artifacts in fine-detail areas — hair, fabric textures, handwritten text. A 1200 DPI scan of the same print gives the model four times as much information per inch, producing sharper and more accurate detail reconstruction. The practical implication: always scan at the higher end of the appropriate range for your photo type before running AI restoration. Larger files are the tradeoff; measurably better output is the benefit. For faces specifically, higher scan resolution produces noticeably better GFPGAN face restoration results in almost every case."
---

> **Restore your scanned photos**: [Old Photo Restoration](/old-photo-restoration) — $4.99 one-time, no subscription. Upload your scan and preview the result before downloading.

Scanning is the step before AI restoration, and it is the step that most people get wrong. The quality ceiling for any AI-restored photograph is the quality of the scan that went into it. Real-ESRGAN can recover detail, NAFNet can remove noise, and GFPGAN can reconstruct faces — but none of these models can invent pixel information that was never captured. Every decision you make at the scanner has downstream consequences for what AI restoration can achieve.

This guide covers correct scanner settings for every common photograph type, the physical handling issues that destroy originals before they are digitized, and the technical relationship between scanning resolution and what AI tools can actually recover.

## What Resolution Should You Use for Each Photo Type?

Resolution requirements are not one-size-fits-all. The correct DPI setting depends on the physical size of the original, the format type, and the intended use of the scan.

**Standard photographic prints (4x6 to 8x10 inches):**
- Good condition, full size: 600 DPI
- Small prints (under 4x6): 1200 DPI
- Damaged or heavily faded: 1200 DPI

**35mm negatives and slides:**
- Minimum usable: 2400 DPI
- Recommended: 4800 DPI
- Maximum practical: 9600 DPI (for severely damaged film with some surviving detail)

**Medium-format negatives (120 film, 6x6 to 6x9cm):**
- Minimum: 1200 DPI
- Recommended: 2400 DPI

**Large-format negatives (4x5 inch, 8x10 inch sheet film):**
- Minimum: 600 DPI
- Recommended: 1200 DPI

**Photographic documents (tintypes, daguerreotypes, ambrotypes):**
- Minimum: 1200 DPI
- Do not use a film transparency adapter for these — scan as reflective prints

At each DPI level, you are capturing a different amount of actual image information. A 4x6 inch print at 600 DPI produces a 2400x3600 pixel file. The same print at 1200 DPI produces a 4800x7200 pixel file — four times as many pixels. That additional information is what gives AI upscaling and restoration tools more to work with.

## Why Does File Format Matter as Much as Resolution?

Scanning to JPEG introduces compression at the scanning stage, before any restoration work begins. JPEG compression creates blocking artifacts in smooth gradients and ringing artifacts around edges. These artifacts are then interpreted by AI restoration models as real image content — noise, texture, or object edges — producing incorrect outputs.

**Always scan to TIFF.** TIFF is a lossless format that preserves every pixel value the scanner captured. File sizes are larger — a 600 DPI TIFF of a 4x6 print is approximately 30-50MB — but the tradeoff is complete absence of compression artifacts.

If your scanner software requires JPEG output, use the maximum quality setting (usually labeled 100 or "Best") to minimize artifact introduction. Then run the JPEG through a JPEG artifact removal pass before any other restoration work — [ArtImageHub's JPEG Artifact Remover](https://artimagehub.com) addresses this specifically and is included in the $4.99 one-time access.

**PNG** is an acceptable alternative to TIFF for smaller files. PNG is lossless and widely supported. For workflow flexibility, TIFF at the scan stage and JPEG at the final output stage is a common archival practice.

## What Color Depth Setting Should You Use?

Most scanners offer 24-bit (8 bits per channel, RGB) or 48-bit (16 bits per channel, RGB) color scanning. The choice matters for damaged originals.

**24-bit color** is sufficient for well-preserved photographs with full tonal range — clear shadows, midtones, and highlights all represented. The 256 tonal values per channel that 24-bit provides is more than enough for a photo in good condition.

**48-bit color** captures 65,536 tonal values per channel rather than 256. For faded or damaged photographs where most of the image is in the upper portion of the tonal range (pale, washed-out, or yellowed), 48-bit scanning preserves distinctions between tones that 24-bit scanning clips into identical values. After scanning, you can apply tonal corrections in a photo editing application before running AI restoration, and the 48-bit data provides room for these adjustments without introducing posterization or banding.

Heavily water-damaged photographs, color-shifted prints from failed dye layers, and extremely faded albumen prints all benefit from 48-bit scanning.

## How Should You Clean the Scanner Platen Before Use?

Dust on the scanner platen appears as white or dark spots on your scan. These spots are then processed by AI restoration as image damage — NAFNet may attempt to denoise them, Real-ESRGAN may upscale them — producing spurious artifacts in the output.

**Cleaning protocol:**
1. Use a microfiber cloth or optical lens cloth — never paper towels or tissue, which leave fibers
2. Apply a small amount of isopropyl alcohol (70-90%) to the cloth, not directly to the glass
3. Wipe in a single direction, not circular motions, to avoid redistributing dust
4. Allow the glass to fully dry (30-60 seconds) before placing photographs

For flatbed scanners used in dusty environments, clean before every scanning session. Lint from photograph sleeves and paper fibers from prints accumulate faster than most users expect.

## How Do You Handle Flatbed vs. Dedicated Film Scanners?

For reflective prints, flatbeds are adequate at the resolution ranges appropriate for prints (up to 1200-2400 DPI for most models). The optical resolution of midrange flatbeds — Epson Perfection V39, V550, V600 — is genuine and consistent in the print range.

For 35mm film, the difference between flatbed film adapters and dedicated film scanners is significant:

**Flatbed with film adapter:**
- Adequate for casual digitization of negatives
- Film holder often allows slight curl, reducing sharpness at high DPI
- Practical ceiling around 2400-3200 DPI of actual resolved detail
- Cost: included with flatbed or $30-80 adapter

**Dedicated film scanner (Plustek OpticFilm, Nikon Coolscan equivalents):**
- Glass film holder keeps film perfectly flat — critical at 4800 DPI
- True optical resolution at rated DPI specification
- Sharpness consistent across full frame, no corner softness
- Cost: $200-600 new, $100-300 refurbished

For irreplaceable negatives — the only existing image of a deceased relative, a family event with no other visual record — the additional sharpness from a dedicated film scanner is worth the cost or the service fee from a digitization service.

## How Does Your Scan Resolution Affect AI Restoration Quality?

The relationship between scan resolution and AI restoration output is direct and measurable. Real-ESRGAN, the upscaling model in [ArtImageHub's restoration pipeline](https://artimagehub.com), operates by recognizing patterns in the input image and extrapolating higher-resolution versions of those patterns based on training data from millions of photographs.

A low-resolution input gives the model fewer patterns to work with. A 300 DPI scan of a 4x6 print is a 1800x2700 pixel file — sufficient for basic online display, but when Real-ESRGAN attempts to upscale it to print quality, it must infer large amounts of missing detail. The inference is often plausible but is identifiably AI-generated in fine detail areas.

A 1200 DPI scan of the same print is a 4800x7200 pixel file. Real-ESRGAN has four times as much information per inch, and its upscaled output is sharper, more accurate in texture detail, and produces better results in the most challenging areas — facial features, handwriting, fabric patterns.

GFPGAN, the face restoration model, shows this effect most clearly. Face restoration from a 600 DPI scan versus a 1200 DPI scan of the same damaged portrait produces noticeably different results in eye detail, skin texture, and hairline definition. The higher-resolution input consistently produces more natural, less artificial-looking face reconstruction.

The practical rule: scan at the highest resolution appropriate for your photo type, save to TIFF, then run through [ArtImageHub's restoration tools](https://artimagehub.com). The $4.99 one-time access covers all tools. The investment in scanner time pays dividends in restoration output quality.

Digitization is the permanent decision. The scan you make today is the source file for every restoration, sharing, and printing use of that photograph for the rest of its digital life. Get it right once.
