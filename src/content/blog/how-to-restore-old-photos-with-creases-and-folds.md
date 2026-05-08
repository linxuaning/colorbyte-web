---
title: "How to Restore Old Photos with Creases and Folds"
description: "Fold cracking causes emulsion loss along sharp crease lines. Learn how AI inpainting fills these linear damage patterns and recovers facial detail in folded old photos."
publishedAt: "2026-05-08"
author: "Maya Chen"
coverEmoji: "📄"
tags: ["photo restoration", "crease removal", "fold damage", "AI inpainting"]
---

A photograph folded in half to fit in a wallet, tucked into a letter and mailed, or bent under the weight of other items in a box will carry the evidence of that stress indefinitely. Creases and folds are some of the most visually disruptive damage patterns in old photos—the hard geometry of a fold line cuts directly across faces, backgrounds, and important image content without regard for what lies beneath.

## What Happens to Photo Emulsion Along a Fold Line?

When a photographic print is bent sharply, the emulsion and paper base layers respond very differently to the mechanical stress. Paper is relatively flexible and can bend without structural failure. Gelatin emulsion, however, is much less elastic—it responds to bending by cracking. The crack typically follows the fold line precisely, creating a white or bright line of emulsion loss at the apex of the bend.

In mild folds where the bend was gentle and the photo straightened immediately, cracking may be minimal—just surface stress that appears as a slight tonal difference along the fold without actual emulsion separation. In severe folds where the photo was creased flat and kept folded for years, the emulsion along the fold line can flake away completely, leaving the paper substrate exposed as a bright white line cutting through the image.

The fold geometry also creates a shadow artifact in scans: the raised ridge at the crease casts a shadow on both sides, creating dark flanking lines adjacent to the bright crack. AI models must address both the bright crack and the dark shadow bands to fully restore the affected zone.

## How Does AI Handle the White Line of a Fold Crack?

Fold crack repair is a specialized form of linear inpainting. Unlike random scratch patterns, fold cracks follow straight lines across the image, which actually makes their detection more reliable—the AI identifies a continuous bright linear feature cutting across image content and flags it for reconstruction.

Models like Swin-IR and Real-ESRGAN, which power ArtImageHub's restoration pipeline, handle the structural reconstruction of content beneath fold cracks by analyzing texture and gradient continuity on both sides of the damage line and synthesizing a coherent fill. For content that crosses the fold—a face, a tree, a building—the fill must respect the visual logic of the object rather than simply interpolating between pixels.

Face enhancement models add a critical second layer for fold-damaged portraits. ArtImageHub applies CodeFormer or GFPGAN after the primary inpainting pass, recovering fine facial detail in the fold zone using the AI's understanding of facial anatomy. A fold crack crossing a nose, eye, or mouth area can be reconstructed with anatomically plausible detail rather than a generic smooth fill.

## Are Photos Folded for Years Harder to Restore Than Recently Folded Ones?

Time significantly affects the restoration challenge. A photo folded recently and then unfolded may show a crease line with minimal emulsion loss—the gelatin may have stress-whitened without fully cracking through. These cases are the most favorable for AI restoration because there is actual image content beneath the apparent line; it is simply obscured by altered surface reflectance.

Photos that were folded flat and kept that way for decades develop progressive emulsion loss along the fold. Gelatin continues to dry and contract, and emulsion continues to flake from the fold apex over years. Old wallet photos—typically stored folded inside leather for decades—often show almost complete emulsion loss along the central fold line, with secondary branching micro-cracks spreading from the main line.

The restoration challenge scales with the width of emulsion loss. A narrow crack (one to three pixels at 600 dpi scan resolution) is fully recoverable from surrounding content. A wide zone of emulsion loss (ten or more pixels wide) requires more extensive synthesis. ArtImageHub processes all severities, and even heavily damaged fold zones are typically reconstructed to a visually complete-looking result.

## Does Scanning a Folded Photo Flat Matter for AI Restoration?

Flattening a creased photo before scanning significantly improves AI restoration outcomes. When a fold is still raised—not fully flattened—the scanner illumination creates strong shadows along the fold ridge that add additional artifact information to the scan. These shadow patterns are additional damage for the AI to address on top of the actual emulsion cracking.

Flattening methods depend on severity. For mild creases, placing the photo face-down under a heavy flat book for 24 to 48 hours can provide adequate flattening before scanning. For severe permanent folds where the paper has set hard in the bent position, more aggressive humidification may be needed—placing the photo in a sealed container with a damp (not wet) sponge at the opposite end for 30 to 60 minutes can relax the paper fibers enough to allow careful flattening under weight.

Never apply direct moisture to the emulsion face of a photographic print during flattening. Humidification should act through the paper base. Allowing any water contact with the emulsion risks restarting gelatin swelling and creating new water damage on top of the existing fold damage.

## When Should You Restore vs. Preserve Fold Damage?

For family photographs intended for display, sharing, or reprinting, restoration is clearly preferable to preservation of fold damage. The goal is a usable, viewable image, and AI restoration achieves that reliably. For photographs with historical or archival significance—where the exact state of preservation might itself be informative—the standard practice is to preserve the damaged original while creating a restored digital copy for access. This gives researchers and family members the restored version for practical use while maintaining the physical evidence in the original.

ArtImageHub outputs high-resolution restored files suitable for printing at the original size or larger, making them appropriate for framing, book reproduction, and archival-quality printing. At $4.99 per restoration, creating a restored version of every significant fold-damaged print in a family collection is economically accessible without treating restoration as an either/or choice against preservation.

## Frequently Asked Questions

## How should I flatten old photos with severe folds before scanning?

For photos with mild to moderate creases that retain some flexibility, place them face-up between two sheets of clean unprinted white paper (to protect the emulsion) and place a heavy flat book or binder on top. Leave in place for 24 to 48 hours. This removes most remaining curl and ridge height, reducing shadow artifacts in scans. For severely set folds where the paper has hardened in position, a brief humidification session can help: place the photo in a sealed plastic bag with a small damp cloth at the opposite corner (not touching the photo), and leave for 30 to 60 minutes. The ambient moisture relaxes paper fibers enough to allow gentle flattening under weight. Always allow full air drying before scanning—never scan a slightly damp print. Do not apply steam directly to the photo surface. For precious irreplaceable originals, a professional conservator can safely flatten prints using archival humidification chambers. After flattening, scan at 600 to 1200 dpi and upload to ArtImageHub for restoration processing.

## Does the AI restoration change the overall image composition when fixing fold cracks?

The inpainting models are constrained to modify only the damaged region and its immediate boundary zone—they do not reshape, reframe, or alter the composition of undamaged image areas. Fold crack repair specifically targets the linear damage region and a narrow surrounding transition zone. The rest of the image is passed through enhancement stages (Swin-IR, Real-ESRGAN) that improve resolution and reduce general aging artifacts but preserve the original composition exactly. For portraits, the face enhancement pass (CodeFormer or GFPGAN) applies to detected face regions throughout the image but does not reposition or resize faces. What the AI changes is the damage pattern itself—replacing the bright crack and shadow bands with synthesized content that matches surrounding image character—while maintaining full fidelity to the undamaged areas. Comparing the restored output to the original scan is straightforward: the overall image should look identical except in the fold zone where damage has been reconstructed.

## Can AI restore photos that have been folded into very small sizes like wallet photos?

Wallet photos that were folded into quarters or smaller and stored for decades typically show multiple intersecting fold lines creating a grid pattern of cracks across the entire image. ArtImageHub handles these multi-fold cases through the same inpainting pipeline, addressing all damage regions simultaneously. The challenge increases with the number of intersecting fold lines because intersection points have multiple directions of missing content meeting at a single location. Each intersection requires the AI to synthesize content consistent with multiple gradient directions simultaneously. For wallet portrait photos, the face enhancement model helps significantly—even a face cut by two or three intersecting fold cracks can be reconstructed with recognizable facial features. Results for multi-fold photos are typically dramatic improvements over the damaged original, though the extent of historical fidelity decreases as the number of damage intersections increases. These photos are worth attempting restoration regardless of severity, as even partial recovery of a family portrait is valuable.

## Why do some restored fold cracks look slightly different in texture from the surrounding area?

Minor texture differences at restored fold cracks occur when the emulsion loss was wide enough that the AI synthesized content rather than simply recovering obscured original content. At the scale of individual image grains, the synthesized region may have slightly different grain character, tonal micro-variation, or noise pattern compared to original image areas adjacent to it. This is not a flaw in the restoration—it reflects the physical reality that original image information was lost at the fold and cannot be literally recovered. The visual difference is typically imperceptible at normal viewing distances and when images are printed at original size. It becomes visible only at extreme digital zoom (200% or more) where individual pixel characteristics are apparent. For display and sharing purposes, this level of difference is irrelevant. If output will be used for scientific or forensic purposes where image authenticity matters at the pixel level, this distinction between recovered and synthesized content should be documented.

## Should I restore a photo with fold damage before or after colorizing it?

Restore first, then colorize. The sequence matters because fold cracks present as bright white or light gray lines that a colorization model will interpret as actual image content with high lightness—potentially generating plausible but incorrect colors in the crack zone that then appear as colored streaks in the final image. Running restoration first removes the crack as a distinct feature, allowing the colorization model to see only coherent image content throughout the image. ArtImageHub's pipeline automatically handles this sequencing internally when both restoration and colorization are applied: the photo passes through damage repair, structural enhancement, and face recovery before color assignment. Users do not need to run two separate passes manually—a single upload processes the full pipeline in the correct order. If using ArtImageHub's restoration-only output and then applying colorization in a separate tool, ensure the restoration pass fully eliminates crack artifacts before submitting to the colorization step.

