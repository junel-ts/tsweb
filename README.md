# TopStitch Digital — www.topstitchmedia.com

Static site (no build step): marketing for mobile furniture, leather, vinyl and upholstery repair businesses.

- `index.html`, `assets/` — site
- `robots.txt`, `sitemap.xml`, `_headers` — SEO + Cloudflare Pages headers (`*.pages.dev` is noindexed)
- `AGENTS.md`, `docs/` — campaign contract, SEO architecture, original handoff notes

Preview: `python3 -m http.server 8765`

## Deploy (Cloudflare Pages)
Connect this repo in Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
Build command: none. Output directory: `/`. Then attach the custom domain `www.topstitchmedia.com`.

## Before launch
- Lead form posts via FormSubmit to topstitchdigital@gmail.com. The first real submission triggers a FormSubmit activation email to that inbox; click it once or nothing is delivered.
- marketing@topstitchmedia.com is shown on the site: set up Cloudflare Email Routing (domain → Email → Email Routing) to forward it to topstitchdigital@gmail.com.
- Privacy policy URL, social image, real authorized photos/proof.
