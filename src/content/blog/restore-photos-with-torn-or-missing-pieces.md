---
title: "How to Restore Photos with Torn Edges, Missing Pieces, or Physical Damage"
description: "Honest guide to what AI can and cannot fix when photos have torn corners, missing sections, fold marks, or punch holes. Includes realistic workflow and when to use professional retouching instead."
publishedAt: "2026-05-07"
author: "Diane Palmer"
authorRole: "Photo Restoration Technician & Conservation Specialist"
authorBio: "Diane has worked in photographic conservation for over fifteen years, assisting archives, libraries, and families in recovering physically damaged prints. She now writes honest, technically grounded guides to help people set realistic expectations before they send photos through any restoration process — AI or otherwise."
reviewedBy: "ArtImageHub editorial team — verified against current AI inpainting limitations, May 2026"
category: "How-To"
tags: ["Torn Photos", "Physical Damage", "Photo Restoration", "Missing Pieces", "Damage Repair"]
coverColor: "from-rose-500 via-pink-600 to-red-700"
coverEmoji: "🖼️"
faq:
  - question: "Can AI restore a photo that is torn in half?"
    answer: "It depends on whether both halves still exist. If both physical pieces are intact, scan each half separately at high resolution (600 DPI minimum), align them in any image editor, and then run the joined scan through ArtImageHub's Old Photo Restoration to clean up the fold line, color mismatch at the seam, and surrounding aging damage. The AI handles the artifact layer — the scratches, yellowing, and grain — extremely well. What it cannot do is invent content for the gap between the two pieces if they no longer fit flush together or if material is missing at the tear. A clean tear with both halves reunited is highly restorable. A torn-in-half photo where one piece is lost requires generative inpainting — a separate category of tool that AI restoration does not currently include. In those cases, professional retouchers or inpainting-specific tools like Adobe Firefly are needed for the missing half."
  - question: "What types of physical photo damage can AI fix?"
    answer: "AI restoration handles damage that manifests as surface artifacts over otherwise intact image content. This includes fold lines and crease marks, which appear as linear brightness discontinuities in the scan; yellowing and color fading from chemical aging and UV exposure; foxing spots and water stain rings that sit on top of the underlying image data; surface scratches and abrasion marks; silver mirroring on black-and-white prints, which creates a shiny metallic sheen over dark areas; and overall loss of contrast and sharpness from age-related emulsion decay. ArtImageHub's Old Photo Restoration addresses all of these categories automatically in a single processing pass. It also improves facial detail using a GFPGAN-derived enhancement component, which is particularly noticeable on portraits damaged by general softness or fading. What unites all fixable damage types is that the underlying image content remains present — the damage is a degrading layer over it, not an absence where content used to be."
  - question: "What physical damage is beyond what AI restoration can fix?"
    answer: "Any damage where the original image content is physically absent is beyond standard AI restoration. This includes torn-off corners or sections where one piece is lost, punch holes through the photo (common in archived school or ID photos), large sections burned, soaked beyond legibility, or peeled away, and areas where the emulsion has completely flaked off the paper base. In all these cases, the content beneath is gone — there are no pixels for the AI to clean up, only absence. What fills that absence is called inpainting: generating plausible image content to fill a missing region. ArtImageHub's Old Photo Restoration does not include generative inpainting. For missing content, you need either a professional retoucher who paints the region manually, or an inpainting-specific tool such as Adobe Firefly, Stable Diffusion inpaint, or similar. AI restoration and AI inpainting are genuinely different tasks — they are not the same tool."
  - question: "How should I scan a physically damaged photo to get the best AI results?"
    answer: "Scan damaged photos at 600 DPI as the minimum, 1200 DPI for small prints (wallet-size or 3x5 inches). Use a flatbed scanner rather than a phone camera — the even backlit illumination minimizes shadows from raised tears or lifted emulsion. If the photo has loose corners or curling edges, place a sheet of clean glass over it to flatten it during scanning. Do not tape torn pieces together before scanning — tape creates its own artifacts and can cause further damage. Instead, scan each piece separately at high resolution and align them digitally afterwards. For photos with active mold or fragile emulsion, consult a conservator before scanning — pressing on fragile prints can cause further separation. After scanning, crop the image cleanly, remove any scanner bed border, and then upload to Old Photo Restoration. Giving AI a clean, high-resolution scan produces significantly better results than a small or blurry phone snapshot."
  - question: "Is it worth scanning and restoring a photo that has significant missing sections?"
    answer: "Yes, for two distinct reasons. First, AI restoration handles everything that is present in the scan — the surviving portions of the image, all the aging artifacts, the yellowing, the surface scratches — and returns a significantly improved version of what exists. Even if one corner is gone, the rest of the photo can look dramatically better. Second, a high-resolution scan creates a permanent digital archive of the photo's current state, which is valuable regardless of any restoration work. Physical photos continue to deteriorate; digital scans do not. Run Old Photo Restoration on the full scan to get the best version of the surviving content, then decide separately whether to pursue manual inpainting for the missing region. The two steps are independent. For family photos with sentimental value, even a partial restoration that recovers faded faces and removes surface damage is meaningful — the missing corner is a separate, additive project, not a prerequisite."
---

> **Start here**: [ArtImageHub's Old Photo Restoration](/old-photo-restoration) handles fading, yellowing, fold marks, and surface scratches automatically — **$4.99 one-time**. For the honest guide on what it can and cannot do with physical damage, read on. Related tools: [Photo Denoiser](/photo-denoiser), [Photo Deblurrer](/photo-deblurrer), [Photo Enhancer](/photo-enhancer).

Every family has at least one: the photo that was torn in frustration, worn down at the edges, or punched through for filing and never quite recovered. Physical damage to photographs is one of the most emotionally charged problems in home archiving — and one of the most misunderstood in terms of what modern AI can actually do.

This is an honest guide. It explains the different types of physical damage, what AI restoration genuinely handles well, where it stops, and what you need to do when AI is not enough.

## What Types of Physical Damage Do Photos Actually Suffer?

Physical damage to photographs falls into two fundamentally different categories, and this distinction drives everything that follows.

**Damage that sits on top of the image:**
- Fold lines and crease marks from folding or rolling the photo
- Yellowing and overall color shift from chemical aging
- Foxing spots (brown oxidation dots) and water stain rings
- Surface scratches from abrasion
- Dust and debris embedded in the surface
- Silver mirroring on black-and-white prints (a shiny metallic sheen over dark areas)
- Fading and contrast loss from UV exposure or poor storage

In all these cases, the underlying image is still there. The damage is a layer sitting on top of, or degrading, the image content — but the content itself is intact.

**Damage that removes image content:**
- Torn corners or sections where material is physically gone
- Punch holes through the photo
- Sections burned, water-soaked beyond legibility, or peeled away
- Writing or stamps on the front that cover part of the image

In these cases, the image content itself is absent. There are no pixels to clean — only a gap where pixels used to be.

This distinction is the single most important concept in photo restoration. Everything else follows from it.

## What Does AI Restoration Genuinely Fix?

ArtImageHub's [Old Photo Restoration](/old-photo-restoration) is trained to recognize and repair the first category: damage that sits on top of intact image content.

**Fold lines and crease marks** appear in scans as linear artifacts — sharp brightness discontinuities, color shifts along the fold, and sometimes physical texture that casts a subtle shadow. The AI treats these as image noise and smooths them out. For a photo folded once in half, the crease line typically disappears almost entirely after processing.

**Yellowing and fading** are addressed by the AI's color correction layer, which learns what white balance and tonal range the photo likely had when fresh. It reverses the amber shift of aging paper and restores contrast lost to oxidation. The effect on heavily yellowed photos can be striking.

**Surface scratches and foxing** are treated as localized artifacts — the model identifies regions that are inconsistent with the surrounding image and reconstructs them from context. Thin surface scratches across plain backgrounds (sky, wall, a dress) are very cleanly removed. Scratches that cross fine detail areas (a face, a hand, text) recover well but not always perfectly.

**Facial enhancement** is handled by a GFPGAN-derived component that specifically sharpens and reconstructs facial features in portraits. This is where AI restoration tends to produce the most visually striking improvements — even significantly faded portraits often recover clear, sharp facial detail.

## Where Does AI Restoration Stop?

The boundary is clear: **AI restoration does not generate image content that was never there.**

When a corner is torn off and the piece is gone, the AI has no information about what was in that corner — no pixels to clean, no latent signal to amplify. What it sees is absence, typically represented as a white or black void in the scan. Standard restoration models are not trained to invent plausible content for that void. They will clean up the edge of the tear and improve everything that survived, but they will not fill the missing corner.

This is not a limitation of ArtImageHub specifically — it is the boundary between two different AI tasks:

- **Photo restoration**: cleaning, denoising, and sharpening image content that exists but is degraded
- **Inpainting**: generating new image content to fill regions where nothing exists

ArtImageHub's Old Photo Restoration is a restoration tool. Inpainting is a separate capability offered by tools like Adobe Firefly, Stable Diffusion with inpainting models, or professional retouchers who paint missing content manually.

**Writing on the front of the photo** (handwritten captions, stamps, pen marks) is a partial case. If the writing is light and in a plain area, AI restoration sometimes smooths it away. If it is dark ink over complex image content — faces, clothing — it reads as part of the image and is not removed.

**Punch holes** are another case where AI fills the immediate region around the hole with some success, but a hole through a face or significant detail requires manual retouching.

## What Is the Realistic Workflow for a Physically Damaged Photo?

This is the practical workflow used by restoration technicians who integrate AI tools:

**Step 1: Scan properly.** Scan at 600 DPI minimum (1200 DPI for small prints). Use a flatbed scanner, not a phone camera. If the photo is in pieces, scan each piece separately. If there are loose edges or curling, place a clean sheet of glass over the photo to flatten it without tape or contact adhesive.

**Step 2: Align pieces digitally.** If the photo was in multiple pieces, align them in any image editor (even the free GIMP) before restoration. The AI performs better on a unified, aligned image than on separate fragments.

**Step 3: Run Old Photo Restoration.** Upload to [Old Photo Restoration](/old-photo-restoration). This handles all the surface damage: yellowing, fading, fold marks, scratches, foxing, facial sharpening. Download the result. Assess what remains.

**Step 4: Evaluate missing content separately.** Look at the restored image. The surviving portions should look significantly improved. Now assess the missing regions — the torn-off corners, the punch holes, the burned sections. These are a separate project.

**Step 5: Decide on inpainting or retouching.** For small missing sections in plain background areas, inpainting tools (Adobe Firefly's Generative Fill, Stable Diffusion inpaint) can produce plausible results. For missing sections that contain faces or significant detail, a professional retoucher who can manually paint the region is the most reliable path. Fiverr and specialized photo restoration services offer this starting around $30–60 per photo.

## How Does Scanning Affect What AI Can Fix?

The quality of the scan directly limits the quality of AI recovery. A phone photo of a damaged print (taken at an angle, with non-uniform lighting, uneven focus) gives the AI much less to work with than a proper flatbed scan.

Specifically:
- **Resolution**: scanning at 600 DPI gives the AI more pixels to work with for fine detail recovery. A 3.5x5-inch print at 600 DPI produces a 2100x3000-pixel image — enough for the AI to reconstruct fine texture. A phone snapshot at typical distance gives you perhaps 1000x1400 useful pixels with uneven sharpness.
- **Lighting uniformity**: flatbed scanners use even backlit illumination, which means crease marks and surface variations are captured cleanly. Phone photography creates shadows at raised edges and variable brightness across the photo, which the AI may misread as image content.
- **Color accuracy**: flatbed scanners have consistent color response. Phone cameras introduce automatic color correction that can interfere with the AI's own color restoration work.

If you have a photo that is fragile — lifted emulsion, active mold, extremely brittle paper — consult a conservator before scanning. Pressing a fragile print to a scanner bed can cause further damage.

## Is It Worth Being Honest About What AI Cannot Do?

Many AI restoration services market themselves with before/after examples that show complete photos with only surface damage — fading, yellowing, scratches. That is genuinely what AI restoration does well.

What the marketing rarely shows is a photo with a corner torn off and what the AI returns. The answer is: the surviving three-and-a-half corners look dramatically better, and the torn corner remains a gap.

This is not a failure of the technology. It is the correct behavior of a tool designed to restore what exists, not to fabricate what does not. Understanding this distinction helps you know exactly what you will get, so the result is useful rather than disappointing.

For the surface damage that AI does handle — and for most families, that is the majority of what their damaged photos need — [Old Photo Restoration](/old-photo-restoration) produces results that would have required a professional retoucher five years ago. That part of the promise is real. The inpainting limitation is simply a separate problem that requires a separate tool.
