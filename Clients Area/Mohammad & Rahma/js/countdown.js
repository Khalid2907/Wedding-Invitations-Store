/* ============================================================
   RAB6 COUNTDOWN & CALENDAR MODULE — ELYSIUM MORNING EDITION
   Target Date: August 8, 2026 18:00:00 (+03:00)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const TARGET_DATE = new Date('2026-08-08T18:00:00+03:00').getTime();

  const daysEl = document.getElementById('days-val');
  const hoursEl = document.getElementById('hours-val');
  const minutesEl = document.getElementById('minutes-val');
  const secondsEl = document.getElementById('seconds-val');

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const isArabic = document.documentElement.getAttribute('lang') === 'ar';

    if (daysEl) daysEl.textContent = formatNum(days, isArabic);
    if (hoursEl) hoursEl.textContent = formatNum(hours, isArabic);
    if (minutesEl) minutesEl.textContent = formatNum(minutes, isArabic);
    if (secondsEl) secondsEl.textContent = formatNum(seconds, isArabic);
  }

  function formatNum(num, isArabic) {
    const padded = String(num).padStart(2, '0');
    if (!isArabic) return padded;

    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return padded.replace(/\d/g, d => arabicDigits[d]);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Calendar Export Generators
  const googleBtn = document.getElementById('add-google-cal');
  const icsBtn = document.getElementById('download-ics');

  if (googleBtn) {
    googleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const startTime = '20260808T150000Z';
      const endTime = '20260808T220000Z';
      const title = encodeURIComponent('Mohammad & Rahma Wedding Ceremony — حفل زفاف محمد ورحمة');
      const details = encodeURIComponent('We are honored to celebrate our wedding ceremony with you.');
      const location = encodeURIComponent('https://maps.app.goo.gl/8r9ivD9W3H5zatCs7');

      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
      window.open(url, '_blank');
    });
  }

  if (icsBtn) {
    icsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rab6 Studio//Wedding Invitation//EN
BEGIN:VEVENT
UID:mohammad-rahma-wedding-2026
DTSTAMP:20260808T150000Z
DTSTART:20260808T150000Z
DTEND:20260808T220000Z
SUMMARY:Mohammad & Rahma Wedding Ceremony — حفل زفاف محمد ورحمة
DESCRIPTION:We are honored to celebrate our wedding ceremony with you.
LOCATION:https://maps.app.goo.gl/8r9ivD9W3H5zatCs7
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'Mohammad_and_Rahma_Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
