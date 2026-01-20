# TECHNICAL.md - Technical Decisions & Architecture

This document is for future developers, not for the site owner.

## Technology Stack

### Framework: Next.js (Static Export)
**Why:**
- Industry-standard React framework with excellent static site generation
- Can export to pure static HTML/CSS/JS (no server required)
- Great developer experience and extensive documentation
- Built-in image optimization
- Easy to deploy anywhere

### Styling: Tailwind CSS
**Why:**
- Rapid development with utility classes
- Built-in dark mode support
- Highly customizable design system
- Small bundle size when purged
- Well-documented and widely adopted

### Hosting: Vercel (Free Tier) or Netlify
**Why:**
- Free for personal/portfolio sites
- Automatic HTTPS
- Global CDN for fast loading
- Easy custom domain connection
- Zero configuration deployment

### Typography
- **Headings:** Playfair Display (elegant serif) or similar
- **Body:** Inter (clean sans-serif) or similar
- Source: Google Fonts (free, reliable CDN)

## Architecture Decisions

### Static Site Generation (SSG)
The entire site is pre-rendered at build time. No server-side rendering needed.
Benefits:
- Fastest possible load times
- Free hosting (no server costs)
- Maximum reliability
- Easy caching and CDN distribution

### Component Structure
```
/components
  /layout      - Header, Footer, Navigation, ThemeToggle
  /sections    - Hero, About, Awards, Portfolio, Contact
  /ui          - Buttons, Cards, Typography primitives
/pages
  index.tsx    - Single-page layout with all sections
/styles
  globals.css  - Tailwind imports, custom properties, fonts
/public
  /images      - Downloaded/optimized images from current site
```

### Dark/Light Mode Implementation
- CSS custom properties for theme colors
- System preference detection via `prefers-color-scheme`
- Manual toggle with localStorage persistence
- No flash of wrong theme on load (script in head)

### Performance Targets
- Lighthouse score: 95+ across all categories
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### Video Embeds (Vimeo)
- Lazy-loaded iframes
- Facade pattern (thumbnail until click) for performance
- Responsive aspect ratio containers

### Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Keyboard navigation
- Screen reader friendly
- Sufficient color contrast in both themes

## Custom Domain Setup (Namecheap → Vercel/Netlify)

### Vercel
1. Add domain in Vercel dashboard
2. Update Namecheap DNS:
   - A record: 76.76.19.19
   - CNAME www: cname.vercel-dns.com

### Netlify
1. Add domain in Netlify dashboard
2. Update Namecheap DNS with provided records
3. Enable HTTPS (automatic)

## Future Considerations
- Logo can be added to header when ready
- Portfolio items could become individual pages if needed
- Contact form could be added (Formspree or similar)
- Analytics could be added (Plausible, Simple Analytics, or Vercel Analytics)
