/* ═════════════════════════════════
   GLASS PAVILION — JavaScript Logic
   ═════════════════════════════════ */

'use strict';

/* ─── PARTICLE SYSTEM ─── */
(function initParticles() {
  const container = document.getElementById('particles');
  const COUNT = 22;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1; // 1-4px
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 160;
    const duration = Math.random() * 12 + 10; // 10-22s
    const delay = Math.random() * -20;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      --drift:${drift}px;
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      opacity:0;
    `;
    container.appendChild(p);
  }
})();

/* ─── COUNTDOWN TIMER ─── */
(function initCountdown() {
  const weddingDate = new Date('2025-09-14T17:00:00').getTime();
  const els = {
    days:  document.getElementById('cdDays'),
    hours: document.getElementById('cdHours'),
    mins:  document.getElementById('cdMins'),
    secs:  document.getElementById('cdSecs'),
  };

  let prev = {};

  function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

  function tick() {
    const now = Date.now();
    const diff = weddingDate - now;
    if (diff <= 0) {
      Object.values(els).forEach(el => el.textContent = '00');
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const vals = { days: pad(d), hours: pad(h), mins: pad(m), secs: pad(s) };

    Object.entries(vals).forEach(([key, val]) => {
      if (prev[key] !== val) {
        els[key].textContent = val;
        els[key].classList.remove('tick');
        void els[key].offsetWidth; // reflow
        els[key].classList.add('tick');
        prev[key] = val;
      }
    });
  }

  tick();
  setInterval(tick, 1000);
})();

/* ─── RSVP MODAL ─── */
(function initRsvpModal() {
  const backdrop = document.getElementById('modalBackdrop');
  const modal    = document.getElementById('rsvpModal');
  const closeBtn = document.getElementById('modalClose');
  const rsvpYes  = document.getElementById('rsvpYes');
  const rsvpNo   = document.getElementById('rsvpNo');
  const form     = document.getElementById('rsvpForm');
  const modalSub = document.getElementById('modalSub');
  const formGroup = document.getElementById('formGroupMain');

  let accepting = true;

  function openModal(accept) {
    accepting = accept;
    if (accept) {
      modalSub.textContent = 'We are so delighted you can join us!';
      formGroup.style.display = 'flex';
      document.getElementById('formSubmit').textContent = 'Confirm RSVP ✓';
    } else {
      modalSub.textContent = 'We will truly miss you.';
      formGroup.style.display = 'none';
      document.getElementById('formSubmit').textContent = 'Send Regrets';
    }
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn.focus(), 350);
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    form.reset();
  }

  rsvpYes.addEventListener('click', () => openModal(true));
  rsvpNo.addEventListener('click',  () => openModal(false));
  closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value.trim();
    if (accepting && !name) {
      document.getElementById('guestName').focus();
      showToast('Please enter your name 💌');
      return;
    }
    closeModal();
    if (accepting) {
      showToast(`🎉 Thank you, ${name || 'dear friend'}! We can't wait to celebrate with you!`);
    } else {
      showToast('💌 Your regrets have been noted. You'll be missed!');
    }
  });
})();

/* ─── WIDGET BUTTONS ─── */
(function initWidgets() {
  document.getElementById('appleWalletBtn').addEventListener('click', () => {
    showToast('🍎 Adding to Apple Wallet…');
  });
  document.getElementById('googleCalBtn').addEventListener('click', () => {
    const base   = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const title  = encodeURIComponent('Sophia & Julian's Wedding 💍');
    const dates  = '20250914T170000/20250914T230000';
    const loc    = encodeURIComponent('The Glass Pavilion, Amalfi Coast, Italy');
    const detail = encodeURIComponent('You are cordially invited to celebrate the wedding of Sophia & Julian.');
    const url = `${base}&text=${title}&dates=${dates}&location=${loc}&details=${detail}`;
    window.open(url, '_blank', 'noopener');
    showToast('📅 Opening Google Calendar…');
  });
})();

/* ─── TOAST NOTIFICATION ─── */
function showToast(msg, duration = 3200) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}
window.showToast = showToast;

/* ─── PARALLAX / TILT ON HERO CARD ─── */
(function initParallax() {
  const hero = document.getElementById('heroCard');
  const img  = document.getElementById('coupleImg');
  if (!hero || !img) return;

  let isTouch = false;

  function applyTilt(x, y, rect) {
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const rx = ((y - cy) / rect.height) * 10;
    const ry = ((x - cx) / rect.width)  * -10;
    hero.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
    img.style.transform  = `scale(1.06) translateX(${ry * 0.5}px) translateY(${rx * 0.5}px)`;
  }

  hero.addEventListener('mousemove', (e) => {
    if (isTouch) return;
    applyTilt(e.clientX, e.clientY, hero.getBoundingClientRect());
  });
  hero.addEventListener('mouseleave', () => {
    hero.style.transform = '';
    img.style.transform  = '';
  });
  hero.addEventListener('touchstart', () => { isTouch = true; }, { passive: true });
})();

/* ─── SCROLL REVEAL ─── */
(function initScrollReveal() {
  const items = document.querySelectorAll('.glass-card, .gallery-strip, .invite-footer');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '';
        entry.target.style.transform = '';
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(el);
  });

  // Trigger immediately visible ones
  setTimeout(() => {
    items.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }, 50);
})();

/* ─── CARD PRESS RIPPLE ─── */
(function initRipple() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('pointerdown', (e) => {
      const rect = card.getBoundingClientRect();
      const r = document.createElement('span');
      const d = Math.max(rect.width, rect.height) * 2;
      r.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        background:rgba(255,255,255,0.12);
        width:${d}px; height:${d}px;
        left:${e.clientX - rect.left - d/2}px;
        top:${e.clientY - rect.top - d/2}px;
        transform:scale(0); opacity:1;
        animation:rippleAnim 0.6s ease-out forwards;
        z-index:1;
      `;
      // Add the keyframe once
      if (!document.getElementById('rippleStyle')) {
        const s = document.createElement('style');
        s.id = 'rippleStyle';
        s.textContent = '@keyframes rippleAnim{to{transform:scale(1);opacity:0}}';
        document.head.appendChild(s);
      }
      card.appendChild(r);
      r.addEventListener('animationend', () => r.remove());
    });
  });
})();
