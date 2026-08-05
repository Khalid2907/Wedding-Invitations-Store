/* ==========================================================================
   ELYSIUM — Multi-step Glass RSVP Panel Module
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

class RsvpController {
  constructor() {
    this.attending = 'yes';
  }

  init() {
    this.bindEvents();
    this.checkSavedState();
  }

  bindEvents() {
    const radioYes = document.getElementById('rsvp-opt-yes');
    const radioNo = document.getElementById('rsvp-opt-no');
    const form = document.getElementById('rsvp-form');

    if (radioYes && radioNo) {
      radioYes.addEventListener('click', () => {
        this.attending = 'yes';
        radioYes.classList.add('is-selected');
        radioNo.classList.remove('is-selected');
      });

      radioNo.addEventListener('click', () => {
        this.attending = 'no';
        radioNo.classList.add('is-selected');
        radioYes.classList.remove('is-selected');
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }
  }

  handleSubmit() {
    const nameInput = document.getElementById('rsvp-name');
    const guestSelect = document.getElementById('rsvp-guests');
    const dietaryInput = document.getElementById('rsvp-dietary');
    const noteInput = document.getElementById('rsvp-note');
    const responseContainer = document.getElementById('rsvp-response-message');

    if (!nameInput || !nameInput.value.trim()) {
      nameInput.focus();
      nameInput.style.borderColor = '#ff4d4d';
      return;
    }

    const payload = {
      name: nameInput.value.trim(),
      attending: this.attending,
      guests: guestSelect ? guestSelect.value : 1,
      dietary: dietaryInput ? dietaryInput.value.trim() : '',
      note: noteInput ? noteInput.value.trim() : '',
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('elysium_rsvp_data', JSON.stringify(payload));

    if (responseContainer) {
      const msg = window.languageManager ? window.languageManager.t('rsvpSuccessMsg') : 'Thank you! Response recorded.';
      responseContainer.innerHTML = `<div class="glass-card" style="border-color: var(--color-champagne-gold); text-align: center; font-size: var(--text-lg); color: var(--color-champagne-gold);">${msg}</div>`;
      responseContainer.style.display = 'block';
    }

    this.triggerConfetti();
  }

  checkSavedState() {
    const saved = localStorage.getItem('elysium_rsvp_data');
    if (!saved) return;
    try {
      const data = JSON.parse(saved);
      const responseContainer = document.getElementById('rsvp-response-message');
      if (responseContainer && data.name) {
        const msg = window.languageManager ? window.languageManager.t('rsvpSuccessMsg') : 'Thank you! Response recorded.';
        responseContainer.innerHTML = `<div class="glass-card" style="border-color: var(--color-champagne-gold); text-align: center; font-size: var(--text-lg); color: var(--color-champagne-gold);">${msg}</div>`;
      }
    } catch (e) {}
  }

  triggerConfetti() {
    // Simple micro confetti blast onto body
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = '8px';
      particle.style.height = '8px';
      particle.style.backgroundColor = Math.random() > 0.5 ? '#E6C786' : '#F8F9FA';
      particle.style.left = '50vw';
      particle.style.top = '70vh';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '999';
      particle.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      document.body.appendChild(particle);

      const destX = (Math.random() - 0.5) * 400;
      const destY = (Math.random() - 0.8) * 350;

      setTimeout(() => {
        particle.style.transform = `translate3d(${destX}px, ${destY}px, 0) scale(0)`;
        particle.style.opacity = '0';
      }, 20);

      setTimeout(() => particle.remove(), 1300);
    }
  }
}

window.rsvpController = new RsvpController();
