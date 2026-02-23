# Product Hunt Assets Guide - ArtImageHub

**Launch Target:** Early March 2026 (Week 2)
**Goal:** Top 5 Product of the Day
**Created:** February 23, 2026

---

## Quick Start

### Required Assets Checklist

- [ ] **Thumbnail** (240×240px) - Product logo/icon
- [ ] **Gallery Images** (5-7 images, 1270×760px recommended)
- [ ] **Cover Image** (2400×1260px, optional but recommended for featured placement)
- [ ] **Demo Video** (optional, 30-60 seconds)

---

## Asset Specifications

### 1. Thumbnail Image
**Dimensions:** 240×240px (PNG with transparency)
**Purpose:** Appears in Product Hunt feed and search results
**Requirements:**
- Clean, recognizable logo or icon
- Works well at small sizes
- No text (logo only)

**Current Status:**
- Check existing logo at `/public` directory
- May need to optimize existing ArtImageHub logo

---

### 2. Gallery Screenshots (5-7 images)

**Dimensions:** 1270×760px (16:9.5 ratio), or any size up to 3840×2160px
**Format:** PNG or JPG
**Purpose:** Showcase product features in detail

#### Recommended Gallery Images:

**Image 1: Hero / Overview**
- Show all 3 services (Restoration, Colorization, Enhancement)
- Emphasize "Pay Once, Use Forever" value prop
- Clean, professional aesthetic
- **Template:** `screenshot-template.html` (Hero Shot section)

**Image 2: Pricing Comparison**
- Highlight $29.9 one-time vs $119.88/year competitors
- Show "Launch Special - 40% Off" badge
- Make value proposition crystal clear
- **Template:** `screenshot-template.html` (Pricing Shot section)

**Image 3: Before/After - Photo Restoration**
- Dramatic restoration example
- Show damage removed, faces enhanced
- Side-by-side comparison
- **Use:** Existing `/blog/before-after-examples.jpg` or create custom

**Image 4: Before/After - Colorization**
- Black & white → vibrant color
- Show realistic, natural coloring
- Historical photo example
- **Use:** Existing blog images or create split-screen

**Image 5: Before/After - Enhancement**
- Blurry → sharp and detailed
- Show 4× upscaling quality
- Face detail improvement
- **Create:** Custom comparison

**Image 6: User Interface / Upload Flow** (Optional)
- Show drag-and-drop interface
- Processing animation
- Download button
- Modern, clean UI

**Image 7: Mobile View** (Optional)
- Responsive design showcase
- Works on all devices
- **Screenshot from:** www.artimagehub.com on mobile

---

### 3. Cover Image (Optional but Recommended)

**Dimensions:** 2400×1260px
**Format:** PNG or JPG
**Purpose:** Large banner image for featured products

**Recommended Content:**
- Large, eye-catching before/after comparison
- Product name and tagline
- "Pay Once, Use Forever" messaging
- Professional, magazine-quality aesthetic

**Design Approach:**
- Use Playfair Display font for headlines (already loaded)
- Purple/Blue gradient accents (brand colors)
- High contrast for readability
- Premium, editorial feel

---

## How to Create Screenshots

### Method 1: HTML Templates (Recommended)

1. **Open template in browser:**
   ```
   file:///Users/zj-db0812/vibecoding/photofix/frontend/public/product-hunt/screenshot-template.html
   ```

2. **Resize browser window:**
   - Width: 1270px
   - Height: 760px (or taller, crop to 760px after)

3. **Take screenshots:**
   - **Mac:** Cmd + Shift + 4, then spacebar, click window
   - **Or:** Use browser dev tools screenshot feature

4. **Crop/optimize:**
   - Ensure 1270×760px exactly
   - Optimize file size (aim for <500KB per image)
   - Use PNG for UI screenshots, JPG for photos

### Method 2: Live Site Screenshots

1. **Visit:** https://www.artimagehub.com
2. **Screenshot key sections:**
   - Homepage hero
   - Pricing section (scroll to #pricing)
   - Each tool page (/old-photo-restoration, /photo-colorizer, /photo-enhancer)
3. **Crop to 1270×760px**

### Method 3: Before/After Images

**Use existing blog images:**
- `/blog/before-1.jpg`, `/blog/after-1.jpg`
- `/blog/before-2.jpg`, `/blog/after-2.jpg`
- `/blog/before-3.jpg`, `/blog/after-3.jpg`
- `/blog/before-after-examples.jpg` (already combined)

**Create side-by-side comparisons:**
1. Open in image editor (Photoshop, Figma, Canva)
2. Create 1270×760px canvas
3. Place before image on left, after image on right
4. Add labels: "Before" and "After"
5. Export as high-quality JPG

---

## Product Hunt Copy

### Tagline (max 60 characters)
**Option 1:** "AI photo restoration. $29.9 lifetime. No subscription." (56 chars) ✅
**Option 2:** "Restore old photos in 30 seconds. Pay once, use forever." (57 chars)

### Description (max ~260 characters)
```
Bring your family memories back to life with AI.

Restore damaged photos, colorize black & white images, and enhance quality—all in 30 seconds. No monthly subscription, no watermarks, no hassle. Just $29.9 one-time for unlimited lifetime access.

Try 3 photos free, no signup required.
```

### First Comment (Maker Story)
Use version from `/photofix/docs/product-hunt-launch.md`
- Option A: Emotional story version
- Option B: Business-focused version
**Recommendation:** Use emotional version (better engagement)

---

## Design Principles for Product Hunt

### Visual Hierarchy
1. **Lead with value:** Make "$29.9 one-time" highly visible
2. **Show, don't tell:** Use dramatic before/after comparisons
3. **Build trust:** Show real results, not mockups
4. **Create urgency:** Highlight "Launch Special - 40% Off"

### Color & Branding
- **Primary:** #0071e3 (Apple-inspired blue)
- **Gradient:** Purple to blue (#667eea → #764ba2)
- **Accent:** Warm gradient (#ff6b6b → #ff8e53) for urgency
- **Text:** #1d1d1f (near-black), #6e6e73 (gray)

### Typography
- **Headlines:** Playfair Display (editorial, premium feel)
- **Body:** Inter (clean, modern, readable)
- **Avoid:** Generic fonts (Arial, Roboto)

### Photography
- **Use real results:** Existing blog before/after images
- **High quality:** 600 DPI scans, professional-looking
- **Emotional:** Family photos, weddings, historical images
- **Authentic:** Show actual damage → actual restoration

---

## Asset Naming Convention

Save files as:
```
artimagehub-ph-thumbnail.png
artimagehub-ph-gallery-01-hero.png
artimagehub-ph-gallery-02-pricing.png
artimagehub-ph-gallery-03-restoration.jpg
artimagehub-ph-gallery-04-colorization.jpg
artimagehub-ph-gallery-05-enhancement.jpg
artimagehub-ph-gallery-06-ui.png
artimagehub-ph-gallery-07-mobile.png
artimagehub-ph-cover.jpg
```

---

## Timeline

### Week Before Launch
- [ ] Create all gallery images (5-7)
- [ ] Optimize thumbnail logo
- [ ] Create cover image
- [ ] Test all images on Product Hunt preview
- [ ] Get feedback from team

### Day Before Launch
- [ ] Final review of all assets
- [ ] Verify file sizes (<500KB each)
- [ ] Prepare image upload order
- [ ] Review maker story comment

### Launch Day
- [ ] Upload assets in order (thumbnail, gallery, cover)
- [ ] Post first comment within 60 seconds
- [ ] Monitor comments, respond within 1 hour
- [ ] Share on social media

---

## Tools & Resources

### Screenshot Tools
- **Mac:** Built-in (Cmd + Shift + 4)
- **Browser:** Chrome DevTools → Capture screenshot
- **Windows:** Snipping Tool, Greenshot

### Image Editing
- **Online:** Figma (free), Canva (free tier)
- **Desktop:** Photoshop, Sketch, Affinity Photo
- **Optimization:** TinyPNG, ImageOptim, Squoosh

### Design Inspiration
- **Product Hunt:** Browse top products for screenshot styles
- **Dribbble:** Search "product screenshots" or "saas marketing"
- **Existing site:** www.artimagehub.com (already well-designed)

---

## Next Steps

1. **Review HTML template:** Open `screenshot-template.html` in browser
2. **Take initial screenshots:** Capture hero, pricing, value prop sections
3. **Create before/after comparisons:** Use existing blog images
4. **Optimize file sizes:** Ensure all images <500KB
5. **Get feedback:** Share with team before launch
6. **Upload to Product Hunt:** Save for launch day

---

## Questions?

- **Where to save final images?** Keep in this `/product-hunt` folder
- **File size limits?** Product Hunt recommends <1MB per image, aim for <500KB
- **Image dimensions?** Gallery: 1270×760px; Cover: 2400×1260px; Thumbnail: 240×240px
- **Format?** PNG for UI screenshots, JPG for photos, PNG with transparency for logo

---

**Last updated:** Feb 23, 2026
**Created by:** Frontend-Design Skill
**For:** ArtImageHub Product Hunt Launch (Week 2, March 2026)
