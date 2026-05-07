---
title: "How to Restore Photos from a Damaged Smartphone"
description: "Cracked screen or waterlogged phone doesn't mean lost photos. Learn what can be recovered, how to export before the phone dies, and how AI fixes JPEG artifacts."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["Photo Recovery", "Smartphone", "JPEG Artifacts", "NAFNet"]
image: "/blog/how-to-restore-photos-from-damaged-smartphones.jpg"
coverColor: "from-slate-700 via-zinc-700 to-gray-800"
coverEmoji: "📱"
faq:
  - question: "Can photos be recovered from a phone with a completely shattered screen?"
    answer: "Yes, in most cases. A cracked or shattered screen is a display problem, not a storage problem. The NAND flash memory that holds your photographs is typically on a separate chip from the display assembly and remains intact after screen damage. If the phone still powers on, you can connect it via USB to a computer and access the storage directly, or enable wireless backup through iCloud or Google Photos using voice commands or external keyboard navigation if the touchscreen is unresponsive. If the phone does not power on after a drop, the damage may have reached the battery or power circuitry rather than the storage. In that case, a data recovery service with clean-room chip-level access can often read the NAND flash directly. The photos stored on the chip are very likely still there even if the device will not boot."
  - question: "Why do photos from 2010-2015 smartphones look worse than newer phone photos?"
    answer: "Early smartphones used aggressive JPEG compression to fit more photos onto limited storage — typically 8GB to 16GB with no expandable storage option. The iPhone 4 camera produced photos at roughly 5 megapixels with JPEG quality settings around 88-92, meaning significant compression artifacts were baked in at capture. The iPhone 13 captures at 12MP with HEIC encoding that preserves more detail at similar file sizes. Samsung Galaxy S2 photos from 2011 were 8MP at high JPEG compression. Additionally, early phone camera sensors had smaller photosites and less sophisticated noise reduction, meaning the underlying image had more chroma noise before compression was applied. Compressing a noisy image with aggressive JPEG produces the worst-case artifact pattern — blocking artifacts layered on top of noise patterns — which is exactly what you see in many 2010-2015 smartphone photos today. NAFNet can address both the compression artifacts and the underlying chroma noise in a single denoising pass."
  - question: "What does NAFNet do for JPEG compression artifacts?"
    answer: "NAFNet (Nonlinear Activation Free Network) is trained on real degradation patterns rather than simulated noise, making it effective at identifying and reducing JPEG blocking artifacts — the rectangular grid pattern that appears in heavily compressed images. JPEG compression divides an image into 8x8 pixel blocks and compresses each independently; when quality settings are low, the boundaries between blocks become visible as a grid of subtle color and brightness discontinuities. NAFNet recognizes this block-boundary signature and smooths across the grid while preserving genuine edge detail between real objects in the scene. The result is not a perfect reconstruction — information discarded at compression time is permanently gone — but it removes the most visually disruptive artifact pattern and produces a substantially cleaner, more natural-looking image. On early smartphone photos from 2010-2015, which typically combine chroma noise with JPEG block artifacts from aggressive encoding, NAFNet addresses both degradation types in a single processing pass."
  - question: "Is it worth restoring old smartphone photos from 2010-2015?"
    answer: "It depends on what is in the photographs. From a technical standpoint, the source material is challenging: low megapixel counts, JPEG artifact patterns, and higher noise than modern cameras. However, 2010-2015 was a transitional period when many people adopted smartphones as their primary camera — it encompasses first children's steps, family vacations, and events that were not captured any other way. The content value often justifies the restoration effort even when the technical starting point is limited. Real-ESRGAN can upscale a 5MP image to print-quality resolution. NAFNet can reduce the block artifact pattern. GFPGAN can reconstruct facial detail that has degraded. The result is not indistinguishable from a modern camera photo, but it can be substantially cleaner and more printable than the original compressed file. At $4.99 one-time for the ArtImageHub pipeline, the cost barrier to at least previewing the result is low enough that it is worth attempting on any photograph with genuine sentimental value."
  - question: "How should I export photos from a damaged phone before it stops working?"
    answer: "If the phone still powers on, even with a cracked screen, treat the next few minutes as critical export time. For iPhone: connect to a computer and use Finder or iTunes to back up, or enable iCloud backup over WiFi. For Android: enable USB debugging if previously configured and use ADB commands to pull the DCIM directory, or enable Google Photos backup via Settings if accessible. If the touchscreen is unresponsive but the phone powers on, connect a USB keyboard or use an OTG adapter with a mouse to navigate settings without touch. If the phone only works intermittently, plug in a charger and attempt backup immediately during the working window — do not wait. Once the NAND flash is fully exported, the AI restoration at ArtImageHub can address the compression artifacts in the files, but the export must happen while the hardware still functions."
---

> **Editorial trust notice**: This guide is published by [ArtImageHub](https://artimagehub.com), an AI photo restoration service. JPEG artifact removal uses NAFNet; upscaling uses Real-ESRGAN ([Wang et al., 2021](https://arxiv.org/abs/2107.10833)); face restoration uses GFPGAN ([Wang et al., 2021](https://arxiv.org/abs/2101.04061)).

> **Restore your recovered photos**: [Upload at ArtImageHub →](https://artimagehub.com/photo-enhancer) — NAFNet artifact removal + Real-ESRGAN upscaling — **$4.99 one-time, preview free**.

---

A cracked screen or a phone dropped in water triggers immediate panic about lost photos. The reality is more nuanced — and more hopeful — than most people assume. The photos are usually still there. The harder question is how to get them out, and what to do with the compressed, noisy files once you have them.

## What Actually Happens to Photos Inside a Damaged Phone?

Understanding the hardware helps you know what is actually at risk.

**The screen is separate from storage.** A modern smartphone stores photos on NAND flash memory — the same type of solid-state storage in a laptop SSD, just soldered directly to the motherboard. This chip is physically separate from the display assembly. When you crack a screen, you break the glass, the digitizer layer, and sometimes the OLED or LCD panel. The NAND chip is almost certainly undamaged. The phone's camera roll exists on that chip and is intact.

**Water damage is more complex.** Water does not destroy NAND flash instantly — the chip itself is sealed. Water damage typically causes shorts in the logic board, battery, or power management circuits, which can prevent the phone from powering on. If a phone is dried properly (silica gel desiccant for 24-48 hours, not a microwave or hair dryer) before attempting to power on, there is a reasonable chance of at least one more working session to export the photos.

**What is actually at risk:** Physical trauma that directly impacts the storage chip (rare in consumer drops), corrosion from extended water exposure that reaches the NAND chip or its connections (more common after weeks of unchecked moisture), and logical failure where the file system itself is corrupted (uncommon but possible after sudden power loss during write operations).

In short: if your phone survived a drop with only screen damage, your photos are almost certainly intact.

## Why Are Photos from 2010-2018 Smartphones Particularly Problematic?

Even after successfully recovering files from an old phone, you may find the photos look worse than you remembered. This is a specific technical artifact of the era, not your memory.

**The JPEG compression problem:** JPEG is a lossy compression format. When you save a JPEG, the encoder discards certain image information to reduce file size, and the amount of information discarded depends on a quality setting (typically 0-100). Higher quality = larger file = better image. Lower quality = smaller file = more visible artifacts.

Early smartphones from 2010-2015 used aggressive JPEG quality settings — typically in the 85-92 range — to keep photo file sizes small enough to fit on 8-16GB storage without constant cloud backup. An iPhone 4 shooting at 5MP used approximately 1.5-2MB per JPEG at around 88 quality. The iPhone 13 in HEIC format captures the same scene with more information at similar or smaller file sizes, using a fundamentally more efficient codec.

**The HEIC shift:** Around 2017-2018, Apple introduced HEIC (High Efficiency Image Container) and Samsung began shipping HEIF support. These modern formats achieve much better quality-to-size ratios than JPEG at equivalent settings, which is why recent smartphone photos look dramatically better at similar file sizes — the encoding is simply more efficient, allowing higher quality settings without storage overhead.

**What JPEG artifacts look like:** JPEG compression divides an image into 8×8 pixel blocks and compresses each block independently. At high quality settings, the block boundaries are invisible. At lower quality settings, the boundaries between blocks become visible as a subtle grid pattern — slight color and brightness discontinuities every 8 pixels. On a face, this appears as unnatural texture. On a sky, it appears as subtle banding. On areas with fine detail (fabric, foliage, hair), it appears as a smeared, wavering pattern. This is the artifact pattern NAFNet specifically targets.

## How to Export Photos Before the Phone Dies

If your phone is damaged but still powers on, treat the next session as critical time. Act immediately.

**iPhone with cracked screen (powers on):**
1. Connect to a Mac or PC via Lightning/USB-C cable
2. On Mac with Finder (macOS Catalina+): trust the device, open Finder, select the iPhone, click Back Up Now
3. On PC with iTunes: same process through the iTunes interface
4. Alternatively, if WiFi is working, open Settings → [Your Name] → iCloud → iCloud Backup → Back Up Now
5. For direct file access: the iPhone Photos library is not accessible as a simple folder on Windows without iTunes, but Google Photos can backup directly if installed and WiFi is available

**Android with cracked screen (powers on, touch partially works):**
1. If Google Photos is installed: Settings → Back Up → Back Up Now
2. Connect via USB: on most Android phones, connecting to a PC in File Transfer mode exposes DCIM/Camera as a normal folder you can copy
3. Use a USB OTG adapter with a mouse if the touchscreen is unresponsive — most Android phones support mouse navigation
4. ADB (Android Debug Bridge): if USB debugging was previously enabled, `adb pull /sdcard/DCIM/Camera /destination/path` copies the entire camera folder

**If the phone only powers on intermittently:** Plug in a charger and attempt export during the first working window. Do not close apps or adjust settings — go directly to backup. The export window may only last minutes.

## How NAFNet Fixes JPEG Artifacts from Early Smartphone Photos

Once you have the files, AI restoration can substantially improve the visual quality of photos from the 2010-2018 era.

NAFNet is trained on real degradation patterns — actual JPEG artifacts from real cameras at various quality settings — rather than artificially generated noise. This matters because JPEG artifact patterns are distinctive and consistent: the 8×8 block grid is mathematically predictable, and a model trained on real examples learns to identify it reliably.

The restoration process NAFNet applies:
- Identifies block boundary signatures across the image
- Smooths across block boundaries while preserving genuine edges (a real edge between two objects should remain sharp; an artifact boundary between two blocks of the same object should be removed)
- Reduces chroma noise in color channels, which often compounds with JPEG compression in early smartphone cameras
- Preserves genuine image detail rather than applying global blur that removes artifacts at the cost of sharpness

For a typical early smartphone photo — an iPhone 4S image from 2012, for instance, showing a birthday party in indoor lighting — NAFNet reduces the blocky texture on faces and backgrounds while keeping the genuine sharpness of edges. The result is not indistinguishable from a modern camera photo, but it is substantially more printable.

## How Real-ESRGAN Addresses Low Megapixel Counts

A 2011 smartphone photo at 5MP is roughly 2592×1936 pixels. That is adequate for screen display but limits print size — at 300 DPI (standard print quality), a 5MP image prints at approximately 8.6×6.5 inches before interpolation artifacts become visible.

Real-ESRGAN upscales the image using AI-driven detail synthesis rather than simple interpolation. Instead of creating new pixels by averaging neighboring values (which blurs detail), Real-ESRGAN synthesizes plausible edge detail at the higher resolution based on patterns learned during training. The output of a 2× Real-ESRGAN upscale of a 5MP image is approximately 20MP — sufficient for a 12×17 inch print at 300 DPI.

Combined with NAFNet artifact removal, this two-step process — clean the artifacts, then upscale — produces substantially better results than upscaling first, because upscaling amplifies existing artifacts before they are removed.

## What the Full Workflow Looks Like on ArtImageHub

[ArtImageHub](https://artimagehub.com) applies this pipeline automatically:

1. Upload your recovered smartphone photo (JPEG, PNG accepted)
2. NAFNet runs first — reducing JPEG block artifacts and chroma noise
3. Real-ESRGAN upscales the cleaned image for print-quality output
4. GFPGAN applies face restoration if faces are detected (particularly useful for photos where subjects were close to the camera and face detail has been compressed)
5. Preview the result before downloading

The preview is free. Download the full-quality restored version for $4.99 one-time — there is no subscription and the payment covers unlimited restorations in a session.

For photographs recovered from a damaged phone — a child's first years, a vacation you cannot replicate, a family gathering that will not happen again — the $4.99 investment to make those files printable is usually an obvious call.

**Start restoring your recovered photos:** [Upload at ArtImageHub →](https://artimagehub.com/photo-enhancer)

---

*Photo recovery success rates depend on hardware damage type and extent. Files on NAND flash are recoverable in most screen-damage scenarios. Water damage recovery rates vary by depth and duration of exposure. AI restoration addresses compression artifacts in recovered files but cannot recover information discarded at the time of original capture.*
