# Implementation Details & Architecture

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout with fonts & metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Design system & utilities
│   ├── contact/
│   │   └── page.tsx            # Contact page
│
├── components/
│   ├── header/
│   │   └── header.tsx          # Sticky header with burger menu
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── why-lumina.tsx
│   │   ├── services.tsx
│   │   ├── process.tsx
│   │   ├── testimonials.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   └── cta-final.tsx
│   ├── footer/
│   │   └── footer.tsx
│   ├── modals/
│   │   └── schedule-call-modal.tsx
│   └── back-to-top.tsx
│
├── public/
│   ├── dr-elena-vance.jpg
│   ├── family-story-1.jpg
│   ├── family-story-2.jpg
│   └── family-story-3.jpg
│
├── IMPLEMENTATION_KICKSTART.md  # Original plan
├── PROJECT_SUMMARY.md           # What was built
└── tailwind.config.ts           # Theme configuration
```

## Key Implementation Details

### Design Tokens (globals.css)

All colors use CSS custom properties mapped to Tailwind:
```css
--background: 240 13% 6%;          /* #0F172A */
--surface: 240 10% 11%;            /* #1E293B */
--primary-text: 210 40% 98%;       /* #F1F5F9 */
--muted-text: 217 33% 58%;         /* #94A3B8 */
--primary-accent: 180 100% 42%;    /* #06B6D4 */
```

### Glass-Morphism Classes

```css
.glass {
  @apply bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl;
}

.glass-accent {
  @apply bg-cyan-500/5 backdrop-blur-lg border border-cyan-500/20 rounded-xl;
}

.glass-hover {
  @apply transition-all duration-300 ease-out 
         hover:bg-white/10 hover:border-white/20 
         hover:shadow-lg hover:shadow-cyan-500/10;
}
```

### Animation System

Keyframes defined in tailwind.config.ts:
- `fade-in`: 0-100% opacity with subtle Y translation
- `fade-in-up`: Same as fade-in but with 20px upward movement
- `slide-in-right`: Horizontal slide from right

Staggered timing using inline styles:
```tsx
style={{
  animation: `fade-in-up 0.6s ease-out ${index * 150}ms both`,
}}
```

### Responsive Breakpoints

- **Mobile (320-767px):** Single column, full-width cards
- **Tablet (768-1023px):** 2-column grids
- **Desktop (1024px+):** Full 3-4 column layouts

Uses Tailwind's responsive prefixes: `md:` and `lg:`

## Component Communication

### State Management
- No Redux/Context needed for prototype
- useState for local component state
- Prop drilling for modal open/close
- Console.log for form submissions

### Modal Pattern
Schedule call modal is triggered from 4 locations:
1. Header CTA button
2. Hero CTA buttons
3. Pricing tier buttons
4. Final CTA section

All trigger: `onClick={() => setIsScheduleModalOpen(true)}`

### Form Handling
Contact page form:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('[v0] Contact form submitted:', formData)
  // Show success state for 3 seconds
  setIsSubmitted(true)
  // Reset form
  setTimeout(() => setIsSubmitted(false), 3000)
}
```

## Accessibility Features

1. **Semantic HTML**
   - `<header>`, `<main>`, `<section>`, `<footer>` elements
   - Proper heading hierarchy (H1 → H2 → H3)

2. **ARIA Attributes**
   - `aria-modal="true"` on modals
   - `aria-labelledby` linking titles
   - `aria-label` on icon buttons

3. **Keyboard Navigation**
   - Focus states on buttons and inputs
   - ESC key closes modals
   - Tab order follows visual order

4. **Reduced Motion**
   - Media query in globals.css detects `prefers-reduced-motion`
   - Animations disabled for accessibility needs

5. **Color Contrast**
   - Primary text (#F1F5F9) on dark backgrounds (WCAG AA+)
   - Accent color (#06B6D4) used consistently

## Performance Optimizations

1. **Image Optimization**
   - Using Next.js `Image` component
   - Automatic format selection (WebP where supported)
   - Lazy loading on below-fold images
   - `priority` attribute on hero image

2. **CSS-in-JS**
   - Tailwind utility classes (no runtime CSS-in-JS)
   - Design tokens in CSS variables
   - Glass effects using native CSS backdrop-filter

3. **Bundle Size**
   - Components kept under 600 lines each
   - Reusable component patterns minimize duplication
   - Client components marked where needed

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS backdrop-filter support (graceful degradation in older browsers)
- Fallback colors for systems without CSS variables support
- Mobile-first approach ensures basic functionality on all devices

## Testing Checklist

- [ ] Hero section loads with image
- [ ] Schedule modal opens/closes from all CTAs
- [ ] Mobile burger menu toggles open/closed
- [ ] Smooth scroll to sections works
- [ ] Glass effects visible on cards
- [ ] Animations play smoothly (60fps)
- [ ] Form validation works
- [ ] Contact form logs to console
- [ ] Back-to-top button appears after scroll
- [ ] All links navigate correctly
- [ ] Responsive design at 375px, 768px, 1440px
- [ ] Color contrast meets WCAG AA
- [ ] Images load without errors
- [ ] No console errors

## Customization Guide

### Changing Colors
1. Update CSS variables in `app/globals.css` `:root`
2. Adjust Tailwind theme in `tailwind.config.ts`
3. Update `.glass` and `.glass-accent` classes

### Adding New Sections
1. Create new component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to main grid layout
4. Add section ID for navigation links

### Modifying Animations
1. Update keyframes in `tailwind.config.ts`
2. Adjust duration in component inline styles
3. Change easing function in animation classes

### Updating Content
- Hero: Edit text in `components/sections/hero.tsx`
- Services: Update service list in `components/sections/services.tsx`
- Testimonials: Replace testimonial data in `components/sections/testimonials.tsx`
- FAQ: Update FAQ items in `components/sections/faq.tsx`
- Pricing: Modify tiers in `components/sections/pricing.tsx`

---

**Ready for deployment to Vercel or self-hosted environments.**
