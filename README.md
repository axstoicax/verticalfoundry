# VerticalFoundry v5.8 — approved design, About portrait-first

This repository builds the original approved VerticalFoundry design as a Next.js static export, extended to eight pages, including a dedicated Etsy FAQs page and an outcome-focused Products editorial image. The About page opens with the founder’s current portrait, followed later by the archival family photo.

**Important:** the company is Quant Data Intelligence LLC, represented in the public JSON-LD as `Corporation` per the owner's semantic preference; legal form remains an LLC. The official EIN is public as `taxID` at the owner's request. VerticalFoundry and AetherTrigger are represented as `Brand` nodes.

Deploy root: `./`; framework: Next.js; build command: `npm run build`; requires `npm install` on Vercel.

Canonical site: https://getverticalfoundry.com/
Contact: hello@getverticalfoundry.com.

The image on `/products/` is a conceptual illustration, not a screenshot or performance claim.

## Validation
Run `npm run validate:logos`, `npm run validate:site`, `npm run validate:seo`, `npm run validate:discovery` then `npm run build` in a working Node environment.


## 30 October 2026 — Parent-company footer link
The name **Quant Data Intelligence LLC** is now a clickable hyperlink to https://www.quantdataintel.com/ in both the home footer and all content-page footers. The AetherTrigger brand reference in JSON-LD resolves to https://aethertrigger.com/#brand. No approved VerticalFoundry logo or page content was redesigned.


## Footer attribution clarification — 30 Oct 2026
The words **Quant Data Intelligence LLC** themselves are the clickable anchor to https://www.quantdataintel.com/ on the homepage and all interior-page footers. There is **no separate displayed corporate URL below** the attribution. Styling is inline, with underline and keyboard focus indication.


## 8 November 2026 — v5.8 About portrait order
See `README_V5_8_ABOUT_PORTRAIT_RO.md` for the focused change and Vercel verification notes. The Etsy shop itself has not been changed.
