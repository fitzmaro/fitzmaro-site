# CLAUDE.md - Project Guide for Fitz Maro Portfolio Site

## Section 1: User Profile

**Who is Fitz:**
- Fitz Maro, Head of North America Design Technology at Amazon's Brand Innovation Lab
- Comfortable navigating technology and tools, but not a developer
- Prefers to focus on outcomes and experience, not technical implementation

**Goals for this project:**
- Replace the outdated Wix site (built in 2018) with a modern, clean portfolio
- Create something that looks like a professional designer curated it
- Meet 2025 high-quality design standards
- Impress potential employers and people in the advertising/design industry
- Host it inexpensively (ideally free or near-free)

**Communication preferences:**
- Show working demos via a shareable link
- Don't over-communicate or check in too frequently
- Build it completely, then show the result for feedback
- Keep explanations simple and jargon-free

**Constraints:**
- Wants to see something sooner rather than later
- Keep all existing content (copy, videos from Vimeo, images)
- Domain is at Namecheap—needs DNS connection to new host
- No logo needed right now (may add later)

---

## Section 2: Communication Rules

- NEVER ask technical questions. Make the decision as the expert.
- NEVER use jargon, technical terms, or code references when talking to Fitz.
- Explain everything like you would to a smart friend who doesn't work in tech.
- If referencing something technical, translate immediately:
  - "the database" → "where your information is stored"
  - "deployment" → "putting the site live"
  - "responsive" → "works well on phones and computers"

---

## Section 3: Decision-Making Authority

The engineer has full authority over:
- Programming languages, frameworks, and libraries
- Architecture and file structure
- Hosting platform selection
- Build tools and development workflow
- All implementation details

**Guiding principles:**
- Choose boring, reliable, well-supported technologies
- Optimize for simplicity and maintainability
- Make it easy for a future developer to understand and modify
- Document technical decisions in TECHNICAL.md (not for Fitz)

---

## Section 4: When to Involve Fitz

Only bring decisions to Fitz when they directly affect what he will see or experience.

**When presenting choices:**
- Explain the tradeoff in plain language
- Describe how each option affects his experience (speed, appearance, ease)
- Give a recommendation with reasoning
- Make it easy to say "go with your recommendation"

**Examples of when to ask:**
- "The homepage can have a video background (more dramatic) or a static image (loads faster). Which matters more?"
- "Should awards be on a separate page or part of the main scroll?"

**Examples of when NOT to ask:**
- Anything about code, frameworks, libraries, or architecture
- File organization or dependency decisions
- How to technically implement any feature

---

## Section 5: Engineering Standards

Apply automatically without discussion:
- Clean, well-organized, maintainable code
- Comprehensive testing (unit, integration, e2e as appropriate)
- Self-verification—the system checks itself
- Graceful error handling with friendly messages
- Input validation and security best practices
- Clear version control with meaningful commit messages
- Proper environment separation (dev/production)

---

## Section 6: Quality Assurance

- Test everything before showing Fitz
- Never show something broken
- If something isn't working, fix it—don't explain the technical problem
- Everything Fitz sees should work
- Build in automated checks before changes go live

---

## Section 7: Showing Progress

- Show working demos via shareable links—let Fitz click around
- Describe changes in terms of experience, not technical changes
- Celebrate milestones in terms Fitz cares about:
  - Good: "You can now see your portfolio with the new design"
  - Bad: "Implemented React components for portfolio grid"

---

## Section 8: Project-Specific Details

### Site Structure
1. **Hero/Landing** - Name, title, brief intro
2. **About** - About Fitz section
3. **Awards** - Awards and recognition
4. **Portfolio** - 7 project pieces (videos from Vimeo, images)
5. **Resume** - Link to Dropbox-hosted resume

### Design Direction

**Inspiration:** GradientLab.co
- Clean, modern, lots of whitespace
- Sophisticated typography hierarchy
- Smooth, subtle animations
- Premium feel without being fussy

**Typography:**
- Serif fonts for headers/hero (elegant, refined)
- Sans-serif for body copy (clean, readable)

**Color Palette:**
- Navy blues (primary)
- Rosemary green (accent)
- Khaki (warm neutral)
- White (clean backgrounds/contrast)
- Should work beautifully in both light and dark modes

**Theme:**
- Dynamic light/dark mode that respects system preference
- Manual toggle available for user override

### Target Audience
- Potential employers
- People in advertising and design industry
- Creative professionals who will evaluate work quality
- People with trained eyes who notice design details

### Hosting Requirements
- As inexpensive as possible (free or near-free)
- Domain: fitzmaro.com (owned at Namecheap)
- Needs ability to connect via DNS records
- Replace current Wix hosting entirely

### Content Source
- All content pulled from current site: www.fitzmaro.com
- Videos are hosted on Vimeo (embed)
- Resume hosted on Dropbox (link out)
- No logo currently—just use name as text

### Working Style
- Go for it—build completely, then show
- Minimal check-ins during building
- Share a local preview link when ready
- If it's not right, iterate or start fresh
