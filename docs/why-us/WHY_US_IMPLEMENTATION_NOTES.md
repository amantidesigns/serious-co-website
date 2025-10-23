# Why Us Page - Implementation Notes

## Design System Integration

### Colors Used
- **Primary Blue**: `#0B3D91` (background)
- **White**: `#FFFFFF` (text, icons)
- **White/10**: `rgba(255,255,255,0.1)` (borders)
- **White/30-70**: Various opacity levels for text hierarchy
- All colors sourced from `@/lib/theme.ts`

### Spacing Pattern
```css
/* Section spacing */
space-y-32 /* 128px between major sections */

/* Internal spacing */
space-y-8  /* 32px between elements within sections */
space-y-6  /* 24px for tighter groups */
space-y-4  /* 16px for minimal spacing */
```

### Typography Scale
```css
/* Headlines */
text-6xl (hero)           /* 3.75rem */
text-5xl (section titles) /* 3rem */
text-3xl (subsections)    /* 1.875rem */
text-2xl (emphasis)       /* 1.5rem */

/* Body Copy */
text-lg (main)            /* 1.125rem */
text-base (secondary)     /* 1rem */
text-sm (meta)            /* 0.875rem */
text-xs (labels)          /* 0.75rem */

/* Font Weights */
font-light    /* 300 - primary for elegance */
font-medium   /* 500 - emphasis */
font-bold     /* 700 - CTA/important */
```

## Component Architecture

### Using Framer Motion for Animations

#### Pattern 1: Initial Page Load Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  {/* Content */}
</motion.div>
```
- Used for hero section
- Creates entrance animation on page load
- Staggered delays for visual interest

#### Pattern 2: Scroll-Triggered Animation (whileInView)
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  {/* Content */}
</motion.div>
```
- Used for all below-the-fold sections
- `once: true` = animation plays only once
- `margin: "-100px"` = triggers when 100px from viewport
- Better performance (no continuous animations)

#### Pattern 3: Staggered Children
```tsx
.map((step, index) => (
  <motion.div
    transition={{ delay: index * 0.15 }}
  >
    {/* Child element */}
  </motion.div>
))
```
- Used in 3-part process section
- Each element animates 150ms after previous
- Creates visual flow without complexity

### Layout Patterns

#### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
  {/* Mobile: 1 column */}
  {/* Tablet+: 3 columns */}
</div>
```
- Used in process section
- Responsive without media query complexity
- Tailwind breakpoints: sm (640px), md (768px), lg (1024px)

#### Centered Content Container
```tsx
<div className="max-w-4xl mx-auto text-center">
  {/* Content constrained to max 896px, centered */}
</div>
```
- Used throughout for text sections
- `max-w-4xl` maintains readable line length
- `mx-auto` centers horizontally

#### Section Dividers
```tsx
<div className="border-t border-white/10 pt-16">
  {/* New section */}
</div>
```
- Subtle white border at 10% opacity
- Top padding of 16 (64px) for breathing room
- Creates visual separation without heaviness

## Content Strategy

### Information Hierarchy: Problem → Solution → People → Action

**Section 1: Hero (Problem)**
- What's wrong with other agencies?
- Why it matters
- Hook: "Most agencies overcomplicate everything"

**Section 2: Philosophy (Solution Foundation)**
- Root principle from authority figure
- Personal interpretation
- Grounding in wisdom

**Section 3: Process (Solution Details)**
- Three concrete steps
- Specific, direct language
- Addresses concerns (no shortcuts, no bloat)

**Section 4: Promise (Solution Summary)**
- One-line mission statement
- Why we exist
- What we stand against

**Section 5: Team (Human Connection)**
- Real people embodying values
- Photos build trust
- Roles clarify what they do

**Section 6: Team Context (Personal Connection)**
- Why they matter
- What unites them
- Reinforces company philosophy

**Section 7: CTA (Action)**
- Clear, direct ask
- Two methods (call/email)
- Respectful, not pushy

### Brand Voice Checklist (Applied Throughout)

- ✓ No marketing jargon ("solutions," "leverage," "synergy")
- ✓ Short, punchy sentences (8-15 words average)
- ✓ Conversational ("We dig in," "You get")
- ✓ Concrete specifics ("No shortcuts. No bloat.")
- ✓ Active voice ("We understand," not "It is understood")
- ✓ Understated confidence (let work speak)
- ✓ Honest limitations mentioned where relevant

### Word Choices (Preferred Pattern)

**Instead of:** → **We use:**
- "Solutions" → "Work," "Build," "Create"
- "Leverage" → "Use," "Apply," "Follow"
- "Disrupt" → "Change," "Challenge"
- "Optimize" → "Improve," "Make better"
- "Stakeholders" → "Client," "Team," "You"
- "Deliverables" → "Work," "Something," "It"

## Maintenance & Updates

### Making Content Changes

**To update copy:**
1. Open `src/app/why-us/page.tsx`
2. Find the section (look for `{/* Section name */}` comments)
3. Edit the text in the `<p>`, `<h3>`, or other element
4. Test responsiveness (mobile/tablet/desktop)

**Example: Update Hero Copy**
```tsx
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
  Most agencies overcomplicate everything. Or miss the <em>point</em> entirely.
</h2>
```

### Adding New Sections

1. Copy this template:
```tsx
<motion.div 
  className="border-t border-white/10 pt-16"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  <div className="max-w-4xl mx-auto space-y-8">
    {/* Your content here */}
  </div>
</motion.div>
```

2. Place before closing `</div>` of main content
3. Update animations as needed
4. Test on all screen sizes

### Adding New Components

If you need to add sub-components:
1. Create new file in `/src/components/`
2. Export as named export
3. Import at top of `why-us/page.tsx`
4. Render in appropriate section

**Example:**
```tsx
import CustomTeamCard from "@/components/CustomTeamCard";

// Then in JSX:
<CustomTeamCard {...props} />
```

## Performance Considerations

### Optimization Techniques Used
- ✓ `whileInView` with `once: true` (animations only play once)
- ✓ `viewport={{ margin: "-100px" }}` (early trigger prevents sudden animations)
- ✓ No continuous state updates (unlike auto-cycling tabs)
- ✓ Layout is static (no dynamic re-renders)
- ✓ Images use next/image via TeamSection component

### What NOT To Do
- ✗ Don't add `animate` without `whileInView` (continuous animations)
- ✗ Don't use `useEffect` for animations (use Framer Motion)
- ✗ Don't hardcode delays without purpose (can confuse users)
- ✗ Don't remove `viewport={{ once: true }}` (causes performance issues)

## Browser & Device Support

### Tested On
- Desktop Chrome/Safari/Firefox (latest)
- Tablet iPad (latest)
- Mobile iPhone/Android (latest)

### CSS Features Used
- CSS Grid (supported in all modern browsers)
- CSS Flexbox (supported in all modern browsers)
- `gap` property (supported in all modern browsers)
- CSS custom properties for theme (supported in all modern browsers)

### Responsive Breakpoints
```
Mobile (< 640px)   → Single column
Tablet (640-1024px) → Responsive adjustments
Desktop (> 1024px) → Full layout
```

## Accessibility Notes

### Semantic HTML
- Using proper heading hierarchy (h2 → h3 → h4)
- Buttons use semantic `<a>` or `<button>` tags
- Links have proper `href` attributes
- SVG icons have proper viewBox attributes

### Color Contrast
- All text meets WCAG AA standards (white on dark blue)
- Focus states visible on interactive elements
- No color-only information conveyance

### Motion
- No auto-playing animations that can't be paused
- `prefers-reduced-motion` would be respected if implemented
- Animations are not required to understand content

## Future Enhancement Ideas

### Phase 2 Improvements
1. **Team Member Pages**: Create `/team/[slug]` routes with individual bios
2. **Interactive Testimonials**: Add customer quotes rotating through phases
3. **FAQ Integration**: Expandable FAQ section in/after CTA
4. **Case Study Links**: "See this in action" CTAs linking to work

### Phase 3 Enhancements
1. **Video Hero**: Replace text hero with founder statement video
2. **Process Animation**: Animate the 3-step process with illustrations
3. **Live Chat**: Add Intercom/similar for immediate conversation
4. **Comparison Table**: How we compare to typical agency model

### Analytics to Track
- Time on page
- Scroll depth (sections reached)
- CTA click-through rates
- Device/browser patterns
- Geographic data

## Common Issues & Solutions

### Issue: Section doesn't animate on scroll
**Solution:** Check that `whileInView` and `viewport` props are present
```tsx
// Wrong
<motion.div initial={{ opacity: 0 }}>

// Right
<motion.div 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
>
```

### Issue: Text looks cramped on mobile
**Solution:** Check that `text-lg sm:text-xl` breakpoints are applied
```tsx
// Make sure to use responsive text sizes
<p className="text-base sm:text-lg lg:text-xl">
```

### Issue: CTA buttons overlap
**Solution:** Ensure flex direction changes for mobile
```tsx
<div className="flex flex-col sm:flex-row gap-4">
  {/* Buttons stack vertically on mobile */}
</div>
```

### Issue: Section spacing looks wrong on some devices
**Solution:** Use `space-y-*` instead of margin for consistency
```tsx
// Right
<div className="space-y-8">

// Avoid
<div className="mb-8">
  <div className="mb-8">
```

## Code Style Guidelines

### Formatting Conventions
- Use 2-space indentation (not tabs)
- Put className on separate line if > 80 chars
- One export per file
- Arrow functions for components

### Comment Style
```tsx
// Use for section headers
{/* Use for JSX comments */}
```

### Naming Conventions
```tsx
// Component files: PascalCase
WhyUsPage.tsx

// Folders: kebab-case
why-us/

// Utility functions: camelCase
calculateSpacing()

// Constants: UPPER_SNAKE_CASE
const MAX_WIDTH = 896;
```

---

## Quick Reference: Key Files

| File | Purpose |
|------|---------|
| `src/app/why-us/page.tsx` | Main page content |
| `src/app/why-us/layout.tsx` | Metadata and layout wrapper |
| `src/components/TeamSection.tsx` | Team display component |
| `src/components/ContentPageLayout.tsx` | Page wrapper with background |
| `src/lib/theme.ts` | Design tokens and theme |
| `WHY_US_REDESIGN_SUMMARY.md` | Design documentation |
| `WHY_US_PAGE_BEFORE_AFTER.md` | Comparison document |

---

## Contact for Questions

For questions about the design or implementation:
1. Check the documentation files first
2. Review the code comments in `why-us/page.tsx`
3. Check `src/lib/theme.ts` for design tokens
4. Refer to existing components in `src/components/` for patterns

The page is designed to be maintainable and easy to update. All major decisions are documented inline.
