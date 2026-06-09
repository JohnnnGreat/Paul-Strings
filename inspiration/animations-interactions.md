# Animations & Interactions — Paul Ojoko Portfolio

## Philosophy

Animations should feel like music: **rhythm, timing, and dynamics matter**.
- Every animation has a purpose (reveals content, guides attention, adds personality)
- Nothing loops mindlessly without reason
- Performance is non-negotiable — 60fps on mid-range devices
- On reduced-motion preference: all animations fall back to simple fade

```css
@media (prefers-reduced-motion: reduce) {
  /* All motion disabled — use opacity transitions only */
}
```

---

## Animation Library Stack

### Primary: Motion (formerly Framer Motion)
```
Package:  motion  (import from "motion/react")
Use for:  Page enter/exit, element reveals, hover states, layout animations
Version:  Latest 2025+ (hardware-accelerated scroll, oklch color support)
React 19: Fully compatible
```

### Secondary: GSAP + ScrollTrigger
```
Package:  gsap
Use for:  Complex scroll sequences, text reveals, SVG animation, parallax
Plugin:   ScrollTrigger (scroll-driven animation)
Free tier is sufficient — no Club GreenSock needed for this project
```

### Rule of Thumb
```
Motion  →  UI transitions, hover, layout, entrance/exit
GSAP    →  Scroll-driven storytelling, text animation, complex sequencing
```

---

## Section-by-Section Animations

### Navigation
```javascript
// Transparent → solid background on scroll
// Use: Motion's useScroll + useTransform
const { scrollY } = useScroll()
const navBg = useTransform(scrollY, [0, 80], ["rgba(13,13,13,0)", "rgba(13,13,13,0.95)"])

// Nav links: stagger fade-in on page load
variants: {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } })
}
```

### Hero Section
```javascript
// Name — character stagger reveal
// Split name into individual characters, stagger animate in
const heroName = "Paul Ojoko"
// chars animate: { opacity: 0 → 1, y: 30 → 0 } with 0.04s stagger

// Tagline — slide up after name (delay: 0.6s)
{ opacity: 0, y: 20 } → { opacity: 1, y: 0 }

// CTA buttons — fade in (delay: 1.0s)
{ opacity: 0 } → { opacity: 1 }

// Background waveform — continuous subtle pulse animation
// CSS keyframe: scale 1 → 1.02 → 1, 4s ease-in-out infinite

// Photo — parallax on scroll (moves slower than content)
// GSAP: y from 0 to -40 as scroll goes from 0 to viewport height
```

### Scroll Reveal (Applied to All Sections)
```javascript
// Standard entrance for most elements
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // custom ease
  }
}

// Use Motion's whileInView prop with once: true
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
/>
```

### Bento Grid Cards
```javascript
// Stagger children as grid enters view
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// Each card
const card = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
}

// Hover state
whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
```

### Music Section
```javascript
// Audio waveform animation (when track is playing)
// Animate bar heights: CSS keyframe on each bar with different delays
// Creates the "equalizer" bouncing bars effect

// Album cover hover
whileHover={{
  scale: 1.05,
  rotateY: 5,    // subtle 3D tilt
  transition: { duration: 0.3 }
}}

// Discography grid entrance: stagger from left
// Cards slide in from left with 0.08s stagger
```

### Data Section
```javascript
// Number counters (stats/metrics)
// GSAP: animate from 0 to final value when element enters viewport
gsap.to(counterEl, {
  innerText: targetValue,
  duration: 1.5,
  ease: "power2.out",
  snap: { innerText: 1 },
  scrollTrigger: { trigger: counterEl, start: "top 85%" }
})

// Project card: hover reveals more info
// Bottom info bar slides up on hover
whileHover="hover"
variants={{
  rest: { y: "100%" },
  hover: { y: 0, transition: { duration: 0.3, ease: "easeOut" } }
}}

// Chart/visualization entrance
// Draw-in effect for line charts, scale-up for bar charts
```

### Skills Section
```javascript
// Skill items: horizontal slide-in from alternating sides
// Left column: x: -30 → 0
// Right column: x: 30 → 0
// Center: scale: 0.9 → 1
// All with stagger: 0.08s
```

### Page Transitions (Between / and /music/[slug], /data/[slug])
```javascript
// Use Next.js App Router + Motion's AnimatePresence
// Exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
// Enter: { opacity: 0, y: 20 } → { opacity: 1, y: 0, transition: { duration: 0.4 } }
```

---

## Cursor Effects

### Recommended: Custom Magnetic Cursor
```
Behavior:
  - Default: Small dot (8px) + larger ring (30px) that follows with slight lag
  - On hover over links/buttons: ring expands to 50px, changes color to accent
  - On hover over project cards: ring shows "View" text inside
  - On hover over audio player: ring shows "Play" text

Implementation: Motion useMotionValue + useSpring for smooth lag
```

```javascript
const cursorX = useMotionValue(-100)
const cursorY = useMotionValue(-100)
const springConfig = { damping: 25, stiffness: 700 }
const cursorXSpring = useSpring(cursorX, springConfig)
const cursorYSpring = useSpring(cursorY, springConfig)
```

### Simpler Alternative: CSS-Only
```css
/* If cursor effect feels too heavy, just use custom cursor image */
body { cursor: none; }
/* Draw a small amber dot as cursor via pseudo-element overlay */
```

---

## Specific Musical Interaction Ideas

### Ambient Audio Toggle
```
- Subtle guitar loop plays as ambient background (very low volume)
- Toggle button in corner: 🎸 icon → muted/unmuted
- Audio: 10-15 second loop of Paul's own playing (custom)
- Implementation: Howler.js for volume fade in/out
- This is a UNIQUE differentiator — no other data analyst portfolio does this
```

### Waveform Scrubber (Music Player)
```
- Custom waveform visualization (SVG bars) that acts as seek bar
- Bars animate height based on frequency data (Web Audio API)
- Click anywhere on waveform to seek
- Playing bars: amber color; unplayed: muted gray
```

### Data-Music Bridge Animation
```
- In the About section, an animation showing musical notes
  transforming into data points on a chart
- Concept: guitar string vibration → sine wave → data visualization
- Implementation: GSAP morphSVG (Club) OR custom canvas animation
- This one visual tells the whole story of Paul's dual identity
```

---

## Performance Guidelines

```
Target:
  - LCP (Largest Contentful Paint): < 2.5s
  - CLS (Cumulative Layout Shift): < 0.1
  - FID / INP: < 100ms

Practices:
  - Lazy-load all images below the fold (Next.js Image handles this)
  - Only animate transform and opacity (GPU-composited, no layout thrash)
  - Use will-change: transform sparingly (only on actively animating elements)
  - Debounce scroll listeners; prefer Intersection Observer
  - Audio: lazy-load, don't autoplay without user gesture
  - 3D effects (if any): use CSS transforms, not WebGL, unless committed to Three.js
  - Test on mobile — animations that look great on desktop can lag on phones
```

---

## Animation Timing Reference

```
Duration reference:
  Micro (hover, toggle):    150–200ms
  Standard (card entrance): 400–600ms  
  Hero elements:            600–900ms
  Page transitions:         300–400ms
  Number counters:          1200–1800ms
  Ambient loops:            3000–8000ms (ease-in-out infinite)

Easing reference:
  Natural ease:   [0.22, 1, 0.36, 1]   (fast out, slow settle)
  Snappy:         [0.34, 1.56, 0.64, 1] (slight overshoot — spring feel)
  Smooth:         ease-in-out
  Data/precise:   linear
```
