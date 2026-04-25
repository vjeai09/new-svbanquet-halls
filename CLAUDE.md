# SV Banquet Halls — Claude Code Context

**Live:** https://www.svbanquethalls.com/ | **Deploy:** Vercel auto-deploy from `main`  
**Stack:** React 18 CRA, React Router v7, Bootstrap 5, MUI, Framer Motion  
**Business:** Banquet hall in Mansoorabad, Hyderabad — venue rental only (customers bring own caterer)

---

## Design Rules — CRITICAL

### ✅ DO: Modern Elegant
- Clean contemporary layouts, cinematic hero video
- Serif headers (Playfair Display) + sans-serif (Poppins)
- Traditional palette: ivory (#fdf6e3), vermillion (#8B0000), gold (#DAA520)
- Bilingual Telugu + English

### ❌ NEVER Suggest:
- **Bapu-Ramana traditional aesthetic** — User rejected. AI can't do authentic hand-drawn art. Stay modern.
- Publishing hall rental prices online — Call-for-quote strategy
- Email contact forms — WhatsApp/Call only
- Online booking system — Call-first model
- Internal photo gallery — External links only (Google Photos/FB/Insta)
- Google Reviews API — Manual reviews only

---

## What Already Exists (DO NOT Re-implement)

**Contact:** WhatsApp/Call cards only (NO forms). Pre-filled Telugu message.  
**Reviews:** 5 manual Google reviews in Swiper carousel. Trust stats: 10K+ guests, 4.0★, 8+ years.  
**Gallery:** External links only (Google Photos, FB, Insta). Shows "457+ reviews, 4.0 stars".  
**Pricing:** NOT displayed (intentional). "Call/WhatsApp for quote" model. Actual: ₹17K (non-A/C), ₹22-25K (A/C).  
**Services:** 7 expandable cards (Food, Events, Halls, Parking, Accessibility, Ceremonies, Amenities).  
**SEO:** Schema.org (EventVenue + WebSite), OG tags, GA4: G-HRKS08E0ZZ, Google/Bing verified.

**Known Issues:**
- 404 page missing (low priority for banquet hall traffic)
- `/planning` section has minimal content (TBD)

---

## File Structure

```
src/
├── App.js, App.css
├── components/
│   ├── Header.js, HeroVideo.js, VenueHighlightsBar.js
│   ├── About.js, Services.js, GalleryCTA.js
│   ├── Testimonials.js, Pricing.js, FAQ.js
│   ├── ContactForm.js, Footer.js
│   ├── BottomBar.js, StickyCTA.js
└── pages/Planning.js

public/
├── hero-fixed.mp4 (main video)
├── venues.jpg, foodnew.jpg, events.jpg
```

---

## Common Mistakes to Avoid

❌ Suggesting email forms (WhatsApp/Call only)  
❌ Google Reviews API (manual only)  
❌ Display pricing (call-for-quote model)  
❌ Internal gallery (external links)  
❌ Traditional Bapu-Ramana design (rejected)  
❌ 404 page as priority (low priority)

---

## Security (Inherits from Global)

- Parameterized queries (N/A — static site, no backend)
- Never hardcode secrets (`.env` for API keys)
- No forms = minimal input validation needed

---

## Deployment

```bash
npm start                # Local dev
git push origin main     # Auto-deploys to Vercel
```

**Note:** `gh-pages` scripts in package.json are legacy — NOT used.

---

## Legal Compliance

**Status:** Conditional Pass (78/100) — See memory for details  
**Full Audit:** `/docs/LEGAL-COMPLIANCE-AUDIT.md` (reference only)

---

## Workspace Configuration

**Token Optimization:** Ruflo MCP disabled for this project (configured in `.claude/settings.json`)  
**Full Guide:** `/docs/CLAUDE-CODE-WORKSPACE-SETUP.md`

**Use this workspace for:** Website dev, SEO, marketing, Instagram (Composio only)  
**Use `/Documents/brain` for:** Obsidian notes, Ruflo workflows, cross-project work

---

## Before Making Changes

1. Check this file for existing features
2. Run `node screenshot-review.js` if unsure (creates 14 screenshots)
3. Verify live site at https://www.svbanquethalls.com/
4. Test WhatsApp links, Telugu fonts, mobile animations

---

**Contact:** VijayaLakshmi | vjeai.tech@gmail.com  
**Last Updated:** 2026-04-25
