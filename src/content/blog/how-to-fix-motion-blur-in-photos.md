---
title: "How to Fix Motion Blur in Photos: Camera Shake vs Subject Blur Explained"
description: "Learn how to identify and fix motion blur in photos — camera shake vs subject motion, what AI can and can't fix, and how NAFNet's GoPro-trained model handles real-world blur."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Nathan Kim"
authorRole: "Sports & Action Photographer"
authorBio: "Nathan Kim has spent over a decade photographing fast-moving subjects — motorsport, wildlife, youth athletics — and now writes about the physics of light and motion as they apply to image capture and recovery. He tests AI restoration tools with a critical eye shaped by years of seeing blur in the field."
category: "How-To"
tags: ["Motion Blur", "Photo Deblurring", "Camera Shake", "Sports Photography", "Action Photography"]
image: "/blog/how-to-fix-motion-blur-in-photos.jpg"
coverColor: "from-red-500 via-orange-600 to-amber-700"
coverEmoji: "⚡"
faq:
  - question: "What is the difference between camera shake blur and subject motion blur?"
    answer: "Camera shake blur happens when the camera itself moves during exposure — handheld shooting at slow shutter speeds, pressing the shutter button too hard, or shooting from a moving vehicle. The entire frame shifts uniformly in one direction. Subject motion blur happens when the camera is stationary but the subject moves — a runner crossing the frame, a child waving their arm. This type affects only the moving subject while the background stays sharp. Identifying which type you have changes your fix strategy significantly. Camera shake produces uniform directional smearing across the whole image. Subject motion blur creates streaking on the moving object only, often with the background perfectly focused. AI deblurring tools like NAFNet are trained primarily on camera motion sequences and perform best on camera shake. Selective subject motion blur is a different, harder problem that requires different processing."
  - question: "Can AI fix motion blur completely?"
    answer: "It depends on severity. AI deblurring tools like NAFNet work best on moderate camera shake — the kind you get from handheld shooting at 1/30s or slower with a 50mm lens. In those cases, the underlying edge information still exists in the blurred pixels and the model can recover it. What AI struggles with: extreme subject motion that has created ghosting (two partially overlapping exposures of the same subject), blur so severe that edge information is entirely gone (effectively motion-averaged to a flat gradient), and mixed blur types where both camera and subject moved simultaneously in different directions. A useful mental model is that AI deblurring is a reconstruction task, not a magic eraser. If the edges were captured but smeared, reconstruction is possible. If they were never captured at all, they cannot be recovered."
  - question: "Why does NAFNet perform better on motion blur than older AI deblurring tools?"
    answer: "NAFNet (Nonlinear Activation Free Network) was trained on the GoPro dataset, which consists of real handheld camera motion sequences — actual video frames captured at high speed, then computationally averaged to simulate realistic motion blur. Earlier deblurring tools were often trained on synthetically generated blur (applying a Gaussian or linear kernel to a sharp image), which doesn't match how real-world motion blur is distributed across a photo. The GoPro dataset captures the asymmetric, spatially varying nature of real camera movement. NAFNet also uses a simplified architecture without nonlinear activations in key layers, which reduces artifacts while maintaining sharp edge recovery. The practical result is that NAFNet handles real-world handheld blur better than tools trained on artificial blur kernels."
  - question: "What shutter speed should I use to avoid motion blur?"
    answer: "The classic rule of thumb is the reciprocal rule: your shutter speed denominator should be at least equal to your focal length in millimeters. A 50mm lens needs at least 1/50s; a 200mm telephoto needs at least 1/200s. This rule assumes no image stabilization. With optical image stabilization (OIS) or in-body image stabilization (IBIS), you can typically go 2–4 stops slower — a 50mm with effective 3-stop IS could shoot at 1/6s and still get sharp results handheld. For moving subjects, the rule changes entirely: you need to freeze the subject, which depends on how fast they move across the frame, not your focal length. A sprinter crossing the frame at 10 meters per second typically needs 1/500s or faster. Burst mode helps by increasing the probability of catching a frame at peak pose where motion is momentarily halted."
  - question: "How do I use ArtImageHub's photo deblurrer to fix motion blur?"
    answer: "Upload your blurry photo at the highest resolution you have — larger files give the AI more pixel data to work with during reconstruction. The tool applies NAFNet processing tuned for real camera motion. For best results, use uncompressed or lightly compressed originals rather than heavily compressed JPEGs, which layer JPEG artifacts on top of blur, complicating the reconstruction. If your photo also has JPEG compression artifacts, run the JPEG artifact remover first before deblurring. After deblurring, you may find residual softness; running the photo through the photo enhancer as a second pass often sharpens overall clarity. ArtImageHub charges $4.99 one-time for the deblurrer — no subscription, unlimited uses after purchase. Results typically take 30–60 seconds depending on image size."
---

> **Tools used in this guide**: [Photo Deblurrer](/photo-deblurrer) (NAFNet, GoPro-trained) · [Photo Denoiser](/photo-denoiser) · [JPEG Artifact Remover](/jpeg-artifact-remover) · [Photo Enhancer](/photo-enhancer) · All tools at [ArtImageHub](/photo-enhancer) — $4.99 one-time, no subscription.

---

Motion blur is one of the most misunderstood problems in photography. Photographers often blame themselves for a blurry photo when the physics were working against them, or — worse — assume AI can't help when it actually can. Understanding *why* blur happens determines whether you can fix it, and how.

## What Actually Causes Motion Blur in Photos?

Every photo is a time average. Your camera sensor doesn't capture an instant — it captures all the light that arrives during the shutter's open period. When anything moves during that window, the sensor records its entire trajectory smeared across the pixels.

Two different things can move:

**The camera itself** — from handholding, pressing the shutter button, wind, or camera shake during a slow exposure. When this happens, every point in the scene traces a path across the sensor. The blur is *global* — the entire frame shifts in the same direction, uniformly.

**The subject** — a sprinter, a waving hand, a car passing through. The camera is fixed but the subject's light trace moves across sensor pixels during exposure. This creates *selective* blur — the background is sharp, only the moving object is smeared.

This distinction matters enormously when deciding what to do next.

## How Do You Identify Which Type of Blur You Have?

Look at three things:

1. **Is the blur uniform across the frame or localized?** Uniform directional smearing across everything — including the background — points to camera shake. Blur confined to a moving subject against a sharp background points to subject motion.

2. **What direction does the blur streak?** Camera shake typically streaks in a single direction (diagonal, vertical, or horizontal depending on how the camera moved). Subject motion streaks in the direction the subject was moving.

3. **Is there any sharp area anywhere in the frame?** If even one part of the background is sharp, camera shake is largely ruled out. If the *only* sharp area is the background, you have subject motion blur.

Mixed cases exist: handheld shooting of a moving subject at a slow shutter speed gives you both types simultaneously, which is the hardest scenario to fix.

## Why NAFNet Works for Real-World Camera Shake

AI deblurring tools are not all equal — the training data determines what they can handle.

[ArtImageHub's photo deblurrer](/photo-deblurrer) uses NAFNet (Nonlinear Activation Free Network), trained on the GoPro dataset. This distinction matters. The GoPro dataset consists of real handheld camera motion sequences: high-speed video frames captured at 240fps, then averaged computationally to produce realistic motion-blurred images. The ground-truth sharp frame and the blurred frame exist as matched pairs.

Earlier deblurring tools were often trained on synthetic blur — taking a sharp image and mathematically applying a Gaussian or linear kernel. This is a reasonable approximation but doesn't capture the complex, spatially varying nature of how cameras actually shake. Real handheld motion is asymmetric and changes direction mid-exposure. Synthetic kernels are typically uniform.

NAFNet trained on real blur sequences recognizes patterns that match actual camera shake, which is why it outperforms older tools on photographs taken handheld in low light.

## What Motion Blur AI Can Fix — and What It Can't

**AI deblurring handles well:**
- Moderate camera shake from handheld shooting (1/15s to 1/60s, standard lens)
- Uniform directional blur where edge information survives in the smear
- Photos where you can still make out subject outlines, even if softly

**AI can partially improve:**
- Mild subject motion blur where the subject wasn't moving extremely fast
- Mixed camera + subject blur in mild-to-moderate cases
- Slightly ghosted images where two exposures partially overlap but one is dominant

**AI cannot recover:**
- Extreme subject motion creating fully ghosted double exposures (e.g., a person at two distinct positions simultaneously)
- Blur so severe that edges have averaged to a flat gradient — the information was never captured
- Very fast-moving subjects photographed at 1/15s or slower (a runner at that shutter speed has traveled a meter during exposure)

The underlying constraint is information-theoretic: if the camera never recorded the edge, no reconstruction algorithm can generate it from physics. AI deblurring is a reconstruction task, not image generation.

## Step-by-Step: Fixing Motion Blur with ArtImageHub

1. **Identify your blur type** using the three checks above (uniform vs selective, direction, any sharp areas)
2. **Prepare your file** — use the highest resolution original you have, uncompressed if possible. Avoid re-saving as JPEG multiple times before uploading
3. **Check for JPEG artifacts first** — if your photo has compression blocking visible, run the [JPEG artifact remover](/jpeg-artifact-remover) before deblurring; stacked artifacts complicate reconstruction
4. **Upload to the [photo deblurrer](/photo-deblurrer)** — let NAFNet process the blur; this takes 30–60 seconds
5. **Evaluate the result** — check edges in the blurred areas; if sharpness improved but feels slightly soft, run a second pass through the [photo enhancer](/photo-enhancer)
6. **If noise is present** — motion blur and noise often co-occur in low light; after deblurring, run the [photo denoiser](/photo-denoiser) to clean residual grain

## Tips to Avoid Motion Blur at Capture

Fixing blur in post is always second-best to avoiding it. A few fundamentals:

**Shutter speed — the reciprocal rule**: As a baseline, your shutter speed denominator should equal or exceed your focal length. 85mm portrait lens: 1/85s minimum, round up to 1/100s. 300mm telephoto: 1/300s minimum. This is for camera shake only — moving subjects need faster speeds.

**Image stabilization**: Optical (OIS) or in-body (IBIS) stabilization typically gives you 2–4 stops of latitude. This buys back meaningful handheld speed in low light, but does nothing for subject motion.

**Burst mode**: For moving subjects, shoot bursts rather than single frames. Athletes, children, and animals often have natural pose peaks — a moment of minimal relative motion at the top of a jump, start of a stride. Burst mode increases your probability of catching that frame.

**Subject speed and direction**: Subjects moving toward you blur far less than subjects crossing your frame at the same speed. A car driving toward you at 60 mph needs a fraction of the shutter speed of the same car crossing laterally.

---

Motion blur is often fixable if the underlying image information survived the exposure. [ArtImageHub's photo deblurrer](/photo-deblurrer) — $4.99 one-time, built on NAFNet trained on real-world camera motion — is built exactly for the camera shake scenario that ends most blurry photos. Try it before deciding a shot is lost.

*Also useful: [Old Photo Restoration](/old-photo-restoration) for vintage images with combined blur and age damage, and [Photo Colorizer](/photo-colorizer) if your restored photo needs color added.*
