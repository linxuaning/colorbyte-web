---
title: "How to Fix Blurry Underwater Photos with AI Enhancement"
description: "Why underwater photos come out blurry, green-tinted, and low in detail — and how AI photo tools using NAFNet, Real-ESRGAN, and SwinIR can recover them without specialized software."
publishedAt: "2026-05-07"
updatedAt: "2026-05-07"
author: "Priya Sundaram"
authorRole: "Marine Photographer and Dive Instructor"
authorBio: "Priya has been documenting coral reef ecosystems across the Indo-Pacific for twelve years, combining her work as a PADI master instructor with freelance marine photography. She has contributed images to environmental research publications and dive tourism campaigns."
category: "How-To"
tags: ["Underwater Photography", "Photo Enhancement", "Blurry Photos", "AI Tools", "Scuba Diving"]
image: "/blog/fix-blurry-underwater-photos.jpg"
coverColor: "from-teal-500 via-cyan-600 to-blue-700"
coverEmoji: "🤿"
faq:
  - question: "Why do underwater photos always look blurry, green, and low in contrast?"
    answer: "Several physical factors combine to degrade underwater photo quality. Water absorbs red and orange wavelengths first as depth increases, causing the characteristic blue-green color cast that starts appearing beyond 3 meters. Particles suspended in the water — phytoplankton, sediment, marine snow — scatter light and reduce the contrast between subject and background, a phenomenon called backscatter. Water also refracts light differently than air, changing how camera lenses focus, which introduces softness especially at wider apertures. Finally, most underwater cameras use small sensors that struggle in the already-reduced ambient light of any depth below the surface, producing noisy, soft images. AI tools address the sharpness and noise components of this problem, though they cannot reverse color-channel absorption — a separate color correction step is recommended before AI enhancement for best results."
  - question: "Can AI deblurring fix photos taken through a dive mask display or housing port?"
    answer: "AI deblurring works on the optical softness introduced by housing ports, particularly dome ports that are not perfectly aligned or flat ports that introduce additional refraction at wide angles. NAFNet, the deblurring model in ArtImageHub's pipeline, is trained on real-world blur patterns including those from lens and optical element imperfections. The improvement on housing-port softness is moderate — noticeable on images where the core subject detail is present but visually soft, less impactful on images where the housing introduced significant distortion rather than pure softness. For photos taken through smartphone waterproof pouches, which often produce heavy optical degradation, AI enhancement can recover usable quality from mildly affected shots but cannot fully compensate for severe pouch distortion."
  - question: "What is the best workflow for fixing color and sharpness in underwater photos?"
    answer: "The recommended workflow is two-step: correct color first, then run AI enhancement. Use a photo editor (Lightroom, Snapseed, or even a free web editor) to remove the blue-green cast before uploading to ArtImageHub. Increase warmth, raise the red channel, and reduce the blue and green channels until the white balance looks approximately natural. Then upload the color-corrected image to Photo Enhancer for AI deblurring, noise reduction, and upscaling. Correcting color first gives the AI model a more accurate input to work from, and the AI enhancement then recovers sharpness and detail that was masked by the color cast. Running AI enhancement on an uncorrected green image produces sharper results but the green cast remains — you will still need to color correct afterward."
  - question: "Does AI enhancement work on GoPro underwater photos specifically?"
    answer: "Yes, and this is one of the strongest use cases. GoPro cameras in dive housings or waterproof cases produce underwater footage and stills that suffer from all the issues described — color cast, backscatter softness, compression, and small-sensor noise. Extracting still frames from GoPro dive footage and running them through ArtImageHub's Photo Enhancer using NAFNet and Real-ESRGAN recovers significantly more detail than the raw frame shows. The AI upscaling also compensates for the effective resolution reduction caused by underwater haze and backscatter. For dive travel documentation and social media sharing, AI-enhanced GoPro underwater stills are a meaningful step up from unprocessed frames. The same session covers both the Photo Enhancer and all other ArtImageHub tools for $4.99 one-time."
  - question: "How much improvement can I realistically expect from AI on underwater photos?"
    answer: "The improvement depends heavily on how much signal — recoverable detail — exists in the original image. For photos taken in clear water at shallow depth with reasonable ambient light, AI enhancement typically produces a noticeable sharpness improvement, reduced grain, and better definition of coral texture, fish scales, and fine detail. These are often dramatic enough to make a previously marginal shot usable for printing or sharing. For photos taken in murky water, at depth, or with heavy backscatter from flash, the improvement is more modest — the AI can sharpen what exists but cannot recover detail lost to scattering or absorption. As a rough guide: if you can see the subject clearly in the original but it just looks soft or grainy, expect good results. If the subject is barely visible through haze, expect partial improvement."
---

> **⚡ Quick fix**: Upload your underwater photo to [ArtImageHub Photo Enhancer](/photo-enhancer) — NAFNet deblurring, Real-ESRGAN upscaling, and SwinIR detail recovery in under 90 seconds, **$4.99 one-time**.

Underwater photography is one of the most challenging environments for any camera. Light behaves differently. Color disappears with depth. Water particles scatter flash and ambient light in every direction. And most cameras — from smartphones in waterproof pouches to dedicated dive cameras — are operating at or near the edge of their capabilities the moment they go below the surface.

The result is a familiar set of problems: photos that looked stunning through your mask but came out blurry, flat, and tinged green-blue on your phone screen. AI photo enhancement tools address the sharpness, noise, and detail components of this problem — often recovering images you would otherwise discard.

---

## Why Underwater Photos Lose Quality

Understanding the causes helps set realistic expectations for what AI can recover.

**Color absorption**: Water absorbs red wavelengths soonest. By 5 meters, reds are largely gone. By 10 meters, orange disappears. The resulting blue-green color cast is not a camera malfunction — it is physics. AI enhancement does not correct color absorption; a manual white balance correction step before AI processing produces better results.

**Backscatter**: Suspended particles in water — sediment, plankton, marine snow — reflect any light source (flash or ambient) back toward the camera. The result is a scattering of white dots and a haze between camera and subject. This reduces perceived contrast and sharpness even in photos where the subject itself is in focus.

**Refraction**: Water changes how light bends into a lens differently from air. Dome ports partially compensate for this, but flat ports introduce noticeable edge softness and apparent reduction of the effective aperture. Photos taken through flat housing ports or waterproof pouches have optical softness baked in.

**Sensor performance**: Depth reduces ambient light, forcing higher ISO settings on small-sensor cameras. More noise means softer-looking images with reduced fine detail.

---

## What AI Enhancement Addresses

ArtImageHub's pipeline applies four sequential models to each uploaded photo:

**NAFNet (deblurring and noise reduction)**: Trained on motion blur, optical softness, and noise patterns. For underwater photos, this recovers edge definition on coral structures, fish outlines, and any hard-edged subjects that were softened by housing optics or motion during the shot.

**Real-ESRGAN (AI upscaling)**: Upscales the image 2-4x using a generative model trained on photographic textures. For dive photos, this recovers apparent detail in coral polyps, fish scales, and sand texture that compression and backscatter had reduced.

**SwinIR (detail restoration)**: Works specifically on texture and fine detail recovery. Particularly useful for reef photography where fine branching structures, anemone tentacles, and small-scale patterns define the visual quality of the image.

**DDColor (colorization)**: Primarily useful for black-and-white historical photos, but occasionally helpful for extreme depth shots where color has completely disappeared.

---

## Step-by-Step: Recover a Blurry Dive Photo

**Step 1 — Color correct first**

Open the photo in Lightroom, Snapseed, or a free web editor. Add warmth (increase color temperature), boost the red channel, reduce the blue channel. The goal is to remove the worst of the color cast before AI processing, which gives the enhancement models a more accurate starting point.

**Step 2 — Export at full resolution**

Save the color-corrected photo at full resolution — JPEG at maximum quality (90+) or PNG. Do not resize down before AI processing.

**Step 3 — Upload to Photo Enhancer**

Go to [ArtImageHub Photo Enhancer](/photo-enhancer). Upload the color-corrected image. The AI pipeline processes it through NAFNet, Real-ESRGAN, and SwinIR in sequence. Typical processing time is 30-90 seconds.

**Step 4 — Download and review**

Compare the before/after in your photo viewer. For reef photos, look for recovered texture in coral branches and fish detail. For wide shots, check whether the midground subjects have improved definition.

**Step 5 — Additional restoration if needed**

Older dive photos from film cameras may benefit from [Old Photo Restoration](/old-photo-restoration), which applies CodeFormer and GFPGAN for fading and damage repair. Very dark night-dive shots with heavy noise may need a second pass through [Photo Enhancer](/photo-enhancer). All tools are available in the same $4.99 one-time session.

---

## Specific Use Cases

**Coral reef documentation**: Researchers and dive guides often need usable photo records of reef conditions over time. AI enhancement makes marginal shots usable for documentation purposes, extending the useful photo record from each dive.

**Dive travel memories**: You spent a week in the Maldives or Great Barrier Reef and want prints or framed photos. Running dive photos through AI enhancement before printing makes the difference between a technically soft souvenir and a genuinely sharp wall print.

**Social media sharing**: Dive communities on Instagram and other platforms respond to image quality. AI-enhanced underwater photos stand out compared to unprocessed GoPro or smartphone dive images.

**Fish identification**: Naturalists and marine hobbyists often need to identify species from photos taken during dives. AI sharpening can recover enough fin and marking detail to make an identification possible from a photo that was otherwise too soft.

---

> **Recover your dive photos**: [Upload to Photo Enhancer →](/photo-enhancer) — or try [Old Photo Restoration](/old-photo-restoration), [Photo Colorizer](/photo-colorizer), and [Photo Enhancer](/photo-enhancer) in the same session. $4.99 one-time, HD download included, no subscription.
