---
title: "How to Restore Photos Clipped From Newspapers and Magazines"
description: "Newspaper and magazine photos degrade through halftone dot patterns, acid migration from newsprint, and physical curling. Learn how Real-ESRGAN removes halftone screens and AI restores faces from 100 DPI newspaper portraits."
publishedAt: "2026-05-08"
author: "Maya Chen"
tags: ["Newspaper Photos", "Photo Restoration", "Real-ESRGAN", "Halftone Removal"]
coverEmoji: "📸"
---

Newspaper clippings occupy a peculiar place in family archives. They are often the only photographic record of a public moment -- a wedding announcement, a sports victory, a business opening, an obituary portrait. Families clip and save them, tuck them into albums, fold them into letters, and keep them for generations. And they deteriorate in ways that are uniquely challenging, combining the physics of halftone printing with the chemistry of newsprint degradation in a way that no other photographic medium replicates.

Restoring a newspaper photo requires understanding what it actually is -- not a photograph at all, but a printed reproduction of a photograph, made through a process that introduced systematic information loss before the clipping ever reached your drawer.

## Why Do Newspaper and Magazine Photos Look So Bad Up Close?

Pick up a newspaper photo and hold it at arm's length: it looks like a photograph. Move it close to your eye: suddenly it resolves into a grid of tiny dots. This is the halftone process, the fundamental mechanism of all offset lithographic printing before digital methods replaced it.

Halftone printing converts continuous-tone photographs into patterns of dots with varying sizes. In highlight areas, the dots are small and the paper shows through, creating the impression of light tones. In shadow areas, the dots are large and close together, creating the impression of dark tones. The eye, at normal reading distance, blends the dots into apparent continuous tone.

The dot pattern is specified by the halftone screen's frequency, measured in lines per inch (lpi). Newspapers typically used screens in the 60-100 lpi range -- relatively coarse because newsprint paper is rough and cannot hold fine dots. Magazines used finer screens, typically 120-175 lpi, which produce smoother tonal gradations but are still visible under close inspection.

The practical consequence for photo restoration: the maximum image detail in a newspaper photo is constrained by its halftone frequency. A 65 lpi screen on a newspaper portrait cannot resolve facial detail finer than about 1/65th of an inch in the original printed size. That is approximately the width of a large pore, which means fine facial features -- individual hair strands, eyelash detail, fine skin texture -- were never captured in the halftone grid regardless of how good the original photograph was.

## How Does Halftone Dot Pattern Affect Scanning?

Scanning a newspaper clipping at high resolution captures the halftone dots with high fidelity -- which is not actually what you want. A 600 DPI scan of a 65 lpi halftone renders each dot cluster in sharp detail, producing a scan that has high resolution of the dot grid but low resolution of the actual image content.

The halftone dots also create a specific scanning artifact called moire when the scanner's sampling frequency interacts with the dot pattern frequency. Moire appears as large-scale interference patterns -- swirling bands of light and dark, or grid patterns -- superimposed over the image. A scan that looks fine at thumbnail size may have severe moire when examined at full resolution.

The standard recommendation for scanning halftone prints is somewhat counterintuitive: scan at high resolution (1200 DPI or higher) to capture the individual dots accurately, then use software descreen processing to remove the dot pattern before AI restoration. Scanning at 300 DPI, the resolution that feels "good enough," often produces the worst results -- the dots are partially resolved but not sharply enough for the descreen algorithm to separate them cleanly from image content.

If your scanner software has a "descreen" or "magazine" mode, this applies a blurring filter tuned to the expected dot frequency to blend the dots into continuous tone. Use it for newspaper clippings as a starting point. Then bring the descreened scan into AI restoration for further processing.

## What Is the Best Scanning Workflow for Curled Newspaper Clippings?

Newspaper clippings present a physical handling challenge before scanning even begins. Newsprint is made from groundwood pulp with high lignin content. Lignin degrades with light exposure into chromophores -- light-absorbing molecules that cause the characteristic yellowing of newsprint. The paper also becomes brittle as it ages, with acidic degradation products attacking the cellulose fibers.

Old clippings are often brittle, folded along crease lines that have become stress fractures, and curled from humidity cycling. Forcing a curled, brittle clipping flat against scanner glass risks cracking along fold lines and losing image content at the cracks.

**Flattening protocol:** Place the clipping between two sheets of acid-free paper inside a heavy book, with additional books stacked on top. Leave for 48-72 hours in a stable-humidity environment. Many clippings will flatten significantly; some will not, particularly if they have been folded into sharp quarters for decades.

**Backlight diffuser approach for severely curled clippings:** Place the clipping on a light box or flat-screen monitor displaying white, then photograph from above with a camera rather than using a flatbed scanner. The transmitted light from below illuminates through the paper, reducing the shadow depth in the fold creases and making the image more visible across an uneven surface. A diffuser (frosted acrylic or tracing paper) over the light source prevents hotspots. This approach is less standardized than flatbed scanning but produces better results when severe curling makes flat scanning impossible.

**Backing support:** If the clipping is severely brittle, back it with Japanese tissue paper and methylcellulose adhesive (available from conservation suppliers) before any handling. This stabilizes the clipping during scanning without damaging the paper fibers.

## How Does Real-ESRGAN Remove Halftone Screen Patterns?

Real-ESRGAN was trained on degraded images paired with clean ground-truth originals. The degradation types in training include halftone patterns -- the model has encountered enough halftone-to-continuous-tone examples to develop inference capability for descreen processing.

The model approach to halftone removal differs from traditional descreen filtering. Traditional filters apply frequency-domain blurring tuned to the expected dot frequency, which removes dots but also removes legitimate fine detail at similar spatial frequencies. Real-ESRGAN's approach is semantic -- the model learns what smooth skin tone looks like, what a fabric weave texture should be, what hair detail typically appears -- and uses these learned priors to fill in the regions between dots with plausible continuous-tone content rather than simply blurring everything.

The result is a descreened image with better texture fidelity than frequency-domain filtering alone, particularly in regions with structured texture like hair, fabric, and foliage.

For newspaper portraits where faces occupy a significant portion of the image, GFPGAN's face restoration runs after Real-ESRGAN's descreen and upscaling. The face restoration model can recover portrait-quality facial detail from a 65-100 lpi newspaper portrait even though that detail was never present in the halftone. GFPGAN achieves this by reasoning from facial geometry -- the placement of eyes, the width of the nose bridge, the jaw contour -- and synthesizing plausible high-resolution face texture consistent with those structural cues.

This synthesis is not the same as recovery of actual detail from the original photograph. It is the AI's best estimate of what the face looked like, constrained by the available structural information. For genealogical purposes -- recognizing a great-grandparent, preserving a likeness -- this synthesized detail is typically far more useful than the unprocessed halftone dots.

## What Is Realistic to Expect From Newspaper Photo Restoration?

Realistic expectations prevent disappointment. Here is an honest assessment of what AI restoration can and cannot achieve with newspaper photos.

**Realistically achievable:** Removal of halftone dot patterns to produce a continuous-tone image. Reduction of yellowing and newsprint color cast. Recovery of basic facial features, head shape, and expression from portraits. Improved legibility of text in captions. Mitigation of fold crease damage in non-critical areas. Colorization of black-and-white newspaper photos using DDColor's historical palette calibration.

**Not achievable:** Recovery of fine detail that was below the halftone screen's resolution limit -- individual eyelashes, fine hair strands, fabric pattern details. Restoration of regions where physical damage (tears, mold, complete loss of paper surface) has removed the printed image entirely. Perfect reconstruction of faces from very small newspaper portraits where the face occupied only a few dozen halftone dots in the original.

The preview-first workflow at ArtImageHub lets you assess where your specific clipping falls on this spectrum before paying anything. Upload the scan, see the AI's output at preview resolution, and judge whether the result meets your goals. The $4.99 one-time payment for the full-resolution download only happens when you decide the preview is worth downloading. There is no subscription and no per-image fee beyond the single payment.

## Frequently Asked Questions

## What scanning resolution should I use for a newspaper clipping?

Scan newspaper clippings at 1200 DPI or higher, saved as TIFF without compression. This resolution captures the individual halftone dots sharply enough for AI descreen processing to work effectively. At 300 DPI, dots are partially resolved but not clearly enough for algorithmic separation from image content, which typically produces worse results than either very high resolution (clean dot capture) or very low resolution (dots blended by diffraction). If your scanner has a "descreen" or "magazine" preset, use it at 1200 DPI and save the output as a flat TIFF. If the scanner lacks descreen, scan at 1200 DPI without any processing and let ArtImageHub's Real-ESRGAN pipeline handle the dot removal. The extra file size at 1200 DPI is worth the information quality improvement when working from halftone sources.

## Can AI restore faces from very small newspaper photos, like obituary portraits?

Obituary portraits in newspapers were typically typeset at 1-2 column width -- roughly 0.5 to 1.5 inches in the printed publication. At a 65 lpi halftone screen, a one-inch portrait contains about 65 dots of image information across its width. That is an extremely small number to work from. GFPGAN can synthesize a plausible face from this amount of structural information, but the result is a statistically plausible face shaped by the available geometry cues -- not a high-fidelity rendering of the specific individual. For larger portraits (3-4 column width, or full-page magazine portraits), face restoration results are substantially better. The free preview at ArtImageHub shows you exactly what the AI produces from your specific portrait size. If the resulting face is recognizable and captures the likeness, the $4.99 one-time download is worthwhile. If the face is too generic to be useful, you know before paying.

## Does acid migration from newsprint damage permanently alter a clipped photo?

Acid migration describes the transfer of acidic compounds from newsprint into adjacent paper. If a newspaper clipping was stored in direct contact with a photographic print, album page, or document, the acids from the newsprint can migrate and cause yellowing in the adjacent material over decades. The newsprint itself also continues yellowing internally as lignin degrades. For restoration purposes, the yellowing caused by acid migration appears as a warm orange-yellow color cast that AI processing addresses through color normalization applied before the restoration stages. NAFNet denoising also handles the texture artifacts that severe acid degradation introduces into the paper surface. The physical brittleness caused by acid degradation is a handling problem for scanning but does not directly affect AI restoration quality once a clean scan is obtained.

## How should I store newspaper clippings after scanning to prevent further degradation?

After scanning, the clipping should be stored in archival conditions to prevent further deterioration. Place each clipping in an individual acid-free polyester sleeve or enclosure -- not paper envelopes, which are themselves acidic. Store flat rather than folded. Maintain stable temperature (65-70 degrees F) and relative humidity (30-40%). Keep away from light: light exposure drives the lignin photodegradation that causes yellowing. Avoid rubber bands, tape, or paperclips on the clippings. If the clipping is particularly fragile, backing with Japanese tissue paper using methylcellulose adhesive before storage stabilizes it without introducing additional acidity. Once you have a high-quality digital scan and AI-restored version, the scanned copy serves as the archival record even if the physical clipping continues to deteriorate.

## Is the ArtImageHub $4.99 payment charged per clipping or per session?

The $4.99 at ArtImageHub is a single one-time payment that covers your account access -- not a per-image or per-session charge. After paying once, you can upload and process as many newspaper clippings or other old photos as your archive contains. For a family with a large envelope of newspaper clippings from wedding announcements, sports coverage, business news, and obituaries, this means the entire collection processes for a single $4.99 payment. The preview-first workflow applies to each image individually: you upload a clipping, see the AI's restoration preview, decide whether to download the full-resolution version, and move on to the next clipping. Each preview is free. Downloads draw from your account access that the one-time payment established.
