---
title: "What Is Real-ESRGAN? Super-Resolution and Upscaling Explained"
description: "A technical explanation of Real-ESRGAN — how it differs from older upscalers, what degradation modeling means, and why it outperforms earlier super-resolution methods on real photographs."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["Real-ESRGAN", "Super Resolution", "AI Photo Enhancement", "Image Upscaling"]
image: "/blog/ai-restoration-technology.jpg"
coverColor: "from-emerald-500 via-teal-600 to-cyan-700"
coverEmoji: "🔍"
---

When you double or quadruple the size of an old photograph using traditional software, the result is almost always a blurry disappointment — larger, yes, but with no additional detail. Real-ESRGAN changed this. It is the model that made AI-based image upscaling genuinely useful for real-world photographs, not just academic benchmarks. Understanding what makes it different from earlier approaches — and what its real limitations are — helps you use it appropriately and interpret results correctly.

## What Is Real-ESRGAN and How Does It Differ from Older Upscalers?

Real-ESRGAN (Real Enhanced Super-Resolution Generative Adversarial Networks) was published in 2021 by Xintao Wang and colleagues at Tencent ARC Lab. It is a successor to the earlier ESRGAN model, but the "Real" prefix marks a fundamental change in approach: the model was designed explicitly for **real-world degradation**, not the clean synthetic degradation that earlier super-resolution models trained on.

To understand why this matters, consider how earlier super-resolution models were trained. They took high-resolution images, applied a simple downsampling operation (typically bicubic downsampling), and trained the network to reverse this single, clean transformation. The resulting models worked well on images that had been bicubically downsampled — but real-world photographs are not bicubically downsampled. They suffer from a complex mixture: film grain, chemical aging, physical scratches, JPEG compression artifacts from multiple generations of copying, scanner noise, dust, and lens imperfections. When earlier super-resolution models encountered this real-world degradation, they amplified artifacts instead of removing them.

Real-ESRGAN's key innovation is a **high-order degradation modeling** approach that synthetically replicates the realistic, complex degradation found in actual old photographs. This makes it robust on real images in ways that earlier models were not.

## How Does Real-ESRGAN's Degradation Modeling Work?

The degradation synthesis pipeline in Real-ESRGAN applies multiple degradation operations in sequence, then repeats the sequence — creating "high-order" degradation that mimics the cumulative damage of real photographs. Each step in the pipeline randomly samples from a range of degradation types and intensities:

1. **Blur**: Applied using a mixture of Gaussian blur, motion blur, and anisotropic Gaussian blur with random kernel sizes and orientations.

2. **Noise**: Added as a mixture of Gaussian noise, Poisson noise, and JPEG-like blocking noise, with random strength parameters.

3. **Downsampling**: Using randomly chosen downsampling methods (nearest, bilinear, bicubic, area) at random scale factors.

4. **JPEG compression**: Applied at random quality levels to simulate the artifact patterns of JPEG compression used in scanning and digital copying.

This sequence is applied **twice** (hence "high-order") to create training inputs that more closely resemble the layered, complex degradation of real historical photographs. The model learns to handle all of this simultaneously — denoising, deblurring, and upscaling — in a single forward pass.

## What GAN Architecture Does Real-ESRGAN Use?

Real-ESRGAN uses a **Generative Adversarial Network (GAN)** architecture with two networks trained in opposition:

The **generator** (the RRDB network — Residual in Residual Dense Block) takes the degraded input image and produces a high-resolution output. It is a deep convolutional network with dozens of layers and skip connections that allow gradient flow during training.

The **discriminator** is a U-Net architecture with spectral normalization. It takes either a real high-resolution image or the generator's output, and tries to distinguish between them — producing a score for each image and each patch within the image, rather than a single global score. This patch-level discrimination provides more fine-grained feedback to the generator, pushing it to produce realistic texture at the local level rather than just globally plausible outputs.

The adversarial training dynamic — generator trying to fool discriminator, discriminator getting better at detecting fakes — is what drives Real-ESRGAN to produce outputs with convincing high-frequency texture, rather than the over-smooth outputs that early super-resolution models produced.

## Why Does Real-ESRGAN Outperform Bicubic and Earlier Methods?

Bicubic interpolation is a mathematical formula — it computes new pixel values as a weighted average of surrounding pixels based on a cubic polynomial. It is deterministic, requires no training, and adds no new information. When you bicubically upscale an image, you get a larger image with smoother transitions, but no new detail. Edges that were blurry in the original remain blurry; grain that was present becomes coarser.

Earlier super-resolution models like SRCNN and ESRGAN improved on this by learning a mapping from low-resolution to high-resolution images, but their simple synthetic training data meant they performed poorly on real-world degradation.

Real-ESRGAN synthesizes new high-frequency detail guided by what it has learned about real-world textures from millions of training image pairs. When it upscales a stone wall, it adds the kind of fine stone texture that matches the learned appearance of stone walls at high resolution. When it upscales a portrait, it adds skin pore texture, fine hair detail, and sharp eyelash edges consistent with what real high-resolution portrait photographs look like.

This learned synthesis of high-frequency detail is the fundamental difference between AI upscaling and interpolation-based methods.

## Is the Detail Real-ESRGAN Adds Real or Hallucinated?

This is an important question for archival and forensic use. The honest answer is: **the detail is synthesized, not recovered**.

Real-ESRGAN cannot recover information that was not present in the input image. If the original photograph had a blurry face because the camera was out of focus, the pixels encoding fine facial detail do not exist. Real-ESRGAN will produce a sharper-looking face — because its training data taught it what sharp faces look like — but that sharpness is synthesized from the model's learned prior, not extracted from hidden information in the blurry original.

For most family photo restoration purposes, this distinction matters less than it sounds: the synthesized detail looks correct and dramatically improves the visual quality and emotional impact of the photograph. For strict archival or forensic documentation where you need to know what was actually in the original image, understanding that AI upscaling adds plausible-but-synthesized detail is essential.

## What Are Real-ESRGAN's Limitations?

**Over-sharpening artifacts**: The adversarial training that makes Real-ESRGAN produce sharp detail can also produce over-sharpened edges with ringing artifacts, particularly at contrast boundaries. This is visible in some outputs as a slightly "crunchy" or "painted" appearance around hard edges.

**Texture hallucination**: For unusual or unfamiliar textures outside the training distribution, Real-ESRGAN may apply generic texture that does not match the original. Unusual fabric patterns, specialized equipment, or rare material types may receive inappropriate texture from the model's learned prior.

**Face-specific limitations**: Real-ESRGAN is trained on general images, not specifically on faces. For portraits requiring precise face quality, a specialized face restoration model like GFPGAN or CodeFormer in the same pipeline provides much better facial detail recovery.

**Very high noise inputs**: Extremely noisy inputs can cause Real-ESRGAN to amplify noise texture into the upscaled output. Running a denoising step (such as NAFNet) before upscaling prevents this and produces cleaner results.

## How Does ArtImageHub Use Real-ESRGAN?

ArtImageHub's photo enhancement and old photo restoration pipelines use Real-ESRGAN as the upscaling and general texture restoration component. It runs after the NAFNet denoising step and alongside the GFPGAN face restoration step, ensuring that the denoised input it receives is as clean as possible before upscaling. For $4.99 one-time, the full pipeline applies automatically to your uploaded photograph.

## Frequently Asked Questions

## How does Real-ESRGAN's training differ from the original ESRGAN?

The original ESRGAN (Enhanced Super-Resolution GAN) trained on a simple synthetic degradation: bicubic downsampling plus a small amount of Gaussian noise. This produced excellent results on images that had been bicubically downsampled, but failed badly on real photographs with complex, layered degradation. Real-ESRGAN's key advance is its high-order degradation synthesis: it applies multiple rounds of randomized blur, noise, downsampling, and JPEG compression in sequence, producing training inputs that realistically mimic the complex, multi-layered damage found in actual historical photographs. Additionally, Real-ESRGAN uses a U-Net discriminator with spectral normalization rather than the standard discriminator in ESRGAN, providing more fine-grained local feedback during training. These changes together make Real-ESRGAN dramatically more robust on real-world images than its predecessor.

## Does Real-ESRGAN work on both color and black-and-white photos?

Yes. Real-ESRGAN was trained on color images and processes all three color channels simultaneously. For black-and-white or sepia-toned photographs, it handles the limited color information correctly, restoring texture and detail in the luminance signal without introducing unwanted color casts. For grayscale inputs, the model correctly handles the single-channel case or converts to luminance processing. The key quality determinants are the same for both color and grayscale: input resolution, damage severity, and whether the degradation type falls within the model's training distribution. Color photographs may benefit slightly more from Real-ESRGAN because color information helps the model identify object categories and apply appropriate texture priors, but the quality difference is modest for most photographic subjects.

## Can Real-ESRGAN restore photos that are extremely low resolution?

Real-ESRGAN can upscale at 2× or 4× magnification, which means a 300×400 pixel input produces a 1200×1600 pixel output at 4× scale. Whether this is useful depends on the information content of the original. If a 300×400 pixel image contains only 50 pixels of a face, Real-ESRGAN will produce a higher-resolution face region, but the reconstructed detail is entirely synthesized from its learned face prior — there is very little original information to work with. The model handles surprisingly low-resolution inputs reasonably well for familiar subjects (faces, landscapes, common objects) because its training data taught it what these subjects look like at high resolution. For subjects outside its training distribution at very low resolution, results are more uncertain. A general guideline: if the subject is recognizable at the original resolution, Real-ESRGAN typically produces a useful upscaled result.

## Is Real-ESRGAN the same as waifu2x or other older upscalers?

No — these are different models trained for different purposes. Waifu2x was designed specifically to upscale anime-style artwork and manga, trained on synthetic illustration data. It performs well on its target domain (clean illustration-style images with flat color regions and sharp outlines) but not on real photographs. Real-ESRGAN was trained on real photographic images with realistic degradation and is the appropriate model for actual photographs. Other older upscalers like Topaz Gigapixel AI use similar super-resolution approaches but are trained on different datasets and use different architectures. Real-ESRGAN is notable for being open-source, widely deployed, and validated on real-world photographic restoration tasks — which is why it has become a de facto standard component in open-source photo restoration pipelines.

## How should you prepare a photo before running Real-ESRGAN?

Denoising before upscaling consistently improves Real-ESRGAN results. Film grain and sensor noise are texture signals that Real-ESRGAN may attempt to preserve and amplify rather than remove, because it cannot always distinguish grain from genuine fine detail. Running NAFNet denoising first removes the noise, giving Real-ESRGAN a cleaner input where the texture it synthesizes represents actual scene detail rather than amplified grain. For heavily JPEG-compressed inputs, running a JPEG artifact removal step before upscaling similarly prevents Real-ESRGAN from amplifying compression blocking patterns. The general principle: the cleaner the input, the better the output. ArtImageHub's pipeline applies denoising automatically before the Real-ESRGAN step for exactly this reason.
