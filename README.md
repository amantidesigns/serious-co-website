# A Very Serious Company

**We take simple ideas seriously.**

A Very Serious Company (AVSC) is a modern creative studio built for the AI era. We craft brands, websites, and content that are elegant, fast, and measurably effective—pairing high-craft design with pragmatic AI workflows. No elaborate processes, no marketing theater. Just clear thinking applied consistently.

This repo is the AVSC marketing site: [avery-serious-company.com](https://avery-serious-company.com). Built with **Next.js 15**.

---

## Brand identity

### Who we are
- A creative agency that takes simple ideas seriously (inspired by Charlie Munger’s approach to clarity and simplicity).
- We don’t overcomplicate. We don’t oversimplify and miss the point. We figure out what matters and execute it properly.
- **AVSC** = short for A Very Serious Company. Used in nav, bylines, and tight spaces.

### What we do
- **Websites, advertisements, and whatever specific problems you bring us.** We don’t limit ourselves to categories.
- High-end creative work using next-gen AI. Fast turnarounds with high craft.
- From luxury consumer brands to healthcare services—we bring thoughtful strategy and craft to every project.

### Tone and voice
- **Minimalist and direct** — Say what needs to be said, nothing more.
- **Confident but not arrogant** — We know our value without overselling.
- **Honest and transparent** — Straight answers, no buzzwords (“solutions,” “leverage,” “synergy,” “disrupt”).
- **Conversational but professional** — Like talking to a smart friend. Understated confidence; let the work speak.
- **Key phrase:** “We take simple ideas *seriously.*” Use italics on *seriously* when emphasizing.

### Color palette
| Role        | Value       | Usage |
|------------|-------------|--------|
| **Brand blue** | `#0B3D91` | Primary brand, links, theme (CSS: `--theme-color`, `--brand-blue`) |
| **Brand green** | `#9AE6B4` | Accent, success, “on” states, OG image dot (mint/emerald) |
| **Dark gradient** | `#05060a` → `#0b1020` | Dark hero/OG/social backgrounds |
| **Light** | White / near-white | Light mode backgrounds |
| **Dark neutrals** | oklch-based grays | Text, borders, UI in light and dark |

### Typography
- **Sans (body, UI):** Geist Sans (`--font-geist-sans`) — primary interface and body copy.
- **Serif (display):** Playfair Display (`--font-playfair`) — headlines and editorial emphasis.
- **Mono:** Geist Mono (`--font-geist-mono`) — code and technical content.

### Other brand details
- **Tagline:** “We take simple ideas seriously.”
- **Approach:** “The best process is no process at all—just clear thinking applied consistently.”
- **Contact:** hello@averyseriouscompany.com
- **Domain:** avery-serious-company.com / averyseriouscompany.com

---

## Quick start

```bash
npm install
npm run dev
```

**Build and run production:**
```bash
npm run build
npm run start
```

---

## Structure

- **src/components/** — Layout (nav, footer), sections, blocks, UI primitives
- **src/app/** — Next.js App Router pages (home, work, blog, services, why-us, etc.)
- **src/lib/** — Utilities, blog content loading
- **docs/** — Planning and design (case-studies, why-us, work, misc, team)

---

## Docs

- **Why us:** `docs/why-us/`
- **Work / case studies:** `docs/work/`, `docs/case-studies/`
- **Misc:** `docs/misc/` (e.g. brand voice: `AVERY_SERIOUS_COMPANY_CURSOR_PROMPT.md`)

---

## Notes

- Node/Next.js versions are specified in `package.json`.
- N8N chat has been removed; no env or dependency required for it.
