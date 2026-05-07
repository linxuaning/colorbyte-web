---
title: "How to Fix Grainy and Low-Light Photos: Film Grain vs Digital Noise"
description: "Film grain and digital noise look similar but require different treatment. Learn how NAFNet targets real sensor noise patterns and what results are realistic to expect."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["Noise Reduction", "Film Grain", "NAFNet", "Photo Restoration"]
image: "/blog/how-to-fix-grainy-low-light-photos.jpg"
coverColor: "from-neutral-700 via-stone-700 to-zinc-800"
coverEmoji: "🌙"
faq:
  - question: "What is the difference between film grain and digital noise?"
    answer: "Film grain is a physical artifact created by silver halide crystals suspended in the emulsion layer of film. When light exposes the film, these crystals react and form clumps that constitute the image. The grain pattern is organic and random — it does not repeat in a structured way, it follows the luminance of the scene, and it is part of the photographic medium rather than an error. Digital noise is an electronic artifact caused by thermal variation and photon counting uncertainty in a camera sensor. At high ISO settings, the sensor amplifies the signal from low-light scenes, but this amplification also raises the noise floor. Digital chroma noise produces random colored speckles — most visible in shadow areas and on uniform surfaces like skin — that have no equivalent in film photography. The two look similar in a thumbnail but have different underlying structure, which is why NAFNet's training on real degradation data outperforms generic smoothing."
  - question: "Why does Kodak Tri-X grain look different from ISO 3200 digital noise?"
    answer: "Kodak Tri-X 400 pushed to ISO 1600 or 3200 in a darkroom produces large silver clumps distributed unevenly across the image, with more grain concentration in mid-tones and highlights and slightly less in shadows. The grain pattern is monochromatic in B&W processing, has relatively soft edges, and is distributed in a way that follows the tonal structure of the image rather than being uniform. ISO 3200 digital noise from a DSLR sensor produces two superimposed patterns: luminance noise (a fine random brightness variation similar in appearance to fine-grain film) and chroma noise (colored speckles — red, green, blue specks — that appear most strongly in shadow areas and have no film equivalent). The chroma component is the most immediately objectionable aspect of high-ISO digital files. Scanned Tri-X prints show organic, structured grain; high-ISO digital files show chaotic, multicolored speckle. Treatment approaches differ accordingly."
  - question: "How does NAFNet handle noise in scanned 35mm film photographs?"
    answer: "NAFNet is trained on real degradation data — actual photographs with actual noise patterns — rather than synthetically generated noise. When processing a scanned 35mm film photograph, NAFNet identifies the organic grain structure of silver halide film and distinguishes it from the signal it is trying to preserve. The network has learned to recognize the signature of film grain: its organic distribution, its relationship to luminance values, its lack of structured repetition. This allows NAFNet to reduce grain in a targeted way without applying global blur that would flatten fine detail. The practical result on a scanned Tri-X print is reduced grain without the plastic-smooth appearance that older noise reduction algorithms produced — NAFNet preserves genuine edge detail and tonal transition while reducing the random grain overlay. The degree of reduction is not unlimited: severely underexposed film where the grain is larger than the genuine image detail cannot be fully recovered."
  - question: "What resolution should I scan 35mm film at for best noise reduction results?"
    answer: "For 35mm film scanned at 600 DPI from a standard 35mm print (roughly 3.5×5 inches), the resulting file is approximately 2100×1500 pixels — adequate for screen display but limited for print. Scanning at 1200 DPI from the print gives approximately 4200×3000 pixels. However, the better approach when possible is to scan from the original negative rather than the print. A 35mm negative scanned at 4000 DPI produces approximately 5500×3900 pixels with significantly better tonal range than a print scan. The negative contains more information than the print because the printing process discards shadow and highlight detail at both ends of the tonal range. NAFNet operates on whatever file you upload; a higher-resolution source gives the model more genuine detail to preserve during noise reduction. After NAFNet denoising, Real-ESRGAN can upscale the cleaned image to reach print-quality resolution if the scan alone is insufficient for your intended output size."
  - question: "What results should I realistically expect from AI noise reduction on old photos?"
    answer: "Realistic expectations depend on the relationship between grain or noise level and genuine image detail. If the original photograph had sufficient exposure and the grain is an overlay on a well-defined image, NAFNet can substantially reduce the grain while preserving the underlying detail — the result is a noticeably cleaner image that retains sharpness. If the photograph was severely underexposed — pushing Tri-X to ISO 6400, or shooting digital at ISO 25600 in very dim light — the grain or noise may be equal in scale to the finest genuine detail in the frame. In that case, noise reduction produces smoother tones but also flattens fine detail, because the two are spatially inseparable at that scale. What AI noise reduction cannot do: recover genuine image information that was never captured due to insufficient exposure. NAFNet removes the masking artifact of noise from an over-amplified signal, but cannot reconstruct signal that was absent at capture time."
---

> **Editorial trust notice**: This guide is published by [ArtImageHub](https://artimagehub.com), an AI photo restoration service. Noise reduction uses NAFNet; upscaling uses Real-ESRGAN ([Wang et al., 2021](https://arxiv.org/abs/2107.10833)); face restoration uses GFPGAN ([Wang et al., 2021](https://arxiv.org/abs/2101.04061)).

> **Fix your grainy photos now**: [Upload at ArtImageHub →](https://artimagehub.com/photo-enhancer) — NAFNet noise reduction + Real-ESRGAN upscaling — **$4.99 one-time, preview free**.

---

Grain and noise are two different problems that look similar in a thumbnail and require different treatment in practice. Whether you are working with a scanned film photograph or a high-ISO digital shot, understanding what you are actually dealing with determines what results are achievable.

## Why Does Film Grain Look Different from Digital Noise?

The difference is physical.

**Film grain** is not an error — it is the medium itself. Photographic film is coated with an emulsion layer containing silver halide crystals suspended in gelatin. When light strikes the film, individual crystals react in proportion to the light they receive, forming a latent image. After chemical development, these reacted crystals become metallic silver, forming the visible image. The grain pattern you see in a developed photograph is the spatial distribution of those silver clumps.

In high-speed films like Kodak Tri-X (rated at ISO 400, commonly pushed to 1600 or 3200), the larger crystals needed for greater light sensitivity produce larger, more visible grain. The grain is monochromatic in B&W processing, follows the tonal structure of the image (more grain visible in mid-tones, less in deep shadows), and has an organic, randomly distributed character with no repeating structure.

**Digital noise** is an electronic artifact. Camera sensors measure light by counting photons arriving at each photosite during the exposure. At low ISO settings, there are enough photons arriving that the count is reliable. In low light, the sensor raises its amplification (ISO) to boost the signal — but amplification multiplies both the signal and the underlying thermal noise from the circuit. The result is two superimposed noise types:

- **Luminance noise:** Random brightness variation across pixels, similar in appearance to fine film grain
- **Chroma noise:** Random color variation — red, green, blue speckles — most visible in shadow areas and uniform surfaces like skin and sky. Film photography has no equivalent to chroma noise.

The chroma component is what makes high-ISO digital photos look distinctly different from pushed film: the multicolored speckle pattern in shadow areas is an electronic artifact with no analog in the photochemical process.

## What Does Kodak Tri-X Look Like After 600 DPI Scanning?

Understanding the scan characteristics of film grain helps calibrate expectations for what noise reduction can accomplish.

A 35mm negative (frame size 36×24mm) scanned at 4000 DPI produces a file of approximately 5,500×3,700 pixels. Scanned from a 3.5×5 inch print at 600 DPI, the same image yields approximately 2,100×1,500 pixels — substantially less resolution and tonal range, because the print is a downstream interpretation of the negative that discards some shadow and highlight information.

Kodak Tri-X grain at ISO 400 normal development: grain is fine enough at 4000 DPI scan resolution that it is a texture overlay on the image rather than competing with subject detail. Pushed to ISO 3200 with extended development: grain clumps become larger and more irregular, and in some areas — particularly faces in flat light — the grain approaches the scale of the finest facial detail.

The practical implication: a normally-exposed Tri-X portrait scanned at 600 DPI from a print will respond well to NAFNet grain reduction. A severely pushed ISO 3200 Tri-X shot scanned from a small print may have grain that is inseparable from fine detail at that resolution — reduction will smooth the image but cannot cleanly separate grain from detail when they are the same size.

## How Is ISO 3200 DSLR Noise Different in Structure?

A full-frame DSLR at ISO 3200 (a Canon 5D Mark II, a Nikon D700) produces noise with a different signature than film:

**Luminance noise pattern:** Fine, random, approximately uniform distribution — the pattern is tighter and more regular than Tri-X grain because it follows the regular grid of the sensor's photosite array rather than the organic clumping of silver crystals.

**Chroma noise pattern:** Visible colored speckles concentrated in shadow areas, skin tones, and uniform surfaces. Shadow areas in an ISO 3200 indoor shot often show red and green speckles on what should be neutral-gray shadows. This is the most objectionable artifact in high-ISO digital files and is absent in film.

**Hot pixels:** At long exposures in low light, individual sensor photosites may register a consistent bright value unrelated to scene content — these appear as isolated bright dots and are a different artifact from chroma noise.

The chroma noise pattern is what dedicated digital noise reduction specifically targets. Generic sharpening or contrast enhancement does not differentiate between chroma noise speckles and genuine color detail — it sharpens both. Dedicated noise reduction treats the luminance and chroma channels separately and applies different treatment to each.

## How NAFNet Approaches Real Noise Data

NAFNet (Nonlinear Activation Free Network for Image Restoration) was trained on real photographic noise — actual camera output with actual sensor noise patterns — rather than simulated noise generated by adding Gaussian blur or random values to clean images. This matters because real sensor noise does not follow a simple Gaussian distribution: it has spatial correlation, sensor-specific patterns, and the luminance-chroma split described above.

Because NAFNet learned from real examples, it recognizes the actual signature of sensor noise: the structured luminance pattern, the chroma speckle distribution, the way noise concentrates in shadow areas of high-ISO files. This allows more targeted reduction than algorithms trained on synthetic noise.

**What NAFNet does well:**
- Reduces chroma noise in color channels without desaturating the entire image
- Addresses luminance noise while preserving genuine edge sharpness
- Handles JPEG compression artifacts (common in old digital files) alongside noise
- Operates on film grain from scanned photographs with similar effectiveness

**What NAFNet cannot do:**
- Recover information that was never captured (underexposed shadows contain no recoverable detail regardless of noise reduction)
- Distinguish noise from fine texture at extremely high noise levels where both occupy the same spatial scale
- Restore motion blur (a different problem requiring deblurring, not denoising)

## Luminance vs Chroma Noise in Practice

For a practical example: an indoor birthday photo from 2009, DSLR at ISO 3200, JPEG output.

**Before NAFNet:**
- Skin in shadow areas shows red and green speckle (chroma noise)
- Background neutral gray shows luminance variation giving it a gritty texture
- Fine detail (clothing fabric, hair strands) partially obscured by noise overlay
- JPEG block artifacts compound the noise from the high compression applied to the noisy file

**After NAFNet:**
- Chroma speckles reduced — skin in shadow areas approaches neutral-gray without red/green speckle
- Background smoothed to closer to the intended neutral-gray
- Fine edge detail preserved — hair strands and fabric textures remain distinct from the now-reduced noise
- Block artifacts reduced as a secondary effect of the denoising process

The improvement is genuine but bounded. The result is a cleaner photograph, not a clean photograph. At ISO 3200 in a consumer DSLR from 2009, there was a finite amount of genuine scene information captured — noise reduction reveals more of that information by removing the masking artifact, but it cannot exceed what the sensor captured.

## When to Combine NAFNet with Real-ESRGAN

For scanned film photographs where the source print is small (3.5×5 or smaller), NAFNet noise reduction should be applied before Real-ESRGAN upscaling. Upscaling amplifies everything present in the source — including noise — so cleaning first, then upscaling, produces better results than the reverse order.

[ArtImageHub](https://artimagehub.com) applies this sequence automatically: denoising before upscaling, with GFPGAN face restoration integrated into the pipeline for photographs where faces are present. The full pipeline runs on upload and produces a preview you can review before committing to the $4.99 download.

For old family photographs with grain or noise — whether from pushed film in a 1975 concert photo or from a 2008 high-ISO birthday snapshot — this pipeline is the practical path from a difficult file to something printable.

**Preview your photo for free:** [Upload at ArtImageHub →](https://artimagehub.com/photo-enhancer) — see the result before you pay.

---

*Noise reduction results depend on the relationship between noise level and genuine image detail in the source file. NAFNet trained on real sensor noise data; results on simulated noise (from digital editing) may vary. Film grain reduction tested on 35mm prints scanned at 600-1200 DPI.*
