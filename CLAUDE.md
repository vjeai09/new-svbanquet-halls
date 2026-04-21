# SV Banquet Halls — Project Context for Claude Code

**Live Site:** https://www.svbanquethalls.com/  
**Deployment:** Vercel (auto-deploys from `main` branch)  
**Last Updated:** 2026-04-21

---

## Project Overview

Premier banquet hall website in Mansoorabad, Hyderabad. React SPA showcasing event venues for weddings, traditional Telugu ceremonies (బారసాల, లంగా ఓణీ), birthdays, and corporate events.

**Business Model:** WhatsApp/Call-first booking (no online booking system)

---

## Design Direction — CRITICAL

### ✅ DO: Modern Elegant with Cultural Accents
- Clean contemporary layouts
- Cinematic hero video
- Serif headers (Playfair Display) + sans-serif body (Poppins)
- Traditional Indian color palette (ivory/vermillion/gold)
- Minimal decorative elements (gold corner brackets, gradients)
- Bilingual content (Telugu + English)
- Premium event venue aesthetic (upscale hotel style)

### ❌ DO NOT SUGGEST:
- **Bapu-Ramana traditional aesthetic** — User explicitly rejected this. AI cannot authentically replicate hand-drawn borders, watercolor illustrations, kolam patterns. Keep modern design.
- Email contact forms — Business uses WhatsApp/Call only
- Hand-drawn elements, parchment textures, silk weaves
- Traditional ornate borders or illustrated dividers
- Any "artisan" or "hand-crafted" design elements

**Why:** AI-generated traditional artwork is low quality. Modern elegant design converts better for banquet hall business.

---

## What Already Exists (DO NOT Suggest Re-implementing)

### ✅ Contact & Booking
- **NO email form** — Contact section has WhatsApp/Call cards only
- Three contact methods: Call (+91 6305 333 751), WhatsApp (Telugu pre-filled), Visit Us
- Sticky CTAs: Desktop (right side circles) + Mobile (bottom bar)
- Pre-filled WhatsApp message: "నమస్కారం, హాల్ బుకింగ్ గురించి అడగాలనుకుంటున్నాను"

### ✅ Reviews & Testimonials
- **5 manual Google reviews** embedded in Testimonials section (Swiper carousel)
- Trust stats: 10,000+ guests, 4.0★ rating, 8+ years
- "Write a Review on Google" CTA button
- **NO live Google Reviews API integration** — manual only

### ✅ Gallery
- **NO internal photo gallery**
- Links to external: Google Photos, Facebook, Instagram
- Shows Google rating: 457+ reviews, 4.0 stars

### ✅ Pricing
- **NO pricing displayed on site**
- "Call or WhatsApp for pricing" model
- Lists what's included + flexible options
- CTA buttons: Call Us | WhatsApp Us

### ✅ Services
- 7 service categories with expandable details
- Food, Events, Halls, Parking, Accessibility, Traditional Ceremonies, Amenities
- All have Telugu + English titles

### ✅ SEO & Analytics
- Schema.org structured data (EventVenue + WebSite)
- Open Graph + Twitter Cards
- GA4: G-HRKS08E0ZZ
- Google Search Console + Bing verified
- IndexNow integration

---

## Known Issues

### ❌ 404 Page Missing
- Non-existent URLs show blank page with footer only
- No catch-all route in React Router
- **Status:** Low priority (user confirmed not important for banquet hall traffic)

### ⚠️ Planning Section
- Route exists (`/planning`, `/planning/:slug`) but content TBD
- Currently shows minimal content

---

## Tech Stack

```
Framework: React 18 (Create React App)
Routing: React Router DOM v7
Styling: CSS3 + Bootstrap 5
Animations: AOS, Framer Motion, Swiper
Typography: Playfair Display, Poppins, Noto Sans Telugu
Icons: Font Awesome, React Icons
SEO: React Helmet Async
Build: 4.4 MB optimized
```

**Key Dependencies:**
- `puppeteer` (for screenshot automation)
- `aos` (animate on scroll)
- `swiper` (carousels)
- `typewriter-effect` (hero text)

---

## File Structure (Key Components)

```
src/
├── App.js                      # Main router + error boundary
├── App.css                     # Global styles, color palette
├── components/
│   ├── Header.js               # Nav + top bar (hides on scroll)
│   ├── HeroVideo.js            # Cinematic video + typewriter
│   ├── VenueHighlightsBar.js   # Scrolling feature marquee
│   ├── About.js                # 8 years, 10k guests, stats
│   ├── Services.js             # 7 expandable service cards
│   ├── GalleryCTA.js           # Links to Google/FB/Insta photos
│   ├── Testimonials.js         # 5 manual reviews + trust stats
│   ├── Pricing.js              # What's included + flexible options
│   ├── FAQ.js                  # 8 questions (accordion)
│   ├── ContactForm.js          # WhatsApp/Call cards (NO form!)
│   ├── Footer.js               # Links, hours, copyright
│   ├── BottomBar.js            # Mobile sticky CTAs
│   └── StickyCTA.js            # Desktop sticky buttons
└── pages/
    └── Planning.js             # Event planning content

public/
├── hero-fixed.mp4              # Main hero video
├── venues.jpg                  # Venue photos
├── foodnew.jpg, events.jpg, etc.
```

---

## Color Palette

```css
--ivory:        #fdf6e3  /* Background */
--ivory-deep:   #f5e6c8
--vermillion:   #8B0000  /* Primary accent */
--turmeric:     #DAA520  /* Gold/highlights */
--ink:          #2C1810  /* Text */
--forest:       #2D5016  /* Secondary */
```

**Usage:**
- Background: Ivory
- Headers/CTAs: Vermillion (dark red)
- Buttons/highlights: Turmeric (gold)
- Text: Ink (dark brown)

---

## Business Information

**Name:** SV Banquet Halls  
**Tagline:** "Made Memories"  
**Phone:** +91 6305 333 751  
**Location:** Mansoorabad, LB Nagar, Hyderabad 500068  
**Hours:** Open daily 9 AM – 9 PM  
**Established:** 8+ years (since ~2018)

**Capacity:**
- Per floor (seated): 220 guests
- Total floors: 3 floors + terrace
- Single floor event: 220 seated
- Multi-floor floating: 660+ guests (guests use all floors for food, movement, etc.)

**Venue:**
- 2 A/C Halls
- 1 Non-A/C Hall (1st floor)
- Open terrace
- 2 kitchens, elevator, parking

**Google Rating:** 4.0 ★ (457+ reviews)

---

## Deployment Workflow

```bash
# Development
npm start              # Local: localhost:3000

# Production
git add .
git commit -m "..."
git push origin main   # Auto-deploys to Vercel
```

**Live URL:** https://www.svbanquethalls.com/  
**Platform:** Vercel (GitHub integration)  
**GitHub Repo:** https://github.com/vjeai09/new-svbanquet-halls

**Note:** `gh-pages` scripts in package.json are **legacy** — NOT used. Vercel handles deployment.

---

## When Working on This Project

### Before Suggesting Improvements:

1. **Check this file** for what already exists
2. **Check `/Users/tusshar/Documents/brain/MapsOfConent/svbanquethalls-complete-features.md`** for complete feature inventory
3. **Run screenshot script** if unsure: `node screenshot-review.js` (creates 14 screenshots in `/screenshots/`)
4. **Verify live site** at https://www.svbanquethalls.com/

### Common Mistakes to Avoid:

❌ Suggesting email contact forms (they don't want forms)  
❌ Suggesting Google Reviews API integration (they use manual reviews)  
❌ Suggesting pricing display (call-for-quote model)  
❌ Suggesting internal photo gallery (external links only)  
❌ Suggesting Bapu-Ramana traditional design (explicitly rejected)  
❌ Suggesting 404 page as high priority (low priority for this business)

### High-Value Improvements:

✅ Google My Business optimization  
✅ WhatsApp Business features (quick replies, catalog)  
✅ Customer photo gallery (with permission)  
✅ Faster booking response workflow  
✅ Content for `/planning` section  
✅ Performance optimization (image formats, lazy loading)

---

## Security Considerations

**Per user's global CLAUDE.md:**
- Always use parameterized queries
- Never hardcode secrets (use `.env`)
- Validate all inputs
- Generic error messages only
- Least privilege principle

**This Project:**
- No backend/database (static React site)
- No forms = no input validation needed (except analytics tracking)
- `.env` exists for any API keys
- No sensitive data handling

---

## Screenshot Automation

**Script:** `/screenshot-review.js`

```bash
node screenshot-review.js
```

**Creates 14 screenshots:**
- Desktop: Homepage sections, Planning page, 404 test
- Mobile: Homepage, Contact section

**Saves to:** `/screenshots/`

**Use when:** Verifying changes before suggesting improvements

---

## Key WhatsApp Links

**Primary CTA:**
```
https://wa.me/916305333751?text=నమస్కారం, హాల్ బుకింగ్ గురించి అడగాలనుకుంటున్నాను
```

**Translation:** "Hello, I'd like to inquire about hall booking"

**Used in:**
- All Contact CTAs
- Testimonials section
- Pricing section
- Sticky buttons (mobile + desktop)

---

## Testing Checklist

Before marking work complete:

- [ ] Test on mobile (Safari iOS, Chrome Android)
- [ ] Test WhatsApp links open correctly with pre-filled message
- [ ] Test phone links (`tel:`) work on mobile
- [ ] Verify Google Maps links open in app/browser
- [ ] Check Telugu fonts render correctly
- [ ] Verify animations don't lag on mobile
- [ ] Run screenshot script to capture changes
- [ ] Test on Vercel preview deploy before merging to main

---

## Contact

**Project Owner:** VijayaLakshmi  
**Email:** vjeai.tech@gmail.com  
**For Questions:** Check this file first, then Obsidian `/MapsOfConent/svbanquethalls-complete-features.md`

---

**Last Updated:** 2026-04-21  
**Audit Status:** ✅ Complete (code + screenshots reviewed)
