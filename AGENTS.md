# Coding-agent implementation contract

## Goal
Finalize TopStitch Digital's *first B2B client-acquisition campaign* for independent and franchised mobile furniture, leather, vinyl and upholstery repair businesses.

**Do not** treat the visitor as a consumer looking to repair their sofa. The visitor is the repair-company owner/operator or manager deciding whether to hire a marketing company. Do not create a direct furniture repair booking flow.

## Read before editing
1. `README.md` — current status, deploy target, blocked launch requirements
2. `docs/ICP.md` — audiences and pains
3. `docs/SEO-ARCHITECTURE.md` — approved messaging and expansion paths
4. `docs/DESIGN.md` — exact design tokens/components
5. `docs/RESEARCH.md` — source caveats; no invented verification
6. `docs/FIRE-ENRICH.md` — optional private enrichment system; not a public site dependency

## First action
Inspect current repository structure and user-confirmed domain before changing files. If placed in an existing Next/React project, preserve the existing application, route semantics, and package manager. This supplied handoff is framework-free static HTML/CSS/JS so it is portable.

## Prioritized work

### P0 — Working lead collection
- Configure a user-approved form target or CRM server endpoint. For static Cloudflare Pages, implement a secure Pages Function/Worker **only with confirmed environment setup**; otherwise use an established form provider.
- Preserve field labels and keyboard usability. Validate on server; rate-limit + spam protection; do not send raw form content into browser analytics.
- Add privacy notice/consent where required; do not invent privacy-policy copy or final company addresses.
- Show success only after an actual success response; handle timeouts/errors/retries. Make invalid URL/email errors human-readable.

### P0 — Correct publication info
- Confirm production domain and logo rights. Add canonical + `og:url`, social image, `sitemap.xml` + `robots.txt`; prevent staging indexation.
- Keep one clear H1. Page title and description must target **marketing/SEO for repair businesses**, not repair service customers.
- Mark illustrated content samples as examples, not live rankings or real clients.

### P1 — Design fidelity and evidence
- Reuse exact palette/tokens in `docs/DESIGN.md`, favor real authorized repair-work photography over stock. Do not reuse logos or images from competitor franchise sites without permission.
- Confirm responsive behavior for 320px, 375px, 390px, 768px, 1024px, 1440px, and large desktop; no horizontal scroll.
- Test CTA visibility above the fold and form usability on mobile.
- Test keyboard tabs/ARIA; support `prefers-reduced-motion`.

### P1 — Measure acquisition
- Attribute UTM campaign parameters and source to lead records after privacy review.
- Events: `visibility_review_click`, `review_form_start`, `review_form_submit_success` (success only after accepted lead).
- Organic performance: Google Search Console impressions, queries, indexed pages and business-website visits; CRM: qualified lead and booked review rates.

### P2 — Content expansion (only once core page works)
- Publish audience-specific solution pages for `marketing for furniture repair companies`, `SEO for leather repair businesses`, `marketing for upholstery repair companies`, `local SEO for mobile service businesses`, `commercial upholstery marketing`.
- Avoid duplicate pages differing only in city/keyword; each page must provide distinct first-party value.
- Include supporting service examples and education without suggesting TopStitch itself performs furniture repair.

## Must not
- Fabricate proof, counts, testimonials, rankings, guarantees, partnerships, franchise permissions, or keyword-volume statistics.
- Embed credentials or process prospect enrichment on a public client page.
- Run the Fire Enrich app as part of static page delivery; it is an independent internal prospecting component.
- Claim Firecrawl crawled the franchise sites in this handoff; there was no live crawl verification.
- Deploy to the production domain without confirming lead form, privacy, brand assets and QA.

## Definition of done
- Form and destination verified end-to-end; spam/privacy checks passed
- Mobile/desktop responsiveness and accessibility checked
- Canonical/indexing/OG/meta/schema valid against confirmed company information
- User-approved photos/proof integrated or intentionally omitted
- Analytics event counts confirmed against real test submissions
- `python3 scripts/validate.py` passes and README lists env/deployment variables
