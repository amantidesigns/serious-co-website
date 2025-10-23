# A Very Serious Company Website

A Very Serious Company (AVSC) is a modern creative studio built for the AI era. We take simple ideas seriously—crafting brands, websites, and content that are elegant, fast, and measurably effective by pairing high‑craft design with pragmatic AI workflows.

This repository contains the AVSC marketing website built with Next.js 15.

## Quick start

```bash
npm install
npm run dev
# build
npm run build
# start production build
npm run start
```

## Structure

- src/components/
  - layout/ — site-wide scaffolding (nav, layout, footers)
  - sections/ — page-level content blocks
  - blocks/ — decorative and micro components
  - ui/ — atomic UI primitives
- src/app/ — Next.js App Router pages
- src/lib/ — utilities and content data
- src/hooks/ — React hooks
- docs/ — planning and design notes
  - docs/case-studies/, docs/why-us/, docs/work/, docs/misc/, docs/team/

## Docs

See docs in docs/:
- Why Us: docs/why-us/
- Work: docs/work/
- Case Studies: docs/case-studies/
- Misc notes: docs/misc/

## Notes

- N8N chat was removed; no env or dependency required for it anymore.
- Node/Next.js versions in package.json.
