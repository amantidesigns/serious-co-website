# MVP: A Very Serious Company

## Purpose & Users
A high-end creative agency portfolio site that converts visitors into clients by demonstrating craft, clarity, and speed. Target users: mid-market brands ($50K–$500K budgets) seeking websites, branding, and AI-powered creative work without typical agency overhead.

## Core Value (Shippable Features)
1. **Portfolio Showcase** – 2 complete case studies (`/work/jayded-af`, `/work/healthrive-recovery`) with rich media, team details, tech stacks; 7 "coming soon" placeholders ready to convert
2. **Service Catalog** – 12 categorized offerings (`/services`) spanning Brand & Strategy, Digital & Web, Design & Production
3. **AI Training Workshop** – Standalone revenue stream (`/ai-training`) with pricing ($200/person), location, curriculum, and booking calendar integration
4. **Team Profiles** – 4 team members (`/team/[slug]`) with bios, expertise, black-and-white/color images
5. **StoryBrand Why Us** – Problem-solution narrative (`/why-us`) with interactive tabs, stats, 3-step process, stakes comparison
6. **Direct Conversion Paths** – Embedded Google Calendar booking (`https://calendar.app.google/KKjjEffx5VEeuZ9Z7`) and email CTA (`hello@averyseriouscompany.com`) on every key page
7. **SEO Foundation** – Metadata, OpenGraph, Twitter cards, JSON-LD structured data, sitemap, robots.txt
8. **Responsive UX** – Mobile-first design with sheet previews, hover effects, smooth scroll (Lenis), dark theme, galaxy background animations

## Architecture Summary

### Stack
- **Framework**: Next.js 15.4.5 (App Router, RSC, Turbopack dev mode)
- **Runtime**: React 19.1.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4, `tailwindcss-animate`, `tw-animate-css`, `tailwind-merge`
- **UI Components**: Radix UI (accordion, dialog, tabs, etc.), shadcn/ui pattern
- **Animation**: Framer Motion 12.23.18, `@studio-freight/lenis` for smooth scroll
- **Icons**: Heroicons, Lucide React, Tabler Icons
- **Deployment**: Vercel (configured via `/vercel.json`)

### Key Routes
```
/                     → Home (galaxy hero, brand statement)
/services             → Service grid (12 offerings)
/work                 → Case studies grid + previews
/work/jayded-af       → Complete case study #1
/work/healthrive-recovery → Complete case study #2
/why-us               → StoryBrand problem-solution flow
/team/[slug]          → Individual team member pages
/ai-training          → Workshop landing page
/faq                  → FAQ with structured data
/robots.txt, /sitemap.xml → SEO utilities
```

### Data Models (Static)
- **Team** (`/src/lib/content/team.ts`): 4 members with name, title, bio, expertise, images (bw/color)
- **Case Studies** (`/src/app/work/CaseStudiesClient.tsx` lines 249–349): 9 projects (2 live, 7 placeholders) with title, description, category, workType, gradient, images/video
- **Services** (inline `/src/app/services/page.tsx`): 12 services across 3 categories, each with icon, title, description

### Integrations
- **Google Calendar** – Booking link embedded in CTA buttons (no API, just deep link)
- **Email** – Direct `mailto:` links, no form backend
- **Media** – Static assets in `/public` (images, videos, GIFs)

### Infrastructure
- **Hosting**: Vercel (zero-config Next.js deployment)
- **Build Command** (from `vercel.json`): `npm install --legacy-peer-deps && npm run build`
- **CDN**: Vercel Edge Network (global)
- **Environment**: No `.env` required (all content is static or hardcoded)

## Setup & Run

### Prerequisites
- Node.js 20+ or Bun
- Git

### Local Development
```bash
# Clone repo
git clone <repo-url>
cd <repo-name>

# Install dependencies (use --legacy-peer-deps for npm)
npm install --legacy-peer-deps
# or
bun install

# Run dev server (Turbopack enabled)
npm run dev
# Server starts at http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables (None Required)
All content is static. If adding analytics/monitoring in future:
```bash
# Example .env.local (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=https://...
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
# Follow prompts, or use vercel --prod for production
```
**Note**: Vercel auto-deploys from Git when connected.

## Milestones

### Weeks 0–2: Pre-Launch Polish
- [ ] Complete remaining 7 case study pages (clone `/work/jayded-af/page.tsx` pattern)
- [ ] Add Google Analytics 4 to `layout.tsx` for traffic tracking
- [ ] Set up Sentry error monitoring (create account, add DSN)
- [ ] Lighthouse audit: score 90+ on Performance, Accessibility, SEO, Best Practices
- [ ] Test all CTAs (booking calendar, email links) on mobile/desktop
- [ ] Write blog post "How We Built This Site" (SEO + credibility)
- **Acceptance**: All case studies render correctly, Lighthouse scores green, 1 blog post live

### Weeks 2–4: Growth & Validation
- [ ] Launch Product Hunt listing with "AI-powered creative agency" angle
- [ ] Set up Plausible or Fathom Analytics (privacy-focused alternative to GA)
- [ ] Create lead magnet: "AI Creative Toolkit" PDF (5-page guide) gated by email
- [ ] Add `/blog` route with 3 articles (reusable shadcn/ui components)
- [ ] A/B test two CTA variants on `/services` page (track with Vercel Analytics)
- [ ] Run LinkedIn ads targeting CMOs/VPs ($500 budget, test 2 creative variants)
- **Acceptance**: 100+ site visits/week, 5+ calendar bookings, 1 paid project signed

### Weeks 4–8: Scale & Systematize
- [ ] Build `/contact` form with Resend.com backend (API route `/api/contact`)
- [ ] Implement testimonials component on `/work` page (pull from Notion or Airtable)
- [ ] Add Calendly embed as alternative to Google Calendar (track conversion difference)
- [ ] Create `/case-study-template` dynamic route for faster case study creation
- [ ] Set up automated weekly analytics report (Vercel Analytics webhook → Slack)
- [ ] Launch AI training workshop cohort #1 (10 participants @ $200 = $2K revenue)
- **Acceptance**: $10K MRR from projects + workshops, 500+ site visits/week, 3 testimonials live

## Release Checklist

### Performance
- [ ] Lighthouse Performance: 90+ (use Next.js Image optimization, lazy load videos)
- [ ] Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- [ ] Bundle size: <500KB gzipped (audit with `next build` analyzer)
- [ ] Videos compressed (<5MB each, use `.mp4` with H.264 codec)

### Accessibility
- [ ] WCAG 2.1 AA compliance (use axe DevTools)
- [ ] Keyboard navigation for all interactive elements
- [ ] ARIA labels on nav, buttons, form inputs
- [ ] Color contrast ratio ≥4.5:1 (check with WebAIM tool)

### SEO
- [ ] Unique `<title>` and `<meta description>` on all pages
- [ ] OpenGraph images (1200x630) on all routes
- [ ] Sitemap submitted to Google Search Console
- [ ] Schema.org structured data (Organization, FAQPage, Person for team)

### Analytics & Monitoring
- [ ] Google Analytics 4 installed (or privacy-focused alternative)
- [ ] Sentry error tracking configured with source maps
- [ ] Vercel Analytics enabled (Web Vitals + audience insights)
- [ ] Goal tracking: "Book Call" and "Email CTA" events

### Error Handling
- [ ] Custom 404 page (`/not-found.tsx`) with nav back to home
- [ ] Global error boundary (`/global-error.tsx` – already exists)
- [ ] Logging: Winston or Pino for server-side errors (optional for MVP)

### Backups & Version Control
- [ ] All code in Git (already tracked)
- [ ] Vercel auto-deploys from `main` branch
- [ ] Weekly database backup (N/A for MVP – no DB)
- [ ] Environment secrets stored in Vercel dashboard (when added)

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **No backend/CMS** – Updating case studies requires code changes | Medium | Use MDX for blog posts; consider Sanity.io or Contentful for case studies if client updates >1/week |
| **No form handling** – Direct email links may get flagged as spam | Low | Add Resend.com API route (`/api/contact`) in Week 4 with honeypot spam protection |
| **No CI/CD pipeline** – No automated testing or linting on push | Medium | Add GitHub Actions workflow: lint → build → deploy preview on PR |
| **Single-person dependency** – Developer (Robera) is bottleneck | High | Document codebase in `CONTRIBUTING.md`, pair with AI agent for 2nd reviewer, cross-train designer on React |
| **Legacy peer deps** – `--legacy-peer-deps` flag indicates version conflicts | Low | Audit `package.json` for outdated packages; plan to upgrade Tailwind v4 beta to stable when released |

## Definition of Done (v1.0 = Saleable MVP)

**A saleable MVP means:**
1. ✅ **All 9 case studies complete** with images, videos, team, tech stack
2. ✅ **5+ inbound leads per week** from organic traffic + LinkedIn outreach
3. ✅ **Zero critical bugs** (no broken links, no JS errors in Sentry)
4. ✅ **Mobile-first responsive** (tested on iOS Safari, Android Chrome)
5. ✅ **3 client testimonials live** on `/work` page
6. ✅ **AI workshop cohort #1 sold out** (10 participants = $2K revenue)
7. ✅ **90+ Lighthouse scores** across Performance, Accessibility, SEO
8. ✅ **$10K MRR** from combined project work + workshops

**When these criteria are met, v1.0 ships.**

---

## Quick Reference: File Locations

| Feature | File(s) |
|---------|---------|
| Home hero | `/src/components/HomePageLayout.tsx` |
| Services grid | `/src/app/services/page.tsx` |
| Case studies list | `/src/app/work/CaseStudiesClient.tsx` |
| Case study template | `/src/app/work/jayded-af/page.tsx` |
| Team data | `/src/lib/content/team.ts` |
| Why Us (StoryBrand) | `/src/app/why-us/page.tsx` |
| AI training landing | `/src/app/ai-training/page.tsx` |
| Global layout & nav | `/src/app/layout.tsx`, `/src/components/Navbar.tsx` |
| SEO metadata | Each `page.tsx` exports `metadata: Metadata` |
| Deployment config | `/vercel.json` |

**Last Updated**: 2025-10-20
