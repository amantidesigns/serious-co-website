# Why Us Page - Team Section Addition

## Overview
Added an interactive team section to the "Why Us" page featuring avatar groups with motion animations, positioned in the "Guide" section alongside the empathy statement.

## Implementation Date
October 16, 2025

## What Was Added

### 1. **Avatar Group Component**
- **File**: `src/components/ui/avatar-group.tsx`
- **Source**: Shadcn registry component
- **Variants**: 
  - Motion (using Framer Motion)
  - CSS (pure CSS transitions)
  - Stack (traditional overlay)
- **Features**:
  - Spring-based hover animations
  - Tooltip integration for member info
  - Z-index management for proper layering
  - TypeScript support

### 2. **Team Section in Why Us Page**
- **Location**: "Guide" section (StoryBrand Element 2)
- **Layout**: 2-column grid on desktop
  - Left: Empathy statement ("We understand...")
  - Right: Team card with avatar group

### 3. **Card Features**
- **Interactive Elements**:
  - Individual team member avatars (clickable)
  - Hover effects with motion animations
  - Tooltips showing name and title
  - Direct links to individual team member pages
- **Design**:
  - Consistent with brand aesthetics
  - White/10 transparency backgrounds
  - Subtle borders and hover states
  - Arrow icon indicating interactivity

## Component Structure

```tsx
<Card>
  <CardHeader>
    - Badge: "Meet the team"
    - Title: "Real people. Real craft."
    - Description: "No account managers. No layers."
  </CardHeader>
  <CardContent>
    <AvatarGroup variant="motion">
      {teamMembers.map((member) => (
        <Link href={`/team/${member.slug}`}>
          <Avatar>
            <AvatarImage src={member.image.color} />
            <AvatarFallback>{initials}</AvatarFallback>
            <AvatarGroupTooltip>
              {member.name} - {member.title}
            </AvatarGroupTooltip>
          </Avatar>
        </Link>
      ))}
    </AvatarGroup>
  </CardContent>
</Card>
```

## Team Members Displayed
1. **Amanti Melkamu** - Designer
2. **Liban Kano** - Copywriter
3. **Robera Miti** - Developer
4. **Serious AI Agent** - Creative Strategist

## Technical Details

### Dependencies Installed
- `@radix-ui/react-tooltip` - For tooltip functionality
- `motion` - For Framer Motion animations (upgrade from framer-motion)

### Interactions
1. **Hover**: Avatars animate upward with spring physics
2. **Click Avatar**: Navigate to individual team member page
3. **Hover Avatar**: Show tooltip with member name and title
4. **Card Hover**: Border brightens, arrow icon translates

### Responsive Behavior
- **Desktop (lg+)**: 2-column grid layout
- **Mobile**: Stacked layout with team card below empathy statement
- **Avatars**: Scale appropriately on all screen sizes (16x16 = 64px)

## Copy & Messaging

### Card Title
"Real people. Real craft."

### Card Description
"No account managers. No layers. Just the people who do the work."

### Helper Text
"Click any avatar to learn more about each team member"

## Brand Alignment
- ✅ Direct, no-BS communication
- ✅ Sophisticated simplicity
- ✅ Functional interactivity
- ✅ Subtle animations (not flashy)
- ✅ Honest about team structure
- ✅ Minimal design aesthetic

## Animation Details
- **Motion variant** used for smooth spring physics
- **Spring config**: stiffness: 300, damping: 17
- **Translate**: -30% on hover (upward movement)
- **Tooltip delay**: 0ms for instant feedback
- **Card hover**: Border and arrow transitions (300ms)

## Files Modified
1. `src/app/why-us/page.tsx` - Added team section
2. `src/components/ui/avatar-group.tsx` - New component (created)
3. `package.json` - Updated dependencies

## User Journey
1. User scrolls to "Guide" section
2. Sees empathy statement on left
3. Notices animated team card on right
4. Hovers over avatars (they animate up, show tooltips)
5. Clicks avatar → navigates to team member page
6. OR understands the team structure and continues scrolling

## Why This Works
- **Strategic placement**: Right where we establish authority and empathy
- **Visual proof**: "We understand" is backed by real people
- **Interactive showcase**: Demonstrates design/dev skills through the component itself
- **Direct access**: No friction between interest and learning more about team
- **Brand consistency**: "No account managers, no layers" messaging is proven visually

## Build Status
✅ Successful production build
✅ No linting errors
✅ No type errors
✅ All routes generated successfully

## Next Steps (Optional Enhancements)
- [ ] Add subtle parallax effect to team card
- [ ] Consider adding a team stats section (years of experience, projects completed)
- [ ] Potential A/B test: Card placement vs inline team section
- [ ] Track click-through rate on team avatars vs other CTAs

