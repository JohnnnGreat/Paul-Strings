# Design Direction — Paul Ojoko Portfolio

## Identity Concept

Paul exists at the intersection of two disciplines most people see as opposites.
The design should make this duality feel like a **superpower, not a split personality**.

> "Music is structured emotion. Data is structured truth. I speak both languages."

The visual language bridges both worlds:
- **Musician side**: warmth, texture, rhythm, mood, dark atmospheric staging
- **Analyst side**: precision, clarity, clean grids, logical hierarchy
- **Together**: A dark, editorial, high-contrast aesthetic with warm accent tones

---

## Color Palette

### Primary Palette (Recommended)

| Role | Color | Hex | Notes |
|------|-------|-----|-------|
| Background | Deep Charcoal | `#0D0D0D` | Almost black, not pure black — avoids harshness |
| Surface | Warm Dark | `#141414` | Cards, sections — slightly warm undertone |
| Border / Divider | Subtle | `#2A2A2A` | Low-contrast separators |
| Primary Text | Warm White | `#F5F0EB` | Cream, not pure white — softer on dark bg |
| Secondary Text | Muted Warm | `#8A8178` | Subheadings, captions |
| Accent (Music) | Warm Amber | `#D4A843` | Guitar, warm stage lighting, gold |
| Accent (Data) | Muted Teal | `#4AADA0` | Charts, technical, analytical |
| Accent (Highlight) | Soft Coral | `#E07B54` | CTAs, interactive hover states |

**Palette philosophy**: Imagine Paul on a dimly lit stage under amber spotlights, opening a data dashboard on his laptop. That's this palette.

### Alternative Palette (Lighter / More Modern)

| Role | Color | Hex |
|------|-------|-----|
| Background | Warm Linen | `#F7F4EF` |
| Surface | Off-White | `#FDFCF9` |
| Text | Deep Slate | `#1A1A2E` |
| Accent 1 | Terracotta | `#C1694F` |
| Accent 2 | Sage | `#7C9A8B` |
| Accent 3 | Dusty Gold | `#B89A5A` |

> Only use the light palette if Paul prefers a "clean professional" look over "moody creative."
> **The dark palette is strongly recommended** — it suits both guitarist aesthetics and data dashboards.

---

## Typography

### Recommended Pairing

```
Display / Hero: Playfair Display (serif)
  — Used for: name, hero tagline, section titles
  — Weight: 700–900
  — Why: Adds elegance and craft; feels like album liner notes

Heading / UI: Plus Jakarta Sans
  — Used for: section heads, labels, navigation
  — Weight: 600–700
  — Why: Slightly quirky letterforms; modern but has personality

Body: Inter
  — Used for: paragraphs, captions, metadata
  — Weight: 400–500
  — Why: Maximum readability, trusted, data-friendly
```

### Alternative Pairing (More Technical)

```
Display: DM Serif Display  →  Ornate, editorial
Body: Space Grotesk        →  Tech-forward, monospace energy
Code: JetBrains Mono       →  For data/code snippets in portfolio
```

### Type Scale (Tailwind CSS 4)

```css
/* Hero name */       text-[clamp(3rem,8vw,7rem)]  font-playfair font-black
/* Hero tagline */    text-[clamp(1.1rem,2.5vw,1.5rem)]  font-jakarta font-medium
/* Section title */   text-4xl  font-jakarta font-bold  tracking-tight
/* Body */            text-base  font-inter  leading-relaxed
/* Caption */         text-sm  font-inter  text-muted
```

---

## Visual Texture & Atmosphere

### Musician Section Atmosphere
- Dark backgrounds with subtle grain texture (CSS noise filter)
- Warm amber/orange accent glows around images
- Performance photography: high contrast, dramatic lighting
- Guitar imagery: close-up strings, silhouettes, concert crowds
- Audio waveform graphics as decorative elements

### Data Section Atmosphere
- Clean, light surface inside dark page (contrast switch)
- Grid lines, chart axes as design elements
- Data visualization as art — charts that look beautiful, not just functional
- Code snippets styled elegantly (syntax highlighted)
- "Dashboard" aesthetic for project previews

### Bridging Both
- Use a **visual rhythm** — musical beats mirror data points
- Waveform graphic that doubles as a data chart divider
- Typography at scale (large numbers for stats, like musical dynamics)

---

## Mood References

**Feel like:**
- A musician who codes
- A data scientist who performs
- A Spotify Wrapped meets concert poster aesthetic
- Dark, cinematic, editorial — but precise and trustworthy

**Not like:**
- Generic developer portfolio (just code + GitHub green squares)
- Typical band website (all black + skull imagery)
- Corporate analytics dashboard (boring blue charts)
- Overly experimental/chaotic (hard to navigate)

---

## Spacing & Layout Philosophy

- **Generous whitespace** (or "darkspace") — give elements room to breathe
- **8px grid system** — all spacing multiples of 8
- **Max content width**: 1200px, centered
- **Section padding**: `py-24 md:py-32`
- **Asymmetric layouts** for character; never purely centered for everything
- Bento grid for skills/projects section
- Full-bleed dark sections alternating with card-based sections

---

## Iconography

- Use minimal, thin-line icons (Lucide React or Phosphor Icons)
- Music-specific icons: guitar, music note, headphones, waveform
- Data icons: chart, database, code brackets, filter
- Avoid: clipart, thick chunky icons, overly colorful icon sets
