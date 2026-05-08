---
title: "How to Restore Old Photos with Foxing"
description: "Foxing brown spots on photographs arise from fungal growth or iron oxidation — and the debate continues. Learn how AI inpainting handles scattered spotting across prints."
publishedAt: "2026-05-08"
author: "Maya Chen"
tags: ["photo restoration", "foxing", "brown spots", "AI restoration"]
coverEmoji: "🍂"
---

Foxing — the brown or reddish-brown spots that appear on old paper and photographs stored in humid conditions — is one of the most debated topics in paper conservation. The argument over what causes foxing has persisted for over a century, and the honest answer is that multiple mechanisms probably contribute in different cases. For photographers and families trying to restore foxed prints, the cause matters less than the practical consequences: scattered, irregular brown spots that obscure image detail and signal that the print is actively deteriorating. Understanding the mechanisms that produce foxing helps predict what restoration is achievable and what a conservator can do to prevent further spreading.

## What Causes Foxing on Old Photographs — Fungal Growth or Iron Oxidation?

The two principal hypotheses for foxing are fungal colonization and iron-catalyzed oxidation of paper cellulose, and the evidence supports both, sometimes in the same sample. This is not a case where one side has decisively won; it is a genuine ongoing scientific debate in paper conservation and heritage science.

The fungal hypothesis holds that foxing spots are colonies of mold or fungus that have grown into the paper or emulsion surface, leaving behind metabolic byproducts — primarily organic acids and pigmented compounds — that stain the surrounding material. Microscopic analysis of foxing spots frequently reveals fungal hyphae (the thread-like extensions of fungal growth) within or at the margins of the spots. The species most commonly implicated include Aspergillus and Penicillium, both of which are ubiquitous in indoor environments and germinate readily on organic substrates at relative humidity above 65 percent.

The iron oxidation hypothesis notes that many papers contain trace iron compounds, either as impurities in the raw cellulose fibers or from the processing water used in manufacture. In the presence of moisture and oxygen, these iron compounds undergo Fenton-type reactions that generate reactive oxygen species, which oxidize the paper cellulose and produce the characteristic brown colorants. This mechanism does not require any biological activity and would explain foxing in sterile storage environments where fungal growth should be impossible.

The most likely reality is that both mechanisms contribute: iron compounds catalyze initial oxidative damage, which weakens the paper substrate and creates a nutrient-rich micro-environment that then supports fungal colonization. The resulting spot shows both oxidation products and fungal metabolites, making it difficult to attribute to either cause exclusively.

## How Does Foxing Damage Appear in Photographic Prints Differently Than in Books?

Photographs and books share the paper substrate that foxing attacks, but photographs have additional complexity: the gelatin emulsion layer sitting on top of the paper base. In many cases, foxing in photographs attacks the paper base and the visible spot on the photograph's surface represents the brown compound migrating upward through the gelatin layer from below. This means the stain you see is not necessarily at the same location as the most severe chemical damage.

In silver gelatin prints, the gelatin layer provides some resistance to foxing penetration, but the gelatin itself is a protein substrate that mold can consume directly. Foxing in the gelatin layer tends to appear more clearly defined than foxing in the paper below, because the gelatin's optical clarity shows the brown compounds without the scattered appearance that the fibrous paper structure produces.

In chromogenic color prints, foxing interacts with the dye coupler layers, sometimes catalyzing local dye destruction or discoloration that extends beyond the footprint of the spot itself. The affected area may show not just a brown spot but a surrounding halo of shifted color where the fox-spot chemistry has diffused into the adjacent dye layers.

## Does Prevention Work Better Than Restoration for Foxed Prints?

Yes, decisively. Foxing that has progressed to visible spots has already caused irreversible chemical change in the paper or emulsion. Restoration, whether digital or physical, addresses appearance rather than chemistry. A successfully restored photograph looks better on screen or in print, but the chemical damage continues if the storage conditions remain unchanged.

Preventing foxing from spreading or initiating requires controlling the humidity to below 50 percent relative humidity, reducing the temperature to slow chemical reaction rates, and storing photographs in enclosures that do not themselves off-gas acidic compounds (polyester sleeves, acid-free boxes, and archival tissue are appropriate; PVC and newsprint are not). Separation of already-foxed prints from healthy ones is prudent, because fungal spores released by active colonies can colonize neighboring materials.

Physical treatment of foxed prints by a conservator — using carefully chosen aqueous or chemical treatments to reduce stain intensity — can visibly improve the appearance of the physical print before digitizing and can stop active biological deterioration. However, it carries risk: any aqueous treatment applied to a gelatin silver print risks swelling, softening, and staining the emulsion. Physical treatment should only be attempted by a trained conservator, not as a home project.

## How Do AI Models Handle Scattered Foxing Spots?

The scattered, irregular pattern of foxing spots presents a specific challenge for AI restoration that differs from other damage types. A large scratch or water stain is a single coherent region that inpainting models can address as a unit, reading surrounding context to reconstruct the affected area. Foxing produces dozens or hundreds of small spots distributed across the image, each requiring its own local inpainting while the surrounding image detail must be preserved.

Real-ESRGAN addresses the overall resolution and detail recovery, which is necessary because foxed prints often show general degradation beyond the spots themselves. NAFNet's denoising capabilities reduce the fine-grained color variation that foxing chemistry produces in the paper base — a kind of high-frequency noise of warm brown tones that affects areas between the visible spots. These inter-spot areas are not dramatically discolored but show subtle chrominance shifts that make the overall print look warm and degraded even in areas without visible spots.

For the spots themselves, inpainting approaches read the texture and tonal character of the surrounding clean area and synthesize a replacement that matches the original. GFPGAN's architecture, while primarily trained for facial restoration, applies the same inpainting logic to portrait subjects where foxing spots fall on face regions — skin texture reconstruction under a foxing spot draws on the same training that allows GFPGAN to reconstruct face detail through other types of damage.

The practical limitation is that very dense foxing — where spots are close enough that little clean image remains between them — reduces the contextual information available for reconstruction. Sparse and moderate foxing on clear photographic content gives AI models enough clean area to work from for convincing results.

## Why Is Foxing More Common in Prints Stored in Certain Regions or Seasons?

The geographic and seasonal distribution of foxing follows the distribution of high humidity. Photographs stored in subtropical or tropical climates, where relative humidity frequently exceeds 70 or 80 percent, show dramatically higher rates of foxing than photographs stored in temperate or arid climates. Within a single home, photographs stored in a basement (typically higher humidity) show more foxing than those on upper floors, and prints stored through humid summer seasons accrue more damage than those maintained in climate-controlled environments year-round.

The combination of humidity and warmth is particularly aggressive. A print stored at 25°C and 75% RH accumulates foxing chemistry much faster than one stored at 15°C and 75% RH because chemical reaction rates approximately double for every 10°C temperature increase. This explains why photographs from the American South, the UK, and Southeast Asia are disproportionately represented among severely foxed collections that genealogists and families present for restoration.

ArtImageHub ($4.99) processes foxed prints regardless of geographic origin or damage severity, applying a multi-stage pipeline that addresses both the visible spots and the subtle inter-spot degradation that makes foxed prints look uniformly aged even in areas that appear spot-free.

## Frequently Asked Questions

## What is the difference between foxing and mold damage on photographs, and does it matter for restoration?

Foxing and mold damage are related but distinct phenomena, and the distinction affects both restoration approach and physical handling safety. Foxing spots are the visible remnants of previous biological or chemical activity — the fungal colony may be dormant or absent from the spot, and the stain is a residue of past metabolic or oxidative activity. Mold damage in its active form shows as fuzzy, three-dimensional growth on the print surface with a characteristic musty odor and often powdery or fibrous surface texture. Active mold requires handling with protective equipment (gloves, mask) and separation from other materials before any digitizing occurs. Foxing spots on a print that has been stored in dry conditions for years are not actively biological and can be handled and scanned normally. For restoration purposes, both manifest as local discoloration and partial image obscuration, and both respond to the same AI inpainting approaches. The key difference is that active mold may continue to expand if conditions remain favorable, while foxing spots in dry storage are chemically stable.

## Can AI completely remove foxing spots from a photograph digitally?

AI inpainting can reduce or eliminate the visual appearance of foxing spots in a digital restoration, with results depending on spot size, density, and the detail in the underlying image. Small isolated spots over areas of clear photographic content — a sky, a neutral background, a simple fabric texture — are reconstructed convincingly because the inpainting model has ample clean context to draw from. Larger spots over complex subjects, such as faces or fine architectural detail, require the model to reconstruct the specific subject content that the spot obscures, which is inherently inferential. For portrait subjects, GFPGAN and CodeFormer's face-specific training makes facial foxing spot removal more reliable than general-purpose inpainting. Dense clusters of spots where the spots overlap or nearly touch each other challenge even the best inpainting models because the remaining clean image between spots provides insufficient context. In these cases, the AI typically produces a plausible reconstruction, but it should be understood as a best estimate rather than a recovery of specific original content.

## How should you scan a foxed print to give AI restoration models the best possible input?

Scan foxed prints with diffuse, even illumination using a flatbed scanner at 1200 DPI minimum for prints larger than 5x7 inches and 2400 DPI for smaller prints. Avoid raking or angled light, which is sometimes recommended for detecting physical damage but would make foxing spots appear more prominent and shadowed in the scan, giving the AI model an exaggerated impression of spot depth. Flat illumination records the color and density of each spot accurately without shadow artifacts at spot edges. Clean the print surface gently with a clean, dry microfiber cloth before scanning to remove any loose fungal debris or surface dust that might scan as additional spotting. For prints with high spot density, scanning at higher color depth — 48-bit rather than 24-bit — preserves subtle chrominance information in and around the spots that the AI can use to calibrate its reconstruction. Save as TIFF to preserve all captured color information without compression loss.

## Why do foxing spots sometimes appear only on the back of a print and not the front?

Foxing initiation in the paper substrate does not always progress at the same rate through the thickness of the paper. When the paper is in contact with a contaminated surface — an acidic enclosure, an adjacent foxed document, or a damp fabric — the foxing chemistry initiates at the contact surface first. If the paper is relatively thick or the oxidation or biological activity is in early stages, the brown compounds may not yet have migrated fully through the paper to appear on the emulsion-facing surface. This explains why a print can appear clean on its photographic surface while showing obvious spotting on its back. Conversely, prints in more advanced deterioration show spots on both surfaces, with the back often showing heavier spotting. For restoration purposes, a clean photographic surface is what matters for the digital scan regardless of back condition, because the scanner reads only the front emulsion surface. A print with back-only foxing that has been recently separated from a contaminated album page is a good candidate for scanning immediately before the chemistry migrates further.

## Does ArtImageHub's restoration of foxed prints require any special preparation or settings?

No special preparation or settings are required when uploading a foxed print scan to ArtImageHub. The platform's automated damage detection identifies foxing spots as localized discoloration regions and routes the image through the appropriate inpainting and color correction stages without manual configuration. The most important preparation step is ensuring a good scan input: 1200 DPI or higher, saved as TIFF or high-quality JPEG, with flat illumination rather than raking light. The $4.99 single-image restoration fee covers the full pipeline regardless of foxing severity or spot count. For prints with both foxing and other concurrent damage types — creases, fading, or water stains — the pipeline addresses all damage types in a single processing run, since Real-ESRGAN, NAFNet, and the inpainting components each address different aspects of the overall degradation simultaneously. The restored preview is available before payment, allowing you to evaluate the foxing removal quality on your specific print before committing to the download.
