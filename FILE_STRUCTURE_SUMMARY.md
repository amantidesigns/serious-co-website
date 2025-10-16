# Work Pages - File Structure & Control Summary

## 📊 At a Glance

```
MAIN WORK PAGE (/work)
  File 1: src/app/work/page.tsx
          └─ Server component for metadata & SEO
  
  File 2: src/app/work/CaseStudiesClient.tsx
          └─ Client component for layout & interactivity

INDIVIDUAL CASE STUDY PAGES
  File 1: src/app/work/jayded-af/page.tsx
  File 2: src/app/work/healthrive-recovery/page.tsx
          └─ Each is a separate server component
```

---

## 🎯 Main Work Page (/work)

### Overview
When someone visits `https://example.com/work`, they see:
- A hero section with eyebrow, heading, and description
- A grid of case study cards
- Interactive hover effects and previews

### Two Files Control This:

#### 1. **`src/app/work/page.tsx`** (Server Component)
- ~40 lines
- **Purpose**: Page wrapper and SEO
- **Controls**:
  - Page title: "Our Work - A Very Serious Company"
  - Page description (SEO)
  - Metadata (OpenGraph, Twitter cards)
  - JSON-LD structured data for search engines

**Key code**:
```tsx
export const metadata: Metadata = {
  title: "Our Work - A Very Serious Company",
  description: "Here are some recent projects...",
  openGraph: { ... },
  twitter: { ... }
};

export default function OurWorkPage() {
  return (
    <ContentPageLayout>
      <CaseStudiesClient />
      {/* Structured data script */}
    </ContentPageLayout>
  );
}
```

#### 2. **`src/app/work/CaseStudiesClient.tsx`** (Client Component)
- ~441 lines
- **Purpose**: Layout and interactivity
- **Controls**:
  - Hero section (eyebrow, heading, description)
  - Case study cards grid
  - Card hover effects
  - Desktop floating previews
  - Mobile sheet previews
  - Responsive design

**Main sections**:
- **Lines 382-393**: Hero section layout
  ```tsx
  <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
    <h1>Our Work</h1>
    <h2>Simple ideas executed seriously. Real brands, real results.</h2>
    <p>We take our clients' visions seriously...</p>
  </div>
  ```

- **Lines 307-378**: Case studies array with project data
  ```tsx
  const caseStudies: CaseStudy[] = [
    { title: "Jayded AF", ... },
    { title: "HealThrive Recovery", ... },
    // ... more projects
  ];
  ```

- **Lines 395-438**: Grid mapping
  ```tsx
  <div className="space-y-12">
    {caseStudies.map((study, index) => (
      <CaseStudyCard study={study} index={index} ... />
    ))}
  </div>
  ```

---

## 🎯 Individual Case Study Pages

### Jayded AF (`/work/jayded-af`)
### HealThrive Recovery (`/work/healthrive-recovery`)

### Overview
Each case study has its own individual page showing:
- Project-specific hero section
- Project details (team, timeline, tech stack)
- Project media (video or image)
- Navigation to other case studies
- Call-to-action section

### Single File Controls Each:

#### **`src/app/work/jayded-af/page.tsx`** (Server Component)
- ~182 lines
- **Purpose**: Individual case study page
- **Controls**:
  - Page metadata and SEO
  - Hero section with project name and description
  - Project details display
  - Tech stack tags
  - Project media
  - Navigation components

**Main sections**:
- **Lines 10-32**: Metadata for SEO
  ```tsx
  export const metadata: Metadata = {
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "Premium gin martini brand website design case study...",
  };
  ```

- **Line 36**: Page title and layout wrapper
  ```tsx
  <ContentPageLayout title="Jayded AF" centerTitle={false}>
  ```

- **Lines 41-45**: CaseStudyHeroHeader component
  ```tsx
  <CaseStudyHeroHeader
    projectName="Jayded AF"
    description="We created a sophisticated website..."
  />
  ```

- **Lines 48-92**: Project details (team, turnaround, etc.)
- **Lines 99-108**: Tech stack tags
- **Lines 118-125**: Project media (video)
- **Line 129**: Navigation to other case studies
- **Line 132**: CTA section

#### **`src/app/work/healthrive-recovery/page.tsx`** (Server Component)
- ~168 lines
- **Same structure** as Jayded AF, but with:
  - Different project name
  - Different description
  - Different team members
  - Different tech stack
  - Different project media (image instead of video)

---

## 🗂️ Complete File Structure

```
src/app/work/
│
├── page.tsx
│   └─ PURPOSE: Server wrapper, metadata, SEO
│   └─ SIZE: ~40 lines
│   └─ CONTROLS: Page title, description, structured data
│   └─ WHAT IT RENDERS: ContentPageLayout + CaseStudiesClient
│
├── CaseStudiesClient.tsx
│   └─ PURPOSE: Layout and interactivity
│   └─ SIZE: ~441 lines
│   └─ CONTROLS: Hero section, cards grid, hover effects, previews
│   └─ WHAT IT RENDERS: Hero + Case study cards grid
│
├── jayded-af/
│   └── page.tsx
│       └─ PURPOSE: Jayded AF case study page
│       └─ SIZE: ~182 lines
│       └─ CONTROLS: Project details, media, navigation, CTA
│       └─ WHAT IT RENDERS: CaseStudyHeroHeader + Details + Media
│
└── healthrive-recovery/
    └── page.tsx
        └─ PURPOSE: HealThrive Recovery case study page
        └─ SIZE: ~168 lines
        └─ CONTROLS: Project details, media, navigation, CTA
        └─ WHAT IT RENDERS: CaseStudyHeroHeader + Details + Media
```

---

## 📋 Quick Reference: What Controls What?

| Feature | File | Lines |
|---------|------|-------|
| Main page title (SEO) | `page.tsx` | 5-6 |
| Main page description (SEO) | `page.tsx` | 5-7 |
| Hero eyebrow "Our Work" | `CaseStudiesClient.tsx` | 384-385 |
| Hero heading "Simple ideas..." | `CaseStudiesClient.tsx` | 387-389 |
| Hero description "We take..." | `CaseStudiesClient.tsx` | 390-392 |
| Case study cards list | `CaseStudiesClient.tsx` | 307-378 |
| Card hover effects | `CaseStudiesClient.tsx` | 186-242 |
| Jayded AF title | `jayded-af/page.tsx` | 36 |
| Jayded AF hero description | `jayded-af/page.tsx` | 42-44 |
| Jayded AF team | `jayded-af/page.tsx` | 60-89 |
| Jayded AF media | `jayded-af/page.tsx` | 118-125 |
| HealThrive title | `healthrive-recovery/page.tsx` | 36 |
| HealThrive hero description | `healthrive-recovery/page.tsx` | 42-44 |
| HealThrive team | `healthrive-recovery/page.tsx` | 60-79 |
| HealThrive media | `healthrive-recovery/page.tsx` | 106-110 |

---

## 🧩 Key Components Used

### Main Work Page Uses:
- `ContentPageLayout` - Wrapper with background and layout
- `CaseStudiesClient` - Main layout and cards

### Individual Case Study Pages Use:
- `ContentPageLayout` - Wrapper with background and layout
- `CaseStudyHeroHeader` - Hero section with project name and description
- `CaseStudyNavigation` - Navigation to other case studies
- `CaseStudyCTA` - Call-to-action section
- `ProjectTag` - Tech stack tags

---

## 🔄 How Data Flows

### Main Page Flow:
```
URL: /work
  ↓
page.tsx (metadata + SEO)
  ↓
CaseStudiesClient.tsx (layout + interactivity)
  ├─ Hero section
  ├─ caseStudies array
  └─ CaseStudyCard components
```

### Individual Page Flow:
```
URL: /work/jayded-af
  ↓
jayded-af/page.tsx (metadata + layout)
  ├─ Metadata (SEO)
  ├─ CaseStudyHeroHeader
  ├─ Project details
  ├─ Tech stack
  ├─ Media display
  ├─ CaseStudyNavigation
  └─ CaseStudyCTA
```

---

## ✏️ Common Edits

### To Change Main Page Hero Text:
1. Edit `src/app/work/CaseStudiesClient.tsx`
2. Lines 384-392 (eyebrow, heading, description)

### To Add a New Case Study to List:
1. Edit `src/app/work/CaseStudiesClient.tsx`
2. Add item to caseStudies array (lines 307-378)

### To Change a Case Study's Details:
1. Edit `src/app/work/[project]/page.tsx`
2. Change specific sections:
   - Metadata (lines 10-32)
   - CaseStudyHeroHeader props (lines 42-44)
   - Team section (lines 60-92)
   - Tech stack (lines 99-108)
   - Media (lines 114-126)

### To Create a New Case Study Page:
1. Create new directory: `src/app/work/new-project/`
2. Create `page.tsx` with same structure as existing case studies
3. Add to caseStudies array in `CaseStudiesClient.tsx`

---

## 📝 Summary

### Main Work Page (`/work`)
- **Layout controlled by**: `CaseStudiesClient.tsx`
- **Metadata controlled by**: `page.tsx`
- **What you see**: Hero + List of case study cards

### Individual Case Studies (`/work/jayded-af`, `/work/healthrive-recovery`)
- **Layout controlled by**: Each project's own `page.tsx`
- **Metadata controlled by**: Same `page.tsx` file
- **What you see**: Project hero + Details + Media + Navigation

---

**Last Updated**: October 16, 2025
**Status**: Current and accurate
