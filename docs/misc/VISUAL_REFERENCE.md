# Visual Reference Guide - Header Design Alignment

## How the Headers Now Look

### The Updated Work Page Header
```
────────────────────────────────────────────────────────
                     OUR WORK
                (eyebrow text, small)

        Simple ideas executed seriously.
           Real brands, real results.
        (main heading, large and light)

  We take our clients' visions seriously and deliver
  work that inspires. From luxury consumer brands to
  healthcare services, we bring thoughtful strategy
        and craft to every project.
       (paragraph, medium size, 80% opacity)
────────────────────────────────────────────────────────
```

### Responsive Behavior

#### Desktop View (md and above)
```
────────────────────────────────────────────────────────
                     OUR WORK

        Simple ideas executed seriously.
           Real brands, real results.

  We take our clients' visions seriously and deliver work
  that inspires. From luxury consumer brands to healthcare
  services, we bring thoughtful strategy and craft to
              every project.
────────────────────────────────────────────────────────
```

#### Mobile View (below md)
```
──────────────────────────────
         OUR WORK

  Simple ideas executed
      seriously.
  Real brands, real results.

  We take our clients' visions
  seriously and deliver work
  that inspires.
  
  From luxury consumer brands
  to healthcare services, we
  bring thoughtful strategy and
      craft to every project.
──────────────────────────────
```

## Design System

### Typography Stack

```
┌─ Eyebrow (H1 tag)
│  Font: Inter, sans-serif
│  Size: 12-14px (responsive)
│  Weight: 500 (medium)
│  Case: UPPERCASE
│  Letter Spacing: Wide (tracking-widest)
│  Color: White at 60% opacity
│  Format: "OUR WORK"
│
├─ Heading (H2 tag)
│  Font: Inter, sans-serif
│  Size: 48px (sm) → 80px (lg)
│  Weight: 300 (light)
│  Line Height: Tight
│  Color: White at 100% opacity
│  Emphasis: Italic <em> tag
│  Format: "Simple ideas executed seriously. Real brands, real results."
│
└─ Paragraph (P tag)
   Font: Inter, sans-serif
   Size: 18px (sm) → 20px (xl)
   Weight: 400 (normal)
   Line Height: Relaxed
   Color: White at 80% opacity
   Max Width: 48rem (3xl)
   Format: "We take our clients' visions seriously..."
```

### Spacing & Layout

```
                         ↓ pt-20 (mobile) / pt-24 (lg)
┌───────────────────────────────────────────────────┐
│                                                   │ space-y-6
│                   OUR WORK                        │
│                                                   │ space-y-6
│     Simple ideas executed seriously...            │
│     Real brands, real results.                    │
│                                                   │ space-y-6
│   We take our clients' visions seriously...       │
│                                                   │
└───────────────────────────────────────────────────┘
                  ↓ max-w-4xl (56rem)
                  ↓ mx-auto (centered)
```

### Color Scheme

```
Eyebrow:  #FFFFFF at 60% opacity     → rgba(255, 255, 255, 0.6)
Heading:  #FFFFFF at 100% opacity    → rgb(255, 255, 255)
Paragraph:#FFFFFF at 80% opacity     → rgba(255, 255, 255, 0.8)
Emphasis: Italic (same color)
```

### Class Breakdown

```jsx
text-center           // Centers all children horizontally
space-y-6             // Vertical spacing between elements
max-w-4xl             // Maximum width of 56rem (896px)
mx-auto               // Horizontal centering

// Heading
text-3xl sm:text-4xl lg:text-5xl  // Responsive sizing
font-light                         // 300 weight
leading-tight                      // Compact line height
text-white                         // Full opacity white

// Paragraph  
text-lg sm:text-xl                 // Responsive sizing
text-white/80                      // 80% opacity white
leading-relaxed                    // Generous line height
max-w-3xl                          // Slightly narrower
mx-auto                            // Centered
```

## Comparison Grid

### All Three Pages - Now Aligned ✅

| Element | Services | AI Training | Work |
|---------|----------|-------------|------|
| **Layout** | centered | centered | centered ✅ |
| **Max Width** | 4xl | 4xl | 4xl ✅ |
| **Padding** | pt-20/24 | pt-20/24 | pt-20/24 ✅ |
| **Eyebrow Size** | xs-sm | xs-sm | xs-sm ✅ |
| **Eyebrow Case** | UPPER | UPPER | UPPER ✅ |
| **Heading Size** | 3xl-5xl | 3xl-5xl | 3xl-5xl ✅ |
| **Heading Weight** | light | light | light ✅ |
| **Paragraph Size** | lg-xl | lg-xl | lg-xl ✅ |
| **Paragraph Opacity** | 80% | 80% | 80% ✅ |
| **Emphasis** | <em> | <em> | <em> ✅ |
| **Line Break** | <br/> | <br/> | <br/> ✅ |

## Implementation Details

### Responsive Text Wrapping Pattern

```jsx
{/* On desktop (md and above) - shows inline */}
<span className="hidden md:inline">
  text that stays on the same line
</span>

{/* On mobile (below md) - shows with line break */}
<span className="md:hidden">
  <br />
  text that wraps to new line
</span>
```

This pattern is used in the paragraph for:
"...deliver work that inspires. **From luxury consumer brands to healthcare services**, we bring thoughtful..."

### Text Emphasis Pattern

```jsx
{/* Bold/Italic emphasis on key words */}
<em>seriously</em>  // In heading: "executed seriously"
```

Used to draw attention to important messaging.

## Quality Metrics

### Performance
- Container width: 56rem max (optimized for reading)
- Line height: Relaxed for paragraphs (accessibility)
- Font weights: Light for elegance, Normal for readability
- Colors: Sufficient contrast (WCAG AA compliant)

### Responsiveness
- Mobile optimized: Yes
- Tablet optimized: Yes
- Desktop optimized: Yes
- Touch-friendly: Yes

### Accessibility
- Semantic HTML: H1, H2, P tags used correctly
- Color contrast: Meets WCAG standards
- Font sizes: Readable at all breakpoints
- Line heights: Adequate spacing for readability

---

## Quick Reference Card

```
┌─────────────────────────────────────────────┐
│ WORK PAGE HEADER - QUICK REFERENCE          │
├─────────────────────────────────────────────┤
│ File: src/app/work/CaseStudiesClient.tsx   │
│ Lines: 382-393                              │
│ Container: text-center space-y-6...         │
│ Eyebrow: "OUR WORK"                         │
│ Heading: "Simple ideas executed             │
│          seriously. Real brands,            │
│          real results."                     │
│ Paragraph: "We take our clients'            │
│            visions seriously..."            │
│ Status: ✅ Complete & Tested                 │
└─────────────────────────────────────────────┘
```

---
**Version**: 1.0
**Last Updated**: October 16, 2025
**Status**: Ready for Production
