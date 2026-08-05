/* ============================================================
   RAB6 LUXURY CINEMATIC PRODUCT REVEAL ENVELOPE MODULE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const waxSeal = document.getElementById('wax-seal');
  const envelopeFlap = document.getElementById('envelope-flap');
  const envelopeLetter = document.getElementById('envelope-letter');
  const shadowFloor = document.getElementById('envelope-shadow-floor');
  const coupleNames = document.getElementById('preloader-couple-names');
  const waxLeft = document.querySelector('.wax-half.wax-left');
  const waxRight = document.querySelector('.wax-half.wax-right');

  if (!preloader || !envelopeWrapper || !waxSeal) return;

  let isOpen = false;

  function openEnvelope(e) {
    if (isOpen) return;
    isOpen = true;

    envelopeWrapper.classList.add('is-open');

    // Get seal coordinates for particle burst
    const rect = waxSeal.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    // STEP 1: Compression Feedback (0 - 120ms)
    waxSeal.style.transform = 'translate(-50%, -50%) scale(0.92)';

    // Play wax crack SFX
    if (window.AudioModule && typeof window.AudioModule.playWaxCrackSFX === 'function') {
      window.AudioModule.playWaxCrackSFX();
    }

    // STEP 2: Wax Fracture & Micro-Particles (120ms)
    setTimeout(() => {
      waxSeal.style.transform = 'translate(-50%, -50%) scale(1.08)';

      if (waxLeft) waxLeft.style.animation = 'waxCrackLeft 0.8s var(--ease-apple) forwards';
      if (waxRight) waxRight.style.animation = 'waxCrackRight 0.8s var(--ease-apple) forwards';

      // Spawn wax chip particle explosion
      if (window.ambientParticlesInstance && typeof window.ambientParticlesInstance.spawnWaxBurst === 'function') {
        window.ambientParticlesInstance.spawnWaxBurst(originX, originY);
      }

      // Camera push-in
      if (window.innerWidth >= 768) {
        envelopeWrapper.style.transform = 'scale(1.04) translateY(-6px)';
      } else {
        envelopeWrapper.style.transform = 'scale(1.01) translateY(-2px)';
      }
    }, 120);

    // STEP 3: 3D Flap Unfolding & Self-Shadow Sweep (500ms)
    setTimeout(() => {
      if (envelopeFlap) {
        envelopeFlap.style.animation = 'flapUnfold3D 1.3s cubic-bezier(0.25, 1, 0.5, 1) forwards';
      }

      // Play paper rustle sound
      if (window.AudioModule && typeof window.AudioModule.playPaperRustleSFX === 'function') {
        window.AudioModule.playPaperRustleSFX();
      }

      // Trigger soundtrack fade-in
      if (window.AudioModule && typeof window.AudioModule.playWithFade === 'function') {
        window.AudioModule.playWithFade();
      }
    }, 500);

    // STEP 4: Letter Extraction with Natural Inertia & Tilt (1600ms)
    setTimeout(() => {
      const isMobile = window.innerWidth < 768;

      if (envelopeLetter) {
        envelopeLetter.style.animation = isMobile
          ? 'letterExtract3DMobile 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards'
          : 'letterExtract3D 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards';
      }

      if (shadowFloor) {
        shadowFloor.style.animation = isMobile
          ? 'shadowFloorExpandMobile 2.2s ease-out forwards'
          : 'shadowFloorExpand 2.2s ease-out forwards';
      }

      if (coupleNames) {
        coupleNames.style.animation = 'calligraphyReveal 1.6s ease-out forwards';
      }
    }, 1600);

    // STEP 5: Hero Sanctuary Dissolve & Transition (4400ms)
    setTimeout(() => {
      preloader.classList.add('is-dismissed');
      document.body.style.overflow = 'auto';

      // Trigger hero entrance reveal
      window.dispatchEvent(new CustomEvent('envelopeOpened'));
    }, 4400);
  }

  // Bind wax seal click and keyboard enter/space
  waxSeal.addEventListener('click', (e) => {
    e.stopPropagation();
    openEnvelope(e);
  });

  waxSeal.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope(e);
    }
  });

  envelopeWrapper.addEventListener('click', (e) => {
    openEnvelope(e);
  });
});
