# Inspiration & Design System — Paul Ojoko Portfolio

**Project**: paulstryngz  
**Subject**: Paul Ojoko — Guitarist & Data Analyst  
**Stack**: Next.js 16 + React 19 + Tailwind CSS 4  
**Research Date**: June 2026

---

## What's in This Folder

| File | Contents |
|------|----------|
| [design-direction.md](./design-direction.md) | Color palette, typography, visual mood, atmosphere |
| [portfolio-references.md](./portfolio-references.md) | Curated portfolios to study (music + data + creative) |
| [layout-architecture.md](./layout-architecture.md) | Page structure, section-by-section blueprint, scroll flow |
| [animations-interactions.md](./animations-interactions.md) | Motion library choices, per-section animation specs, cursor effects |
| [tech-stack.md](./tech-stack.md) | Packages to install, folder structure, CSS variables, deployment |

---

## TL;DR — The Vision in 3 Sentences

Paul Ojoko is a guitarist AND a data analyst, and this portfolio doesn't split those identities — it fuses them. The design is dark, cinematic, editorial — like a concert hall and a data lab existed in the same space. Visitors scroll through Paul's story: dramatic hero → intimate about → moody music section → crisp data section → clean contact.

---

## The Core Design Decisions

### 1. Dark Cinematic Palette
```
Background:  #0D0D0D  (warm near-black)
Accent 1:    #D4A843  (amber — stage light, guitar warmth)
Accent 2:    #4AADA0  (teal — data, analytical cool)
Text:        #F5F0EB  (warm white)
```
Dark makes both the musician side (stage lighting, moody) and analyst side (dashboard, contrast) look premium.

### 2. Dual Identity, One Narrative
Not "here's my music, here's my data." Instead: "Here's Paul — he sees patterns in both."
The site reads as a story. The About section explicitly bridges both worlds.

### 3. Typography with Personality
```
Display:  Playfair Display  (album liner notes energy)
Heading:  Plus Jakarta Sans  (modern, slight quirk)
Body:     Inter             (clean, trustworthy)
```

### 4. Animations Tell the Story
- Hero name: letter-by-letter stagger (like a marquee sign lighting up)
- Sections: scroll-reveal with natural easing (not robotic)
- Music player: animated waveform while playing
- Data stats: number counters animate from 0 when visible
- Custom cursor: magnetic dot + ring (optional but distinctive)

---

## Key Libraries to Add

```bash
pnpm add motion          # Animations (UI, hover, reveals)
pnpm add gsap            # Scroll-driven sequences, counters
pnpm add howler          # Audio player control
pnpm add recharts        # Data visualization
pnpm add lucide-react    # Icons
pnpm add clsx tailwind-merge  # Utility helpers
```

---

## Section Order (Scroll Flow)

```
1. Nav          — Transparent → dark on scroll
2. Hero         — Full viewport, name + tagline + photo
3. About        — Who Paul is, the intersection of his two worlds
4. Featured     — Bento grid: 2 music + 2 data projects
5. Music        — Dark, atmospheric; player, releases, gallery
6. Data         — Structured; case study cards, tools
7. Skills       — Two-column: music skills | data skills
8. Contact      — Simple CTA split: music inquiries | data inquiries
```

---

## Top 5 Reference Sites to Study First

1. **Visual Cinnamon** (`visualcinnamon.com`) — data viz as art, project presentation
2. **Justin Kleiner** musician portfolio — streaming platform integration
3. **Eduard Bodak portfolio** (codrops) — scroll animation approach
4. **Naledi** data analyst portfolio — storytelling-first structure
5. **Karim Saab** creative-technical portfolio — dual identity framing

---

## Unique Differentiators for Paul's Site

These are things no generic portfolio template gives you:

1. **Ambient guitar loop** — toggle-able faint guitar music as you browse the site
2. **Waveform data bridge** — animation showing notes → data points in About section
3. **Dual CTA at contact** — "Book me to perform" vs "Let's work on data"
4. **Music player with waveform seek bar** — not just an embed, but a designed player
5. **Bento grid mixing both worlds** — showcases range at a glance

---

## Next Steps (After Inspiration Phase)

- [ ] Confirm color palette with Paul (show light vs dark options)
- [ ] Collect Paul's photos (performance + casual/professional)
- [ ] Collect music assets (album covers, streaming URLs, audio files)
- [ ] Collect data project materials (screenshots, GitHub links, descriptions)
- [ ] Install required packages (see tech-stack.md)
- [ ] Build component-by-component starting with Hero + Navigation
- [ ] Deploy to Vercel for preview feedback
