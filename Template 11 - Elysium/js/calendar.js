/* ==========================================================================
   ELYSIUM — Dynamic Calendar (.ics & Google) Generator Module
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

class CalendarHelper {
  constructor() {
    this.eventData = {
      title: "Tareq & Layla Wedding Celebration — Elysium",
      description: "Join Tareq and Layla at Four Seasons Nile Plaza Sanctuary for their architectural wedding celebration.",
      location: "Four Seasons Nile Plaza Sanctuary, Cairo, Egypt",
      startDate: "20261024T160000Z", // 18:00 UTC+2
      endDate: "20261024T230000Z"
    };
  }

  init() {
    const gcalBtn = document.getElementById('btn-gcal');
    const icalBtn = document.getElementById('btn-ical');

    if (gcalBtn) {
      gcalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(this.getGoogleCalendarUrl(), '_blank');
      });
    }

    if (icalBtn) {
      icalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.downloadIcal();
      });
    }
  }

  getGoogleCalendarUrl() {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: this.eventData.title,
      dates: `${this.eventData.startDate}/${this.eventData.endDate}`,
      details: this.eventData.description,
      location: this.eventData.location
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  downloadIcal() {
    const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rab6 Studio//Elysium Collection//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${this.eventData.title}
DESCRIPTION:${this.eventData.description}
LOCATION:${this.eventData.location}
DTSTART:${this.eventData.startDate}
DTEND:${this.eventData.endDate}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'tareq-layla-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

window.calendarHelper = new CalendarHelper();
