---
title: "The Complete Guide to Flatbed Scanning for Photo Restoration"
description: "How to use a flatbed scanner to create high-quality scans for photo restoration. DPI settings, bit depth, file format, and handling fragile originals — everything that affects AI restoration quality."
publishedAt: "2026-03-06"
updatedAt: "2026-07-02"
author: "Michael Chen"
authorRole: "Senior Photo Restoration Specialist"
authorBio: "Michael has restored over 10,000 family photographs using AI-powered tools."
category: "how-to"
tags: ["flatbed scanner", "scanning guide", "digitizing photos", "scan quality", "photo restoration"]
image: "/images/blog/restore-photos-flatbed-scanner-guide.jpg"
coverColor: "from-green-100 to-emerald-200"
coverEmoji: "🖨️"
faq:
  - q: "What DPI should I scan old photos for restoration?"
    a: "600 DPI for standard prints (4x6, 5x7, 8x10). 1200 DPI for small prints (wallet-size, 3x3), photos with faces you want to identify, or any original smaller than 4x6. 2400 DPI or higher for 35mm film negatives and slides. Higher DPI gives AI restoration more information to work with, but scanning a standard 4x6 print at 2400 DPI produces a 70-megapixel file with diminishing returns — the scanner captures paper surface noise rather than additional image detail."
  - q: "Should I scan old photos in color mode or grayscale?"
    a: "Always scan in color mode, even for black-and-white photographs. Black-and-white photographs are not neutral gray — they contain yellowing, toning, and subtle warm or cool cast information in their color channels. AI restoration uses all three color channels when working on black-and-white photos, so a color scan gives it more data than a grayscale scan. The only exception is high-contrast line art where you want purely digital black-and-white output."
  - q: "What file format should I use when scanning photos for restoration?"
    a: "TIFF for archival master files — lossless, preserves all scan data. JPEG at quality 95 or higher as a working copy for uploading to restoration services. Do not save scanner output as JPEG at default settings (typically quality 75-85) — you introduce JPEG compression artifacts before AI restoration even runs, forcing it to work on degraded input. PNG is an acceptable lossless alternative to TIFF for upload."
  - q: "How do I prevent dust and lint from appearing in scans?"
    a: "Clean the scanner glass before every scanning session with a microfiber cloth and 70% isopropyl alcohol applied to the cloth (not directly on the glass). Do not use paper towels — they scratch glass and leave lint fibers. Also clean the white interior of the scanner lid. Brush the original photograph gently with a soft anti-static brush or compressed air before placing it face-down. Even a single dust fiber at 600 DPI becomes a noticeable artifact in the scan."
---

> **Updated 2026-07-02**: Scanner selection guidance, bit depth, and handling sections expanded.

A quality flatbed scanner is the essential tool for serious family photo preservation. It produces archival-quality digital files that capture every detail in original prints — far more information than a phone camera photo of the same print. Understanding scanner settings ensures that AI restoration services receive files with enough data to work from.

This guide covers everything that affects scan quality: scanner selection, DPI by photo type, color mode and bit depth, file format, handling damaged originals, and the most common mistakes that reduce scan quality before restoration begins.

## Why Flatbed Scanning Beats Phone Photography for Restoration

Phone cameras seem like a convenient alternative to flatbed scanners, but they produce fundamentally inferior source files for restoration work.

**Optical vs. captured resolution.** A flatbed scanner captures at true 600 or 1200 DPI — a 4×6 print at 600 DPI produces 2400×3600 pixels of actual scan data. A phone camera photograph of the same print captures the equivalent of 200-300 DPI optical resolution, limited by lens quality, focus accuracy, and the need to hold the phone perfectly still. The pixel count may look comparable, but the actual image data is lower quality.

**Glare and color accuracy.** Phone photography introduces reflections from overhead lighting and from the flash. Flatbed scanners use backlighting from a controlled internal light source — no ambient glare, consistent illumination across the entire surface, and accurate color rendering for both warm-toned and cool-toned photographs.

**Geometry.** Flatbed scanners keep the original print in a fixed plane. Phone photography introduces keystoning, focus variation across the print surface, and lens distortion at the edges. For restoration work, geometric accuracy matters because face shapes, architectural details, and text all depend on correct proportions.

Use a flatbed scanner if you have access to one. Use phone photography only for quick previews or when scanning is unavailable.

## Choosing a Flatbed Scanner for Home Use

Consumer flatbed scanners suitable for photo preservation fall into two price ranges:

**Entry level ($80-150):** Canon CanoScan Lide series, Epson Perfection V30/V39. Adequate for standard 4×6 and 5×7 prints at up to 600 DPI effective. Limited film scanning capability. Good for most family photo projects.

**Mid-range ($150-350):** Epson Perfection V600, Epson Perfection V850. True 6400 DPI optical resolution, better for 35mm film and slides. Film scanning capability with built-in holders. Fluorescent or LED light source with better color accuracy. This range handles most family archive projects including occasional film.

Key specifications to check: optical DPI vs. enhanced (interpolated) DPI — manufacturers advertise interpolated DPI (sometimes 12800 or higher) that has no actual quality benefit. Only optical DPI matters; 600 optical DPI is sufficient for prints. Also verify whether the scanner is marketed as a photo scanner vs. a document scanner — document scanners sacrifice color accuracy and tonal range for speed.

## DPI Settings by Photo Type

| Photo type | Recommended DPI | Resulting file size (approx.) |
|---|---|---|
| Standard prints (4x6, 5x7) | 600 DPI | 12-18 MB TIFF |
| Large prints (8x10) | 600 DPI | 55 MB TIFF |
| Small prints (wallet, 3x3) | 1200 DPI | 20-25 MB TIFF |
| Photos with faces to identify | 1200 DPI | Varies |
| 35mm film negatives | 2400-4000 DPI | 100-300 MB TIFF |
| Medium format film (120) | 1200-2400 DPI | 200+ MB TIFF |
| Slides and transparencies | 2400-4000 DPI | 100-300 MB TIFF |

Scanning above the recommended DPI for standard prints does not improve quality — at that point the scanner is capturing paper surface noise rather than additional image detail. The quality gate for restoration purposes is more often about color accuracy and tonal range than raw pixel count.

## Color Mode, Bit Depth, and File Format

**Color mode:** Scan in color (RGB) for all originals, including black-and-white photographs. Black-and-white prints are not neutral gray — they contain yellowing, tonal variation, and sometimes selenium or sepia toning in their color channels. AI restoration uses all three color channels and benefits from the additional information. Grayscale mode discards the color channel data and limits what restoration algorithms can recover.

**Bit depth:** Scan at 16-bit per channel if your scanner supports it. 16-bit scanning (48-bit total) captures more tonal range than 8-bit (24-bit total) — subtle detail in very dark shadows and very bright highlights is preserved. Most AI restoration services accept 8-bit files; output to 8-bit TIFF or high-quality JPEG for upload, but keep the 16-bit master when possible.

**File format:**
- **TIFF:** Lossless compression. Use for archival masters. No quality loss between scan and final file.
- **JPEG:** Lossy compression. Acceptable for upload files at quality 95 or higher. Avoid default scanner JPEG settings (quality 75-85) — they introduce compression artifacts before restoration runs.
- **PNG:** Lossless, typically smaller than TIFF for photographs. Acceptable alternative to TIFF for upload.

## Handling Fragile Originals

Damaged photographs require additional care before and during scanning.

**Brittle photographs:** Photographs that have gone rigid, cracked, or become fragile should be placed on the scanner glass without force. Forcing a brittle print flat risks cracking the emulsion. Place it as flat as possible and leave the scanner lid open or partially raised — the lid weight can crack fragile prints. The scan software produces a slightly lighter result from the open lid, which is easy to correct in post-processing; a cracked photograph cannot be uncracked.

**Curled prints:** Photographs curled from humidity change should not be pressed flat by force. Place the print in a sealed plastic bag and leave it in a moderately humid room for 24-48 hours — the slight humidity often relaxes the curl enough to scan. Alternatively, scan curled prints by placing weights at the edges to gently hold them flat.

**Water-damaged prints:** Allow water-damaged prints to dry completely before scanning. Wet or damp photographs placed on scanner glass can damage the scanner and may tear during the scan when they stick to the glass.

**Photos stuck together:** Do not force apart photographs that are stuck to each other. See the guide to [fixing photos stuck together](/blog/fix-photos-stuck-together) for safe separation techniques before scanning.

**Photos stuck to glass:** If a photograph is adhered to frame glass, scan it in place through the glass — do not force separation. See [how to restore a photo stuck to frame glass](/blog/how-to-restore-photo-stuck-to-glass).

## Cleaning the Scanner

Dust and smudges on the scanner glass appear as artifacts in scans. At 600 DPI, a dust fiber 0.5mm long appears as a 12-pixel mark — clearly visible in the resulting file.

Before every scanning session: clean the scanner glass with a microfiber cloth with 70% isopropyl alcohol applied to the cloth (not directly to the glass). Avoid paper towels — they scratch glass and leave lint fibers. Clean the white interior of the scanner lid as well — dirty lid material affects brightness calibration for dark-toned photographs. Brush the photograph gently with a soft anti-static brush or use a single short burst of compressed air to remove surface dust before placing it face-down.

After cleaning, scan a blank white sheet to verify there are no remaining marks on the glass before scanning irreplaceable originals.

## Common Scanning Mistakes

**Using enhanced DPI instead of optical DPI:** Software interpolation fills in pixels by averaging neighbors — it does not resolve additional detail. Set the scanner to its optical DPI (typically 600 or 1200) rather than an enhanced setting.

**Scanning in grayscale:** Discards color channel data that AI restoration algorithms use, even for black-and-white photographs.

**Saving directly as JPEG with default quality settings:** Default scanner JPEG compression is usually quality 75-85, which introduces visible artifacts. Always save as TIFF or JPEG quality 95+.

**Not checking the preview before committing to a full scan:** Run a preview scan at low resolution first to verify the photograph is positioned correctly and the lid is closed. Full-resolution scanning of a misaligned print wastes time.

**Skipping scanner warm-up for color-critical work:** Scanner lamps need a warm-up period for accurate color rendering. For color-critical work, run one warm-up pass before scanning the first important photograph.

## After Scanning: What AI Restoration Can Do

Once you have a high-quality scan, AI restoration handles damage that manual editing would take hours to address:

- **Fading and color shift:** Corrects the warm-yellow shift in aging color prints and the flat, low-contrast look of severely faded black-and-white photographs
- **Physical damage:** Repairs scratches, tears, creases, and water stains through inpainting — filling damaged areas with contextually plausible reconstruction
- **Faces:** Enhances face detail specifically, recovering eyes, skin texture, and hair detail that aging and scanning limitations reduce
- **Grain and noise:** Reduces film grain and scan noise while preserving underlying image detail

The quality of the source scan directly limits what restoration can achieve. A 600 DPI color TIFF of the original photograph gives AI restoration the maximum amount of data to work from.

Upload your scan to our [AI photo restoration tool](/old-photo-restoration) to begin. The restored full-resolution download is $4.99 one-time.

## Frequently Asked Questions

### What DPI should I scan old photos for restoration?

600 DPI for standard prints (4×6, 5×7, 8×10). 1200 DPI for small prints (wallet-size, 3×3), photos with faces you want to identify, or any original smaller than 4×6. 2400 DPI or higher for 35mm film negatives and slides. Higher DPI gives AI restoration more information to work with, but scanning a standard 4×6 print at 2400 DPI produces a 70-megapixel file with diminishing returns — the scanner captures paper surface noise rather than additional image detail.

### Should I scan old photos in color mode or grayscale?

Always scan in color mode, even for black-and-white photographs. Black-and-white photographs are not neutral gray — they contain yellowing, toning, and subtle warm or cool cast information in their color channels. AI restoration uses all three color channels when working on black-and-white photos, so a color scan gives it more data than a grayscale scan.

### What file format should I use when scanning photos for restoration?

TIFF for archival master files. JPEG at quality 95 or higher as a working copy for uploading to restoration services. Do not save scanner output as JPEG at default settings (typically quality 75-85) — you introduce JPEG compression artifacts before the AI restoration even runs, forcing it to work on degraded input.

### How do I prevent dust and lint from appearing in scans?

Clean the scanner glass before every scanning session with a microfiber cloth and 70% isopropyl alcohol. Do not use paper towels (they scratch glass) or regular household cleaners. Also clean the white interior of the scanner lid. Brush the original photograph gently with a soft anti-static brush or compressed air before placing it face-down.

---
*Related: [Best DPI for scanning old photos](/blog/what-is-the-best-dpi-for-scanning-old-photos) | [How to scan old photos properly](/blog/how-to-scan-old-photos-properly)*
