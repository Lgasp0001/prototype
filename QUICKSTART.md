# Quick Start Guide

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd /vercel/share/v0-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## What You'll See

### Landing Page (`/`)
- Full-screen hero section with doctor portrait
- 10 scrollable sections showcasing services, testimonials, pricing
- Sticky navigation with mobile burger menu
- Modal that opens when clicking any "Schedule Call" button
- Smooth animations throughout

### Contact Page (`/contact`)
- Dedicated contact form
- Contact information cards
- Office hours display
- Link from footer "Contact Us"

## Features to Try

1. **Mobile Responsiveness**
   - Resize browser to see mobile layout (< 768px)
   - Click burger menu icon to toggle navigation
   - Tap CTAs to open schedule modal

2. **Smooth Scrolling**
   - Click any nav item (Why Lumina, Services, Pricing, etc.)
   - Page smoothly scrolls to section
   - Back-to-top button appears after scrolling

3. **Interactive Elements**
   - Hover over cards to see glass effects
   - Click "Schedule Call" to open modal
   - Fill out and submit contact form (logs to console)
   - Expand/collapse FAQ items

4. **Animations**
   - Sections fade in as page loads
   - Cards stagger in one by one
   - Buttons scale on hover
   - Modal appears with fade-in effect

## File Organization

- **`app/page.tsx`** - Main landing page component
- **`app/contact/page.tsx`** - Contact page
- **`components/sections/`** - All page sections
- **`components/modals/`** - Modal components
- **`app/globals.css`** - Design system and styles
- **`tailwind.config.ts`** - Theme and animation config

## Customization

### Update Text Content
Edit directly in component files:
```tsx
// In components/sections/hero.tsx
<h1>Your new headline here</h1>
```

### Change Colors
Update CSS variables in `app/globals.css`:
```css
--primary-accent: 180 100% 42%; /* Current cyan */
```

### Add New Sections
1. Create file in `components/sections/new-section.tsx`
2. Import in `app/page.tsx`
3. Add to main render

### Modify Images
Replace image files in `/public/`:
- `dr-elena-vance.jpg` - Doctor portrait
- `family-story-*.jpg` - Testimonial images

## Deployment

### To Vercel
```bash
npm run build
vercel deploy
```

### To Other Hosting
```bash
npm run build
# Upload ./out or ./.next directory
```

## Browser Testing

Test on these viewports:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1440px (Standard monitor)

## Troubleshooting

**Images not loading?**
- Ensure image files exist in `/public/`
- Check file names match exactly in imports

**Styles not applying?**
- Run `npm run dev` to regenerate Tailwind CSS
- Clear browser cache

**Modal not opening?**
- Check browser console for errors
- Verify "Schedule Call" button `onClick` handler

**Animations not smooth?**
- Disable browser extensions
- Check on another device
- Reduce motion setting may affect animations

## Performance Notes

- Initial load: ~2-3 seconds
- Images auto-optimize on first load
- Smooth 60fps animations on modern devices
- Mobile-optimized with 3G+ networks in mind

## SEO & Analytics

Current setup includes:
- Meta tags for social sharing
- Semantic HTML structure
- Mobile viewport configuration

Add Google Analytics:
1. Install `gtag` package
2. Add tracking code to `app/layout.tsx`

## Need Help?

See detailed documentation in:
- `PROJECT_SUMMARY.md` - Complete feature list
- `IMPLEMENTATION_DETAILS.md` - Technical architecture
- `IMPLEMENTATION_KICKSTART.md` - Original planning document

---

**Happy exploring! The prototype is ready to preview and customize.**
