# RAB6 DESIGN SYSTEM
## Official Design & Development Guidelines
Version: 1.0
Status: Production
Owner: Rab6

---

# Philosophy

Rab6 is not a collection of wedding invitation templates.

Rab6 is a premium digital invitation platform.

Every invitation should feel:

- Personal
- Luxurious
- Emotional
- Cinematic
- Interactive
- Modern
- Timeless

The goal is to make every guest feel they are opening a handcrafted luxury experience rather than visiting a website.

---

# Core Design Principles

## 1. Emotion First

Every interaction should communicate emotion.

Users should feel:

Curiosity

↓

Wonder

↓

Connection

↓

Celebration

↓

Anticipation

↓

Joy

Never build UI for the sake of decoration.

Everything must support storytelling.

---

## 2. Luxury Through Simplicity

Luxury is achieved through restraint.

Avoid:

Heavy shadows

Bright colors

Over-animation

Crowded layouts

Huge typography

Flashy effects

Instead prioritize:

White space

Subtle motion

Elegant typography

Balanced spacing

Depth

Texture

Soft lighting

---

## 3. Every Template Has A Personality

Templates should never look identical.

Each template must have its own:

Mood

Color system

Motion language

Typography

Storytelling

Composition

However,

every template must still be immediately recognizable as Rab6.

---

# Project Structure

Every project follows:

```
Project/

index.html

css/
    variables.css
    animations.css
    style.css
    responsive.css

js/
    app.js
    language.js
    particles.js
    countdown.js
    gallery.js
    audio.js
    envelope.js
    rsvp.js

assets/

fonts/

README.md
```

Never break this structure.

---

# HTML Guidelines

Use semantic HTML only.

Required:

<header>

<nav>

<main>

<section>

<article>

<footer>

Use ARIA labels.

Every image needs alt text.

Every button needs accessible labels.

No div soup.

---

# CSS Architecture

Split CSS into:

variables.css

animations.css

components.css

layout.css

responsive.css

Never place everything inside one stylesheet.

---

# Color System

Use design tokens.

Never hardcode colors.

Example:

```css
--color-bg

--color-surface

--color-primary

--color-secondary

--color-accent

--color-glass

--color-shadow

--color-text

--color-border
```

Every template may redefine tokens.

Never redefine components.

---

# Typography

Arabic

Primary

Cairo

Tajawal

Amiri

Aref Ruqaa

English

Cormorant Garamond

Playfair Display

Inter

Hierarchy

Hero Title

Section Title

Subtitle

Body

Caption

Never skip hierarchy.

---

# Spacing System

Use an 8px grid.

Spacing scale:

4

8

12

16

24

32

40

48

64

80

96

128

Never use random spacing.

---

# Border Radius

Tokens only.

```css
--radius-sm

--radius-md

--radius-lg

--radius-xl

--radius-pill
```

---

# Shadow System

Use elevation levels.

Level 1

Cards

Level 2

Dialogs

Level 3

Hero

Level 4

Floating Elements

Avoid black shadows.

Use tinted shadows.

---

# Glass System

Glass cards should use:

Backdrop blur

Low opacity

Inner border

Soft shadow

Never exceed blur that hurts readability.

---

# Motion Principles

Animation must always have purpose.

Never animate because you can.

Motion categories:

Loading

Transition

Feedback

Storytelling

Celebration

Each has different timing.

---

# Animation Timing

Fast

120ms

Normal

250ms

Elegant

500ms

Hero

900ms

Scene transitions

1000–1400ms

Never use arbitrary durations.

---

# Animation Curves

Default

ease

Luxury

cubic-bezier(.22,.61,.36,1)

Avoid linear.

---

# Scroll Animations

Every section should reveal once.

Avoid repeated animation.

Use:

IntersectionObserver

Never scroll listeners.

---

# Envelope

The envelope is a flagship Rab6 component.

Requirements:

Perfect center alignment

Responsive

No clipping

Realistic physics

Wax seal interaction

Letter extraction

Smooth transition

60 FPS

Works on all devices.

---

# Hero

Every Hero must include:

Strong visual focus

Luxury typography

Depth

Particles

Motion

Portrait composition

Emotional introduction

No static layouts.

---

# Gallery

Must support:

Masonry

Lightbox

Keyboard navigation

Swipe

Lazy loading

High-resolution viewing

No duplicated photos.

---

# Countdown

Requirements:

Smooth updates

Calendar export

Timezone support

Elegant transitions

Accessible numbers

---

# Audio

Must never use default browser controls.

Build a custom player.

Features:

Glass capsule

Waveform

Visualizer

Progress

Play/Pause

Mute

Volume

Persistent state

---

# RSVP

Multi-step

Validation

Accessible

Success animation

Responsive

---

# Language

Every template must support:

Arabic

English

RTL

LTR

Instant switching

No refresh.

---

# Responsive Breakpoints

320

360

375

390

414

430

480

768

820

1024

1280

1440

1920

Every layout should be tested.

Never scale desktop.

Design specifically.

---

# Performance

Target:

Lighthouse 95+

CLS < 0.05

60 FPS

Images:

WebP

Lazy loading

Responsive srcset

JavaScript:

Tree shaking

Modules

Passive listeners

IntersectionObserver

GPU acceleration

---

# Accessibility

WCAG AA minimum.

Keyboard support.

Screen readers.

Focus states.

Reduced motion support.

Proper semantics.

---

# SEO

Every project requires:

Meta description

OpenGraph

Twitter Card

Structured Data

Canonical URL

Favicon

Manifest

---

# Images

Rules:

WebP preferred

Lazy load below fold

Aspect ratios

Responsive

No layout shifts

No duplicated gallery images

---

# Components

Reusable components:

Button

Card

Glass Panel

Timeline

Countdown

Gallery

Lightbox

Audio Player

Language Switch

Envelope

RSVP

Footer

Never duplicate code.

---

# JavaScript

ES Modules only.

Never use globals.

Separate logic by feature.

Comment complex algorithms.

Avoid duplicated utilities.

---

# Naming

CSS

BEM or Component Based.

JS

camelCase

Files

kebab-case

Images

lowercase-hyphen

Never use spaces.

---

# Quality Checklist

Every project must pass:

No overflow

No clipping

No console errors

No missing assets

No broken links

No duplicate IDs

No accessibility issues

No layout shift

No mobile bugs

No animation glitches

No dead code

No unused CSS

No duplicate JS

60 FPS

Responsive

Accessible

SEO complete

---

# Visual Quality Checklist

Every screen should answer:

Is hierarchy clear?

Is spacing balanced?

Does motion feel intentional?

Does lighting feel premium?

Does typography feel elegant?

Are interactions delightful?

Is the page memorable?

Would this feel worthy of a luxury invitation?

---

# Rab6 Standards

Every future template must:

Follow these guidelines.

Reuse existing systems.

Extend the design system.

Never reduce quality.

Never duplicate functionality.

Never compromise responsiveness.

Never ship unfinished polish.

---

# Final Principle

Rab6 is not selling websites.

Rab6 is selling unforgettable first impressions.

Every invitation should feel like opening a beautifully crafted keepsake brought to life through modern web design.

Every pixel should deserve its place.

Every animation should have meaning.

Every interaction should create emotion.