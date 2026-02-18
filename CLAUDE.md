# CLAUDE.md - Project Context

## Project Overview

Personal portfolio website for Fitz Maro, Head of North America Design Technology at Amazon's Brand Innovation Lab. This is a modern, static portfolio site replacing an older Wix site.

**Live domain:** fitzmaro.com

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **UI:** React 19.2.3
- **Styling:** Tailwind CSS v4
- **Fonts:** Syne (display), Instrument Sans (body) via next/font
- **Icons:** Phosphor Icons (loaded via CDN)
- **Output:** Static export (`output: "export"` in next.config.ts)

## Repository

- **Remote:** https://github.com/fitzmaro/fitzmaro-site.git
- **Branch:** main (assumed)

## Project Structure

```
/Users/fitzmaro/fitzmaro-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts, metadata, global elements
│   │   ├── page.tsx        # Homepage composition
│   │   ├── globals.css     # Global styles
│   │   └── favicon.ico
│   └── components/
│       ├── Header.tsx      # Site header/navigation
│       ├── Hero.tsx        # Hero section
│       ├── Marquee.tsx     # Scrolling marquee element
│       ├── About.tsx       # About section
│       ├── Career.tsx      # Career/experience section
│       ├── Awards.tsx      # Awards display
│       └── Footer.tsx      # Site footer
├── public/                 # Static assets (SVGs)
├── out/                    # Static build output
├── content.json            # Site content data (bio, awards, portfolio items)
├── next.config.ts          # Next.js config (static export, image domains)
├── tsconfig.json           # TypeScript config (uses @/* path alias)
├── SPEC.md                 # Design/feature specification
└── TECHNICAL.md            # Technical decisions documentation
```

## Key Files

- **content.json** - All site content: personal info, awards, portfolio projects, experience, images
- **src/app/layout.tsx** - SEO metadata, font setup, global layout elements (noise overlay, glow effects)
- **src/app/page.tsx** - Main page composition using all section components
- **next.config.ts** - Static export enabled, image domains for Wix and Vimeo

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build static site to /out directory
npm run start    # Start production server
npm run lint     # Run ESLint
```

## External Content Sources

- **Profile images:** Hosted on Wix static CDN (static.wixstatic.com)
- **Video thumbnails:** Vimeo CDN (i.vimeocdn.com)
- **Portfolio videos:** Embedded from Vimeo
- **Resume:** Hosted on Dropbox (linked externally)

## Design Notes

- Dark theme with subtle animated glow spots and noise texture overlay
- Serif font (Syne) for headers, sans-serif (Instrument Sans) for body
- Navy blues, rosemary green, and khaki color palette
- Smooth scroll behavior enabled

## Path Alias

TypeScript is configured with `@/*` mapping to `./src/*` for clean imports:
```typescript
import Component from "@/components/Component"
```
