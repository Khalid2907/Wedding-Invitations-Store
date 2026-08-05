/* ============================================================
   RAB6 MAIN APPLICATION ENTRY — ELYSIUM MORNING EDITION
   Client: Mohammad & Rahma (محمد & رحمة)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const fallbackSrc = '/assets/placeholder.svg';

  const bindImageFallbacks = () => {
    const images = Array.from(document.querySelectorAll('img'));
    images.forEach((img) => {
      const originalSrc = img.getAttribute('src') || '';
      if (!img.hasAttribute('data-fallback-bound')) {
        img.setAttribute('data-fallback-bound', 'true');
        img.setAttribute('data-original-src', originalSrc);
      }

      img.addEventListener('error', () => {
        const currentSrc = img.getAttribute('src') || '';
        if (currentSrc !== fallbackSrc) {
          img.setAttribute('src', fallbackSrc);
          img.setAttribute('data-fallback-active', 'true');
          console.warn(`[assets] Failed to load image: ${currentSrc || '(empty path)'}`);
        }
      }, { once: true });
    });
  };

  const verifyImages = () => {
    const images = Array.from(document.querySelectorAll('img'));
    images.forEach((img) => {
      const src = img.getAttribute('src') || '';
      if (!src) return;

      const testImage = new Image();
      testImage.onload = () => {};
      testImage.onerror = () => {
        console.error(`[assets] Preload failed: ${src}`);
      };
      testImage.src = src;
    });
  };

  bindImageFallbacks();
  verifyImages();

  console.log('⚡ Rab6 Luxury Invitation Initialized: Mohammad & Rahma');

  // 1. Bind Language Switcher Charm Button
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn && window.LanguageModule) {
    langBtn.addEventListener('click', () => {
      window.LanguageModule.toggleLanguage();
    });
  }

  // Listen for language changes to re-translate dynamic elements
  window.addEventListener('languageChanged', (e) => {
    const { lang, t } = e.detail;
    updateDynamicText(t);
  });

  // Initial text sync
  if (window.LanguageModule) {
    updateDynamicText(window.LanguageModule.getTranslation());
  }

  // 2. IntersectionObserver for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-init');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.02
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Architectural Side Tracker Scroll Engine (Elysium Edition)
  const scenes = Array.from(document.querySelectorAll('section.cinematic-scene'));
  const trackerDots = Array.from(document.querySelectorAll('.tracker-dot'));
  const fillLine = document.getElementById('tracker-fill-line');
  const runnerOrb = document.getElementById('tracker-runner-orb');

  function updateScrollTracker() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressRatio = Math.max(0, Math.min(1, scrollTop / (docHeight || 1)));

    if (fillLine) fillLine.style.height = `${progressRatio * 100}%`;
    if (runnerOrb) runnerOrb.style.top = `${progressRatio * 100}%`;

    // Determine current active scene
    let currentSceneId = '';
    scenes.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.45) {
        currentSceneId = scene.id;
      }
    });

    if (currentSceneId) {
      trackerDots.forEach(dot => {
        if (dot.getAttribute('data-target-scene') === currentSceneId) {
          dot.classList.add('is-active');
        } else {
          dot.classList.remove('is-active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateScrollTracker, { passive: true });
  updateScrollTracker();

  // Click on tracker dot to scroll
  trackerDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.getAttribute('data-target-scene');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 4. Interactive Story Timeline Physics Observer
  const storySection = document.getElementById('scene-story');
  const storyFillLine = document.getElementById('story-timeline-fill');
  const milestoneItems = Array.from(document.querySelectorAll('.story-milestone-item'));

  function updateStoryTimelineProgress() {
    if (!storySection || !storyFillLine) return;

    const rect = storySection.getBoundingClientRect();
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;

    // Calculate progress as story section passes center screen
    const startPoint = windowHeight * 0.7;
    const endPoint = windowHeight * 0.2;
    const totalTravel = sectionHeight + (startPoint - endPoint);
    const currentDistance = startPoint - rect.top;
    const progressPercent = Math.min(100, Math.max(0, (currentDistance / totalTravel) * 100));

    storyFillLine.style.height = `${progressPercent}%`;

    // Active milestone node tracking
    milestoneItems.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const itemMid = itemRect.top + itemRect.height / 2;

      if (itemMid >= 0 && itemMid <= windowHeight * 0.75) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }

  window.addEventListener('scroll', updateStoryTimelineProgress, { passive: true });
  updateStoryTimelineProgress();
});

function updateDynamicText(t) {
  if (!t) return;

  // Monogram & Names
  setElText('monogram-text', t.monogram);
  setElText('hero-names-text', t.coupleNames);
  setElText('hero-sub-text', t.heroSub);
  setElText('hero-date-text', t.weddingDateStr);
  setElText('wax-prompt-text', t.waxPrompt);

  // Story
  setElText('story-eyebrow', t.storyEyebrow);
  setElText('story-heading', t.storyHeading);
  if (t.storyChapters) {
    t.storyChapters.forEach((ch, idx) => {
      setElText(`story-year-${idx}`, ch.year);
      setElText(`story-title-${idx}`, ch.title);
      setElText(`story-body-${idx}`, ch.body);
    });
  }

  // Letter
  setElText('letter-eyebrow', t.letterEyebrow);
  setElText('letter-quote', t.letterQuote);
  setElText('letter-sign', t.letterSign);

  // Countdown
  setElText('countdown-eyebrow', t.countdownEyebrow);
  setElText('countdown-heading', t.countdownHeading);
  setElText('days-label', t.daysLabel);
  setElText('hours-label', t.hoursLabel);
  setElText('minutes-label', t.minutesLabel);
  setElText('seconds-label', t.secondsLabel);
  setElText('btn-add-google', t.addToGoogle);
  setElText('btn-download-ics', t.downloadIcs);

  // Schedule
  setElText('schedule-eyebrow', t.scheduleEyebrow);
  setElText('schedule-heading', t.scheduleHeading);
  if (t.scheduleItems) {
    t.scheduleItems.forEach((item, idx) => {
      setElText(`sched-time-${idx}`, item.time);
      setElText(`sched-title-${idx}`, item.title);
      setElText(`sched-desc-${idx}`, item.desc);
    });
  }

  // Gallery
  setElText('gallery-eyebrow', t.galleryEyebrow);
  setElText('gallery-heading', t.galleryHeading);

  // Venue
  setElText('venue-eyebrow', t.venueEyebrow);
  setElText('venue-heading', t.venueHeading);
  setElText('venue-title', t.venueTitle);
  setElText('venue-desc', t.venueDesc);
  setElText('btn-google-maps', t.openGoogleMaps);

  // RSVP
  setElText('rsvp-eyebrow', t.rsvpEyebrow);
  setElText('rsvp-heading', t.rsvpHeading);
  setElText('rsvp-name-label', t.rsvpNameLabel);
  setElText('rsvp-attendance-label', t.rsvpAttendanceLabel);
  setElText('rsvp-attending-text', t.rsvpAttending);
  setElText('rsvp-declining-text', t.rsvpDeclining);
  setElText('rsvp-guests-label', t.rsvpGuestsLabel);
  setElText('rsvp-submit-btn', t.rsvpSubmit);
  setElText('rsvp-success-msg', t.rsvpSuccessMsg);

  // Closing
  setElText('closing-text', t.closingText);
  setElText('closing-names', t.closingNames);
}

function setElText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}
