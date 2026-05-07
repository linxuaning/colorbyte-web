---
title: "How to Fix Photo Quality After Taking a Screenshot: Remove Screenshot Compression Artifacts"
description: "A UX designer's guide to understanding why screenshots degrade image quality and how to use JPEG artifact removal and upscaling to recover as much detail as possible from screenshot captures."
publishedAt: "2026-05-07"
author: "Ryan O'Brien"
authorRole: "UX Designer & Digital Media Consultant"
authorBio: "Ryan O'Brien works at the intersection of interface design and digital media production, advising teams on image quality pipelines, screen capture workflows, and asset optimization. He writes practical guides on digital image quality for designers and content creators."
reviewedBy: "ArtImageHub editorial team — technical details verified against current OS screenshot compression behavior and JPEG blocking artifact research"
category: "How-To"
tags: ["Screenshot", "Screenshot Quality", "JPEG Artifacts", "Photo Fix", "Digital Media"]
coverColor: "from-indigo-500 via-blue-600 to-cyan-700"
coverEmoji: "📸"
faq:
  - question: "Why does a screenshot of a photo look worse than the original photo?"
    answer: "A screenshot introduces at least one additional layer of image processing between you and the original photo. On most operating systems, the screenshot tool captures what is rendered on screen, which is already at screen resolution — typically 72–96 dpi on standard monitors, versus 300 dpi or higher for print-quality source images. If the OS saves screenshots as JPEG — which Windows and Android do by default in many contexts — an additional lossy compression step is applied on top of whatever compression already existed in the source image, degrading fine detail and introducing blocking artifacts. Even PNG screenshots, which are lossless, capture only the pixel dimensions displayed on screen, which may be significantly lower than the source image's native resolution. The result is a file that looks acceptable on screen but cannot be enlarged or printed without obvious quality loss. Double-compression — screenshotting already-JPEG-compressed content — compounds these effects severely."
  - question: "What are the blocky artifacts I see when I zoom into a screenshot of a photo?"
    answer: "Those blocks are JPEG compression artifacts, specifically a phenomenon called DCT blocking. JPEG compression works by dividing an image into 8x8 pixel blocks and encoding each block's color and luminance information using a mathematical transform. At low quality settings, the block boundaries become visible as a grid pattern of subtle color and brightness shifts across the image. When you take a screenshot of a photo that was already JPEG-compressed (embedded in a webpage, displayed in a social media feed, or saved from a messaging app), you are looking at JPEG artifacts that already existed, often rendered more visibly because the screen zoom level is different from the source encoding resolution. Screenshotting this content as JPEG again creates a second generation of artifacts stacked on the first. ArtImageHub's [JPEG Artifact Remover](/jpeg-artifact-remover) uses SwinIR architecture specifically trained to detect and smooth these blocking patterns."
  - question: "Can JPEG artifact removal fully restore a screenshot to the original image quality?"
    answer: "No — and it is important to be realistic about what is achievable. JPEG artifact removal recovers lost detail within the strict constraints of what the screenshot actually captured. The SwinIR model used in ArtImageHub's JPEG Artifact Remover identifies 8x8 blocking patterns and softens block boundaries, reconstructing smoother gradients, better edge transitions, and more natural color gradients. It cannot reconstruct detail that was not captured at all — if your screenshot was taken at half the source resolution, the missing pixels are permanently gone and no AI can recover them. What you can realistically expect after processing: significantly smoother gradients and skin tones, reduced grid-like blocking visible when zooming in, and a more printable or presentable result for moderate-quality screenshots. The output will not match the original source image if the screenshot discarded significant resolution. AI artifact removal is best understood as cleaning up degradation that occurred, not recovering information that was never captured."
  - question: "When is it worth trying to restore a screenshot versus finding the original file?"
    answer: "Finding the original file is almost always the better choice when that option exists — a screenshot is a lossy copy at screen resolution, and no AI restoration can fully recover what was lost in the capture and compression process. That said, screenshots are worth attempting to restore in several practical situations: when the original source is genuinely inaccessible (old social media posts now deleted, webpages that no longer exist, messages from deactivated contacts), when the screenshot is intended for archival documentation rather than print production, when the quality loss is only moderate such as a high-DPI Retina screenshot of a large displayed image, or when you need a reasonably clean version quickly and the final use case tolerates limited quality. For print production, marketing assets, or any context where image fidelity is critical, always pursue the original file first. For personal archival, documentation, or social sharing use cases, AI restoration often produces a more than adequate result."
  - question: "What is the best way to capture an image from a screen without quality loss?"
    answer: "The best approach is to avoid screenshotting and instead access the source file directly whenever possible. Right-clicking most web images gives a Save Image As option that downloads the original web-optimized file — not always full resolution, but much better than a screenshot. For images in PDFs, most PDF viewers include image extraction tools. For content behind paywalls or in apps, check whether the platform provides an explicit download or export option. If screenshotting is unavoidable, use a high-DPI display such as a Retina Mac or 4K monitor, screenshot at 100% zoom without any browser or app zoom scaling, and use PNG format to avoid adding a new JPEG compression layer — macOS defaults to PNG and is substantially better for this than Windows. For screenshotting printed materials displayed on a monitor, moiré interference is difficult to avoid without specialized descreening software. ArtImageHub's Photo Enhancer and JPEG Artifact Remover together provide the best digital cleanup when screenshotting cannot be avoided."
---

> **Quick fix**: Upload your screenshot to [ArtImageHub's JPEG Artifact Remover](/jpeg-artifact-remover) to clean up blocking artifacts, then optionally run it through [Photo Enhancer](/photo-enhancer) for sharpness. **$4.99 one-time per tool, no subscription.** The detailed explanation of why this happens and how far AI can restore it follows below.
>
> Also useful: [Photo Denoiser](/photo-denoiser) for noise from low-quality screenshots, [Photo Deblurrer](/photo-deblurrer) if the screenshot appears soft or blurry.

Taking a screenshot seems like the most direct way to grab an image you see on screen. But in practice, the screenshot you end up with is often noticeably worse than what was on your screen — blocky, washed out, or muddy at anything above 100% zoom. Understanding exactly why this happens determines what you can realistically fix.

## Why Does Screenshotting Degrade Image Quality?

The short answer is: every screenshot involves at least one, and usually two, quality-compromising steps. Here's what actually happens:

### Screen Resolution vs. Source Resolution

Digital displays render images at screen resolution — typically 72 to 96 physical pixels per inch on standard monitors, and 144–227 ppi on high-DPI Retina displays. A print-quality photograph is captured at 300 dpi or higher. When you view a 12-megapixel DSLR photo on a standard 1080p monitor, the display is already downscaling it dramatically to fit your screen. Your screenshot captures the downscaled render — not the source.

On a Retina display (2x pixel density), this problem is partially mitigated: a Retina screenshot of a full-size image on screen captures 2x the pixels of a standard display, getting you closer to the source. But on a standard 1080p display, screenshotting a photo that was displayed smaller than its native size discards a significant portion of the original resolution permanently.

### OS Screenshot Compression: PNG vs. JPEG

macOS and Linux screenshot tools default to PNG — a lossless format that adds no additional compression beyond whatever is in the image on screen. The screenshot is full-quality at screen resolution.

Windows and Android, however, save screenshots in formats that may apply JPEG compression depending on the context. Windows Snipping Tool and the Win+PrtScr shortcut typically save as PNG, but the legacy PrtScr clipboard behavior and many third-party screenshot tools default to JPEG. JPEG compression is lossy: it discards image data that the algorithm judges imperceptible, but at moderate to high compression levels (quality settings below 85), the compression artifacts become visible as blocky patterns and smeared color.

### Double-Compression: The Worst Case

The most severe quality loss happens when you screenshot content that is already JPEG-compressed — which describes most images on the web, in messaging apps, and on social media platforms.

Here's what happens: the original photo was JPEG-compressed when uploaded (first generation of artifacts). Your browser or app decoded that JPEG to display it on screen. Your screenshot tool captured the screen display. If your screenshot tool then re-saves as JPEG, it applies a second round of lossy compression to the already-artifact-containing image. The result is two stacked generations of JPEG blocking, which is significantly more visible than either generation alone.

Even a PNG screenshot of JPEG content avoids the second compression step, but it cannot remove the first-generation artifacts that were already rendered on your screen.

## What Do Screenshot Quality Problems Actually Look Like?

**JPEG blocking on screenshotted photos**: visible 8x8 pixel grid pattern, most obvious at gradients (sky, skin tone, soft shadows). Zooming in to 200% or more makes it unmistakable.

**Moiré from screenshotting printed text or graphics on screen**: wavy interference patterns appear when a regular pattern (printer halftone dots, screen pixels, ruled lines) is captured at a slightly misaligned resolution. This is a sampling artifact that cannot be fully removed in post.

**Reduced color depth and banding**: some screenshot pathways — particularly video capture tools used as screenshot workarounds — reduce color depth. This appears as banding in smooth gradients (visible steps between colors rather than smooth transitions).

**Overall softness**: screenshot downscaling with poor interpolation produces a slightly soft result even with no compression artifacts. Sharpening helps here but cannot recover resolution that was never captured.

## How Do You Fix a Screenshot Photo Step by Step?

### Step 1 — Identify the primary problem

Zoom your screenshot to 200% in any image viewer. If you see an 8x8 pixel grid pattern with blocky color areas: you have JPEG artifacts. If the image looks uniformly soft without obvious blocking: you have a resolution loss problem. If you see wavy interference patterns: you have moiré. The fix differs for each.

### Step 2 — Remove JPEG artifacts first

For JPEG blocking, go to [ArtImageHub's JPEG Artifact Remover](/jpeg-artifact-remover) and upload your screenshot. The tool uses SwinIR, a state-of-the-art transformer architecture specifically trained on JPEG blocking patterns. Processing smooths block boundaries and reconstructs better gradient transitions. This is the single most impactful step for screenshotted photos from web or social media sources.

### Step 3 — Optional: Upscale for larger use

If you need the fixed image at a larger size than your screenshot, [Photo Enhancer](/photo-enhancer) applies Real-ESRGAN upscaling with detail recovery. This is effective for increasing the output size for display or moderate printing, but remember: AI upscaling adds plausible detail, not the original detail that was never captured.

### Step 4 — Apply denoising if needed

Screenshots from mobile devices or low-quality screen capture tools sometimes introduce digital noise. [Photo Denoiser](/photo-denoiser) using NAFNet architecture handles this cleanly without over-smoothing.

### Step 5 — Evaluate and download

Compare the result at 100% zoom against your original screenshot. JPEG artifacts should be significantly reduced. Download the HD result — $4.99 one-time covers the tool access.

## When Can Screenshots Be Restored vs. When Is the Damage Too Severe?

**Good candidates for AI restoration**:
- Screenshots taken on Retina/high-DPI displays (2x resolution, close to source)
- Screenshots of large source images that were displayed near full size
- PNG screenshots of JPEG content (only first-generation artifacts)
- Moderate-quality JPEG screenshots (quality 70–85)

**Poor candidates — quality loss too severe**:
- Screenshots of small thumbnails (irreversible resolution loss)
- Low-quality JPEG screenshots of already-compressed content (double-generation artifacts at high compression)
- Screenshots with strong moiré patterns (sampling artifact, not fixable with AI artifact removal)
- Screenshots where the source image was heavily filtered or processed before display

A rough rule of thumb: if the screenshot looks acceptable at 100% zoom and only degrades at higher zoom levels, AI restoration can make it significantly more usable. If it looks bad at 100% zoom, the underlying resolution or compression loss is too severe for AI to fully compensate.

## What Are Better Alternatives to Screenshotting for Capturing Images?

When the original quality matters, these approaches beat screenshotting:

- **Right-click > Save Image As**: captures the web-served file directly, avoiding the screen downscaling step
- **Browser developer tools**: the Network tab lets you inspect and download source image URLs at their original resolution
- **Platform download options**: most social media platforms offer download buttons that retrieve the original uploaded file
- **PDF image extraction**: tools like Adobe Acrobat, Preview (macOS), or pdfimages (command-line) extract embedded images from PDFs at their native resolution without screenshotting
- **Screen recording at 4K**: on high-DPI displays, recording at native resolution and capturing a single frame gives a higher-quality result than a screenshot tool

---

For compression artifacts from downloaded images (not just screenshots), [JPEG Artifact Remover](/jpeg-artifact-remover) applies the same SwinIR-based cleanup. For blurriness in any photo, [Photo Deblurrer](/photo-deblurrer) handles motion and focus blur. For grainy or noisy screenshots from mobile captures, [Photo Denoiser](/photo-denoiser) cleans up digital noise effectively.

Try [ArtImageHub JPEG Artifact Remover](/jpeg-artifact-remover) on your screenshot — $4.99 one-time, no subscription, HD download.
