---
title: "How Does AI Photo Restoration Work? (Plain English)"
description: "How AI photo restoration actually works — CodeFormer, GFPGAN, and Real-ESRGAN explained in plain English. Why these models work better than Photoshop filters for old photos."
publishedAt: "2026-04-14"
updatedAt: "2026-04-14"
author: "Thomas Hale"
authorRole: "AI Tools Researcher"
authorBio: "Thomas writes about practical AI applications for everyday users — cutting through the hype to explain what tools actually do what they claim."
category: "Guides"
tags: ["How AI Restoration Works", "CodeFormer", "GFPGAN", "AI Photo Tools", "Technical"]
image: "/blog/before-after-examples.webp"
coverColor: "from-cyan-800 via-blue-800 to-indigo-700"
coverEmoji: "⚙️"
---

# How Does AI Photo Restoration Work? (Plain English)

When you upload an old family photo to ArtImageHub and get back a restored version 90 seconds later, three separate AI models have processed your image. Here's what each one does, and why specialized restoration AI produces results that general photo editors can't.

---

## The Core Idea: Training on Degradation Patterns

General photo editors like Photoshop or Lightroom apply mathematical operations to pixel values — brightness is a multiplication, contrast is a curve adjustment, sharpening is a convolution filter. These are deterministic operations on the existing pixel data.

AI restoration models work differently: they were trained on paired examples of degraded and high-quality images, learning to predict what a degraded image should look like when restored. The key word is *trained* — the model has learned, from thousands of examples, what historical photographic degradation looks like and how to reverse it.

This is why a slider in Photoshop labeled "sharpen" produces different results than CodeFormer on an old portrait: the slider applies a generic mathematical operation; CodeFormer applies learned knowledge about historical face degradation.

---

## CodeFormer: Face Reconstruction

**What it's trained on:** Pairs of high-quality face images and degraded versions simulating historical photographic aging — paper yellowing effects on fine face detail, resolution loss from old print chemistry, fading that makes eyebrows merge into foreheads.

**What it does:** When it sees an old portrait, it analyzes the face structure present (even in degraded form) and reconstructs the face with appropriate detail — eyes, skin texture, fine features — based on what it learned during training.

**Why it works:** CodeFormer uses a combination of a face parsing network (which understands face structure) and a transformer-based refinement network. The transformer can attend to global context — it "knows" that if this region is an eye socket, there should be an eye there with this kind of detail, even if the original is too degraded to show it clearly.

**The tradeoff:** More aggressive CodeFormer settings produce cleaner faces but may over-reconstruct — the result looks sharper than the original degraded image but may slightly generalize facial features. Tuning the fidelity parameter balances reconstruction clarity versus fidelity to the original.

---

## GFPGAN: Systematic Fading and Color Correction

**What it's trained on:** Pairs of old photographs with systematic aging effects (yellowing, fading, reduced contrast, color shift) and idealized restored versions.

**What it does:** Corrects the systematic color and tonal degradation of historical photographs. Unlike a brightness slider (which lightens everything proportionally), GFPGAN applies corrections that understand what historical photographic paper aging does specifically — removing the yellow-amber cast, restoring contrast in the way the original emulsion would have appeared.

**Why it works better than manual correction:** A skilled Lightroom user with the HSL panel can approximate GFPGAN's corrections manually — but it requires knowing the specific chemistry of the original paper, the age of the print, and careful judgment about what's degradation vs. intended tonal choice. GFPGAN has learned these patterns from training data and applies them automatically.

---

## Real-ESRGAN: Upscaling

**What it's trained on:** Pairs of high-resolution images and realistic degraded low-resolution versions — not just bicubic downscaling, but real-world degradation including compression artifacts, noise, and blur.

**What it does:** Upscales the restored image 2×–4× while synthesizing plausible fine detail. The result is a higher-resolution image that can be printed at larger sizes without the blur or pixelation of simple upscaling.

**Why it's better than Photoshop upscaling:** Photoshop's traditional bicubic upscaling interpolates between existing pixels — it estimates in-between values but doesn't synthesize new information. Real-ESRGAN's model predicts what fine detail should look like based on the image context, synthesizing content that wasn't in the original scan.

---

## The Pipeline Order

**1. CodeFormer** runs first on the lower-resolution input — face reconstruction happens before upscaling, because the face detection and reconstruction models work on native-resolution imagery.

**2. GFPGAN** applies fading and color correction to the full image.

**3. Real-ESRGAN** upscales the corrected, restored image — the final upscaling step works on the already-restored image, not the degraded original.

This order matters: upscaling a degraded image makes degradation larger; upscaling a restored image makes clarity larger.

---

## Why This Beats Photoshop Filters

**Specificity of training:** A Photoshop "sharpen" filter was designed to increase local contrast in any image. CodeFormer was trained specifically on historical face degradation — it knows what a 1950s portrait face should look like after aging, not just what "sharper" means generically.

**Information synthesis:** Photoshop's tools can only work with the pixel information that's there. CodeFormer and Real-ESRGAN synthesize information that isn't in the original scan — they predict what should be there based on learned patterns.

**Systematic correction:** GFPGAN's fading correction applies learned patterns specific to photographic paper aging chemistry. A Lightroom HSL panel can approximate this, but requires manual judgment for each image.

---

**[Try ArtImageHub — CodeFormer + GFPGAN + Real-ESRGAN pipeline, $4.99 one-time →](/old-photo-restoration)**

*Results in 30–90 seconds · HD download · 30-day guarantee*

---

## Related

- [Photo Restoration Tips](/blog/photo-restoration-tips) — practical tips for better results
- [Best AI Tools for Old Photo Restoration in 2026](/blog/best-ai-old-photo-restoration-tools-2026) — 7-tool ranked comparison
- [Old Photo Restoration Before and After](/blog/old-photo-restoration-before-after) — what to expect
- [ArtImageHub vs Adobe Photoshop](/blog/artimagehub-vs-adobe-photoshop) — Photoshop Neural Filters comparison
