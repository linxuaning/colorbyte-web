---
title: "How to Restore Old Photos with Scratches"
description: "Emulsion scratches and base scratches behave differently in photos. Learn how AI inpainting models reconstruct image content beneath scratch damage and restore visual clarity."
publishedAt: "2026-05-08"
author: "Maya Chen"
coverEmoji: "🔧"
tags: ["photo restoration", "scratch removal", "AI inpainting", "photo repair"]
---

Scratches are among the most common damage found in family photo collections. A photo that has spent decades loose in a drawer, shuffled through repeatedly, or stored face-down on a rough surface will accumulate scratches at both the surface and emulsion layers. The severity—and recoverability—depends heavily on which layer the scratch has reached.

## What Is the Difference Between Emulsion and Base Scratches?

A photographic print has two main structural layers: the base support (typically paper or polyester) and the emulsion layer on top that actually holds the image. Scratches that only penetrate the base layer from the reverse side of the print appear as white or bright lines on the image side because light passes through the damaged substrate differently. These base scratches do not destroy image content—the emulsion above the scratch is intact, and the apparent line is an artifact of altered light transmission.

Emulsion scratches are more serious. When a sharp object crosses the face of a print, it physically displaces or removes silver halide particles from the gelatin layer. The result is a groove in the emulsion with true image loss: no amount of tonal adjustment can recover information that is no longer there. These appear as thin white lines that travel through image content with no recoverable detail beneath.

Understanding which type you have guides expectations for restoration results. Both are treatable with AI tools, but by different mechanisms.

## How Does AI Inpainting Work on Photo Scratches?

AI inpainting for scratch removal differs fundamentally from simple cloning or healing tools in traditional editing software. A clone tool copies pixels from a nearby region, which works reasonably well for scratches crossing uniform backgrounds but fails when the scratch crosses complex content like faces, foliage, or patterned clothing.

AI inpainting models—particularly those based on masked image modeling like the approach in Stable Diffusion inpainting or the Swin-IR architecture—analyze the full image context to predict what exists beneath a scratch. The model considers gradients, textures, object edges, and semantic content from both sides of the damaged region and synthesizes a coherent fill. When a scratch crosses a face, the model incorporates its understanding of facial geometry to reconstruct plausible skin texture rather than interpolating pixels in a straight line.

Real-ESRGAN adds an additional step by resolving any aliasing or tonal artifacts at the edges of the inpainted region, producing clean transitions back to surrounding image content.

## Are Old Photo Scratches Fully Recoverable?

Recovery fidelity depends on scratch width, depth, and content crossed. A single fine scratch—one to two pixels wide at scan resolution—crossing a relatively simple background region like sky or grass is almost perfectly recoverable. The AI has sufficient surrounding context to produce a fill indistinguishable from an unscratch version of the same photo.

Wide scratches—those covering 20 or more pixels at 600 dpi scan resolution—present a greater challenge. The AI still produces clean fills, but with wider missing regions, there is more image content that must be synthesized rather than recovered. Results look complete and visually natural but may diverge from the true historical content.

Scratches crossing faces are handled by specialized face enhancement models. ArtImageHub runs GFPGAN or CodeFormer on faces in the image after the primary inpainting pass, recovering fine facial detail—eyelashes, teeth, fine hair—that the general inpainting model may have synthesized imprecisely. This two-pass approach produces far better face restoration than any single-model pipeline. The full restoration process costs $4.99 for high-resolution output.

## Does the Scan Method Affect How Well AI Removes Scratches?

Scanning choices dramatically affect scratch detection and removal quality. A flatbed scanner with transmitted light (available on scanners marketed for negatives and slides) reveals base scratches with much greater clarity than reflected-light scanning, which can miss shallow surface damage. For paper prints, standard reflected-light scanning at 600 dpi is appropriate.

Scanning at too low a resolution causes thin scratches to be averaged into surrounding pixel values and may render them invisible to the AI, which then cannot target them for removal. This sounds beneficial but actually means the scratch has been blurred rather than removed, and the resulting image lacks sharpness in the scratch zone. Scanning at 600 to 1200 dpi ensures scratches are captured as distinct features the model can identify and treat.

A critical but often overlooked factor: do not attempt to fill or camouflage scratches with petroleum jelly, lacquer, or tape before scanning. These home remedies can produce temporary visual improvement in a physical viewing context but introduce new artifacts—adhesive residue, surface texture changes, chemical interactions—that complicate or prevent AI restoration from working cleanly.

## When Should You Choose AI Restoration Over Manual Retouching?

Manual retouching by a skilled digital artist using a pressure-sensitive tablet and careful cloning can produce excellent results for very short, isolated scratches. The labor cost is high: a photo with dozens of scratches crossing complex content might require many hours of skilled work.

AI restoration through ArtImageHub processes the entire image—including all scratches simultaneously—in seconds. The AI approach is consistently superior for heavily scratched images and for users without advanced retouching skills. For archival collections with hundreds of damaged prints, the efficiency difference is transformative.

One scenario where manual retouching may complement AI restoration is when a client needs to verify that specific scratch fills are historically accurate for publication or legal purposes. In that case, AI-restored output serves as a starting point that a human retoucher can verify or refine, dramatically reducing total work time.

## Frequently Asked Questions

## What resolution should I scan scratched photos for best AI restoration results?

Scan at 600 dpi for standard-sized prints (4×6 inches or larger) and at 1200 dpi for small or heavily detailed originals. Higher resolution gives the AI model more pixel context around each scratch, improving the quality of inpainted fills. At 300 dpi, which many home scanners use by default, fine scratches may be too narrow for the model to target consistently. TIFF format preserves all scan data without compression artifacts; if TIFF files exceed upload limits, maximum-quality JPEG is acceptable. Clean the scanner glass before placing photos—dust on the glass creates linear marks that the AI may interpret as additional scratches, leading to unnecessary inpainting passes that can soften fine image detail. If your scanner has a scratch-reduction feature (sometimes called ICE or Digital ICE), disable it before scanning prints you intend to send to AI restoration—these hardware corrections sometimes introduce their own interpolation artifacts that degrade the AI's input quality more than the original scratches would.

## How does ArtImageHub distinguish scratch damage from intentional lines in a photo?

The models are trained on large datasets of both intact and damaged photographs, learning what scratch artifacts look like in terms of directionality, tonal signature, and edge behavior. A scratch characteristically appears as a bright or dark linear feature that cuts across image content discontinuously, ignoring the gradients and boundaries of underlying objects. Intentional linear elements—a fence, a window frame, a road—follow coherent perspective and integrate with surrounding visual structure. The AI's contextual understanding allows it to classify these differently with high reliability. In rare cases where an intentional line closely resembles scratch damage—a fine wire against a bright sky, for instance—the model may partially treat it. Reviewing the output and comparing to the original scan reveals any such misidentification. ArtImageHub recommends downloading the original scan alongside the restored version to enable such comparison.

## Can AI restoration recover photos where scratches have completely removed emulsion?

Where emulsion has been completely displaced—creating a groove that extends through the gelatin down to bare paper or film base—the AI performs content synthesis rather than recovery. No actual image information remains in the groove, so the model synthesizes plausible content by extrapolating from the surrounding image. For background areas, this synthesis is visually seamless. For faces and other semantically complex content, CodeFormer's face restoration model contributes anatomically informed fill that typically produces recognizable features. The key distinction is that synthesized content is the AI's best prediction of what was there, not a faithful record. For historical documentation purposes, noting which scratches have been synthesized rather than recovered is accurate practice. For family use—the most common purpose—synthesis results are virtually always a dramatic improvement over a white groove crossing a family portrait, and the restored image becomes truly usable for display and printing.

## Are there types of photo scratches that AI cannot fix well?

Very wide scratches—those covering more than a quarter of the image width—are the most challenging case. When a large fraction of the image is missing, the AI has limited context to guide synthesis, and results depend heavily on what content the scratch crosses. A wide scratch across a plain background (sky, wall) is still manageable; a wide scratch cutting across an entire face leaves the AI insufficient surrounding data to reconstruct reliably. Network scratches—a pattern of many intersecting scratches—are also harder than parallel single scratches. Each intersection point has multiple missing regions meeting, and the model must reconcile several simultaneous synthesis directions. Even in these hard cases, ArtImageHub produces substantial visual improvement over the damaged original; the limitation is on the degree of historical fidelity rather than the ability to produce a complete-looking image.

## Should I remove loose debris from scratches before scanning?

Light surface debris—dust particles sitting in a scratch groove—should be removed before scanning using a soft anti-static brush or compressed air held at a distance. This prevents the debris from casting shadows or appearing as additional damage features in the scan. However, do not attempt to fill scratch grooves with any material before scanning. Petroleum jelly is sometimes recommended as a home remedy for print scratches; while it can make scratches less visually apparent when viewing the physical print by filling the groove and changing light refraction, it adds an oil layer to the emulsion surface that interferes with scanner illumination uniformly. Lacquers and varnishes have similar problems and also risk chemically attacking the gelatin emulsion over time. The AI restoration pipeline at ArtImageHub is optimized to work from clean, unmodified scans of damaged originals, not from physically treated or chemically modified surfaces.

