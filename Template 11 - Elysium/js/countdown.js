/* ==========================================================================
   ELYSIUM — Precision Countdown Ticker Module
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

class CountdownTicker {
  constructor(targetDateIso) {
    this.targetDate = new Date(targetDateIso).getTime();
    this.timer = null;
  }

  init() {
    this.update();
    this.timer = setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      clearInterval(this.timer);
      this.render(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.render(days, hours, minutes, seconds);
  }

  formatNum(num) {
    const isAr = window.languageManager && window.languageManager.currentLang === 'ar';
    const formattedStr = num < 10 ? `0${num}` : `${num}`;
    if (!isAr) return formattedStr;

    // Convert to Eastern Arabic numerals for Arabic
    const arDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return formattedStr.replace(/\d/g, d => arDigits[d]);
  }

  render(d, h, m, s) {
    const elDays = document.getElementById('count-days');
    const elHours = document.getElementById('count-hours');
    const elMins = document.getElementById('count-mins');
    const elSecs = document.getElementById('count-secs');

    if (elDays) elDays.textContent = this.formatNum(d);
    if (elHours) elHours.textContent = this.formatNum(h);
    if (elMins) elMins.textContent = this.formatNum(m);
    if (elSecs) elSecs.textContent = this.formatNum(s);
  }
}

window.countdownTicker = new CountdownTicker('2026-10-24T18:00:00+02:00');
