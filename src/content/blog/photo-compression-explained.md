---
title: "Photo Compression Explained: Why Your Photos Lose Quality and How to Fix It"
description: "Understand lossy vs lossless compression, how JPEG blocks form, why repeated saves destroy image quality, and how to identify and fix compression artifacts with AI tools."
publishedAt: "2026-05-07"
author: "Alex Chen"
authorRole: "Digital Photography Writer"
authorBio: "Alex Chen writes about digital imaging technology with a focus on making technical concepts accessible. He has tested dozens of photo tools and regularly publishes guides on image quality and compression standards."
reviewedBy: "ArtImageHub editorial team"
category: "Education"
featured: false
tags: ["Photo Compression", "JPEG Artifacts", "Photo Quality", "Technical Guide", "How-To"]
coverColor: "from-blue-500 via-cyan-600 to-teal-700"
coverEmoji: "🔧"
faq:
  - question: "What is the difference between lossy and lossless compression?"
    answer: "Lossy compression permanently discards image data to reduce file size — JPEG is the most common example. Each time you save a JPEG, the encoder analyzes 8×8 pixel blocks, applies a mathematical transform, and throws away fine detail that the algorithm deems unlikely to be noticed. Over multiple saves, discarded data accumulates visibly as blocking, ringing, and smearing. Lossless compression (PNG, TIFF, WebP lossless) reduces file size by finding patterns and encoding them efficiently, but never discards any pixel data. When you open a losslessly compressed image and re-save it, the result is identical to the original at the bit level. For photos you intend to edit, always work in a lossless format. Only convert to JPEG as the final export step so you incur the quality cost exactly once rather than on every iterative save."
  - question: "Why do JPEG photos get blocky when compressed heavily?"
    answer: "JPEG compression works by dividing your photo into 8×8 pixel tiles, then applying a mathematical operation called the Discrete Cosine Transform (DCT) to each tile. DCT converts the pixels into a set of frequency components — essentially describing the block as a sum of wave patterns ranging from slow gradients to fine texture. A quality setting then acts as a coarse filter: high-frequency components (fine detail, sharp edges) are rounded or zeroed out, keeping only the broad strokes. When quality is very low, each 8×8 block retains only its average tone and the roughest gradients, making boundaries between blocks visible as a grid of flat rectangles. Edges that should be sharp instead show 'ringing' halos — a ripple effect where the discarded high-frequency waves leave phantom oscillations. The blocky appearance is simply the 8×8 tile grid becoming visible once enough detail has been stripped away."
  - question: "Does saving a JPEG multiple times make quality worse?"
    answer: "Yes — and the degradation compounds with every save cycle. When you open a JPEG, the decoder reconstructs the pixel grid from the compressed data. When you then re-save as JPEG, the encoder treats the entire reconstructed image as new input and applies a fresh round of quantization. Any rounding errors introduced in the first save get baked in, and the second quantization adds its own rounding on top. After three or four save cycles at a modest quality setting, blocking and ringing become obvious. At ten or more cycles the image can be visibly destroyed. The safest workflow is to edit in a lossless format — keep a master TIFF or PNG — and export to JPEG only once when you need to share or publish. If you have a heavily re-saved JPEG showing severe artifacts, ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover), powered by SwinIR, can reconstruct smooth gradients and recover fine texture lost across multiple save generations."
  - question: "How does social media recompression damage your photos?"
    answer: "Every major platform — Instagram, Facebook, WhatsApp, Twitter/X, and others — runs uploaded photos through its own compression pipeline before storage and delivery. The platform re-encodes your image to a target bitrate optimized for bandwidth costs, not image quality. If you upload a high-quality JPEG, the platform performs a second JPEG encode on already-compressed data, compounding quantization errors. On platforms that resize images (most do), a down-sampling step precedes re-encoding, which can introduce additional interpolation artifacts. The result is that a photo exported at quality 90 and uploaded to a social platform may arrive at viewers' screens effectively equivalent to a quality 60–70 re-save. Repeatedly downloading and re-uploading the same image — or sharing screenshots of previously-shared photos — stacks additional compression cycles each time. To preserve quality, export images at the platform's recommended dimensions so no resize step occurs, and use lossless WebP when the platform accepts it."
  - question: "Can AI tools fix compression artifacts in heavily damaged photos?"
    answer: "Yes — AI-based artifact removal produces results that traditional sharpening or manual retouching cannot match. Classical approaches like Unsharp Mask increase local contrast but cannot reconstruct frequency information that was genuinely discarded; they also amplify ringing artifacts rather than removing them. Modern neural networks such as SwinIR, which powers ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover), are trained on large datasets of clean and compressed image pairs. The model learns to recognize the characteristic patterns left by quantization — the 8×8 block boundaries, the ringing halos, the smeared gradients — and inpaints missing high-frequency detail based on the surrounding image context. For photos with mild to moderate compression damage, results are often close to the original quality. For heavily multi-saved images the model cannot recover information that was never stored, but it can produce a visually clean result free of blocking and ringing. For motion blur and optical softness, the [photo deblurrer](/photo-deblurrer) handles those cases separately."
---

> **Tools used in this guide**: [JPEG Artifact Remover](/jpeg-artifact-remover) (SwinIR) — [Photo Enhancer](/photo-enhancer) (Real-ESRGAN) — [Photo Deblurrer](/photo-deblurrer) (NAFNet) — [Photo Denoiser](/photo-denoiser) (NAFNet) — $4.99 one-time per tool, no subscription.

You've noticed it before: a photo that looked sharp on your camera looks noticeably worse after being emailed, edited, re-saved, posted to Instagram, and downloaded again. The image that once showed crisp fabric texture now looks like a mosaic of flat-colored squares with fuzzy halos along every edge. This is compression damage — one of the most common and least understood sources of photo quality loss.

Understanding how compression works explains not just why it happens, but also what you can do about it.

## What Is the Difference Between Lossy and Lossless Compression?

All image compression reduces file size, but the two major families take opposite approaches to how they achieve it.

**Lossless compression** works like a very efficient filing system. PNG, TIFF, and lossless WebP analyze the patterns in your pixel data and encode them more compactly — but every original pixel is preserved exactly. Open a PNG, edit it, save it again, and the output is bit-for-bit identical to what you started with. No detail is ever discarded.

**Lossy compression** permanently throws away data to achieve much smaller files. JPEG is the dominant lossy format for photographs, and the quality setting is literally a dial controlling how aggressively data is discarded. A quality-95 JPEG looks nearly identical to the original; a quality-40 JPEG can be 20 times smaller but clearly degraded.

For photos you plan to edit, the rule is simple: work in a lossless format (PNG or TIFF). Export to JPEG only as the final step.

## How Does JPEG Compression Actually Work?

JPEG compression follows a specific pipeline. Understanding it makes the visual artifacts predictable rather than mysterious.

**Step 1 — Block splitting.** The encoder divides your image into a grid of 8×8 pixel tiles. Each tile is processed independently.

**Step 2 — Discrete Cosine Transform (DCT).** Within each 8×8 block, DCT converts the pixel brightness values into a set of frequency components. Think of it as describing the block as a mix of wave patterns: a slow wave captures the overall brightness gradient, faster waves encode fine texture and sharp edges. The transform itself is reversible and lossless.

**Step 3 — Quantization.** This is where data is actually discarded. Each frequency component is divided by a value from a "quantization table," then rounded to the nearest integer. High-frequency components (representing fine detail) use larger divisors — meaning they get rounded more aggressively and lose precision faster. The quality setting controls how large those divisors are. High quality means small divisors, preserving more detail. Low quality means large divisors, rounding away most of the fine information.

**Step 4 — Entropy coding.** The quantized frequency values are compressed further using lossless coding (Huffman or arithmetic), which is why the final file is smaller.

When you open the JPEG, the process reverses — but quantization already destroyed precision. The 8×8 block boundaries become visible when enough high-frequency data is stripped: each block retains only its average tone and a few coarse gradients, creating the characteristic blocky look. Along edges, the missing high-frequency waves create "ringing" — oscillating halos that look like a low-quality photocopy.

## Why Do Repeated JPEG Saves Multiply Artifacts?

Every time you open a JPEG and save it again, even at the same quality setting, you compound the damage.

The decoder reconstructs the pixel values from the compressed data, but the reconstructed values carry rounding errors from quantization. When you then re-save, the encoder treats those error-carrying pixels as its new input and applies a fresh quantization pass — rounding errors on top of rounding errors. Fine texture that survived the first save may not survive the second. After five or ten cycles, the image can be significantly degraded even if each individual save seemed harmless.

The practical rule: **keep one master file in a lossless format, and export to JPEG only once.**

If you already have a multiply-saved JPEG, ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover) — powered by SwinIR, a state-of-the-art image restoration transformer — can reconstruct smooth gradients and recover texture that blocking and ringing have obscured.

## How Does Social Media Recompress Your Photos?

Uploading to a social platform is a JPEG save you don't control. Instagram, Facebook, WhatsApp, and most other platforms re-encode every uploaded image at their target bitrate, regardless of your upload quality. If your original was already a JPEG, the platform performs a second lossy encode on already-compressed data — multiplying artifacts exactly as described above.

Most platforms also resize images before storage. A resize operation resamples pixel values, introducing interpolation artifacts that the subsequent JPEG encode then compresses imperfectly. The combination of resize plus re-encode can turn a quality-90 export into something equivalent to a quality-65 original.

To minimize platform compression damage:
- Export images at the platform's recommended pixel dimensions so no resize occurs.
- Use the highest quality JPEG your uploader allows, or lossless WebP where the platform accepts it.
- Never download a previously uploaded image and re-upload it — each cycle stacks another encode.

## When Should You Use PNG vs JPEG vs WebP?

| Format | Best for | Compression | Transparency |
|---|---|---|---|
| **JPEG** | Photos for sharing/publishing | Lossy, small files | No |
| **PNG** | Editing masters, screenshots, graphics with text | Lossless, larger files | Yes |
| **WebP (lossy)** | Web photos requiring smaller files | Lossy, ~30% smaller than JPEG | Yes |
| **WebP (lossless)** | Web graphics, editing | Lossless, smaller than PNG | Yes |
| **TIFF** | Archival masters, print | Lossless, very large | Yes |

Use JPEG only when file size matters and you're done editing. Use PNG or TIFF as your working format during editing. WebP is an excellent modern choice for web delivery — lossy WebP beats JPEG in quality-per-kilobyte, and lossless WebP beats PNG in file size at identical quality.

## How Do You Identify and Fix Compression Artifacts?

**Spotting artifacts** is straightforward once you know what to look for. Zoom to 100% in any image viewer and examine:

- Flat, rectangular patches of color arranged in an 8×8 grid — classic blocking
- Ghostly oscillating halos around sharp edges — ringing
- Loss of fine texture (fabric weave, hair, foliage detail) replaced by smeared gradients
- Color bleeding where a saturated area bleeds into adjacent pixels

**Fixing artifacts** with traditional tools is difficult. Gaussian blur reduces blocking but destroys remaining sharpness. Sharpening increases local contrast but amplifies ringing rather than removing it. Neither approach reconstructs the discarded frequency data.

AI-based removal is a different category of solution. [SwinIR](https://arxiv.org/abs/2108.10257) (Liang et al., 2021) — the model behind ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover) — uses a shifted-window transformer architecture trained on matched pairs of clean and compressed images. The network learns to recognize block boundaries and ringing patterns as artifacts and reconstructs plausible high-frequency detail from context. Results are sharp, naturally textured images rather than blurry compromises.

For photos with both compression damage and general softness, combine the [JPEG artifact remover](/jpeg-artifact-remover) with the [photo enhancer](/photo-enhancer) (Real-ESRGAN). If the original capture was also blurry from camera shake, the [photo deblurrer](/photo-deblurrer) (NAFNet) handles motion blur and optical softness separately. For sensor noise layered on top of compression damage, start with the [photo denoiser](/photo-denoiser) (NAFNet) first, then remove any residual compression artifacts.

All ArtImageHub tools are $4.99 one-time per tool — no subscription, no watermark on HD downloads.

---

> **Quick fix**: Upload your compressed photo to the [JPEG artifact remover](/jpeg-artifact-remover) — SwinIR removes blocking and ringing in under 60 seconds. $4.99, one-time payment, full HD download.

---

## Related Articles

- [Fix blurry photos with AI — motion blur and camera shake](/blog/fix-blurry-passport-photo)
- [How to remove noise from photos](/blog/ai-photo-enhancement-guide)
- [Old photo restoration — complete guide](/blog/ai-photo-restoration-vs-photoshop)

## Frequently Asked Questions

### What is the difference between lossy and lossless compression?

Lossy compression permanently discards image data to reduce file size — JPEG is the most common example. Each time you save a JPEG, the encoder analyzes 8×8 pixel blocks, applies a mathematical transform, and throws away fine detail that the algorithm deems unlikely to be noticed. Over multiple saves, discarded data accumulates visibly as blocking, ringing, and smearing. Lossless compression (PNG, TIFF, WebP lossless) reduces file size by finding patterns and encoding them efficiently, but never discards any pixel data. When you open a losslessly compressed image and re-save it, the result is identical to the original at the bit level. For photos you intend to edit, always work in a lossless format. Only convert to JPEG as the final export step so you incur the quality cost exactly once rather than on every iterative save.

### Why do JPEG photos get blocky when compressed heavily?

JPEG compression works by dividing your photo into 8×8 pixel tiles, then applying a mathematical operation called the Discrete Cosine Transform (DCT) to each tile. DCT converts the pixels into a set of frequency components — essentially describing the block as a sum of wave patterns ranging from slow gradients to fine texture. A quality setting then acts as a coarse filter: high-frequency components (fine detail, sharp edges) are rounded or zeroed out, keeping only the broad strokes. When quality is very low, each 8×8 block retains only its average tone and the roughest gradients, making boundaries between blocks visible as a grid of flat rectangles. Edges that should be sharp instead show 'ringing' halos — a ripple effect where the discarded high-frequency waves leave phantom oscillations. The blocky appearance is simply the 8×8 tile grid becoming visible once enough detail has been stripped away.

### Does saving a JPEG multiple times make quality worse?

Yes — and the degradation compounds with every save cycle. When you open a JPEG, the decoder reconstructs the pixel grid from the compressed data. When you then re-save as JPEG, the encoder treats the entire reconstructed image as new input and applies a fresh round of quantization. Any rounding errors introduced in the first save get baked in, and the second quantization adds its own rounding on top. After three or four save cycles at a modest quality setting, blocking and ringing become obvious. At ten or more cycles the image can be visibly destroyed. The safest workflow is to edit in a lossless format — keep a master TIFF or PNG — and export to JPEG only once when you need to share or publish. If you have a heavily re-saved JPEG showing severe artifacts, ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover), powered by SwinIR, can reconstruct smooth gradients and recover fine texture lost across multiple save generations.

### How does social media recompression damage your photos?

Every major platform — Instagram, Facebook, WhatsApp, Twitter/X, and others — runs uploaded photos through its own compression pipeline before storage and delivery. The platform re-encodes your image to a target bitrate optimized for bandwidth costs, not image quality. If you upload a high-quality JPEG, the platform performs a second JPEG encode on already-compressed data, compounding quantization errors. On platforms that resize images (most do), a down-sampling step precedes re-encoding, which can introduce additional interpolation artifacts. The result is that a photo exported at quality 90 and uploaded to a social platform may arrive at viewers' screens effectively equivalent to a quality 60–70 re-save. Repeatedly downloading and re-uploading the same image — or sharing screenshots of previously-shared photos — stacks additional compression cycles each time. To preserve quality, export images at the platform's recommended dimensions so no resize step occurs, and use lossless WebP when the platform accepts it.

### Can AI tools fix compression artifacts in heavily damaged photos?

Yes — AI-based artifact removal produces results that traditional sharpening or manual retouching cannot match. Classical approaches like Unsharp Mask increase local contrast but cannot reconstruct frequency information that was genuinely discarded; they also amplify ringing artifacts rather than removing them. Modern neural networks such as SwinIR, which powers ArtImageHub's [JPEG artifact remover](/jpeg-artifact-remover), are trained on large datasets of clean and compressed image pairs. The model learns to recognize the characteristic patterns left by quantization — the 8×8 block boundaries, the ringing halos, the smeared gradients — and inpaints missing high-frequency detail based on the surrounding image context. For photos with mild to moderate compression damage, results are often close to the original quality. For heavily multi-saved images the model cannot recover information that was never stored, but it can produce a visually clean result free of blocking and ringing. For motion blur and optical softness, the [photo deblurrer](/photo-deblurrer) handles those cases separately.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between lossy and lossless compression?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lossy compression permanently discards image data to reduce file size — JPEG is the most common example. Each time you save a JPEG, the encoder analyzes 8×8 pixel blocks, applies a mathematical transform, and throws away fine detail that the algorithm deems unlikely to be noticed. Over multiple saves, discarded data accumulates visibly as blocking, ringing, and smearing. Lossless compression (PNG, TIFF, WebP lossless) reduces file size by finding patterns and encoding them efficiently, but never discards any pixel data. When you open a losslessly compressed image and re-save it, the result is identical to the original at the bit level. For photos you intend to edit, always work in a lossless format. Only convert to JPEG as the final export step so you incur the quality cost exactly once rather than on every iterative save."
      }
    },
    {
      "@type": "Question",
      "name": "Why do JPEG photos get blocky when compressed heavily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JPEG compression works by dividing your photo into 8×8 pixel tiles, then applying a mathematical operation called the Discrete Cosine Transform (DCT) to each tile. DCT converts the pixels into a set of frequency components — essentially describing the block as a sum of wave patterns ranging from slow gradients to fine texture. A quality setting then acts as a coarse filter: high-frequency components (fine detail, sharp edges) are rounded or zeroed out, keeping only the broad strokes. When quality is very low, each 8×8 block retains only its average tone and the roughest gradients, making boundaries between blocks visible as a grid of flat rectangles. Edges that should be sharp instead show 'ringing' halos — a ripple effect where the discarded high-frequency waves leave phantom oscillations. The blocky appearance is simply the 8×8 tile grid becoming visible once enough detail has been stripped away."
      }
    },
    {
      "@type": "Question",
      "name": "Does saving a JPEG multiple times make quality worse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the degradation compounds with every save cycle. When you open a JPEG, the decoder reconstructs the pixel grid from the compressed data. When you then re-save as JPEG, the encoder treats the entire reconstructed image as new input and applies a fresh round of quantization. Any rounding errors introduced in the first save get baked in, and the second quantization adds its own rounding on top. After three or four save cycles at a modest quality setting, blocking and ringing become obvious. At ten or more cycles the image can be visibly destroyed. The safest workflow is to edit in a lossless format — keep a master TIFF or PNG — and export to JPEG only once when you need to share or publish. If you have a heavily re-saved JPEG showing severe artifacts, ArtImageHub's JPEG artifact remover, powered by SwinIR, can reconstruct smooth gradients and recover fine texture lost across multiple save generations."
      }
    },
    {
      "@type": "Question",
      "name": "How does social media recompression damage your photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every major platform — Instagram, Facebook, WhatsApp, Twitter/X, and others — runs uploaded photos through its own compression pipeline before storage and delivery. The platform re-encodes your image to a target bitrate optimized for bandwidth costs, not image quality. If you upload a high-quality JPEG, the platform performs a second JPEG encode on already-compressed data, compounding quantization errors. On platforms that resize images (most do), a down-sampling step precedes re-encoding, which can introduce additional interpolation artifacts. The result is that a photo exported at quality 90 and uploaded to a social platform may arrive at viewers' screens effectively equivalent to a quality 60–70 re-save. Repeatedly downloading and re-uploading the same image — or sharing screenshots of previously-shared photos — stacks additional compression cycles each time."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI tools fix compression artifacts in heavily damaged photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — AI-based artifact removal produces results that traditional sharpening or manual retouching cannot match. Classical approaches like Unsharp Mask increase local contrast but cannot reconstruct frequency information that was genuinely discarded; they also amplify ringing artifacts rather than removing them. Modern neural networks such as SwinIR, which powers ArtImageHub's JPEG artifact remover, are trained on large datasets of clean and compressed image pairs. The model learns to recognize the characteristic patterns left by quantization — the 8×8 block boundaries, the ringing halos, the smeared gradients — and inpaints missing high-frequency detail based on the surrounding image context. For photos with mild to moderate compression damage, results are often close to the original quality."
      }
    }
  ]
}
</script>
