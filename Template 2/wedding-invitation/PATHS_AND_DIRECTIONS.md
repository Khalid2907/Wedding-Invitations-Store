# Project Paths and Directions Guide

This document describes the folder structure, file paths, application flow, and operational directions for the **Wedding Invitation** Next.js project.

---

## 📁 Directory & File Paths

### 1. Root Directory (`/`)
* [package.json](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/package.json) — Defines project dependencies (`next`, `react`, `framer-motion`, `lucide-react`), scripts (`dev`, `build`, `start`, `lint`), and versioning.
* [next.config.ts](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/next.config.ts) — Configuration file for Next.js options.
* [tsconfig.json](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/tsconfig.json) — TypeScript compiler setup, including path aliases (`@/*` pointing to `./*`).
* [postcss.config.mjs](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/postcss.config.mjs) & [eslint.config.mjs](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/eslint.config.mjs) — Styling pipeline (PostCSS / Tailwind v4) and ESLint rules.
* [README.md](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/README.md) — Basic Next.js default project documentation.
* [AGENTS.md](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/AGENTS.md) — Custom instructions for AI workspace agents.

---

### 2. Application Core Directory (`/app`)
* [app/layout.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/layout.tsx) — Root layout component. Wraps the entire application with the [LanguageProvider](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/LanguageContext.tsx) and imports [globals.css](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/globals.css).
* [app/page.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/page.tsx) — Main landing page assembly point. Integrates all major UI sections.
* [app/globals.css](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/globals.css) — Global CSS rules, custom styling resets, font configurations, and Tailwind CSS imports.
* [app/dictionaries.ts](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/dictionaries.ts) — Localization dictionary file containing English (`en`) and Arabic (`ar`) translations for all text sections in the website.
* [app/favicon.ico](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/favicon.ico) — Site favicon icon.

---

### 3. Components Directory (`/app/components`)
* [LanguageContext.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/LanguageContext.tsx) — React Context manager for handling current language state (`en` / `ar`) and providing translation lookups (`t(key)`).
* [Preloader.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/Preloader.tsx) — Welcome splash/loading animation displayed when the website first loads.
* [Hero.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/Hero.tsx) — Main header banner containing couple details, event date, and language switch button.
* [CountdownAndVenue.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/CountdownAndVenue.tsx) — Real-time event countdown timer and venue location map & details.
* [Timeline.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/Timeline.tsx) — Event schedule and agenda timeline.
* [Gallery.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/Gallery.tsx) — Interactive photo gallery showcasing wedding imagery.
* [RSVP.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/RSVP.tsx) — Guest response and attendance confirmation form.
* [Footer.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/Footer.tsx) — Bottom footer section with closing messages and copyright.

---

### 4. Public Assets Directory (`/public`)
* Contains static images, SVG vector assets ([file.svg](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/public/file.svg), [globe.svg](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/public/globe.svg), [next.svg](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/public/next.svg), etc.) served at the root URL path `/`.

---

## 🧭 Application Architecture & Directions

### Data & State Flow
1. **Language Localization**: 
   - State is stored in [LanguageContext.tsx](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/components/LanguageContext.tsx).
   - Text key references are retrieved from [dictionaries.ts](file:///c:/Other/Coding/Digital%20Web%20Invitations/Template%202/wedding-invitation/app/dictionaries.ts).
   - Dynamic direction support (`dir="ltr"` or `dir="rtl"`) is automatically synced based on selected language (English / Arabic).

2. **Component Lifecycle**:
   - `Preloader` is triggered on initial load.
   - `Hero` introduces the couple & event date.
   - `CountdownAndVenue` computes live time remaining until wedding date and renders venue details.
   - `Timeline` & `Gallery` present event details and photos.
   - `RSVP` captures guest attendance choices.

---

## 🚀 Execution & Command Directions

Run these commands from the terminal in the root directory:

* **Development Server** (runs locally on `http://localhost:3000` with hot reloading):
  ```bash
  npm run dev
  ```

* **Production Build** (compiles optimized production bundle):
  ```bash
  npm run build
  ```

* **Start Production Server**:
  ```bash
  npm run start
  ```

* **Code Linting**:
  ```bash
  npm run lint
  ```
