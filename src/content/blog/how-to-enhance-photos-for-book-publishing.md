---
title: "How to Enhance Photos for Book Publishing: Resolution, DPI, and AI Upscaling"
description: "Publisher-ready photo enhancement: 300 DPI requirements, TIFF vs JPEG, CMYK vs RGB, Real-ESRGAN upscaling vs drum scanning, and KDP Print resolution specs."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["Book Publishing", "Photo Enhancement", "Real-ESRGAN", "Print Quality"]
image: "/images/blog/how-to-enhance-photos-for-book-publishing.jpg"
coverColor: "#f5f0eb"
coverEmoji: "📖"
faq:
  - question: "What resolution do I need for a photo in a printed book?"
    answer: "The publishing standard is 300 DPI at the final print size — not the file's native resolution, but the resolution at the actual dimensions the image will appear on the page. A photograph that will print at 6 inches wide needs at least 1800 pixels across (6 inches times 300 DPI). An image printing at 4 inches wide needs 1200 pixels minimum. The confusion arises when photographers look at a file's megapixel count rather than calculating the actual print-size DPI. A 12-megapixel image that is 4000 by 3000 pixels prints beautifully at 5 by 3.75 inches at 300 DPI, but would be below standard quality at 10 by 7.5 inches where it drops to 200 DPI. Always calculate: pixels divided by inches equals DPI. If that number is below 300, the image needs upscaling or the print size needs to be reduced."
  - question: "Can Real-ESRGAN upscaling replace professional drum scanning for book printing?"
    answer: "For most family memoir, self-published book, and photo book applications, Real-ESRGAN AI upscaling produces results that are indistinguishable from drum scanning in print. The difference becomes relevant at the extreme end: images being reproduced at very large size in premium coffee-table books printed on high-end litho presses, or photographs that will be critically reviewed by imaging professionals who will examine them with loupes. For KDP Print, Ingram Spark, and similar self-publishing platforms at standard book sizes, Real-ESRGAN output at the required resolution is fully adequate. Drum scanning costs $50 to $200 per image depending on size and the lab; AI upscaling via ArtImageHub costs $4.99 one-time for unlimited images. For a 50-photo family memoir, the economics are clear."
  - question: "Should I submit photos as TIFF or JPEG to a publisher?"
    answer: "Submit TIFF to any publisher that accepts it. TIFF is lossless — every pixel is preserved exactly — which means the printer receives the exact image you prepared. JPEG uses lossy compression that discards pixel data permanently; each time a JPEG is opened, edited, and saved, it loses additional quality, and the compression artifacts become visible in print at high magnification. Most traditional publishers require TIFF. Self-publishing platforms including KDP Print and Ingram Spark accept high-quality JPEG at 300 DPI, but they specify TIFF for best results. The practical workflow: work in TIFF throughout your preparation process, including the AI enhancement step, and export to whatever format your specific platform requires at the final step. Never use JPEG as your working format."
  - question: "Do I need CMYK color mode for book printing?"
    answer: "It depends on the printer. Traditional offset lithography printing — used by most commercial publishers — requires CMYK source files, because the printing process lays down four physical ink layers: Cyan, Magenta, Yellow, and Black. Submitting RGB to an offset printer means the printer's software converts for you, which introduces color shifts you cannot preview or control. However, KDP Print and Ingram Spark use digital printing processes that accept and convert RGB files themselves. These platforms recommend submitting in sRGB color space. For traditional publishers, always ask for their specific color space requirements. For self-publishing platforms, submit sRGB and use their provided color profiles to preview. Converting to CMYK yourself before submitting to a platform that expects RGB will produce incorrect colors."
  - question: "What are KDP Print and Ingram Spark's actual photo resolution requirements?"
    answer: "KDP Print requires images to be at minimum 300 DPI at the intended print size, submitted in RGB color space, with files in PDF format containing embedded images. Ingram Spark requires 300 DPI minimum, accepts both PDF and EPUB, and recommends sRGB for color photos. Both platforms provide downloadable cover and interior templates that include guides for safe zones and bleed areas. Photos that extend to the page edge require a 0.125-inch bleed — the image must extend beyond the trim line so there is no white edge after cutting. Both platforms provide a digital proof before printing that shows how photos will actually appear; always review the digital proof at full zoom before approving. For interior black-and-white photos, both platforms print in true grayscale, so convert color images to grayscale before embedding in the interior PDF."
---

> **Editorial trust notice**: This guide is published by [ArtImageHub](https://artimagehub.com), an AI photo restoration service. Upscaling uses Real-ESRGAN; face restoration uses GFPGAN. Print resolution and color space specifications are cross-referenced with KDP Print and Ingram Spark publisher documentation current as of 2026.

## Quick Answer

> **For book publishing**, the core requirement is 300 DPI at your exact print size. [ArtImageHub](https://artimagehub.com/photo-enhancer) uses Real-ESRGAN to upscale photos to the required pixel dimensions — **$4.99 one-time, unlimited HD downloads**. The guide below covers the full specification chain from scan to printer-ready file.

Publishing a book with photographs — whether a family memoir, a self-published photography book, or a history project — runs into the same technical barrier every time: the photos that look fine on screen fall short of print resolution requirements. Here is the condensed version of what you need to know:

- 300 DPI at the actual print size is the universal minimum — calculate pixels divided by print inches, not your file's nominal resolution.
- A 6-inch wide image at 300 DPI requires 1800 pixels minimum; most old scanned photos are below this.
- Real-ESRGAN AI upscaling closes the gap for most family memoir and self-publishing applications.
- TIFF format throughout; JPEG only for final output to platforms that require it.
- CMYK for offset printing; sRGB for KDP Print and Ingram Spark.

---

## Why Do Photos That Look Sharp on Screen Look Blurry When Printed?

Screen displays show approximately 72–96 pixels per inch. A photograph with 800 pixels across its width looks fine on a laptop screen — that 800 pixels covers the 8-inch screen width at about 100 PPI, which your eye accepts as sharp. Print a photograph 6 inches wide at 800 pixels, and you have about 133 DPI — well below the 300 DPI threshold where print sharpness becomes noticeably degraded.

This gap between screen sufficiency and print requirements is why so many book projects hit problems at the production stage. The photographs were selected and placed in the layout based on how they looked on screen, and the resolution problem only becomes visible when the physical book arrives.

The calculation every publisher uses is simple:

**Pixel width divided by print width in inches = DPI at that print size**

An image at 2400 pixels wide, printing 8 inches wide: 2400 / 8 = 300 DPI. Exactly at the minimum.

The same image, printing at 10 inches wide: 2400 / 10 = 240 DPI. Below standard.

The same image, printing at 6 inches wide: 2400 / 6 = 400 DPI. Comfortably above minimum.

This is why the correct approach is not to set a target number of megapixels but to calculate the specific DPI for each image at its specific print size in your layout.

## What Publishers and Book Designers Actually Look For

When a book designer or production editor reviews photographs submitted for a book, they are checking several things in a specific order:

**Resolution at print size.** This is the non-negotiable first check. Files below 300 DPI at print size will be flagged for replacement or size reduction before any other evaluation happens.

**File format.** TIFF for traditional publishing workflows; PDF with embedded images for self-publishing platforms. A JPEG submitted where TIFF was required will often be rejected, or accepted with a warning that print quality cannot be guaranteed.

**Color mode and profile.** RGB versus CMYK, and which specific color profile (sRGB, AdobeRGB, CMYK US Web Coated SWOP). An image in the wrong color space may print with unpredictable color shifts.

**Tone and density.** Print ink does not reproduce the full luminance range of a screen. Images with very dark shadows or very bright highlights may lose detail in print. Book designers typically ask for images with good midtone contrast and detail retained in both highlights and shadows.

**Consistency across the book.** When multiple photographs appear throughout a book, they should have consistent tonal quality, color temperature, and grain character. A set of family photographs where some are warm-toned and some are cool-toned, or some are sharp and some are soft, reads as inconsistent and unprofessional.

## Understanding Real-ESRGAN AI Upscaling for Print

Real-ESRGAN is an AI super-resolution model that increases image resolution by analyzing the existing pixel structure and generating additional pixels based on learned patterns from millions of images. The critical word is "generating" — Real-ESRGAN is not interpolation (which simply stretches existing pixels into a blurry larger image). It synthesizes new detail based on what the surrounding pixels suggest should be there.

For photographic content, Real-ESRGAN typically produces upscaled results that print well even when the source image is significantly below the target resolution. A 600-pixel-wide portrait, upscaled 4x to 2400 pixels, often prints acceptably at 6 inches wide (400 DPI) because the AI correctly recovers edge sharpness, texture, and tonal gradients that interpolation would blur.

The cases where Real-ESRGAN upscaling is not sufficient for print:

- Very low-resolution source images (below 200 pixels in any dimension) upscaled to large print sizes (8 inches or more). At this level, the AI has too little information and the invented detail becomes speculative enough to look wrong under close examination.
- Images with extremely fine printed text or linework that must be reproduced with precise sharpness. Real-ESRGAN handles photographic content better than it handles fine graphic elements.
- Premium coffee-table book production where a printing specialist will examine final output with a loupe before approval. At this production level, drum scanning of the original print is still warranted for critical images.

For the vast majority of family memoir, genealogy book, and self-published book applications, Real-ESRGAN through [ArtImageHub](https://artimagehub.com) provides more than adequate print quality at $4.99 one-time for unlimited images — compared to $50–200 per image for drum scanning.

## GFPGAN Face Enhancement for Portrait-Heavy Books

Many family memoir and genealogy books center on portraits — grandparents, ancestors, military service photos, wedding portraits. These photographs often come from aging original prints or early digital scans where face detail is soft, blurry, or partially degraded.

GFPGAN, the face restoration model at [ArtImageHub](https://artimagehub.com), specifically targets facial regions for reconstruction. It recovers eye detail, sharpens facial contours, reconstructs soft skin texture, and brings out expression that was present in the original but lost to time, blur, or scanning limitations.

For a portrait that will print at 4 inches wide in a book, GFPGAN improvement in facial sharpness is the difference between a recognizable face and a clearly sharp one — which at print size is visible and meaningful to readers who knew the subject.

Run GFPGAN alongside Real-ESRGAN for any portrait that will appear at significant size in the book. The combined enhancement — upscaling plus face-specific detail recovery — produces the best result for print.

## TIFF vs JPEG: The Working Format Rule

For book publishing preparation, the rule is simple: TIFF for everything except the final platform-specific output file.

TIFF (Tagged Image File Format) is lossless. No pixel information is discarded when saving. You can open, edit, and re-save a TIFF file a thousand times without degradation.

JPEG (Joint Photographic Experts Group) is lossy. Each save cycle discards approximately 10–30% of pixel variation information using an algorithm that prioritizes smooth gradients over fine detail. Save a JPEG ten times through normal editing and the artifacts become visible in print.

The practical workflow:

1. Scan original photographs at 600–1200 DPI and save as TIFF.
2. Upload to [ArtImageHub](https://artimagehub.com) for enhancement, download the HD result.
3. Do any color correction or tonal adjustment work in Photoshop or GIMP, saving as TIFF.
4. At the final step, export to whatever format your specific platform requires: TIFF for traditional publishers, PDF for KDP Print or Ingram Spark, high-quality JPEG (95%+) only if the platform requires it.

Never use JPEG as a working format. Never open a JPEG, edit it, and save it back as JPEG. The degradation compounds.

## CMYK vs RGB: Choosing the Right Color Space

The color mode question depends entirely on who is printing the book and which printing process they use.

**Traditional offset lithography** (used by most commercial publishers with print runs above 1000 copies) requires CMYK. The printing process lays down physical cyan, magenta, yellow, and black ink layers. Every color in the final print is a combination of these four inks. When you submit an RGB file to an offset printer, their software converts it to CMYK using a standard algorithm — which may or may not produce the color result you intended. For traditional publishing, request the printer's specific CMYK profile and do the conversion yourself so you can see the result.

**Digital printing** (used by KDP Print, Ingram Spark, and most print-on-demand services) is a different process that does not require CMYK source files. These platforms accept RGB images and handle the color rendering internally. Submit in sRGB, which is the standard RGB color space for consumer photography and web use. AdobeRGB, a wider-gamut RGB space, is also accepted but the wider gamut does not benefit print-on-demand because the printing process cannot reproduce it.

**The NAFNet denoising step** at ArtImageHub also applies to book publishing preparation: grain and noise that is invisible on screen can appear visibly noisy in print at high DPI, particularly in large smooth areas like skies or walls. Running NAFNet before the final export reduces this risk.

## KDP Print and Ingram Spark: Platform-Specific Requirements

**KDP Print (Amazon):** Requires 300 DPI at print size; accepts PDF with embedded images; color photos in sRGB; grayscale interior photos in grayscale mode; 0.125-inch bleed for images extending to page edges. Their Cover Creator tool and interior template downloads are the right starting point for layout. The digital proof tool shows the actual print rendering; always review before approving.

**Ingram Spark:** Requires 300 DPI; accepts PDF; recommends sRGB for color, grayscale for black-and-white interior photos; 0.125-inch bleed. Ingram reaches a wider distribution network than KDP alone, which makes it the preferred choice for books being sold through bookstores and non-Amazon channels. Their file review tool checks resolution and flags images below the threshold before you submit.

Both platforms offer a physical proof copy option before committing to full distribution. For a photo-heavy book, ordering a physical proof is non-optional — screen rendering and print rendering differ in ways that only become visible in the physical object.

## Scanning Old Prints for Book Quality

Old family photographs being scanned for book inclusion typically need to be scanned significantly higher than the 300 DPI target, because the scan will be used at print size — and the print DPI calculation works against you when the original print is small.

A 3.5x5-inch snapshot that will be reproduced 5 inches wide in the book needs 1500 pixels across (5 x 300 = 1500). The original is only 3.5 inches wide physically. To capture 1500 pixels from a 3.5-inch original, you need to scan at 1500/3.5 = 430 DPI. Since you always want some safety margin, 600 DPI for standard prints and 1200 DPI for wallet-size or small-format originals is the correct scanning target for book publication.

After scanning, run through [ArtImageHub's](https://artimagehub.com) Real-ESRGAN enhancement to further sharpen and upscale. The combination of a high-resolution scan and AI upscaling produces the most robust result for the print workflow.

---

For more on scanning best practices, see our guide on [how to digitize old photos](/blog/how-to-digitize-old-photos).

For portrait-specific enhancement, see our guide on [old family portrait restoration](/blog/enhance-old-family-portraits).

Start enhancing your book photos at [ArtImageHub](https://artimagehub.com/photo-enhancer) — $4.99 one-time, unlimited HD downloads, preview before you pay.
