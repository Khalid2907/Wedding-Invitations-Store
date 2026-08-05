# TEMPLATE 7: CONSTELLATION — SYSTEM ARCHITECTURE

## 1. Technical Architecture Stack
- **Frontend Core**: Vanilla HTML5, ES Modules (ES2022)
- **Styling Architecture**: Modular CSS3 with CSS Variables, Flexbox, CSS Grid, and Glassmorphism
- **Graphics & Particles**: HTML5 2D Canvas WebGL stardust engine with 60 FPS requestAnimationFrame
- **Audio Synthesizer**: Native Web Audio API ambient pad synthesizer and harmonic bell sound generator
- **State & Storage**: LocalStorage audio state persistence & PWA Service Worker caching (`sw.js`)

## 2. Directory & Module Structure
```
Template 7/constellation/
├── index.html
├── manifest.json
├── sw.js
├── css/
│   ├── variables.css
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── starfield.js
│   ├── audio.js
│   ├── countdown.js
│   └── language.js
└── docs/
    ├── analysis.md
    ├── architecture.md
    ├── roadmap.md
    ├── component-map.md
    ├── changelog.md
    ├── quality-score.md
    └── final-report.md
```

## 3. High-Performance Canvas & Audio Systems
- **Starfield Particle Engine (`js/starfield.js`)**: Manages 150+ ambient stardust particles, shooting star generation, cursor gravity attraction, constellation line linking, and Arabic calligraphy stardust points (`محمد` & `رحمة`).
- **Web Audio Engine (`js/audio.js`)**: Synthesizes a multi-oscillator ambient chord pad (`C3`, `G3`, `C4`, `E4`, `B4`) with low-pass filtering and subtle reverb delay.
