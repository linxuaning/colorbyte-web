---
title: "Why Does AI Photo Restoration Look Fake? How to Minimize Overcorrection Artifacts"
description: "A technical explanation of why AI photo restoration sometimes produces smooth, plastic-looking faces and hallucinated eyes — and what you can do to get more natural results."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["AI Photo Artifacts", "GFPGAN", "Photo Restoration Quality", "AI Photo Restoration"]
image: "/blog/default-restoration.jpg"
coverColor: "from-purple-500 via-violet-600 to-indigo-700"
coverEmoji: "👁️"
---

One of the most common complaints about AI photo restoration is that the results look artificial — faces appear unnaturally smooth, skin texture is absent or wrong, eyes look glassy or slightly misaligned, and the overall photograph has the uncanny quality of a heavily filtered social media portrait from a decade ago. This "AI look" is not a random glitch: it has specific technical causes rooted in how face enhancement models work, and understanding those causes reveals what you can do to minimize them.

## What Causes the "Plastic Skin" Appearance in AI Restoration?

The smooth, texture-free skin appearance — often described as plastic-like or waxen — is the most common overcorrection artifact in AI photo restoration, particularly from GFPGAN and similar face enhancement models.

GFPGAN works by aligning degraded face features with a learned "face prior" — a statistical model of what well-preserved faces look like. The face prior was learned from large datasets of high-quality face photographs, which are heavily biased toward studio and professional portraiture. Professional portrait photography, particularly from recent decades, includes large quantities of skin-smoothed images: retouched headshots, beauty photography, and portrait photography processed with smoothing filters.

When GFPGAN reconstructs a degraded face, it is generating texture from this learned prior. The prior's center of mass is smooth, lightly textured skin — because smooth-skin portrait photographs are over-represented in training data. The result is that GFPGAN applied to a normally-textured older face produces skin that looks younger and smoother than the original.

This over-smoothing increases with the severity of the input degradation. For mildly degraded photographs, GFPGAN's face alignment is guided by existing skin texture in the input, producing more natural results. For severely degraded photographs where very little skin detail is preserved, the model falls back more heavily on the learned prior, which pushes toward generic smooth skin.

## How Does GFPGAN Produce Eye Hallucination Artifacts?

Eye artifacts — glassy eyes, misaligned pupils, slightly wrong eye shape, added specular highlights that look artificial — are the second most common complaint about AI face restoration.

Eyes are the most information-dense region of any face photograph. Eye texture (iris pattern, pupil shape, sclera coloration, specular highlights from light sources) is highly specific to the individual and the exact lighting conditions at capture. This makes eyes extremely difficult for face enhancement models to restore accurately.

GFPGAN handles eyes through a combination of feature-guided alignment (using whatever eye structure is visible in the degraded input to guide placement) and generative completion (synthesizing missing detail from the face prior). For well-preserved faces, this works well. For severely degraded faces where eye detail is mostly lost, the model synthesizes eyes that look like eyes from its training distribution — generically attractive, uniformly sharp, with added specular highlights.

The added specular highlight is a specific tell. Lighting in old photographs often came from large windows or outdoor light sources that produce soft, diffuse reflections rather than sharp point-source catchlights. GFPGAN adds sharper catchlights more common in modern studio portraiture. In the context of a 1940s photograph with soft lighting everywhere else, these sharp eye specular highlights look anachronistic and artificial.

## Does Over-Sharpening Contribute to the Fake Look?

Yes. Real-ESRGAN's upscaling applies perceptual loss training that encourages the generation of high-frequency texture — sharp edges, clear detail, defined texture. For most image content, this is desirable. For faces, this sharpness can look wrong because it applies uniformly across all face regions, including skin areas where most natural photographs show smooth gradients rather than sharp texture.

The combination of GFPGAN's smooth skin (under-textured) and Real-ESRGAN's high-frequency sharpening (over-sharp edges and boundaries) creates a specific artifact pattern: smooth interior face regions with extremely sharp boundaries — hair edges, eyelash edges, jawline edges. This "sharp outside, smooth inside" pattern is one of the clearest signatures of AI face enhancement processing.

## Are There Other Common AI Photo Restoration Artifacts?

Several additional artifact patterns appear in AI-restored photographs:

**Color oversaturation**: AI restoration tends to over-saturate colors — faces may appear slightly too orange or red, skies too vivid blue, foliage too intensely green. This comes from training data that over-represents contemporary photography where color processing is more aggressive than historical photographic rendering.

**Background-face inconsistency**: GFPGAN processes detected face regions with high-quality dedicated enhancement, while non-face background regions are processed by Real-ESRGAN only. The rendering quality difference between GFPGAN-enhanced faces and Real-ESRGAN-enhanced backgrounds is sometimes visible as a subtle discontinuity at the face boundary.

**Uniform noise reduction**: NAFNet denoising is applied globally to the image. Areas with genuine fine detail — fabric texture, foliage, hair — may be slightly over-smoothed in the same pass that removes grain from smooth skin areas, because the optimal denoising strength for skin and for fine-textured surfaces differs.

**Hallucinated detail near image edges**: Real-ESRGAN occasionally generates spurious texture near image edges, where context from surrounding pixels is limited and the model falls back on trained priors for detail generation.

## How Can You Minimize These Artifacts for Better Results?

Several choices in the restoration workflow reduce the prominence of the "AI look":

**Submit the highest-quality input possible.** The more genuine facial information is present in the input scan, the more GFPGAN is guided by actual face structure rather than learned priors. A 600 DPI scan from a 4x6 print gives the model far more to work with than a 150 DPI scan. Higher-quality inputs reduce over-reliance on generic priors.

**Use TIFF or high-quality JPEG for scanning.** JPEG compression artifacts around face regions increase the extent to which GFPGAN treats those areas as fully degraded and falls back on prior-guided generation.

**Correct orientation before submission.** Faces should be upright (within 30 degrees of vertical) for GFPGAN face detection to work reliably. Tilted faces receive less accurate face-prior alignment, which can produce more generic-looking results.

**Apply post-restoration corrections.** After receiving the restored output, a few simple adjustments in any photo editor address the most common artifacts: reducing saturation by 10 to 20 percent corrects color oversaturation; a light texture overlay or slight noise addition reintroduces skin realism; reducing midtone contrast slightly reduces the over-sharpened look.

ArtImageHub's old photo restoration at $4.99 one-time applies the full pipeline — NAFNet, GFPGAN, and Real-ESRGAN — with settings tuned to balance restoration quality against overcorrection. The output can be further adjusted in any photo editor to taste.

## Frequently Asked Questions

## Is the "AI look" getting better with newer models?

Yes, meaningfully. Each generation of face restoration models has reduced the severity of overcorrection artifacts. GFPGAN version 1.4 (the current widely-deployed version) produces significantly more natural skin texture than version 1.3, which was already better than earlier code-era models. The improvement direction is toward higher-fidelity face prior training data (more diverse face datasets with less smoothing bias) and better weighting between prior-guided generation and input-guided feature alignment. Future models will reduce plastic skin and eye hallucination further. The "AI look" is recognizable today but was more pronounced two years ago and will be less pronounced two years from now.

## Does the AI look appear differently on photographs from different eras?

Yes, and the variation is predictable. Photographs from the 1950s through the 1990s — where the original print quality is high but grain and fading are the primary issues — show the least AI overcorrection, because more genuine facial information is available in the input. Photographs from before 1920, where resolution is lower, grain is coarser, and tonal rendering is different from the model's training distribution, show more overcorrection, because the model relies more heavily on learned priors to fill in degraded regions. Very early photographs (daguerreotypes, tintypes from the 1850s through 1880s) present the most significant overcorrection risk because their tonal and surface rendering is furthest from modern photographic norms.

## Should I use a lighter restoration setting if I am worried about the AI look?

If you have control over enhancement strength settings, lighter settings (lower GFPGAN strength, lower upscaling sharpness) produce more conservative results with less overcorrection but also less improvement in the regions that genuinely needed enhancement. Whether the tradeoff is appropriate depends on the specific photograph. For mildly degraded photographs with subtle grain and minor fading, lighter settings tend to look more natural. For severely degraded photographs where the original face detail is mostly lost, stronger settings produce more improvement despite the overcorrection risk. For photographs where the face detail is largely intact and only the background or overall tone needs work, applying face enhancement selectively (with a lower strength setting) while preserving natural face texture can be the best compromise.

## Is there any way to check whether a restoration is using original detail or generated detail?

You can compare the restored output to the original at the same scale and look for correspondence in fine detail. If specific facial features — the precise curve of a lip, an asymmetry in the eyes, the pattern of wrinkles — are preserved in the restoration and correspond to features visible (however degraded) in the original, the restoration is likely using original detail. If the restoration shows smooth, generic facial features with no correspondence to any visible structure in the original, the model is generating detail from priors. This comparison is most useful for evaluating whether the face restoration has captured the identity of the subject or replaced it with a generic plausible face.

## Does AI restoration affect historical authenticity of photographs?

AI restoration changes the visual character of a photograph in ways that affect its relationship to the historical record. The overcorrection effects described in this article — smooth skin, sharp modern eyes, vivid colors — reflect 2020s aesthetic norms rather than the tonal characteristics of the original photographic era. A restored 1930s portrait looks less like a well-preserved 1930s portrait and more like a contemporary photograph of a 1930s-dressed person. For personal family use, this modernization often makes the photograph more emotionally engaging and relatable. For historical documentation, the alteration of period-accurate tonal character should be disclosed and the original preserved as the primary archival record.
