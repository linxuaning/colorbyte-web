---
title: "How to Recover Photos from Old Hard Drives (and Fix Corrupted Files)"
description: "Step-by-step guide to recovering photos from failed HDDs, SSDs, and USB drives — plus how NAFNet and Real-ESRGAN can partially fix corrupted JPEG artifacts."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["recover photos hard drive", "corrupted JPEG repair", "photo recovery", "NAFNet"]
image: "/images/blog/how-to-recover-photos-from-old-hard-drives.jpg"
coverColor: "#f5f0eb"
coverEmoji: "💽"
faq:
  - question: "What should you do immediately when a hard drive starts clicking?"
    answer: "A clicking hard drive — the repetitive ticking or clunking sound of a read/write head failing to find its track — indicates head crash or assembly failure. The single most important rule: power the drive off immediately and do not power it on again. Every additional power cycle with a failed head risks the head contacting the magnetic platters and scratching the surface, permanently destroying data in those sectors. A drive that clicks but has not yet suffered platter contact is recoverable. A drive with platter contact may be unrecoverable regardless of expenditure. Once off, do not attempt DIY repair — do not freeze the drive, strike it, or disassemble it outside a cleanroom. Contact a professional data recovery lab. Reputable providers like DriveSavers, Ontrack, and Gillware offer free evaluations and quote before billing. The $300 to $3,000 recovery cost is frequently the right choice for irreplaceable family photographs."
  - question: "What free software tools work best for recovering photos from a failed drive?"
    answer: "Two free tools cover most consumer photo recovery scenarios. Recuva (Windows, by Piriform) is the most user-friendly option for recovering deleted files from a drive still recognized by the operating system. Its deep scan mode searches for file signatures rather than relying on the directory, recovering photos deleted and partially overwritten. PhotoRec (cross-platform, by CGSecurity) is more powerful — it performs signature-based carving directly from raw disk sectors, bypassing the file system entirely, making it effective on drives with corrupted file systems. PhotoRec supports over 480 file formats and requires no operating system to have recognized the drive. For a drive appearing as unformatted or RAW in Disk Management, start with PhotoRec. For a drive with intact file system showing files as deleted, start with Recuva. Both tools produce zero additional drive writes during scanning, which is critical for maximizing recovery success."
  - question: "What do partially corrupted JPEG files look like, and can AI fix them?"
    answer: "JPEG corruption takes distinctive visual forms depending on where in the file it occurred. The most common pattern is correct image from the top of the frame to a hard line, below which the image becomes a field of colored blocks — this results from corruption mid-stream where the JPEG decoder loses synchronization. Another form is color cast corruption: the entire image renders with an extreme color shift (vivid green or magenta) from corruption in the JPEG header color tables. Missing bottom half is common in large files with end corruption. Real-ESRGAN and NAFNet can partially address block artifact patterns in mild JPEG corruption. These models suppress DCT block artifacts from heavy compression, and similar-looking patterns from mild corruption respond to the same processing. Severe corruption with large areas of randomized pixels cannot be recovered by AI enhancement — the underlying data is absent regardless of processing applied."
  - question: "After recovering files from a damaged drive, what format priority should you use?"
    answer: "When recovery tools find multiple versions of the same image, prioritize by format in this order: RAW camera files first (CR2, NEF, ARW, DNG), then TIFF, then high-quality JPEG. RAW files contain complete sensor data — more tonal range and color information than any processed format, with maximum latitude for AI enhancement. If recovery software finds both RAW and JPEG versions from a camera that was set to write both, prioritize the RAW and use the JPEG as reference only. TIFF files store image data without lossy compression and are the second-best archival format. High-quality JPEG files are useful working copies but should not be the sole version kept when TIFF or RAW alternatives exist. For AI restoration through ArtImageHub, uploading the highest-quality available version gives Real-ESRGAN and NAFNet maximum pixel information, producing better output than a degraded, heavily compressed source file."
  - question: "At what point does professional data recovery justify its cost over free DIY tools?"
    answer: "The choice between free DIY recovery and professional recovery ($300 to $3,000) depends on drive condition. Use free tools first if the drive is recognized by the operating system, spins up without unusual sounds, and the problem is logical — deleted files, corrupted file system, accidental reformat. Free tools handle these scenarios with no additional damage risk because the drive hardware is functional. Escalate to professional recovery immediately if the drive clicks or grinds (head failure), is not recognized by BIOS/UEFI at all, or was physically damaged by liquid, impact, or fire. These physical failure scenarios require cleanroom disassembly and often head or platter transplant — expensive, but the alternative is no recovery whatsoever. For photographs that exist nowhere else — deceased family members, childhood events, unrepeatable moments — the professional recovery investment is almost always worth making before accepting total loss."
---

> **Before spending thousands on professional data recovery or accepting photo loss as permanent, understand exactly what failure mode you are dealing with — the right approach depends entirely on the specific way your drive has failed.**

Every family has a hard drive somewhere — a desktop computer from 2008, an external drive bought at Best Buy, a USB flash drive used for years as a backup — that contains photographs that exist nowhere else. When these drives fail, the instinct is to panic and immediately try every possible fix simultaneously. This is exactly the wrong approach. Understanding how your specific drive has failed determines whether free tools can recover your photos or whether you need professional help.

## Why Does a Clicking Hard Drive Mean You Must Stop Immediately?

A traditional hard disk drive (HDD) stores data on magnetic platters that spin at 5,400 or 7,200 RPM. A read/write head assembly floats micrometers above the spinning platters on a cushion of air, moving across the disk surface to read and write data. This system works reliably under normal conditions, but when the head assembly fails — whether from bearing failure, head crash, or the motor that positions the head losing calibration — the head begins making repetitive seeking movements without finding the track it is looking for. This produces the audible clicking sound that indicates a failing HDD.

The danger of continuing to power a clicking drive: every revolution of the spinning platters with a failed head risks the head contacting the platter surface. The platter coating is thin and soft. Head contact at 7,200 RPM scratches the magnetic coating off the platters, destroying the data permanently. A drive that clicks but has not yet experienced platter contact is recoverable by a professional lab with cleanroom equipment. A drive that has had platter contact may be unrecoverable at any price.

The rule is absolute: if your drive clicks, power it off immediately. Unplug it from power. Do not attempt additional boots. Call a professional data recovery lab.

## How Do Different Drive Types Fail Differently?

Understanding the failure mode of your specific storage type helps calibrate your recovery approach:

**Traditional HDD failure modes:**
- **Head crash** (clicking): Head assembly contacts the platter. Requires professional cleanroom recovery.
- **Platter motor failure** (not spinning): Drive does not spin up; the motor or spindle bearing has failed. Professional recovery required.
- **Electronic board failure** (recognized but inaccessible): The drive circuit board has failed. Sometimes fixable by swapping a matching donor board, but modern drives have drive-specific calibration data that makes this more complex than it once was.
- **Bad sectors** (slow, clicking intermittently): Sectors on the platter have gone unreadable. Free tools can often recover files not stored on the bad sectors; professional tools can recover some bad-sector data.

**SSD failure modes:**
- **NAND wear-out**: NAND flash has a finite write cycle count (typically 3,000-10,000 program/erase cycles for consumer-grade TLC NAND). When cells wear out, the drive may become read-only, produce read errors, or fail entirely. Recovery is often possible at the software level.
- **Controller failure**: The SSD controller chip handles all data access. Controller failure with intact NAND may be recoverable by a lab that can directly read the NAND chips.
- **Sudden death**: Some SSD models, particularly early generation SSDs, fail without warning signs. Professional recovery is the only option.

**USB external drive failure:** These are almost always a standard HDD or SSD inside a USB enclosure with a cheap controller board. The enclosure electronics frequently fail before the drive itself. If your USB drive fails, open the enclosure and connect the drive directly via SATA — the drive inside may be perfectly functional with a failed USB bridge board.

## Which Free Recovery Tools Work for Which Situations?

**Recuva** (Windows only, free, by Piriform):
Best for: Deleted files on a functioning drive with an intact file system. Deep scan mode performs file signature carving when the file system directory has been corrupted. Install Recuva on a separate drive from the one you are recovering — never install software on the drive containing the files you want to recover, as installation writes data that may overwrite deleted photos.

**PhotoRec** (Windows/Mac/Linux, free, open source):
Best for: Drives with corrupted or unrecognized file systems, drives showing as RAW in Disk Management, or any situation where the file system cannot be mounted. PhotoRec ignores the file system entirely and scans raw sectors for file signatures. It recognizes JPEG, RAW camera formats, TIFF, PNG, and over 480 other formats. The interface is text-based, which discourages casual users, but the underlying capability is significantly more powerful than GUI tools.

**TestDisk** (bundled with PhotoRec, free):
Best for: Recovering deleted partitions, repairing corrupted partition tables, making a logically damaged drive mountable again before running recovery software. Use TestDisk before PhotoRec if the drive shows as unallocated space or the partition has been accidentally deleted.

## What Do Corrupted JPEG Files Look Like and What Can AI Fix?

JPEG files are compressed using discrete cosine transform (DCT) encoding, which means corruption at any point in the file's data stream affects everything after the point of corruption. The specific visual appearance of the corruption depends on where in the file it occurs:

**Block artifact cascade**: Corruption in the middle of the compressed data stream causes the JPEG decoder to lose sync. The image renders correctly from the top to the point of corruption, then becomes a field of colored blocks (8x8 or 16x16 pixel grids in varying solid colors) for the remainder of the frame. This is the most common corruption pattern from bad sectors or file system errors.

**Missing bottom half**: Corruption or truncation at the end of the file causes the image to render only the portion before the corruption. The file opens, shows a top portion of the image, and then the remainder of the frame is blank, black, or filled with a repeated pattern.

**Color cast corruption**: Corruption in the JPEG header — specifically in the quantization tables or color transform data — causes the entire image to render with a severe color shift. The image structure is intact but everything appears magenta, green, or some other extreme color.

**Real-ESRGAN and NAFNet partial recovery**: For images with block artifact patterns from mild corruption, AI processing through [ArtImageHub](https://artimagehub.com) can partially reduce the visual impact. Real-ESRGAN and NAFNet were trained to suppress DCT block artifacts from heavy JPEG compression — the 8x8 colored blocks from corruption look similar to extreme compression artifacts in the training data. The models will attempt to smooth and reconstruct these areas. Results are partial: the underlying data is gone, but AI can reduce the visual severity of mild corruption at the edges of the damaged area. Severe corruption with large areas of random pixel data cannot be recovered this way.

## What Is the Right File Format Priority After Recovery?

When recovery software finds multiple versions of the same image, prioritize by format in this order:

**RAW camera files** (CR2, CR3, NEF, ARW, RW2, ORF, DNG): Your camera's RAW file contains the complete unprocessed sensor data — typically 12 or 14 bits of tonal information per channel versus 8 bits in JPEG. This gives the most tonal range and detail for AI restoration. If recovery finds both RAW and JPEG versions (your camera may have been set to shoot both), prioritize the RAW.

**TIFF**: Lossless storage of processed image data. If RAW is not available, TIFF preserves full bit depth without the lossy compression that degrades JPEG. TIFF files are often much larger than JPEG equivalents (an 8-megapixel JPEG at high quality might be 3MB; the same image as 16-bit TIFF is 48MB).

**High-quality JPEG**: The practical format for most recovered consumer photos. When uploading to [ArtImageHub](https://artimagehub.com) for restoration, use the highest-quality JPEG available. Real-ESRGAN performs better with less compressed source material — a high-quality JPEG gives the model more edge detail and tonal gradation to work with than a heavily compressed equivalent.

The $4.99 one-time access to [ArtImageHub](https://artimagehub.com) includes preview before payment — you can see exactly how much detail Real-ESRGAN and NAFNet can recover from your specific recovered files before committing.

---

Photo recovery success rate is determined almost entirely by how quickly you stop writing to the failed drive and by matching the right recovery tool to the specific failure mode. Get that step right, and AI restoration at [ArtImageHub](https://artimagehub.com) can address the remaining degradation — corruption artifacts, JPEG noise, and detail loss — to return recoverable photos to the best possible quality.
