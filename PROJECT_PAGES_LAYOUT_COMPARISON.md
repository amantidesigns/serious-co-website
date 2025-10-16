# Project Pages Layout Comparison

## Visual Structure Comparison

### BEFORE: Scattered Details Layout

```
┌─────────────────────────────────────────────┐
│  EYEBROW: Case Study                        │
│  HEADER: Jayded AF                          │
│  SUBHEADER: We created a sophisticated...   │
└─────────────────────────────────────────────┘

    (Hardcoded body text)

┌──────────┬──────────┬──────────────────────┐
│ Hardcoded│ Hardcoded│ Design team pills    │
│ Details  │ Details  │ (hardcoded links)    │
│ Grid     │ Grid     │                      │
└──────────┴──────────┴──────────────────────┘

┌─────────────────────────────────────────────┐
│  Tech Stack Section                         │
│  (separate hardcoded tech tags)             │
└─────────────────────────────────────────────┘

    (Media)
    (Navigation)
```

**Issues:**
- Details hardcoded on every page
- No consistent icon treatment
- Different detail arrangements per page
- Not matching AI training page style
- Scattered component usage
- Data repeated in multiple files

---

### AFTER: Centered, Data-Driven Layout

```
┌───────────────────────────────────────────────┐
│         EYEBROW: Case Study                    │
│         HEADER: Jayded AF                      │
│         SUBHEADER: We created a sophisticated… │
└───────────────────────────────────────────────┘

        (Centered body text with max-width)

┌─────────────────────────────────────────────────┐
│  ⊙ Turnaround    ▭ Client Source    Team Pills │
│  1.5 months      Cold call          [Avatar]   │
│                                      Amanti     │
│                                                 │
│                                      [Avatar]   │
│                                      Liban      │
│                                                 │
│                                      [Avatar]   │
│                                      Robera     │
└─────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  Tech Stack                                         │
│  [Web Design] [Web Dev] [Figma] [Vercel]           │
│  [Cursor]     [Lovable]                            │
└────────────────────────────────────────────────────┘

      (Centered media with max-width)
      (Navigation)
```

**Benefits:**
- ✓ Consistent icon indicators (⊙ = time, ▭ = source)
- ✓ Centered layout with consistent max-width
- ✓ Reusable components (ProjectDetailsSection, TechStackSection)
- ✓ Single source of truth (caseStudies.ts)
- ✓ Matches AI training page aesthetic
- ✓ Responsive grid layout
- ✓ No data duplication

---

## Component Architecture

### Old Structure (Before)
```
jayded-af/page.tsx ────┐
                       ├─ Hardcoded details
                       ├─ Hardcoded team members
healthrive-recovery/page.tsx ─┤
                       ├─ Hardcoded tech stack
                       ├─ Hardcoded links
                       └─ CaseStudyHeroHeader
```

### New Structure (After)
```
caseStudies.ts (Single Source of Truth)
    │
    ├─ Jayded AF data
    │  └─ turnaround, clientSource, designTeam[], techStack[]
    │
    └─ HealThrive Recovery data
       └─ turnaround, clientSource, designTeam[], techStack[]

jayded-af/page.tsx
    ├─ Fetches from caseStudies.ts
    ├─ CaseStudyHeroHeader (component)
    ├─ ProjectDetailsSection (component)
    │  └─ Renders: turnaround + icon
    │  └─ Renders: clientSource + icon
    │  └─ Renders: designTeam pills with links
    │
    └─ TechStackSection (component)
       └─ Maps icons to tech items
       └─ Renders linked/non-linked tags

healthrive-recovery/page.tsx
    └─ Same structure as jayded-af
```

---

## Spacing & Responsive Behavior

### Desktop (≥ 768px)
```
Max Width: 896px (theme.sizing.maxWidth.lg)

┌─────────────────────────────────────────┐
│  Turnaround    Client Source   Team (×2) │
│  ⊙ 1.5 months  ▭ Cold call      Pills    │
└─────────────────────────────────────────┘

Grid: grid-cols-1 md:grid-cols-4
- Col 1: Turnaround
- Col 2: Client Source
- Col 3-4: Design Team (spans 2)
```

### Mobile (< 768px)
```
┌──────────────────┐
│ Turnaround       │
│ ⊙ 1.5 months     │
├──────────────────┤
│ Client Source    │
│ ▭ Cold call      │
├──────────────────┤
│ Team             │
│ [Pills...]       │
└──────────────────┘

Grid: grid-cols-1 md:grid-cols-4
- All items stack vertically
- Full width on mobile
```

---

## Data Schema Changes

### Before
```typescript
// Scattered hardcoded values in each page
// E.g., in jayded-af/page.tsx:
const turnaround = "1.5 months";
const clientSource = "Cold call";
const designTeam = [
  { name: "Amanti", slug: "amanti-melkamu", image: "/team/..." },
  // ... hardcoded
];
```

### After
```typescript
// Single source of truth in caseStudies.ts
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  workType: string;
  image: string;
  featured: boolean;
  turnaround?: string;           // ← NEW
  clientSource?: string;         // ← NEW
  designTeam?: TeamMember[];     // ← NEW
  techStack?: TechStackItem[];   // ← NEW
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Jayded AF",
    slug: "jayded-af",
    // ... existing fields ...
    turnaround: "1.5 months",
    clientSource: "Cold call",
    designTeam: [
      { name: "Amanti", slug: "amanti-melkamu", image: "/team/..." },
      // ...
    ],
    techStack: [
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      // ...
    ]
  }
];
```

---

## Icon Indicators

### Turnaround Time
```
⊙ (Circular Icon)
 
SVG: Circle with center dot
Meaning: Represents a timer/clock for time duration
```

### Client Source
```
▭ (Square Icon)

SVG: Square with center dot
Meaning: Represents origin/source point
```

Both icons use:
- Subtle borders: `border-white/70`
- Consistent sizing: `w-5 h-5`
- Light color scheme matching theme
- Visual balance with text content

---

## Accessibility & Performance

### Accessibility Improvements
- ✓ Semantic HTML structure
- ✓ Proper heading hierarchy
- ✓ Link text clearly describes destination (e.g., `/team/[slug]`)
- ✓ Image alt texts for team avatars
- ✓ Proper contrast ratios maintained

### Performance Improvements
- ✓ Reduced component duplication (reusable components)
- ✓ Single data source (no API calls repeated)
- ✓ Smaller page file sizes
- ✓ Faster builds (less duplicate code)
- ✓ Smaller JS bundle (shared components)

---

## Implementation Timeline

| Component | Status | Usage |
|-----------|--------|-------|
| ProjectDetailsSection | ✓ Created | Jayded AF, HealThrive Recovery |
| TechStackSection | ✓ Created | Jayded AF, HealThrive Recovery |
| CaseStudyHeroHeader | ✓ Updated | All project pages |
| caseStudies.ts | ✓ Updated | All project pages |
| jayded-af/page.tsx | ✓ Refactored | Using new components & data |
| healthrive-recovery/page.tsx | ✓ Refactored | Using new components & data |

---

## Extensibility

Adding a new case study now requires only:

1. Add entry to `caseStudies` array in `src/lib/content/caseStudies.ts`
2. Create `/app/work/[slug]/page.tsx` following the pattern
3. Done! Same layout, styling, and behavior automatically applied

```typescript
// Example: Adding "Pet Love Cremation" case study

{
  id: "3",
  title: "Pet Love Cremation",
  slug: "pet-love-cremation",
  description: "...",
  category: "...",
  workType: "...",
  image: "/pet-love-cremation-project.gif",
  featured: true,
  turnaround: "2 months",
  clientSource: "Agency referral",
  designTeam: [
    { name: "Amanti", slug: "amanti-melkamu", image: "/team/..." },
  ],
  techStack: [
    { label: "Web Design", isLink: true, href: "/services/web-design" },
    // ...
  ]
}
```

Then use the same page component pattern - the data-driven approach handles everything!

