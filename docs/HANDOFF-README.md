# TopStitch Digital — Campaign 01: Mobile Furniture Repair

**Status:** working, responsive static landing-page prototype; **not launch-ready** until the lead form, destination domain, policies, measurements and owner-approved proof are configured. No build step is required.

This repo handoff is designed for **TopStitch Digital to win marketing clients** among independent mobile leather/vinyl/upholstery repair operators, franchise territory owners, and regional repair companies. It is **not** a website for a furniture repair business and is **not** affiliated with any of the example franchisors.

## Preview locally

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

The page itself is `index.html`; styles and scripts are in `assets/`. You can open `index.html` directly, but localhost better represents deployment. There is no package install, API key, or backend.

## Project structure

```
index.html                   Landing page, SEO title and description, semantic sections
assets/css/styles.css       Mobile-responsive brand system
assets/js/site.js           Accessible buyer tabs and demo-only form validation
assets/img/favicon.svg      Original TopStitch campaign mark (not a verified corporate logo)
_headers                     Suggested Cloudflare Pages security headers
.nojekyll                    GitHub Pages compatibility
docs/ICP.md                  Audience, buying signals, objections and proposed offer
data/target-brand-seeds.csv   21 user-supplied brand/domain seeds (unverified)
docs/SEO-ARCHITECTURE.md     Keyword clusters, message architecture, schema and editorial plan
docs/RESEARCH.md            Source provenance, franchise list and verification caveats
docs/DESIGN.md              Palette, typography, components and layout design tokens
docs/previews/desktop-full.png   Full-page visual preview
docs/FIRE-ENRICH.md         How the uploaded enrichment source relates to prospecting
AGENTS.md                    Execution instructions and acceptance criteria for a coding agent
scripts/validate.py         Dependency-free structural QA
```

## Positioning

**Primary promise:** "You fix the furniture. We help people find you."  
**Subpromise:** Turn real repair work into clear service pages, useful answers, local search content and proof that helps buyers choose.  
**Single CTA:** Request a free visibility review.  
**Target conversion:** a *qualified* inquiry from the owner/marketing decision-maker of a mobile repair business (not an end customer asking for a furniture repair).

This deliberately avoids ranking guarantees, fabricated customer counts, unsupported results and borrowed franchise logos.

## Site sections

1. Direct-response hero with a labeled *illustrative* search-result mockup
2. Industry specialization ribbon
3. Visibility gaps and buyer objections
4. Interactive homeowner / commercial buyer search intent example
5. Capture → explain → distribute workflow
6. Sample editorial output (clearly a concept, not a case study)
7. Owner-operator/franchise fit and compliance note
8. Visibility-review form (nonfunctional demo)
9. FAQ / footer

## Agent implementation priorities

Read **`AGENTS.md` first**. Highest priority:

- **P0 — connect the lead form** to an approved endpoint/CRM with anti-spam, consent/privacy notice, and **server-side** validation. Current form intentionally stores/sends nothing. Confirm submission success only after server acknowledgement. Never embed API credentials in the browser.
- **P0 — destination:** confirm the campaign URL, canonical and OG URLs. Do not index a staging site. Add `sitemap.xml`, `robots.txt`, canonical/OG/Twitter metadata and a valid company identity only after domain confirmation.
- **P0 — proof:** obtain TopStitch-authorized photos, first-party examples or permissioned customer case studies. Do not invent reviews, logos, rankings or conversion statistics.
- **P1 — analytics:** track `visibility_review_click`, `review_form_start`, `review_form_submit_success` with consent as applicable; verify events and UTM source/medium/campaign capture.
- **P1 — technical QA:** test keyboard navigation, iPhone widths 320/375/390, desktop, reduced motion, WCAG AA contrast, Lighthouse, no broken anchor links, privacy, and form delivery.
- **P1 — deployment:** connect to Cloudflare Pages or GitHub Pages after verifying the actual repo configuration. Cloudflare Pages build command: **none**; output directory: **repository root**.

## Design rationale

The visual system uses **workshop navy `#122A39`, copper `#E39B6E`, and warm paper `#F7F2E9`**. It echoes trades/craftsmanship via stitching and repair-material motifs while positioning TopStitch as the marketing specialist—not a leather repair operator. Typography: Manrope headlines, DM Sans body, with system fallbacks. The hero mockup is fictional and clearly labeled.

## Source reliability

`leather_repair_franchises_updated.xlsx` supplied an **initial franchise landscape**, not a verified directory or live customer list. `fire-enrich-main.zip` is a **Next.js/Firecrawl/OpenAI enrichment application source archive**, not a dataset. See `docs/RESEARCH.md` and `docs/FIRE-ENRICH.md`. Live brand crawling, keyword volumes and rankings remain **unverified** in this handoff. Do not publish claims from the spreadsheet without independent checking.

## Integrate with `junel-ts/tsweb`

The connected GitHub account could not resolve `junel-ts/tsweb` (404 at the time of preparation). **No remote commit was created**. Once the repo exists and is accessible, use one of these approaches:

**If `tsweb` is a new or empty repository:** copy all files from this directory to the repo root, run `python3 scripts/validate.py`, commit and push to a review branch.

**If `tsweb` already contains a website:** inspect its current structure first; integrate this campaign under an appropriate route such as `campaigns/mobile-repair/` or port its UI into the existing framework. Do **not** overwrite the root app or existing README without review.

Example for an empty repo:

```bash
git clone git@github.com:junel-ts/tsweb.git
cd tsweb
# copy the contents of this handoff package into this directory
python3 scripts/validate.py
git checkout -b feat/mobile-repair-visibility
# git add -A && git commit -m "Add TopStitch mobile repair campaign site"
# git push -u origin feat/mobile-repair-visibility
```

The last two commands are examples for a human/agent with verified repo access—not actions completed in this handoff.

## Questions to resolve before publication

- Final TopStitch website URL/domain and verified logo/brand assets
- Destination for inbound leads (email, CRM, calendar, approved form provider)
- Privacy-policy URL and consent requirements for target geographies
- Scope and promise of the free visibility review (manual audit deliverable and expected response)
- Countries/provinces to target first and whether franchisees may use their own websites
- Real work photos and evidence TopStitch is authorized to publish

## Figma

The editable campaign art-direction file created during handoff is:  
`https://www.figma.com/design/7OHGGtYekIxNKnYmVrvQon`

Use the HTML/CSS as implementation source of truth and Figma for visual review. Tokens are documented in `docs/DESIGN.md`.
