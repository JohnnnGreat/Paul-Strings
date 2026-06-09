# Layout & Site Architecture — Paul Ojoko Portfolio

## Site Structure

### Page Architecture (Single Page with Anchor Sections)

```
/ (home — single scrolling page)
├── #hero
├── #about
├── #music
├── #data
├── #skills
└── #contact

/music/[slug]     ← individual music project/release pages
/data/[slug]      ← individual data project case study pages
```

> A single-page structure is recommended for a portfolio of this type.
> It keeps the narrative flow intact: visitor scrolls through Paul's whole story.
> Deep-link pages for individual projects keep case studies clean and thorough.

---

## Section-by-Section Blueprint

### 1. Navigation
```
Layout: Sticky top bar, full-width
Left:   Paul Ojoko logo / name (monogram "PO" with guitar string detail)
Right:  Music | Data | About | Contact  +  [Hire Me] CTA button
Mobile: Hamburger → full-screen overlay menu
Behavior: Transparent on load, solid dark on scroll
```

---

### 2. Hero Section
```
Layout: Full viewport height (100dvh)
```

**Option A — Dual Split (Recommended)**
```
Left half (60%):
  - Large name: "Paul Ojoko"  (Playfair Display, massive)
  - Tagline: "Guitarist. Data Analyst. Storyteller."
  - Sub-tagline: 1-2 lines on who he is and what he does
  - CTA buttons: [See My Music] [See My Work]

Right half (40%):
  - Professional photo (atmospheric, slightly lit like on stage)
  - OR subtle looping video of guitar playing (muted, ambient)
  - Subtle animated accent: floating music notes OR data point scatter

Background:
  - Deep charcoal with subtle grain texture
  - Optional: Very faint animated waveform behind text
```

**Option B — Centered Cinematic**
```
Center:
  - Full-bleed dark background image (Paul performing or portrait)
  - Name + tagline overlaid in large white text
  - Scroll indicator arrow
  - Subtle dark gradient overlay ensures text readability
```

**Hero Animations:**
- Name fades in letter-by-letter (stagger: 0.05s per char)
- Tagline slides up from below after name
- CTA buttons fade in last
- Waveform/particle element animates continuously (subtle loop)

---

### 3. About / Identity Section
```
Layout: Two columns on desktop, single column on mobile
```

```
Left (text):
  - "Who is Paul Ojoko?" heading
  - 2-3 paragraph bio
  - "The intersection" — short explanation of why guitarist + analyst
  - Key stat pills: "5+ years guitar" | "3+ years data" | "X projects"

Right (visual):
  - Second photo (candid, relaxed — contrast to hero's dramatic photo)
  - OR a custom graphic showing the "overlap" of skills as a Venn diagram

Color:
  - Section background: slightly lighter than hero (warm dark #141414)
  - This signals "entering a new chapter"
```

---

### 4. Featured Work (Bento Grid)
```
Layout: Bento-style asymmetric grid
Purpose: Give visitors a snapshot of BOTH worlds before deep-diving
```

```
Grid structure (desktop):
┌────────────────┬────────┐
│  Music Project │  Data  │
│  (large)       │  Proj  │
│                │  1     │
├────────┬───────┤        │
│  Data  │ Music │        │
│  Proj  │ Proj  ├────────┤
│  2     │  2    │  Stat  │
└────────┴───────┴────────┘

Each card shows:
  - Project type badge (MUSIC | DATA)
  - Project title
  - One-line description
  - Hover: see more details / preview
```

---

### 5. Music Section
```
Layout: Dark, atmospheric, full-width
Background: Darkest section of the page — feels like entering a venue
```

**Sub-sections:**
```
5a. Music Hero Banner
  - Section title: "The Guitarist" or "Music"
  - Short 1-line description of his musical style/genre

5b. Featured Track / Player
  - Custom audio player for signature track
  - OR embedded Spotify player
  - Waveform visualization (animated while playing)

5c. Releases / Discography Grid
  - 2-3 col grid of album/EP/single covers
  - Each card: cover art, title, year, platform links
  - Hover: slight scale + show "Listen" button

5d. Performance Gallery
  - Horizontal scroll or masonry grid of performance photos
  - Full-bleed images with caption overlays

5e. Streaming Links Bar
  - Spotify | Apple Music | SoundCloud | YouTube
  - Clean icon + name layout
```

---

### 6. Data Analytics Section
```
Layout: Cleaner, lighter feel WITHIN the dark page
  — Use surface cards (#1A1A1A) to create visual "dashboard" zones
Background: Same dark base, but more grid-like section structure
```

**Sub-sections:**
```
6a. Section Header
  - "The Analyst" or "Data Work"
  - Short description of analytical specialty

6b. Project Case Study Cards (3–6 projects)
  Each card:
    ├── Project preview image (chart/dashboard screenshot)
    ├── Project title
    ├── One-sentence problem statement
    ├── Tools used (badge chips: Python | Tableau | SQL | etc.)
    ├── Key result/insight (bold stat)
    └── [View Case Study] → /data/[slug]

6c. Tools & Technologies
  - Visual icons grid: Python, SQL, Tableau, Power BI, Excel, etc.
  - Or animated marquee of tool logos

6d. GitHub Stats (Optional)
  - Embedded contribution graph or custom stat cards
  - Shows activity and volume of work
```

---

### 7. Skills Section
```
Layout: Compact, scannable — NOT a progress bar list
```

```
Two columns:
  LEFT: Music Skills
    Guitar (Classical, Jazz, Fingerstyle, etc.)
    Music Theory
    Composition
    Live Performance
    Recording / Production (if applicable)

  RIGHT: Data Skills
    Data Analysis
    Data Visualization
    Python / SQL
    Tableau / Power BI
    Statistical Analysis
    Machine Learning (if applicable)

CENTER (bridge):
  "Soft Skills" or "The Intersection"
    Pattern Recognition
    Storytelling with Data
    Creative Problem Solving
    Attention to Detail
    Communication
```

---

### 8. Contact Section
```
Layout: Full-width, dark, clear CTA
```

```
Top: Big headline — "Let's Create Something."
Sub: Short line: "Whether it's a melody or a dataset — I'm in."

Two-CTA split:
  [Book me to perform]  ←  For music inquiries
  [Let's work on data]  ←  For analyst inquiries

OR single email link: paul@domain.com

Social links row: GitHub | LinkedIn | Spotify | Instagram | YouTube

Bottom: Copyright + "Designed by" line
```

---

## Mobile Layout Notes

- Hero: Stack vertically; photo above text, or hide photo on very small screens
- Bento grid: Collapse to single column feed
- Music section: Keep audio player sticky at bottom of music section on mobile
- Data cards: Single column, full-width cards
- Navigation: Hamburger → slide-in from right panel

---

## Scroll Flow & Visual Rhythm

```
HERO         →  Dark + dramatic + large typography (establishing shot)
ABOUT        →  Slightly warmer, intimate, text-heavy (character development)
FEATURED     →  Grid, mixed energy (overview)
MUSIC        →  Darkest, moodiest, immersive (the stage)
DATA         →  Structured, lighter cards, analytical (the office)
SKILLS       →  Compact, efficient, scannable (credentials)
CONTACT      →  Simple, open, inviting (the curtain call)
```

This flow tells Paul's story as a narrative arc — not just a resumé dump.

---

## Grid System

```css
/* Base grid for all sections */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
}

/* Standard section spacing */
section {
  padding: clamp(4rem, 10vw, 8rem) 0;
}
```
