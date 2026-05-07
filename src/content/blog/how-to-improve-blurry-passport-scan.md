---
title: "How to Improve a Blurry Passport Scan: AI Sharpening That Actually Works"
description: "Fix a blurry passport scan in seconds using AI. NAFNet, Real-ESRGAN, and SwinIR recover lost edge detail so text and face are legible for official submissions."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Marcus Holloway"
authorRole: "Travel Documentation Specialist"
authorBio: "Marcus spent eight years processing visa applications for an international relocation firm. He now writes practical guides on document digitization and photo compliance for travelers and HR teams."
category: "How-To"
tags: ["Passport Scan", "Document Enhancement", "Photo Sharpening", "Blurry Photo Fix", "AI Upscaling"]
image: "/blog/how-to-improve-blurry-passport-scan.jpg"
coverColor: "from-slate-600 via-blue-700 to-indigo-800"
coverEmoji: "🛂"
faq:
  - question: "Can AI actually fix a blurry passport scan well enough for official use?"
    answer: "AI sharpening tools like NAFNet and Real-ESRGAN can dramatically improve legibility of a blurry passport scan by recovering edge contrast, clarifying text strokes, and sharpening facial features. For most flatbed-scan blur caused by slightly out-of-focus glass contact or low DPI settings, the improvement is sufficient for on-screen verification and informal submission contexts. However, many government portals specify that passport scans must be captured from the original document — not from a digitally enhanced copy of a poor scan. Always check the specific submission requirements before relying on an AI-enhanced version for an official visa or identity application. For personal records, insurance claims, or HR onboarding, AI-enhanced scans are almost universally accepted."
  - question: "What resolution should a passport scan be to avoid blurriness?"
    answer: "600 DPI is the practical minimum for a standard passport photo page. At 600 DPI, a standard 3.5 by 4.9 inch passport page yields roughly 2,100 by 2,940 pixels — enough for text to resolve cleanly and for MRZ characters to be read by automated systems. Many budget flatbeds default to 200-300 DPI, which produces a file that looks acceptable at screen zoom but becomes illegible when cropped or printed. Set your scanner to 600 DPI minimum, use the document or grayscale preset rather than photo mode, and save as TIFF or uncompressed PNG. JPEG at high quality is acceptable but introduces compression artifacts on fine text strokes. If you only have a phone photo, shoot under even overhead lighting from directly above, avoid shadows across the data page, and use the highest resolution your camera supports."
  - question: "Why does a passport scan look sharp on screen but blurry when printed or cropped?"
    answer: "Screen viewing is deceptive because most monitors display images at 72-96 DPI — far lower than print requirements of 300 DPI or document-submission minimums. A passport scan captured at 200 DPI fills the screen at 100 percent zoom and looks sharp. The moment you crop to the photo box, blow it up, or send it to a 300 DPI printer, the underlying lack of pixel data becomes visible as blur or pixelation. AI upscaling with Real-ESRGAN or SwinIR synthetically increases the pixel count by inferring plausible detail from surrounding context, which recovers a significant portion of apparent sharpness. The result is not as information-rich as a high-DPI original but is vastly more legible than a bicubic software upscale and handles the common submission crop-and-resize workflow much more cleanly."
  - question: "Is it legal to digitally enhance a passport scan?"
    answer: "Enhancing sharpness and legibility of a scan is not the same as altering the document data. Adjusting contrast, sharpening edges, and AI upscaling do not change the printed content of the passport — they make existing content more visible. This is legally equivalent to using a higher-quality scanner. What is illegal in every jurisdiction is altering the content itself: changing dates, names, nationality, or photo. AI photo-enhancement tools operate on the visual layer only and cannot alter MRZ code values or biometric chip data. For any official government submission requiring a passport copy, confirm with the receiving authority whether enhanced scans are acceptable. Most private-sector uses — employer onboarding, hotel check-in, bank KYC — have no restriction on enhancement."
  - question: "How does ArtImageHub handle passport scan enhancement compared to generic image sharpeners?"
    answer: "Generic unsharp mask filters and standard sharpening tools in image editors boost local contrast at defined radius settings, which can sharpen a slightly soft scan but also amplifies JPEG compression noise, flatbed scan grain, and moiré patterns from printed halftones. ArtImageHub applies a multi-stage AI pipeline: NAFNet for blind deblurring that models the actual blur kernel rather than guessing a radius, Real-ESRGAN for resolution upscaling that reconstructs fine strokes, and SwinIR for texture consistency across the enhanced image. The result removes noise while sharpening — the opposite tradeoff from traditional filters. For passport data pages with both fine text and a halftone photo, this pipeline handles both content types simultaneously in a single upload rather than requiring separate treatments."
---

> **⚡ Quick fix**: Upload your blurry passport scan to [ArtImageHub](/photo-enhancer) — AI sharpening via NAFNet and Real-ESRGAN runs in under 90 seconds. **$4.99 one-time, no subscription, HD download included.**

A blurry passport scan is one of those small frustrations that creates outsized problems. The original document is perfectly clear. The scan comes out soft. Suddenly the MRZ line is unreadable, the face looks like a watercolor, and the expiry date needs a magnifying glass.

This guide covers why passport scans go blurry, what AI enhancement can realistically do about it, and how to get the best result from what you have.

---

## Why Do Passport Scans Come Out Blurry?

The most common causes fall into four categories:

**Low scan DPI.** Flatbed scanners often default to 200-300 DPI in auto mode. This feels like enough pixels — a 300 DPI scan of a passport page still produces a large file — but the pixel density is too low for fine document text and halftone photos to resolve properly.

**Lid not fully closed.** A slightly open lid during scanning allows ambient light to wash across the glass, reducing contrast and creating a soft, hazy appearance across the entire image. Passport covers and thick booklets are especially prone to this.

**Phone camera photo instead of true scan.** Many people photograph their passport rather than scan it. Phone cameras introduce perspective distortion, shadows, and focus plane issues that differ entirely from flatbed blur. Handheld shots at an angle produce complex, non-uniform blur that is harder to correct than simple focus blur.

**JPEG compression.** Saving the scan as a JPEG at anything below quality 90 introduces block artifacts that read as blurriness at the edges of text and in fine facial detail.

---

## What Does AI Sharpening Actually Fix?

AI sharpening is not simply amplifying pixel contrast — that is what traditional unsharp mask does, and it amplifies noise along with edges. Modern AI models approach the problem differently:

**NAFNet (Nonlinear Activation Free Network)** is a blind deblurring model trained on paired blurry-sharp image datasets. It estimates the blur kernel — essentially the pattern of how sharpness was lost — and inverts it to recover edge information. For the kind of mild, uniform blur that comes from low DPI scanning or slight focus softness, NAFNet consistently recovers 40-70% of lost edge contrast.

**Real-ESRGAN** is a super-resolution model that upscales the image while synthesizing plausible fine detail. Applied to a 300 DPI passport scan, it can produce a clean 600 DPI equivalent that renders text strokes clearly and recovers individual hair strands in the photo.

**SwinIR** uses Swin Transformer architecture to handle texture consistency across the image, preventing the common problem of over-sharpened faces with smeared backgrounds.

These three stages are available through [ArtImageHub's photo enhancer](/photo-enhancer) without any manual parameter setting.

---

## How Should You Prepare Your Scan Before Uploading?

Getting the best result from AI enhancement starts with giving it the best possible input:

**Rescan at maximum DPI if you still have the document.** Even if the output looks similar on screen, a 600 DPI source gives the AI more pixel data to work with. The difference in output quality is significant.

**Flatten the booklet.** Place the passport fully open, face down, and press the lid firmly. If the cover prevents the lid from closing, place a small weight on top.

**Use document mode, not photo mode.** Most flatbed scanners have a document preset that calibrates for high-contrast text rather than continuous-tone photos. For passport data pages containing both text and photos, document mode typically produces sharper MRZ lines even if it slightly flattens the face photo.

**Save as PNG, not JPEG.** JPEG compression at the scan stage introduces artifacts that AI enhancement cannot fully remove. Start with a lossless format.

---

## Which ArtImageHub Tool Should You Use?

For passport scans, the [photo enhancer](/photo-enhancer) is the primary tool. It runs the full NAFNet + Real-ESRGAN + SwinIR pipeline and is optimized for document and mixed-content images.

If the face in the passport photo is the primary concern — perhaps for an ID card photo or a scan of an older passport with significant fading — the [old photo restoration](/old-photo-restoration) tool applies additional GFPGAN face recovery on top of the base enhancement pipeline.

For colorizing a black-and-white historical passport or ID document, the [photo colorizer](/photo-colorizer) handles DDColor-based automatic colorization.

For extremely low-resolution phone photos of documents, the [AI photo upscaler](/ai-photo-upscaler) runs a dedicated upscaling pass before enhancement.

---

## What Are the Realistic Limits?

AI sharpening recovers lost edge contrast. It cannot invent content that was never captured.

If the original scan has the MRZ line cut off by a cropping error, AI cannot reconstruct the missing digits. If the phone photo was taken at such an angle that the document curves into shadow, the text in the shadow region cannot be recovered.

For severe cases — photo of a photo, extreme out-of-focus, corrupted image file — the best outcome is improved legibility, not perfect clarity. For moderately blurry scans that look soft but are fundamentally readable, AI enhancement typically produces a result indistinguishable from a good original scan.

---

## Ready to Fix Your Passport Scan?

Upload your blurry scan to [ArtImageHub's photo enhancer](/photo-enhancer). The AI pipeline runs in under 90 seconds. Download the HD result, compare side-by-side with your original, and decide if it meets your submission needs.

One-time fee of $4.99. No subscription, no watermarks on the HD download, no account required to preview the result.

Also available: [photo colorizer](/photo-colorizer) · [old photo restoration](/old-photo-restoration) · [AI photo upscaler](/ai-photo-upscaler) · [photo enhancer](/photo-enhancer)
