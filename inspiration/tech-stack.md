# Tech Stack — Paul Ojoko Portfolio

## Current Foundation (Already Installed)

| Tool | Version | Role |
|------|---------|------|
| Next.js | 16.2.7 | Framework (App Router) |
| React | 19.2.4 | UI library |
| Tailwind CSS | 4.x | Styling |
| TypeScript | 5.x | Type safety |

> **Important**: This is Next.js 16 with React 19. APIs differ from Next.js 14/15.
> Always read `node_modules/next/dist/docs/` before writing new Next.js code.

---

## Packages to Install

### Animations (Core)
```bash
pnpm add motion
# "motion" is the 2025 rename of framer-motion
# Import: import { motion, AnimatePresence } from "motion/react"
```

```bash
pnpm add gsap
# For scroll-driven animations and complex sequences
# Import: import { gsap } from "gsap"; import { ScrollTrigger } from "gsap/ScrollTrigger"
```

### UI Components
```bash
pnpm add @radix-ui/react-dialog @radix-ui/react-tooltip
# Accessible primitives for modals, tooltips, etc.
# Shadcn/ui is built on these — add as needed
```

```bash
# Magic UI components — copy/paste from magicui.design (no install needed)
# Components: Marquee, AnimatedList, DockNavigation, ShimmerButton, etc.
# They ship as source files you paste into /components/magicui/
```

### Icons
```bash
pnpm add lucide-react
# Clean thin-line icons; tree-shakable
# Includes: Guitar, Music, BarChart2, Database, Github, Linkedin, etc.
```

### Audio
```bash
pnpm add howler
pnpm add @types/howler
# For custom audio player and ambient guitar loop
# Handles: volume fading, looping, format fallbacks
```

### Data Visualization
```bash
pnpm add recharts
# React-native charting library; works with Next.js
# Simpler API than D3, sufficient for portfolio data showcases
```

```bash
# Optional: D3 for custom visualizations
pnpm add d3
pnpm add @types/d3
# Only add if doing advanced custom data viz
```

### Fonts (Google Fonts via Next.js)
```typescript
// In app/layout.tsx — Next.js 16 font API
import { Playfair_Display, Plus_Jakarta_Sans, Inter } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700"],
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
```

### Utilities
```bash
pnpm add clsx tailwind-merge
# clsx: conditional class joining
# tailwind-merge: merges Tailwind classes without conflicts

pnpm add @tailwindcss/typography
# For rich text content in blog posts / case studies
```

---

## Project Structure

```
paulstryngz/
├── inspiration/           ← This folder — design research
├── public/
│   ├── fonts/             ← Self-hosted fonts (if not using next/font)
│   ├── images/
│   │   ├── paul/          ← Photos of Paul
│   │   ├── music/         ← Album covers, performance photos
│   │   └── data/          ← Project screenshots, chart exports
│   └── audio/             ← Ambient guitar loop (MP3 + WebM)
├── src/
│   ├── app/
│   │   ├── layout.tsx     ← Root layout with fonts, metadata
│   │   ├── page.tsx       ← Main single-page portfolio
│   │   ├── globals.css    ← CSS variables, base styles
│   │   ├── music/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   ← Individual music project page
│   │   └── data/
│   │       └── [slug]/
│   │           └── page.tsx   ← Individual data project case study
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── MusicSection.tsx
│   │   │   ├── DataSection.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── AudioPlayer.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── MusicCard.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── AnimatedText.tsx
│   │   │   └── WaveformBar.tsx
│   │   └── magicui/       ← Magic UI components (copied from source)
│   ├── lib/
│   │   ├── utils.ts       ← clsx/twMerge helper (cn function)
│   │   ├── music-data.ts  ← Music releases data
│   │   └── data-projects.ts ← Data analytics projects data
│   └── hooks/
│       ├── useAudio.ts    ← Howler.js audio hook
│       └── useCursor.ts   ← Custom cursor motion hook
```

---

## CSS Variables (globals.css)

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-background: #0D0D0D;
  --color-surface: #141414;
  --color-border: #2A2A2A;
  --color-text: #F5F0EB;
  --color-muted: #8A8178;
  --color-accent-amber: #D4A843;
  --color-accent-teal: #4AADA0;
  --color-accent-coral: #E07B54;

  /* Fonts */
  --font-playfair: var(--font-playfair);
  --font-jakarta: var(--font-jakarta);
  --font-inter: var(--font-inter);

  /* Spacing */
  --section-padding: clamp(4rem, 10vw, 8rem);
}

/* Grain texture overlay */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
}
```

---

## Next.js 16 Specific Notes

```typescript
// Metadata API (next/16 pattern — verify in node_modules/next/dist/docs/)
export const metadata = {
  title: "Paul Ojoko — Guitarist & Data Analyst",
  description: "...",
  openGraph: { ... }
}

// Image component: Next.js 16 may have API changes from v14/v15
// ALWAYS check: node_modules/next/dist/docs/ before using

// Server vs Client components:
// Keep sections as Server Components where possible
// Add "use client" only for: animations, audio, cursor, interactive state
```

---

## Content Management

No CMS needed for v1. Use typed data files:

```typescript
// src/lib/music-data.ts
export const musicReleases = [
  {
    slug: "song-slug",
    title: "Song Title",
    type: "Single" | "EP" | "Album",
    year: 2024,
    coverImage: "/images/music/cover.jpg",
    description: "...",
    spotifyUrl: "https://...",
    appleMusicUrl: "https://...",
    soundcloudUrl: "https://...",
    youtubeUrl: "https://...",
  }
]

// src/lib/data-projects.ts
export const dataProjects = [
  {
    slug: "project-slug",
    title: "Project Title",
    category: "Data Analysis" | "Visualization" | "ML",
    tools: ["Python", "Tableau", "SQL"],
    previewImage: "/images/data/preview.jpg",
    summary: "One-line description",
    problem: "What problem was solved",
    result: "Key insight or metric",
    githubUrl: "https://...",
    liveUrl: "https://...",
  }
]
```

---

## Deployment

```
Platform:   Vercel (free tier — optimal for Next.js)
Domain:     paulojoko.com or paulstryngz.com (verify availability)
Analytics:  Vercel Analytics (built-in, free)
Speed:      Vercel Edge Network handles CDN automatically
```

### Vercel Setup
```bash
pnpm build        # Test production build locally first
vercel            # Deploy from CLI
# OR connect GitHub repo to Vercel for auto-deploy on push
```

---

## Optional Upgrades (Post-v1)

| Feature | Library | When to Add |
|---------|---------|-------------|
| Blog / articles | MDX (built into Next.js) | If Paul wants to write |
| Booking system | Calendly embed | If taking music bookings |
| Email subscription | Resend API | Fan/client mailing list |
| CMS | Sanity.io | When content updates become frequent |
| 3D hero | Three.js + R3F | If premium immersive feel is priority |
| Page transitions | Barba.js | If routing between pages feels jarring |
