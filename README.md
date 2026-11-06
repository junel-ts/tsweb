# TopStitch Digital — www.topstitchdigital.com

Static site (no build step): marketing for mobile furniture, leather, vinyl and upholstery repair businesses.

- `index.html`, `assets/` — site
- `robots.txt`, `sitemap.xml`, `_headers` — SEO + Cloudflare Pages headers (`*.pages.dev` is noindexed)
- `AGENTS.md`, `docs/` — campaign contract, SEO architecture, original handoff notes

Preview: `python3 -m http.server 8765`

## Deploy (Cloudflare Pages)
Connect this repo in Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
Build command: none. Output directory: `/`. Then attach the custom domain `www.topstitchdigital.com`.

## Before launch
- Lead form: set `FORM_ENDPOINT` in `assets/js/site.js` to an approved destination (until then it shows "opens soon" and sends nothing).
- Privacy policy URL, social image, real authorized photos/proof.
