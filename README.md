# ArtImageHub Frontend

Next.js web application for AI-powered old photo restoration with integrated Stripe payments.

## Features

- **Photo Restoration Interface**
  - Drag & drop image upload
  - Real-time processing status
  - Before/After comparison slider
  - Enhancement options (face enhance, colorize, upscale)

- **Subscription Management**
  - 7-day free trial signup
  - Email-based authentication
  - Stripe Checkout integration
  - Customer Portal access
  - Subscription status tracking

- **Freemium Experience**
  - 3 free downloads per day (720p with watermark)
  - Pro tier: Unlimited original quality downloads
  - Rate limit visibility
  - Conversion touchpoints

- **SEO & Content**
  - Blog with AI restoration articles
  - FAQ sections for Featured Snippets
  - Optimized for search engines
  - Human-feel content writing

## Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**:
  - Radix UI primitives
  - shadcn/ui components
  - Lucide React icons
- **Image Processing**:
  - Sharp (for optimization)
  - react-compare-slider (Before/After)
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+ or Bun
- Backend API running (see backend/README.md)

## Installation

1. Install dependencies:
```bash
npm install
# or
bun install
```

2. Create `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Development

Start the development server:
```bash
npm run dev
# or
bun dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

### Development (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Production
```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx                      # Homepage with Hero + Pricing
│   │   ├── layout.tsx                    # Root layout + metadata
│   │   ├── pricing-section.tsx           # Pricing cards with trial signup
│   │   ├── old-photo-restoration/
│   │   │   ├── page.tsx                  # Restoration page wrapper
│   │   │   └── restore-client.tsx        # Main restoration UI
│   │   ├── payment/
│   │   │   └── success/page.tsx          # Post-checkout success page
│   │   └── subscription/
│   │       └── page.tsx                  # Subscription management
│   ├── content/
│   │   └── blog/                         # Markdown blog posts
│   │       ├── how-ai-photo-restoration-works.md
│   │       ├── best-practices-scanning-old-photos.md
│   │       └── [other articles]
│   ├── components/
│   │   └── ui/                           # shadcn/ui components
│   └── lib/
│       └── utils.ts                      # Utility functions
├── public/
│   ├── favicon.ico
│   └── [static assets]
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Key Pages

### 1. Homepage (`/`)
- Hero section with primary CTA
- Features showcase
- Pricing section with trial signup
- How It Works
- FAQ section

### 2. Photo Restoration (`/old-photo-restoration`)
Features:
- Image upload (drag & drop or file picker)
- Enhancement options selection
- Real-time processing status
- Before/After comparison slider
- Download options (Free 720p vs Pro Original)
- Rate limit tracking (X/3 remaining)

User Flow:
1. Upload photo
2. Select enhancements (face enhance, colorize, upscale)
3. Click "Restore Photo"
4. Wait for processing (30-120s)
5. View results with Before/After slider
6. Download (720p free or start trial for original)

### 3. Payment Success (`/payment/success`)
- Checkout verification
- Trial confirmation
- Display trial end date
- Save email to localStorage
- CTAs: Start restoring or Manage subscription

### 4. Subscription Management (`/subscription`)
- Email lookup for subscription
- Display subscription status
- Show trial/billing dates
- Cancel subscription
- Access Stripe Customer Portal
- Handle expired/canceled states

### 5. Blog (`/blog/[slug]`)
- SEO-optimized articles
- FAQ sections for Featured Snippets
- Inline CTAs
- Table of contents
- Related articles

## API Integration

All API calls use `NEXT_PUBLIC_API_URL` base URL.

### Photo Restoration
```typescript
// Submit photo for restoration
POST ${API_BASE}/api/restore
Body: FormData with image file
Returns: { task_id: string }

// Check task status
GET ${API_BASE}/api/tasks/${taskId}
Returns: { status: "pending" | "processing" | "completed" | "failed", result_url?: string }

// Check download limit
GET ${API_BASE}/api/download/check-limit?email=${email}
Returns: { allowed: boolean, remaining: number, is_subscriber: boolean }

// Download result
GET ${API_BASE}/api/download/${taskId}?email=${email}
Returns: Image file (720p or original based on subscription)
```

### Payment
```typescript
// Start trial
POST ${API_BASE}/api/payment/start-trial
Body: { email: string }
Returns: { checkout_url: string }

// Get subscription status
GET ${API_BASE}/api/payment/subscription/${email}
Returns: {
  email: string,
  is_active: boolean,
  status: "trialing" | "active" | "canceled" | "past_due" | "none",
  trial_end: string | null,
  current_period_end: string | null,
  cancel_at_period_end: boolean
}

// Cancel subscription
POST ${API_BASE}/api/payment/cancel
Body: { email: string }
Returns: { message: string }

// Create portal session
POST ${API_BASE}/api/payment/create-portal-session
Body: { email: string }
Returns: { url: string }

// Verify checkout session
GET ${API_BASE}/api/payment/verify-session/${sessionId}
Returns: { status: "success", email: string, subscription_status: string, trial_end: string }
```

## Local Storage

Used for persisting user email across sessions:
```typescript
// Save email
localStorage.setItem("artimagehub_email", email);

// Retrieve email
const email = localStorage.getItem("artimagehub_email");

// Remove email
localStorage.removeItem("artimagehub_email");
```

## Styling

### Tailwind Configuration
- Custom color palette (blue-purple gradient)
- Dark mode support (via `next-themes`)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Design System
- Primary colors: Blue-600 to Purple-600 gradient
- Buttons: Primary (gradient), Secondary (outline), Ghost
- Cards: Rounded-xl with border
- Modals: Centered with backdrop blur
- Toasts: Bottom-right notifications

## SEO Optimization

### Static Generation
All pages are statically generated at build time for optimal SEO:
```typescript
export const dynamic = 'force-static';
```

### Metadata
```typescript
export const metadata = {
  title: "ArtImageHub - AI Photo Restoration",
  description: "Free online AI photo restoration tool. Enhance faces, fix scratches, and colorize black & white photos instantly.",
  keywords: ["AI photo restoration", "old photo repair", "photo enhancement"],
  openGraph: {
    title: "ArtImageHub - AI Photo Restoration",
    description: "Restore your old photos with AI",
    images: ["/og-image.jpg"]
  }
};
```

### Structured Data
Add JSON-LD for rich snippets (to be implemented):
- WebApplication schema
- FAQ schema
- Review schema

## Building for Production

```bash
npm run build
# or
bun run build
```

Creates optimized production build in `.next/` directory.

### Production Checklist
- ✅ Set `NEXT_PUBLIC_API_URL` to production backend
- ✅ Add Vercel analytics (optional)
- ✅ Configure custom domain
- ✅ Set up error tracking (Sentry recommended)
- ✅ Enable Vercel Edge Caching
- ✅ Add sitemap.xml
- ✅ Add robots.txt

## Deployment (Vercel)

### Automatic Deployment
1. Connect GitHub repository to Vercel
2. Vercel auto-deploys on push to `main`
3. Preview deployments for PRs

### Manual Deployment
```bash
vercel
```

### Environment Variables in Vercel
Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_API_URL`: Production backend URL

## Testing

### Manual Testing Checklist
- [ ] Upload photo → Processing → Download (Free)
- [ ] Rate limit: 3 downloads, then limit reached
- [ ] Start trial → Checkout → Success page
- [ ] Subscription management → Status display
- [ ] Cancel subscription → Confirmation
- [ ] Stripe Customer Portal access
- [ ] Mobile responsive design
- [ ] Dark mode toggle (if implemented)

### Browser Testing
- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari (iOS)
- Mobile Chrome (Android)

## Performance

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

### Optimizations
- Image optimization via Next.js Image
- Font optimization via next/font
- Static generation for all pages
- Edge caching on Vercel
- Lazy loading for blog images

## Common Issues

### Issue: API connection failed
**Solution**: Check `NEXT_PUBLIC_API_URL` in `.env.local`

### Issue: Stripe checkout not working
**Solution**: Verify backend Stripe keys are configured

### Issue: Download limit not working
**Solution**: Backend needs IP rate limiting feature enabled

### Issue: Build fails with "useSearchParams" error
**Solution**: Wrap component using `useSearchParams` in `<Suspense>` boundary

## Contributing

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use Prettier for formatting
- Prefer functional components with hooks

### Component Naming
- Page components: `page.tsx`
- Client components: `*-client.tsx`
- UI components: Lowercase with hyphens (`button.tsx`)

### Commit Messages
Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Tests
- `chore:` Maintenance

## Roadmap

### Completed Features
- ✅ Photo restoration with AI
- ✅ 7-day free trial integration
- ✅ Subscription management
- ✅ Rate limiting for free tier
- ✅ Before/After comparison
- ✅ SEO blog articles

### Upcoming Features
- [ ] Conversion touchpoint UI (P0)
  - Enhanced download section with 3 states
  - Daily limit modal with countdown
  - Hero CTA optimization
  - Subscription expiry banner
- [ ] UI optimization (P1)
  - Brand color refinement
  - Hero section redesign
  - Before/after cover images
- [ ] User accounts (P2)
  - Email/password authentication
  - Photo history
  - Favorites

### Future Enhancements
- Batch processing
- Advanced editing tools
- Mobile app (React Native)
- API for developers
- Referral program

## Support

For issues or questions:
- Frontend bugs: Check browser console
- API issues: Check Network tab in DevTools
- Stripe issues: Check `/payment/success` page logs

## License

Proprietary - All rights reserved
