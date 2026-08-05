/* ==========================================================================
   ELYSIUM — Master Orchestrator Application Entry Module
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Bilingual Language Manager
  if (window.languageManager) {
    window.languageManager.init();
  }

  // 2. Initialize Particle Canvas Engine
  if (window.particleEngine) {
    window.particleEngine.init();
  }

  // 3. Initialize Web Audio Controller
  if (window.audioController) {
    window.audioController.init();
  }

  // 4. Initialize Countdown Ticker
  if (window.countdownTicker) {
    window.countdownTicker.init();
  }

  // 5. Initialize RSVP Controller
  if (window.rsvpController) {
    window.rsvpController.init();
  }

  // 6. Initialize Museum Gallery Lightbox
  if (window.galleryExhibition) {
    window.galleryExhibition.init();
  }

  // 7. Initialize Calendar Helpers
  if (window.calendarHelper) {
    window.calendarHelper.init();
  }

  // 8. Initialize Cinematic Scene Controller
  if (window.sceneController) {
    window.sceneController.init();
  }

  // 9. 3D Spatial Perspective Card Tilt Engine
  init3DCardTilt();

  // 10. Bind Copy IBAN Button
  const copyBtn = document.getElementById('btn-copy-iban');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const ibanText = "EG940003000000000123456789012";
      navigator.clipboard.writeText(ibanText).then(() => {
        const originalText = copyBtn.textContent;
        const copiedMsg = window.languageManager ? window.languageManager.t('ibanCopied') : 'Copied!';
        copyBtn.textContent = copiedMsg;
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  console.log("Rab6 ELYSIUM — Flagship Collection Engine Initialized Flawlessly.");
});

/* --------------------------------------------------------------------------
   3D Spatial Mouse-Tracking Card Tilt Engine (Apple Vision Pro Depth Effect)
   -------------------------------------------------------------------------- */
function init3DCardTilt() {
  const cards = document.querySelectorAll('.glass-card, .couple-card, .museum-frame, .story-card, .timeline-marble-slab');
  if (!cards.length) return;
  if (window.matchMedia('(hover: none)').matches) return;

  const MAX_TILT = 8; // Max degrees rotation

  cards.forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const rotateX = -dy * MAX_TILT;
      const rotateY = dx * MAX_TILT;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
    });
  });
}
