---
title: "How Does AI Photo Restoration Work? The GFPGAN + Real-ESRGAN Pipeline Explained"
description: "A plain-language technical walkthrough of how modern AI photo restoration works — from neural network basics to the GFPGAN face restoration and Real-ESRGAN upscaling pipeline."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["AI Photo Restoration", "GFPGAN", "Real-ESRGAN", "How AI Works"]
image: "/blog/ai-restoration-technology.jpg"
coverColor: "from-violet-500 via-purple-600 to-indigo-700"
coverEmoji: "🧠"
---

When you upload a faded, scratched family photograph to an AI restoration tool and receive a sharp, vibrant image thirty seconds later, it looks like magic. It is not magic — it is the product of years of neural network research, trained on millions of image pairs, executing a precisely orchestrated pipeline the moment you click "restore." Understanding what happens under the hood gives you a much clearer sense of what AI can fix brilliantly, what it struggles with, and why results sometimes look uncanny.

The modern AI photo restoration pipeline is not a single algorithm. It is a cascade of specialized neural networks, each trained to solve a different sub-problem. The two most important components are **GFPGAN** for face restoration and **Real-ESRGAN** for general super-resolution and upscaling. Services like ArtImageHub ($4.99 one-time) run these models in sequence to handle the range of damage found in typical old photographs.

## What Is a Convolutional Neural Network and Why Does It Matter for Photos?

Before diving into specific models, it helps to understand the underlying mechanism. A convolutional neural network (CNN) is a type of deep learning model that processes images by scanning them with learned filters — essentially small matrices of numbers that have been trained to detect edges, textures, patterns, and eventually higher-level features like "nose shape" or "brick wall texture."

During training, the network sees millions of image pairs: degraded inputs on one side, clean originals on the other. It adjusts its internal parameters to minimize the difference between its output and the clean target. After millions of iterations, the network has effectively encoded a statistical model of what "clean, undamaged" images look like.

At inference time (when you upload your photo), the network uses those learned parameters to predict what the clean version of your specific input should look like. This is the core operation behind every AI restoration step.

## How Does the Face Restoration Step Use Prior Knowledge?

Face restoration is the hardest sub-problem in photo restoration because human faces are extraordinarily sensitive to subtle errors. A reconstructed brick wall with slightly wrong mortar spacing looks fine; a reconstructed human face with wrong eye spacing looks deeply wrong.

GFPGAN, developed by Tencent ARC Lab, solves this using a concept called a **generative face prior**. During its training, a separate generative model (StyleGAN2) was trained on a massive dataset of high-quality face images until it learned a rich internal representation of what human faces look like across age, gender, ethnicity, and expression. This "face prior" effectively encodes the full distribution of plausible human faces.

GFPGAN's restoration network is then connected to this face prior. When it processes a blurry, scratched face in your old photo, it uses the face prior as a reference — essentially asking "given this degraded input, what high-quality face is most consistent with this data?" The prior prevents the model from inventing impossible face geometries and guides reconstruction toward realistic facial features.

The result is dramatically sharper eyes, clearer teeth, and more natural skin texture than earlier methods that operated on faces as generic image patches.

## How Does Real-ESRGAN Handle the Rest of the Image?

GFPGAN focuses on faces. Real-ESRGAN handles backgrounds, objects, textures, and overall image upscaling. It is part of the super-resolution family of models — algorithms that increase image resolution beyond what the original data contains, guided by learned priors about what real-world textures look like at high resolution.

The key innovation in Real-ESRGAN was its **degradation modeling**. Earlier super-resolution models were trained on unrealistically simple degradation (usually just Gaussian blur and bicubic downsampling). Real photos suffer from a complex cocktail: film grain, chemical fading, physical scratches, JPEG compression artifacts, dust, and multiple generations of copying. Real-ESRGAN's training synthesized these realistic degradation types, making the model far more robust on actual damaged photographs.

It uses a **GAN (Generative Adversarial Network)** architecture, meaning a generator network produces the restored image while a separate discriminator network tries to identify whether the output looks real or AI-generated. This adversarial training pushes the generator to produce outputs with convincing high-frequency detail — sharp edges, realistic textures — rather than smooth, blurry over-processed results.

## What Happens Step by Step When You Upload a Photo?

Here is the typical sequence in a modern AI restoration pipeline:

1. **Preprocessing**: The uploaded image is decoded, converted to a consistent color space, and analyzed for basic properties (dimensions, detected face regions, estimated damage severity).

2. **Face detection**: A lightweight face detection model scans the image and returns bounding boxes around any detected faces.

3. **Face restoration (GFPGAN)**: Each detected face region is cropped, scaled to the model's input resolution (typically 512×512), processed by GFPGAN, and the restored face is blended back into the original image position using alignment transformations.

4. **Denoising (NAFNet)**: A denoising network removes film grain, noise, and fine-grained artifacts from the whole image before upscaling.

5. **Super-resolution (Real-ESRGAN)**: The full image (with restored faces already blended in) is processed by Real-ESRGAN to upscale resolution by a factor of 2× or 4×, simultaneously suppressing remaining artifacts.

6. **Post-processing**: The output is sharpened, tone-adjusted if needed, and encoded to the output format.

This entire pipeline, optimized on modern GPU hardware, completes in 20 to 90 seconds depending on image size and server load.

## Why Does Understanding the Pipeline Help You Get Better Results?

Knowing the pipeline's structure directly informs better usage. The face restoration step works on detected faces, so if a face is too small (fewer than roughly 50×50 pixels in the input), the detector may miss it or the restoration quality degrades. Scanning your original photo at higher resolution gives the face detector larger faces to work with.

The Real-ESRGAN step works best when the input is not already heavily JPEG-compressed, because the model was not trained to reconstruct detail destroyed by high JPEG quantization. If you are digitizing a photo, scanning to TIFF at 600 DPI or higher is always preferable to photographing it with a phone and saving at low JPEG quality.

Understanding degradation modeling also sets appropriate expectations. The models hallucinate plausible detail — they fill in missing information with statistically likely content. That content is consistent with millions of real images, but it is not the original information. For archival documentation, this distinction matters.

## Does AI Restoration Work on Non-Face Photos?

Yes, though the face restoration component (GFPGAN) only activates when faces are detected. For landscape photos, architectural shots, or images of objects rather than people, the pipeline still applies the denoising and super-resolution stages (using models like NAFNet and Real-ESRGAN) to the full image. These stages address common non-face damage including fading, grain, color shift, and low resolution.

Results on non-face content can be excellent — old landscape and architecture photos often respond very well to AI restoration. The face-specific improvement is simply absent, which is appropriate when there are no faces to improve.

## Frequently Asked Questions

## What training data does GFPGAN use to restore faces?

GFPGAN relies on two types of training data. First, it uses the FFHQ dataset (Flickr-Faces-HQ — 70,000 high-quality face images) to train the generative face prior via StyleGAN2. Second, it uses synthetically degraded face images to train the restoration network that maps damaged inputs to clean outputs. The synthetic degradation combines blur, noise, compression artifacts, and spatial misalignment to approximate real-world photo damage. Because the model has never seen most specific historical photographs before, it generalizes from learned statistical patterns rather than memorizing examples. This is why it produces plausible-looking results but cannot guarantee that reconstructed details exactly match the original information — it is making an educated statistical inference about what was likely there, not recovering hidden data.

## How does Real-ESRGAN differ from older upscaling methods like bicubic interpolation?

Bicubic interpolation is a mathematical formula that estimates new pixel values by averaging neighboring pixels — it creates smooth transitions but adds no new detail. Real-ESRGAN, by contrast, has learned from millions of real image pairs what high-resolution textures actually look like. When it upscales a blurry stone wall, it does not just average surrounding pixels; it actively synthesizes convincing stone texture based on what stone walls look like at high resolution in its training data. This produces sharper, more detailed outputs. The trade-off is that it occasionally generates texture that was not present in the original — hallucinated detail that looks plausible but is not historically accurate. For most family photo purposes this trade-off is worthwhile; for archival precision, preserving the original scan alongside the restoration is important.

## Does image file format affect AI restoration quality?

Yes, significantly. JPEG uses lossy compression that permanently discards high-frequency detail. At moderate quality settings (below JPEG quality 85), this destruction is visible as blocking artifacts and blurred edges. The AI restoration models can partially suppress JPEG artifacts, but they cannot recover truly lost information. TIFF files preserve full image data without compression losses. PNG uses lossless compression. For the best restoration results, scan original photographs to TIFF or high-quality JPEG (quality 95+), and avoid re-saving the same JPEG multiple times before uploading — each save cycle compounds the losses. The difference between a TIFF scan and a phone photo JPEG can be clearly visible in restoration quality, especially in face detail.

## Can AI restoration fix photos where faces are extremely small?

Face size is one of the clearest practical limits of current face restoration models including GFPGAN. Below roughly 50×50 pixels in the input image, face detection becomes unreliable and GFPGAN's restoration quality degrades significantly. Group photos taken at a distance, where individual faces occupy only a small portion of the frame, present this challenge. The solution is to scan the original photograph at higher resolution — a 1200 DPI or 2400 DPI scan provides far more pixels per face than a 300 DPI scan. If the original photograph is small (a wallet-size print), scanning at 2400 DPI or higher is advisable. After restoration, the image can be cropped and scaled as needed.

## How does NAFNet's denoising step improve the overall restoration result?

NAFNet (Nonlinear Activation Free Network) was designed specifically for real-world image restoration tasks including denoising and deblurring. In the restoration pipeline, the NAFNet denoising step removes film grain, sensor noise, and fine-grained texture artifacts before the Real-ESRGAN upscaling step runs. This ordering matters: running super-resolution on a noisy image amplifies the noise along with the genuine detail, producing high-resolution grain rather than high-resolution texture. By denoising first, the upscaling step works from a cleaner starting point and produces sharper, more artifact-free outputs. NAFNet achieves state-of-the-art denoising performance while being computationally efficient — contributing only a few seconds to the total processing time.
