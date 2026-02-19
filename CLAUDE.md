# CLAUDE.md - Project Context

## Project Overview

**Version 4** - Warm dark portfolio inspired by honglyoeng.com and adithyakrishnan.com. Sophisticated, editorial feel with warm cream text on near-black background.

## Design Philosophy

- Near-black background (#0e0d0d), warm cream text (#e7e2de)
- Warm orange accent (#e79641), deep maroon secondary (#b6372e)
- Clean sans-serif typography: Inter (body) + Space Grotesk (headers)
- Subtle glow effects and noise texture for depth
- Generous whitespace, editorial layout
- Smooth animations and hover states

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background | Near black | #0e0d0d |
| Surface | Dark gray | #1a1918 |
| Text | Warm cream | #e7e2de |
| Muted text | Gray-brown | #a59e9a |
| Accent | Warm orange | #e79641 |
| Secondary | Deep maroon | #b6372e |
| Border | Dark brown | #2a2826 |

## Structure

Next.js App Router with components:

- `layout.tsx` - Root layout with fonts, metadata, glow effects
- `page.tsx` - Homepage composition
- `Header.tsx` - Glass-morphism navigation with pill indicators
- `Hero.tsx` - Hero section with photo and stats
- `Marquee.tsx` - Scrolling text element
- `About.tsx` - Bento grid about section
- `Career.tsx` - Timeline experience section
- `Awards.tsx` - Appearances and accolades
- `Footer.tsx` - Contact section

## Tech Stack

- Next.js 16.1.1 (App Router)
- TypeScript
- Tailwind CSS v4
- Inter + Space Grotesk fonts via next/font
- Phosphor Icons (CDN)
- Static export

## Commands

```bash
npm run dev      # localhost:3000 (or next available port)
npm run build    # Static build to /out
npm run lint     # ESLint
```

## Version History

- v1: `/Users/fitzmaro/fitzmaro-site` - Original (source for this version)
- v2: `/Users/fitzmaro/fitzmaro-site-v2` - AI pitch, polished design
- v3: `/Users/fitzmaro/fitzmaro-site-v3` - Brutalist design
- v4: `/Users/fitzmaro/fitzmaro-site-v4` - Warm dark, editorial (this)

## Design Inspiration

- [honglyoeng.com](https://honglyoeng.com/) - Warm dark palette, editorial feel
- [adithyakrishnan.com](https://adithyakrishnan.com/) - Clean minimal, dark theme
