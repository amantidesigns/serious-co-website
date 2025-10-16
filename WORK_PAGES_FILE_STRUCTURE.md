# Work Pages File Structure - Complete Guide

## 📁 Directory Structure

```
src/app/work/
├── page.tsx                          ← MAIN WORK PAGE (listing)
├── CaseStudiesClient.tsx             ← CLIENT COMPONENT (renders case studies list)
├── jayded-af/
│   └── page.tsx                      ← INDIVIDUAL CASE STUDY PAGE
└── healthrive-recovery/
    └── page.tsx                      ← INDIVIDUAL CASE STUDY PAGE
```

---

## 🎯 Main Work Page (Listing)

### File: `src/app/work/page.tsx`

**Purpose**: Server-side page wrapper for the main work/case studies listing page

**What it does**:
- Defines metadata (title, description, SEO)
- Renders metadata for the main work page
- Uses `ContentPageLayout` wrapper
- Imports and renders the `CaseStudiesClient` component
- Adds JSON-LD structured data for search engines

**Key features**:
```tsx
export const metadata: Metadata = {
  title: "Our Work - A Very Serious Company",
  description: "...",
  // SEO metadata
};

export default function OurWorkPage() {
  return (
    <ContentPageLayout>
      <CaseStudiesClient />
      {/* Structured data */}
    </ContentPageLayout>
  );
}
```

**Key line**: `<CaseStudiesClient />` - This component renders the actual content

---

## 🎨 Main Work Page Layout

### File: `src/app/work/CaseStudiesClient.tsx`

**Purpose**: Client-side component that renders the case studies listing with interactive features

**What it does**:
- Renders the hero header section with eyebrow, heading, and description
- Manages interactive case study cards with hover effects
- Handles responsive design (mobile vs desktop)
- Shows floating image previews on desktop
- Displays mobile sheet preview on touch devices
- Maps through case studies data array and renders each as a card

**Key sections**:
1. **Hero Header** (lines 382-393):
   ```tsx
   <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
     <h1>Our Work</h1>
     <h2>Simple ideas executed seriously. Real brands, real results.</h2>
     <p>We take our clients' visions seriously...</p>
   </div>
   ```

2. **Case Study Cards** (lines 395-438):
   - Loops through caseStudies array
   - Renders CaseStudyCard component for each
   - Includes interactive hover effects

**File size**: ~441 lines
**Type**: Client Component (`"use client"`)

---

## 🎯 Individual Case Study Pages

### File: `src/app/work/jayded-af/page.tsx`

**Purpose**: Individual case study page for Jayded AF project

**What it does**:
- Displays metadata for the specific case study
- Renders the case study hero header
- Shows project details (turnaround time, team, tech stack)
- Displays project media (video)
- Shows navigation to other case studies
- Includes CTA section
- Adds structured data for SEO

**Key components used**:
```tsx
import ContentPageLayout from "@/components/ContentPageLayout";
import CaseStudyHeroHeader from "@/components/CaseStudyHeroHeader";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import CaseStudyCTA from "@/components/CaseStudyCTA";
```

**Structure**:
```
ContentPageLayout
└── CaseStudyHeroHeader
├── Project Details Section
├── Tech Stack Tags
├── Project Media (Video)
├── CaseStudyNavigation
├── CaseStudyCTA
└── Back link
```

---

### File: `src/app/work/healthrive-recovery/page.tsx`

**Purpose**: Individual case study page for HealThrive Recovery project

**Same structure as Jayded AF** but with:
- Different project name
- Different description
- Different project media (image instead of video)
- Different team members
- Different tech stack
- Different metadata

---

## 🔄 Control Flow Diagram

```
MAIN WORK PAGE
│
├─→ src/app/work/page.tsx (Server)
│   ├─ Defines metadata
│   ├─ Sets up SEO
│   └─ Renders ContentPageLayout
│
└─→ CaseStudiesClient.tsx (Client)
    ├─ Hero Header Section
    ├─ Case Studies Array Data
    ├─ CaseStudyCard Components
    └─ Interactive Features
        ├─ Hover effects
        ├─ Floating previews
        └─ Mobile sheets


INDIVIDUAL CASE STUDY PAGES
│
├─→ src/app/work/jayded-af/page.tsx (Server)
│   ├─ Defines metadata
│   ├─ Renders ContentPageLayout
│   ├─ CaseStudyHeroHeader
│   ├─ Project details
│   └─ Media display
│
└─→ src/app/work/healthrive-recovery/page.tsx (Server)
    ├─ Defines metadata
    ├─ Renders ContentPageLayout
    ├─ CaseStudyHeroHeader
    ├─ Project details
    └─ Media display
```

---

## 📊 File Responsibilities

| File | Type | Purpose | Lines |
|------|------|---------|-------|
| `page.tsx` (work/) | Server | Main page wrapper & SEO | ~40 |
| `CaseStudiesClient.tsx` | Client | List layout & interactivity | ~441 |
| `jayded-af/page.tsx` | Server | Jayded AF case study | ~182 |
| `healthrive-recovery/page.tsx` | Server | HealThrive Recovery case study | ~168 |

---

## 🧩 Key Components Used

### CaseStudyHeroHeader
- **File**: `src/components/CaseStudyHeroHeader.tsx`
- **Used in**: Individual case study pages
- **Props**: `projectName`, `description`

### ContentPageLayout
- **File**: `src/components/ContentPageLayout.tsx`
- **Used in**: Both main and individual pages
- **Props**: `children`, `title`, `className`, `centerTitle`

### CaseStudyNavigation
- **File**: `src/components/CaseStudyNavigation.tsx`
- **Used in**: Individual case study pages
- **Props**: `currentSlug`

### CaseStudyCTA
- **File**: `src/components/CaseStudyCTA.tsx`
- **Used in**: Individual case study pages

---

## 🎨 Layout Control Points

### Main Page Layout (CaseStudiesClient.tsx)
Controls:
- Hero section styling
- Case study card layout
- Responsive behavior (mobile/desktop)
- Interactive hover effects
- Preview popups

### Individual Page Layout (page.tsx files)
Controls:
- Page title and metadata
- Hero header section
- Project details display
- Media display
- Navigation between case studies

---

## 📝 Example: Adding a New Case Study

To add a new case study, you would:

1. Create a new directory: `src/app/work/new-project/`

2. Create `src/app/work/new-project/page.tsx`:
```tsx
import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import CaseStudyHeroHeader from "@/components/CaseStudyHeroHeader";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import CaseStudyCTA from "@/components/CaseStudyCTA";

export const metadata: Metadata = {
  title: "New Project - A Very Serious Company",
  description: "...",
};

export default function NewProjectCaseStudy() {
  return (
    <ContentPageLayout title="New Project" centerTitle={false}>
      <div className="relative z-20 text-white">
        <CaseStudyHeroHeader
          projectName="New Project"
          description="Description of the new project..."
        />
        {/* Rest of content */}
      </div>
    </ContentPageLayout>
  );
}
```

3. Add project to `CaseStudiesClient.tsx` caseStudies array

---

## 🔑 Key Takeaways

### Main Work Page (`/work`)
- **Layout File**: `CaseStudiesClient.tsx` (client component)
- **Wrapper**: `page.tsx` (server component for metadata)
- **Controls**: Hero, listing grid, interactivity

### Individual Case Studies (`/work/[slug]`)
- **Layout File**: `[slug]/page.tsx` (each project has its own)
- **Wrapper**: `ContentPageLayout` (shared component)
- **Controls**: Project title, details, media, navigation

---

## 📋 Quick Reference

```
WANT TO CHANGE...          EDIT THIS FILE
─────────────────────────────────────────────────────
Main page hero text        src/app/work/CaseStudiesClient.tsx (lines 382-393)
Main page card layout      src/app/work/CaseStudiesClient.tsx (lines 395-438)
Main page styling          src/app/work/CaseStudiesClient.tsx (className props)
Main page SEO/metadata     src/app/work/page.tsx (metadata object)
─────────────────────────────────────────────────────
Jayded AF title            src/app/work/jayded-af/page.tsx (line 36)
Jayded AF description      src/app/work/jayded-af/page.tsx (CaseStudyHeroHeader)
Jayded AF team/details     src/app/work/jayded-af/page.tsx (lines 48-92)
Jayded AF media            src/app/work/jayded-af/page.tsx (lines 114-126)
─────────────────────────────────────────────────────
HealThrive title           src/app/work/healthrive-recovery/page.tsx (line 36)
HealThrive description     src/app/work/healthrive-recovery/page.tsx (CaseStudyHeroHeader)
HealThrive team/details    src/app/work/healthrive-recovery/page.tsx (lines 48-82)
HealThrive media           src/app/work/healthrive-recovery/page.tsx (lines 104-112)
```

---

**File Structure Last Updated**: October 16, 2025
**Status**: Current and accurate
