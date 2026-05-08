---
title: "What Is Image Super-Resolution? From SRCNN to Real-ESRGAN Explained"
description: "A technical overview of image super-resolution — how neural networks learn to reconstruct high-frequency detail from low-resolution inputs, and why Real-ESRGAN is the current standard for photo restoration upscaling."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["Super Resolution", "Real-ESRGAN", "Image Upscaling", "AI Photo Restoration"]
image: "/blog/ai-restoration-technology.jpg"
coverColor: "from-teal-500 via-cyan-600 to-blue-700"
coverEmoji: "🔬"
---

When you scan a small photograph at standard resolution and then enlarge it, the result is blurry. Traditional digital upscaling — whether bicubic interpolation or Lanczos resampling — has no mechanism for recovering fine detail that was never captured at the pixel level. It simply spreads existing pixel values over more space, producing smooth gradients where there should be texture.

Image super-resolution is the branch of AI research that solves this problem. Neural networks trained on millions of image pairs — low-resolution inputs and their high-resolution originals — learn to predict and reconstruct the high-frequency detail that traditional upscaling algorithms cannot generate. Understanding how this field evolved from early convolutional approaches to the current generation of perceptual-loss models explains why modern AI upscaling looks so different from the softened results of traditional enlargement.

## How Did Super-Resolution Begin with SRCNN?

The modern era of neural super-resolution started with SRCNN (Super-Resolution Convolutional Neural Network), introduced by Dong et al. in 2014 and published in 2016. SRCNN was the first demonstration that a deep learning approach could outperform all existing hand-crafted super-resolution methods using a surprisingly simple architecture.

SRCNN works in three learned stages: patch extraction and representation (learning overlapping patches from the low-resolution image), nonlinear mapping (transforming low-resolution patch representations into high-resolution patch representations), and reconstruction (assembling the high-resolution patches into a complete output image).

The result was a network with only three convolutional layers — extremely shallow by modern standards — that nonetheless produced sharper reconstructions than bicubic interpolation and hand-crafted sparse coding methods. SRCNN established the template for deep learning super-resolution: learn a direct mapping from low-resolution to high-resolution space from paired training data.

The key limitation of SRCNN was that it optimized for pixel-level accuracy — minimizing Mean Squared Error (MSE) between the predicted high-resolution output and the true high-resolution image. This produces images that score well on PSNR (Peak Signal-to-Noise Ratio) but often look slightly blurry because the network learns to predict the average of plausible high-frequency detail rather than committing to specific texture.

## What Did ESRGAN Add to Super-Resolution?

ESRGAN (Enhanced Super-Resolution Generative Adversarial Networks), introduced in 2018, addressed the core limitation of pixel-loss approaches by introducing two fundamental changes: a Residual-in-Residual Dense Block (RRDB) generator architecture and a perceptual loss function using adversarial training.

The **RRDB architecture** stacks dense convolutional blocks with residual connections between both individual blocks and groups of blocks. This design allows very deep networks to train stably — gradient flow is maintained across many layers through the shortcut connections. The dense connectivity also encourages feature reuse: each layer has access to the feature maps from all preceding layers, rather than just the immediately previous one.

The **perceptual loss** change was more significant for output quality. Rather than measuring pixel-level similarity between output and target, ESRGAN introduced two additional loss components: a perceptual loss (measuring similarity in the feature space of a pretrained VGG network) and an adversarial loss (training a discriminator network to distinguish ESRGAN outputs from real high-resolution photographs).

The discriminator's feedback forces the generator to produce outputs with genuine high-frequency texture — actual surface detail that could pass as a real photograph — rather than averaged, smooth reconstructions. The result is images with sharper edges, more convincing texture, and better perceptual quality, even if they sometimes score slightly lower on PSNR because they commit to specific texture rather than predicting the average.

## How Does Real-ESRGAN Differ from ESRGAN?

Real-ESRGAN, introduced by Wang et al. in 2021, addressed a fundamental limitation of ESRGAN that prevented it from working well on real-world degraded images: its training data.

Standard ESRGAN was trained on paired data where low-resolution images were created by simple bicubic downscaling of high-resolution originals. Real photographs, especially old ones, have been degraded by a completely different set of processes: camera noise, compression artifacts, scanning defects, blur from focus or motion, and physical damage. A network trained to reverse bicubic downscaling does not generalize well to reversing real-world degradation.

Real-ESRGAN introduced a **high-order degradation modeling pipeline** for training data generation. Instead of simple bicubic downscaling, it simulates the complex chain of degradations that real photographs accumulate:

- Multiple rounds of blur (Gaussian, motion, or defocus)
- Multiple rounds of downsampling (bicubic, bilinear, nearest-neighbor, or area)
- Noise addition (Gaussian noise, Poisson noise, JPEG compression artifacts)
- Repetition of these steps in random orders and magnitudes

By training on synthetically degraded images that approximate the variety of real-world degradation, Real-ESRGAN learns to recover detail from the kinds of inputs it will actually encounter in practice. This makes it substantially more effective than standard ESRGAN on scanned old photographs, compressed digital images, and other real-world material.

## What Is the Difference Between Pixel Loss and Perceptual Loss?

This distinction is fundamental to understanding why modern super-resolution results look the way they do.

**Pixel loss** (MSE or L1 loss) measures the average difference between corresponding pixels in the output and target images. Networks trained with pixel loss alone tend to produce smooth, slightly blurry outputs because the loss function penalizes any deviation from the pixel-level average. When there are multiple plausible high-frequency textures that could match a given low-resolution input, the network learns to predict the average — which looks like no texture at all.

**Perceptual loss** measures similarity in a higher-level feature space. The standard approach uses a pretrained VGG network and measures the L2 distance between feature activations for the output and target images at various layers. Because VGG features capture semantic and structural information rather than raw pixel values, perceptual loss encourages outputs that look structurally similar to the target at a visual level — proper edges, coherent textures, appropriate surface detail — even when they deviate at the pixel level.

**Adversarial loss** pushes further: the generator is trained to produce outputs that a discriminator cannot distinguish from real high-resolution photographs. This encourages the generator to produce genuinely realistic texture rather than any specific reconstruction of the target, which further improves perceptual quality at the cost of absolute fidelity.

Real-ESRGAN combines all three loss types, with weights tuned to balance perceptual quality against the risk of generating hallucinated detail that was never in the original image.

## How Does Super-Resolution Apply to Old Photo Restoration?

In a full photo restoration pipeline, super-resolution typically runs after denoising (NAFNet) and face enhancement (GFPGAN) and provides the final upscaling step. The typical application is 4x upscaling — taking a scan or digital copy that may be only 300 to 500 pixels on the long side and producing an output suitable for large print or display.

The ordering matters. Running super-resolution before denoising causes the upscaler to amplify noise alongside genuine detail. Running it after denoising means the input is cleaner and the upscaler can focus on recovering genuine high-frequency structure.

For faces specifically, GFPGAN runs its dedicated face restoration step after NAFNet but before or concurrent with Real-ESRGAN. Face restoration has access to its own face prior — a learned model of human facial geometry and texture — which produces better results than general-purpose upscaling on face regions alone.

ArtImageHub's photo enhancement pipeline applies Real-ESRGAN-based upscaling as part of a $4.99 one-time restoration that includes NAFNet denoising and GFPGAN face enhancement. The combination of all three models produces significantly better results than super-resolution applied alone.

## Frequently Asked Questions

## How does Real-ESRGAN handle photographs with mixed degradation types?

Real-ESRGAN's high-order degradation training pipeline explicitly prepares the model for mixed degradation. Rather than training on single degradation types separately, the pipeline randomly combines blur, noise, compression, and downsampling in sequences that mimic the real accumulation of damage. This means the model has seen and learned to handle training examples with simultaneous blur, grain, and compression artifacts — all common in old family photographs. Performance on mixed degradation is generally better than on single extreme degradation types, because the training distribution includes the mixed cases. The main limitation is very severe individual degradations: extreme focus blur covering the entire image, or very heavy JPEG compression at low quality settings, can challenge the model more than moderate mixed degradation.

## Is super-resolution the same as increasing the DPI of a scan?

No. These are distinct operations that are often confused. DPI (dots per inch) is a metadata value stored in an image file that tells printers how many pixels to map to each inch of print area. Changing DPI without resampling changes only this metadata number — the actual pixel dimensions of the image remain the same. Increasing DPI while resampling up means adding new pixels through interpolation, which is traditional upscaling. Super-resolution is a fundamentally different process: it uses a neural network to predict and synthesize the high-frequency pixel content that would have been present in a true high-resolution capture of the same scene. The output has more actual pixels with genuine predicted detail, not interpolated averages. For photo restoration purposes, super-resolution produces substantially sharper and more detailed results than DPI increase via traditional resampling.

## Does super-resolution work better on some photo subjects than others?

Yes, and the variation is significant. Super-resolution performs best on subjects with predictable texture: human faces (the dominant subject of portrait photography), natural materials like wood grain and fabric, vegetation, and architectural elements with regular geometric structure. These subjects have strong learned priors in the training data. Performance is less consistent on unusual textures, highly reflective surfaces with complex specular behavior, and subjects with fine periodic patterns (moire-generating structures). For typical family photographs — portraits, outdoor scenes, domestic settings — Real-ESRGAN produces excellent results. For specialized subjects outside these categories, the degree of improvement varies more.

## What is the maximum useful upscaling factor for photo restoration?

Real-ESRGAN is most commonly applied at 4x upscaling, and this is typically the maximum factor that produces reliably good results for most input types. Beyond 4x, the network is increasingly synthesizing detail from statistical priors rather than recovering genuinely latent detail, which can produce plausible-looking but potentially inaccurate texture. For a small original (150 pixels on the long side), 4x upscaling produces 600 pixels — still relatively modest for print. In these cases, applying 2x upscaling twice (to 300 pixels, then to 600 pixels) can sometimes produce better results than a single 4x pass because each application starts from a cleaner, larger input. For most practical family photograph restoration, the input scans are 500 to 2000 pixels after scanning, and 4x upscaling to 2000 to 8000 pixels is fully appropriate.

## How does AI super-resolution compare to traditional upscaling methods like Lanczos?

Lanczos and bicubic resampling are mathematical interpolation algorithms that estimate intermediate pixel values by weighting nearby pixels according to a sinc-based (Lanczos) or polynomial (bicubic) kernel. They produce smooth, artifact-free interpolation but cannot add detail that was not present in the original pixels — they only redistribute existing information. AI super-resolution uses a trained neural network that has learned statistical relationships between low and high-resolution images from millions of training pairs. It can synthesize genuinely new pixel content — realistic texture, sharpened edges, recovered fine detail — that is not mathematically derivable from the input. For upscaling factors above 2x on real photographs, AI super-resolution produces dramatically sharper and more detailed results than any traditional interpolation method. For very small upscaling ratios (1.25x or 1.5x) on already-clean images, the difference is less pronounced.
