# Project Pages - Quick Start Guide

## Current Project Pages

✅ `/work/jayded-af` - Jayded AF Premium Gin  
✅ `/work/healthrive-recovery` - HealThrive Recovery Healthcare  

Both pages are now using the new centered layout matching the AI Training page style.

---

## How the Layout Works

### 1. Data-Driven Approach
All project information is stored in `src/lib/content/caseStudies.ts` - the single source of truth.

```typescript
// Just add your project here
{
  id: "1",
  title: "Jayded AF",
  slug: "jayded-af",
  description: "...",
  turnaround: "1.5 months",
  clientSource: "Cold call",
  designTeam: [
    { name: "Amanti", slug: "amanti-melkamu", image: "/team/..." },
  ],
  techStack: [
    { label: "Web Design", isLink: true, href: "/services/web-design" },
    { label: "Figma", icon: "figma" },
  ]
}
```

### 2. Page Structure
Each project page follows the same pattern:

```
1. Hero Section (CaseStudyHeroHeader)
   - Eyebrow: "Case Study"
   - Title: Project Name
   - Description: Project overview

2. Body Text (Centered)
   - Full description of the project

3. Details Section (ProjectDetailsSection)
   - Turnaround time (⊙ icon)
   - Client source (▭ icon)
   - Design team (pills with avatars)

4. Tech Stack (TechStackSection)
   - Services (linked)
   - Tools (with icons)

5. Media (Centered)
   - Project image/video

6. Navigation & CTA
```

---

## Adding a New Case Study

### Step 1: Add Data to `caseStudies.ts`

```typescript
// src/lib/content/caseStudies.ts
{
  id: "3",
  title: "Pet Love Cremation",
  slug: "pet-love-cremation",
  description: "Full description of the project and how we helped them...",
  category: "Pet Services",
  workType: "E-commerce",
  image: "/pet-love-cremation-project.gif",
  featured: true,
  
  // NEW FIELDS - Required for project details
  turnaround: "6 weeks",
  clientSource: "Inbound inquiry",
  designTeam: [
    { name: "Amanti", slug: "amanti-melkamu", image: "/team/amanti-melkamu-color.jpg" },
    { name: "Liban", slug: "liban-kano", image: "/team/liban-kano-color.jpg" },
  ],
  techStack: [
    { label: "Web Design", isLink: true, href: "/services/web-design" },
    { label: "Web Development", isLink: true, href: "/services/web-development" },
    { label: "Figma", icon: "figma" },
    { label: "Next.js", icon: null }, // Or any other icon identifier
  ]
}
```

### Step 2: Create Page File

Create: `src/app/work/pet-love-cremation/page.tsx`

```typescript
import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import CaseStudyHeroHeader from "@/components/CaseStudyHeroHeader";
import ProjectDetailsSection from "@/components/ProjectDetailsSection";
import TechStackSection from "@/components/TechStackSection";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import CaseStudyCTA from "@/components/CaseStudyCTA";
import { caseStudies } from "@/lib/content/caseStudies";
import { FigmaIcon } from "@/components/ProjectTag"; // Import needed icons
import Link from "next/link";
import { theme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Pet Love Cremation Case Study - A Very Serious Company",
  description: "Pet memorial services website design case study...",
};

export default function PetLoveCremationCaseStudy() {
  const caseStudy = caseStudies.find((cs) => cs.slug === "pet-love-cremation");
  
  if (!caseStudy) return null;

  // Map icon strings to actual icon components
  const techStackItems = (caseStudy.techStack || []).map((item) => {
    let icon = undefined;
    if (item.icon === "figma") {
      icon = <FigmaIcon />;
    }
    // Add other icon mappings as needed
    return { ...item, icon };
  });

  return (
    <ContentPageLayout centerTitle={false}>
      <div className="relative z-20 space-y-24 text-white">
        {/* Hero Section */}
        <CaseStudyHeroHeader
          projectName={caseStudy.title}
          description={caseStudy.description}
        />

        {/* Description */}
        <div className="flex justify-center px-8">
          <div className="max-w-4xl">
            <p className="text-lg leading-relaxed text-white/90">
              Full detailed description of the project goes here...
            </p>
          </div>
        </div>

        {/* Project Details */}
        <ProjectDetailsSection
          turnaround={caseStudy.turnaround || ""}
          clientSource={caseStudy.clientSource || ""}
          designTeam={caseStudy.designTeam || []}
          techStack={caseStudy.techStack || []}
        />

        {/* Tech Stack */}
        <TechStackSection items={techStackItems} />

        {/* Project Media */}
        <div className="flex justify-center px-8">
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl w-full">
            <img
              src="/pet-love-cremation-project.gif"
              alt="Pet Love Cremation project"
              className="block w-full h-auto object-contain max-h-[60svh]"
            />
          </div>
        </div>

        {/* Navigation */}
        <CaseStudyNavigation currentSlug="pet-love-cremation" />

        {/* CTA */}
        <CaseStudyCTA />

        {/* Back Link */}
        <div className="flex justify-center">
          <Link href="/work" className="inline-flex items-center text-white/70 hover:text-white">
            ← Back to Our Work
          </Link>
        </div>
      </div>
    </ContentPageLayout>
  );
}
```

### Step 3: Done! ✅

The page will automatically have:
- ✓ Centered layout matching all other projects
- ✓ Responsive grid for details
- ✓ Team member links to team pages
- ✓ Icon indicators
- ✓ Tech stack with proper styling
- ✓ All spacing and styling consistent

---

## Available Icon Options for Tech Stack

Add these to your techStack items in `caseStudies.ts`:

| Icon ID | Component | Tool |
|---------|-----------|------|
| `"figma"` | FigmaIcon | Figma |
| `"vercel"` | VercelIcon | Vercel |
| `"cursor"` | CursorIcon | Cursor |
| `"lovable"` | LovableIcon | Lovable |
| `"webflow"` | WebflowIcon | Webflow |
| `"midjourney"` | MidjourneyIcon | Midjourney |
| `null` | None | No icon |

Then map them in your page:

```typescript
if (item.icon === "figma") {
  icon = <FigmaIcon />;
} else if (item.icon === "vercel") {
  icon = <VercelIcon />;
}
// ... etc
```

---

## File Reference

### Core Files
- `src/components/ProjectDetailsSection.tsx` - Renders turnaround/client/team details
- `src/components/TechStackSection.tsx` - Renders tech stack tags
- `src/lib/content/caseStudies.ts` - All project data
- `src/components/CaseStudyHeroHeader.tsx` - Hero section (eyebrow/title/description)

### Example Pages
- `src/app/work/jayded-af/page.tsx` - Template for new pages
- `src/app/work/healthrive-recovery/page.tsx` - Alternative template

### Components Used In Pages
- `ContentPageLayout` - Main page wrapper
- `CaseStudyNavigation` - Previous/Next project links
- `CaseStudyCTA` - Call-to-action section
- `ProjectTag` - Tech stack tag styling

---

## Layout Details

### Section Spacing
- Between main sections: `space-y-24` (96px)
- Between details: `gap-8` (32px)
- Between tech tags: `gap-2` (8px)

### Responsive Grid
```
Desktop: grid-cols-1 md:grid-cols-4
- Col 1: Turnaround
- Col 2: Client Source
- Col 3-4: Design Team (spans 2)

Mobile: Single column stack
```

### Max Width
- Content container: `max-w-4xl` (896px)
- Hero section: `max-w-4xl` (896px)
- Details section: `max-w-4xl` (896px)
- Tech stack section: `max-w-4xl` (896px)

---

## Styling Reference

### Color & Opacity
- Labels: `text-xs text-white/60`
- Values: `text-sm font-medium text-white`
- Icons: `border-white/70`
- Team pills: `bg-white/10 border border-white/20 hover:bg-white/20`
- Tech tags: Uses ProjectTag component defaults

### Spacing
- Section padding: `px-8` (horizontal)
- Icon size: `w-5 h-5`
- Team avatar: `w-24 h-24 rounded-full`
- Rounded corners: `rounded-full` for pills, `rounded-lg` for containers

---

## Troubleshooting

### Tech stack icons not showing?
1. Check the icon mapping in your page matches the icon ID in caseStudies.ts
2. Verify you've imported the correct icon component
3. Make sure icon string matches exactly (case-sensitive)

### Details section not displaying correctly?
1. Ensure `designTeam` array has objects with `name`, `slug`, and `image` properties
2. Verify image paths are correct (e.g., `/team/amanti-melkamu-color.jpg`)
3. Check that team member slugs match their actual team page routes

### Layout not centered?
1. Verify parent section has `flex justify-center px-8`
2. Check child div has `max-w-4xl w-full`
3. Ensure there are no conflicting width styles

---

## Best Practices

✅ **Do:**
- Update `caseStudies.ts` with all project info upfront
- Use consistent turnaround time format (e.g., "2 weeks", "1.5 months")
- Match team member names to actual team members in system
- Include all relevant tech stack items
- Test responsive layout on mobile

❌ **Don't:**
- Hardcode project details in page component
- Duplicate team member images or info
- Use inconsistent icon IDs
- Leave blank fields - use optional fields properly
- Modify component structure from examples

---

## Questions?

Refer to the full documentation:
- `PROJECT_PAGES_REDESIGN.md` - Complete technical details
- `PROJECT_PAGES_LAYOUT_COMPARISON.md` - Visual comparisons and architecture
