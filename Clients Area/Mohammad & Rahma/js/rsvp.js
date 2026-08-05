/* ============================================================
   RAB6 RSVP FORM MODULE — ELYSIUM MORNING EDITION
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const rsvpForm = document.getElementById('rsvp-form');
  const rsvpCard = document.getElementById('rsvp-card-content');
  const rsvpSuccess = document.getElementById('rsvp-success-state');

  if (!rsvpForm) return;

  // Check previous submission
  if (localStorage.getItem('mohammad_rahma_rsvp_submitted') === 'true') {
    if (rsvpCard && rsvpSuccess) {
      rsvpCard.style.display = 'none';
      rsvpSuccess.style.display = 'block';
    }
  }

  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('rsvp-name');
    const attendanceInput = document.querySelector('input[name="attendance"]:checked');
    const guestsInput = document.getElementById('rsvp-guests');

    if (!nameInput || !nameInput.value.trim()) {
      alert('الرجاء إدخال الاسم الكريم / Please enter your name');
      return;
    }

    const payload = {
      name: nameInput.value.trim(),
      attendance: attendanceInput ? attendanceInput.value : 'attending',
      guests: guestsInput ? guestsInput.value : '1',
      timestamp: new Date().toISOString()
    };

    console.log('RSVP Submitted:', payload);

    // Save state
    localStorage.setItem('mohammad_rahma_rsvp_submitted', 'true');

    // Trigger celebration petal explosion
    triggerCelebrationPetals();

    // Show success view
    if (rsvpCard && rsvpSuccess) {
      rsvpCard.style.display = 'none';
      rsvpSuccess.style.display = 'block';
    }
  });

  function triggerCelebrationPetals() {
    if (!window.ambientParticlesInstance) return;
    const instance = window.ambientParticlesInstance;

    // Burst extra petals into canvas
    for (let i = 0; i < 30; i++) {
      instance.petals.push({
        x: Math.random() * instance.width,
        y: instance.height + Math.random() * 50,
        size: Math.random() * 10 + 6,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2,
        speedY: -(Math.random() * 2 + 1.5),
        speedX: (Math.random() - 0.5) * 2,
        opacity: 0.8
      });
    }
  }
});
