# Google Analytics 4 Integration Guide

## Setup

### 1. Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variable

Add the Measurement ID to your environment:

**Vercel (Production):**
1. Go to your Vercel project settings
2. Environment Variables section
3. Add: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
4. Redeploy

**Local Development:**
1. Copy `.env.local.example` to `.env.local`
2. Uncomment and set: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

### 3. Verify Installation

After deploying:
1. Open your website
2. Open browser DevTools → Network tab
3. Filter for "google-analytics" or "gtag"
4. You should see requests to Google Analytics

Alternatively:
1. Install [Google Analytics Debugger](https://chrome.google.com/webstore) extension
2. Visit your website
3. Check the console for GA events

## Tracked Events

### Automatic Events (by GA4)
- Page views
- Scrolls
- Outbound clicks
- Site search
- Video engagement
- File downloads

### Custom Events (Manual Tracking)

Import the analytics utilities:
```typescript
import {
  trackPhotoUpload,
  trackPhotoDownload,
  trackPaymentClick,
  trackPaymentSuccess,
  trackCTAClick,
} from '@/lib/analytics';
```

**Photo Upload:**
```typescript
trackPhotoUpload();
```

**Photo Download:**
```typescript
trackPhotoDownload('free'); // or 'pro'
```

**Payment Button Click:**
```typescript
trackPaymentClick('Pro Lifetime - $29.9');
```

**Payment Success:**
```typescript
trackPaymentSuccess(29.9); // amount in USD
```

**CTA Click:**
```typescript
trackCTAClick('Hero Section'); // location identifier
```

## Implementation Examples

### Track Photo Upload in Restore Page

```typescript
// src/app/old-photo-restoration/restore-client.tsx

import { trackPhotoUpload } from '@/lib/analytics';

const handleFileUpload = async (file: File) => {
  // Existing upload logic...

  // Track the event
  trackPhotoUpload();
};
```

### Track Download in Result Component

```typescript
import { trackPhotoDownload } from '@/lib/analytics';

const handleDownload = (isPro: boolean) => {
  // Existing download logic...

  // Track the event
  trackPhotoDownload(isPro ? 'pro' : 'free');
};
```

### Track Payment Button Click

```typescript
// src/components/PayPalButton.tsx

import { trackPaymentClick } from '@/lib/analytics';

const handlePaymentClick = () => {
  trackPaymentClick('Pro Lifetime - $29.9');

  // Existing payment logic...
};
```

### Track Payment Success

```typescript
// src/app/payment/success/page.tsx

import { trackPaymentSuccess } from '@/lib/analytics';

useEffect(() => {
  if (paymentConfirmed) {
    trackPaymentSuccess(29.9);
  }
}, [paymentConfirmed]);
```

## Key Metrics to Monitor

### Conversion Funnel
1. Landing page views
2. Photo upload events
3. Photo download events
4. Payment button clicks
5. Payment success events

### Important Metrics
- **Conversion Rate**: Payment success / Landing page views
- **Upload Rate**: Photo uploads / Landing page views
- **Download Rate**: Photo downloads / Photo uploads
- **Payment Conversion**: Payment success / Payment clicks

### Custom Reports

Create custom reports in GA4:
1. Go to Explore → Create new exploration
2. Add dimensions: Event name, Page title
3. Add metrics: Event count, Conversions
4. Filter by events: photo_upload, photo_download, payment_click, purchase

## Troubleshooting

### Events not showing up

1. **Check GA_ID is set:**
   ```bash
   # Vercel
   vercel env ls

   # Local
   echo $NEXT_PUBLIC_GA_ID
   ```

2. **Check browser console:**
   - Open DevTools → Console
   - Look for GA initialization messages
   - Check for errors

3. **GA4 Debug View:**
   - In GA4: Configure → DebugView
   - Install Google Analytics Debugger extension
   - Visit your site with debugger enabled
   - See real-time events

4. **Verify gtag is loaded:**
   ```javascript
   // In browser console
   console.log(typeof window.gtag); // should be "function"
   ```

### Events delayed

GA4 events can take 24-48 hours to appear in standard reports. Use DebugView for real-time testing.

### Missing data

Ensure ad blockers are disabled when testing. Many users have ad blockers that prevent GA from loading.

## Privacy & GDPR

Google Analytics 4 with `@next/third-parties` is designed to be privacy-friendly:
- No cookies set without consent (in default mode)
- Respects Do Not Track signals
- IP anonymization enabled by default

For EU compliance, consider:
1. Adding a cookie consent banner
2. Conditionally loading GA only after consent
3. Updating Privacy Policy to mention GA usage

## Next Steps

After GA4 is live:
1. Set up conversion goals in GA4
2. Create custom reports for key metrics
3. Set up event-based conversion tracking
4. Enable BigQuery export for advanced analysis
5. Link to Google Ads (if running ads)

## Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [@next/third-parties Docs](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
