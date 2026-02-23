# Product Hunt Screenshot Capture Guide

**Created:** Feb 23, 2026
**Goal:** Generate 5-7 gallery images (1270×760px) for Product Hunt launch

---

## Quick Start (5 minutes to capture all screenshots)

### Files Ready to Screenshot

All HTML templates are in `/public/product-hunt/` and ready to open:

1. **gallery-01-restoration.html** - Photo restoration before/after
2. **gallery-02-colorization.html** - B&W to color before/after
3. **gallery-03-enhancement.html** - Quality enhancement before/after
4. **screenshot-template.html** - Hero, Pricing, and Value Proposition sections

---

## Screenshot Instructions

### Method 1: macOS (Recommended - Fastest)

```bash
# 1. Open first HTML file
open public/product-hunt/gallery-01-restoration.html

# 2. Take screenshot (Cmd + Shift + 4, then Spacebar, click window)
# OR use built-in screenshot tool: Cmd + Shift + 5

# 3. Repeat for all files
open public/product-hunt/gallery-02-colorization.html
# Screenshot...

open public/product-hunt/gallery-03-enhancement.html
# Screenshot...

open public/product-hunt/screenshot-template.html
# Screenshot hero section, pricing section, value prop section separately
```

**Save as:**
- `artimagehub-ph-gallery-01-restoration.png`
- `artimagehub-ph-gallery-02-colorization.png`
- `artimagehub-ph-gallery-03-enhancement.png`
- `artimagehub-ph-gallery-04-hero.png`
- `artimagehub-ph-gallery-05-pricing.png`
- `artimagehub-ph-gallery-06-value.png`

### Method 2: Browser DevTools (Cross-platform)

1. **Open HTML in Chrome/Edge/Firefox**
2. **Open DevTools** (F12 or Cmd+Opt+I)
3. **Toggle Device Toolbar** (Cmd+Shift+M or Ctrl+Shift+M)
4. **Set Dimensions:**
   - Width: 1270px
   - Height: 760px
5. **Capture:**
   - Chrome: DevTools → ⋮ Menu → Capture screenshot
   - Firefox: Right-click → Take a Screenshot → Save full page

### Method 3: Online Screenshot Tool

Use a service like:
- **Screely** (screely.com) - Upload HTML, auto-formats
- **Screenshot.rocks** - Paste URL or upload HTML
- **Browserframe** - Professional browser mockups

---

## Files Overview

### Before/After Comparison Images (3 files)

**gallery-01-restoration.html**
- Header: "Old Photo Restoration"
- Before image: `../blog/before-1.jpg` (damaged photo)
- After image: `../blog/after-1.jpg` (restored photo)
- Color scheme: Purple gradient
- Size: 1270×760px

**gallery-02-colorization.html**
- Header: "Black & White to Color"
- Before image: `../blog/before-2.jpg` (B&W photo)
- After image: `../blog/after-2.jpg` (colorized photo)
- Color scheme: Pink/warm gradient
- Size: 1270×760px

**gallery-03-enhancement.html**
- Header: "Photo Quality Enhancement"
- Before image: `../blog/before-3.jpg` (low quality)
- After image: `../blog/after-3.jpg` (enhanced)
- Color scheme: Green/blue gradient
- Size: 1270×760px

### Marketing Screenshots (3 sections from screenshot-template.html)

**Hero Section**
- Title: "Restore Your Family Memories"
- 3 feature cards: Restoration, Colorization, Enhancement
- Light background with gradient
- Screenshot top section only

**Pricing Section**
- Title: "Pay Once, Use Forever"
- 2 pricing cards: Free Trial vs Pro Lifetime ($29.9)
- Dark background
- "🔥 Launch Special - 40% OFF" badge
- Screenshot middle section only

**Value Proposition Section**
- Title: "Why Pro Lifetime Saves You Money"
- Comparison: $119.88/year (competitors) vs $29.9 (one-time)
- Purple gradient background
- Screenshot bottom section only

---

## Post-Capture Optimization

After taking screenshots:

1. **Resize if needed** (should already be 1270×760px)
2. **Optimize file size:**
   - Use ImageOptim (Mac): drag-and-drop PNGs
   - Use TinyPNG (web): upload and download optimized
   - Target: <500KB per image
3. **Rename systematically:**
   ```
   artimagehub-ph-gallery-01-restoration.png
   artimagehub-ph-gallery-02-colorization.png
   artimagehub-ph-gallery-03-enhancement.png
   artimagehub-ph-gallery-04-hero.png
   artimagehub-ph-gallery-05-pricing.png
   artimagehub-ph-gallery-06-value.png
   ```

---

## Upload to Product Hunt

When ready to launch:

1. **Log into Product Hunt** (use maker account)
2. **Create new product**
3. **Upload gallery images in this order:**
   - Image 1: Hero section (shows all 3 services)
   - Image 2: Before/After restoration (most dramatic)
   - Image 3: Pricing (highlight value prop)
   - Image 4: Before/After colorization
   - Image 5: Value comparison ($29.9 vs $119.88)
   - Image 6: Before/After enhancement
   - Image 7: (Optional) Mobile view or UI screenshot

4. **Upload thumbnail:** Logo 240×240px (check `/public` for existing logo)
5. **Add product details:**
   - Name: ArtImageHub
   - Tagline: "AI photo restoration. $29.9 lifetime. No subscription."
   - Description: (from `/docs/product-hunt-launch.md`)

---

## Quality Checklist

Before uploading to Product Hunt:

- [ ] All images are exactly 1270×760px
- [ ] File sizes are <500KB each
- [ ] Images show actual product results (not mockups)
- [ ] Before/after comparisons are dramatic and clear
- [ ] Pricing value prop is visible and compelling
- [ ] Brand colors consistent (#0071e3, purple gradients)
- [ ] Fonts render correctly (Playfair Display + Inter)
- [ ] No placeholder text or broken images
- [ ] ArtImageHub.com watermark visible on after images
- [ ] All text is readable at thumbnail size

---

## Troubleshooting

**Issue: Images don't load in HTML**
- Check that `../blog/before-1.jpg` paths are correct
- Open HTML from correct directory: `/public/product-hunt/`
- Use absolute paths if relative paths fail

**Issue: Wrong dimensions**
- Browser DevTools: Set responsive mode to 1270×760px
- Use screenshot tool with exact pixel dimensions
- Crop in image editor after capture

**Issue: Fonts don't load**
- Ensure internet connection (fonts load from Google Fonts)
- Wait 2-3 seconds after page load for fonts to render
- Refresh browser if fonts don't appear

**Issue: Colors look different**
- Use color-managed screenshot tool
- Export as PNG (not JPG) to preserve gradients
- Avoid browser zoom (should be 100%)

---

## Next Steps After Screenshots

1. **Review images** - Open all 6-7 images and verify quality
2. **Get feedback** - Share with team or friends for quick review
3. **Prepare other assets:**
   - [ ] Product logo (240×240px)
   - [ ] Demo video (optional, 30-60s)
   - [ ] Maker story first comment
4. **Schedule launch** - Product Hunt launches at 12:01 AM PST
5. **Upload assets** - Add to Product Hunt draft product page

---

## Time Estimate

- **Screenshot capture:** 5-10 minutes
- **Optimization:** 5 minutes
- **Review and rename:** 2 minutes
- **Upload to PH:** 3 minutes
- **Total:** 15-20 minutes

---

**Status:** ✅ Templates ready, images embedded, ready to screenshot
**Last Updated:** Feb 23, 2026
