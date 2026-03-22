# SEO Guide — SV Banquet Halls

> **Site:** https://new-svbanquet-halls.vercel.app  
> **Business:** SV Banquet Halls, Mansoorabad, Hyderabad, Telangana  
> **Phone:** +91 6305 333 751  
> **Last updated:** 22 March 2026

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
| Google Search Console verification placeholder | `public/index.html` | ⏳ Needs code |
| Bing Webmaster Tools verification placeholder | `public/index.html` | ⏳ Needs code |
| OG image (`og-image.jpg`) | `public/og-image.jpg` | ❌ Not created |

### Per-page meta tags
| Route | Title | Description | Canonical |
|---|---|---|---|
| `/` | SV Banquet Halls \| Premier Banquet Hall in Hyderabad... | Mansoorabad venue, weddings, events... | `/` |
| `/planning` | Event Planning Guides & Tips \| SV Banquet Halls | Practical guides for planning events... | `/planning` |
| `/planning/how-to-choose-a-banquet-hall-hyderabad` | How to Choose a Banquet Hall in Hyderabad... | Practical advice on choosing... | `/planning/how-to-choose-...` |

---

## 2. Immediate Actions Required

### 2a. Create the OG social share image
- Dimensions: **1200 × 630 px** (ratio 1.91:1)
- Save as: `public/og-image.jpg`
- Content: Hall photo + logo + tagline
- Tool: Canva (free) → export as JPG < 300 KB
- Without this, WhatsApp / Facebook shares show a blank card

### 2b. Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → choose **URL prefix** → enter `https://new-svbanquet-halls.vercel.app`
3. Choose **HTML tag** verification method
4. Copy the `content` value from the tag shown
5. Open `public/index.html` and replace:
   ```
   REPLACE_WITH_GOOGLE_VERIFICATION_CODE
   ```
   with the copied value
6. Redeploy to Vercel
7. Click **Verify** in Search Console
8. Go to **Sitemaps** → submit: `https://new-svbanquet-halls.vercel.app/sitemap.xml`
9. Go to **URL Inspection** → enter `/` → click **Request Indexing**

### 2c. Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site → enter `https://new-svbanquet-halls.vercel.app`
3. Choose **HTML Meta Tag** verification
4. Copy the `content` value
5. Open `public/index.html` and replace:
   ```
   REPLACE_WITH_BING_VERIFICATION_CODE
   ```
   with the copied value
6. Redeploy → verify → submit sitemap
7. Go to **URL Submission** and paste your key URLs

### 2d. Submit via IndexNow (instant Bing/Yandex ping)
After deploying, open this URL in a browser once:
```
https://api.indexnow.org/indexnow?url=https://new-svbanquet-halls.vercel.app/&key=svbanquethalls2026indexnow
```
Also submit from inside Bing Webmaster Tools → **URL Submission → IndexNow**.

---

## 3. Google Business Profile

This is the **single highest-impact SEO action** for a local business. "Banquet hall near me" searches show the map pack — not website results.

### Setup
1. Go to https://business.google.com
2. Search for "SV Banquet Halls" — claim if already listed, or create new
3. Verify via postcard / phone call to the address

### Must fill in completely
- [ ] Business name: `SV Banquet Halls`
- [ ] Category: `Banquet hall` (primary) + `Event venue`, `Wedding venue` (secondary)
- [ ] Address: exact address in Mansoorabad, Hyderabad
- [ ] Phone: `+91 6305 333 751`
- [ ] Website: `https://new-svbanquet-halls.vercel.app`
- [ ] Hours: Mon–Sun 9 AM – 10 PM (or actual hours)
- [ ] Description: 750-char description mentioning weddings, receptions, birthday parties, corporate events, Hyderabad
- [ ] Photos: minimum 10 photos — hall interior, exterior, decorated setups, food, events

### Reviews strategy
- After every event, send client a WhatsApp message with the direct Google review link
- Respond to every review (positive and negative) within 48 hours
- **Do not** offer incentives for reviews (against Google policy)
- Target: 20+ reviews in first 6 months

---

## 4. Content & Blogging Strategy

Each `/planning` article targets a real search query. More articles = more entry points from Google.

### Existing articles
| Slug | Target keyword |
|---|---|
| `how-to-choose-a-banquet-hall-hyderabad` | "how to choose banquet hall Hyderabad" |

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
1. Add the route object to the `posts` array in `src/pages/Planning.js`
2. Create the content file in `src/content/`
3. Add a `<SEO>` tag with its specific title, description, and canonical
4. Add a `<url>` entry to `public/sitemap.xml` with today's `<lastmod>`
5. Re-submit sitemap in Google Search Console

---

## 5. Backlinks & Directory Listings

Backlinks from trusted sites signal authority to Google. Focus on local/event directories.

### Priority listings (free)
| Site | URL | Status |
|---|---|---|
| JustDial | https://www.justdial.com | ❌ Not listed |
| Sulekha | https://www.sulekha.com | ❌ Not listed |
| Indiamart | https://www.indiamart.com | ❌ Not listed |
| WedMeGood | https://www.wedmegood.com | ❌ Not listed |
| WeddingBazaar | https://www.weddingbazaar.com | ❌ Not listed |
| ShaadiSaga | https://www.shaadisaga.com | ❌ Not listed |
| Google Maps (via GBP) | — | ✅ Via Business Profile |

### What to include in each listing
- Exact business name: `SV Banquet Halls`
- Address exactly as on Google Business Profile (NAP consistency matters)
- Phone: `+91 6305 333 751`
- Website: `https://new-svbanquet-halls.vercel.app`
- 5–10 photos
- Category: Banquet hall / Event venue

---

## 6. Performance & Core Web Vitals

Google uses page speed as a ranking signal.

### Tools to run regularly
- **PageSpeed Insights:** https://pagespeed.web.dev — enter your Vercel URL
- **GTmetrix:** https://gtmetrix.com
- Target scores: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Known optimisation opportunities
- [ ] Compress and lazy-load images (hero video poster, gallery images)
- [ ] Add `loading="lazy"` to all `<img>` tags below the fold
- [ ] Ensure hero video has `preload="none"` or `preload="metadata"` on mobile
- [ ] Consider converting large images to `.webp` format

---

## 7. Ongoing Monthly Checklist

Do this on the 1st of each month:

- [ ] Open Google Search Console → check **Coverage** for crawl errors
- [ ] Check **Performance** → which queries are getting impressions/clicks
- [ ] Check **Core Web Vitals** report for any regressions
- [ ] Open Bing Webmaster Tools → check index status
- [ ] Add any new blog articles and update `sitemap.xml`
- [ ] Respond to any unanswered Google reviews
- [ ] Add new hall/event photos to Google Business Profile
- [ ] Check directory listings are still live and accurate

---

## 8. Tracking & Measurement

### Set up Google Analytics 4
1. Go to https://analytics.google.com → create property
2. Get the `G-XXXXXXXXXX` Measurement ID
3. Add to `public/index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### KPIs to track monthly
| Metric | Where | Target (6 months) |
|---|---|---|
| Organic search clicks | Google Search Console | 100+/month |
| Impressions | Google Search Console | 5,000+/month |
| Google Maps views | Google Business Profile | 500+/month |
| Phone calls from GBP | Google Business Profile | 20+/month |
| Website sessions | Google Analytics | 200+/month |
| Avg position | Google Search Console | < 30 for target keywords |

---

## 9. Key Files Reference

| File | Purpose |
|---|---|
| `public/index.html` | Global meta tags, JSON-LD schema, verification codes |
| `public/robots.txt` | Crawler instructions + sitemap pointer |
| `public/sitemap.xml` | All indexable URLs — update when adding pages |
| `public/svbanquethalls2026indexnow.txt` | IndexNow key for Bing/Yandex |
| `public/og-image.jpg` | ❌ Still needs to be created — 1200×630px |
| `src/components/SEO.js` | Reusable per-page Helmet component |
| `src/pages/Planning.js` | Blog listing — add new articles here |

---

> **Realistic timeline:** Technical SEO is set up. Google indexing takes 4–12 weeks.  
> Fastest traffic path: Google Business Profile + reviews + JustDial/Sulekha listings.
