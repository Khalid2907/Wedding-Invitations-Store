# Rab6 Digital Web Invitations — Repository Structure & File Path Directory

This document provides a comprehensive blueprint of all folders, files, and modules across the **Rab6 Digital Web Invitations Ecosystem**. It details the directory tree, individual file roles, framework choices, and structural conventions used throughout the repository.

---

## 1. Global Repository Map

```
Digital Web Invitations/
├── ARCHITECTURE.md                               # Technical architecture & engineering standards
├── DESIGN_SYSTEM.md                              # Core design tokens, typography & animation system
├── PROJECT_STRUCTURE.md                          # Comprehensive path map & file structure directory (this file)
├── Main Page.zip                                 # Distribution package for Showcase Portal
├── Template 0.zip                                # Distribution package for Template 0
├── Template 1.zip                                # Distribution package for Template 1
├── Template 2.zip                                # Distribution package for Template 2
├── Template 3.zip                                # Distribution package for Template 3
├── Template 4.zip                                # Distribution package for Template 4
├── Template 5.zip                                # Distribution package for Template 5
│
├── Main Page/                                    # Template Showcase & Catalog Portal
│   ├── index.html                                # Storefront landing page & template browser
│   ├── style.css                                 # Modern dark-mode catalog styling
│   ├── script.js                                 # Interactive filtering & preview dynamic logic
│   └── assets/                                   # Portal visual branding & template thumbnails
│
├── Clients Area/                                 # Personalized client invitation deployments
│   └── Mohammad & Rahma/                         # Client instance: Mohammad & Rahma wedding
│       ├── index.html                            # Invitation HTML shell
│       ├── css/                                  # Modular styles (style, variables, animations, responsive)
│       ├── js/                                   # Functional scripts (app, rsvp, audio, countdown, etc.)
│       └── assets/                               # Client photos, sound track, and icons
│
├── Template 0/                                   # Template 0: Glass Pavilion
│   └── glass-pavilion/                           # Standalone Vanilla HTML/CSS/JS implementation
│
├── Template 1/                                   # Template 1: Velvet Wedding
│   └── velvet-wedding-invitation/                # Standalone Vanilla HTML/CSS/JS implementation
│
├── Template 2/                                   # Template 2: Next.js + Vanilla Export
│   └── wedding-invitation/                       # Next.js App Router codebase + export folder
│
├── Template 3/                                   # Template 3: React + Vite + Shadcn
│   └── Digital Wedding Invitation/               # Vite-powered React SPA with Tailwind CSS
│
├── Template 4/                                   # Template 4: Vanilla Rebuild
│   └── vanilla-rebuild/                          # Lightweight pure HTML/CSS/JS rebuild
│
├── Template 5/                                   # Template 5: Mohammed & Yara Custom
│   └── Rab6-template-5-Mohammed and Yara/        # Customized zero-dependency vanilla template
│
├── Template 6/ - Template 9/                     # Reserved extension slots for future templates
│
├── Template 10 - Aurora/                         # Next.js 14 luxury template with GPU Canvas shaders
│   ├── app/                                      # Next.js App Router layout, pages & global CSS
│   ├── components/                               # Modular template sections & cinematic effects
│   ├── hooks/                                    # Audio, Countdown & Scroll custom hooks
│   ├── lib/                                      # Data, Motion variants & i18n loaders
│   └── types/                                    # TypeScript schemas & contracts
│
├── Template 10 - Aurora - Vanilla/               # Pure zero-dependency HTML/CSS/JS rebuild of Template 10
│   ├── index.html                                # Standalone single-page invitation
│   ├── css/                                      # Custom CSS design system & animations
│   └── js/                                       # Pure ES6 JavaScript controllers
│
└── Template 11 - Elysium/                        # Premium zero-dependency Vanilla luxury template
    ├── index.html                                # High-end interactive layout with RTL/LTR support
    ├── css/                                      # Custom dark/gold luxury theme & keyframes
    ├── js/                                       # Lighting, scene transitions, audio & countdown modules
    └── assets/                                   # Textures, high-res photography & noise overlays
```

---

## 2. Core Documentation Files

- **`ARCHITECTURE.md`**  
  Defines standard tech stacks (Next.js, TypeScript, Tailwind, Framer Motion, Vanilla JS), module boundaries, state management models (I18n Context, Audio Player State, RSVP validation), SEO standards, and performance targets.

- **`DESIGN_SYSTEM.md`**  
  Defines shared color palettes (Emerald Silk, Golden Aureate, Obsidian Velvet, Aurora Opal), OKLCH gradient formulas, Google Fonts orchestration, motion spring constants, and responsive layout rules.

- **`PROJECT_STRUCTURE.md`** *(This File)*  
  Contains the precise path index and functional breakdown of all files and folders in the workspace.

---

## 3. Detailed Component & Module Directory

### 3.1 Template Showcase Portal (`Main Page/`)
The storefront portal where prospective clients browse live interactive previews of available invitation templates.

| Path | Type | Description |
| :--- | :--- | :--- |
| `Main Page/index.html` | HTML | Portal main page featuring template cards, preview modal, and category filters. |
| `Main Page/style.css` | CSS | Showcase design with glassmorphism cards and smooth transitions. |
| `Main Page/script.js` | JS | Handles template filtering, preview switches, and mobile navigation. |
| `Main Page/assets/` | Directory | Thumbnail images (`aurora-thumb.png`, `elysium-thumb.png`, `pavilion-thumb.png`, `silk-thumb.png`) and logo vector graphics. |

---

### 3.2 Client Invitation Deployments (`Clients Area/`)
Contains production-ready invitation sites built for specific clients.

#### `Clients Area/Mohammad & Rahma/`
- **`index.html`**: Complete wedding invitation page with hero, couple story, venue location, audio player, gallery, and RSVP modal.
- **`css/`**:
  - `variables.css`: Design tokens, color palette, custom CSS variables.
  - `animations.css`: Keyframe animations for floating elements, scroll reveals, and glow effects.
  - `responsive.css`: Media queries for mobile, tablet, and desktop viewports.
  - `style.css`: Section layouts and element styles.
- **`js/`**:
  - `app.js`: Main initialization script.
  - `audio.js`: Background music management and interactive audio prompt.
  - `countdown.js`: Real-time countdown timer to the wedding event.
  - `envelope.js`: Interactive opening animation for the invitation envelope.
  - `gallery.js`: Image lightbox modal and gallery scroll handling.
  - `language.js`: Dynamic switching between Arabic (RTL) and English (LTR).
  - `particles.js`: Ambient floating background particle shader canvas.
  - `rsvp.js`: Form submission handling and guest confirmation.
- **`assets/`**: Photography (`mohammad.jpg`, `rahma.jpg`, `cover.png`, etc.) and background audio (`soundtrack.mp3`).

---

### 3.3 Modern Framework Templates

#### Template 10 - Aurora (`Template 10 - Aurora/`)
*Next.js 14 App Router template using TypeScript, Tailwind CSS, and Framer Motion.*

```
Template 10 - Aurora/
├── package.json                                  # NPM dependencies & build scripts
├── next.config.js                                # Next.js configuration (images, redirects)
├── tsconfig.json                                 # Strict TypeScript configuration
├── tailwind.config.js                            # Extended Tailwind color tokens & keyframes
├── postcss.config.js                             # PostCSS plugins configuration
├── app/
│   ├── layout.tsx                                # Root layout with fonts, metadata, dir attribute
│   ├── page.tsx                                  # Primary scroll journey page
│   └── globals.css                               # CSS custom properties & base styles
├── components/
│   ├── aurora/                                   # Section components
│   │   ├── HeroSection.tsx                       # Animated title, date, and CTA
│   │   ├── CoupleSection.tsx                     # Bride & Groom profiles
│   │   ├── StorySection.tsx                      # Love story timeline cards
│   │   ├── CountdownSection.tsx                  # Live event countdown
│   │   ├── TimelineSection.tsx                   # Schedule of event day
│   │   ├── VenueSection.tsx                      # Location details & map directions
│   │   ├── GallerySection.tsx                    # Photo gallery grid
│   │   ├── RsvpSection.tsx                       # RSVP form component
│   │   ├── GiftRegistrySection.tsx               # Gift details / bank info
│   │   └── FooterSection.tsx                     # Closing notes & monograms
│   └── cinematic/                                # Background & interactive visual effects
│       ├── AuroraBackground.tsx                  # Canvas shader ribbon effect
│       ├── GlassCard.tsx                         # Interactive 3D glass reflection card
│       ├── FloatingParticles.tsx                 # Canvas particle background
│       ├── AudioPlayer.tsx                       # Floating audio widget
│       ├── LanguageToggle.tsx                    # RTL/LTR language switcher
│       └── LightboxModal.tsx                     # Photo viewer modal
├── hooks/
│   ├── useAudio.ts                               # Web Audio API lifecycle manager
│   ├── useCountdown.ts                           # Precise timer calculator hook
│   └── useScrollProgress.ts                      # Scroll position observer hook
├── lib/
│   ├── dictionary.ts                             # Translation loader utility
│   ├── data.ts                                   # Invitation default content data
│   ├── motion.ts                                 # Centralized Framer Motion spring presets
│   ├── calendar.ts                               # Google Calendar & .ics file helpers
│   └── utils.ts                                  # Class merge helper (`cn()`)
├── public/
│   └── favicon.svg                               # Favicon vector icon
└── types/
    └── invitation.ts                             # TypeScript type definitions
```

#### Template 3 - Digital Wedding Invitation (`Template 3/Digital Wedding Invitation/`)
*Vite + React + Tailwind CSS + Shadcn UI template.*

- **`package.json`**: Dependencies and build scripts (`vite build`).
- **`vite.config.ts`**: Vite configuration with path aliases.
- **`src/app/components/ui/`**: 40+ Shadcn UI primitives (Button, Dialog, Accordion, Avatar, Card, Input, Slider, Switch, Toast, etc.).
- **`src/styles/`**: `globals.css`, `theme.css`, `tailwind.css`, `fonts.css`.
- **`guidelines/Guidelines.md`**: Template specific setup guidelines.

---

### 3.4 Standalone Vanilla Templates (Zero-Dependency)

The repository emphasizes pure zero-dependency Vanilla HTML/CSS/JS implementations for instant loading and hosting anywhere without Node.js runtime requirements.

#### Template 11 - Elysium (`Template 11 - Elysium/`)
- **`index.html`**: Luxury invitation with dynamic RTL/LTR support.
- **`css/`**:
  - `style.css`: Primary layout, typography, and section styling.
  - `variables.css`: Color tokens, HSL shades, OKLCH gradients.
  - `animations.css`: Keyframes for smooth entrance & ambient effects.
  - `responsive.css`: Comprehensive mobile-first breakpoint rules.
- **`js/`**:
  - `app.js`: Main application boot script.
  - `audio.js`: Web Audio background music controller.
  - `calendar.js`: Add-to-calendar helper (.ics download & Google Calendar link generation).
  - `countdown.js`: Precision event countdown.
  - `gallery.js`: Interactive lightbox image previewer.
  - `language.js`: Dual language (Arabic/English) dictionary translation engine.
  - `lighting-particles.js`: Ambient canvas particle background.
  - `rsvp.js`: Client-side RSVP validation & interaction.
  - `scenes.js`: Dynamic scroll-triggered scene manager.
- **`assets/`**: High resolution portraits (`couple-portrait.png`, `hero-arch.png`, `venue-sanctuary.png`) and texture maps (`noise.svg`).

#### Template 10 - Aurora Vanilla (`Template 10 - Aurora - Vanilla/`)
- **`index.html`**: Pure HTML5 representation of Template 10.
- **`css/`**: Standardized stylesheet split (`style.css`, `variables.css`, `animations.css`, `responsive.css`).
- **`js/`**: Modular ES6 JavaScript engine (`app.js`, `animations.js`, `countdown.js`, `gallery.js`, `language.js`, `scroll.js`, `utils.js`).
- **`README.md`**: Setup and customization guide for the vanilla version.

#### Template 0 - Glass Pavilion (`Template 0/glass-pavilion/`)
- **`index.html`**, **`style.css`**, **`script.js`**, **`app.js`**.
- Visual assets under **`assets/`** (`hero_venue.png`, `favicon.svg`).

#### Template 1 - Velvet Wedding (`Template 1/velvet-wedding-invitation/`)
- **`index.html`**, **`styles.css`**, **`script.js`**.
- Graphics under **`assets/`** (`couple_portrait.png`, `floral_perfume_bg.png`, `vinyl_record.png`).

#### Template 4 - Vanilla Rebuild (`Template 4/vanilla-rebuild/`)
- **`index.html`**, **`styles.css`**, **`app.js`**.
- Assets under **`assets/`** (`hero-flacon.jpg`, `story-cafe.jpg`, `story-proposal.jpg`, `venue.jpg`).

#### Template 5 - Mohammed and Yara (`Template 5/Rab6-template-5-Mohammed and Yara/`)
- **`index.html`**, **`styles.css`**, **`app.js`**.
- Assets under **`assets/`**.

---

## 4. Distribution Zip Archives

For convenience in client delivery and quick deployment, pre-packaged ZIP archives are maintained at the repository root:

- `Main Page.zip` — Compressed bundle of the showcase portal.
- `Template 0.zip` — Compressed bundle of Glass Pavilion template.
- `Template 1.zip` — Compressed bundle of Velvet Wedding template.
- `Template 2.zip` — Compressed bundle of Template 2.
- `Template 3.zip` — Compressed bundle of Template 3.
- `Template 4.zip` — Compressed bundle of Template 4.
- `Template 5.zip` — Compressed bundle of Template 5.

---

## 5. Architectural Conventions Summary

1. **Framework vs. Vanilla Dual Strategy**:
   - Modern framework projects (Next.js in Template 10/2, Vite in Template 3) provide rich DX, TypeScript safety, and server-side features.
   - Corresponding pure Vanilla HTML/CSS/JS exports/rebuilds allow lightweight hosting without node environments.

2. **Localization Standard (RTL / LTR)**:
   - All templates implement dual Arabic (RTL) and English (LTR) modes.
   - HTML elements use dynamic `dir="rtl"` / `dir="ltr"` attributes and CSS logical properties for smooth directional layout switching.

3. **Asset Organization**:
   - WebP / AVIF formats used for photos to optimize load speed.
   - Vectors (SVG) used for monograms, icons, and background noise textures.
