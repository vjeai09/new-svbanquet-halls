# SEO Guide — SV Banquet Halls

> **Site:** https://www.svbanquethalls.com
> **Business:** SV Banquet Halls, Mansoorabad, Hyderabad, Telangana
> **Phone:** +91 6305 333 751
> **Google Maps:** https://maps.app.goo.gl/u6fK3G8XXTpNi4zA9
> **Last updated:** 22 March 2026

---

## Table of Contents

1. [Current Status — What's Done](#1-current-status--whats-done)
2. [Pending Actions](#2-pending-actions)
3. [Google Business Profile](#3-google-business-profile)
4. [Content & Blogging Strategy](#4-content--blogging-strategy)
5. [Backlinks & Directory Listings](#5-backlinks--directory-listings)
6. [Performance & Core Web Vitals](#6-performance--core-web-vitals)
7. [Ongoing Monthly Checklist](#7-ongoing-monthly-checklist)
8. [Tracking & Measurement](#8-tracking--measurement)
9. [Key Files Reference](#9-key-files-reference)

---

## 1. Current Status — What's Done

### Technical SEO (all live on www.svbanquethalls.com)
| Item | File | Status |
|---|---|---|
| Title tag | `public/index.html` | ✅ Live |
| Meta description | `public/index.html` | ✅ Live |
| Canonical URL | `public/index.html` | ✅ Live |
| `robots` meta (`index, follow, max-image-preview:large`) | `public/index.html` | ✅ Live |
| Geo / ICBM meta tags (lat/lng Mansoorabad) | `public/index.html` | ✅ Live |
| Open Graph tags (Facebook/WhatsApp/LinkedIn) | `public/index.html` | ✅ Live |
| Twitter/X card tags | `public/index.html` | ✅ Live |
| OG social share image (1200×630px) | `public/og-image.jpg` | ✅ Live |
| JSON-LD — EventVenue + WebSite schema | `public/index.html` | ✅ Live |
| JSON-LD — GBP linked in `hasMap` + `sameAs` | `public/index.html` | ✅ Live |
| JSON-LD — closing time corrected to 21:30 | `public/index.html` | ✅ Live |
| Sitemap | `public/sitemap.xml` | ✅ Live |
| robots.txt with Sitemap directive | `public/robots.txt` | ✅ Live |
| Per-page SEO component (`react-helmet-async`) | `src/components/SEO.js` | ✅ Live |
| Google Search Console verified | `public/google67472b5c6b77ea12.html` | ✅ Verified |
| Bing Webmaster Tools verified | `public/BingSiteAuth.xml` | ✅ Verified |
| IndexNow key file (Bing/Yandex) | `public/c903b18e0c304c79a79e8645789a28c2.txt` | ✅ Live |
| IndexNow 3 URLs submitted (HTTP 202) | API call | ✅ Done |
| Google Analytics 4 (`G-HRKS08E0ZZ`) | `public/index.html` | ✅ Live |
| Google Business Profile linked in schema | `public/index.html` | ✅ Live |

### Search Engine Setup
| Platform | Status | Notes |
|---|---|---|
| Google Search Console | ✅ Verified | Sitemap submitted, 3 pages discovered |
| Bing Webmaster Tools | ✅ Verified | Sitemap submitted, IndexNow enabled |
| Google Analytics 4 | ✅ Live | ID: `G-HRKS08E0ZZ` — data in 24–48h |
| Google Business Profile | ✅ Exists | 457 reviews, 4.0★, website linked |
| IndexNow | ✅ Submitted | 3 URLs accepted (HTTP 202) |

### Per-page SEO tags
| Route | Title | Canonical |
|---|---|---|
| `/` | SV Banquet Halls \| Premier Banquet Hall in Hyderabad for Weddings & Events | `https://www.svbanquethalls.com/` |
| `/planning` | Event Planning Guides & Tips \| SV Banquet Halls | `https://www.svbanquethalls.com/planning` |
| `/planning/how-to-choose-a-banquet-hall-hyderabad` | How to Choose a Banquet Hall in Hyderabad... | `https://www.svbanquethalls.com/planning/how-to-choose-...` |

---

## 2. Pending Actions

These are the remaining tasks ordered by impact:

| Priority | Task | Impact |
|---|---|---|
| 🔴 High | Add more photos to Google Business Profile (min 10) | More GBP visibility |
| 🔴 High | Write GBP business description (750 chars) | Local SEO |
| 🔴 High | JustDial listing | Backlink + leads |
| 🔴 High | Sulekha listing | Backlink + leads |
| 🟡 Medium | WedMeGood listing | Wedding traffic |
| 🟡 Medium | WeddingBazaar listing | Wedding traffic |
| 🟡 Medium | ShaadiSaga listing | Wedding traffic |
| 🟡 Medium | Write 2nd blog article in `/planning` | SEO content |
| 🟡 Medium | Run PageSpeed Insights + fix LCP issues | Core Web Vitals |
| 🟢 Low | Indiamart listing | General backlink |
| 🟢 Low | Add FAQ schema to homepage | Rich snippets |

### Re-submit IndexNow after any new deploy
After each new page or content update, run:
```bash
curl -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "www.svbanquethalls.com",
    "key": "c903b18e0c304c79a79e8645789a28c2",
    "keyLocation": "https://www.svbanquethalls.com/c903b18e0c304c79a79e8645789a28c2.txt",
    "urlList": [
      "https://www.svbanquethalls.com/",
      "https://www.svbanquethalls.com/planning",
      "https://www.svbanquethalls.com/planning/how-to-choose-a-banquet-hall-hyderabad"
    ]
  }'
```

---

## 3. Google Business Profile

**Status: ✅ Exists — 457 reviews, 4.0★**
GBP URL: https://maps.app.goo.gl/u6fK3G8XXTpNi4zA9

### Still to complete on GBP
- [ ] Business description — 750 chars mentioning: weddings, receptions, birthday parties, corporate events, Mansoorabad, Hyderabad, elegant, affordable
- [ ] Verify website is `https://www.svbanquethalls.com` (not old Vercel URL)
- [ ] Add secondary categories: `Event venue`, `Wedding venue`
- [ ] Upload minimum 10 photos — interior, exterior, decorated setups, food, crowd
- [ ] Respond to all unanswered reviews

### Reviews strategy
- After every event, WhatsApp each client the direct review link
- Respond to every review (positive and negative) within 48 hours
- **Do not** offer incentives for reviews (against Google policy)
- Target: maintain 4.0+ rating, grow to 600+ reviews by end of 2026

---

## 4. Content & Blogging Strategy

Each `/planning` article targets a real search query. More articles = more Google entry points.

### Existing articles
| Slug | Target keyword | Status |
|---|---|---|
| `how-to-choose-a-banquet-hall-hyderabad` | "how to choose banquet hall Hyderabad" | ✅ Live |

### Suggested next articles (high local intent)
| Article title | Target keyword | Priority |
|---|---|---|
| Best Banquet Halls in Mansoorabad Hyderabad | "banquet halls Mansoorabad" | 🔴 High |
| Wedding Hall Checklist: What to Look For Before Booking | "wedding hall checklist Hyderabad" | 🔴 High |
| Birthday Party Venues in Hyderabad — What to Expect | "birthday party venues Hyderabad" | 🔴 High |
| How Much Does a Banquet Hall Cost in Hyderabad? | "banquet hall cost Hyderabad" | 🟡 Medium |
| Corporate Event Venues in Hyderabad — A Practical Guide | "corporate event venue Hyderabad" | 🟡 Medium |
| Outdoor vs Indoor Venues for Weddings in Hyderabad | "outdoor wedding venue Hyderabad" | 🟡 Medium |

### When adding a new article
1. Add entry to `posts` array in `src/pages/Planning.js`
2. Create content file in `src/content/`
3. Add `<SEO>` tag with specific title, description, canonical
4. Add `<url>` entry to `public/sitemap.xml` with today's `<lastmod>`
5. Re-submit sitemap in Google Search Console
6. Run IndexNow API call (see Section 2)

---

## 5. Backlinks & Directory Listings

### Priority listings
| Site | URL | Status |
|---|---|---|
| JustDial | https://www.justdial.com | ❌ Not listed |
| Sulekha | https://www.sulekha.com | ❌ Not listed |
| WedMeGood | https://www.wedmegood.com | ❌ Not listed |
| WeddingBazaar | https://www.weddingbazaar.com | ❌ Not listed |
| ShaadiSaga | https://www.shaadisaga.com | ❌ Not listed |
| Indiamart | https://www.indiamart.com | ❌ Not listed |
| Google Maps (via GBP) | https://maps.app.goo.gl/u6fK3G8XXTpNi4zA9 | ✅ Live |

### What to include in each listing (NAP must be identical)
- **Name:** `SV Banquet Halls`
- **Address:** `Ragala Enclave, Sri Ram Hills Colony, Mansoorabad, Hyderabad, Telangana 500068`
- **Phone:** `+91 6305 333 751`
- **Website:** `https://www.svbanquethalls.com`
- **Photos:** 5–10 images
- **Category:** Banquet hall / Event venue

---

## 6. Performance & Core Web Vitals

Google uses page speed as a ranking signal.

### Tools
- **PageSpeed Insights:** https://pagespeed.web.dev → enter `https://www.svbanquethalls.com`
- **GTmetrix:** https://gtmetrix.com
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Known optimisation opportunities
- [ ] Compress and lazy-load images (hero video poster, gallery images)
- [ ] Add `loading="lazy"` to all `<img>` tags below the fold
- [ ] Ensure hero video has `preload="none"` or `preload="metadata"` on mobile
- [ ] Convert large images to `.webp` format

---

## 7. Ongoing Monthly Checklist

Do this on the 1st of each month:

- [ ] Google Search Console → check **Coverage** for crawl errors
- [ ] Google Search Console → check **Performance** → impressions/clicks per query
- [ ] Google Search Console → check **Core Web Vitals** report
- [ ] Bing Webmaster Tools → check index status + Site Scan
- [ ] Google Analytics → check sessions, bounce rate, top pages
- [ ] Google Business Profile → add new photos, respond to new reviews
- [ ] Add any new blog articles + update `sitemap.xml`
- [ ] Re-run IndexNow API call after any content updates
- [ ] Check all directory listings are still live and accurate

---

## 8. Tracking & Measurement

### Active tools
| Tool | Status | ID / URL |
|---|---|---|
| Google Analytics 4 | ✅ Live | `G-HRKS08E0ZZ` |
| Google Search Console | ✅ Verified | https://search.google.com/search-console |
| Bing Webmaster Tools | ✅ Verified | https://www.bing.com/webmasters |
| Google Business Profile | ✅ Live | https://maps.app.goo.gl/u6fK3G8XXTpNi4zA9 |

### KPIs to track monthly
| Metric | Where | Target (6 months) |
|---|---|---|
| Organic search clicks | Google Search Console | 100+/month |
| Impressions | Google Search Console | 5,000+/month |
| Avg position | Google Search Console | < 30 for target keywords |
| Google Maps views | Google Business Profile | 500+/month |
| Phone calls from GBP | Google Business Profile | 20+/month |
| Website sessions | Google Analytics 4 | 200+/month |

---

## 9. Key Files Reference

| File | Purpose | Status |
|---|---|---|
| `public/index.html` | All meta tags, GA4, JSON-LD schema, verification codes | ✅ |
| `public/robots.txt` | Crawler instructions + Sitemap pointer | ✅ |
| `public/sitemap.xml` | All indexable URLs — update when adding pages | ✅ |
| `public/og-image.jpg` | 1200×630px social share image | ✅ |
| `public/google67472b5c6b77ea12.html` | Google Search Console verification file | ✅ |
| `public/BingSiteAuth.xml` | Bing Webmaster Tools verification file | ✅ |
| `public/c903b18e0c304c79a79e8645789a28c2.txt` | IndexNow key file (Bing/Yandex) | ✅ |
| `src/components/SEO.js` | Reusable per-page Helmet component | ✅ |
| `src/pages/Planning.js` | Blog listing — add new articles here | ✅ |

---

> **Realistic timeline:** All technical SEO is live. Google indexing takes 4–12 weeks.
> **Fastest traffic path:** Google Business Profile reviews + JustDial/Sulekha listings.
> **Next big win:** Write 2–3 more blog articles targeting local keywords.

---

## Table of Contents

1. [What's Already Implemented](#1-whats-already-implemented)
2. [Immediate Actions Required](#2-immediate-actions-required)
3. [Google Business Profile](#3-google-business-profile)
4. [Content & Blogging Strategy](#4-content--blogging-strategy)
5. [Backlinks & Directory Listings](#5-backlinks--directory-listings)
6. [Performance & Core Web Vitals](#6-performance--core-web-vitals)
7. [Ongoing Monthly Checklist](#7-ongoing-monthly-checklist)
8. [Tracking & Measurement](#8-tracking--measurement)
9. [Key Files Reference](#9-key-files-reference)

---

## 1. What's Already Implemented

### Technical SEO (code)
| Item | File | Status |
|---|---|---|
| Title tag | `public/index.html` | ✅ Done |
| Meta description | `public/index.html` | ✅ Done |
| Canonical URL | `public/index.html` | ✅ Done |
| `robots` meta (`index, follow`) | `public/index.html` | ✅ Done |
| Sitemap | `public/sitemap.xml` | ✅ Done |
| robots.txt with Sitemap directive | `public/robots.txt` | ✅ Done |
| Open Graph tags (Facebook/WhatsApp/LinkedIn) | `public/index.html` | ✅ Done |
| Twitter/X card tags | `public/index.html` | ✅ Done |
| JSON-LD — EventVenue + WebSite schema | `public/index.html` | ✅ Done |
| Geo / ICBM meta tags | `public/index.html` | ✅ Done |
| Per-page SEO component (`react-helmet-async`) | `src/components/SEO.js` | ✅ Done |
| IndexNow key file + meta tag | `public/svbanquethalls2026indexnow.txt` | ✅ Done |
| Google Search Console verification placeholder | `public/index.html` | ✅ Done |
| Bing Webmaster Tools verification placeholder | `public/index.html` | ✅ Done |
| OG image (`og-image.jpg`) | `public/og-image.jpg` | ❌ Not created |

### Per-page meta tags
| Route | Title | Description | Canonical |
|---|---|---|---|
| `/` | SV Banquet Halls \| Premier Banquet Hall in Hyderabad... | Mansoorabad venue, weddings, events... | `/` |
| `/planning` | Event Planning Guides & Tips \| SV Banquet Halls | Practical guides for planning events... | `/planning` |
| `/planning/how-to-choose-a-banquet-hall-hyderabad` | How to Choose a Banquet Hall in Hyderabad... | Practical advice on choosing... | `/planning/how-to-choose-...` |

