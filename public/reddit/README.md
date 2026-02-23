# Reddit Comparison Images - Quick Generation Guide

**Created:** Feb 23, 2026
**Purpose:** Generate before/after comparison images for Reddit posts

---

## Quick Start (5 minutes)

### Step 1: Open HTML Files
```bash
# From photofix/frontend directory
open public/reddit/post-1-comparison.html
open public/reddit/post-2-comparison.html
```

Or navigate to:
- `http://localhost:3000/reddit/post-1-comparison.html` (if dev server running)

### Step 2: Take Screenshots

**macOS:**
1. Press `Cmd + Shift + 4`
2. Press `Spacebar` to switch to window capture mode
3. Click on the browser window
4. Image saved to Desktop

**Windows:**
1. Press `Windows + Shift + S`
2. Select area to capture
3. Image copied to clipboard
4. Paste into Paint and save

**Alternative:**
- Use browser DevTools screenshot:
  - Open DevTools (F12)
  - `Cmd/Ctrl + Shift + P`
  - Type "screenshot"
  - Select "Capture node screenshot"

### Step 3: Save Files
- `reddit-post-1-comparison.png` (1200×630px)
- `reddit-post-2-comparison.png` (1200×800px)

---

## Image Details

### Post #1 Comparison (r/OldPhotosInRealLife)
- **File:** `post-1-comparison.html`
- **Dimensions:** 1200×630px (optimal for Reddit)
- **Content:** Side-by-side before/after of 1947 wedding photo
- **Labels:** RED "BEFORE" + GREEN "AFTER"
- **Watermark:** "Restored with ArtImageHub.com"

**Best For:**
- Emotional impact
- Clear visual transformation
- Mobile-friendly aspect ratio

### Post #2 Comparison (r/Genealogy)
- **File:** `post-2-comparison.html`
- **Dimensions:** 1200×800px
- **Content:** 3 rows of before/after comparisons:
  1. 1947 wedding (severe damage)
  2. 1960s B&W (colorization)
  3. 1970s faded (enhancement)
- **Style:** Professional grid layout
- **Footer:** "All restorations completed in 30 seconds each"

**Best For:**
- Educational content
- Multiple examples
- Demonstrating versatility

---

## Troubleshooting

**Images don't load:**
- Check that you're in `/photofix/frontend` directory
- Verify `public/blog/before-*.jpg` and `public/blog/after-*.jpg` exist
- Use absolute paths if relative paths fail

**Wrong dimensions:**
- Use browser DevTools to set viewport:
  - Post #1: 1200×630
  - Post #2: 1200×800
- Or crop after screenshot

**Want different images:**
- Edit HTML files to change image sources
- Available images in `/public/blog/`:
  - before-1.jpg / after-1.jpg (wedding photo)
  - before-2.jpg / after-2.jpg (B&W colorization)
  - before-3.jpg / after-3.jpg (enhancement)

---

## Alternative: Use Figma/Canva

If you prefer design tools:

**Figma Template:**
1. Create 1200×630 frame (Post #1)
2. Add 2 images side-by-side (600px each)
3. Add "BEFORE" and "AFTER" labels
4. Export as PNG

**Canva Template:**
1. Use "Facebook Post" template (1200×630)
2. Upload before/after images
3. Use split layout
4. Add text overlays
5. Download as PNG

---

## Upload to Reddit

### Post #1 (r/OldPhotosInRealLife)
1. **Create post** → Image & Video
2. **Upload** `reddit-post-1-comparison.png`
3. **Title:** "Restored my grandmother's 1947 wedding photo using AI - she passed before I was born"
4. **Post** and monitor for 2 hours

### Post #2 (r/Genealogy)
1. **Create post** → Image & Video
2. **Upload** `reddit-post-2-comparison.png`
3. **Title:** "I tested 6 AI photo restoration tools on 100 family photos. Here's what actually works."
4. **Post** and engage with comments

---

## Expected Results

**Post #1:**
- Upvotes: 500-2,000
- Comments: 50-150
- Traffic: +400-800 UV

**Post #2:**
- Upvotes: 200-800
- Comments: 100-300 (genealogists engage heavily)
- Traffic: +300-600 UV

**Total Expected:** +700-1,400 UV over 48 hours

---

## Notes

- Images are designed for maximum visual impact
- Watermarks are subtle but present
- Color scheme (red/green) is universally understood
- Professional design builds credibility

**Files ready to use immediately!** Just open in browser and screenshot.

---

**Status:** ✅ Ready to generate
**Last Updated:** Feb 23, 2026
