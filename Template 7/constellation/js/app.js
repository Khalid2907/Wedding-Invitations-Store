/* ============================================================
   RAB6 TEMPLATE 7 — CONSTELLATION (MAIN APP CONTROLLER)
   ============================================================ */

import { StarfieldEngine } from './starfield.js';
import { CelestialAudioEngine } from './audio.js';
import { SolarCountdown } from './countdown.js';
import { translations } from './language.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Stardust Canvas
  const starfield = new StarfieldEngine('stardust-canvas');

  // Initialize Web Audio Engine
  const audio = new CelestialAudioEngine();
  const soundBtn = document.getElementById('btn-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = audio.toggle();
      soundBtn.querySelector('.sound-label').textContent = active ? 'Sound On ✦' : 'Sound Off';
    });
  }

  // Initialize Solar Countdown
  const countdown = new SolarCountdown('2026-11-14T19:00:00');

  // Language Switcher
  let currentLang = 'en';
  const langBtn = document.getElementById('btn-lang');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    if (langBtn) {
      langBtn.textContent = lang === 'en' ? 'العربية' : 'English';
    }
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // Preloader Entrance Transition
  const preloader = document.getElementById('preloader');
  const monogram = document.querySelector('.preloader-monogram');
  const tagline = document.querySelector('.preloader-tagline');

  setTimeout(() => {
    if (monogram) monogram.classList.add('visible');
  }, 400);

  setTimeout(() => {
    if (tagline) tagline.classList.add('visible');
  }, 1200);

  setTimeout(() => {
    if (preloader) preloader.classList.add('fade-out');
  }, 3200);

  // RSVP Ritual ("Send a Star")
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const succMsg = document.getElementById('rsvp-success');
      if (succMsg) {
        succMsg.style.display = 'block';
        succMsg.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
});
