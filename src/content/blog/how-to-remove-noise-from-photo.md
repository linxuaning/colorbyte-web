---
title: "How to Remove Noise from a Photo: Complete Guide to Photo Noise Reduction"
description: "A complete guide to removing noise from photos — what causes luminance, color, and banding noise, how NAFNet AI denoising works, and when to choose AI over Lightroom's built-in noise reduction."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Sophia Müller"
authorRole: "Photography Educator & Post-Processing Specialist"
authorBio: "Sophia Müller teaches post-processing technique at workshops across Europe and writes about digital imaging science for both amateur and professional photographers. She has been testing noise reduction tools since the era of Neat Image and early Adobe Camera Raw."
category: "How-To"
tags: ["Remove Noise", "Photo Noise", "Noise Reduction", "Grain Removal", "Photo Editing"]
image: "/blog/restore-old-photos.webp"
coverColor: "from-slate-500 via-gray-600 to-neutral-700"
coverEmoji: "✨"
featured: false
faq:
  - q: "What causes noise in photos, and why does it look worse in shadows?"
    a: "Photo noise originates in the camera's image sensor: when the sensor amplifies a weak light signal (in low light or at high ISO), it also amplifies random electrical fluctuations from the sensor electronics themselves. These random variations appear as speckles and grain in the final image. Shadows look noisier than highlights because the light signal in dark areas is extremely weak relative to the electronic noise floor — the signal-to-noise ratio is lowest where the scene is darkest. This is why a photo shot at ISO 3200 in a dimly lit room will show significant noise in shadow areas even if the midtones and highlights look clean. The physics cannot be changed in-camera; the only fix is to either brighten the scene (add light), open the aperture, use a slower shutter speed if motion allows, or remove the noise in post-processing."
  - q: "What is the difference between luminance noise and color noise, and which is easier to remove?"
    a: "Luminance noise appears as grayscale grain — random variation in brightness at the pixel level, similar to film grain. Color noise (also called chroma noise) appears as colored speckles, typically red, green, or blue dots concentrated in shadow regions. Color noise is generally easier to remove because it is spectrally distinct from real image detail — denoising algorithms can identify abnormal color variation in pixels and suppress it without degrading the actual luminance detail in the image. Luminance noise is harder because it mimics texture: aggressive luminance noise reduction can erase fine detail like hair, fabric weave, or skin pores alongside the noise itself. Most professional workflows remove color noise heavily (it is almost always an artifact) and apply luminance reduction more conservatively to preserve perceived sharpness and texture."
  - q: "How does NAFNet AI noise reduction work differently from Lightroom's noise reduction slider?"
    a: "Lightroom's noise reduction uses a classical approach: it analyzes the statistical properties of the image and applies a spatially adaptive filter that blurs high-frequency variations (noise) while trying to preserve high-contrast edges (real detail). It is fast and broadly effective but does not know what the scene actually looked like — it can only reason about pixel statistics. NAFNet (Nonlinear Activation Free Network) is trained on 30,000 matched pairs of real noisy and clean photographs from the SIDD benchmark dataset, captured across 10 smartphone cameras under controlled conditions. During training, NAFNet learned to directly map noisy pixel patterns to clean equivalents. At inference, it applies that learned mapping to your photo rather than estimating noise from statistics alone. The result is that NAFNet recovers fine texture and detail that traditional filters either smear or remove — it knows what clean noise-free detail is supposed to look like, not just what it should not look like."
  - q: "What is the 'plastic skin' effect in noise reduction, and how do I avoid it?"
    a: "The plastic skin effect occurs when noise reduction is applied too aggressively to portrait photographs: the denoiser removes not just the random grain but also the micro-texture of skin — fine pores, subtle skin texture, and surface irregularity — leaving the face with an unnaturally smooth, waxy, or airbrushed appearance. This happens both in AI denoisers and in traditional sliders when strength settings are pushed too high. To avoid it, use the minimum noise reduction strength that makes the image acceptable rather than the maximum. In Lightroom, bring the noise reduction slider to where the obvious colored speckles disappear, then stop. In AI denoising tools, if the output looks plastic or over-processed, look for a blend or strength slider and reduce it by 30–40%. Viewing the image at 100% zoom while adjusting is essential — zoom levels below 100% can hide over-smoothing that is obvious in print."
  - q: "When should I use Lightroom noise reduction versus an AI denoiser like ArtImageHub?"
    a: "Lightroom's built-in Denoise (the AI-powered version introduced in 2023) and ArtImageHub's NAFNet-based denoiser both produce good results on modern camera raw files. Use Lightroom Denoise when you are already editing in a Lightroom workflow, working with raw files, and the noise is moderate (ISO 800–3200 range). The raw file advantage means Lightroom Denoise can work with significantly more image data than a JPEG-based AI tool can. Use ArtImageHub when you are working with JPEGs or scanned photos where raw data is not available, when Lightroom output looks over-processed or missing detail, or when you want to combine denoising with enhancement, sharpening, or colorization in one step. At $4.99 one-time, ArtImageHub is also the better option if you do not have a Lightroom subscription — the per-tool pricing makes it accessible without committing to an ongoing software subscription."
---

> **Quick path to clean photos**: [ArtImageHub's photo denoiser](/photo-denoiser) uses NAFNet trained on real noisy/clean pairs — upload a noisy JPEG or scan, get a clean version in under 60 seconds. Also available: [photo deblurring](/photo-deblurrer), [JPEG artifact removal](/jpeg-artifact-remover), [photo enhancement](/photo-enhancer), [old photo restoration](/old-photo-restoration), and [photo colorization](/photo-colorizer). **$4.99 one-time per tool, no subscription.**

Every photographer who has shot in low light has faced it: a photo that looked fine on the camera's LCD turns out to be a mess of speckles, colored dots, and grain when viewed at full size on a monitor. Photo noise is one of the most common image quality problems, and noise reduction is one of the most frequently misunderstood steps in the editing workflow.

This guide covers what photo noise actually is, the three main types and why they respond differently to correction, how AI-based noise reduction works compared to traditional tools, and the practical workflow for getting cleaner images without sacrificing texture.

## What Is Photo Noise, and Where Does It Come From?

Photo noise is random variation in the brightness and color values of pixels, caused by the electronic behavior of the camera sensor. When light hits the sensor, each photosite (the individual light-sensitive element) converts photons to an electrical charge. That charge is then amplified and converted to a digital value. The problem: every amplification step also amplifies random electrical fluctuations inherent in the electronics — thermal motion of electrons, quantization errors, and read noise from the analog-to-digital converter.

The result is that even if two adjacent pixels received exactly the same amount of light, their recorded values will differ slightly due to this random electronic noise. Multiply that across millions of pixels, and the pattern appears as visible grain or speckle.

Noise is always present, but becomes visible primarily in two situations: high ISO settings (where the signal is aggressively amplified, amplifying noise proportionally) and underexposed shadow regions (where the signal is weak relative to the noise floor).

## What Are the Three Types of Photo Noise?

Understanding which type of noise you are dealing with determines how aggressively and with which tools you should address it.

**Luminance noise** is the most common type. It appears as grayscale grain — random variation in the brightness value of pixels, with no systematic color cast. Luminance noise looks similar to film grain and can actually feel natural or pleasing at low levels. At higher levels it obscures fine detail and makes images look digitally "crunchy." It is the hardest type to remove without also removing legitimate texture.

**Color noise** (also called chroma noise) appears as colored speckles — typically pink, green, or blue dots concentrated in shadow regions. Color noise almost never looks intentional or pleasing; it is an artifact of the camera demosaicing and amplification process. Fortunately, it is also the easiest type to remove, because colored speckles in a low-light shadow are spectrally anomalous — they are clearly distinct from real image detail.

**Fixed-pattern noise and banding** is less common in modern cameras but appears in long-exposure photography and some older sensors. Instead of random speckle, fixed-pattern noise appears as systematic repeating patterns — horizontal or vertical stripes (banding), or a consistent noise pattern that appears the same in every frame. Banding is often caused by sensor read noise or electrical interference and requires different correction approaches than random noise.

## How Does AI Noise Reduction Work? (NAFNet and SIDD Training)

Traditional noise reduction — the kind behind Lightroom's Luminance slider — works by analyzing the statistical properties of the image itself. The algorithm looks for high-frequency variation (noise) and separates it from high-frequency detail (real edges and texture) using edge detection, frequency analysis, or spatial filtering. This approach has no prior knowledge of what the scene looked like; it is reasoning purely from the pixels in front of it.

AI-based noise reduction works from learned examples rather than statistical rules. ArtImageHub's denoiser uses [NAFNet (Nonlinear Activation Free Network)](https://arxiv.org/abs/2204.04676), trained on the SIDD (Smartphone Image Denoising Dataset) benchmark — a dataset of approximately 30,000 matched noisy and clean image pairs captured across 10 smartphone cameras in controlled conditions. Each training pair shows the same scene under the same lighting, with one image deliberately noisy and the other clean.

During training, NAFNet learned to directly map noisy pixel patterns to their clean equivalents. At inference, it applies that learned mapping to your image. Because NAFNet has seen tens of thousands of examples of what real noise looks like and what clean images look like, it can recover fine texture that traditional filters would smooth away — it knows what a clean noise-free edge or skin texture is supposed to look like, not just what random variation statistically looks like.

## Step-by-Step Noise Reduction Workflow

**Step 1: Assess the noise type first.** Open the image at 100% zoom and look at a shadow region. Are the artifacts colored speckles (color noise), gray grain (luminance noise), or systematic stripes (banding)? This determines your approach.

**Step 2: Fix color noise first, fully.** Whether in Lightroom or an AI tool, color noise is almost always pure artifact — remove it aggressively. In Lightroom, a Color Noise Reduction value of 25–40 removes most chroma noise without affecting image quality.

**Step 3: Apply luminance noise reduction conservatively.** Bring luminance reduction up until the obvious grain pattern softens, then stop before the image looks smooth or plastic. Texture in hair, fabric, and skin should still look slightly rough — that is correct.

**Step 4: Run AI denoising on problem images.** For images where Lightroom's classical approach leaves visible artifacts, or for scanned JPEGs where raw data is unavailable, upload to [ArtImageHub's photo denoiser](/photo-denoiser). The NAFNet model will apply its learned mapping and return a clean version.

**Step 5: Evaluate at 100% zoom before saving.** Check texture areas (skin, fabric, grass) as well as smooth areas (sky, walls). Over-denoising is most obvious in texture areas; under-denoising is most obvious in smooth areas against a background.

## The Noise Reduction Strength Tradeoff

Every noise reduction approach faces the same fundamental tradeoff: noise and fine detail occupy the same spatial frequencies. Removing one tends to reduce the other.

Over-denoising creates the "plastic" look — skin becomes waxy, grass becomes a smooth green smear, and the image loses the micro-texture that gives it a sense of reality. Under-denoising leaves visible grain that is distracting at normal viewing distances.

The correct target is the minimum strength that makes the noise non-distracting. For images that will be shared at small sizes (social media, messaging apps), slightly stronger denoising is acceptable because fine detail is not visible at those resolutions. For images that will be printed at 8×10 or larger, or displayed at 100% on a large monitor, preserve more texture even if it means leaving some residual luminance grain.

## When to Use Lightroom NR vs. AI NR

Use **Lightroom Denoise** (the AI-powered version, not the classical slider) when you have raw files and a Lightroom subscription. Raw files contain significantly more data than processed JPEGs, and Lightroom Denoise can leverage that full raw data for cleaner results on modern camera images.

Use **ArtImageHub's [photo denoiser](/photo-denoiser)** when you are working with JPEGs or scanned images (no raw available), when Lightroom produces over-smoothed or artifacted results, when you want to combine denoising with [photo enhancement](/photo-enhancer) or [JPEG artifact removal](/jpeg-artifact-remover) in one workflow, or when you do not have a Lightroom subscription. The one-time $4.99 pricing means you are not locked into a monthly fee for occasional use.

For scanned film photographs with both grain and age-related fading, combining the denoiser with [old photo restoration](/old-photo-restoration) is often the most effective path — restoration handles the damage while denoising handles the grain from the film stock itself.
