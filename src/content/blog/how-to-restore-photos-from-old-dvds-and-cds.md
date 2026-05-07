---
title: "How to Restore Photos from Old DVDs and CDs"
description: "Recover photos from degraded DVDs and CDs. Disc rot, CD-R dye oxidation, Kodak Picture CD, disc reading methods, and NAFNet artifact removal after recovery."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["recover photos from old DVD", "CD photo recovery", "disc rot photo restoration", "NAFNet artifact removal"]
image: "/images/blog/how-to-restore-photos-from-old-dvds-and-cds.jpg"
coverColor: "#f5f0eb"
coverEmoji: "💿"
faq:
  - question: "What is DVD rot and how does it damage photos stored on discs?"
    answer: "DVD rot is the colloquial term for disc delamination — a failure where the adhesive bonding the reflective aluminum layer to the polycarbonate substrate breaks down, allowing oxygen and moisture to oxidize the reflective layer. The process is visible as iridescent spots, cloudiness, or areas where the disc becomes transparent when held to light. These delaminated areas cannot reflect the laser, causing read errors or complete failure in the affected sectors. DVDs manufactured before approximately 2005 used adhesive formulations less durable than later standards. Discs stored in high humidity, in paper sleeves, or exposed to UV light are at highest risk. The damage is irreversible — disc rot areas with lost reflective material cannot be read by any drive. Recovery depends on which sectors are affected: if damaged areas cover only file data sectors but leave the file system directory intact, the disc may still be partially readable with the undamaged files fully recoverable."
  - question: "How can you tell if a CD-R has dye oxidation and is it recoverable?"
    answer: "CD-R dye oxidation is visible as a color change in the disc's data layer — the area between the hub ring and the outer edge that appears green, gold, or blue depending on the dye formulation. A healthy CD-R shows uniform color in this region. Oxidized areas appear darker, greenish-brown, or purplish (the purple haze effect). The oxidation degrades optical contrast between burned and unburned pits and lands, reducing error correction headroom. Mild oxidation results in slow reads that error correction handles successfully. Severe oxidation produces uncorrectable errors and missing sectors. Recoverability depends on the pattern: outer edge oxidation is more recoverable because outer tracks may contain only partial file data. Uniform oxidation across the data area is more likely to hit critical sectors including the file system directory at the inner tracks — causing complete read failure even when most disc data is physically present and intact on the substrate."
  - question: "What is a Kodak Picture CD and what photo format does it use?"
    answer: "Kodak Picture CD was a consumer service offered by Kodak and photo processing labs from 1998 to approximately 2012. When you dropped off film for processing, you could pay extra to receive a CD-ROM with digital scans alongside your prints and negatives. Scans were saved as JPEG files at approximately 1024x1536 pixels (1.5 megapixels). The CD contained a simple HTML viewer and a folder named Pictures or Images with sequential JPEG filenames. Kodak Picture CDs used standard ISO 9660 format and are readable by any modern optical drive — the content is standard JPEG, not a proprietary format. The quality limitation is the 1.5-megapixel scan resolution, acceptable for 4x6 prints in 1998 but low by current standards. Real-ESRGAN upscaling increases these to 6-8 megapixel equivalents with significant detail recovery. Kodak used moderate JPEG quality (approximately 80-85%), so running NAFNet artifact removal before upscaling produces noticeably better results than upscaling the compressed original directly."
  - question: "What should I do if the disc is completely unreadable?"
    answer: "When a disc fails to read in multiple drives, you have two practical options: attempt physical intervention yourself before paying for professional recovery, or go directly to professional data recovery. Home attempts that sometimes succeed: the angle trick (inserting the disc slightly off-axis using a thin card under the edge, changing the laser path angle), disc polishing for minor lacquer haze on the non-label side using a disc polisher or toothpaste-and-cloth in radial strokes, and trying multiple optical drives with different laser wavelengths — some drives handle degraded media better than others. Professional optical media recovery services attempt laser power adjustment and specialized reflectivity compensation, costing $50-300 depending on condition. The value calculation is personal: if the disc contains the only photos of a deceased relative with no other copies, $200-300 is straightforward. If the disc duplicates photos on other media, exhaust home attempts first before committing to professional recovery costs."
  - question: "How does NAFNet remove compression artifacts from recovered disc photos?"
    answer: "Photos from Kodak Picture CDs, Fuji FinePix CDs, and similar consumer disc services were compressed as JPEG at quality 75-85. This introduces characteristic artifacts: 8x8 pixel blocking in smooth gradient areas (sky, skin, backgrounds), ringing around sharp edges (tree branches, window frames, hair), and chroma subsampling artifacts at color transitions. NAFNet addresses JPEG artifacts through a learned noise reduction model that distinguishes compression patterns from real image content. It smooths block boundaries without blurring genuine edges, and suppresses ringing while preserving edge sharpness. For recovered disc photos, running NAFNet artifact removal before Real-ESRGAN upscaling produces substantially better output — the upscaling model receives a clean input and extrapolates real detail rather than amplifying compression blocks. The sequence at ArtImageHub is automatic in Old Photo Restoration: NAFNet denoising runs before Real-ESRGAN upscaling in a single upload step. The $4.99 one-time access covers this complete pipeline with no per-photo fees."
---

> **Restore your recovered disc photos**: [Old Photo Restoration](/old-photo-restoration) — $4.99 one-time, no subscription. Upload your recovered photo file and preview the result before downloading.

The photos on that old DVD or CD in your drawer may already be partially lost and you do not know it yet. DVD rot, CD-R dye oxidation, and physical scratches degrade optical discs silently — often for years before a failed read attempt reveals the problem. The window for recovering photos from aging optical media is closing, and the recovery process itself produces files that need AI restoration work before they are usable.

This guide covers the complete workflow: identifying disc degradation, maximizing recovery from physically compromised discs, understanding the common disc-based photo formats, and restoring the recovered files with NAFNet compression artifact removal and Real-ESRGAN upscaling.

## How Do You Identify Whether Your Disc Is Degrading?

Disc degradation takes different forms depending on disc type and failure mode. Identifying the failure type before attempting recovery helps set expectations.

**DVD delamination (DVD rot):**
- Hold the disc to a bright light source and look through the disc from the label side
- Delaminated areas appear as spots or patches where the disc has become translucent — you can see light through areas that should be opaque
- Iridescent or bronze-colored patches on the data surface (the shiny non-label side) indicate oxidation where the protective lacquer has failed
- Small spots may be recoverable; large delaminated areas covering 20% or more of the data surface are likely to cause significant data loss

**CD-R dye oxidation:**
- Examine the data surface (non-label side) under bright light at an angle
- Healthy CD-R shows a uniform green, gold, or blue color in the data area
- Oxidized areas appear as darker patches, greenish-brown mottling, or a purple-grey haziness distinct from the surrounding color
- "Bronze rot" in early CD-Rs: the entire data area shifts from green or gold to a bronzed, darker appearance

**Physical scratches:**
- Radial scratches (running from hub to edge) are less damaging because they cross data tracks rather than following them
- Circular scratches (following the disc rotation path) are more damaging because they can affect many consecutive data sectors
- Deep scratches that catch a fingernail are likely to cause read errors; surface-level haze from handling often reads fine

## What Home Recovery Methods Are Worth Trying?

Before assuming a disc is unrecoverable, several home methods succeed often enough to be worth attempting:

**Try multiple optical drives.** Different drives have different laser power levels, error correction aggressiveness, and read tolerance for degraded media. A disc that fails in a laptop optical drive may read successfully in an older desktop DVD drive or a dedicated optical drive unit. If possible, try at least two drives from different manufacturers before concluding the disc cannot be read.

**Slow-read recovery software.** Standard disc reading fails fast on read errors. Recovery software like IsoBuster (Windows), TestDisk (cross-platform), or Disc Rescue (macOS) uses extended read retries and multiple-pass techniques that succeed where standard copying fails. These tools read each sector multiple times, using different error correction passes, to assemble the best possible reconstruction of damaged sectors.

**The angle trick for partial reads.** Some drives can read a partially delaminated disc if the disc is inserted at a slightly different angle than the normal flat position. This works inconsistently and depends on the drive mechanism's tolerance for disc positioning. Insert the disc normally, then if it fails, try inserting a thin card under one edge of the disc before fully closing the drive tray — the slight angle changes which part of the optical path the laser uses.

**Disc polishing for scratches.** Scratches on the data surface (non-label side) can sometimes be polished out using a disc polishing machine or, for minor surface haze, a small amount of toothpaste applied with a lint-free cloth in radial (hub-to-edge) strokes, then rinsed and dried. Never use circular polishing motions. This only helps with surface scratches, not with disc rot or dye oxidation.

## What Formats Will You Find on Old Consumer Photo Discs?

Understanding what the disc contains before attempting recovery helps organize the recovery process and identify what file types to prioritize.

**Kodak Picture CD (1998-2012):**
- File system: ISO 9660 (standard CD-ROM)
- Image format: JPEG, resolution approximately 1024x1536 pixels (1.5 megapixel)
- Filenames: sequential numeric (e.g., 00001.JPG through 00036.JPG for a 36-exposure roll)
- Also contains: HTML viewer application, thumbnail images, sometimes Kodak PhotoNet ordering software
- Recovery note: JPEG files are in a folder labeled Pictures, Images, or DCIM — not nested in proprietary subdirectories

**Fuji FinePix Photo CD:**
- File system: ISO 9660
- Image format: JPEG, resolution 1280x960 to 2048x1536 depending on camera model and year
- Filenames: Fuji's DSCF naming convention (DSCF0001.JPG etc.)
- Standard JPEG, no proprietary encoding

**Early Sony digital camera discs (MVC-CD200, MVC-CD400 cameras, 2000-2004):**
- These cameras wrote directly to 80mm mini-CDs
- File system: UDF or ISO 9660 depending on model
- Image format: JPEG, resolution 1600x1200 to 4.1 megapixel
- Filenames: DSC00001.JPG etc. (standard Sony naming)

**Generic photo lab CD/DVD (2000-2010):**
- Varied by lab — may contain JPEG, TIFF, or lab-proprietary formats
- Usually a standard folder structure with JPEG files
- May include a lab-branded viewer application that is irrelevant to image extraction

**Home backup DVDs:**
- User-created discs containing camera downloads, often mixed file types
- May contain JPEG, RAW (CR2, NEF, ARW depending on camera manufacturer), PNG, or TIFF
- Organization varies entirely by the person who created the disc

## What Should You Do After Recovering the Photo Files?

Successfully recovered files from aging optical media typically have several quality problems regardless of how well the recovery went. These problems require AI restoration rather than just file extraction.

**JPEG compression artifacts.** Kodak Picture CDs, Fuji FinePix discs, and most consumer photo lab CDs used moderate JPEG compression — quality settings of 75-85. At these quality levels, 8x8 blocking is visible in smooth areas, ringing appears around sharp edges, and chroma subsampling produces color bleeding in color transition regions. These artifacts were acceptable in 1999 for 4x6 prints but are visible at current display sizes.

**Low resolution.** 1.5-megapixel Kodak Picture CD scans and early 1-2 megapixel digital camera files are simply too small for current display standards. A 1024x1536 JPEG displayed at 4K resolution covers less than a quarter of the screen.

**Partial corruption.** Discs with read errors in some sectors but successful reads elsewhere may have produced JPEG files with corrupted blocks — regions where recovered data was missing and the recovery software filled in zeros or nearest-valid-data. These appear as grey or black rectangular patches in the image.

The AI restoration workflow for recovered disc photos at [ArtImageHub](https://artimagehub.com):

**Step 1: JPEG artifact removal first.** Upload to [Photo Denoiser](https://artimagehub.com/photo-denoiser) or use the NAFNet pass built into [Old Photo Restoration](https://artimagehub.com/old-photo-restoration). NAFNet removes JPEG blocking and ringing artifacts while preserving edge sharpness. This is the most impactful step for disc-origin photos.

**Step 2: Upscale via Old Photo Restoration.** Real-ESRGAN takes the denoised file and produces a 4x upscaled output. A 1024x1536 Kodak Picture CD scan becomes approximately 4096x6144 — a 25 megapixel equivalent that prints cleanly at 8x10 inches or larger.

**Step 3: Face restoration if needed.** For portrait photographs recovered from family photo discs, run through [Photo Enhancer](https://artimagehub.com/photo-enhancer) for GFPGAN face detail reconstruction. Low-resolution disc photos with faces are among the most dramatically improved cases — GFPGAN recovers eye detail, skin texture, and expression nuance that was unresolvable at the original disc scan resolution.

**Step 4: Colorization if applicable.** Some photo lab CDs from the 1990s included black-and-white scans of older photos alongside color prints. For any black-and-white images found on the disc, [Photo Colorizer](https://artimagehub.com/photo-colorizer) with DDColor produces plausible color reconstruction.

The $4.99 one-time fee at [artimagehub.com](https://artimagehub.com) covers all tools — Old Photo Restoration, Photo Enhancer, Photo Colorizer, Photo Denoiser, and JPEG Artifact Remover.

## When Should You Pay for Professional Data Recovery?

Professional optical media recovery makes economic sense when:
- The disc contains the only existing copy of photographs with significant personal or historical value
- Home recovery methods have failed (multiple drives, recovery software, polishing)
- The disc has visible delamination or oxidation affecting the majority of the data area

Professional data recovery services that handle optical media typically charge $50-300 depending on the extent of damage and whether clean-room work is required. For most consumer disc rot or dye oxidation cases, clean-room work is not necessary — the recovery is a software and laser power problem, not a physical substrate reconstruction problem.

Services to evaluate: DriveSavers, Ontrack, WeRecoverData, and many regional data recovery shops handle optical media. Get a quote before committing — most services provide free evaluation of whether recovery is possible before charging.

If the disc contains truly irreplaceable photographs and professional recovery is not economically feasible, submit the disc for free-to-low-cost recovery programs offered by some digital preservation nonprofits and library systems. Programs vary by region.

The photos on that disc exist. The question is only whether they can still be read — and then whether they can be restored to usable quality. Start with the home methods, and if they succeed, [ArtImageHub](https://artimagehub.com) will handle the restoration work.
