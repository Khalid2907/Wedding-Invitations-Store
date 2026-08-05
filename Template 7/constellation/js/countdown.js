/* ============================================================
   RAB6 TEMPLATE 7 — CONSTELLATION (SOLAR COUNTDOWN ENGINE)
   ============================================================ */

export class SolarCountdown {
  constructor(targetDateStr) {
    this.targetDate = new Date(targetDateStr).getTime();
    this.daysEl = document.getElementById('cd-days');
    this.hoursEl = document.getElementById('cd-hours');
    this.minsEl = document.getElementById('cd-mins');
    this.secsEl = document.getElementById('cd-secs');

    this.start();
  }

  update() {
    const now = new Date().getTime();
    const diff = this.targetDate - now;

    if (diff <= 0) {
      if (this.daysEl) this.daysEl.textContent = '00';
      if (this.hoursEl) this.hoursEl.textContent = '00';
      if (this.minsEl) this.minsEl.textContent = '00';
      if (this.secsEl) this.secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    if (this.daysEl) this.daysEl.textContent = String(days).padStart(2, '0');
    if (this.hoursEl) this.hoursEl.textContent = String(hours).padStart(2, '0');
    if (this.minsEl) this.minsEl.textContent = String(mins).padStart(2, '0');
    if (this.secsEl) this.secsEl.textContent = String(secs).padStart(2, '0');
  }

  start() {
    this.update();
    setInterval(() => this.update(), 1000);
  }
}
