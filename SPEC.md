# Fitz Maro Portfolio Website Redesign Spec

**Created:** February 3, 2026
**Project:** Personal Portfolio Website Redesign
**Status:** Ready for Implementation

---

## 1. Project Overview

### Objective
Redesign the existing portfolio website at `/Users/fitzmaro/fitzmaro-site` to modernize it using the design language from the provided HTML reference, adapted for a **light theme** while maintaining the editorial, sophisticated feel.

### Key Changes from Current Site
- Shift from dark theme to **light-only theme**
- New typography (Syne + Instrument Sans)
- Bento grid layout for About section
- Full career timeline instead of project-focused portfolio
- Simplified portfolio (no video projects featured)
- AI-leadership positioning throughout

---

## 2. Technical Requirements

### Stack
- **Framework:** Next.js (keep existing setup) with static export
- **Styling:** Tailwind CSS
- **Hosting:** Netlify (static deployment)
- **Fonts:** Google Fonts - Syne (display) + Instrument Sans (body)
- **Icons:** Phosphor Icons (from reference)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari and Chrome

### Performance
- Static export for fast loading
- Lazy-loaded images
- Minimal JavaScript

---

## 3. Design System

### Color Palette (Light Theme Adaptation)

```
Background:       #FFFFFF (white)
Surface:          #FAFAFA (light gray)
Surface2:         #F5F5F5 (slightly darker)
Border:           #E5E5E5 (light border)
Accent:           #f44849 (coral/red - kept from current site)
Accent Glow:      #ff6b6b (lighter coral for hover/glow)
Text Primary:     #171717 (near black)
Text Secondary:   #525252 (gray)
Text Tertiary:    #a3a3a3 (light gray)
```

### Typography

```
Display Font:     Syne (headings, hero, stats)
Body Font:        Instrument Sans (paragraphs, UI)
Weights:          400 (regular), 500 (medium), 600 (semibold), 700 (bold)
```

### Effects (Adapted for Light Theme)
- **Glow spots:** Soft coral/red radial gradients (subtle, ~5-8% opacity)
- **Noise texture:** Very subtle overlay for texture
- **Glassmorphism:** Light frosted glass effect on nav (white with blur)
- **Card hover:** Subtle lift (translateY -4px) with soft shadow

### Interactions (Keep Simple)
- Basic hover states on links and buttons
- Smooth color transitions (200-300ms)
- Minimal scroll animations
- No complex micro-interactions

---

## 4. Site Structure

### Navigation (Fixed Header)
```
[F Logo] FITZ MARO          [Home] [About] [Work] [Awards]     [Available for Speaking 🟢] [Let's Talk →]
         Design Tech
```

- Glassmorphism background
- Pill-style nav links
- Green dot status indicator: "Available for Speaking"
- Primary CTA: "Let's Talk" button

### Sections (Single Page)

1. **Hero**
2. **Brand/Award Marquee**
3. **About (Bento Grid)**
4. **Career Timeline**
5. **Awards**
6. **Footer/Contact**

---

## 5. Section Specifications

### 5.1 Hero Section

**Layout:** Two-column on desktop (content left, photo right), stacked on mobile

**Content - Left Side:**
```
// AI & CREATIVE TECHNOLOGY LEADER    [small tag/badge]

Leading the
AI Revolution
in Creative Tech.                     [large display heading, "AI" in accent color]

I build high-performance teams at the intersection of design,
engineering, and AI strategy. Currently driving AI transformation
at Amazon.                            [subheading paragraph]

[View My Work ↓]  [LinkedIn]          [CTA buttons]

13+              $550M+              50+
Years Exp.       Revenue Impact      Creatives Trained
                 (Pinterest)         on AI Workflows
```

**Content - Right Side:**
- Headshot photo (use existing from current site)
- Rounded corners, subtle shadow
- Overlay card at bottom showing:
  - "Current Role"
  - "Head of Design Technology"
  - "Amazon Brand Innovation Lab"

**Stats to Display:**
- 13+ Years Experience
- $550M+ Revenue Impact (Pinterest Pin Extension)
- 50+ Creatives Trained on AI Workflows

### 5.2 Brand/Award Marquee

**Style:** Scrolling horizontal marquee, two rows (opposite directions)

**Row 1 - Companies:**
```
AMAZON • HBO • PINTEREST • CANON • TARGET • JAMESON • DIET COKE
```

**Row 2 - Awards:**
```
CANNES LIONS • CLIO AWARDS • ONE SHOW • D&AD • EFFIE • WEBBY
```

**Design:**
- Subtle opacity (40-60%)
- Hover increases opacity
- Large, bold typography
- Continuous scroll animation

### 5.3 About Section (Bento Grid)

**Layout:** Responsive bento grid with varied card sizes

**Card 1 - Quote (Large, spans 2 columns):**
```
[Fingerprint icon]

"I don't just manage teams—I translate. My role is bridging
the gap between creative vision and AI-powered engineering,
acting as translator, facilitator, and diplomat."

[AI Enablement] [Team Leadership] [Cross-functional] [Technical Training]
```

**Card 2 - AI Impact Stat (Accent colored):**
```
[Chart icon]
90%+
Developer AI Adoption Rate
```

**Card 3 - Team Size:**
```
[Users icon]           TEAM SIZE
13+
Design Technologists Managed
(US, Canada, Mexico, Brazil)
```

**Card 4 - Speaking Credentials:**
```
SPEAKER AT
• Amazon Ads AI Week (Keynote)
• Cannes Lions Academy 2024
• SXSW 2020
• NYU, VCU Brandcenter, Miami Ad School
```

**Card 5 - Core Skills:**
```
EXPERTISE
[Icons for: AI, React, TypeScript, Figma, AWS]
```

**Card 6 - Recognition Badge:**
```
RECOGNIZED BY
• AdAge "Creative You Should Know"
• Cannes Lions "Fearless Thinker"
• Google/Drum "Young Innovator"
```

### 5.4 Career Timeline

**Layout:** Vertical timeline with alternating left/right cards on desktop, stacked on mobile

**Entry 1 - Amazon (Current):**
```
2022 — 2025                           [Amazon logo/icon]
HEAD OF NORTH AMERICA, DESIGN TECHNOLOGY
Amazon Brand Innovation Lab | NYC, Hybrid

• Managing 13 Design Technologists across US, Canada, Mexico, Brazil
• Spearheading Amazon Ads' largest AI initiatives since 2022
• Led AI enablement: trained 50+ creatives, 25+ developers globally
• Delivered executive briefings on AI strategy; set 30%+ productivity goals
• Developed Figma AI plugin bringing AI into creative workflows
• Led client workshops for Fortune 500 brands across CPG, entertainment, tech
```

**Entry 2 - Pinterest:**
```
2019 — 2022                           [Pinterest icon]
GLOBAL CREATIVE TECHNOLOGY LEAD
Pinterest | NYC → Remote

• Led first-ever AR, VR, 360°, and WebGL campaign innovations
• Created Pinterest's Pin Extension ad format: $5M first year, $550M+ to date
• Led Global Sales Solutions Team, aligning Product Engineering with Marketing
```

**Entry 3 - 360i:**
```
2013 — 2018                           [360i icon]
SENIOR INNOVATION LEAD → (Previous: Associate to Senior Strategist)
360i | NYC

• Co-founder of 360i Innovation Lab
• Named AdAge "Creative You Should Know" (Cannes edition)
• Built expertise translating technical concepts for non-technical audiences
• Earned dozens of industry awards
```

**Entry 4 - GSP:**
```
2012                                  [GSP icon]
STRATEGY INTERN
Goodby, Silverstein & Partners | San Francisco

• Strategy Intern under Gareth Kay
```

**Entry 5 - Education:**
```
2011 — 2013                           [Graduation cap icon]
VCU BRANDCENTER
Masters in Communications, Creative Technology | Richmond, VA

• Summa Cum Laude; graduated 2nd overall
• Board of Directors Scholarship Recipient

---

2007 — 2011
UNIVERSITY OF MARY WASHINGTON
BS Business, Marketing & Management | Fredericksburg, VA

• 2023 Alumni of Distinction (1 of 35 total)
```

### 5.5 Awards Section

**Layout:** Grid display with award counts by organization

**Header:**
```
AWARDS & RECOGNITION

30+ industry awards including a Cannes Lions Grand Prix
```

**Award Grid:**
```
CANNES LIONS          CLIO AWARDS          ONE SHOW
1 Grand Prix          8 Awards             3 Awards
1 Gold
3 Silver
2 Bronze
12 Shortlist

D&AD                  EFFIE                WEBBY
Pencils               Gold, Silver         Multiple
                      Bronze

SHORTY                OTHER
Awards                The Drum, etc.
```

**Notable Recognition Callout:**
```
[Star icon] AdAge "Creative You Should Know"
[Star icon] MediaPost "Young Innovator"
[Star icon] Campaign US "Media Stars"
[Star icon] Cannes Lions "Fearless Thinker"
```

### 5.6 Footer/Contact Section

**Layout:** Two-column on desktop

**Left Column:**
```
Let's build
the future of AI
in creative.                    [Large display heading]

Whether you need a speaker for your next event,
a leader for your design tech org, or a partner
for an ambitious AI initiative.

fitzmaro@gmail.com →            [Large email link with arrow]
856.524.5336                    [Phone number]
```

**Right Column:**
```
CONNECT
LinkedIn →

NAVIGATION
Home
About
Career
Awards
```

**Bottom Bar:**
```
© 2026 Fitz Maro. All rights reserved.     NYC & Philadelphia
```

---

## 6. Responsive Behavior

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Mobile Adaptations
- Single column layouts
- Hamburger menu for navigation
- Stacked hero (content above, photo below or hidden)
- Bento grid becomes single column stack
- Timeline becomes vertical stack (no alternating)
- Marquee scrolls faster on mobile
- Stats in hero become 2x2 grid

### Tablet Adaptations
- Two-column where appropriate
- Bento grid 2 columns
- Full navigation visible

---

## 7. Content Details

### Personal Information
- **Name:** Fitz Maro
- **Title:** Head of North America, Design Technology @ Amazon Brand Innovation Lab
- **Location:** NYC & Philadelphia
- **Email:** fitzmaro@gmail.com
- **Phone:** 856.524.5336
- **LinkedIn:** https://www.linkedin.com/in/fitzmaro/

### Positioning Statement
"AI & Creative Technology Leader" — emphasizing the AI expertise throughout

### Hero Tagline Options (AI-focused)
- Primary: "Leading the AI Revolution in Creative Tech."
- Alternative: "Where AI Meets Creative Excellence."
- Alternative: "Translating AI Vision into Reality."

### Bio Quote
"I don't just manage teams—I translate. My role is bridging the gap between creative vision and AI-powered engineering, acting as translator, facilitator, and diplomat."

---

## 8. SEO & Meta

### Page Title
```
Fitz Maro | AI & Creative Technology Leader
```

### Meta Description
```
Fitz Maro is a Creative Technology leader with 13+ years experience driving AI transformation at Amazon, Pinterest, and top agencies. Speaker, award-winner, team builder.
```

### Open Graph
- Title: Fitz Maro | AI & Creative Technology Leader
- Description: (same as meta)
- Image: Headshot or branded OG image
- URL: (site URL)

---

## 9. Assets Needed

### From Current Site
- [ ] Headshot photo (existing)
- [ ] Any project thumbnails if kept

### New/Generated
- [ ] OG image for social sharing
- [ ] Favicon (keep existing or update)

### External
- [ ] Google Fonts: Syne, Instrument Sans
- [ ] Phosphor Icons CDN

---

## 10. What's NOT Included

Based on interview decisions:
- ❌ Dark mode / theme toggle (light only)
- ❌ Book/writing section
- ❌ Video portfolio projects
- ❌ Downloadable resume PDF
- ❌ Testimonials
- ❌ Twitter/Instagram/GitHub links
- ❌ Contact form (direct email instead)
- ❌ Complex animations/micro-interactions

---

## 11. Implementation Notes

### Priority Order
1. Set up light theme color system
2. Implement new typography
3. Build navigation with glassmorphism
4. Hero section with stats
5. Brand/Award marquee
6. About bento grid
7. Career timeline
8. Awards section
9. Footer/Contact
10. Mobile responsiveness
11. Final polish and effects

### Key Technical Considerations
- Adapt dark-theme effects (glow spots) to work on light background
- Ensure sufficient contrast for accessibility
- Test glassmorphism on various backgrounds
- Optimize marquee animation performance

---

## 12. Sign-off

This spec represents all decisions made during the interview process. Ready for implementation upon approval.
