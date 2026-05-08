---
title: "How to Improve AI Photo Restoration Results: Pre-Processing Tips That Work"
description: "Practical steps you can take before submitting a photograph for AI restoration — scanning format, dust removal, orientation, and preparation choices that measurably improve output quality."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["Photo Restoration Tips", "Photo Scanning", "AI Photo Enhancement", "Old Photo Restoration"]
image: "/blog/ai-photo-enhancement-guide.jpg"
coverColor: "from-rose-500 via-pink-600 to-fuchsia-700"
coverEmoji: "✨"
---

AI photo restoration models — including GFPGAN for faces, Real-ESRGAN for upscaling, and NAFNet for denoising — are powerful, but they are not magic black boxes that compensate for poor input. The quality of a restoration output depends substantially on the quality of the input you provide. Several practical preparation steps, none requiring specialized equipment or expertise, reliably improve restoration results.

Understanding why these steps matter — what the AI models actually see and use in the input — helps you prioritize the preparation that has the largest effect on the output you care about most.

## How Does Scan Format Affect Restoration Quality?

The choice between TIFF and JPEG at the scanning stage creates a real difference in the information available to the AI restoration models, particularly for noise-sensitive steps like denoising.

TIFF is a lossless format: every pixel value the scanner captured is stored exactly as measured. JPEG uses lossy compression: it discards visual information during compression according to psychovisual principles (removing detail that humans are less likely to notice). At JPEG quality 100, the losses are minimal. At JPEG quality 70 or below, visible block artifacts, edge ringing, and color banding appear in the compressed image.

These JPEG compression artifacts are particularly problematic for AI restoration because:

**NAFNet (denoising) may misread them as image noise.** Compression artifacts have spatial patterns that overlap with noise, causing the denoiser to attempt to remove them and potentially smooth genuine image detail in the process.

**Real-ESRGAN may amplify them during upscaling.** The upscaling model synthesizes high-frequency detail based on patterns in the input. Block artifacts from JPEG compression can be interpreted as genuine texture and amplified, producing an output with subtle but visible gridded texture.

**GFPGAN face enhancement is affected by boundary artifacts around face regions.** Compression artifacts at the boundaries between the face region and the background can create seam-like artifacts in the face enhancement output.

For best results: scan as TIFF or use JPEG at quality 90 or higher. If you already have an existing JPEG scan at high quality, it is typically fine to submit directly — the improvement from rescanning as TIFF is small at quality 90+. If you have a JPEG at quality 70 or below, rescanning at high quality is worth the effort for important photographs.

## Does Removing Dust Before Scanning Improve AI Restoration Results?

Yes, substantially. Physical dust and debris on the photograph surface are scanned as sharp, high-contrast artifacts — bright or dark specks with defined edges. These are distinct from the gradual degradation of film grain or blur, and AI models handle them differently.

Film grain has statistical properties (spatial scale, distribution, relationship to scene luminance) that NAFNet has learned to identify and remove. Dust specks do not share these statistical properties: they appear as random sharp artifacts with arbitrary sizes, shapes, and positions.

For small dust particles (a few pixels across), NAFNet typically removes them effectively as part of general denoising. For larger debris — hair strands, significant dust specks, small fibers — the denoiser may partially smooth them but leave visible artifacts, or may preserve them entirely as apparent image features.

Cleaning the photograph surface before scanning is the most reliable way to handle this: no AI model removes dust as effectively as simply not having dust in the scan.

**How to clean safely**: Use a clean, soft, dry brush — a photographic lensbrush or soft watercolor brush work well. Brush gently across the surface in one direction to lift and remove loose dust. For lint and small fibers, a lint-free cloth or air blower (not compressed air, which can damage delicate emulsion) is effective. Avoid touching the image surface with fingers, as fingerprint oils are more difficult to remove.

## How Does Correct Orientation Improve Face Enhancement?

Face enhancement with GFPGAN relies on a face detection step that identifies face regions in the image before applying the face prior. Face detection models are trained primarily on upright faces and have substantially higher detection rates for faces within approximately 30 to 45 degrees of vertical.

Submitting a photograph that is sideways (90 degrees rotated) or upside-down causes GFPGAN's face detection to miss faces or detect them with lower confidence. When a face is not detected, GFPGAN skips the face enhancement step for that region — the output in the face area is the result of Real-ESRGAN general upscaling rather than dedicated face restoration. The difference in face quality between GFPGAN-enhanced and non-enhanced regions is substantial.

Before submitting a scan, rotate the digital file so that faces appear right-side up. This takes approximately ten seconds in any photo viewer and reliably improves face enhancement results.

Additionally, cropping extreme black borders before submission (common when scanning smaller prints on a larger scanner bed) removes dead border area that the model might otherwise process, allowing it to allocate more processing resources to the actual photograph content.

## Are There Pre-Processing Steps That Can Reduce Restoration Artifacts?

Several pre-processing choices reduce the frequency of visible restoration artifacts in the output:

**Avoid digital sharpening before submission.** Some scanning software applies automatic sharpening during scan processing. Sharpening introduces halo artifacts at edges — bright lines along dark edges, dark lines along light edges. These halos are indistinguishable from certain types of degradation and can be amplified or interfere with the deblurring step. If your scanning software has a sharpening option, disable it before scanning photographs for AI restoration. Let the AI models handle sharpening.

**Do not apply color correction or contrast enhancement before submission.** Automatic color correction and contrast enhancement applied by scanning software or photo editing tools can clip shadows and highlights (pushing pixels to pure black or pure white), removing detail that the AI model could otherwise recover. Submit the raw, unprocessed scan to preserve maximum tonal range.

**Submit the scan at native resolution without digital upscaling.** If you have a 1200 × 1800 pixel scan, submit it at that size. Do not pre-upscale it to 2400 × 3600 with bicubic resampling and then submit the larger file — this adds no genuine information but substantially increases the file size and may trigger compression when uploaded. AI restoration models are designed to apply upscaling themselves. Pre-upscaling wastes time and storage without improving results.

## How Should You Handle a Photograph That Has Already Been Digitally Processed?

Many family photo collections include scans or digital copies that were already processed — scanned in the early 2000s with automatic color correction applied, or edited in photo software and saved as low-quality JPEG. The original physical photograph may no longer be accessible.

For already-processed digital copies, the approach changes:

- Accept that tonal clipping cannot be reversed. If detail was removed by previous processing, AI cannot recover it.
- Submit the best-quality version of the digital file you have — the highest-resolution, least-compressed version.
- If you have multiple versions (different sizes, different quality levels), submit the largest high-quality version.
- AI restoration can still meaningfully improve these files: noise reduction, face enhancement, and upscaling all apply regardless of how the file was originally processed.

The improvement from AI restoration on already-processed files is typically smaller than on fresh high-quality scans, but still meaningful for photographs where physical access to the original is not possible.

## Frequently Asked Questions

## Does removing stains or tape from a photograph before scanning help?

It depends on the type of stain or attachment. For adhesive tape that is covering image content, professional removal by a photo conservator before scanning can reveal covered content that would otherwise be hidden. Attempting amateur tape removal risks damaging the underlying emulsion if the adhesive has bonded to the photograph surface. For surface stains that discolor but do not physically obscure the emulsion (water stains, mold blooms on the surface), AI restoration's inpainting and color correction capabilities can address these effectively in the digital domain — professional physical cleaning may still be worthwhile but is not required before scanning. Submitting the photograph as-is and letting AI handle surface stains produces good results in most cases.

## Does scanning in grayscale versus color mode affect restoration for black and white photos?

For black and white photographs, scanning in color (RGB) mode rather than grayscale produces a slightly larger file but captures any tonal variation in the paper — the warmth of aged paper, sepia toning, and subtle color variation in aged silver gelatin prints. This additional color information is useful for the AI model: DDColor (colorization) and the color correction aspects of the restoration pipeline use it. Grayscale mode discards this information and reduces the file to luminance only. For photographs destined for colorization, always scan in color mode. For pure black and white preservation without colorization, grayscale is acceptable but color mode is still preferable since it preserves more information for the denoising and enhancement steps.

## Should I scan the back of a photograph as well as the front?

Scanning the back of the photograph is useful for archival purposes — the back often contains handwritten notes, dates, photographer stamps, and processing information that provides historical context. This information is useful for genealogy research and archival documentation. For AI restoration purposes, only the front (image side) scan is submitted for processing. Consider scanning both sides and keeping both in your archive regardless of which version is submitted for restoration.

## How much does incorrect white balance at scan time affect restoration results?

White balance error at scan time shifts all colors in the scanned image toward warm (yellowish) or cool (bluish) tones. For color photographs, significant white balance error means the AI model's color correction and DDColor colorization steps are working from incorrect baseline color information. The restoration pipeline applies color normalization, which corrects mild white balance errors automatically. For severe color casts (strongly yellow or blue images), submitting a white-balanced scan produces better colorization results than submitting an uncorrected scan. Most modern scanner software applies automatic white balance by default. If your scanner software has manual white balance settings, the auto setting is typically appropriate.

## Is it better to submit a photograph with existing restoration work already applied, or start from the damaged original?

Start from the damaged original whenever possible. Existing restoration work applied by an earlier generation of tools (early 2000s automated restoration software, manual Photoshop retouching) may have introduced artifacts — oversharpening halos, posterized color, smeared texture — that the current AI pipeline then processes and potentially amplifies. The current generation of AI restoration models — GFPGAN, Real-ESRGAN, NAFNet — are substantially more capable than tools from ten years ago and produce better results applied to original damaged photographs than to previously-processed outputs. If you have both the original damaged photograph and a previously-restored version, submit the original for the best results.
