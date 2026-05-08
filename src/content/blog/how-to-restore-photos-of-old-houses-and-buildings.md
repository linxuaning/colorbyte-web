---
title: "How to Restore Old Photos of Houses, Buildings, and Architecture"
description: "Old architectural photos hold family and historic value. Learn how Real-ESRGAN recovers brick and wood detail, how DDColor reconstructs exterior color, and how to research historically accurate paint colors."
publishedAt: "2026-05-08"
author: "Maya Chen"
tags: ["Architectural Photos", "Real-ESRGAN", "DDColor", "Historic Preservation"]
coverEmoji: "📸"
---

Photographs of houses and buildings occupy a different place in the family archive than portraits. Where portraits center on people and their expressions, architectural photos anchor a family to a specific place at a specific moment -- the farmhouse where your grandparents raised their children, the downtown storefront that bore your family name for three decades, the apartment building on a street that no longer exists in its original form.

These photos matter to genealogists tracing where a family lived, to historic preservation researchers documenting built environments, and to descendants who want to understand the physical spaces that shaped their family history. Restoring them requires a different approach than face-forward portrait restoration -- the priorities shift toward structural detail, texture authenticity, and exterior color accuracy.

## Why Do Architectural Photos Degrade Differently?

The degradation patterns in old building photographs differ from portrait photos in ways that affect which restoration tools are most useful.

Large flat tonal areas -- building facades, sky, pavement -- are where fading concentrates and becomes most visible. A faded 1950s photograph of a house shows the color cast evenly across the exterior, making the original paint color genuinely ambiguous. Scratches and physical damage read differently against architectural geometry than they do against human faces; a scratch across a brick wall pattern may be partially recoverable through texture reconstruction, while the same scratch across a face requires face-specific reconstruction.

Fine detail in old architectural photos -- the mortar lines between bricks, the grain in wood siding, the typography of a storefront sign, the decorative ironwork on a Victorian porch -- is exactly the kind of high-frequency detail that compresses poorly in old prints and becomes indistinct after decades of fading or physical handling.

## How Does Real-ESRGAN Recover Architectural Texture?

Real-ESRGAN (Enhanced Super-Resolution Generative Adversarial Networks, Wang et al. 2021) is trained specifically to recover fine structural texture from low-resolution and degraded image input. For architectural subjects, this training translates directly to practical results.

Brick coursing -- the horizontal rows of bricks with mortar joints -- is one of the clearest demonstrations of what Real-ESRGAN does well. In a faded or low-resolution architectural photo, brick coursing appears as an indistinct texture rather than a legible pattern. Real-ESRGAN reconstructs the high-frequency detail of the mortar joint spacing and individual brick surface variation from the coarser input signal. The output does not invent brick patterns that were not present in the original; it recovers the patterns that are structurally implied by the coarser image data.

Wood clapboard siding, stone foundations, decorative wood trim, window muntins, and porch balusters all benefit from the same process. The practical result is that architectural photos that appear flat and indistinct at normal viewing size often reveal substantial previously unreadable detail after Real-ESRGAN processing -- including details that have direct genealogical or historical value, such as house numbers, business names, or distinguishing architectural features used for property identification.

For these architectural subjects, GFPGAN is not part of the processing approach. GFPGAN is optimized specifically for human face reconstruction and does not contribute meaningfully to architectural detail recovery. The combination that works for building photos is Real-ESRGAN for detail and structural clarity, plus DDColor for exterior color reconstruction.

## How Does DDColor Handle Exterior Color Reconstruction?

DDColor is a deep learning colorization model that works on a fundamentally different task than Real-ESRGAN: instead of recovering existing detail, it adds plausible color information to black-and-white images based on the contextual and structural content visible in the image.

For architectural subjects, DDColor's colorization has specific strengths and limitations worth understanding before you use it.

The model performs well on materials it has strong contextual priors for -- red brick, wooden siding, concrete foundations, asphalt roofing, and leafy vegetation all tend to receive plausible color assignments. Sky coloration is reliable. Window glass produces consistent results.

The limitation is paint color. DDColor does not know what color your grandmother's house was painted in 1952. The model will assign a plausible exterior paint color based on the tonal values visible in the black-and-white image and contextual associations from its training data, but that assignment is a reasoned estimate rather than a historical record. This is not a criticism of the model -- it is a fundamental constraint of colorizing a photo where color information genuinely does not exist in the source image.

## How Can You Research Historically Accurate Paint Colors?

If the building you are restoring still exists -- or if there are surviving records -- historically accurate paint color research is a worthwhile step before accepting DDColor's automatic assignment.

**Physical inspection:** Older buildings with multiple layers of exterior paint sometimes retain the original paint color under subsequent layers, visible in areas where the outer paint has peeled or at window and door trim edges. A paint conservator can perform a paint cross-section analysis that identifies the original color sequence with significant precision.

**Period paint manufacturer archives:** Sherwin-Williams, Benjamin Moore, and other major manufacturers have historical color archives. If you know the approximate decade when your building was painted, period color cards from that era narrow the range of plausible exterior colors substantially. The National Trust for Historic Preservation maintains resources on this.

**Contemporary written records:** City directories, insurance assessment records, real estate listings, and newspaper accounts occasionally describe exterior paint colors of commercial buildings and prominent residences. Local historical societies and county archives are the best starting point for these records.

**Comparative photographs:** Color photographs from the same decade and region -- showing neighboring buildings or similar architectural styles -- provide contextual evidence for the range of colors in common use.

When you have established a historically plausible paint color from external research, the DDColor output can be adjusted in any image editor to match -- using the AI-colorized image as a structural base and correcting the color layer to align with documented historical colors.

## Workflow for Restoring Architectural Photos

The ArtImageHub restoration pipeline applies Real-ESRGAN and DDColor automatically when you upload a building photograph. The preview-first workflow is particularly useful for architectural restoration because it lets you evaluate detail recovery and colorization before downloading -- which matters when you may want to compare the AI output against historical research on accurate paint colors.

For a one-time fee of $4.99, you can process the architectural photos in your archive without a subscription commitment. This is a practical consideration for genealogical researchers who may have a finite set of building photographs associated with a specific property history rather than an ongoing restoration workflow.

**Practical recommendations for architectural photo restoration:**

Scan the original photograph at 600 DPI minimum. For photos smaller than 4x6 inches -- as many early 20th-century photographs are -- 1200 DPI scanning gives the AI pipeline substantially more input data, which improves both detail recovery and colorization accuracy.

If the photo has physical damage concentrated near structural details that matter -- a tear through a storefront sign, a fold crease across the facade -- note those areas when evaluating the preview output. AI inpainting of damaged areas may produce plausible but not historically accurate reconstruction of specific text or signage.

For historic preservation purposes, always preserve the unprocessed original scan alongside the AI-restored version. Preservation organizations and archives may want the unaltered scan as the archival record, with the restored version serving as an accessible interpretive copy.

---

## Frequently Asked Questions

## Is Real-ESRGAN better than other AI tools for brick and masonry detail?

Real-ESRGAN is specifically well suited for masonry and architectural texture because it is trained to reconstruct high-frequency image patterns -- exactly the kind of repetitive, structured texture that brick coursing and stone jointing represent. The model's training on real-world degradation patterns (rather than simple downscaling) means it handles the compound degradation of old architectural photographs (fading, grain, physical wear) more effectively than older upscaling algorithms. Comparative testing consistently shows Real-ESRGAN outperforming ESRGAN, Waifu2x, and bicubic upscaling on architectural texture recovery from old photographic prints. The practical difference is visible at 100% zoom on the restored image, where mortar joint lines and wood grain that were not legible in the original scan become clearly defined. This level of detail recovery has direct value for historic preservation documentation and genealogical property research.

## Can DDColor accurately colorize historic building exteriors?

DDColor can produce plausible colorization for historic building exteriors based on the tonal and contextual information in the black-and-white source photograph. The model makes confident, contextually reasonable color assignments for materials with strong visual signatures -- brick, wood, concrete, glass, vegetation. The limitation is paint color, which the model cannot recover from a black-and-white photograph because the original color information simply does not exist in the image data. DDColor assigns a plausible paint color based on learned associations, but this is an estimate. For historically accurate paint color, combine DDColor's structural colorization output with external historical research: period paint manufacturer archives, paint cross-section analysis on surviving buildings, and contemporary written records. Use the DDColor output as a baseline and adjust paint colors in an image editor to match documented historical colors. ArtImageHub's preview-first workflow lets you see the colorization result before committing.

## What resolution should I scan an architectural photograph for AI restoration?

For architectural photographs destined for AI restoration, 600 DPI is the practical minimum and 1200 DPI is strongly preferred for photos smaller than approximately 4x6 inches. Higher resolution scanning gives Real-ESRGAN more spatial information per unit of architectural detail, which improves the quality of texture reconstruction in brick coursing, wood grain, and fine trim elements. A 1200 DPI scan of a 3x5 inch photograph produces a roughly 3600x6000 pixel image -- enough input data for the model to reconstruct fine architectural detail at print-quality output resolution. For photographs that are already 8x10 or larger, 600 DPI produces sufficient input data. Common mistakes that limit AI restoration quality include scanning at 300 DPI (a common default that is adequate for document text but loses fine photographic detail), not cleaning the original print before scanning (dust and lint read as damage), and saving the scan as a heavily compressed JPEG rather than TIFF or PNG.

## Are restored building photos acceptable for historic preservation archives?

Historic preservation organizations and archives generally distinguish between an archival master (the unaltered original scan) and interpretive copies (enhanced, restored, or colorized versions). For formal submission to a preservation archive, the unaltered high-resolution scan is the accepted record. AI-restored versions can accompany archival submissions as interpretive materials with appropriate documentation -- noting that the image has been processed with Real-ESRGAN for detail enhancement and DDColor for colorization, and specifying which elements (paint color, missing detail) represent AI reconstruction rather than original photographic content. The National Register of Historic Places and state Historic Preservation Offices have specific documentation standards for photographs submitted in nomination packages; AI-restored images may not qualify as primary documentation but can serve as supporting illustrative material when properly labeled.

## Can AI restoration recover illegible storefront sign text?

Real-ESRGAN can recover partially legible sign text from architectural photographs in many cases, particularly when the text was originally clearly printed or painted in high contrast and has become illegible due to fading, grain, or low scanning resolution rather than physical damage. The practical threshold is whether the character shapes are structurally present in the degraded image data -- visible as low-contrast outlines even if unreadable. When that structural information exists, Real-ESRGAN's texture reconstruction can restore legibility. When the sign area is physically missing (torn section, mold damage, severe fade to blank), the model will inpaint a plausible texture but cannot reconstruct specific letterforms that no longer exist in the image data. For storefront signs of genealogical significance -- a family business name, an address number, a trade marking -- evaluate the preview output carefully. If the reconstructed text does not match your documented knowledge of the business, note in any archival record that the specific text is AI-interpreted.
