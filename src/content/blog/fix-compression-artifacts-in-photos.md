---
title: "How to Fix Compression Artifacts in Photos: AI Artifact Removal Guide"
description: "JPEG compression artifacts — the blocky, banded patterns that appear in shared or downloaded photos — are one of the most common image quality problems. This guide explains how DCT compression works, what causes artifacts, and how SwinIR AI removes them cleanly."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Alicia Ferreira-Dos Santos"
authorRole: "Digital Imaging Engineer"
authorBio: "Alicia has spent a decade working on image quality pipelines for consumer electronics and cloud photo storage platforms, with deep expertise in lossy compression standards and perceptual quality metrics. She writes about practical image quality solutions for photographers and developers."
category: "How-To"
tags: ["JPEG Artifacts", "Compression Artifacts", "Photo Quality", "Image Restoration", "Photo Enhancement"]
image: "/blog/fix-compression-artifacts-in-photos.jpg"
coverColor: "from-purple-500 via-fuchsia-600 to-pink-700"
coverEmoji: "🔧"
faq:
  - question: "What exactly are JPEG compression artifacts and what causes them?"
    answer: "JPEG compression works by dividing the image into 8x8 pixel blocks and transforming each block using the Discrete Cosine Transform (DCT), which represents the block as a combination of frequency patterns. At high quality settings, most frequency information is preserved. At lower quality settings — used by social media platforms, messaging apps, and web servers to reduce file size — high-frequency detail is discarded. When this compressed data is decoded and displayed, the boundaries between adjacent 8x8 blocks become visible because each block was processed independently with slightly different frequency content. The result is the characteristic 'blocky' pattern you see in compressed photos, especially in areas that should be smooth — skin, sky, walls, and gradients. Secondary artifacts include 'ringing' — wavy oscillation patterns near sharp edges — and 'banding' — staircase transitions in areas that should be smooth gradients. These are all mathematical byproducts of DCT compression and they become more visible at lower JPEG quality settings. SwinIR at /jpeg-artifact-remover is trained to recognize and reverse all of these patterns."
  - question: "Why do photos develop artifacts after being shared on social media or via messaging?"
    answer: "Every time a photo passes through a social media platform or messaging app, it is recompressed to reduce storage and bandwidth costs. Facebook reduces uploaded photos to approximately 200-300 KB regardless of original size. Instagram recompresses photos both at upload and when they are downloaded or screenshotted. WhatsApp in standard mode compresses photos to 200-400 KB. Each of these platforms applies JPEG compression independently, and the effects are cumulative. A photo shared three times through different platforms has been through three separate compression stages, each adding its own blocking pattern. The resulting image shows more severe artifacts than any single compression stage would produce, because each stage re-compresses already-compressed data — a process that introduces new artifacts on top of existing ones and does not recover the detail discarded in previous stages. AI artifact removal at /jpeg-artifact-remover is specifically designed to handle this multi-stage compression damage, not just single-pass JPEG artifacts."
  - question: "How does SwinIR remove JPEG artifacts without destroying image detail?"
    answer: "SwinIR (Swin Transformer for Image Restoration) uses a self-attention mechanism that can look at large spatial neighborhoods when processing each pixel — up to the full image rather than just the local 8x8 block neighborhood that convolution-based models see. This is significant for artifact removal because JPEG blocking is spatially structured: the block boundaries appear at regular 8x8 intervals, and the ringing artifacts around edges extend several pixels beyond the artifact source. SwinIR learns to distinguish between the structured patterns of JPEG compression (the blocking grid, the ringing oscillations, the banding transitions) and the genuine detail in the image (skin texture, fabric weave, hair, foliage). The training process uses paired examples: artificially compressed images alongside their uncompressed originals. After training on millions of these pairs at various quality levels, SwinIR can remove the artifact patterns while preserving the image content that should remain. The result is a clean image with smooth gradients where compression introduced banding and clear edges where ringing made them oscillate, without the over-sharpened look that conventional unsharp masking produces."
  - question: "What is the difference between sharpening and artifact removal?"
    answer: "Sharpening and artifact removal are frequently confused because both can make a soft or muddy-looking photo appear more defined. They work on fundamentally different problems. Sharpening increases the contrast gradient at edges — it makes transitions between light and dark areas steeper, which the visual system reads as greater sharpness. Applied to a photo with JPEG artifacts, sharpening amplifies the existing block boundaries and ringing patterns, making artifacts worse and more visible rather than removing them. Artifact removal, as implemented by SwinIR at /jpeg-artifact-remover, specifically targets the mathematical patterns introduced by DCT compression and removes them, leaving genuine image content intact. After artifact removal, the image can then benefit from sharpening or upscaling if needed — but applying sharpening first to a heavily compressed image typically degrades the final result. For photos that need both artifact removal and resolution improvement, the recommended workflow is: artifact removal first, then upscaling with Real-ESRGAN at /photo-enhancer second."
  - question: "Can AI artifact removal recover a photo that was saved at very low JPEG quality?"
    answer: "The degree of recovery possible depends on how much information the compression discarded. JPEG quality settings range from 1 to 100 — web images are typically 60-85, heavily compressed platform images may be 30-50, and very degraded images can be 10-30. At quality settings above 50, most image information is present but disguised by blocking and ringing patterns — SwinIR can recover clean, detailed images from these. At quality settings of 20-50, more detail has been discarded but the underlying structure remains recoverable — artifact removal produces a significant improvement, though some fine texture will not return. At quality settings below 20, the compression has discarded so much information that recovery is partial — artifact removal improves the image's appearance significantly by removing the patterned blocking, but the resulting image will lack fine texture detail that was genuinely discarded. For these very low quality images, running artifact removal at /jpeg-artifact-remover followed by Real-ESRGAN upscaling at /photo-enhancer produces the best achievable result, though it cannot restore information that was permanently discarded."
---

> **⚡ Remove JPEG artifacts from your photos now**: [fix compression artifacts](/jpeg-artifact-remover) · [upscale after cleanup](/photo-enhancer) · [sharpen blur](/photo-deblurrer) · [remove grain](/photo-denoiser) · [restore old photos](/old-photo-restoration) · [colorize black-and-white](/photo-colorizer). One-time $4.99 per tool — HD download, no watermark, no subscription.

The blocky, banded, slightly muddy quality that photos develop after being shared on social media or through messaging apps is not mysterious — it is the predictable result of how JPEG compression works. Once you understand the mechanism, you also understand what AI artifact removal can and cannot recover. This guide covers both.

## What is DCT compression and why does it create blocky artifacts?

JPEG compression uses the Discrete Cosine Transform (DCT), a mathematical operation that represents image data as combinations of frequency patterns rather than raw pixel values. High-frequency patterns (fine texture, sharp edges) require more data to represent. By discarding high-frequency components, JPEG achieves significant file size reduction — at the cost of image quality.

The specific pattern of quality loss follows from the compression architecture:

**8x8 block processing creates boundary artifacts.** DCT is applied independently to each 8x8 pixel block in the image. At high quality settings, the blocks fit together seamlessly. At lower quality settings, each block is quantized (rounded to a coarser representation) independently, so adjacent blocks can have slightly different tonal values at their boundaries. This creates the characteristic grid pattern — visible as faint to severe rectangular lines across the image.

**High-frequency discard creates ringing.** When the high-frequency DCT components are discarded, sharp edges in the image lose their clean transition and gain oscillating "ringing" artifacts on both sides — like ripples from a stone dropped in water. Text, hard edges of objects, and fine detail like fabric weave all show ringing at low JPEG quality.

**Smooth gradients develop banding.** Gradients — areas where color or tone transitions smoothly — require many DCT coefficients to represent accurately. At low quality settings, these smooth transitions are represented with fewer coefficients and produce visible staircase-like bands where the transition should be continuous.

The [JPEG artifact remover](/jpeg-artifact-remover) uses SwinIR to reverse all three of these artifact types.

## How does social media compression damage photos multiple times?

When you upload a photo to Instagram, Facebook, Twitter, or a messaging platform, the platform immediately recompresses it — typically to a target file size or bitrate regardless of your original quality. When someone downloads or screenshots that photo and shares it again, it gets recompressed a second time. By the third or fourth share, the compression artifacts are often severe.

**The compounding problem.** Re-compressing an already-compressed JPEG is worse than a single compression at the same target quality, because each compression stage treats the artifact patterns from the previous stage as image content and introduces new artifacts on top of them. A photo compressed three times at "medium" quality has more visible artifacts than a photo compressed once at "low" quality, because the intermediate stages have created conflicting artifact patterns that the final stage cannot resolve cleanly.

**Platform-specific behavior:**

- **Instagram** recompresses at upload (targeting 1080px wide) and again when photos are downloaded from the CDN. Stories are compressed more aggressively than feed posts.
- **WhatsApp** in "Photo" mode applies significant compression (200-400 KB target). The "Document" mode sends the original file uncompressed.
- **Facebook** compresses profile and cover photos more aggressively than photo album uploads.
- **Twitter/X** recompresses all uploaded images and strips metadata.
- **Email attachments** often pass through antivirus scanning systems that may recompress images as a byproduct.

The practical recommendation: for any photo you want to preserve quality on, retain the original file and only share edited or compressed versions. The [JPEG artifact remover](/jpeg-artifact-remover) can recover quality from already-shared versions, but starting from the original is always better.

## How does SwinIR remove compression artifacts?

SwinIR (Swin Transformer for Image Restoration) represents a significant architectural advance over earlier CNN-based artifact removal tools. The key difference is the scope of spatial context the model can access.

**Convolution versus attention.** Traditional convolutional neural networks process each pixel using a small local neighborhood — typically 3x3 or 5x5 pixels. For artifact removal, this is limiting because JPEG block boundaries extend across the full image in a regular grid pattern. A model with small receptive field cannot see the full extent of the pattern it needs to remove.

SwinIR uses a Shifted Window Self-Attention mechanism that allows each pixel to attend to a large, configurable neighborhood — in practice, the model can see across much of the image when processing any given pixel. This allows it to:

- Recognize the regular 8x8 grid pattern of JPEG blocks across the full image
- Distinguish between the artifact pattern and genuine image structure
- Apply spatially consistent corrections that respect the global block structure rather than making local corrections that can introduce new inconsistencies

**Training on paired data.** SwinIR is trained on millions of paired examples — uncompressed images alongside their JPEG-compressed versions at various quality levels. This training teaches the model the precise relationship between compression patterns and original content, allowing it to invert the compression damage rather than simply smoothing it.

## What is the recommended workflow for removing compression artifacts?

**Step 1: Identify artifact severity.** Open the photo at 100% zoom. Mild compression (web images, lightly shared social photos) shows subtle blocking in smooth areas. Severe compression (heavily shared or heavily platform-recompressed images) shows visible grid patterns across the full image, strong ringing around text and edges, and obvious color banding.

**Step 2: Artifact removal first.** Upload to the [JPEG artifact remover](/jpeg-artifact-remover). For mild compression, this single step often produces a clean, usable result. For severe compression, artifact removal creates a cleaner base for subsequent enhancement.

**Step 3: Upscale if needed.** If the photo also needs resolution improvement — it is small, or it will be printed at a large size — upload the artifact-removed result to the [photo enhancer](/photo-enhancer). Running Real-ESRGAN upscaling after artifact removal rather than before it produces better results because the upscaler works from clean input.

**Step 4: Deblur if motion blur is also present.** Photos from social media that were also blurry before compression benefit from the [photo deblurrer](/photo-deblurrer) after artifact removal.

**Step 5: Denoise if grain is present.** Photos taken in low light that were then compressed show both grain and blocking artifacts. Run the [photo denoiser](/photo-denoiser) after artifact removal to address the underlying grain.

## When should you use artifact removal versus other enhancement tools?

If the primary problem is the blocky/banded/ringing pattern from compression, the [JPEG artifact remover](/jpeg-artifact-remover) is the correct first tool. If the problem is directional blur (motion or camera shake), start with the [photo deblurrer](/photo-deblurrer). If the problem is grain from high ISO, start with the [photo denoiser](/photo-denoiser). If the photo is simply too small for its intended use, start with the [photo enhancer](/photo-enhancer).

For photos with multiple issues — which is common in photos that have been shared many times — the general sequence is: artifact removal → denoise → deblur → upscale. Each tool works best on clean input, so removing the most structured artifact first (DCT blocking) produces the cleanest chain.

Old photos, particularly those scanned at low resolution or photographed with a phone camera, often benefit from the [old photo restoration](/old-photo-restoration) pipeline, which handles the combination of physical print degradation and digital compression. Historical black-and-white photos also have the option of AI colorization at [photo colorizer](/photo-colorizer) using DDColor for historically informed color.

> **Fix your compressed photos now.** The [JPEG artifact remover](/jpeg-artifact-remover) removes the blocking, banding, and ringing that social media and messaging apps add to your photos. $4.99 one-time — HD download included, no subscription, no watermark.
