# Rab6 Digital Invitations — Master Design System Specifications

## Executive Overview

Rab6 (رابط) is an elite digital invitation studio crafting bespoke, high-luxury web experiences for ultra-premium celebrations across the Middle East. The Rab6 design system enforces a unified design language, motion physics framework, accessibility compliance, and structural component strategy across all current and future invitation collections.

This document serves as the **single source of truth** for designers and frontend engineers building Rab6 templates.

---

## 1. Visual Aesthetics & Collection Archetypes

| Archetype | Theme Inspiration | Dominant Palette | Primary Typography | Signature Visual Cue |
| :--- | :--- | :--- | :--- | :--- |
| **Main Store Showcase** | Luxury Brand Hub | Deep Plum (`#1A1118`), Rose Gold (`#D4B08C`), Warm Ivory (`#F7F3EC`) | Cormorant Garamond, Outfit, Cairo | Zeekraa starry background, interactive device previewer |
| **Glass Pavilion (T0)** | Ethereal Glassmorphism | Obsidian (`#040510`), Pale Gold (`#F3D375`), Violet Glow (`#D4AFFF`) | Playfair Display, Cormorant, Amiri | Interactive canvas stardust, multi-layered glass cards |
| **Velvet Arabic (T1)** | Vintage Calligraphic | Deep Burgundy (`#4A152B`), Cream (`#FAF5EB`), Gold Foil (`#C59B48`) | Aref Ruqaa, Amiri, Pinyon Script | Floral backdrops, velvet drop-shadows, calligraphic monograms |
| **Modern Componentry (T3)**| Sleek Digital Product | Slate Dark (`#0F172A`), Emerald Gold, Pure White | Inter, Playfair Display | Radix primitives, reactive motion cards, interactive RSVP |
| **Romantic Silk (T4)** | Soft Petal Romance | Cream (`oklch(0.975)`), Blush, Rose Deep (`#4A1525`), Soft Gold (`#C59B6C`) | Jost, DM Serif Display | Radial blush glows, organic petal shadows, soft gradients |
| **Noir Soirée (T5)** | Black-Tie Gala | Ink Black (`#0A0B10`), Navy Deep (`#0D1424`), Rose Gold (`#C9956B`) | Serif Display, Outfit, Cairo | Deep obsidian-to-navy abyss gradient, glowing borders |
| **Aurora (New Flagship)** | Northern Lights & Crystal | Dark Emerald Void (`#040D0A`), Moonlight Cyan (`#8EEBE3`), Celestial Gold (`#E2C799`) | Cormorant Garamond, Cairo, Outfit | Volumetric mesh shaders, silk gradients, crystal reflections |

---

## 2. Color Token Architecture & Metallic System

Rab6 uses a strict 4-tier CSS token hierarchy. All templates MUST define variables adhering to these naming patterns.

### 2.1 Surface & Layer Tokens
```css
:root {
  /* Surface Stack (Layer 0 to Layer 3) */
  --color-bg-base: #040D0A;        /* Layer 0: Page background void */
  --color-bg-surface-1: #0A1D1A;  /* Layer 1: Section containers */
  --color-bg-surface-2: #122B27;  /* Layer 2: Card elements */
  --color-bg-surface-3: #1A3833;  /* Layer 3: Popovers & Modals */

  /* Glassmorphism & Translucency Tokens */
  --color-glass-bg-subtle: rgba(255, 255, 255, 0.03);
  --color-glass-bg-medium: rgba(255, 255, 255, 0.06);
  --color-glass-bg-elevated: rgba(255, 255, 255, 0.12);
  
  --color-glass-border-subtle: rgba(255, 255, 255, 0.08);
  --color-glass-border-gold: rgba(226, 199, 153, 0.30);
  --color-glass-border-cyan: rgba(142, 235, 227, 0.25);

  --color-glass-blur-sm: 8px;
  --color-glass-blur-md: 16px;
  --color-glass-blur-lg: 24px;
}
```

### 2.2 Text & Content Tokens
```css
:root {
  --color-text-primary: #F5F9F8;   /* Warm Crystal White — Headlines */
  --color-text-secondary: #C2D6D3; /* Soft Mint Silver — Body & Subtitles */
  --color-text-muted: #7A9994;     /* Muted Teal Gray — Metadata & Labels */
  --color-text-accent: #E2C799;    /* Celestial Gold — Highlights & Links */
  --color-text-inverted: #040D0A;  /* Dark Text for Light Badges */
}
```

### 2.3 Metallic Accents & Gradient Tokens
```css
:root {
  /* Metallic Celestial Gold */
  --color-gold-50: #FAF5EB;
  --color-gold-300: #EAD0A6;
  --color-gold-500: #E2C799;
  --color-gold-700: #B89762;

  /* Atmospheric Aurora Glows */
  --color-glow-cyan: rgba(142, 235, 227, 0.18);
  --color-glow-emerald: rgba(52, 211, 153, 0.15);
  --color-glow-gold: rgba(226, 199, 153, 0.20);

  /* Linear Metallic Gradients */
  --gradient-gold-metallic: linear-gradient(135deg, #FAF5EB 0%, #E2C799 50%, #B89762 100%);
  --gradient-aurora-mesh: radial-gradient(circle at 50% 0%, var(--color-glow-cyan) 0%, var(--color-glow-emerald) 40%, transparent 80%);
}
```

---

## 3. Typography System & Bilingual Rules

### 3.1 Font Pairing Matrix
| Script | Display / Headline | Body / Interface | Calligraphy / Decorative |
| :--- | :--- | :--- | :--- |
| **English (LTR)** | `Cormorant Garamond`, `Playfair Display` | `Outfit`, `Inter` | `Pinyon Script` |
| **Arabic (RTL)** | `Amiri`, `Aref Ruqaa` | `Cairo`, `Tajawal` | `Aref Ruqaa` |

### 3.2 Fluid Typography Scale
Typography sizes MUST use `clamp()` to scale fluidly between mobile viewport (375px) and desktop (1440px):
```css
:root {
  --text-xs: clamp(0.70rem, 0.9vw, 0.78rem);    /* Small labels, tags */
  --text-sm: clamp(0.82rem, 1.1vw, 0.88rem);    /* Secondary metadata */
  --text-base: clamp(0.95rem, 1.3vw, 1.05rem);  /* Paragraph body */
  --text-lg: clamp(1.10rem, 1.5vw, 1.25rem);    /* Subheadings */
  --text-xl: clamp(1.30rem, 2.0vw, 1.60rem);    /* Card titles */
  --text-2xl: clamp(1.60rem, 2.8vw, 2.20rem);    /* Section titles */
  --text-3xl: clamp(2.20rem, 4.0vw, 3.20rem);    /* Section headers */
  --text-4xl: clamp(3.00rem, 6.0vw, 4.80rem);    /* Hero names */
  --text-5xl: clamp(4.00rem, 8.5vw, 7.00rem);    /* Hero Monograms */
}
```

### 3.3 Typographic Rules & Constraints
1. **Arabic Tracking Constraint**: NEVER apply `letter-spacing` (tracking) to Arabic text. Arabic characters are cursive; letter-spacing breaks character ligatures.
2. **English Monogram Tracking**: Use `tracking-[0.2em]` or `tracking-[0.3em]` exclusively on uppercase English display headings.
3. **Line Height Standards**:
   - Headlines: `line-height: 1.1` to `1.25`
   - English Body: `line-height: 1.6`
   - Arabic Body: `line-height: 1.85` (extra vertical space required for Arabic diacritics/tashkeel).

---

## 4. Elevation, Radius & Spatial Scale

### 4.1 Spatial Scale (4px Base Grid)
- `--space-1`: `0.25rem` (4px)
- `--space-2`: `0.50rem` (8px)
- `--space-3`: `0.75rem` (12px)
- `--space-4`: `1.00rem` (16px)
- `--space-6`: `1.50rem` (24px)
- `--space-8`: `2.00rem` (32px)
- `--space-12`: `3.00rem` (48px)
- `--space-16`: `4.00rem` (64px)
- `--space-24`: `6.00rem` (96px)
- `--space-32`: `8.00rem` (128px)

### 4.2 Border Radius System
- `--radius-sm`: `0.375rem` (6px) — Tags, pill badges
- `--radius-md`: `0.75rem` (12px) — Input fields, buttons
- `--radius-lg`: `1.25rem` (20px) — Standard content cards
- `--radius-xl`: `2.00rem` (32px) — Hero containers, modals
- `--radius-full`: `9999px` — Circular avatars, audio controllers

---

## 5. Motion Guidelines & Animation Philosophy

Rab6 motion follows **Apple Keynote Physics**: fluid, organic, mass-driven, and unobtrusive.

### 5.1 Physics Spring Configurations
```typescript
export const MOTION_SPRINGS = {
  soft: { type: "spring", stiffness: 60, damping: 20, mass: 1 },
  gentle: { type: "spring", stiffness: 90, damping: 22, mass: 1 },
  snappy: { type: "spring", stiffness: 180, damping: 25, mass: 0.8 },
  bounce: { type: "spring", stiffness: 300, damping: 15, mass: 0.5 },
};
```

### 5.2 Duration & Easing Standards
- **Micro-interactions (Buttons, Toggles)**: `200ms - 300ms` (`cubic-bezier(0.16, 1, 0.3, 1)`)
- **Card Reveal / Scroll Stagger**: `600ms - 900ms` (`cubic-bezier(0.22, 1, 0.36, 1)`)
- **Atmospheric Loops (Canvas, Aurora Sweeps)**: `8000ms - 15000ms` linear continuous loops.

### 5.3 Core Animation Primitives (Framer Motion)
```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: MOTION_SPRINGS.gentle,
};

export const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: MOTION_SPRINGS.soft,
};
```

---

## 6. Reusable Component Specifications

Every Rab6 template MUST utilize or extend these standard components:

### 6.1 `GlassCard`
- **Purpose**: Primary container for content sections.
- **Props**: `blurAmount`, `glowColor`, `interactiveTilt` (boolean), `children`.
- **Behavior**: On hover, tilts up to 3 degrees relative to cursor offset and casts a soft gold/cyan ambient halo.

### 6.2 `CountdownTicker`
- **Purpose**: Real-time counter for wedding day.
- **Props**: `targetDate` (ISO String), `labels` (bilingual object).
- **Behavior**: Smooth numeric digit flip animation when seconds update.

### 6.3 `AudioPlayer`
- **Purpose**: Background ambient wedding score control.
- **Props**: `src` (audio file URL), `autoPlay` (boolean), `title` (track title).
- **Behavior**: Displays floating glass bar with dynamic equalizer spectrum bars. Handles browser autoplay restrictions gracefully via explicit user gesture prompt.

### 6.4 `RsvpForm`
- **Purpose**: Guest confirmation interface.
- **Props**: `onSubmitSuccess` callback, `maxGuests` limit.
- **Behavior**: Multi-step interactive flow (Attendance -> Guest Count -> Dietary Preferences -> Blessing Note) with confetti particle blast on submission.

### 6.5 `InteractiveMapCard`
- **Purpose**: Venue location & navigation.
- **Props**: `venueName`, `coordinates`, `googleMapsUrl`, `appleMapsUrl`.
- **Behavior**: Displays styled dark-mode map canvas preview with single-click navigation launch.

---

## 7. Accessibility Specifications (WCAG 2.1 AA Compliance)

1. **Color Contrast Ratios**:
   - Normal Body Text: Minimum `4.5:1` against glass background.
   - Large Display Headlines: Minimum `3.0:1`.
   - UI Borders & Icons: Minimum `3.0:1`.
2. **Keyboard Focus States**: All interactive elements (`<button>`, `<a href>`, `<input>`) MUST feature a high-contrast focus ring (`outline: 2px solid var(--color-gold-500); outline-offset: 4px`).
3. **Screen Readers**:
   - All decorative canvas particles (`AuroraBackground`, `FloatingParticles`) MUST have `aria-hidden="true"`.
   - Language toggles MUST dynamically update the `<html lang="...">` and `<html dir="...">` attributes.
4. **Reduced Motion Support**:
   - Respect user preference: `@media (prefers-reduced-motion: reduce)`.
   - In reduced motion mode, disable canvas particle physics and replace spring animations with instant opacity fades.

---

## 8. Naming Conventions & Standard Practices

1. **CSS Variables**: `--[category]-[name]-[variant]` (e.g. `--color-bg-surface-1`, `--font-arabic-serif`).
2. **Tailwind Classes**: Grouped logically: `Layout -> Flex/Grid -> Dimensions -> Spacing -> Colors -> Typography -> Interactivity -> Transitions`.
3. **Component Files**: PascalCase (e.g., `HeroSection.tsx`, `GlassCard.tsx`).
4. **Utility Functions**: camelCase (e.g., `formatCountdown.ts`, `copyToClipboard.ts`).
