# Project Pages Redesign - Layout Update

## Overview
Updated all project case study pages to match the clean, centered layout of the AI Essentials Workshop page. The design now features a consistent eyebrow, header, sub-header, and body layout with reusable components for details display.

## Key Changes

### 1. New Reusable Components

#### `ProjectDetailsSection.tsx`
- **Purpose**: Displays project metadata in a centered grid layout matching the AI training page style
- **Features**:
  - Turnaround time with custom circular icon indicator
  - Client source information with square icon indicator
  - Design team with clickable team member pills (showing avatar images with cross-referencing)
  - Responsive grid: 1 column on mobile, 4 columns on desktop (with team spanning 2 columns)
  - Centered layout with max-width container
- **Props**: `turnaround`, `clientSource`, `designTeam`

#### `TechStackSection.tsx`
- **Purpose**: Displays technology stack in a dedicated centered section
- **Features**:
  - Flex layout with wrapping for tech stack items
  - Support for both linked items (e.g., services) and non-linked items (e.g., tools)
  - Icon support for visual indicators
  - Centered layout with max-width container
- **Props**: `items` (array of tech stack items with optional icons)

### 2. Updated Data Structure

#### `src/lib/content/caseStudies.ts`
Extended the `CaseStudy` interface with new fields:
```typescript
interface CaseStudy {
  // ... existing fields ...
  turnaround?: string;
  clientSource?: string;
  designTeam?: TeamMember[];
  techStack?: TechStackItem[];
}

interface TeamMember {
  name: string;
  slug: string;
  image: string;
}

interface TechStackItem {
  label: string;
  icon?: string;
  isLink?: boolean;
  href?: string;
}
```

Updated case studies with full data:
- **Jayded AF**: 1.5 months turnaround, "Cold call" source, 3 team members, 6 tech stack items
- **HealThrive Recovery**: 3 weeks turnaround, "Referral from previous client" source, 2 team members, 5 tech stack items

### 3. Updated Components

#### `CaseStudyHeroHeader.tsx`
- Uses theme tokens for consistent styling
- Improved spacing and typography using theme values
- Centered layout maintained

### 4. Refactored Pages

#### `src/app/work/jayded-af/page.tsx`
- Replaced hardcoded details with data-driven approach using caseStudies data
- Reusable `ProjectDetailsSection` component for metadata display
- Reusable `TechStackSection` component for tech stack
- Centered layout with consistent spacing (space-y-24)
- Dynamic icon mapping for tech stack items

#### `src/app/work/healthrive-recovery/page.tsx`
- Same refactor as Jayded AF page
- Uses HealThrive Recovery data from caseStudies
- Dynamic icon mapping for its unique tech stack (Figma, Webflow, Midjourney)

## Design Principles Applied

### 1. **Centered Layout**
- All sections use `flex justify-center` with `px-8` for consistent horizontal centering
- `max-w-4xl` container for content width matching AI training page

### 2. **Consistent Spacing**
- Sections separated by `space-y-24` for large vertical spacing
- Details grid uses `gap-8` for consistent internal spacing
- Built on theme tokens for maintainability

### 3. **Icon-Based Detail Indicators**
- Turnaround Time: Circular icon with center dot (time indicator)
- Client Source: Square icon with center dot (origin indicator)
- Matches subtle indicator style from AI training page

### 4. **Reusable Components**
- No hardcoded data in page components
- All data sourced from `caseStudies.ts` for single source of truth
- Easy to extend to new case studies

### 5. **Team Member Cross-Referencing**
- Team member pills link to `/team/[slug]` pages
- Shows avatar images with name
- Maintains visual consistency with existing team UI patterns

## Technical Implementation

### Data Flow
```
caseStudies.ts (single source of truth)
    ↓
[slug]/page.tsx (fetches data)
    ↓
ProjectDetailsSection (renders turnaround, clientSource, designTeam)
TechStackSection (renders tech stack)
```

### Icon Mapping
Tech stack icons are dynamically mapped in the page component:
- Figma → FigmaIcon
- Vercel → VercelIcon
- Cursor → CursorIcon
- Lovable → LovableIcon
- Webflow → WebflowIcon
- Midjourney → MidjourneyIcon

This allows for flexibility in data storage (storing icon names as strings) while rendering actual SVG components.

## Responsive Design

### Mobile (< 768px)
- Details grid: 1 column
- Design team: Full width below other details
- All elements maintain touch-friendly spacing

### Tablet & Desktop (≥ 768px)
- Details grid: 4 columns
- Design team: Spans 2 columns
- Consistent max-width container ensures readability

## Benefits

1. **DRY Principle**: No data duplication between pages
2. **Maintainability**: Single source of truth in caseStudies.ts
3. **Scalability**: Easy to add new case studies with the same layout
4. **Consistency**: Matches AI training page visual hierarchy
5. **Accessibility**: Proper semantic HTML and cross-references
6. **Performance**: Reusable components reduce bundle size

## Future Enhancements

1. Add more case studies following the same pattern
2. Extract additional metadata (budget, client industry, etc.)
3. Create variant components for different detail types
4. Add filtering/sorting by team member, tech stack, or turnaround time
