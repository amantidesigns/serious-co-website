# Proposed Enhancements

## 1. Data-driven case studies with preview and filtering
- **What to build**: Replace the hard-coded case study list with structured content sourced from a CMS (e.g., Sanity, Contentful) and render dedicated detail pages. Add client-side filtering (industry, service type) plus preview modals for "coming soon" projects.
- **Why it matters**: The current `CaseStudiesClient` component mixes presentation logic with placeholder data and uses `href="#"` for unfinished work, triggering a custom modal (`handleClick`) to show a whimsical alert. 【F:src/app/work/CaseStudiesClient.tsx†L9-L165】 Persisting this data in a CMS would let non-developers update content, while filters improve UX for prospects scanning relevant work.
- **Suggested approach**:
  - Introduce a shared `case-studies.ts` schema and fetch it in `generateStaticParams` for `app/work/[slug]/page.tsx` to create detail routes.
  - Refactor the client component into smaller pieces (e.g., `CaseStudyList`, `CaseStudyFilters`, `CaseStudyPreview`) that consume typed data.
  - Replace the ad-hoc DOM modal with a controlled dialog using the existing ShadCN `Sheet` components already imported but unused in the file. 【F:src/app/work/CaseStudiesClient.tsx†L5-L8】

## 2. Mega-nav populated from Services definitions
- **What to build**: Extract service offerings into a shared configuration and drive both the Services page sections and the navigation mega-menu from that source. Enable quick links (e.g., "Brand & Strategy", "Digital & Web") and contextual CTAs for booking.
- **Why it matters**: `Navbar.tsx` currently defines placeholder `DATA_SOLUTIONS`, `DATA_PLATFORM_CASE`, and `DATA_RESOURCES` arrays filled with `href="#"` entries and lorem-style labels. 【F:src/components/Navbar.tsx†L52-L200】 Meanwhile `src/app/services/page.tsx` contains the real offerings grouped under Brand & Strategy, Digital & Web, and Design & Production. 【F:src/app/services/page.tsx†L35-L134】 Centralizing this data avoids duplication, keeps navigation accurate, and lets prospective clients find relevant offerings faster.
- **Suggested approach**:
  - Create `lib/content/services.ts` to export structured groups (title, description, icon, slug).
  - Update `Navbar` to map over those groups for the mega-menu, linking to hash anchors (`#brand-strategy`, etc.) in the Services page.
  - Enhance the Services page to read from the same config, ensuring parity and easing future updates.

## 3. Guided project intake & FAQ search
- **What to build**: Add an interactive "Start a Project" form with progressive disclosure (timeline, budget, goals) plus searchable FAQs embedded on relevant pages.
- **Why it matters**: The FAQ page answers key questions but ends with a generic invitation to email. 【F:src/app/faq/page.tsx†L34-L105】 Similarly, Services sections describe offerings without capturing leads contextually. 【F:src/app/services/page.tsx†L35-L134】 A guided intake flow can qualify leads automatically, and a searchable FAQ widget reduces repetition.
- **Suggested approach**:
  - Implement a multi-step form component (e.g., using React Hook Form) and surface it via a floating CTA or modal from Services/FAQ pages.
  - Store submissions via API route that integrates with CRM (HubSpot, Airtable) for team follow-up.
  - Augment the FAQ section with a collapsible, filterable list and connect it to the CTA so prospects can self-serve before submitting.
