# Rab6 Ecosystem — Technical Architecture & Engineering Standards

## Executive Overview

This document specifies the technical architecture, state management patterns, asset optimization guidelines, SEO rules, performance targets, and folder organization for all Rab6 digital invitation templates.

It provides senior frontend engineers with an unambiguous blueprint for building performant, accessible, and scalable digital invitations integrated seamlessly into the Rab6 ecosystem.

---

## 1. Core Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS + Custom CSS Design Tokens & OKLCH Gradients
- **Motion & Physics**: Framer Motion (GPU-accelerated transforms & spring physics)
- **Headless UI Primitives**: Radix UI (Dialog, Accordion, Dropdown Menu, Tooltip)
- **Icons**: Lucide React + Custom Rab6 Vector Monograms
- **Font Orchestration**: `next/font/google` with zero layout shift (`display: swap`)

---

## 2. Standardized Directory & Module Boundaries

Every Rab6 template project MUST follow this exact directory structure:

```
aurora-template/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx             # Root layout with localized fonts, metadata, dir attribute
│   │   ├── page.tsx               # Primary single-page invitation scroll journey
│   │   └── rsvp-success/page.tsx  # Confirmation page / modal route
│   ├── api/
│   │   ├── rsvp/route.ts          # Serverless RSVP handler (Webhook / DB integration)
│   │   └── calendar/route.ts      # Dynamic .ics calendar generator
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-icon.png
│   └── globals.css                # CSS Variables, Tailwind directives, custom keyframes
├── components/
│   ├── aurora/                    # Template-specific section components
│   │   ├── HeroSection.tsx
│   │   ├── CoupleSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── VenueSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── RsvpSection.tsx
│   │   ├── GiftRegistrySection.tsx
│   │   └── FooterSection.tsx
│   ├── cinematic/                 # Universal luxury & background effects
│   │   ├── AuroraBackground.tsx   # Canvas GPU shader for northern lights ribbon
│   │   ├── GlassCard.tsx          # Interactive reflection tilt card
│   │   ├── FloatingParticles.tsx  # Stardust / moonlight canvas particles
│   │   ├── AudioPlayer.tsx        # Floating audio controller & spectrum visualizer
│   │   ├── LanguageSwitcher.tsx   # Smooth RTL/LTR mode toggle
│   │   └── LightboxModal.tsx      # High-res photo viewer modal
│   └── ui/                        # Low-level headless primitives
│       ├── Button.tsx
│       ├── Dialog.tsx
│       ├── Input.tsx
│       └── Accordion.tsx
├── lib/
│   ├── dictionaries/              # Translation dictionaries (en.ts, ar.ts)
│   ├── dictionary.ts              # Dictionary loader utility
│   ├── data.ts                    # Default couple content data schema
│   ├── motion.ts                  # Centralized Framer Motion variants & spring settings
│   ├── calendar.ts                # ICS file & Google Calendar generator helpers
│   └── utils.ts                   # `cn()` helper (clsx + tailwind-merge) & formatting
├── hooks/
│   ├── useAudio.ts                # Web Audio API lifecycle manager
│   ├── useCountdown.ts            # High-precision time calculation hook
│   └── useScrollProgress.ts       # Scroll position tracking hook
├── types/
│   └── invitation.ts              # TypeScript schemas for event data, RSVP, timeline
└── public/
    └── assets/
        ├── images/                # Optimized WebP/AVIF imagery
        └── audio/                 # Background music track (.mp3 / .aac)
```

---

## 3. State Management Architecture

Rab6 templates minimize global state overhead by using focused React Contexts and custom hooks.

### 3.1 Language & I18n Context (`LanguageContext`)
- **State**: Current language (`'ar'` | `'en'`), text direction (`'rtl'` | `'ltr'`).
- **Behavior**: Toggling language updates state, updates document root `<html dir="...">`, switches body font classes, and re-renders components using localized string keys from `lib/dictionaries/`.

### 3.2 Audio Player State (`useAudio`)
- **State**: `isPlaying` (boolean), `isMuted` (boolean), `hasUserInteracted` (boolean), `volume` (number).
- **Behavior**: Respects browser autoplay policies. Automatically prompts user on first click/scroll interaction if autoplay is blocked by browser.

### 3.3 RSVP Form State (`useForm`)
- **State**: Step index (`0: Attendance`, `1: Guests`, `2: Preferences`, `3: Confirmation`), form inputs, validation errors, submission status (`idle` | `submitting` | `success` | `error`).
- **Validation**: Client-side schema validation before payload submission to `/api/rsvp`.

---

## 4. Shared Utility Specifications

### 4.1 Classnames Helper (`lib/utils.ts`)
```typescript
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 4.2 Calendar Export Helper (`lib/calendar.ts`)
Generates dynamic Google Calendar and Apple iCal (`.ics`) file links:
```typescript
export function getGoogleCalendarUrl(event: WeddingEvent): string {
  const startTime = new Date(event.startDate).toISOString().replace(/-|:|\.\d\d\d/g, '');
  const endTime = new Date(event.endDate).toISOString().replace(/-|:|\.\d\d\d/g, '');
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startTime}/${endTime}`,
    details: event.description,
    location: event.locationName,
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
```

---

## 5. Image & Visual Asset Optimization Strategy

1. **Next.js `<Image>` Component Mandatory Policy**: All image rendering MUST use `next/image` with explicit `width`, `height`, and `sizes` properties to eliminate Layout Shift (CLS).
2. **Modern Image Formats**: All bitmap images MUST be stored in `.webp` or `.avif` formats.
3. **Hero Image Priority Loading**: The main couple background image in the Hero section MUST use `priority={true}` and `quality={90}` for fast Largest Contentful Paint (LCP).
4. **Placeholder Blur Data**: Use `placeholder="blur"` with low-resolution blur data strings to present an instant soft visual loading state.
5. **Vector Assets**: All monograms, borders, frame ornaments, and icons MUST be crisp, scalable inline SVGs or optimized SVG assets.

---

## 6. SEO & Metadata Standards

Rab6 templates feature automated, dynamic SEO and social sharing optimization.

### 6.1 Dynamic Open Graph Metadata (`layout.tsx`)
```typescript
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  
  return {
    title: `${dict.couple.groomName} & ${dict.couple.brideName} — Wedding Invitation`,
    description: dict.meta.description,
    openGraph: {
      title: `${dict.couple.groomName} & ${dict.couple.brideName} — ${dict.meta.weddingTitle}`,
      description: dict.meta.ogDescription,
      images: [{ url: '/assets/images/og-cover.jpg', width: 1200, height: 630, alt: 'Wedding Invitation' }],
      locale: params.lang === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://rab6.com/invitation/${params.lang}`,
      languages: {
        'ar': 'https://rab6.com/invitation/ar',
        'en': 'https://rab6.com/invitation/en',
      },
    },
  };
}
```

### 6.2 Structured Data (JSON-LD `Event` Schema)
Every invitation embeds Google Rich Snippet JSON-LD metadata for search engines:
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Tareq & Layla Wedding Celebration",
  "startDate": "2026-10-24T18:00:00+02:00",
  "endDate": "2026-10-25T02:00:00+02:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Four Seasons Nile Plaza",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "EG"
    }
  }
}
```

---

## 7. Performance & Core Web Vitals Standards

All Rab6 templates are benchmarked against strict Core Web Vitals thresholds:

| Metric | Target Threshold | Optimization Technique |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.8s` | Next.js Image `priority`, preloaded Google Display fonts |
| **CLS (Cumulative Layout Shift)** | `< 0.05` | Explicit aspect ratios on containers, font `display: swap` |
| **INP (Interaction to Next Paint)** | `< 100ms` | GPU-accelerated Framer Motion transforms, debounced handlers |
| **FPS (Frames Per Second)** | `60 - 120 FPS` | Canvas animation requestAnimationFrame capping, tab pause |

### 7.1 Canvas Frame Capping & Tab Lifecycle
All background particle animations (`AuroraBackground`, `FloatingParticles`) MUST pause rendering when the user switches browser tabs or when the canvas scrolls out of viewport:
```typescript
useEffect(() => {
  let animationFrameId: number;
  
  const handleVisibilityChange = () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    cancelAnimationFrame(animationFrameId);
  };
}, []);
```

---

## 8. Integration Protocol into Rab6 Main Showcase

To register a new template (e.g. `Aurora`) into the central Rab6 Showcase Store (`Main Page`):
1. **Thumbnail Generation**: Capture 3 high-res device screenshots (Desktop, Mobile, Tablet) in WebP format.
2. **Metadata Registration**: Add template metadata entry into `Main Page` collection registry:
```json
{
  "id": "template-aurora",
  "name": "Aurora",
  "tagline": "Luxury inspired by northern lights, silk, crystal, and moonlight.",
  "category": "Ultra Luxury",
  "previewUrl": "/templates/aurora",
  "thumbnail": "assets/templates/aurora-thumb.webp"
}
```
3. **Iframe Modal Integration**: Ensure the `Main Page` device previewer iframe properly renders the template with live responsive scaling.
