---
title: "How to Restore Old Photos with Missing Corners"
description: "Corner damage is one of the most common problems in old photo collections. Learn how AI edge reconstruction models fill missing corners with accurate background content."
publishedAt: "2026-05-08"
author: "Maya Chen"
coverEmoji: "📐"
tags: ["photo restoration", "corner damage", "AI reconstruction", "photo repair"]
---

Corner damage is nearly universal in vintage photo collections. Corners are physically vulnerable—they bear the impact of every drop, bend under pressure when stored loosely, and are the first area to separate when adhesive in albums dries out. Over decades, broken, missing, or dog-eared corners are the default state for many family photographs.

## What Causes Corner Damage in Old Photos?

Corner damage develops through several common pathways. Physical impact—dropping a photo or box of photos—transfers force to the corners first, causing the emulsion layer to crack or separate from the paper base. Repeated handling over decades wears corners smooth and then through. Storage in direct contact with other prints leads to corner abrasion as prints shift against each other.

Adhesive failure in photo albums creates a distinct pattern: when the adhesive holding a print in place dries and contracts, it applies tension to the print. Corners lift first and, with the glued-down center holding, corners tear free. The resulting damage often leaves a torn or jagged edge rather than a clean break.

Dog-earing—folding corners back repeatedly—weakens the paper substrate through mechanical stress. When emulsion layers cannot flex as elastically as the paper below, they crack along the fold line and eventually flake off.

## How Does AI Reconstruct Missing Corners?

AI reconstruction of missing corners uses edge extrapolation combined with semantic content modeling. The process begins with the AI analyzing what exists at the corner edges—the gradient directions of sky, ground, walls, or other backgrounds—and extending those gradients smoothly into the missing region.

For corners that fall entirely within background areas (sky, grass, patterned wallpaper), this reconstruction is highly reliable. The model extends the observed texture and color smoothly, producing fills that visually blend with surrounding content. At typical viewing distances, AI-reconstructed corners are indistinguishable from the original.

When corners include portrait subjects or complex foreground content, reconstruction involves more creative synthesis. Models like Stable Diffusion's inpainting architecture, which powers elements of ArtImageHub's pipeline, use the full image semantic context to guide fills—recognizing, for example, that a corner containing a shoulder and arm should be completed with plausible fabric texture and skin tone continuous with what is visible nearby. Face enhancement models like GFPGAN add refinement if a corner includes partial facial features.

## Are Dog-Eared Corners Harder to Restore Than Missing Corners?

Dog-eared corners present a different challenge than cleanly missing corners. A dog-eared corner still has the physical material, but the repeated bending has created a visible fold line with emulsion cracking along it. The AI must address both the geometric distortion of the folded region and the crack pattern in the emulsion.

For scanned dog-eared corners, the fold creates a shadow zone where the lifted paper edge casts a shadow across the image face. The AI must separate the actual image content from the lighting distortion caused by the fold geometry. This is generally achievable but adds complexity compared to a cleanly missing corner where the surrounding content is undamaged.

The most practical preparation for dog-eared originals is to gently flatten the corner before scanning, pressing it firmly against the scanner glass to reduce shadow depth. The better the geometry of the scan input, the more accurately the AI can process the underlying image content.

## Does Image Content Near Corners Affect Restoration Quality?

The content type adjacent to the missing corner is the primary factor determining restoration fidelity. The spectrum runs from easiest to hardest:

Plain sky or gradient background: near-perfect reconstruction. The AI extends continuous color and subtle gradient with high accuracy, and the result is visually seamless.

Uniform patterned background (wallpaper, carpet): excellent reconstruction. Pattern extension along the edges allows accurate synthesis.

Natural backgrounds (trees, foliage, grass): very good reconstruction. Organic textures are synthesized convincingly even if the exact arrangement differs from the lost original.

Architectural content (buildings, furniture, windows): good reconstruction. Straight lines and perspective geometry guide accurate extension.

Portrait subjects and faces: good to excellent reconstruction, improved significantly by the face enhancement pass. ArtImageHub runs CodeFormer after the primary inpainting step, recovering facial features with anatomical accuracy rather than generic synthesis.

Text or dates near corners: the hardest category. AI cannot reliably infer specific letter sequences and may produce plausible-looking but incorrect text. For photos with handwritten inscriptions near corners, noting the reconstruction and preserving the damaged original for reference is recommended.

## When Is It Worth Paying for Professional AI Restoration?

ArtImageHub charges $4.99 for a full high-resolution restoration of a single photo. This price point makes professional-grade AI restoration accessible for nearly any use case, including casual family history projects. The output is high-resolution and print-ready, suitable for framing, book reproduction, or sharing digitally.

For the common scenario of a family print collection with dozens of corner-damaged photos, the batch economics are straightforward: each image receives the same complete pipeline—Swin-IR for structural enhancement, Real-ESRGAN for resolution upscaling, specialized face models for portraiture, and inpainting for corner fills—at a consistent cost per image.

For very severely damaged photos where corners constitute large portions of the overall image area, reviewing output against the original before committing to final use is worthwhile. The AI produces the best reconstruction possible with available information, and that reconstruction is always dramatically better than the damaged original.

## Frequently Asked Questions

## How should I scan photos with physically missing corners for best AI results?

Place the photo on the scanner with the remaining three corners properly aligned to the grid. For the missing corner, the scanner will capture white or gray scanner background in that region, which provides the AI with a clean mask indicating the missing zone. Do not attempt to patch or fill missing corners with tape or paper before scanning—these materials have different surface reflectance than the photo and create complex artifact patterns at their boundaries. Scan at 600 dpi minimum, 1200 dpi for prints smaller than 4×6 inches. If the photo has multiple damaged corners, scan all damage in a single pass rather than attempting to capture corners separately and composite later. The AI processes the entire image simultaneously, and feeding it an artificially composited file with inconsistent grain and tone can confuse inpainting decisions. Save the scan as an uncompressed TIFF or maximum-quality JPEG before uploading to ArtImageHub, which then handles the reconstruction automatically with no manual masking required from the user.

## Can AI restoration match the exact paper texture in reconstructed corners?

AI reconstruction of corner regions uses texture synthesis to match the paper texture visible in intact surrounding areas. This matching is approximate rather than exact—no AI can recover information that was physically present in the lost corner. The synthesized texture typically appears visually consistent with surrounding paper texture at standard display and print resolutions. At extreme magnification (more than 200%), differences between original and synthesized regions may be visible as slightly different grain character or minor color variation. For display, printing, and standard digital sharing purposes, this level of fidelity is more than sufficient. For forensic or archival applications where exact surface texture matters, the reconstruction can be used as a visual reference while the damaged original is preserved separately. The goal of AI corner reconstruction is to produce an image that can be displayed, printed, and shared without the corner damage dominating the viewer's attention, and the results consistently achieve that goal.

## Does ArtImageHub require me to mark which corners are missing?

No manual masking or corner marking is required. The AI pipeline detects missing or damaged regions automatically by identifying areas that fall outside the expected image boundary or that show anomalous tonal signatures consistent with physical damage. For clearly missing corners—where scanner background shows through—detection accuracy is very high. For torn or jagged edges where some original material remains but is damaged, the AI combines edge detection with content analysis to determine the restoration boundary. In occasional ambiguous cases, the AI errs toward conservative reconstruction that blends with existing content rather than aggressively filling areas that might contain original image data. This automatic operation means the workflow is simple: scan the damaged original, upload to ArtImageHub, download the restored result, and compare. No annotation software, masking tools, or technical knowledge of the restoration process is required from the user.

## How large can missing corners be before AI reconstruction becomes unreliable?

Corner reconstruction reliability scales with the proportion of the image affected. For missing corners that represent less than ten percent of total image area—typical for most common corner wear and small tears—reconstruction is highly reliable and visually seamless. For missing corners representing ten to twenty-five percent of total image area, reconstruction is still very good for background content but becomes more synthesized (less historically faithful) for complex foreground subjects. For very large missing corners—those exceeding a quarter of the image—the AI has limited surrounding context to guide synthesis, and results for complex content are creative reconstructions rather than accurate recoveries. Even these large-scale reconstructions produce images that are dramatically more presentable than the damaged originals. The practical recommendation is to always attempt AI restoration regardless of corner size, review the result against the original, and use the output for its intended purpose (display, sharing, printing) with awareness that very large reconstructed areas represent the AI's best synthesis rather than historical record.

## Should I crop the photo to remove corner damage before uploading?

Do not crop out corner damage before uploading to ArtImageHub. The AI reconstruction process specifically benefits from knowing where damaged regions are relative to the full image boundary. Cropping away a missing corner before upload gives the AI no opportunity to reconstruct that content—instead, the cropped version simply delivers a smaller final image. Additionally, edge context within the image is important for guiding inpainting: the AI uses content at the edge of the photo (even if damaged) to understand what gradients and textures should be extended into the missing area. Cropping removes this contextual information. The correct workflow is always to upload the complete damaged original and let the AI determine which regions require reconstruction. If after restoration you prefer a slightly cropped version that removes any remaining visible boundary artifacts, that minor crop can be done on the high-resolution restored output rather than as preprocessing.

