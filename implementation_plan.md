# Marco Anthony Ayuste — AAA Developer Portfolio

Building a premium, terminal-themed developer portfolio with 3D interactive elements, inspired by 7 analyzed reference sites.

## Design Philosophy

**Hybrid Terminal × Modern** — Clean dark UI with terminal/hacker accents (monospace headers, `> ` nav prefixes, "SYSTEM STATUS: ONLINE" branding) blended with premium glassmorphism cards, smooth Framer Motion animations, and an immersive 3D hero.

**Color Palette:**
- Background: `#0a0a0f` (deep navy-black)
- Surface: `#111118` / `#1a1a25`
- Accent Primary: `#00d4ff` (electric cyan)
- Accent Secondary: `#7c3aed` (purple)
- Success/Terminal: `#22c55e` (emerald green)
- Text Primary: `#f0f0f5`
- Text Secondary: `#8a8a9a`

**Typography:**
- Headings: JetBrains Mono (monospace, terminal feel)
- Body: Inter (clean readability)
- Accents: Fira Code for code-like elements

## User Review Required

> [!IMPORTANT]
> **3D Scope Decision**: The full 3D interactive desk scene (like ap3008.dev) with clickable objects is a major undertaking. I recommend starting with a **simpler 3D hero** using procedural geometries (floating code symbols, rotating wireframe globe, particle field) that still looks premium but ships faster. We can iterate to a full desk scene later. Do you agree?

> [!IMPORTANT]
> **AI Chatbot API Key**: The chatbot companion requires an LLM API key (OpenAI/Anthropic). This will need to be set up as an environment variable. The chatbot will be built as a Next.js API route. Do you have an API key preference, or should I stub it out for now?

> [!IMPORTANT]
> **Content Files**: For the Writing and Presentations sections, I'll create placeholder content in markdown/JSON that you can later replace with your actual documents. I'll structure the system to support both markdown files and embedded Google Docs/Slides.

> [!WARNING]
> **Spotify Widget**: The "Now Playing" widget requires Spotify API OAuth setup (client ID, client secret, refresh token). I'll build the component but it will need your Spotify Developer credentials to activate.

## Proposed Changes

### Phase 1: Project Scaffolding & Core Layout

#### [NEW] Next.js 14+ Project Setup
- Initialize with `npx create-next-app@latest` using App Router, TypeScript, Tailwind CSS
- Install dependencies: `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `gsap`, `@emailjs/browser`, `react-icons`, `react-markdown`
- Configure Tailwind with custom color palette and JetBrains Mono + Inter fonts

#### [NEW] layout.tsx
- Root layout with dark theme, metadata, Open Graph tags, structured data
- Custom cursor component, page transition wrapper
- Global "SYSTEM STATUS: ONLINE" indicator in corner

#### [NEW] Navbar.tsx
- Terminal-style navigation: `> HOME`, `> PROJECTS`, `> WRITING`, etc. (jatou.ca inspired)
- Monospace font, green `>` prefix on active/hover states
- Mobile hamburger with slide-in terminal panel
- Theme toggle (dark/light)
- Window control dots (red/yellow/green) in top-right corner

#### [NEW] Footer.tsx
- Social links, copyright, "Built with Next.js & React Three Fiber"
- Terminal-style footer with `$ echo "Made by Marco"` aesthetic

---

### Phase 2: 3D Hero & Homepage

#### [NEW] page.tsx (Homepage)
- 3D hero section with React Three Fiber canvas
- Animated typing text cycling through roles: "Software Engineer", "AI/ML Builder", "Full-Stack Developer"
- Scrolling philosophy marquee banner
- Bento grid preview cards linking to sections
- "For Recruiters" pitch section with world map SVG

#### [NEW] HeroScene.tsx
- Procedural 3D scene: floating code symbols, wireframe shapes, particle field
- Orbital camera movement on mouse move (parallax)
- Post-processing: bloom, vignette for cinematic feel
- Mobile fallback: 2D animated gradient with floating elements

#### [NEW] Marquee.tsx
- Dual-direction scrolling philosophy banners (anhadchawla.com inspired)
- "/// BUILD SYSTEMS THAT THINK /// SHIP FAST, ITERATE FASTER /// CODE WITH PURPOSE ///"

---

### Phase 3: Content Sections

#### [NEW] /about/page.tsx
- Bento grid: bio card, 3D globe (drei `<Globe>`), tech icons grid, quick stats
- Education subsection with UTM logo
- One-click email copy button
- Languages spoken indicator (EN/FR/TL)

#### [NEW] /projects/page.tsx
- Expandable project cards (vhaan.me style) with tech pill badges
- Featured LOCATR banner with special highlight
- Filter by tech stack/category
- Click to expand → full description, links, screenshots

#### [NEW] /writing/page.tsx
- Document-style cards (Google Docs aesthetic) with title, date, excerpt, tags
- Filter/search bar by tag, course, date
- Click → modal with full rendered markdown or embedded Google Doc iframe
- Writing samples stored as JSON + markdown files

#### [NEW] /presentations/page.tsx
- Visual gallery cards with slide thumbnail
- Click → embed Microsoft/Google Slides viewer
- Download button for each presentation

#### [NEW] /experience/page.tsx
- Terminal-log themed: `> EXPERIENCE.LOG` header (jatou.ca inspired)
- Vertical timeline with colored milestone dots
- Expandable role cards with tech pill badges
- All 8 roles with company, title, dates, location, bullet points

#### [NEW] /skills/page.tsx
- Hover-activated telemetry panel (anhadchawla.com): hover skill → shows context
- Categorized grid: AI/ML, Languages, Frameworks, Infrastructure
- Scrolling tech marquee ticker
- Certifications subsection

#### [NEW] /achievements/page.tsx
- Horizontal drag-scrollable photo gallery (tanmayverma.org)
- Hackathon wins, events, activities
- Caption overlay on hover

#### [NEW] /contact/page.tsx
- Contact form with EmailJS (name, email, message)
- Social media icon links
- One-click copy email button
- Animated CTA

#### [NEW] /resume/page.tsx
- Embedded PDF viewer
- Download button

---

### Phase 4: Interactive Features

#### [NEW] ChatWidget.tsx
- Floating AI chatbot companion (parthdhroovji.me inspired)
- Collapsible/expandable chat window
- API route to LLM with system prompt containing full bio
- Rate limited, character limited

#### [NEW] /api/chat/route.ts
- Next.js API route for chatbot
- System prompt with full resume/bio context
- Rate limiting per IP

#### [NEW] CustomCursor.tsx
- Custom cursor with trail effect
- Interactive hover states on elements

#### [NEW] VisitorCounter.tsx
- "SYSTEM STATUS: ONLINE" with pulsing green dot
- Live visitor indicator

---

### Phase 5: Data & Content Files

#### [NEW] Content data files
- `src/data/projects.ts` — All project data
- `src/data/experience.ts` — All experience data
- `src/data/skills.ts` — Skills with categories and telemetry descriptions
- `src/data/writings.ts` — Writing sample metadata
- `src/data/presentations.ts` — Presentation metadata
- `src/data/achievements.ts` — Gallery items
- `src/data/personal.ts` — Bio, contact, social links
- `src/content/writings/*.md` — Writing sample markdown files

---

## Verification Plan

### Browser Testing
- Navigate to each route and verify rendering
- Test responsive layout at mobile (375px), tablet (768px), desktop (1440px)
- Verify 3D scene loads and degrades on mobile
- Test all interactive elements: project card expansion, skill hover telemetry, photo gallery drag
- Verify contact form submission via EmailJS
- Test dark/light theme toggle
- Verify page transitions and animations

### Build Verification
- `npm run build` — Ensure clean production build
- `npm run lint` — Zero lint errors
- Check Lighthouse scores (target: Performance 90+, Accessibility 95+, SEO 100)

### Manual Verification
- User reviews deployed site on Netlify/Vercel
- Test chatbot responses
- Verify all content accuracy
- Test on actual mobile device
