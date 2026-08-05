/* ============================================================
   RAB6 LANGUAGE & I18N MODULE — ELYSIUM MORNING EDITION
   Default Language: Arabic ('ar') | Direction: 'rtl'
   ============================================================ */

const DICTIONARY = {
  ar: {
    dir: "rtl",
    langLabel: "English",
    monogram: "م & ر",
    coupleNames: "محمد & رحمة",
    weddingDateStr: "٠٨ / ٠٨ / ٢٠٢٦",
    weddingDateFull: "السبت، ٨ أغسطس ٢٠٢٦",
    waxPrompt: "انقر لكسر الشمع وفتح الدعوة",
    
    // Scene 01: Hero
    heroEyebrow: "— دعوة زفاف فاخرة —",
    heroSub: "يسرّنا دعوتكم لمشاركتنا أجمل لحظات العمر واحتفالنا بعقد قراننا في ليلة تشرق فيها المحبة.",
    
    // Scene 02: Story
    storyEyebrow: "حكايتنا",
    storyHeading: "فصول من الحب والجمال",
    storyChapters: [
      {
        year: "١١ يوليو ٢٠٢٥",
        title: "أوّل لقاء",
        body: "بدأت الحكاية بنظرة وشغف صادق، حيث تلاقت الأرواح لتكتب بداية فصل جديد من العشق والود والمودة."
      },
      {
        year: "٢٠ يوليو ٢٠٢٥",
        title: "نظرة العمر",
        body: "أيام عشناها سوية، نتعلم فيها معاني الصدق والاهتمام، ونبني أحلام الغد بخطوات ثابتة وقلوب نابضة."
      },
      {
        year: "٥ أغسطس ٢٠٢٥",
        title: "فرحة الشروق",
        body: "وها نحن اليوم نقف عند أعتاب ليلتنا الكبرى، لنبدأ معاً رحلة العمر الأبدي بحضوركم الكريم."
      },
      {
        year: "١٥ أغسطس ٢٠٢٥",
        title: "ذكريات من القلب",
        body: "لحظات سحرية جمعتنا تحت سماء واحدة، وعدنا فيها أن نظل معاً يداً بيد في السراء والضراء."
      }
    ],

    // Scene 03: Letter
    letterEyebrow: "رسالة حب",
    letterQuote: "«وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»",
    letterSign: "— محمد ورحمة",

    // Scene 04: Countdown
    countdownEyebrow: "العد التنازلي",
    countdownHeading: "نترقب اللقاء بكافة الشوق",
    daysLabel: "أيام",
    hoursLabel: "ساعات",
    minutesLabel: "دقائق",
    secondsLabel: "ثوانٍ",
    addToGoogle: "إضافة لتقويم Google",
    downloadIcs: "تحميل الملف التقويمي (.ics)",

    // Scene 05: Schedule
    scheduleEyebrow: "تفاصيل الحفل",
    scheduleHeading: "برنامج الليلة السعيدة",
    scheduleItems: [
      { time: "٠٩:٠٠ مساءً", title: "استقبال الضيوف الكرام", desc: "ترحيب حار ومشروبات ضيافة منعشة عند الوصول" },
      { time: "١٠:٠٠ مساءً", title: "مراسم الزفاف وعقد القران", desc: "لحظة الدخول الملكي وإشهار عقد القران المبارك" },
      { time: "١٠:٤٥ مساءً", title: "العشاء الفاخر", desc: "مأدبة عشاء ملكية تحت ضوء الشموع والأنغام" },
      { time: "١١:٣٠ مساءً", title: "الاحتفال والموسيقى", desc: "ليلة مليئة بالفرح والرقص حتى منتصف الليل" }
    ],

    // Scene 06: Gallery
    galleryEyebrow: "معرض الصور",
    galleryHeading: "لحظات وثّقها الزمان",

    // Scene 07: Venue
    venueEyebrow: "موقع الحفل",
    venueHeading: "مكان اللقاء",
    venueTitle: "قاعة أكاسيا",
    venueDesc: "يسعدنا حضوركم ومشاركتنا فرحتنا في هذا المكان المميز.",
    openGoogleMaps: "فتح في خرائط Google",

    // Scene 08: RSVP
    rsvpEyebrow: "تأكيد الحضور",
    rsvpHeading: "يسعدنا حضورك",
    rsvpNameLabel: "الاسم الكريم",
    rsvpAttendanceLabel: "تأكيد الحضور",
    rsvpAttending: "يشرفني الحضور بكل حب",
    rsvpDeclining: "أعتذر لعدم الإمكانية",
    rsvpGuestsLabel: "عدد المرافقين",
    rsvpSubmit: "إرسال التأكيد",
    rsvpSuccessMsg: "تم استلام تأكيدكم بنجاح! ننتظركم بشوق.",

    // Audio
    audioPrompt: "تشغيل الموسيقى لإكمال التجربة ✨",
    audioTrackTitle: "نبتدي منين الحكاية — عبد الحليم حافظ",

    // Scene 09: Closing
    closingText: "نشكركم من أعماق القلوب على مشاركتنا فرحتنا",
    closingNames: "محمد & رحمة"
  },

  en: {
    dir: "ltr",
    langLabel: "العربية",
    monogram: "M & R",
    coupleNames: "Mohammad & Rahma",
    weddingDateStr: "08 / 08 / 2026",
    weddingDateFull: "Saturday, August 8, 2026",
    waxPrompt: "Click to break wax seal & open invitation",

    // Audio
    audioPrompt: "Enable soundtrack for the full experience ✨",
    audioTrackTitle: "Nebtedy Menen El Hekaya — Abdel Halim Hafez",

    // Scene 01: Hero
    heroEyebrow: "— Luxury Wedding Invitation —",
    heroSub: "We cordially invite you to celebrate our union as we embark on a lifelong journey of love and joy.",

    // Scene 02: Story
    storyEyebrow: "Our Journey",
    storyHeading: "Chapters of Eternal Love",
    storyChapters: [
      {
        year: "July 11, 2025",
        title: "The First Hello",
        body: "A chance meeting that ignited a deep connection, writing the very first page of our love story."
      },
      {
        year: "July 20, 2025",
        title: "Growing Together",
        body: "Years filled with laughter, shared dreams, and building an unwavering foundation for our future."
      },
      {
        year: "August 5, 2025",
        title: "Our New Beginning",
        body: "And now we stand on the threshold of forever, honored to celebrate our grand day with you."
      },
      {
        year: "August 15, 2025",
        title: "Cherished Memories",
        body: "Magical moments beneath golden skies, pledging to stand hand in hand through every season."
      }
    ],

    // Scene 03: Letter
    letterEyebrow: "A Note of Love",
    letterQuote: "“And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them.”",
    letterSign: "— Mohammad & Rahma",

    // Scene 04: Countdown
    countdownEyebrow: "The Countdown",
    countdownHeading: "Counting Down to Our Celebration",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    addToGoogle: "Add to Google Calendar",
    downloadIcs: "Download iCal (.ics)",

    // Scene 05: Schedule
    scheduleEyebrow: "Wedding Details",
    scheduleHeading: "Order of the Day",
    scheduleItems: [
      { time: "09:00 PM", title: "Guest Arrival", desc: "Warm welcome and refreshments upon arrival" },
      { time: "10:00 PM", title: "Wedding Ceremony", desc: "The grand entrance and sacred wedding vows" },
      { time: "10:45 PM", title: "Royal Dinner", desc: "A candlelight banquet served with live melody" },
      { time: "11:30 PM", title: "Music & Dancing", desc: "An enchanting evening of celebration until midnight" }
    ],

    // Scene 06: Gallery
    galleryEyebrow: "Exhibition",
    galleryHeading: "Captured Moments of Joy",

    // Scene 07: Venue
    venueEyebrow: "The Venue",
    venueHeading: "Celebration Location",
    venueTitle: "Acacia Hall",
    venueDesc: "We look forward to hosting you at this exquisite location.",
    openGoogleMaps: "Open in Google Maps",

    // Scene 08: RSVP
    rsvpEyebrow: "RSVP",
    rsvpHeading: "Kindly Confirm Your Presence",
    rsvpNameLabel: "Your Full Name",
    rsvpAttendanceLabel: "Attendance",
    rsvpAttending: "Joyfully Accept",
    rsvpDeclining: "Regretfully Decline",
    rsvpGuestsLabel: "Number of Guests",
    rsvpSubmit: "Submit Response",
    rsvpSuccessMsg: "Thank you! Your response has been recorded.",

    // Scene 09: Closing
    closingText: "With all our love and deepest gratitude",
    closingNames: "Mohammad & Rahma"
  }
};

let currentLang = 'ar';

function getTranslation() {
  return DICTIONARY[currentLang];
}

function setLanguage(lang) {
  if (!DICTIONARY[lang]) return;
  currentLang = lang;

  const t = DICTIONARY[lang];
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', t.dir);

  // Update UI text targets
  const langLabelEl = document.getElementById('lang-label');
  if (langLabelEl) langLabelEl.textContent = t.langLabel;

  const audioPromptEl = document.getElementById('audio-prompt-text');
  if (audioPromptEl) audioPromptEl.textContent = t.audioPrompt;

  const audioTitleEl = document.getElementById('audio-track-title');
  if (audioTitleEl) audioTitleEl.textContent = t.audioTrackTitle;

  // Dispatch custom event for modular listeners
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, t } }));
}

function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(newLang);
}

window.LanguageModule = {
  getTranslation,
  setLanguage,
  toggleLanguage,
  getCurrentLang: () => currentLang
};
