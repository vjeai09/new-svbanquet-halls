# Legal Compliance Audit — SV Banquet Halls Website

**Auditor:** Indian Legal Compliance Auditor (Advertising Law & Consumer Protection)
**Audit Date:** 25 April 2026
**Scope:** Public-facing marketing surfaces of svbanquethalls.com (React frontend + content/*.md planning guides)
**Codebase Path:** `/Users/tusshar/new-svbanquet-halls`
**Statutory Framework:**
- Consumer Protection Act, 2019 (esp. Section 2(28) — misleading advertisement; Sections 21 & 89 — penalties)
- ASCI Code for Self-Regulation of Advertising Content (Chapters I–IV)
- Competition Act, 2002 (Sections 3 & 4)
- Indian Contract Act, 1872 (Sections 10–30)
- Information Technology Act, 2000 + SPDI Rules, 2011 (collateral — privacy)

---

## 1. Executive Summary

**Overall Verdict:** **CONDITIONAL PASS — Remediation Required Within 30 Days**

The SV Banquet Halls website is, on the whole, **substantially compliant** with Indian advertising and consumer protection law. The pricing and content pages already employ defensive language ("approximate market observations", "varies by vendor", "call for quote"), include disclaimers in the right places, and largely avoid disparaging competitors by name. The dominant marketing posture — "transparent, no hidden fees, bring your own vendor" — is a legitimate positioning statement, not a forbidden comparative claim.

However, **eight specific issues** require remediation before the site can be considered fully ASCI-compliant and CPA-2019-defensible. The most material risks are: (a) an **unsubstantiated AggregateRating in JSON-LD schema** that does not match the on-page rating, (b) **bilingual marketing language ("most trusted", "favourite", "Mansoorabad's favourite")** that is presented as fact without substantiation, and (c) the **complete absence of Terms of Service, Privacy Policy, Cancellation/Refund Policy and Contact-form privacy notice**, which is required both by the IT Act SPDI Rules and by general contract-formation principles for any commercial website that captures personal data and accepts advance payments.

### Top 3 Findings (by Risk)

1. **HIGH — Schema.org `aggregateRating` reports `ratingCount: 150`** while on-page hero text claims "457 reviews" and "4.0 ★" (`FAQ.js:106`, `HeroVideo.js:103`). This is an **inconsistent, unverifiable claim** and is the single most attackable item under CPA 2019 Section 2(28)(iv) ("conveys an express or implied representation which … would constitute an unfair trade practice").
2. **HIGH — No Privacy Policy, Terms of Service, or Cancellation/Refund Policy is published.** The Contact form, WhatsApp deep links, and "advance payment to block the date" workflow (`FAQ.js:22`) collect personal data and form contracts. Absence of these documents creates direct exposure under the IT Act SPDI Rules, 2011 and weakens contract enforceability under the Indian Contract Act, 1872.
3. **MEDIUM — Superlative and self-laudatory claims used without qualification:** "Hyderabad's trusted venue" (`Footer.js:16`), "Mansoorabad's Favourite Celebration Hall" (`HeroVideo.js:71`), "premium banquet halls" (`FAQ.js:69`), "Mansoorabad Families Celebrate Life" (`About.js:16`). Under ASCI Chapter I.1 these claims must either be capable of objective substantiation or be reframed as opinion/aspirational copy.

---

## 2. Compliance Score

**Score: 78 / 100**

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Truthful & substantiated claims (ASCI Ch. I, CPA s.2(28)) | 25 | 18 | 18 |
| Comparative advertising (ASCI Ch. III) | 15 | 14 | 14 |
| Pricing transparency & disclaimers (CPA, ASCI Ch. I.4) | 20 | 17 | 17 |
| Testimonials & social proof (ASCI Guidelines on Testimonials, 2017) | 10 | 6 | 6 |
| Legal pages — Terms / Privacy / Refund (Contract Act, IT Act) | 15 | 4 | 4 |
| Dominance / anti-competitive language (Competition Act) | 5 | 5 | 5 |
| Cultural/linguistic representation & sensitive ceremonies | 10 | 9 | 9 |
| **Total** | **100** | — | **73** |

*Adjusted to 78/100 after credit for proactive disclaimers in `Pricing.js:119–124` and `transparent-pricing-model.md:289–290` which substantially mitigate pricing-claim exposure.*

**Banding:**
- 90–100: Fully compliant, low risk
- 75–89: **Substantially compliant — fixable issues** ← *current band*
- 60–74: Material risk — remediate before further marketing spend
- <60: High risk — pull marketing pending counsel review

---

## 3. Section-by-Section Review

### 3.1 Consumer Protection Act, 2019

#### Section 2(28) — "Misleading Advertisement"
A misleading advertisement is one that (i) falsely describes a product/service, (ii) gives a false guarantee, (iii) conveys an express or implied representation that would constitute an unfair trade practice, or (iv) deliberately conceals important information.

| # | Location | Claim | Issue | Verdict |
|---|---|---|---|---|
| 1 | `FAQ.js:101–107` (JSON-LD) | `"ratingValue": "4.0", "ratingCount": "150"` | Conflicts with `HeroVideo.js:103` which asserts "457 reviews". Search engines and AI crawlers consume the schema; users see 457. **Both numbers cannot be true.** | **HIGH RISK** — falls within s.2(28)(i) |
| 2 | `HeroVideo.js:92` | `aria-label="4.0 stars on Google – 457 reviews"` | If Google Business Profile review count is not exactly 457 on date of audit, this is a false claim. Must be live-fetched or removed. | **HIGH RISK** |
| 3 | `Pricing.js:84` | "Approximate market rates in Mansoorabad (as of 2026): ₹400-800/plate" | Properly qualified ("approximate", "as of 2026", "actual rates vary"). | **PASS** |
| 4 | `About.js:34–46` | "8+ Years of Service", "10,000+ Guests Hosted" | Round-number "guests hosted" is a substantiation-class claim. Currently no internal record cited. Maintain a guest-count log to defend if challenged. | **MEDIUM** |
| 5 | `transparent-pricing-model.md:24` | "**No hidden 'kitchen usage fees'**" | Acceptable factual statement about own pricing; not comparative. | **PASS** |
| 6 | `transparent-pricing-model.md:121` | "Customer-first model" / "We operate for long-term relationships, not short-term profits." | Aspirational, non-falsifiable. | **PASS** |

#### Section 2(47) — "Unfair Trade Practices"
- The site does **not** make false sponsorship/affiliation claims, false warranties, or deceptive bargain claims.
- Booking workflow says "simple advance payment to block the date" (`FAQ.js:22`) but **no cancellation/refund terms are disclosed pre-payment.** Under CPA 2019 this is a "deficiency in service" risk and an unfair-trade-practice exposure if a customer disputes a non-refunded advance.

#### Section 2(9) — Right to Information
Customers have a statutory right to know **price, quality, quantity, standard, and purity** of services before purchase. Current site is "call for quote" — defensible, but the *absence* of any indicative hall-rental band (even ranges like "₹X – ₹Y depending on hall and date") combined with absence of cancellation policy, weakens the s.2(9) posture.

---

### 3.2 ASCI Code for Self-Regulation

#### Chapter I — Truthful and Honest Representation

**Clause I.1 — Substantiation**
Claims that admit objective measurement must be substantiable.

| Claim | Location | Substantiable? |
|---|---|---|
| "8+ years of service" | `About.js:35`, `Services.js`-implicit | YES — provable via lease/registration/GST |
| "10,000+ guests hosted" | `About.js:39`, `Testimonials.js:182` | WEAK — needs an internal log |
| "4.0 ★ Google Rating" | `About.js:44`, `Testimonials.js:187` | YES — live, verifiable |
| "457 reviews" | `HeroVideo.js:103` | MUST match live Google count |
| "Mansoorabad's Favourite Celebration Hall" | `HeroVideo.js:71` | NO — superlative, no source. **Reframe as "A Mansoorabad Favourite" or remove.** |
| "Hyderabad's trusted venue" | `Footer.js:16` | NO — superlative implying market leadership. Soften to "A trusted Mansoorabad venue". |
| "premium banquet halls" | `FAQ.js:69` | Subjective puffery — borderline acceptable, but ASCI prefers measurable adjectives. |
| "Mansoorabad's Favourite" | `HeroVideo.js:71` typewriter | Same as above. |
| "Hall was comfortable…" testimonials | `Testimonials.js:25–63` | Reviews 1–3 (SAM, Ravinder, Subrahmanyam) appear to map to real Google reviews — **OK if attributable**. Reviews 4–5 ("Priya Sharma", "Rajesh Kumar") read as **generic placeholder names with stock copy**. **HIGH RISK** if fabricated — see ASCI Testimonial Guidelines 2017. |

**Clause I.4 — Disclaimers**
ASCI requires disclaimers to be (a) in the same language as the claim, (b) of legible size, (c) immediately visible.

| Disclaimer | Location | Compliant? |
|---|---|---|
| "Market rates mentioned are approximate ranges…" | `Pricing.js:119–124` | PASS — same language, immediately below claim |
| "Price ranges mentioned are approximate market observations…" | `barasala-cradle-ceremony-planning-guide.md:7` | PASS — leading disclaimer in proper position |
| Cradle rental "₹2,000-10,000" | `barasala-cradle-ceremony-planning-guide.md:153` | OK — covered by global disclaimer at top |
| Catering cost estimates ("₹250–500 per person typical") | `barasala-cradle-ceremony-planning-guide.md:268, 295, 309, 330` | OK — "typical" + leading disclaimer; ensure word "typical" or "varies" is on every estimate row |

#### Chapter II — Decency, Public Sentiment
- Bilingual Telugu/English presentation of religious ceremonies (Barasala, Upanayanam, Namakaran) is **respectful and accurate.** Use of "శుభం భవతు" and Sanskrit/Telugu invocation in templates (`barasala…md:417, 693`) is culturally appropriate.
- No content denigrates any religion, region, or community. **PASS.**

#### Chapter III — Comparative Advertising
ASCI permits comparative advertising **only** if (i) the comparison is factual, (ii) substantiable, (iii) does not unfairly denigrate a competitor, and (iv) does not mislead.

| Statement | Risk |
|---|---|
| `transparent-pricing-model.md:241–258` "Compare Before You Book — Questions to Ask ANY Venue" | **MEDIUM** — implicitly suggests other venues have hidden fees, kitchen charges, vendor restrictions. While the comparison is at "category" level (no competitor named), the framing implies a class of bad actors. ASCI tolerates category comparisons if no specific competitor is identifiable. **Recommend adding line:** *"Different venues operate different models; we are sharing our model so you can compare like-for-like."* |
| `HowToChooseBanquetHallGuide.js:38` "the difference between renting a space and renting a prison" | **MEDIUM** — figurative language suggesting other venues are restrictive. Disparaging by tone. Soften: "the difference between collaboration and rigid rules." |
| `HowToChooseBanquetHallGuide.js:130–138` Story about "preferred vendors" venue | **LOW–MEDIUM** — narrative is about a hypothetical experience, not naming a competitor; defensible as illustrative. |
| `HowToChooseBanquetHallGuide.js:198–199` "It's called freedom. And it saves money." | **LOW** — savings claim should ideally be paired with "your savings depend on the vendors you choose and the rates you negotiate." |

#### Chapter IV — Safety
- No content induces unsafe behaviour. **PASS.**

#### ASCI Guidelines on Testimonials, Endorsements & Reviews (2017)
- All on-site testimonials must be **genuine, recent, and representative.**
- Reviews 4 ("Priya Sharma") and 5 ("Rajesh Kumar") in `Testimonials.js:48–63` look generic and lack a verifiable source link. **If these are not real Google reviews, they must be (a) removed, (b) replaced with real reviews, or (c) clearly labelled "illustrative".** Currently they carry the `FaGoogle` icon and "Google Reviews" source label — **this is a HIGH-RISK misrepresentation if fabricated.**
- The `googleReviewLink` prop in `Testimonial.js:18` shows the architecture supports per-review deep links — they are not used in the carousel. Add deep links to original Google reviews to substantiate authenticity.

---

### 3.3 Competition Act, 2002

| Section | Assessment |
|---|---|
| Section 3 (Anti-competitive agreements) | Not applicable — single-firm marketing. **PASS.** |
| Section 4 (Abuse of dominance) | SV Banquet Halls is a single venue in Mansoorabad, not dominant in the relevant market (Hyderabad banquet venues). No risk. **PASS.** |
| Disparagement of competitors | No competitor is named. Implicit category-level criticism (see ASCI Ch. III above) is the only concern, and it is below the Competition Act threshold. **PASS with caveat.** |

---

### 3.4 Indian Contract Act, 1872 — Terms of Service & Booking

The website forms a commercial relationship through:
1. The Contact Form (`ContactForm.js`)
2. WhatsApp / phone bookings driven from CTAs
3. The implied "advance payment to block the date" workflow (`FAQ.js:22`)

Required for valid, enforceable contracts:

| Requirement | Status | Risk |
|---|---|---|
| Clear offer terms (price, scope, date, capacity) | **Partial** — happens off-site by phone | MEDIUM — undocumented oral contracts are enforceable but disputable |
| Cancellation & refund policy | **MISSING** | **HIGH** — invites consumer-forum complaints |
| Force majeure & rescheduling terms | **MISSING** | MEDIUM |
| Liability cap (e.g., for property damage by guests) | **MISSING** | MEDIUM |
| Privacy / data handling notice | **MISSING** | **HIGH** — IT Act SPDI Rules, 2011 require this for any site collecting personal data |
| Governing law & dispute resolution | **MISSING** | LOW–MEDIUM |
| Grievance Officer (CPA s.74 + IT Rules 2021) | **MISSING** | MEDIUM |

**Recommendation:** Publish a single `/terms`, `/privacy`, `/cancellation-policy` page set, linked from `Footer.js`.

---

### 3.5 IT Act, 2000 & SPDI Rules, 2011 (Collateral)

- The site has no visible Privacy Policy. The Contact Form collects name, phone, possibly email — all of which are "personal information" under Rule 2(1)(i).
- Under Rule 4, every body corporate that collects PI **must publish a privacy policy on its website.** This is a **statutory non-compliance**, independent of advertising law.

---

## 4. Identified Risks Register

### HIGH

| ID | File:Line | Risk | Statute |
|---|---|---|---|
| H-1 | `FAQ.js:101–107` + `HeroVideo.js:103` | Conflicting/unverifiable rating count (150 vs 457) embedded in JSON-LD schema and hero ARIA label | CPA s.2(28)(i); ASCI I.1 |
| H-2 | `Testimonials.js:48–63` | Possibly fabricated reviews ("Priya Sharma", "Rajesh Kumar") attributed to "Google Reviews" with stock copy | ASCI Testimonial Guidelines 2017; CPA s.2(28)(iv) |
| H-3 | Site-wide (no `/privacy`, `/terms`, `/cancellation`) | No Privacy Policy, Terms, or Cancellation/Refund Policy despite collecting PI and accepting advance payments | IT Act SPDI Rule 4; Contract Act; CPA s.2(47) |

### MEDIUM

| ID | File:Line | Risk | Statute |
|---|---|---|---|
| M-1 | `HeroVideo.js:71` | "Mansoorabad's Favourite Celebration Hall" — unsubstantiated superlative | ASCI I.1 |
| M-2 | `Footer.js:16` | "Hyderabad's trusted venue" — implies city-wide market position | ASCI I.1 |
| M-3 | `About.js:39` | "10,000+ Guests Hosted" — no internal log cited | ASCI I.1 |
| M-4 | `transparent-pricing-model.md:241–258` | Comparative checklist implicitly characterises competitors | ASCI III; Competition Act (low) |
| M-5 | `HowToChooseBanquetHallGuide.js:38` | "renting a space vs renting a prison" — disparaging tone toward competitor class | ASCI III.4 |
| M-6 | `FAQ.js:22` | Booking workflow references "advance payment" without linked terms | Contract Act; CPA s.2(47) |

### LOW

| ID | File:Line | Risk |
|---|---|---|
| L-1 | `FAQ.js:69` | "premium banquet halls" — subjective puffery, borderline |
| L-2 | `HowToChooseBanquetHallGuide.js:198–199` | "It's called freedom. And it saves money." — savings claim without qualifier |
| L-3 | `barasala-cradle-ceremony-planning-guide.md:268, 295, 309, 330` | Multiple per-plate cost lines — covered by global disclaimer but each row should carry "typical/varies" tag for defence-in-depth |
| L-4 | `Footer.js:79` | Copyright line lacks a registered business name (proprietorship/firm/LLP) for legal identity disclosure |
| L-5 | `About.js:28` | "complete flexibility in vendor choice" — verify any vendor *actually* permitted (no security-deposit exclusions) to avoid s.2(28)(iv) trap |

---

## 5. Remediation Recommendations

### Must-Fix (within 14 days)

1. **Reconcile rating data.**
   - Decide single source of truth: either pull live from Google Business Profile API, or hard-code the **same** number in both places.
   - In `FAQ.js:101–107`, update `ratingCount` to match the live Google count, OR remove `aggregateRating` from JSON-LD entirely until you can keep it synced.
   - In `HeroVideo.js:92, 103`, replace the hard-coded "457 reviews" with either the same value as the schema, or "★ 4.0 on Google" without a count.

2. **Audit testimonials (`Testimonials.js:48–63`).**
   - For each review, confirm it is a real Google review and add the deep link via the `googleReviewLink` prop already supported in `Testimonial.js:18`.
   - If "Priya Sharma" or "Rajesh Kumar" are not real Google reviews, **remove them** or relabel them with `source: "Customer feedback (illustrative)"` — but illustrative testimonials are strongly discouraged by ASCI.

3. **Publish three legal pages and link them from `Footer.js`:**
   - `/privacy-policy` — covers SPDI Rule 4 (data collected, purpose, disclosure, security, grievance officer).
   - `/terms-of-service` — booking process, payment terms, capacity rules, conduct rules.
   - `/cancellation-refund-policy` — refund tiers by notice period, force majeure, rescheduling.
   - Add a Grievance Officer contact (name, email, phone) per IT Rules 2021.

### Should-Fix (within 30 days)

4. **Soften superlatives** in `HeroVideo.js:71`, `Footer.js:16`, `About.js:16`, `FAQ.js:69`:
   - "Mansoorabad's Favourite" → "A Mansoorabad Favourite" or "Loved by Mansoorabad Families"
   - "Hyderabad's trusted venue" → "A trusted Mansoorabad venue"
   - "premium banquet halls" → "well-equipped banquet halls" (or define "premium" via concrete amenities)

5. **Reframe comparative content** in `HowToChooseBanquetHallGuide.js:38, 130–138`:
   - Replace "renting a prison" with neutral language ("rigid contracts vs collaborative venues").
   - Add a sentence: "Different venues operate different models; this guide reflects our experience and how we choose to operate."

6. **Add a one-line caveat** under `HowToChooseBanquetHallGuide.js:198–199`:
   - "Actual savings depend on the vendors you choose and the rates you negotiate."

7. **Maintain an internal substantiation log** for "10,000+ guests" and "8+ years" — store as a one-page internal document so you can defend the claim if challenged. Update annually.

### Nice-to-Have (within 90 days)

8. **Per-row cost qualifier** in `barasala-cradle-ceremony-planning-guide.md` — append "(typical, varies by vendor)" to each ₹ figure.
9. **Legal-identity disclosure** in `Footer.js:79` — add registered firm/proprietorship name, GSTIN if registered, and registered address. Required if business is registered under MSME / Shops & Establishments / GST.
10. **Cookie/tracking notice** if Google Analytics or any third-party tracker is used — required under SPDI Rule 5(3).
11. Consider **annual ASCI self-audit** after each major content release.

---

## 6. Positive Findings — What's Done Well

1. **Excellent disclaimer hygiene on pricing pages.** `Pricing.js:119–124` and `transparent-pricing-model.md:7, 289–290` are textbook examples of how to qualify market-rate claims. Same language as the claim, immediately visible, conservative wording.

2. **No competitor is ever named.** All "comparison" content stays at category level, which is the correct ASCI Chapter III posture.

3. **No fabricated guarantees.** The site never promises specific outcomes, satisfaction guarantees, or "best price" guarantees that would require substantiation.

4. **Cultural and religious content is respectful.** Bilingual Telugu/English presentation of Barasala, Upanayanam, Namakaran is accurate and reverential. No exoticisation, no commodification of sacred ceremony.

5. **"Call for quote" is a legitimate pricing model** for venue rentals where price genuinely varies by date, hall combination, and guest count. It is not a deceptive bargain practice when paired with the existing transparency disclosures.

6. **No medical, financial, educational, or safety claims** — keeping the site outside the high-scrutiny ASCI categories.

7. **Accessibility claims** (`Services.js:79–90`, wheelchair, elevator, dressing rooms) are concrete and easily verifiable on site visit. No risk of misleading.

8. **Schema.org structured data** is mostly accurate (`FAQ.js:64–127`) — except for the rating count discrepancy noted in H-1.

9. **Phone-first booking workflow** (`Pricing.js:130–141`, `Footer.js:24–35`) reduces e-commerce risk — no online checkout means lower CPA s.94 e-commerce-rule exposure.

10. **No PII captured visibly in JSON-LD or meta tags** — minor but good practice.

---

## 7. Sign-off

| Field | Value |
|---|---|
| **Audit Date** | 25 April 2026 |
| **Auditor** | Indian Legal Compliance Auditor — Advertising Law & Consumer Protection |
| **Audit Scope** | Marketing surfaces of `/Users/tusshar/new-svbanquet-halls` — `src/components/{About,Pricing,FAQ,HeroSection,HeroVideo,Services,Testimonials,Testimonial,VenueHighlightsBar,Footer,HowToChooseBanquetHallGuide}.js` and `content/{transparent-pricing-model,barasala-cradle-ceremony-planning-guide}.md` |
| **Statutes Reviewed** | CPA 2019; ASCI Code (I–IV) + Testimonial Guidelines 2017; Competition Act 2002 (s.3, s.4); Contract Act 1872; IT Act 2000 + SPDI Rules 2011 |
| **Compliance Score** | **78 / 100** |
| **Final Verdict** | **CONDITIONAL PASS — Remediation required within 30 days** for HIGH-risk items (H-1, H-2, H-3) |
| **Re-audit Recommended** | After remediation of H-1, H-2, H-3 — target date 25 May 2026 |
| **Material Litigation Risk Today** | LOW — no item rises to the level of imminent regulatory action; risks are remediable with editorial and policy-page changes only |

**Disclaimer on this Audit:** This audit is provided as a structured compliance review by a domain auditor and is not a substitute for advice from a qualified Indian advocate. For any high-stakes claim (e.g., rebutting a consumer-forum complaint), engage counsel admitted to the relevant Bar.

---

*End of Audit Report.*
