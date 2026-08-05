/* ==========================================================================
   ELYSIUM — Scene Transition Engine & Side Scroll Progress Controller
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

class SceneController {
  constructor() {
    this.hasUnlockedDoors = false;
    this.scenes = [
      { id: 'scene-hero', title: '01 Sanctuary' },
      { id: 'scene-couple', title: '02 Couple' },
      { id: 'scene-story', title: '03 Story' },
      { id: 'scene-timeline', title: '04 Schedule' },
      { id: 'scene-venue', title: '05 Venue' },
      { id: 'scene-gallery', title: '06 Exhibition' },
      { id: 'scene-countdown', title: '07 Countdown' },
      { id: 'scene-rsvp', title: '08 RSVP' },
      { id: 'scene-registry', title: '09 Registry' },
      { id: 'scene-closing', title: '10 Ceremony' }
    ];
  }

  init() {
    this.initLoadingExperience();
    this.initScrollObservers();
    this.bindDoorTriggers();
    this.initSideScrollTracker();
  }

  initLoadingExperience() {
    const fillEl = document.getElementById('loading-progress-fill');
    const enterBtn = document.getElementById('enter-btn');
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        if (fillEl) fillEl.style.width = '100%';
        if (enterBtn) enterBtn.classList.add('is-ready');
      } else {
        if (fillEl) fillEl.style.width = `${progress}%`;
      }
    }, 100);
  }

  bindDoorTriggers() {
    const enterBtn = document.getElementById('enter-btn');
    const loadingScene = document.getElementById('scene-loading');
    const leftDoor = document.getElementById('door-left');
    const rightDoor = document.getElementById('door-right');
    const seamGlow = document.getElementById('door-seam-glow');

    const unlockDoors = () => {
      if (this.hasUnlockedDoors) return;
      this.hasUnlockedDoors = true;

      if (loadingScene) loadingScene.classList.add('is-hidden');
      if (leftDoor) leftDoor.classList.add('door-left-open');
      if (rightDoor) rightDoor.classList.add('door-right-open');
      if (seamGlow) seamGlow.classList.add('is-faded');

      if (window.audioController) {
        window.audioController.playAudio().catch(() => {});
      }
    };

    if (enterBtn) {
      enterBtn.addEventListener('click', unlockDoors);
    }

    window.addEventListener('wheel', (e) => {
      if (!this.hasUnlockedDoors && e.deltaY > 10) {
        unlockDoors();
      }
    }, { passive: true });
  }

  initScrollObservers() {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     Side Scroll Progress Indicator Engine (Architectural Side Line Tracker)
     ------------------------------------------------------------------------ */
  initSideScrollTracker() {
    const fillLine = document.getElementById('tracker-fill-line');
    const runnerOrb = document.getElementById('tracker-runner-orb');
    const sceneDots = document.querySelectorAll('.tracker-dot');

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressRatio = Math.max(0, Math.min(1, scrollTop / (scrollHeight || 1)));

      if (fillLine) fillLine.style.height = `${progressRatio * 100}%`;
      if (runnerOrb) runnerOrb.style.top = `${progressRatio * 100}%`;

      // Update active scene dot based on distance
      let currentActiveIndex = 0;
      this.scenes.forEach((scene, index) => {
        const el = document.getElementById(scene.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            currentActiveIndex = index;
          }
        }
      });

      sceneDots.forEach((dot, index) => {
        if (index === currentActiveIndex) {
          dot.classList.add('is-active');
        } else {
          dot.classList.remove('is-active');
        }
      });
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    // Bind click events on tracker dots for smooth navigation
    sceneDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetId = dot.getAttribute('data-target-scene');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

window.sceneController = new SceneController();
