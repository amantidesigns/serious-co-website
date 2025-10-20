# Business Plan

Overview
A Very Serious Company is a modern creative agency site built with Next.js that demonstrates high‑craft design, case studies, and an AI workshop offering. The codebase supports service marketing (src/app/services/*), portfolio case studies (src/app/work/* with interactive UI), team credibility (src/app/why-us and src/app/team/*), and direct CTAs to book calls and email (src/components/PageFooter.tsx). Buyers are marketing leads and founders seeking a premium brand/web presence, plus professionals interested in the AI Essentials Workshop (src/app/ai-training/page.tsx).

ICP & Jobs‑to‑Be‑Done
- Startup founders and small business owners
  - Pain: Need a credible site quickly that converts.
  - Feature: Services + portfolio + CTAs; fast static site on Vercel.
  - Outcome: Launch in weeks, book qualified calls.
- Marketing leaders at SMBs (healthcare, consumer)
  - Pain: Prior agencies overcomplicate; slow timelines; unclear results.
  - Feature: Clear case studies (/work), Why Us story with team credibility, structured SEO.
  - Outcome: Confidence to engage; faster approvals.
- DTC/luxury brand managers
  - Pain: Need premium look and motion without complex stacks.
  - Feature: Rich animations (framer‑motion), polished sections, case‑study layouts.
  - Outcome: High‑craft site that feels on‑brand.
- Professionals 40–65 upskilling on AI
  - Pain: Intimidated by jargon; want hands‑on guidance.
  - Feature: AI Essentials Workshop page with curriculum and $200 price (src/app/ai-training/page.tsx).
  - Outcome: Paid workshop seats; feeder for consulting work.

Offer & Packaging
Tiered pricing aligned to implemented features:
- Good: Launch Site
  - Includes: Home, Services overview + 2 service detail pages, Work index + 1 case study, Why Us, FAQ, Team section, basic SEO (robots/sitemap/OG), CTAs.
  - Files leveraged: src/app/services/page.tsx, src/app/services/[slug]/page.tsx, src/app/work/page.tsx, one of src/app/work/{slug}/page.tsx, src/app/why-us/page.tsx, src/app/faq/page.tsx, team (src/lib/content/team.ts).
  - Price: $6k–$12k project.
- Better: Brand + Portfolio
  - Includes: Everything in Good + up to 4 case studies, expanded service detail pages, Organization JSON‑LD, structured Service schema, performance pass from TECHNICAL_SEO_TODO.md.
  - Price: $15k–$30k project.
- Best: Web + Creative Retainer
  - Includes: Everything in Better + monthly creative updates (new case studies/content), quarterly CRO and performance reviews, analytics/events, contact form integration and lead routing.
  - Price: $4k–$8k/month retainer.

Project vs. Subscription
- Project (fixed‑fee): New site or major refresh using the existing patterns; scope defined in content files (src/lib/content/*) and pages.
- Subscription (retainer): Ongoing updates (new work items, copy, visuals), analytics reporting, performance/SEO maintenance, light feature work.

Add‑ons
- AI Essentials Workshop seats ($200/person) — upsell in proposals; page: src/app/ai-training/page.tsx
- Additional case studies (beyond tier inclusions)
- Custom motion/visuals beyond current components (new sections/components under src/components/*)
- Premium support/SLA (prioritized response, monthly reviews)

Revenue Model
- Recommended: Hybrid — fixed‑fee projects to acquire/upgrade sites + monthly retainers for ongoing content/SEO, plus workshop revenue.
- Example pricing table (ranges)
  - Launch Site (project): $6k–$12k, target GM 60–70%
  - Brand + Portfolio (project): $15k–$30k, target GM 55–65%
  - Retainer (monthly): $4k–$8k, target GM 60–70%
  - Workshop per seat: $200; break‑even achievable with 8–10 attendees/3‑day cohort
- Expansion paths
  - Add seats to workshop cohorts; add case studies/pages monthly; additional locales; higher‑touch SLAs; A/B testing package; content production retainers.

GTM in 90 Days
- Launch channels
  - Vercel deploy with custom domain (vercel.json). Share interactive portfolio (/work) and Why Us storyline.
  - LinkedIn/Twitter posts highlighting case studies (public assets under /public/*) and motion design (CSS Box demo: src/app/css-box-demo/page.tsx).
  - Local/community events to drive AI workshop sign‑ups (linkable CTAs already in src/app/ai-training/page.tsx).
- Lead magnets / demos
  - “Free homepage teardown” via email CTA; live portfolio walkthrough.
  - AI Workshop excerpt PDF; link from /ai-training.
- Proof metrics to track (add GA4 in src/app/layout.tsx)
  - Activation: % users who view /work and at least one case study
  - Conversion: Book Call click‑through rate (PageFooter CTAs)
  - Retention: Return visitors; time on /work and /why-us
  - Workshop: Clicks to register link and conversion from campaign pages

Ops & Delivery
- Implementation playbook
  1) Intake/scope (gather services, initial case study, brand assets)
  2) Copy/design pass (edit src/lib/content/*, assets to /public)
  3) Build (extend pages in src/app/* as needed)
  4) QA (links, responsive, Lighthouse)
  5) SEO/analytics (robots/sitemap verified, GA4 wired)
  6) Handoff (edit guide + simple content change runbook)
- SOW/MSA pointers
  - Fixed scope tied to count of pages/case studies; two rounds of revisions; timeline in weeks.
  - Change orders for new components/sections or motion beyond patterns.
- Reporting cadence (retainers)
  - Monthly analytics + SEO/perf summary; quarterly recommendations.

Roadmap (Quarterly)
- Q1: Parameterize domain via env (SITE_URL); add analytics; contact endpoint; complete performance items in TECHNICAL_SEO_TODO.md.
- Q2: Simple CMS (Contentlayer/MDX) to add case studies without code; Service schema on service pages; event tracking for all CTAs.
- Q3: Localization, A/B testing framework for hero and CTA copy; expand workshop (self‑serve registration + payment).

Risks & Mitigations
- Technical: Hard‑coded domain and external script URL; duplicates of robots/sitemap files can confuse exports.
  - Mitigate: Centralize config, remove duplicate files, add small CI that builds and lints.
- Performance: Rich animations and media can harm Core Web Vitals on mobile.
  - Mitigate: Lazy load media; reduce motion where prefers‑reduced‑motion; optimize image formats.
- Market: Crowded agency space.
  - Mitigate: Lead with real case studies (/work), simple story (/why-us), and the workshop as a differentiator.
- Dependency: No CMS; content updates require dev time.
  - Mitigate: Introduce Contentlayer/MDX; document editor flow.
- Compliance/SEO: Missing analytics/consent and canonical URLs.
  - Mitigate: Implement GA4 + consent banner as needed; add canonical tags derived from SITE_URL.
