# Why Us V3 - Visual & Component Reference

## Page Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌──────────────┬─────────────────────────────────────────────────────────┐ │
│  │ SIDEBAR (lg) │ MAIN CONTENT                                            │ │
│  │              │                                                         │ │
│  │ • The Problem│ HERO SECTION (Full Screen)                             │ │
│  │   Most...    │ ═══════════════════════════════════════════════════   │ │
│  │              │ Most agencies make you                                  │ │
│  │ • Philosophy │         ↘ choose ↗                                     │ │
│  │   Take it... │    [shattering fragments]                             │ │
│  │              │                                                         │ │
│  │ • Difference │ Speed or craft. Process or results. Vision or exec... │ │
│  │   We refuse  │                                                         │ │
│  │              │ Scroll to explore ⬇                                     │ │
│  │ • Process    │ ═══════════════════════════════════════════════════   │ │
│  │   What we do │                                                         │ │
│  │              │ SECTION 2: PHILOSOPHY                                   │ │
│  │ • Team       │ Take it seriously                                       │ │
│  │   Who we are │ Charlie Munger quote...                                │ │
│  │              │ ───────────────────────────────────────────────────   │ │
│  │ • Vision     │                                                         │ │
│  │   Why we exist                                                         │ │
│  │              │ SECTION 3: DIFFERENCE                                   │ │
│  │ • Why Us     │ We refuse to choose                                    │ │
│  │   Four reasons                                                         │ │
│  │              │ Most Agencies    │    A Very Serious Company           │ │
│  │ • Start      │ • Process slow   │    • Clear thinking                 │ │
│  │   Let's work │ • Frameworks bad │    • Custom approach               │ │
│  │              │ • Approvals many │    • Direct access                 │ │
│  │              │                                                         │ │
│  │ [TIMELINE]   │ SECTION 4: PROCESS...                                  │ │
│  │              │ SECTION 5: TEAM...                                     │ │
│  │              │ SECTION 6: VISION...                                   │ │
│  │              │ SECTION 7: WHY US...                                   │ │
│  │              │ SECTION 8: CTA...                                      │ │
│  │              │                                                         │ │
│  └──────────────┴─────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Hero Section Details

### Typography-Based Hero (Section 0)

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║                  FULL-SCREEN HERO SECTION                       ║
║                                                                 ║
║                Most agencies make you                           ║
║                                                                 ║
║     ↘ choose ↗        ↖ speed ↙        ↗ craft ↖              ║
║   [rotated  [scattered throughout the space, fading]           ║
║    fragments]  ↙ process ↖        ↘ results ↙                 ║
║                                                                 ║
║ Speed or craft. Process or results. Vision or execution.        ║
║ That false choice is the problem.                               ║
║                                                                 ║
║                                                                 ║
║                    Scroll to explore                            ║
║                        ↓ ↓ ↓                                    ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

### Animation Flow

```
TIMELINE →

Frame 0 (Entrance)
Most agencies make you
(main text fades in)

Frame 1 (0.3s - Scatter begins)
choose ┃ speed ↗ craft ↙ process ┃ results
       (fragments begin flying out with rotation)

Frame 2 (0.7s - Mid-scatter)
                    choose
                     ↗↙
speed                      craft
    ↘       Main Text        ↙
         Most agencies
         make you         Results ↙
process ↗                ↙
(opacity reducing)

Frame 3 (2.0s - Fully scattered)
(all fragments fade to invisible)
Main text fully visible
Subheading and scroll indicator appear
```

## Sidebar Navigation

### Desktop Layout (lg+)

```
┌──────────────────────┐
│ Width: 16rem (w-64) │
│ Sticky: top-0       │
│ Padding-top: 8rem   │
│                     │
│ • The Problem       │ ← Dot: hollow, then filled on active
│   Most agencies...  │    Lines: 1px border connecting dots
│                     │
│ • Philosophy        │ ← Interactive
│   Take it...        │    On hover: shift right (x: 8)
│                     │
│ • Difference        │ ← Clickable to jump
│   We refuse...      │
│                     │
│ • Process           │ ← Text: text-white/40 normally
│   What we do        │    On hover: text-white/80
│                     │
│ • Team              │
│   Who we are        │
│                     │
│ • Vision            │
│   Why we exist      │
│                     │
│ • Why Us            │
│   Four reasons      │
│                     │
│ • Start             │
│   Let's work        │
│                     │
└──────────────────────┘
```

### Mobile Layout (hidden)

```
[Sidebar is completely hidden]
Content takes full width with padding
Timeline navigation not visible
```

## Section Structure

### Consistent Section Pattern

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│ ─── BORDER TOP ───────────────────────────────────────────      │
│                                                                 │
│ Section Heading                    ← 4xl-5xl font-light        │
│ (Text-white, max-w-4xl)                                        │
│                                                                 │
│ [Section Content]                                              │
│ • Animations: whileInView on enter                             │
│ • Staggered delays for child items (0.1s intervals)            │
│ • Smooth transitions (0.6s duration)                           │
│                                                                 │
│ py-24 | px-6 | space-y-8/12                                   │
│                                                                 │
│ Optional: bg-white/5 for alternating sections                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Hero Section Component Breakdown

### Main Heading

```jsx
<motion.h1 
  className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight max-w-4xl"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  Most agencies make you
</motion.h1>
```

### Shattering Fragments

```jsx
{[
  { text: "choose", delay: 0.3, x: -150, y: -80 },
  { text: "speed", delay: 0.4, x: -200, y: 40 },
  { text: "craft", delay: 0.5, x: 180, y: 20 },
  { text: "process", delay: 0.6, x: 150, y: -100 },
  { text: "results", delay: 0.7, x: -100, y: 120 }
].map((fragment, i) => (
  <motion.div
    key={i}
    className="absolute text-2xl md:text-3xl font-light text-white/20"
    initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
    whileInView={{ 
      opacity: [0, 0.6, 0],
      x: fragment.x,
      y: fragment.y,
      rotate: (Math.random() - 0.5) * 40
    }}
    transition={{ 
      duration: 2,
      delay: fragment.delay,
      ease: "easeOut"
    }}
    viewport={{ once: true }}
  >
    {fragment.text}
  </motion.div>
))}
```

## Typography Scale

```
Hero Section:
8xl (3.052rem)  ← "Most agencies make you"
3xl (1.875rem)  ← Shattering fragments
xl  (1.25rem)   ← Subheading
xs  (0.75rem)   ← "Scroll to explore"

Content Sections:
5xl (3rem)      ← Section headings
lg  (1.125rem)  ← Body text
sm  (0.875rem)  ← Labels/captions
xs  (0.75rem)   ← Metadata
```

## Color Palette

```
Primary:
white           Text primary
white/80        Body text (good contrast)
white/70        Secondary text
white/60        Subtext
white/40        Labels
white/30        Subtle text
white/20        Very subtle/accents
white/10        Backgrounds
white/5         Subtle backgrounds

Opacity Patterns:
- Headings: white (full opacity)
- Body: white/70-80
- Labels: white/60
- Borders: white/10-20
- Backgrounds: white/5-10
```

## Responsive Breakpoints

```
Mobile (default):
- Full width content
- Single column layouts
- No sidebar
- Padding: px-6
- Text sizes scale down: text-base → sm on body

Tablet (md):
- Still single column
- Sidebar hidden
- Padding: px-6
- Text scales: text-lg

Desktop (lg):
- Sidebar visible (w-64)
- Content: flex-1
- Two column grids
- Padding: px-6
- Full typography scale
```

## Animation Patterns

### Entrance (whileInView)

```jsx
{
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 },
  viewport: { once: true }
}
```

### Staggered Children

```jsx
{
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: i * 0.1 },
  viewport: { once: true }
}
```

### Scroll Indicator (Infinite)

```jsx
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

## Brand Guidelines Applied

✅ **What Works:**
- Large, confident typography
- Minimal visual elements
- Subtle animations (no flashy effects)
- Clean, organized structure
- Professional sophistication
- Clear information hierarchy

❌ **What's Removed:**
- All emoji usage
- Cheap visual gimmicks
- Overly complex animations
- Fighting/colliding elements
- Generic design patterns

## Key Features Summary

| Feature | Benefit |
|---------|---------|
| **Sidebar Navigation** | Users always know where they are |
| **Typography-Based Hero** | Sophisticated, brand-consistent |
| **Shattering Effect** | Visual interest without emojis |
| **8 Clear Sections** | Organized, digestible content |
| **Responsive Design** | Works on all devices |
| **Smooth Animations** | Professional feel |
| **No Scrolling Overload** | Information structured logically |

## Implementation Notes

- **File:** `src/app/why-us/page.tsx`
- **Lines:** 380
- **Key Imports:** `motion`, `useRef`, `useState`, `whileInView`
- **State:** `expandedSection`, `activeSection`, `sections` array
- **Components:** `ContentPageLayout`, `TeamSection`
- **Framework:** Next.js + Framer Motion + Tailwind CSS
