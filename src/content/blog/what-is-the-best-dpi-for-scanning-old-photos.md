---
title: "What Is the Best DPI for Scanning Old Photos? A Complete Guide for Every Size"
description: "A practical DPI guide for scanning old photographs — comparing 300, 600, 1200, and 2400 DPI for different print sizes and restoration goals, with specific recommendations for wallet photos, 4x6, and 8x10."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["Photo Scanning DPI", "Old Photo Scanning", "Photo Restoration", "Scanning Guide"]
image: "/blog/ai-restoration-technology.jpg"
coverColor: "from-blue-500 via-indigo-600 to-violet-700"
coverEmoji: "🖨️"
---

The most common question before digitizing a family photograph collection is: what DPI should I scan at? The honest answer is that it depends on three things — the physical size of the original print, what you plan to do with the digital file (AI restoration, printing, web display), and how much storage space you are willing to use. This guide gives direct answers for every common scenario.

## What Does DPI Actually Measure?

DPI stands for "dots per inch" — the number of light sensor samples the scanner takes per linear inch of the original document. At 300 DPI, one inch of photograph becomes 300 pixels wide in the digital file. At 600 DPI, that same inch becomes 600 pixels.

The practical implication: DPI × physical print dimension = pixel dimension.

A 4 × 6 inch photograph at 300 DPI → 1200 × 1800 pixels
A 4 × 6 inch photograph at 600 DPI → 2400 × 3600 pixels
A 4 × 6 inch photograph at 1200 DPI → 4800 × 7200 pixels

More pixels means more information for AI restoration models and more flexibility for printing at larger sizes. But more pixels also means larger file sizes and longer processing times. The goal is to match scan DPI to the genuine information available in the print — scanning above the print's actual optical resolution adds file size without adding genuine detail.

## Is 300 DPI Enough for Old Photos?

300 DPI is the standard minimum resolution for printing at the same size as the original. If you scan a 4 × 6 print at 300 DPI and print the digital file at 4 × 6 at 300 DPI, you have exactly recreated the original size at print-quality resolution.

For AI photo restoration purposes, 300 DPI from a standard print provides adequate but not ideal input. Real-ESRGAN applies 4x upscaling by default, making a 1200 × 1800 pixel input into a 4800 × 7200 pixel output — suitable for printing at approximately 16 × 24 inches at 300 DPI. GFPGAN face enhancement works acceptably at this resolution for standard 4 × 6 photographs where faces occupy a significant portion of the frame.

**300 DPI is sufficient when:**
- The original is 4 × 6 inches or larger
- You want a digital preservation copy without large storage requirements
- The photograph will primarily be viewed on screen or printed at the original size
- Storage capacity is limited

**300 DPI is not ideal when:**
- The original is smaller than 4 × 6 (wallet, 3 × 5, small prints)
- You want maximum quality AI restoration output
- You plan to print the restored version at significantly larger than original size

## Is 600 DPI the Sweet Spot for Most Old Photos?

For most family photograph restoration projects, 600 DPI is the recommended general-purpose resolution. It provides twice the linear resolution of 300 DPI (four times the pixel area), captures the genuine optical detail of most color photographic prints, and produces files large enough for high-quality large-format printing of the restored output.

At 600 DPI:
- A 4 × 6 inch print → 2400 × 3600 pixels → after 4x AI upscaling → 9600 × 14400 pixels → printable at 32 × 48 inches at 300 DPI
- A wallet (2.5 × 3.5 inch) → 1500 × 2100 pixels → sufficient for GFPGAN to work effectively on face regions
- An 8 × 10 inch print → 4800 × 6000 pixels → already very large; 4x upscaling would produce a 19200 × 24000 pixel output

For 8 × 10 and larger prints, 600 DPI produces a genuinely very large file. If storage is a concern, 400 DPI is a reasonable compromise for large prints — it still produces abundant pixel data without the extreme file sizes of 600 DPI on large-format originals.

## When Should You Scan at 1200 DPI?

1200 DPI is appropriate for smaller originals where you need maximum pixel data: wallet photographs, small prints from the early 20th century, photobooth strips, and passport photographs.

**1200 DPI is the recommended setting when:**
- The original is smaller than 3 × 4 inches
- You are scanning a heavily damaged photograph where maximum detail is needed
- You are preserving historically important photographs where archival quality matters
- The photograph will be displayed at very large size (framed 16 × 20 or larger)

For a 2.5 × 3.5 inch wallet photo at 1200 DPI: 3000 × 4200 pixels — excellent input for GFPGAN face enhancement and Real-ESRGAN upscaling. After 4x upscaling: 12000 × 16800 pixels — suitable for printing at 40 × 56 inches at 300 DPI, far larger than any realistic display need.

The practical ceiling for color photographic prints is approximately 600 to 800 DPI of genuine optical detail. Scanning a 4 × 6 inch print at 1200 DPI captures the same genuine image detail as at 600 DPI — you are oversampling the print's resolution limit, producing a file four times larger with the same detail content. For wallet photos and small prints, 1200 DPI makes sense because the smaller physical size means even 1200 DPI captures fewer pixels than 600 DPI from a 4 × 6.

## Should You Ever Scan Old Photos at 2400 DPI?

2400 DPI is appropriate primarily for film-based originals: 35mm slides, 35mm negatives, medium format negatives, and photographic negatives in general.

Film has substantially higher resolution than photographic prints — a good 35mm negative contains detail equivalent to 2400 to 4000 DPI when scanned relative to its 24 × 36 mm frame. Paper prints are created from negatives but cannot exceed the resolution of the print emulsion, which tops out at 600 to 800 DPI for most consumer color papers.

**2400 DPI appropriate for:**
- 35mm slides
- 35mm negatives
- Photographic negatives of any format
- Very small prints (under 2 × 2 inches) where maximum detail is needed

**2400 DPI not useful for:**
- Standard 4 × 6 and larger paper prints
- Most photographic prints from the mid-20th century onward

At 2400 DPI from a 4 × 6 print, you get a 9600 × 14400 pixel file — 138 megapixels — with no more genuine photographic detail than the 34 megapixel file from 600 DPI scanning. The additional pixels are mathematically interpolated noise, not captured detail.

## How Does Scan DPI Affect AI Restoration Quality Specifically?

The three main AI restoration models — NAFNet (denoising), GFPGAN (face enhancement), and Real-ESRGAN (upscaling) — all benefit from higher input resolution, but in different ways and with different ceilings.

**NAFNet** performs better with more pixels because it can more accurately characterize the statistical signature of noise versus genuine texture. At very low input resolution, the model cannot distinguish fine texture from noise as reliably. Above approximately 1000 pixels in the face-relevant dimension of the image, additional resolution shows diminishing returns for denoising quality.

**GFPGAN** benefits from face regions that are at least 128 × 128 pixels in the input, with 256 × 256 or larger producing better results. For a wallet photo with a face occupying 40 percent of the frame, the face region at 300 DPI is approximately 300 × 420 pixels — adequate. At 600 DPI, it is 600 × 840 pixels — good. At 1200 DPI, 1200 × 1680 pixels — excellent.

**Real-ESRGAN** applies the same 4x upscaling regardless of input resolution. More input pixels mean the output is larger, but the quality of the upscaling is primarily determined by the model quality, not the input size, above a minimum threshold of approximately 300 pixels in the shortest dimension.

ArtImageHub's restoration pipeline at $4.99 one-time handles any scan resolution and applies all three models. For best results, scan at the DPI levels recommended in this guide for your specific photo size.

## Frequently Asked Questions

## Does scanning at higher DPI always produce a better restoration result?

Up to the genuine optical resolution of the print, yes — higher DPI captures more real photographic detail and gives the AI models more to work with. Beyond the print's optical resolution limit (approximately 600 DPI for most color prints), scanning higher adds file size without adding genuine detail. For AI restoration specifically, the main benefit of higher DPI is ensuring that face regions have sufficient pixels for GFPGAN to work effectively, and that the 4x upscaling output is large enough for your intended print size. For most 4 × 6 and larger prints, 600 DPI captures all available detail. For wallet photos and small prints, 1200 DPI is genuinely beneficial.

## What happens if I submit a photo that is already very large in pixels?

Submitting a very large image (above approximately 4000 × 6000 pixels) to AI restoration processing can result in longer processing times and, on some platforms, automatic downscaling before processing. ArtImageHub's pipeline handles large inputs, but there is no restoration quality benefit to submitting a file larger than approximately 2400 × 3600 pixels — the maximum that Real-ESRGAN processes at native resolution before its own internal handling. If you have a very large scan from a high-resolution flatbed scanner, consider downscaling to 2400 pixels on the long side before submission to reduce upload time without any quality loss.

## Does the scanner's interpolated DPI setting matter?

No. Interpolated DPI is a marketing specification, not a genuine scanner capability. Optical DPI is the scanner's actual physical sampling resolution — determined by the CCD sensor density. Interpolated DPI applies digital upscaling after the optical scan to produce a larger file, exactly the same as bicubic resampling in any photo editor. Only the optical DPI specification matters for scan quality. Consumer flatbed scanners typically have optical resolutions of 1200 to 4800 DPI. Any setting above the optical DPI is interpolated and adds no genuine detail. Check your scanner's specifications for optical (not interpolated) DPI and use only settings at or below that value.

## Is there a recommended DPI for scanning photos from a smartphone camera?

Smartphone photography does not involve scanning — the DPI concept applies to digitizing physical prints. If you are photographing a physical print with your smartphone to submit for AI restoration, the relevant measurement is the pixel count of the resulting photograph relative to the physical size of the original print. A modern smartphone camera at 12 to 50 megapixels can capture more than adequate detail from a held print. To maximize quality: use the maximum resolution setting, photograph in good diffuse light without flash, hold the phone parallel to the print to avoid perspective distortion, and ensure the print fills most of the frame.

## How much storage space does a photo collection take at different DPI settings?

Approximate file sizes for a 4 × 6 inch print:
- 300 DPI JPEG (quality 90): 1.5 to 3 MB per photo
- 600 DPI JPEG (quality 90): 5 to 10 MB per photo
- 300 DPI TIFF: 6 to 7 MB per photo
- 600 DPI TIFF: 25 to 30 MB per photo
- 1200 DPI TIFF: 100 to 120 MB per photo

For a collection of 500 family photographs, 600 DPI JPEG at quality 90 requires 2.5 to 5 GB — manageable on any modern external drive. 600 DPI TIFF requires 12 to 15 GB. For large collections where TIFF is impractical, high-quality JPEG at 600 DPI is a reasonable compromise that preserves virtually all genuine photographic detail at a fraction of the TIFF file size.
