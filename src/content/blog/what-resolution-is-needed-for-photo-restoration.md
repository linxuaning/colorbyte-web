---
title: "What Resolution Is Needed for AI Photo Restoration? A Practical DPI Guide"
description: "A practical guide to minimum scan resolution requirements for AI photo restoration — what DPI you need for wallet photos, 4x6 prints, and 8x10 portraits to get the best restoration results."
publishedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "AI Imaging Researcher"
authorBio: "Maya holds a graduate degree in computer vision and has spent four years studying neural image restoration pipelines. She writes to make complex AI research accessible to photographers, archivists, and everyday users."
category: "Technical Education"
tags: ["Photo Scanning", "DPI Guide", "Photo Restoration", "AI Photo Enhancement"]
image: "/blog/ai-restoration-technology.jpg"
coverColor: "from-green-500 via-emerald-600 to-teal-700"
coverEmoji: "📐"
---

Before submitting a photograph for AI restoration, you need to scan it. The scan resolution you choose — measured in DPI (dots per inch) — determines the pixel dimensions of the resulting digital file, and pixel dimensions directly affect how much information is available for AI restoration and how large a print you can produce from the result.

Scanning at too low a resolution gives the AI model insufficient data to work with. Scanning at unnecessarily high resolution wastes file size and processing time without improving results, because scanner optics and lens quality impose a practical limit on the genuine detail captured regardless of the DPI setting. Understanding the right resolution for each photograph size and restoration goal makes scanning decisions straightforward.

## How Does DPI Relate to Pixel Dimensions?

DPI is a measure of how many scanner samples are taken per linear inch of the original photograph. At 300 DPI, a one-inch-wide section of photograph produces 300 pixels in the scan. At 600 DPI, the same one-inch section produces 600 pixels.

For a standard 4x6 inch photograph:
- 300 DPI → 1200 × 1800 pixels (2.2 megapixels)
- 600 DPI → 2400 × 3600 pixels (8.6 megapixels)
- 1200 DPI → 4800 × 7200 pixels (34.6 megapixels)

The pixel dimensions of the scan are what actually matter for AI restoration, not the DPI value itself. A 1200 × 1800 pixel image from a 4x6 print at 300 DPI is identical in pixel content to the same image captured digitally at any other means producing the same dimensions.

AI restoration models like Real-ESRGAN apply 4x upscaling by default, meaning the output is 4 times larger in each dimension (16 times the pixel area). A 1200 × 1800 pixel input becomes a 4800 × 7200 pixel output — suitable for printing at 300 DPI at 16 × 24 inches.

## What Is the Minimum Viable Scan Resolution for Each Photo Size?

The minimum viable resolution is the DPI that produces enough input pixels for the AI model to work effectively, with the 4x upscaling producing output suitable for standard print sizes.

**Wallet-size photographs (approximately 2.5 × 3.5 inches)**
Minimum: 600 DPI → 1500 × 2100 pixels input → 6000 × 8400 pixels after 4x upscaling
At this output size, you can print at 4 × 6 inches at 300 DPI or larger at lower DPI.
Recommended: 1200 DPI for more robust input to the AI model.

**Standard 4 × 6 inch photographs**
Minimum: 300 DPI → 1200 × 1800 pixels input → 4800 × 7200 pixels after upscaling
At this output size, you can print at approximately 8 × 12 inches at 600 DPI or 16 × 24 inches at 300 DPI.
Recommended: 600 DPI for photographs with significant damage or fine detail.

**Medium format prints (5 × 7 to 8 × 10 inches)**
Minimum: 300 DPI → 1500 × 2100 to 2400 × 3000 pixels input
After 4x upscaling: sufficient for large format print output.
Recommended: 400 to 600 DPI. At 300 DPI the input pixel count is already large; higher DPI provides more fine detail for the model to work with.

**Large format prints (11 × 14 inches and larger)**
Minimum: 200 to 300 DPI — even at 200 DPI these scans produce 2200 × 2800 pixels or larger.
The limiting factor at large format is often the physical detail available in the photographic print, not the scanning resolution. Scanning above 400 DPI for large prints rarely captures additional genuine detail.

## What Happens If You Scan at Too Low a Resolution?

Scanning at too low a resolution produces a digital file with insufficient pixels for effective AI restoration and for producing high-quality print output.

**For AI restoration quality**: The face enhancement model (GFPGAN) operates on face regions in the image. For GFPGAN to work effectively, faces should be at least 128 × 128 pixels in the input — ideally 256 × 256 or larger. If you scan a wallet photo at 150 DPI (375 × 525 pixels total), a face occupying half the frame is only 188 × 188 pixels. The AI model can work with this but produces better results with more face pixels.

**For print output**: After 4x upscaling, a 375 × 525 pixel input becomes 1500 × 2100 pixels — sufficient for printing at approximately 5 × 7 inches at 300 DPI, but not for larger output. If your goal is an 8 × 10 print at 300 DPI, you need a 2400 × 3000 pixel file after upscaling, which means a 600 × 750 pixel input minimum. Scanning at 300 DPI (versus 150 DPI) from a wallet photo is the difference between 5 × 7 and 8 × 10 usable print output.

## Does Scanning Above the Recommended Resolution Improve Results?

Up to a point, higher scan DPI captures more genuine photographic detail and gives the AI model better input. Above that point, the scanner samples finer than the print's actual resolution limit and captures only noise.

The practical resolution limits of photographic prints are roughly:
- Color photographic prints (C-prints): 80 to 125 line pairs per millimeter, equivalent to approximately 400 to 600 DPI
- Black and white fiber-based prints: up to 200 line pairs per millimeter, equivalent to approximately 500 to 1000 DPI
- Newspaper photographs: 50 to 80 line pairs per millimeter, equivalent to approximately 150 to 250 DPI

Scanning a color print at 1200 DPI captures the same genuine image detail as 600 DPI — above approximately 600 DPI, you are oversampling the print's actual resolution. The 1200 DPI scan is four times larger with no additional useful information. For most color prints, 600 DPI is the practical ceiling for genuine detail capture.

For black and white prints, particularly large-format negatives printed at full tonality, scanning up to 1200 DPI can capture additional genuine detail. For very small original formats (35mm slides or negatives), higher DPI is necessary and useful — 2400 DPI for slides, 3200 to 4800 DPI for 35mm negatives.

## What File Format Should You Use When Scanning?

Scan format affects both file size and image quality in ways that interact with AI restoration.

**TIFF** is the recommended format for archival scanning. TIFF is lossless — no image data is discarded in the file format. It preserves every bit of information the scanner captured. TIFF files are large (a 4x6 at 600 DPI produces a roughly 50 MB TIFF) but contain the maximum available information for the AI model.

**JPEG at high quality** (quality 90 to 100 in most scanning software) is a reasonable practical choice. High-quality JPEG compression is nearly lossless — the artifacts are below visible threshold. File sizes are 5 to 15 times smaller than TIFF. For most AI restoration purposes, JPEG at quality 90 produces results indistinguishable from TIFF.

**JPEG at lower quality settings** (quality below 80) introduces visible compression artifacts — blocking, ringing around edges, color banding — that the AI model may interpret as genuine image features or amplify during upscaling. If you are scanning in JPEG, always use the highest quality setting available.

ArtImageHub's restoration pipeline at $4.99 one-time accepts JPEG, PNG, and TIFF uploads. For maximum quality results, TIFF or high-quality JPEG scans at the recommended DPI for your photo size produce the best output.

## Frequently Asked Questions

## Does the scanner brand or quality affect restoration results significantly?

Scanner optical quality does affect the genuine detail captured in a scan, though for consumer flatbed scanners at mainstream resolution settings (300 to 600 DPI) the differences between brands are modest. All major consumer scanner brands (Epson, Canon, Brother) produce adequate results at 300 to 600 DPI for standard print sizes. Scanner quality becomes more important at higher DPI settings (1200 DPI and above) — better optics have sharper lens resolution and less chromatic aberration, capturing more genuine detail at these settings. For wallet-size photos and slides where 1200 DPI or higher is recommended, better scanner optics matter more. For standard 4x6 prints at 300 to 600 DPI, the difference between entry-level and premium consumer scanners is small.

## Is there a way to check if a scan has enough resolution before submitting for restoration?

Yes. Open the scan in any image viewer and zoom to 100 percent (one screen pixel equals one image pixel). At 100 percent, examine a face region or area with fine detail. If the subject looks appropriately detailed at 100 percent zoom — you can see facial features clearly, clothing texture is visible — the scan has adequate resolution. If the image looks blurry or blocky at 100 percent zoom, the scan resolution is marginal and rescan at higher DPI will improve results. You can also check pixel dimensions: for a 4x6 photograph, a minimum of 1200 × 1800 pixels (300 DPI) is adequate, and 2400 × 3600 pixels (600 DPI) is better for important photographs.

## Should I clean the photograph before scanning?

Yes — cleaning before scanning is one of the most impactful steps you can take to improve restoration results. Dust and hair on the photograph surface are captured in the scan as sharp-edged artifacts that are more difficult for AI restoration to remove than the underlying photo damage. Gently removing surface dust with a clean, dry, lint-free cloth or a soft photographic brush before scanning eliminates a significant source of digital noise. For fingerprints, follow photography conservation guidance: breathing lightly on the surface and wiping gently with a microfiber cloth is generally safe for most photographic prints. Do not apply any liquid cleaning products unless you are experienced in photographic conservation.

## What should I do if I can only scan at low resolution because my scanner is limited?

If your scanner's maximum resolution is 300 DPI and you are scanning a wallet photo, scan at 300 DPI (the maximum available) and accept the resolution limitation. Modern scanners sold for home use have at minimum 1200 DPI optical resolution — if your scanner is limited below this, it may be a very old model. As an alternative, many libraries, print shops, and photography retailers offer high-resolution scanning services at low cost. For particularly important photographs, professional drum scanning or high-resolution flatbed scanning at a photo lab can capture significantly more detail than consumer scanner hardware. The cost of professional scanning is typically modest relative to the value of the recovered photograph.

## Does the orientation of the scan matter for AI restoration?

It can matter specifically for face enhancement. GFPGAN's face detection works best on upright faces — faces that appear right-side up in the image. Scanning a photograph at a 90-degree rotation so that faces appear sideways reduces GFPGAN's face detection reliability. Scanning with faces oriented upright, or rotating the digital file to upright orientation before submitting for restoration, ensures the face enhancement step operates at full effectiveness. Landscape versus portrait orientation of the scan otherwise does not affect restoration quality for non-face elements.
