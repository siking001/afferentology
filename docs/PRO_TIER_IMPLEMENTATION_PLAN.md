# Pro Tier Implementation Plan for Afferentology Practitioner Directory

## Overview
Add a paid subscription tier for practitioners to get enhanced listings with photos, priority placement, and additional features.

---

## Phase 1: Database Schema Updates

### New Fields for `practitioners` Table

```sql
-- Add subscription and pro feature columns
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro'));
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT;
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT;
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'none' CHECK (subscription_status IN ('none', 'active', 'cancelled', 'past_due', 'trialing'));
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS subscription_created_at TIMESTAMPTZ;
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS subscription_current_period_end TIMESTAMPTZ;

-- Pro feature fields
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS profile_photo_url TEXT;
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS gallery_images TEXT[]; -- Array of image URLs
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS featured_services TEXT;
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS special_offers TEXT;
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS social_media_links JSONB; -- {facebook: '', instagram: '', linkedin: ''}
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS years_experience INTEGER;
ALTER TABLE practitioners ADD COLUMN IF NOT EXISTS languages TEXT[];

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_practitioners_subscription_tier ON practitioners(subscription_tier);
CREATE INDEX IF NOT EXISTS idx_practitioners_stripe_customer ON practitioners(stripe_customer_id);
```

---

## Phase 2: Stripe Configuration

### Products & Prices to Create in Stripe Dashboard

1. **Product Name**: Afferentology Pro Listing
   - **Monthly Price**: £19.99/month (or $24.99/month)
   - **Annual Price**: £199/year (17% discount)
   - **Price ID**: Save these for use in code

2. **Test Mode Setup**
   - Create test products first
   - Test webhook endpoints
   - Switch to live mode only when ready

### Required Environment Variables

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_PRO_MONTHLY_PRICE_ID=price_...
STRIPE_PRO_ANNUAL_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## Phase 3: Core Files to Create/Update

### 3.1 Stripe Webhook Handler
**File**: `app/api/webhooks/stripe/route.ts`
- Handle `checkout.session.completed` → upgrade to pro
- Handle `customer.subscription.updated` → update subscription status
- Handle `customer.subscription.deleted` → downgrade to free
- Handle `invoice.payment_failed` → mark as past_due

### 3.2 Checkout API
**File**: `app/api/practitioners/checkout/route.ts`
- Create Stripe Checkout session
- Pass practitioner email as customer metadata
- Set success/cancel URLs

### 3.3 Customer Portal API
**File**: `app/api/practitioners/portal/route.ts`
- Generate Stripe Customer Portal link
- Allow practitioners to manage billing, cancel subscription

### 3.4 Pricing Page
**File**: `app/pricing/page.tsx`
- Feature comparison table (Free vs Pro)
- Call-to-action buttons
- Testimonials from pro practitioners

### 3.5 Enhanced Submission Form
**File**: `app/practitioners/submit/page.tsx` (update)
- Add tier selection (Free/Pro)
- Conditional fields for pro tier:
  - Profile photo upload
  - Gallery images (up to 5)
  - Featured services textarea
  - Special offers
  - Social media links
  - Years of experience
  - Languages spoken
- Redirect to Stripe Checkout if Pro selected

### 3.6 Enhanced Search Display
**File**: `app/find-practitioner/page.tsx` (update)
- Sort pro practitioners first
- Show "PRO" badge on listings
- Display profile photos for pro tier
- Show additional info (years experience, languages)

### 3.7 Pro Practitioner Profile Page
**File**: `app/practitioners/[id]/page.tsx` (new)
- Full profile with gallery
- Social media links
- Special offers prominently displayed
- Contact form

### 3.8 Practitioner Dashboard
**File**: `app/practitioners/dashboard/page.tsx` (new)
- View current subscription status
- Upload/manage photos
- Edit pro features
- Link to Stripe billing portal

### 3.9 Admin Updates
**File**: `app/admin/practitioners/page.tsx` (update)
- Show subscription tier in practitioner list
- Filter by free/pro
- View subscription status
- Manual upgrade/downgrade capability

---

## Phase 4: Feature Definitions

### Free Tier Includes:
- Basic listing with name, clinic, contact info
- Address with geolocation
- Qualifications/bio
- Searchable in directory

### Pro Tier Includes (£19.99/month):
- ✨ Everything in Free, plus:
- Profile photo
- Gallery of 5 images (clinic, treatment rooms, etc.)
- Priority placement in search results
- "PRO" badge on listing
- Featured services section (150 words)
- Special offers section
- Social media links
- Years of experience displayed
- Languages spoken
- Dedicated profile page
- Enhanced analytics (future: view counts, clicks)

---

## Phase 5: User Flows

### Flow 1: New Pro Practitioner
1. Fill out practitioner submission form
2. Select "Pro Tier" option
3. Submit form → data saved as "pending"
4. Redirect to Stripe Checkout (£19.99/month)
5. Complete payment
6. Webhook updates subscription_tier to "pro"
7. Admin approves listing
8. Pro listing goes live with all features

### Flow 2: Existing Practitioner Upgrades
1. Visit pricing page
2. Click "Upgrade to Pro"
3. Enter email to verify existing practitioner
4. Redirect to Stripe Checkout
5. Complete payment
6. Webhook updates subscription
7. Dashboard unlocked to add photos/features
8. Pro features immediately visible

### Flow 3: Manage Subscription
1. Practitioner logs into dashboard
2. Click "Manage Billing"
3. Redirect to Stripe Customer Portal
4. Update payment method or cancel subscription
5. Webhook handles updates

---

## Phase 6: Email Templates

### Welcome Email (Pro Upgrade)
```
Subject: Welcome to Afferentology Pro! 🎉

Your pro listing is now live with enhanced features:
- Priority placement in search results
- Profile photo and gallery
- Featured on our directory

Next steps:
1. Upload your profile photo
2. Add clinic images to your gallery
3. Complete your featured services section

[Go to Dashboard]
```

### Payment Failed Email
```
Subject: Payment Issue - Afferentology Pro

We couldn't process your payment. Your pro features will be paused in 7 days if not resolved.

[Update Payment Method]
```

### Subscription Cancelled
```
Subject: Your Pro Subscription Has Been Cancelled

Your pro listing will remain active until [end date].
After that, your listing will revert to the free tier.

[Reactivate Subscription]
```

---

## Phase 7: Testing Checklist

- [ ] Test Stripe Checkout in test mode
- [ ] Verify webhook receives events correctly
- [ ] Test subscription creation flow
- [ ] Test subscription cancellation
- [ ] Test payment failure handling
- [ ] Test upgrade from free to pro
- [ ] Test downgrade from pro to free
- [ ] Test image uploads to Supabase Storage
- [ ] Test search results prioritization
- [ ] Test Customer Portal access
- [ ] Verify RLS policies for pro features
- [ ] Test mobile responsiveness of enhanced listings

---

## Phase 8: Analytics & Metrics to Track

- Conversion rate (free → pro)
- Monthly recurring revenue (MRR)
- Churn rate
- Average subscription lifetime
- Most popular features among pro users
- Search result click-through rates (free vs pro)

---

## Phase 9: Future Enhancements (Post-Launch)

1. **Annual Billing** - 17% discount for annual commitment
2. **Premium Tier** - £49/month with featured homepage placement
3. **Referral Program** - Get 1 month free for each referral
4. **Analytics Dashboard** - Show practitioners their listing views, clicks
5. **Patient Reviews** - Allow patients to leave reviews (pro tier)
6. **Booking Integration** - Direct appointment booking through listing
7. **Video Introduction** - Allow 30-second intro video (premium tier)

---

## Estimated Timeline

- **Phase 1 (Database)**: 1-2 days
- **Phase 2 (Stripe Setup)**: 1 day
- **Phase 3 (Core Implementation)**: 5-7 days
- **Phase 4 (UI/UX Polish)**: 2-3 days
- **Phase 5 (Testing)**: 2-3 days
- **Total**: ~2-3 weeks

---

## Cost Breakdown

### Development Costs
- Developer time: 15-20 hours @ your rate

### Operating Costs
- Stripe fees: 1.5% + 20p per transaction (UK)
- Supabase storage for images: ~£0.02/GB/month
- Estimated monthly costs at 50 pro practitioners: £15-20/month

### Revenue Projections
- 50 pro practitioners @ £19.99/month = £999.50/month
- 100 pro practitioners @ £19.99/month = £1,999/month
- Less Stripe fees (~3%) = £1,940 net

---

## How to Start Implementation

When you're ready to implement this:

1. Say: "Let's implement the Pro Tier feature from the spec"
2. I'll create a TodoManager task list breaking this into phases
3. We'll start with Phase 1 (database) and work through systematically
4. Each phase will be tested before moving to the next

---

## Questions to Consider Before Implementation

1. **Pricing**: Is £19.99/month the right price point?
2. **Features**: Any features to add/remove from pro tier?
3. **Trial Period**: Offer 14-day free trial?
4. **Refund Policy**: Full refund within 30 days?
5. **Grandfathering**: Discount for existing practitioners?
6. **Marketing**: How will you promote pro tier to existing practitioners?

---

*Document Created: January 2026*
*Last Updated: January 2026*
