# Lumina Fertility Collective - Implementation Kickstart

**Project Type:** Frontend Prototype (Next.js 16, React 19, TypeScript)  
**Status:** Planning Phase  
**Date:** February 6, 2026

---

## 1. Design System & Visual Identity

### Color Palette
- **Primary Brand Color (Accent):** Teal/Cyan (#06B6D4 or #14B8A6) - used for CTAs, highlights, accents
- **Dark Backgrounds:** #0F172A (deep navy) / #1E293B (slightly lighter)
- **Glass Effects Base:** White with 5-10% opacity overlaid on dark backgrounds
- **Primary Text:** #F1F5F9 (light gray-white)
- **Muted Text:** #94A3B8 (medium gray)
- **Accent Highlights:** Consistent use of teal throughout for visual cohesion

### Design Tokens (Semantic Variables)
```css
--background: #0F172A
--surface: #1E293B
--surface-light: #334155
--primary-accent: #06B6D4
--secondary-accent: #14B8A6
--primary-text: #F1F5F9
--muted-text: #94A3B8
--border-subtle: rgba(248, 250, 252, 0.1)
--border-accent: rgba(6, 182, 212, 0.2)
--radius-sm: 0.5rem
--radius-md: 1rem
--radius-lg: 1.5rem
```

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Inter (sans-serif, clean)
- **Accent/Special:** Playfair Display for testimonials, key messaging

---

## 2. Page Structure

### A. Landing Page (`/app/page.tsx`)
**Sections:**
1. **Header/Navigation**
   - Sticky navigation with logo, menu items, CTA button
   - Mobile burger menu (hidden on desktop, visible on tablet/mobile)
   - Smooth scroll behavior

2. **Hero Section**
   - Large headline with Playfair Display
   - Subheading with description
   - Dr. Elena Vance portrait image (right side - to be generated)
   - Two CTAs: "Schedule Call" (modal trigger), "Learn More" (smooth scroll)

3. **Why Lumina Section**
   - Trust metrics (2,500+ Families, 98% Satisfaction, etc.)
   - Glass-morphism cards with subtle animations
   - Left-aligned text, right-aligned stats in grid

4. **Our Services**
   - 3-4 service cards with glass effects
   - Icons, title, description for each
   - Accent color highlights on hover

5. **Our Process Timeline**
   - Vertical/horizontal timeline with 4-5 steps
   - Interactive step cards with hover states
   - Glass-morphism containers

6. **Testimonials Section**
   - 3 family story cards with quotes
   - Portrait placeholders (to be generated)
   - Glass-morphism with subtle shadows
   - Scroll animation triggers

7. **Pricing Tiers**
   - 4 pricing cards: Consultation, Assessment, Complete Journey, Premium
   - Highlight the middle tier with subtle accent
   - Feature lists for each tier
   - Glass-morphism design

8. **FAQ Section**
   - Accordion component with glass styling
   - 4-6 FAQs (examples provided, editable)
   - Smooth expand/collapse animations

9. **CTA Section (Final)**
   - "Ready to Begin Your Journey?" heading
   - "Schedule Call" CTA button
   - Accent color prominent

10. **Footer**
    - Logo, mission statement
    - Quick links
    - Dr. Marcus contact info (links to contact page)
    - Social media placeholders
    - Back-to-top smooth scroll button
    - Copyright, no email capture

### B. Contact Page (`/app/contact/page.tsx`)
- Full contact form (Name, Email, Phone, Message, etc.)
- Contact information display
- Map placeholder or visual element
- Same glass-morphism design system
- Responsive layout

### C. Layout Components
- **Header Component** (`components/header.tsx`) - Navigation, responsive
- **Footer Component** (`components/footer.tsx`) - Full footer with all sections
- **Reusable Sections** (`components/sections/`) - Each section as a component

---

## 3. Component Architecture

### Component Organization (Keep under 600 lines each)

```
components/
├── header/
│   ├── header.tsx (sticky nav with burger menu)
│   └── mobile-menu.tsx (mobile navigation)
├── sections/
│   ├── hero.tsx
│   ├── why-lumina.tsx (trust metrics)
│   ├── services.tsx
│   ├── process.tsx (timeline)
│   ├── testimonials.tsx
│   ├── pricing.tsx
│   ├── faq.tsx
│   └── cta-final.tsx (final call-to-action)
├── footer/
│   └── footer.tsx
├── modals/
│   └── schedule-call-modal.tsx (form modal for CTAs)
├── cards/
│   ├── service-card.tsx
│   ├── pricing-card.tsx
│   ├── testimonial-card.tsx
│   └── process-step-card.tsx
└── ui/ (existing shadcn components)
```

### Key Features per Component

**Header.tsx**
- Sticky positioning with scroll detection
- Responsive: desktop menu → tablet collapsible → mobile burger
- Smooth scroll links to sections
- CTA button (desktop visible, mobile in burger menu)

**Schedule Call Modal**
- Form with Name, Email, Phone fields
- No backend submission (prototype)
- Success toast/confirmation message
- Close button, ESC key support
- Glass-morphism styling

**Service Cards**
- Icon, title, description
- Hover state with slight scale + glow effect
- Accent color on hover

**Testimonial Cards**
- Portrait image (top)
- Quote text (Playfair italic)
- Name/story identifier
- Glass background with subtle border

**Pricing Cards**
- Tier name, price, frequency
- Feature list (checkmarks)
- CTA button per card
- Highlighted tier with accent color border/glow

---

## 4. Animations & Interactions

### Scroll Animations
- Fade-in on scroll for sections
- Staggered animation for card groups
- Parallax effect on hero section (subtle)
- Timeline step reveal on scroll

### Hover States
- Cards: subtle lift + shadow increase + accent glow
- Buttons: opacity shift, slight scale
- Links: underline animation with accent color

### Page Transitions
- Smooth scroll to sections (duration: 0.8s)
- Modal animations: fade in/out with slight scale
- Form field animations: focus state highlight

### Back-to-Top Button
- Smooth scroll to top (duration: 1.5s)
- Appears after scrolling past hero
- Fixed position, fade in/out based on scroll position

---

## 5. Responsive Design

### Breakpoints
- **Mobile:** 320px - 767px
  - Single column layouts
  - Full-width cards
  - Burger menu navigation
  - Stacked testimonials/pricing

- **Tablet:** 768px - 1024px
  - 2-column grids
  - Smaller hero text
  - Collapsible navigation or side menu

- **Desktop:** 1025px+
  - Full multi-column layouts
  - Side-by-side hero
  - Sticky header

### Responsive Components
- Hero: Text centered on mobile, left-aligned + image on desktop
- Services: 1 column → 2 → 3 columns
- Testimonials: Stack → 2 items → 3 items
- Pricing: Stack → 2 items → 4 items
- Timeline: Vertical on mobile → horizontal on desktop

---

## 6. Images & Assets (To Generate)

### Generated Images
1. **Dr. Elena Vance Portrait** - Professional headshot, clinical setting, warm/approachable
2. **Family Story Photo 1** - Happy couple, warm lighting
3. **Family Story Photo 2** - Different couple/family, natural setting
4. **Family Story Photo 3** - Third family/couple, welcoming environment

### SVG Icons (Use existing or create minimal)
- Checkmark, heart, calendar, user, phone, email, arrow icons

---

## 7. SEO Strategy

### Meta Tags & Structure
```
Title: "Lumina Fertility Collective - Expert Fertility Services & Support"
Description: "Compassionate fertility clinic with personalized treatment plans, expert doctors, and a 98% satisfaction rate. Schedule your consultation today."
Canonical: Automatic (Next.js 16)
```

### On-Page Optimization
- Semantic HTML: `<main>`, `<section>`, `<header>`, `<footer>`
- Heading hierarchy: H1 (hero) → H2 (sections) → H3 (subsections)
- Image alt text: Descriptive for all images
- Schema markup: Organization, LocalBusiness, AggregateRating (if needed)

### Keywords to Target
- "Fertility clinic," "fertility services," "infertility treatment"
- "Compassionate fertility care," "expert fertility doctors"
- "Fertility consultation," "fertility assessment"
- Location-based (if needed in future)

### Link Strategy
- Internal linking: Sections link to Contact page
- External links: None for prototype (future: industry authority sites)

---

## 8. Implementation Phases

### Phase 1: Foundation (Design System & Layout)
- [ ] Update `globals.css` with design tokens & glass-morphism utilities
- [ ] Update `tailwind.config.ts` with custom theme
- [ ] Create Header component with mobile menu
- [ ] Create Footer component
- [ ] Generate 4 placeholder images for Dr. Vance & testimonials
- [ ] Setup layout structure in `app/layout.tsx`

### Phase 2: Landing Page - Upper Sections
- [ ] Build Hero section with CTA buttons
- [ ] Build "Why Lumina" trust metrics section
- [ ] Build Services section with glass cards
- [ ] Test responsive behavior (mobile, tablet, desktop)

### Phase 3: Landing Page - Middle Sections
- [ ] Build Process/Timeline section
- [ ] Build Testimonials section with cards
- [ ] Add scroll animations & transitions
- [ ] Create Schedule Call Modal component

### Phase 4: Landing Page - Lower Sections
- [ ] Build Pricing section with 4 tiers
- [ ] Build FAQ accordion section
- [ ] Build final CTA section
- [ ] Integrate modal across all CTA buttons

### Phase 5: Contact Page & Polish
- [ ] Create Contact page with form
- [ ] Add Back-to-Top button with smooth scroll
- [ ] Test all animations and interactions
- [ ] Mobile responsiveness final pass
- [ ] SEO optimization (meta tags, structured data)

### Phase 6: Review & Refinement
- [ ] Verify glass effects & color contrast
- [ ] Test animations on various devices
- [ ] Fine-tune timing and easing
- [ ] Prepare for future asset replacements

---

## 9. Technical Specifications

### Dependencies
- Next.js 16 (already installed)
- React 19 (already installed)
- Framer Motion (for animations)
- Tailwind CSS (already installed)
- Shadcn UI components (already installed)

### File Size Targets
- Components: <600 lines each (max 4 sections per component if nested)
- Page files: <200 lines (mainly imports & layout)
- CSS: Utility-first via Tailwind + semantic tokens

### Performance Considerations
- Lazy load testimonials/pricing images if needed
- Optimize generated images (next/image component)
- Minimize animations on mobile (reduced motion detection)
- CSS containment for glass-morphism elements

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile first approach
- Fallbacks for CSS backdrop-filter (older browsers)

---

## 10. Styling Approach

### Glass-Morphism Implementation
```css
.glass {
  background: rgba(248, 250, 252, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(248, 250, 252, 0.1);
  border-radius: 1rem;
}

.glass-accent {
  background: rgba(6, 182, 212, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(6, 182, 212, 0.2);
}
```

### Utility Classes (Tailwind)
- `glass`, `glass-accent` for card backgrounds
- `text-accent` for primary CTA color
- `border-subtle`, `border-accent` for borders
- Standard Tailwind for spacing, sizing, flexbox

---

## 11. Reusable Component Examples

### Button Variants
- Primary (accent background): CTA buttons
- Secondary (outlined): Alternative actions
- Ghost (no background): Links/navigation

### Card Variants
- Default glass card
- Accent-bordered card
- Highlight card (for featured tier)

### Form Elements
- Input fields with focus state highlight
- Label styling with required indicator
- Form validation feedback (accent color)

---

## 12. Data & Content Structure

### Placeholder Data (in components)
- Testimonials: 3 family stories (to be edited)
- FAQs: 4 example questions (to be edited)
- Services: 3-4 service descriptions
- Pricing: 4 tiers with features

### Contact Page Form
- Fields: Name, Email, Phone, Message
- No backend submission (logs to console for prototype)
- Success confirmation message

---

## 13. Quality Checklist

Before handoff/review:
- [ ] All CTAs are functional (modals open, links scroll)
- [ ] Responsive on 3 breakpoints (mobile 375px, tablet 768px, desktop 1440px)
- [ ] Glass effects visible and not too transparent/opaque
- [ ] All animations smooth (60fps, no jank)
- [ ] Color contrast WCAG AA compliant
- [ ] Images optimized with next/image
- [ ] Mobile burger menu works properly
- [ ] Form modal opens/closes cleanly
- [ ] Back-to-Top button appears/disappears at correct scroll point
- [ ] No console errors
- [ ] SEO meta tags present in head

---

## 14. Future Considerations

- Replace placeholder images with real photos
- Add backend for form submissions
- Integrate with actual scheduling system (Calendly, etc.)
- Add testimonials carousel if more content added
- Add blog section
- Implement contact form submission
- Add Google Analytics
- Add live chat support widget
- A/B test CTA placements

---

## Next Steps

1. **User Approval:** Review this plan and provide feedback/approval
2. **Design System Setup:** Create globals.css, tailwind.config.ts, design tokens
3. **Component Development:** Build components in order per phases
4. **Testing:** Responsive design and interaction testing
5. **Deployment:** Push to Vercel

---

**Ready to proceed with Phase 1 once approved!**
