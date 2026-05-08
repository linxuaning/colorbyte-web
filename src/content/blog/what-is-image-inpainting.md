---
title: "What Is Image Inpainting? How AI Fills Missing Areas in Damaged Photos"
description: "A technical guide to image inpainting — how AI models like LaMa reconstruct missing or damaged regions in photographs, and the difference between reconstruction and recovery."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["Image Inpainting", "LaMa", "Photo Restoration", "AI Photo Repair"]
image: "/blog/ai-restoration-technology.jpg"
coverColor: "from-amber-500 via-orange-600 to-red-700"
coverEmoji: "🖼️"
---

When a photograph has a physical tear running through it, a water stain that has eaten through the emulsion, or a section where the paper has been burned away, the underlying information is genuinely gone. No amount of denoising, upscaling, or enhancement can recover pixels that were never captured. But AI inpainting — the task of filling in missing image regions in a way that is visually coherent with the surrounding content — can produce results that are convincing and emotionally satisfying even when literal recovery is impossible.

Understanding what inpainting actually does, which AI models handle it best, and where it fits in a restoration pipeline helps set appropriate expectations for what AI photo restoration can and cannot accomplish.

## What Is Image Inpainting Technically?

Image inpainting is the task of filling in a specified region of an image — the "mask" — with content that is visually consistent with the surrounding unmasked pixels. The mask typically corresponds to physically damaged or missing areas in a photograph: tears, holes, burn marks, mold damage, or scratch lines.

The core challenge is that inpainting is an underdetermined problem. For any given masked region, there are multiple valid completions consistent with the surrounding context. A torn corner of a portrait might reasonably be completed with a continuation of a wooden wall, floral wallpaper, or a solid background — all consistent with the edges, all impossible to distinguish from each other based on surrounding pixels alone.

Early inpainting methods were patch-based: they searched the unmasked portion of the image for patches similar to the masked region's boundary and copied or blended those patches into the hole. These approaches worked well for simple repetitive textures (brick walls, grass, plain backgrounds) but failed on complex, non-repetitive content like faces, hands, or scene intersections.

Deep learning inpainting models replaced patch search with learned priors — neural networks that have internalized statistical regularities of natural images and can synthesize plausible completions even for non-repetitive, semantically complex masked regions.

## How Does LaMa Work for Large Mask Inpainting?

LaMa (Large Mask inpainting) was introduced by Suvorov et al. in 2022 with a specific focus on the failure modes of earlier deep learning inpainting models: difficulty handling large masks and repeating textures.

The key architectural innovation in LaMa is the use of **Fast Fourier Convolutions (FFC)** in the generator. Standard convolutional operations have a limited receptive field — each convolution layer combines information from a local neighborhood. For large masks that cover a significant fraction of the image, this limited receptive field means that edge layers of the network cannot see the global context needed to synthesize coherent completions.

Fast Fourier Convolutions operate in the frequency domain, giving every spatial location in a feature map immediate access to global image information. A single FFC layer can integrate context from across the entire image in one operation. This makes LaMa dramatically more effective than standard convolutional models on large irregular masks — the kind that commonly occur in physically damaged photographs.

LaMa is also trained with a high proportion of large mask examples, which forces the model to learn to complete substantial missing regions rather than primarily optimizing for small mask completion. This training strategy is directly relevant to photo restoration, where damage often covers significant image area rather than isolated pixels.

## What Is the Difference Between Reconstruction and Recovery in Inpainting?

This distinction is critical for understanding what inpainting actually delivers.

**Recovery** would mean reconstructing the original pixel content with accuracy — producing the exact facial features, clothing pattern, or background detail that was present in the photograph before damage. Recovery is only possible if the missing information can be inferred from remaining content with high confidence. A small nick through a uniform sky region can be recovered accurately because the surrounding content strongly constrains the missing pixels.

**Reconstruction** means generating plausible content consistent with the surrounding image — content that looks right and integrates seamlessly but may not match the original in its specific details. Inpainting a torn section through a face produces a face that looks like the same person (using surrounding facial context) but may not accurately reconstruct the specific expression, exact feature placement, or subtle identity cues that were in the torn area.

For practical photo restoration, reconstruction is often sufficient and emotionally meaningful even when literal recovery is impossible. A family portrait where a tear through a background wall is seamlessly reconstructed serves its purpose of preserving family memory. The important constraint is not to misrepresent reconstruction as recovery: the inpainted photograph is an artifact of restoration, not a literal historical record.

## How Does Diffusion-Based Inpainting Compare to LaMa?

Diffusion models — the same architecture behind Stable Diffusion and DALL-E — have been adapted for inpainting and produce impressive results on complex masked regions. Diffusion-based inpainting works by progressively denoising a random noise initialization within the masked region, conditioned on the surrounding unmasked content.

The advantages of diffusion-based inpainting include higher output diversity (multiple plausible completions rather than a single deterministic output) and stronger semantic understanding of complex scenes (diffusion models trained on large web-scale datasets have learned detailed knowledge of objects, people, and scene structure).

The disadvantages for old photo restoration include higher computational cost (diffusion inpainting typically requires 20 to 100 model forward passes versus one for LaMa), the risk of generating content that is visually coherent but semantically anachronistic (a diffusion model might complete a 1930s portrait with stylistically modern elements if context is ambiguous), and harder controllability.

For most photo restoration applications, LaMa provides the best practical balance: excellent performance on the large irregular masks common in damaged photographs, fast inference, and a single deterministic output that integrates cleanly with surrounding restoration pipeline steps.

## How Does Inpainting Fit in the Full Photo Restoration Pipeline?

Inpainting is typically applied as an early step in the restoration pipeline, before denoising and upscaling. The reasoning: denoising (NAFNet) and upscaling (Real-ESRGAN) work best on continuous image content. If a large masked region is inpainted first, the subsequent denoising and upscaling steps treat the inpainted region as regular image content and apply appropriate processing across the full image consistently.

The alternative — denoising and upscaling the damaged image and then inpainting — can produce edge discontinuities where the inpainting boundary intersects processed versus unprocessed pixel regions.

For face regions specifically, running inpainting before GFPGAN face enhancement gives the face model a complete (if reconstructed) face region to work with. A torn section through an eye or mouth region, if left unmasked, causes GFPGAN to produce degraded or distorted face enhancement. Inpainting the mask first allows GFPGAN to operate on a complete face and produce coherent enhancement.

ArtImageHub's old photo restoration pipeline at $4.99 one-time includes automatic damage detection and inpainting for common damage types, followed by NAFNet denoising, GFPGAN face enhancement, and Real-ESRGAN upscaling.

## Frequently Asked Questions

## How does inpainting detect which areas of a photo are damaged?

Inpainting models require a mask that specifies which regions should be filled. Automatic mask generation for photo restoration typically uses a combination of anomaly detection (identifying pixels that differ statistically from surrounding expected content, indicating damage), edge detection (locating discontinuities that indicate tears or cracks), and color analysis (identifying discolored regions from staining, mold, or fading). For common damage types — linear scratches, rectangular missing corners, uniform stain patterns — automatic detection is reliable. For complex or unusual damage patterns, user-guided mask drawing provides more precise control. Most restoration interfaces allow both automatic and manual mask specification. The quality of the inpainted result depends significantly on the quality of the mask: over-masking (masking undamaged areas) causes unnecessary synthesis, while under-masking (leaving edges of damaged areas included) can create seam artifacts.

## Can inpainting reconstruct faces that have been damaged?

Yes, with meaningful but bounded quality. Face inpainting benefits from strong learned facial priors — neural networks trained on vast face datasets have learned the statistical structure of faces and can generate plausible facial content within masked regions. For small damage areas (a scratch through a cheek, a nick through a forehead), inpainting produces natural-looking reconstruction that integrates well with the rest of the face. For large damage areas covering significant facial features — half a face missing, eyes entirely gone — the reconstruction is less likely to match the original person's actual features and more likely to represent a plausible generic face consistent with the surrounding context. Running GFPGAN face enhancement after inpainting improves results by sharpening and enhancing the reconstructed face region using a face identity prior, though this cannot recover lost identity information.

## Is inpainting considered authentic preservation or falsification?

This depends entirely on context and disclosure. For personal family photographs, inpainting for the purpose of making a photograph presentable, printable, and emotionally meaningful is widely accepted practice — equivalent to the manual retouching that professional darkroom technicians performed for decades. The obligation is to preserve the original damaged photograph as the primary archival record and present the inpainted version as a restored derivative, not as the original. For institutional archives, historical publications, or legal evidence, inpainting introduces synthesized content and must be explicitly disclosed. International archival standards generally permit inpainting for reproduction and educational materials when clearly labeled, but not for primary collection records. The responsible practice at any level is to keep the original, document the restoration process, and disclose the synthetic nature of inpainted regions when presenting the work in any context where historical accuracy matters.

## Does inpainting work on photos where stains discolor but do not remove the underlying emulsion?

Stain removal where the underlying emulsion is intact but discolored is technically a different task from inpainting where emulsion is missing, though the tools often overlap. For stains where the underlying image is still present but tinted by contaminant (water stains, mold blooms, ink spills), the restoration task is color correction within the stained region to match surrounding tone rather than content synthesis. LaMa can address this by treating the stain area as a masked region and synthesizing content consistent with surroundings, but the result is a reconstruction rather than a recovery of the original. In practice, for stains that cover background areas, either approach works well. For stains over important subject content, guided editing with the original image as reference and manual color correction of the stained region sometimes preserves more of the original content than full inpainting of the area.

## How large a damaged area can inpainting effectively fill?

LaMa was specifically designed for large-mask inpainting and handles masks covering 40 to 60 percent of image area in its benchmark evaluations. For photo restoration purposes, masks covering less than 20 percent of image area almost always produce seamless, convincing results. Masks from 20 to 40 percent produce good results for backgrounds and relatively uniform content, with more variability on complex subjects like faces or hands. Masks covering more than 40 percent of the image area, particularly when the masked regions overlap critical subject matter, produce reconstructions that are visually coherent but increasingly deviate from any original content. At this level of damage, the appropriate expectation shifts from restoration to reconstruction: the resulting image is a plausible photograph of the same subject, not a recovery of the damaged original.
