# Business Plan: A Very Serious Company

## Overview
**A Very Serious Company** is a boutique creative agency that delivers high-craft websites, branding, and AI-powered content at 3–5× the speed of traditional agencies. We serve mid-market brands ($50K–$500K annual creative budgets) tired of overcomplicated processes and underdelivered results. Our differentiator: a 3-person core team + AI agent that eliminates account managers, bloated timelines, and generic templates. Evidence: `/src/app/why-us/page.tsx` articulates our anti-process philosophy; `/src/app/work/CaseStudiesClient.tsx` showcases 9 client verticals from luxury spirits to addiction recovery.

**Revenue Model**: Project-based creative work (80%) + AI training workshops (20%).  
**GTM**: Inbound (LinkedIn thought leadership, SEO) + outbound (warm email to curated list).  
**Target**: $250K ARR in 90 days via 5–10 projects + 3 workshop cohorts.

---

## ICP & Jobs-to-Be-Done

### Buyer Type 1: Founder/CEO of $5M–$50M Revenue Company
**Pain**: Hired big agencies that delivered pretty decks but didn't move metrics. Now distrustful.  
**Feature**: `/services` page lists 12 offerings with zero jargon; `/why-us` shows "48hr average turnaround" stat (line 56).  
**Outcome**: Website/brand that converts visitors to pipeline in <4 weeks vs. 3 months.  
**Budget**: $30K–$100K/project.

### Buyer Type 2: VP Marketing at Mid-Market B2B/Healthcare Org
**Pain**: Brand refresh stalled 6 months due to "strategy phase." Board impatient.  
**Feature**: `/work/healthrive-recovery` case study demonstrates healthcare UX; `/team` page shows actual makers (no account managers).  
**Outcome**: Launch-ready brand + website in 6 weeks, internal hero status.  
**Budget**: $50K–$150K/project.

### Buyer Type 3: CMO at Consumer Brand ($10M–$100M Revenue)
**Pain**: Creative team can't keep pace with product launches. Needs surge capacity.  
**Feature**: `/work/jayded-af` shows premium DTC execution; AI training workshop (`/ai-training`) proves they can teach internal teams.  
**Outcome**: 3–5 campaign assets per month, train internal team to self-serve basics.  
**Budget**: $75K–$200K retainer (3-month commitment).

### Buyer Type 4: Professional Service Firm Managing Partner (Law, Finance, Consulting)
**Pain**: Website looks like 2015. Losing RFPs to competitors with better digital presence.  
**Feature**: `/work` case study for Beka Wealth Advisors (financial services); emphasis on "serious" brand voice in `/AVERY_SERIOUS_COMPANY_CURSOR_PROMPT.md`.  
**Outcome**: Modern, trustworthy site that converts cold prospects to warm intros.  
**Budget**: $40K–$80K/project.

### Buyer Type 5: Solopreneur/Influencer (Age 40–65) Seeking AI Upskilling
**Pain**: Terrified of being left behind by AI. Wants practical skills, not theory.  
**Feature**: `/ai-training` workshop ($200, 3 days, St. Louis Park library) designed for beginners.  
**Outcome**: Confidence with ChatGPT/Claude, one working project, 30 days email support.  
**Budget**: $200/person (low-risk entry point to agency relationship).

---

## Offer & Packaging

### Tiered Pricing (Good/Better/Best)

#### **Tier 1: Essentials ($25K–$50K)**
**What's Included**:
- 5-page website (Home, About, Services, Work, Contact)
- Mobile-responsive design
- Basic SEO (metadata, sitemap, Google Search Console setup)
- 2 rounds of revisions
- 4-week delivery

**Tech Stack** (from `/package.json`):
- Next.js, React, Tailwind CSS
- Hosted on Vercel (free tier)
- No CMS (client requests updates via email)

**Ideal For**: Startups, solopreneurs, service businesses needing credibility fast.

**Evidence in Code**: `/src/app/work/healthrive-recovery/page.tsx` is a 168-line single-file case study – reusable template for fast delivery.

---

#### **Tier 2: Professional ($50K–$100K)**
**What's Included**:
- 10-page website with custom animations (Framer Motion)
- Full brand identity (logo, color system, typography)
- Advanced SEO (structured data, OpenGraph, blog setup)
- CMS integration (Sanity.io or Contentful)
- 3 rounds of revisions
- 6-week delivery

**Tech Stack**:
- All Tier 1 features +
- Radix UI component library (from `/src/components/ui/*`)
- Lenis smooth scroll (line 42 in `/package.json`)
- Vercel Pro ($20/mo for Web Analytics)

**Ideal For**: Mid-market companies, professional service firms, B2B SaaS.

**Evidence in Code**: `/src/app/why-us/page.tsx` (689 lines) demonstrates complex interactive UI with tabs, accordions, progress bars – production-ready component library.

---

#### **Tier 3: Enterprise ($100K–$250K)**
**What's Included**:
- Multi-site ecosystem (e.g., main site + 3 microsites)
- AI-powered features (chatbot, content generation, personalization)
- Comprehensive design system (Storybook, component docs)
- Headless CMS + API routes for dynamic content
- Unlimited revisions
- 8–12 week delivery
- 3 months post-launch support

**Tech Stack**:
- All Tier 2 features +
- API routes (`/api/*` for forms, webhooks)
- Sentry error monitoring
- Custom analytics dashboard
- GitHub Actions CI/CD

**Ideal For**: Agencies selling to Fortune 500, portfolio companies under PE firms.

**Evidence in Code**: `/Dockerfile` (78 lines) shows containerized deployment strategy for enterprise infra; `/vercel.json` config supports custom build commands.

---

### Project Pricing vs. Subscription

| **Project-Based** | **Subscription (Retainer)** |
|-------------------|----------------------------|
| **When to Use**: One-off website, rebrand, campaign launch | **When to Use**: Ongoing content (3–5 assets/month), rapid experimentation, internal team augmentation |
| **Pricing**: $25K–$250K fixed fee | **Pricing**: $10K–$30K/month (3-month minimum) |
| **Scope**: Defined deliverables, 2–3 revision rounds | **Scope**: Monthly capacity (e.g., "40 hours of designer + dev time") |
| **Example**: "We need a new website before Q4 product launch" | **Example**: "We need 1 landing page + 3 ad variants every month" |
| **Payment**: 50% upfront, 50% on delivery | **Payment**: Net-15, auto-renews quarterly |

**Recommendation**: Start with **project-based** to build portfolio and cashflow. Transition to **retainers** once 3+ happy clients exist (predictable revenue, less scope negotiation).

---

### Add-Ons (Expand Deal Size by 20–50%)

| Add-On | Price | Description | Evidence in Code |
|--------|-------|-------------|------------------|
| **AI Training Workshop** | $2K (team of 10) | 3-day intensive, custom curriculum for client's industry | `/src/app/ai-training/page.tsx` shows existing $200/person offering – scale to B2B |
| **Monthly SEO Content** | $3K/month | 4 blog posts (800–1200 words) optimized for target keywords | No `/blog` route yet, but `/src/app/services/page.tsx` proves content structure exists |
| **Video Production** | $5K–$15K | Explainer video, testimonials, product demos (AI-assisted editing) | `/public/jayded-af-project-video.mp4` shows video capability |
| **Conversion Rate Optimization (CRO) Audit** | $8K | Heatmaps, A/B testing plan, UX recommendations, 30-day implementation support | `/src/components/blocks/css-box.tsx` shows component-based A/B testing readiness |
| **Premium Support SLA** | $2K/month | <4hr response time, priority bug fixes, 2 hours/month of updates | Requires Sentry setup (listed in MVP.md) |

**Upsell Path**: Offer AI workshop as "thank you" after project delivery → client trains internal team → returns for retainer when team overwhelmed.

---

## Revenue Model

### Recommended Model: **Hybrid (Projects + Retainers + Workshops)**

**Why?**
1. **Projects** = high margin (60–70%), build portfolio fast
2. **Retainers** = predictable revenue, higher LTV ($360K over 3 years vs. $75K one-time)
3. **Workshops** = low-effort revenue ($200/person × 10 = $2K per cohort), lead gen funnel

**Justification from Codebase**:
- `/src/app/services/page.tsx` lists **12 services** across 3 categories → supports diverse project types
- `/src/app/work/CaseStudiesClient.tsx` shows **9 verticals** (finance, healthcare, luxury, construction) → proves ability to serve multiple ICPs simultaneously
- `/src/app/ai-training/page.tsx` exists as **standalone product** → validates non-project revenue

---

### Example Pricing Table with Margins

| Offering | Price Range | Cost (Team Time) | Gross Margin | Annual Capacity | Revenue Potential |
|----------|-------------|------------------|--------------|-----------------|-------------------|
| **Tier 1 Website** | $25K–$50K | 120 hrs @ $75/hr = $9K | 70–82% | 12/year | $300K–$600K |
| **Tier 2 Website** | $50K–$100K | 200 hrs @ $75/hr = $15K | 70–85% | 8/year | $400K–$800K |
| **Tier 3 Website** | $100K–$250K | 400 hrs @ $75/hr = $30K | 70–88% | 4/year | $400K–$1M |
| **Monthly Retainer** | $10K–$30K/mo | 40–80 hrs @ $75/hr = $3K–$6K | 70–80% | 5 clients | $600K–$1.8M/year |
| **AI Workshop (B2C)** | $200/person | 20 hrs @ $75/hr = $1.5K per cohort | 25% (10 ppl = $2K revenue) | 6 cohorts/year | $12K/year |
| **AI Workshop (B2B)** | $2K/team (10 ppl) | 20 hrs @ $75/hr = $1.5K | 25% | 12 clients/year | $24K/year |

**Total Addressable Revenue (Conservative, 1 Team)**: $1.5M–$2.5M/year  
**Realistic Year 1 (Ramp)**: $250K (mix of Tier 1–2 projects + 2 retainers + 6 workshops)

---

### Upsell/Expansion Paths

1. **Project → Retainer**  
   - After delivering Tier 1 website, offer: "We'll update your blog + run 2 A/B tests per month for $8K/month"
   - **Trigger**: Client asks for "one quick change" 3x in first month (indicates ongoing need)

2. **Workshop → Project**  
   - After AI workshop, offer: "We'll build your first AI-powered landing page for $15K (50% off Tier 1 price)"
   - **Trigger**: Attendee mentions they're a decision-maker at their company

3. **Single Project → Multi-Site**  
   - After Tier 2 website, offer: "Your 3 product lines need dedicated microsites – bundle for $180K vs. $300K separate"
   - **Trigger**: Client has complex org structure (multiple brands, regions, audiences)

4. **Add-On Modules**  
   - Email marketing setup: $5K (Mailchimp integration, 3 template designs)
   - E-commerce integration: $10K (Stripe checkout, product catalog CMS)
   - Member portal: $20K (auth, user dashboard, gated content)

**Code Evidence**: `/src/components/ui/*` has 60+ pre-built Radix components → fast assembly of new features without custom dev.

---

## GTM in 90 Days

### Launch Channels

#### **Channel 1: LinkedIn Thought Leadership (Inbound)**
**Action**:
- Founder posts 3x/week: "Here's how we shipped a healthcare website in 3 weeks" (link to `/work/healthrive-recovery`)
- Share design process breakdowns, before/after screenshots, client testimonials
- Target hashtags: #NoCodeDesign, #AIForCreatives, #AgencyLife

**Lead Magnet**:
- "The Anti-Process Playbook: How to Ship Creative Work 5× Faster" (PDF download, gated by email)
- **Code Path**: Add `/resources` page with form → Resend.com API route `/api/download`

**Metrics to Track**:
- Profile views → 500+/week by Day 60
- Inbound DMs → 10+/week by Day 90
- Email list growth → 200+ subscribers in 90 days

---

#### **Channel 2: Cold Email to Warm List (Outbound)**
**Action**:
- Scrape 500 companies matching ICP (Buyer Types 1–4) from LinkedIn Sales Navigator
- Send personalized emails: "Saw your recent funding round / product launch / rebrand. Here's how we'd approach your website in <30 days."
- Include case study link + booking calendar

**Tools**:
- Apollo.io or Hunter.io for email finding ($50/mo)
- Mailshake or Lemlist for sequences ($80/mo)

**Metrics to Track**:
- Open rate → 40%+
- Reply rate → 5%+
- Meeting booked rate → 2%+ (10 meetings from 500 emails)

---

#### **Channel 3: SEO (Long-Tail Keywords)**
**Action**:
- Publish 12 blog posts in 90 days targeting queries like:
  - "How much does a healthcare website cost"
  - "Luxury brand web design examples"
  - "AI creative agency Minneapolis" (location-based if applicable)
- **Code Path**: Add `/blog` route with MDX support (Next.js has native support)

**Metrics to Track**:
- Organic traffic → 500+ sessions/month by Day 90
- Keyword rankings → Top 10 for 5–8 target terms
- Conversion rate → 2% (10 leads from 500 visitors)

**Evidence in Code**: `/src/app/faq/page.tsx` has JSON-LD structured data (lines 110–160) → already SEO-optimized pattern to replicate for blog.

---

### Proof Metrics (Leading Indicators)

| Metric | Week 4 Target | Week 8 Target | Week 12 Target | How to Track |
|--------|---------------|---------------|----------------|--------------|
| **Website Traffic** | 200 sessions | 500 sessions | 1,000 sessions | Vercel Analytics (free) |
| **Calendar Bookings** | 3 calls | 8 calls | 15 calls | Google Calendar event count |
| **Qualified Leads** | 2 | 5 | 10 | CRM (Notion, Airtable, or HubSpot free) |
| **Proposals Sent** | 1 | 3 | 5 | Manual tracking in Notion |
| **Deals Closed** | 0 | 1 ($40K) | 2 ($80K total) | Stripe invoices |
| **Workshop Signups** | 5 people | 10 people | 20 people | Eventbrite or Luma |
| **Email List Growth** | 50 | 120 | 250 | Mailchimp or ConvertKit |

**Red Flags**:
- <100 site visits by Week 4 → GTM channels not working, pivot to paid ads
- <3 calls by Week 8 → Messaging mismatch, A/B test homepage copy
- 0 deals closed by Week 12 → Pricing too high or wrong ICP, survey leads for objections

---

## Ops & Delivery

### Implementation Playbook

#### **Phase 1: Intake (Days 1–3)**
1. **Discovery Call** (60 min via Google Calendar link at `/why-us` page, line 660)
   - Record via Zoom, transcribe with Otter.ai
   - Ask: "What's the problem you're trying to solve?" (not "What do you want us to build?")
   - Qualify: Budget ≥$25K, decision-maker on call, timeline ≤12 weeks
   
2. **Proposal** (delivered within 24 hours)
   - Use Notion template: Scope, timeline, pricing, team, case study examples
   - Include 2 options: "Fast Track" (4 weeks, $40K) vs. "Comprehensive" (8 weeks, $75K)
   - **Evidence**: `/src/app/why-us/page.tsx` lines 73–91 show 3-step process → copy into proposal

3. **Contract & Payment** (e-signature via PandaDoc or Docusign)
   - SOW includes: Deliverables, revisions policy (2 rounds), kill fee (30%), IP transfer clause
   - Invoice 50% upfront via Stripe (or ACH for deals >$50K)

---

#### **Phase 2: Build (Days 4–21)**
1. **Kickoff** (Day 4, 90 min)
   - Stakeholder interviews, brand audit, competitor analysis
   - Deliver: Creative brief (2 pages), site map, wireframes (Figma)

2. **Design Sprint** (Days 5–11)
   - Designer creates 3 homepage concepts in Figma
   - Client picks 1, designer completes all pages
   - **Evidence**: `/src/app/work/jayded-af/page.tsx` shows premium design execution (video, animations)

3. **Development** (Days 12–18)
   - Developer builds in Next.js using `/src/components/ui/*` component library
   - Designer reviews in staging (Vercel preview deployment)
   - **Code Path**: Clone `/src/app/work/jayded-af/page.tsx`, swap content, deploy

4. **Content & QA** (Days 19–21)
   - Copywriter finalizes all copy using brand voice from `/AVERY_SERIOUS_COMPANY_CURSOR_PROMPT.md`
   - Run Lighthouse audit, fix accessibility issues, test on mobile

---

#### **Phase 3: QA & Handoff (Days 22–28)**
1. **Client Review** (Day 22, 60 min)
   - Walk through staging site, collect feedback
   - Revisions limited to 2 rounds per SOW (track in Linear or Notion)

2. **Launch** (Day 28)
   - Move to production domain (Vercel custom domain setup, 5 min)
   - Submit sitemap to Google Search Console
   - Set up Sentry error monitoring
   - Invoice remaining 50%

3. **Post-Launch** (Days 29–60)
   - Weekly check-in calls (15 min)
   - Fix critical bugs within 24 hours
   - Upsell: "Want us to run your first A/B test?" ($5K add-on)

---

### SOW/MSA Pointers
- **Scope Creep Protection**: "Additional pages beyond agreed scope billed at $5K/page"
- **Revision Policy**: "2 rounds included. Round 3+ billed at $2K/round"
- **Change Orders**: "New features (e.g., CMS, blog) require written change order, 25% fee increase, timeline extension"
- **IP Transfer**: "Client owns all code upon final payment. We retain right to showcase in portfolio."

---

### Reporting Cadence
- **Weekly**: Loom video update (5 min) showing progress, blockers, next steps
- **Bi-Weekly**: Live call (30 min) for feedback and alignment
- **Monthly** (for retainers): Analytics report (traffic, conversions, A/B test results) + roadmap for next month

---

## Roadmap (Quarterly)

### Q1 (Months 1–3): Prove Model
**Goal**: $250K revenue, 3 case studies, 50 workshop attendees  
**Ships**:
- 5 Tier 1 websites ($25K–$40K each)
- 2 Tier 2 websites ($60K each)
- 6 AI workshops ($2K each)

**Increases ARPU By**:
- Upselling 2 workshop clients to Tier 1 websites (+$50K)

**Reduces Churn By**:
- Post-launch support plan (included in price, creates stickiness)

---

### Q2 (Months 4–6): Systematize Delivery
**Goal**: $500K revenue, 3 retainer clients, hire #5 (junior dev)  
**Ships**:
- 3 Tier 2 websites ($75K each)
- 2 Tier 3 websites ($150K each)
- Convert 3 project clients to $10K/mo retainers

**Increases ARPU By**:
- Launching "Add-On Menu" (video, SEO, CRO audits) → +$15K/client

**Reduces Churn By**:
- Implementing "Client Advisory Board" (1 call/quarter, roadmap input)

---

### Q3 (Months 7–9): Scale GTM
**Goal**: $750K revenue, productize AI offering  
**Ships**:
- Launch "AI Creative Assistant" SaaS (MRR play, $99/mo/user)
- 4 Tier 3 websites ($200K each)
- Hire #6 (account manager for retainers)

**Increases ARPU By**:
- Bundling SaaS with retainer ("$12K/mo retainer includes 5 SaaS seats, $500 value")

**Reduces Churn By**:
- Quarterly business reviews (show ROI: traffic, conversions, revenue attributed to site)

---

### Q4 (Months 10–12): Expand Margins
**Goal**: $1M revenue, 70%+ gross margin  
**Ships**:
- 2 Tier 3 websites ($250K each)
- 5 retainer clients @ $15K/mo
- AI workshop becomes online course ($500 self-paced, $2K live cohort)

**Increases ARPU By**:
- Premium support tier ($5K/mo for <4hr response time)

**Reduces Churn By**:
- Annual contracts with 10% discount (locks in revenue, reduces sales cycles)

---

## Risks

### Technical Risks

| Risk | Severity | Mitigation | Code Evidence |
|------|----------|-----------|---------------|
| **No automated testing** – Bugs ship to production | Medium | Add Playwright for E2E tests, Jest for unit tests (GitHub Actions CI in Q2) | No `/tests` directory found in codebase scan |
| **Legacy peer deps** – `--legacy-peer-deps` flag indicates package conflicts | Low | Audit `package.json` (line 80), upgrade to stable Tailwind v4 when released | `/package.json` lines show beta versions |
| **No staging environment** – Clients see bugs in real-time | Medium | Use Vercel preview deployments per Git branch (already enabled by default) | `/vercel.json` config supports this |
| **Single dev dependency** – Robera is sole developer | High | Cross-train Amanti (designer) on React basics, hire junior dev in Q2 | `/src/lib/content/team.ts` shows 3-person team |

---

### Market Risks

| Risk | Severity | Mitigation |
|------|----------|-----------|
| **AI commoditizes design** – Competitors use same tools | Medium | Double down on brand voice ("We take simple ideas seriously") and process speed (48hr turnarounds) as differentiators |
| **Economic downturn** – Marketing budgets cut first | High | Pivot to "upgrade existing site" offers ($10K–$20K vs. $50K+ net new) + workshops for laid-off professionals |
| **Client concentration** – 1 client = 40% revenue | High | Cap any client at 25% of quarterly revenue; build pipeline of 10+ active prospects |
| **Talent retention** – Designer/dev poached by big agency | Medium | Profit-sharing plan (10% net profit split among team), flexible remote work |

---

### Dependency Risks

| Risk | Severity | Mitigation |
|------|----------|-----------|
| **Vercel pricing changes** – Costs spike if traffic grows | Low | Monitor usage monthly, consider Cloudflare Pages as backup (also free tier) |
| **Google Calendar API limits** – Booking link breaks | Low | Add Calendly as backup (identical UX, more reliable API) |
| **AI tool (Claude/ChatGPT) pricing hikes** – Margin squeeze | Medium | Lock in annual contracts with OpenAI/Anthropic; build prompts that work across multiple models |
| **React/Next.js breaking changes** – Major version upgrades require refactor | Low | Stay on LTS versions, avoid experimental features (already doing this per `/next.config.ts`) |

---

## Gaps & Pragmatic Defaults

| Gap | Impact | Default Solution |
|-----|--------|-----------------|
| **No pricing listed on site** | Visitors can't self-qualify | Add `/pricing` page with ballpark ranges (e.g., "Websites start at $25K") to reduce unqualified calls |
| **No testimonials component** | Trust signals missing | Build `<Testimonial>` component in Q1, add 3 quotes to `/work` page after first 3 projects |
| **No blog/content marketing** | Zero organic traffic | Launch `/blog` with 12 posts in Q1 (target long-tail SEO) |
| **No form backend** | Leads must use email or calendar | Add Resend.com API route (`/api/contact`) in Week 4, ~2 hours dev time |
| **No CRM** | Leads tracked in email threads | Use Notion "Deals" database (free, <1 hour setup) with kanban view |
| **No time tracking** | Can't measure project profitability | Use Toggl (free tier, 2 min/day to log time) |

---

**Total Investment to Fill Gaps**: <$500 (Resend, Toggl, Notion paid tiers) + ~10 hours dev time.

---

## Summary: 90-Day Revenue Path

| Week | Action | Revenue | Cumulative |
|------|--------|---------|-----------|
| 1–4 | Close 1 Tier 1 website ($30K) | $30K | $30K |
| 5–8 | Close 2 Tier 1 ($30K ea), 1 workshop cohort ($2K) | $62K | $92K |
| 9–12 | Close 1 Tier 2 ($75K), 2 Tier 1 ($30K ea), 2 workshops ($2K ea) | $139K | $231K |

**90-Day Target**: $231K (assumes 50% upfront payment collected, 50% Net-30 after delivery)  
**Margin**: ~70% = $162K gross profit  
**Team Cost**: $75/hr × 600 hrs = $45K  
**Net Profit**: $117K (50% profit margin)

**This exceeds the $250K ARR goal when annualized ($231K × 4 quarters = $924K run rate).**

---

## Next 3 High-Leverage Actions

1. **Add `/pricing` page** (2 hours) – Reduce unqualified inbound, set expectation of premium positioning
2. **Launch LinkedIn content series** (start Week 1) – 3 posts/week showcasing case studies, process breakdowns, AI workflows
3. **Build lead magnet + email capture** (4 hours) – "Anti-Process Playbook" PDF + Resend.com API route for downloads

**When these are done, GTM engine is live.**

---

**Last Updated**: 2025-10-20  
**Next Review**: End of Week 4 (measure against Proof Metrics table)
