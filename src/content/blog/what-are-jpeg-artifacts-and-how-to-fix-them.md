---
title: "What Are JPEG Artifacts and How Do You Fix Them? (Complete Guide)"
description: "JPEG artifacts are the blocky, blurry distortions that compression creates in your photos. Learn the 5 types, why social media makes them worse, and how AI-powered SwinIR removes them precisely."
publishedAt: "2026-05-07"
author: "Wei Zhang"
authorRole: "Digital Media Engineer & Photography Educator"
authorBio: "Wei Zhang has spent over twelve years studying digital image compression and educating photographers on quality-preserving workflows. He writes and teaches on the intersection of signal processing and practical photography."
category: "Education"
tags: ["JPEG Artifacts", "JPEG Compression", "Photo Quality", "Photo Fix", "Technical Guide"]
coverColor: "from-orange-500 via-red-600 to-rose-700"
coverEmoji: "🔧"
faq:
  - q: "What causes JPEG artifacts in the first place?"
    a: "JPEG compression uses a mathematical process called the Discrete Cosine Transform (DCT). The image is divided into 8×8 pixel blocks, and within each block, the frequency information is recorded — but at reduced precision to shrink the file size. The lower the quality setting, the more frequency information gets discarded. When the file is decompressed for display, the gaps in that frequency data produce visible errors: blocks don't match their neighbors, edges become jagged or ringed, and smooth areas develop false patterns. Every time you save a JPEG you lose a little more data permanently. This lossy process is the root cause of all artifact types. Higher quality settings (90+) produce virtually invisible artifacts; settings below 60 produce the blockiness most people associate with bad JPEG quality. The artifacts are baked into the file — they cannot be corrected by simply changing the file format after the fact."
  - q: "Why does sharing photos on social media make JPEG artifacts worse?"
    a: "Every time a platform re-encodes your photo, it applies a fresh round of JPEG compression on top of existing artifacts. WhatsApp, Facebook, Instagram, iMessage, and most messaging services all compress incoming images before storing and redistributing them. A photo that starts at quality 85 might leave your phone already degraded. The platform then re-encodes it at their own quality setting — often between 70 and 80. If a recipient screenshots it and re-shares, yet another encoding round occurs. Three to four re-encodings at moderate quality settings produce severe blocking and color smearing that would have taken ten or more saves of the original file to create in one step. This compounding effect — called compression stacking — is why screenshots of photos look dramatically worse than the originals, even when the pixel dimensions appear identical. The AI artifact remover at ArtImageHub addresses this specific stacking pattern directly."
  - q: "Can you tell which type of JPEG artifact you have just by looking?"
    a: "Yes — zooming in to 200–400% in any photo viewer reveals the artifact type clearly. Blocking (the most common) shows as a grid of distinct 8×8 pixel squares visible in areas of gradual color change such as skies or skin. Ringing artifacts appear as light halos or dark borders immediately around hard edges like text, tree branches, or clothing seams. Banding appears in gradients — a blue sky shifts in visible stepped stripes rather than smoothly. Color bleed (chroma subsampling) looks like color spreading outside the edges of saturated objects, particularly reds and yellows. Mosquito noise appears as a rapidly fluctuating speckle pattern around high-contrast edges and is most obvious in video frames extracted as stills. Identifying the specific type before choosing a fix helps you select the right tool parameters and set realistic expectations about how much improvement is achievable with current AI models."
  - q: "How does SwinIR remove JPEG artifacts specifically?"
    a: "SwinIR (Swin Transformer for Image Restoration) was trained specifically on JPEG-degraded images across a wide range of quality settings. During training, the model saw thousands of image pairs — the original clean image alongside the same image JPEG-compressed at various quality levels — and learned to recognize the specific DCT block-boundary signatures that compression creates. At inference time, SwinIR identifies the 8×8 block grid pattern in your image and smooths the discontinuities across those boundaries while preserving real edges and texture that belong to the original scene. Critically, it does this without blurring the whole image uniformly — weaker tools simply apply a softening filter that removes both artifacts and real detail together. SwinIR's attention mechanism lets it distinguish compression noise from genuine image texture, which is why results look sharp rather than washed out. ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover) uses SwinIR under the hood."
  - q: "When are JPEG artifacts too severe to fully remove?"
    a: "When blocking has destroyed the original boundary information between objects, no restoration tool — AI or otherwise — can recover what was never stored. Practically this means: if you zoom to 400% and the face has become a patchwork of flat-color squares with no transitional pixels between them, the sub-block detail is gone permanently. Similarly, if color bleed has spread so far that the original edge position is ambiguous, the model must guess where the true boundary was. Signs of unrecoverable damage include single-pixel-wide edges being replaced by blurry bands several pixels wide, and areas of fine texture (hair, fabric, foliage) reduced to a uniform gray smear with no texture variation at all. A good AI remover can still improve these images meaningfully — reducing the most distracting block patterns — but the output will not match a photo that was never severely compressed."
---

> **Tools referenced in this guide**: [JPEG Artifact Remover](/jpeg-artifact-remover) · [Photo Enhancer](/photo-enhancer) · [Photo Denoiser](/photo-denoiser) · [Photo Deblurrer](/photo-deblurrer) · All tools are $4.99 one-time at ArtImageHub — no subscription required.

Most people do not notice JPEG artifacts the first time they appear. The photo still looks acceptable on a phone screen at normal size. Then someone prints it, or posts it to a feed where it sits next to sharper images, or zooms in on a face — and suddenly the blocky, smeared, haloed distortions are impossible to unsee.

This guide explains where JPEG artifacts come from, what the five distinct types look like, why sharing photos on social media systematically makes them worse, and how modern AI tools — specifically a model called SwinIR — remove them without turning your photo into a blurry paste. The goal is a complete working understanding so you can diagnose any compressed photo and choose the right fix.

## Why Does JPEG Compression Create Artifacts at All?

To understand artifacts, you need a basic mental model of what JPEG compression actually does. When you save a photo as a JPEG, the algorithm does not simply throw away some pixels. Instead, it transforms the image through a process called the **Discrete Cosine Transform (DCT)**.

The image is divided into a grid of 8×8 pixel blocks. Within each block, the DCT converts the pixel values into a set of frequency components — essentially describing how much the brightness and color change across that small patch. High-frequency components capture sharp edges and fine textures; low-frequency components capture broad color regions.

Here is where the quality setting matters: JPEG then applies a **quantization table** that rounds off the frequency values, discarding more precision at lower quality settings. A quality setting of 95 preserves most of the frequency information. A quality setting of 40 discards most of it. The discarded information is gone permanently — JPEG is a lossy format by design.

When the file is decompressed for display, the decoder reconstructs each 8×8 block from the surviving (rounded) frequency data. Blocks that lost too much frequency information no longer match their neighbors precisely, producing the visual errors we recognize as artifacts.

## What Are the 5 Types of JPEG Artifacts?

### 1. Blocking (the Most Common)

Blocking is the grid pattern visible in areas of gradual color transition — skies, skin, blurred backgrounds. Because each 8×8 block is decoded independently, adjacent blocks with slightly different rounding errors produce a visible seam. The result is a mosaic of flat-color squares. Zoom to 300% and look at a smooth sky in any heavily compressed photo — you will almost certainly see it.

### 2. Ringing (Halos Around Edges)

The DCT is mathematically efficient but has a known weakness: sharp edges (high contrast transitions between colors) generate high-frequency components that, when quantized and discarded, leave oscillating ripples on either side of the edge. These ripples appear as light halos or dark fringes around hard edges — text, tree branches, building silhouettes. Ringing is especially damaging to scanned documents and photos with text overlays.

### 3. Banding (False Stripes in Gradients)

Smooth color gradients (a sky going from deep blue at the top to light blue near the horizon) require subtle transitions between many different values. When quantization rounds off these intermediate values, the smooth gradient collapses into a stepped series of bands. Instead of a continuous gradation, you see stripes. Banding is most visible in wide-open skies and out-of-focus backgrounds.

### 4. Color Bleed (Chroma Subsampling)

JPEG typically reduces color resolution more aggressively than brightness resolution, a technique called chroma subsampling. The result is that saturated colors — particularly reds, oranges, and yellows — spread beyond their true boundaries. A red flower on a green background develops a reddish fringe that bleeds outward. This is why photos of food and flowers often look soft at the color edges even when the luminance detail seems acceptable.

### 5. Mosquito Noise

Named for its resemblance to a swarm of tiny insects, mosquito noise appears as a rapidly fluctuating speckle pattern around high-contrast edges and in areas with fine detail. It is particularly visible when a video frame is extracted as a still JPEG — video codecs apply similar compression but compound the effect frame by frame, and the noise from each frame shows as random speckle in the still.

## How to Identify Which Type You Have

Open the photo in any image viewer that allows zoom (Preview on Mac, Photos on Windows, or any basic editing app). Zoom to **200–400%**.

- Look at a smooth sky or skin region → if you see a grid of flat-color squares, you have **blocking**
- Look at a sharp edge (text, branch, roofline) → a halo or dark ring = **ringing**
- Look at a gradient (sky transitioning from dark to light) → stepped stripes = **banding**
- Look at a saturated object boundary (red jacket on white wall) → color bleeding past the edge = **color bleed**
- Look at a fine-detail area (hair, text at small size) → dancing speckle = **mosquito noise**

Many heavily compressed photos have multiple types simultaneously, which is normal — they all originate from the same DCT quantization process.

## Why Social Media and Messaging Apps Make Artifacts Worse

Every platform that receives and redistributes your photo applies its own JPEG compression before storing and serving it. WhatsApp, Facebook, Instagram, iMessage, Twitter/X, Discord — all of them. The quality settings vary by platform (typically 70–85%), but the key problem is that each re-encoding applies a new round of quantization on top of artifacts that already exist.

Artifacts from previous compressions are not treated as artifacts by the new encoder — they look like high-frequency image content, which the encoder then tries to compress. The result is artifacts-on-artifacts: blocking patterns become more pronounced, ringing halos grow wider, banding steps become sharper.

A photo shared through four messaging apps — starting at a reasonable quality level — can arrive looking significantly worse than the original, even at the same file dimensions. This is **compression stacking**, and it is why screenshots of screenshots look terrible and why photos received in WhatsApp look noticeably softer than photos taken on the same phone.

## How Does SwinIR Remove JPEG Artifacts?

SwinIR — Swin Transformer for Image Restoration — is an AI model published by researchers at ETH Zurich and trained specifically on paired datasets of clean original images alongside JPEG-degraded versions of those same images, across a wide range of quality settings.

The key architectural advantage is the **Swin Transformer's attention mechanism**, which lets the model look at relationships between distant parts of the image when deciding how to restore any single region. Earlier CNN-based artifact removers processed each patch independently, which produced acceptable results on blocking but left ringing and mosquito noise underaddressed.

SwinIR's training on JPEG-specific degradations teaches it to recognize the 8×8 DCT block grid signature — even when it is partially obscured or compounded by multiple compression rounds. When processing your image, it smooths the discontinuities at block boundaries and removes the ringing ripples around edges, while using its attention mechanism to distinguish genuine image texture from compression noise. The result is sharper than a simple blur filter and more natural-looking than older CNN-based approaches.

[ArtImageHub's JPEG artifact remover](/jpeg-artifact-remover) runs SwinIR on your uploaded photo with parameters calibrated for the range of compression artifacts common in social-media-shared images and scanned prints.

## Step-by-Step Fix

**Step 1**: Identify the severity. Zoom to 300% and note which artifact types are present and how dominant the blocking is. If the 8×8 grid has obliterated the underlying image content in key areas (a face reduced to flat-color patches with no transition pixels), set expectations accordingly — significant improvement is possible, but complete elimination may not be.

**Step 2**: Upload to [ArtImageHub's JPEG artifact remover](/jpeg-artifact-remover). The tool accepts JPEG and PNG inputs (PNG is useful for intermediates that have had artifact removal applied but need a further round of quality improvement).

**Step 3**: Review the preview. Pay attention to the fine-detail areas: hair, fabric, text. If the preview shows these as sharp and natural rather than blurry, the model has successfully distinguished genuine texture from compression noise.

**Step 4**: If the source photo also has blur or low resolution, chain the output through the [photo deblurrer](/photo-deblurrer) or [photo enhancer](/photo-enhancer) — removing artifacts first gives the upscaler cleaner input, which produces better final results.

**Step 5**: Download and save as PNG for any further editing. Re-saving as JPEG after artifact removal would re-introduce compression degradation.

## When Artifacts Are Too Severe to Fully Remove

Blocking that has destroyed sub-block detail — where adjacent blocks have lost all transitional pixel information — cannot be reconstructed by any current tool. The model must invent the missing structure, and the output will look plausible but will not match the original. The warning signs at 400% zoom: faces that are patchworks of flat-color squares with no pixel-level transitions, smooth areas where every gradient is replaced by a hard boundary at 8-pixel intervals, and fine textures (hair, fabric grain) that have collapsed into a uniform smear.

In these cases, AI artifact removal still provides meaningful improvement by reducing the most visually distracting block patterns — but the photo will not look as if it were never compressed. Combining artifact removal with the [photo enhancer's](/photo-enhancer) super-resolution can partially compensate by reconstructing plausible texture, though the output is a plausible reconstruction rather than a recovery of the original.

For photos at this severity, the realistic outcome is: less distracting to view, better for informal use, not suitable for archival claims about what the original contained.

---

**Related Reading:**
- [How to Remove Noise from Old Photos](/blog/photo-denoiser-guide)
- [Complete Guide to AI Photo Enhancement](/blog/ai-photo-enhancement-guide)
- [AI Photo Restoration: What It Can and Cannot Fix](/blog/ai-photo-restoration-limitations)
