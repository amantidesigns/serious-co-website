# Header Design Consistency Comparison

## All Three Pages Now Match ✅

### 1. SERVICES PAGE (`/services`)
```jsx
<div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
  <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
    Our Services
  </h1>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
    Brands, websites, and creative content.<br />Built fast, built right
  </h2>
  <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
    AI workflows let us move at speed without sacrificing craft.<br />Premium creative work in days, not months.
  </p>
</div>
```

### 2. AI TRAINING PAGE (`/ai-training`)
```jsx
<div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
  <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
    AI Essentials Workshop
  </h1>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
    Learn AI in three days.<br /><em>No technical background required</em>
  </h2>
  <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
    A hands-on workshop for professionals who want to stay relevant in an AI-driven world. We'll teach you what matters and skip the rest.
  </p>
</div>
```

### 3. WORK PAGE (`/work`) - NOW UPDATED ✨
```jsx
<div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
  <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
    Our Work
  </h1>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
    Simple ideas executed <em>seriously</em>.<br />Real brands, real results.
  </h2>
  <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
    We take our clients' visions seriously and deliver work that inspires. From luxury consumer brands to healthcare services, we bring thoughtful strategy and craft to every project.
  </p>
</div>
```

## Unified Styling Elements

### All Headers Include:
| Element | Value |
|---------|-------|
| **Container** | `text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24` |
| **Eyebrow** | `text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60` |
| **Main Heading** | `text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white` |
| **Paragraph** | `text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto` |
| **Emphasis Tag** | `<em>` for italic text highlights |
| **Line Break** | `<br />` for heading structure |
| **Responsive Text** | Conditional spans for mobile/desktop display |

## Key Features
✅ **Centered Layout** - All content centered with max-width constraint
✅ **Typography Hierarchy** - Consistent font sizing progression
✅ **Responsive Design** - Mobile and desktop optimized text wrapping
✅ **Visual Consistency** - Same color scheme and spacing throughout
✅ **Emphasis & Style** - Italic emphasis for key messaging
✅ **Professional Look** - Light weight fonts with generous spacing

This creates a cohesive, professional brand experience across all major content pages.
