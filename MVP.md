# MVP

Purpose & Users
- A Very Serious Company is a marketing website for a creative agency that showcases services, case studies, team, and an AI training offering to drive qualified leads and bookings. Primary users: prospective clients and workshop attendees. See src/app and src/lib/content.

Core Value (smallest shippable set)
- Services catalogue with grouped sections and deep links (src/app/services/page.tsx, src/app/services/[slug]/page.tsx; data: src/lib/content/services.ts)
- Portfolio/case studies with interactive previews and individual pages (src/app/work/page.tsx, src/app/work/CaseStudiesClient.tsx, src/app/work/{slug}/page.tsx; data: src/lib/content/caseStudies.ts)
- Why Us story + Team grid with individual profiles (src/app/why-us/page.tsx; team data + pages in src/lib/content/team.ts and src/app/team/[slug]/page.tsx)
- AI training workshop landing and CTA (src/app/ai-training/page.tsx)
- Clear CTAs to book a call and email contact (src/components/PageFooter.tsx)
- SEO basics: metadata, OpenGraph/Twitter, sitemap, robots, JSON‑LD (src/app/layout.tsx, src/app/sitemap.ts, src/app/robots.ts, pages include structured data)
- Polished responsive UI with animations (Tailwind v4, shadcn/ui in src/components/ui, framer‑motion)

Architecture Summary
- Frontend: Next.js 15 (App Router, TypeScript) [package.json], Tailwind CSS v4 [postcss.config.mjs, src/app/globals.css], shadcn/ui components [src/components/ui], framer‑motion animations.
- Pages: App Router under src/app: home, services, work, case studies, team, why‑us, faq, ai‑training.
- Data: Static TypeScript content objects in src/lib/content/{services,caseStudies,team}.ts.
- Assets: public/* (images, mp4, favicon, team photos); theme tokens: src/lib/theme.ts.
- SEO: Robots and sitemap in src/app/{robots.ts,sitemap.ts}; route metadata in pages; Organization JSON‑LD in src/app/layout.tsx; additional JSON‑LD per page.
- Integrations: Next <Script> embeds a route‑messenger script hosted on Supabase storage (src/app/layout.tsx). Booking CTA links to Google Calendar; email uses mailto.
- Infra/Deploy: Designed for Vercel (vercel.json). Dockerfile provided for containerized builds (Node 22 slim + Bun for installs). No database or server APIs.

Setup & Run
Prereqs: Node 18+ (Node 20/22 recommended). pnpm/yarn/bun optional; repo ships with npm lockfile.

- Install
  - npm ci
- Dev
  - npm run dev
- Build/Start
  - npm run build
  - npm start
- Lint
  - npm run lint
- Docker (optional)
  - docker build -t avsc-site .
  - docker run -p 3000:3000 avsc-site

Example .env (proposed gaps to parameterize hard‑coded values)
- SITE_URL=https://avery-serious-company.com
- GOOGLE_SITE_VERIFICATION=replace-me
- NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX (Gap: analytics not wired yet; see Milestones)
- NEXT_PUBLIC_ROUTE_MESSENGER_URL=https://.../route-messenger.js (Gap: currently hard‑coded in src/app/layout.tsx)

Note: SITE_URL should replace hard‑coded domain occurrences in:
- src/app/layout.tsx (metadataBase)
- src/app/sitemap.ts
- src/app/robots.ts
- src/app/work/{jayded-af,healthrive-recovery}/page.tsx JSON‑LD blocks

Milestones
0–2 weeks
- Replace hard‑coded domain with env SITE_URL across SEO files.
  - Acceptance: All references to https://avery-serious-company.com are computed from SITE_URL at runtime/build.
- Add basic analytics (GA4 via <Script> in src/app/layout.tsx) using NEXT_PUBLIC_ANALYTICS_ID.
  - Acceptance: Page views captured on /, /work, /services; no CLS/console errors.
- Clean up duplicate SEO files (src/app/robots 2.ts, src/app/sitemap 2.ts) to avoid confusion.
  - Acceptance: Only one robots.ts and one sitemap.ts are exported by app router.
- Content QA: finalize service slugs and copy in src/lib/content/{services,caseStudies,team}.ts; ensure links resolve.
  - Acceptance: All nav links resolve; Lighthouse SEO score ≥ 90.

2–4 weeks
- Contact form MVP (no backend): use a service (Formspree/GetForm) or a Next.js Route Handler at src/app/api/contact/route.ts that posts to email/Slack webhook.
  - Acceptance: Submissions from /why-us or /services render success/fail and send message to configured endpoint.
- Analytics events: track CTA clicks (Book Call, Email Us) with data‑attributes and window.gtag.
  - Acceptance: Events visible in GA4 debug view.
- Performance pass from TECHNICAL_SEO_TODO.md (images to WebP where possible, lazy load, check Core Web Vitals).
  - Acceptance: LCP < 2.5s on mobile test page; images below‑the‑fold are lazy.

4–8 weeks
- Simple CMS or content pipeline for case studies/services (e.g., Contentlayer/MDX or Sanity). Smallest path is Contentlayer with MDX under content/*.
  - Acceptance: Add one new case study via content files without code changes.
- Add structured Service schema on service pages (src/app/services/[slug]/page.tsx).
  - Acceptance: Rich Results test passes for one service page.
- Error monitoring: lightweight Sentry or LogRocket; or expand existing ErrorReporter to send to a webhook.
  - Acceptance: Client errors visible in monitoring tool.

Release Checklist
- Performance: Lighthouse ≥ 90 mobile/desktop; image sizes optimized; remove dead assets.
- Accessibility: aria labels for interactive components; focus styles; alt text; semantic headings (audit Why Us large page).
- SEO: metadata per page; canonical URLs; robots/sitemap working; JSON‑LD passes Rich Results; no duplicated meta.
- Analytics: GA4 installed; events for key CTAs; Search Console verification (metadata.verification.google or meta tag).
- Error monitoring: Sentry or webhook; 404 handling; global error component wired (src/app/global-error.tsx via ErrorReporter).
- Logging/backups: Export GA and Vercel logs; back up public/ assets and content files.

Risks & Mitigations
- Hard‑coded domain and external script URLs lead to drift across environments.
  - Mitigation: Centralize in env (SITE_URL, NEXT_PUBLIC_ROUTE_MESSENGER_URL) and a single config file.
- Heavy visuals/animations may impact Core Web Vitals on low‑end devices.
  - Mitigation: Prefer CSS animations; lazy‑load media; reduce offscreen work; audit framer‑motion usage.
- No CMS; content edits require code changes.
  - Mitigation: Stage Contentlayer/MDX; or simple JSON ingestion; document edit workflow.
- No server contact endpoint; mailto can be blocked.
  - Mitigation: Minimal /api/contact route with spam guard; or use third‑party form backend.
- Dependency churn (Next 15, React 19, Tailwind v4) could introduce breaking changes.
  - Mitigation: Lock versions; add basic E2E smoke and CI lint/build checks.

Definition of Done (v1)
- Deployed to production domain on Vercel; all top‑level routes working: /, /services, /services/[slug], /work, /work/*, /why-us, /team/*, /faq, /ai-training.
- CTAs functional (calendar booking and email) and tracked.
- SEO artifacts live (robots.txt, sitemap.xml, JSON‑LD); site reachable by crawlers; Search Console verified.
- Performance and accessibility meet baseline (Lighthouse ≥ 90, WCAG AA basics).
- README updated with env keys and runbook; MVP feature set stable for sales demos.
