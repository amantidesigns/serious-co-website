# Team Section Implementation Guide

## Overview

A complete team section has been added to the Why Us page featuring four team members with interactive hover effects, individual profile pages, and beautiful animations.

## Features

✅ **Team Card Component** - Interactive cards with:
- Black & white to color image transition on hover
- Smooth hover animations (lift effect)
- Team member name, title, and description
- Clickable cards linking to individual profiles

✅ **Individual Profile Pages** - Dynamic routes with:
- Full-screen profile layout
- Extended bio and expertise areas
- Navigation to other team members (previous/next)
- Back link to Why Us page
- Auto-generated static pages for optimal performance

✅ **Responsive Design** - Adapts beautifully across:
- Mobile: 1 column grid
- Tablet: 2 columns
- Desktop: 4 columns

✅ **Placeholder Images** - Auto-generated:
- Black & white variants
- Color variants with unique colors per member
- Professional placeholder appearance

## File Structure

### New Components
```
src/components/
  ├── TeamCard.tsx           # Individual team member card
  └── TeamSection.tsx        # Team grid section component
```

### New Data
```
src/lib/content/
  └── team.ts               # Team member data and types
```

### New Pages
```
src/app/team/
  ├── layout.tsx            # Team section layout with metadata
  └── [slug]/
      └── page.tsx          # Dynamic team member profile page
```

### New Assets
```
public/team/
  ├── amanti-melkamu-bw.jpg
  ├── amanti-melkamu-color.jpg
  ├── liban-kano-bw.jpg
  ├── liban-kano-color.jpg
  ├── robera-miti-bw.jpg
  ├── robera-miti-color.jpg
  ├── serious-ai-agent-bw.jpg
  └── serious-ai-agent-color.jpg
```

### Modified Files
```
src/app/why-us/page.tsx     # Added TeamSection component
```

## Team Members

### 1. Amanti Melkamu - Designer
- **Title:** Designer
- **Description:** Crafts thoughtful, elegant visual experiences
- **Expertise:** Visual Design, Brand Identity, Design Systems, UI/UX
- **Route:** `/team/amanti-melkamu`
- **Bio:** Amanti brings clarity to visual communication. With a background in design systems and brand identity, she believes the best design disappears—allowing the idea to shine through.

### 2. Liban Kano - Copywriter
- **Title:** Copywriter
- **Description:** Distills complex ideas into clear, compelling words
- **Expertise:** Brand Voice, Web Copy, Storytelling, Headlines
- **Route:** `/team/liban-kano`
- **Bio:** Liban writes the way we think: directly, clearly, without fluff. He knows that great copy doesn't announce itself—it just says exactly what needs to be said.

### 3. Robera Miti - Developer
- **Title:** Developer
- **Description:** Builds reliable, thoughtful digital experiences
- **Expertise:** Full Stack Development, React, Performance, Infrastructure
- **Route:** `/team/robera-miti`
- **Bio:** Robera writes code that works and scales. She believes in building things properly—no shortcuts, no technical debt. Every line serves a purpose.

### 4. Serious AI Agent - Creative Strategist
- **Title:** Creative Strategist
- **Description:** Synthesizes ideas and identifies the path forward
- **Expertise:** Strategic Thinking, Analysis, Ideation, Execution
- **Route:** `/team/serious-ai-agent`
- **Bio:** Our AI agent brings tireless clarity to every project. It synthesizes complex information, identifies patterns, and ensures our work stays grounded in reality. Never sleeps, always serious.

## How to Customize

### Update Team Member Information

Edit `src/lib/content/team.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Your Name",
    title: "Your Title",
    description: "Short description",
    slug: "your-slug",
    image: {
      bw: "/team/your-slug-bw.jpg",
      color: "/team/your-slug-color.jpg"
    },
    bio: "Longer bio...",
    expertise: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
  },
  // ...
];
```

### Replace Placeholder Images

1. Add your images to `/public/team/`
2. Ensure you have both:
   - `{slug}-bw.jpg` (black & white version)
   - `{slug}-color.jpg` (color version)
3. Update the image paths in `team.ts`

For auto-generating new placeholder images, run:
```bash
python3 scripts/generate_team_images.py
```

### Customize Card Appearance

Edit `src/components/TeamCard.tsx`:
- Adjust image aspect ratio: change `aspect-square` class
- Modify hover animation: update `whileHover={{ y: -8 }}` value
- Change text styling: update Tailwind classes
- Adjust transition duration: modify `duration: 0.4` values

### Customize Grid Layout

Edit `src/components/TeamSection.tsx`:
- Change grid columns: modify `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Adjust gap/spacing: change `gap-8 lg:gap-6`
- Modify animation: update motion values

### Customize Profile Page

Edit `src/app/team/[slug]/page.tsx`:
- Change layout: modify grid/flex structure
- Update metadata generation in `generateMetadata()`
- Customize navigation links appearance
- Adjust typography and spacing

## Image Effect Details

The hover effect uses a clever CSS/React approach:

1. **Black & White Image** - Initially visible with `opacity: 1`
2. **Color Image** - Initially hidden with `opacity: 0`
3. **On Hover** - Animated opacity swap:
   - B&W fades out to `opacity: 0`
   - Color fades in to `opacity: 1`
   - Transition duration: 0.4s
   - Overlay gradient adds depth

No CSS filters are needed—both images are pre-rendered (BW and color), allowing for:
- Better performance
- Instant transitions
- No runtime filtering
- Support for actual photos

## Display Locations

The team section appears in two places:

1. **Why Us Page** (`/why-us`)
   - Full team grid at the bottom
   - "Meet the Team" intro section
   - Acts as entry point to individual profiles

2. **Individual Profile Pages** (`/team/{slug}`)
   - Full-page profile with extended information
   - Navigation to other team members
   - Expertise badges
   - Bio and details
   - Back link to Why Us page

## Performance Notes

- ✅ Static pre-rendering via `generateStaticParams()`
- ✅ No runtime data fetching
- ✅ Optimized image sizes with `next/image`
- ✅ Proper alt text for accessibility
- ✅ SEO metadata on all pages

## SEO Considerations

### Meta Tags
- Each profile page has unique title and description
- Open Graph images configured
- Proper schema markup potential

### URL Structure
- Clean, semantic URLs: `/team/{name-slug}`
- Breadcrumb navigation for users and search engines
- Link back to Why Us page

### Accessibility
- Semantic HTML structure
- Descriptive image alt text
- Proper heading hierarchy
- Sufficient color contrast

## Future Enhancements

Potential improvements:

- [ ] Add social media links (LinkedIn, Twitter, GitHub)
- [ ] Add team member specialization icons
- [ ] Implement team member filtering
- [ ] Add testimonials or quotes from team members
- [ ] Add "Contact This Member" buttons
- [ ] Implement team directory search
- [ ] Add team member projects/case studies
- [ ] Create team member portfolios

## Troubleshooting

### Images not showing
- Verify files exist in `/public/team/`
- Check file naming matches `team.ts` paths
- Ensure filenames use hyphens (e.g., `amanti-melkamu-bw.jpg`)

### Hover effect not working
- Check that `framer-motion` is installed
- Verify `TeamCard.tsx` has `"use client"` directive
- Test in browser with JavaScript enabled

### Profile pages returning 404
- Ensure `[slug]` directory exists in `src/app/team/`
- Verify `slug` values in `team.ts` are URL-safe (lowercase, hyphens)
- Rebuild project: `npm run build`

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

---

**Last Updated:** October 15, 2024
**Version:** 1.0.0
