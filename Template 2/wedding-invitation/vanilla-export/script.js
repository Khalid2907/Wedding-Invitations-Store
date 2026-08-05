// Localization Dictionaries (1:1 with Next.js app/dictionaries.ts)
const dictionaries = {
  en: {
    preloader: {
      invitation: "✦ The Invitation ✦",
      monogram: "L & O",
      title: "The Union of Layla & Omar",
      desc: "Within this digital envelope lies the story of our love and the celebration of our forever. We would be honored by your presence.",
      openBtn: "Open Invitation",
      location: "cairo, egypt",
      openText: "OPEN"
    },
    hero: {
      saveDate: "Save the date",
      names: 'Layla <span class="font-serif italic font-light text-gold-light opacity-90">&amp;</span> Omar',
      date: "DECEMBER 20, 2026",
      time: "8:00 PM",
      venue: "AL BUSTAN, CAIRO",
      whenLabel: "WHEN",
      timeLabel: "TIME",
      whereLabel: "WHERE",
      scrollDown: "Scroll Down",
    },
    timeline: {
      tag: "Our Journey",
      title: "How it all began",
      milestones: [
        {
          year: "2021",
          title: "The First Chapter",
          desc: "Hands found each other before words did. A simple coffee shop afternoon that turned into hours of shared dreams and stories.",
        },
        {
          year: "2022",
          title: "The Promise",
          desc: "A promise under the stars. Surrounded by quiet mountains, we promised to hold onto each other through every passing season.",
        },
        {
          year: "2024",
          title: "The Decision",
          desc: "Forever decided. A quiet evening overlook in the heart of Cairo, where two paths formally joined to form a single destination.",
        },
      ],
    },
    countdown: {
      tag: "The Countdown",
      title: "Counting down to forever",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      secs: "Secs",
      footnote: "* In the quiet elegance of Cairo, Egypt, under the warmth of winter skies.",
      venueTag: "Ceremony & Reception",
      venueTitle: "Al Bustan Estate",
      venueDate: "Sunday, December 20, 2026",
      venueTime: "8:00 PM (Cairo Standard Time)",
      venueAddress: "El-Giza Road, Al Bustan District, Cairo, Egypt",
      mapLink: "open in maps →",
    },
    gallery: {
      tag: "Visual Memories",
      title: "Frozen in time",
      instruction: "← drag or swipe to explore →",
      images: {
        1: { caption: "The details that bind us", category: "Details" },
        2: { caption: "Walking into our future", category: "Moments" },
        3: { caption: "Holding onto forever", category: "Promises" },
        4: { caption: "A toast to our love", category: "Celebrations" },
        5: { caption: "Under the golden light", category: "Scenery" },
      },
      credits: "Layla & Omar • 2026",
    },
    rsvp: {
      tag: "R.S.V.P",
      title: "Be our guest",
      deadline: "Kindly reply by November 20, 2026",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Sofia Smith",
      emailLabel: "Email Address *",
      emailPlaceholder: "e.g. sofia@example.com",
      attendLabel: "Will you attend?",
      acceptTitle: "Accepts with Pleasure",
      acceptSub: "I will be there to celebrate",
      declineTitle: "Declines with Regret",
      declineSub: "Celebrating from afar",
      guestsLabel: "Number of Guests",
      guest1: "1 Guest (Just me)",
      guest2: "2 Guests (Me & Plus One)",
      guest3: "3 Guests",
      guest4: "4 Guests",
      wishesLabel: "Wishes or dietary requirements",
      wishesPlaceholder: "Send a warm note to the couple...",
      sending: "Sending RSVP...",
      sendBtn: "Send Response",
      successTitle: "♥ Thank you, beautifully received.",
      successDesc: "Your response has been registered. We are incredibly excited to share our special day with you!",
      editBtn: "Edit response",
    },
    footer: {
      monogram: "L & O",
      love: "with all our love",
      details: "forever, beginning december twenty",
      subDetails: "cairo · 2026",
      credits: "© 2026 Layla & Omar • Made with love",
    },
  },
  ar: {
    preloader: {
      invitation: "✦ دعوة زفاف ✦",
      monogram: "ل & ع",
      title: "زفاف ليلى وعمر",
      desc: "داخل هذا المظروف الرقمي تكمن قصة حبنا والاحتفال بعهدنا الأبدي. يسعدنا ويشرفنا حضوركم ومشاركتكم فرحتنا.",
      openBtn: "فتح الدعوة",
      location: "القاهرة، مصر",
      openText: "افتح"
    },
    hero: {
      saveDate: "احفظوا التاريخ",
      names: 'ليلى <span class="font-serif italic font-light text-gold-light opacity-90">&amp;</span> عمر',
      date: "٢٠ ديسمبر ٢٠٢٦",
      time: "٨:٠٠ مساءً",
      venue: "البستان، القاهرة",
      whenLabel: "التاريخ",
      timeLabel: "الوقت",
      whereLabel: "المكان",
      scrollDown: "انزل للأسفل",
    },
    timeline: {
      tag: "رحلتنا",
      title: "كيف بدأت قصتنا",
      milestones: [
        {
          year: "٢٠٢١",
          title: "الفصل الأول",
          desc: "تلاقت أرواحنا قبل أن تنطق كلماتنا. بعد ظهر يوم بسيط في المقهى تحول إلى ساعات من الأحلام والقصص المشتركة.",
        },
        {
          year: "٢٠٢٢",
          title: "الوعد",
          desc: "عقدنا العهد تحت بريق النجوم. محاطين بجبال هادئة، تعهدنا بأن نتمسك ببعضنا البعض طوال فصول الحياة المتعاقبة.",
        },
        {
          year: "٢٠٢٤",
          title: "القرار",
          desc: "اخترنا الأبدية معًا. في أمسية هادئة تطل على قلب القاهرة، تلاقى مسارانا رسميًا ليشكلا وجهة واحدة مكللة بالحب.",
        },
      ],
    },
    countdown: {
      tag: "العد التنازلي",
      title: "نعد الأيام لجمع شملنا",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      secs: "ثواني",
      footnote: "* في القاهرة الهادئة والجميلة، تحت دفء سماء الشتاء.",
      venueTag: "الحفل والاستقبال",
      venueTitle: "قصر البستان",
      venueDate: "الأحد، ٢٠ ديسمبر ٢٠٢٦",
      venueTime: "٨:٠٠ مساءً (بتوقيت القاهرة)",
      venueAddress: "طريق الجيزة، حي البستان، القاهرة، مصر",
      mapLink: "افتح في الخرائط ←",
    },
    gallery: {
      tag: "ذكريات بصرية",
      title: "لحظات خالدة",
      instruction: "← اسحب للاستكشاف →",
      images: {
        1: { caption: "تفاصيل تجمعنا معًا", category: "تفاصيل" },
        2: { caption: "خطواتنا الأولى نحو المستقبل", category: "لحظات" },
        3: { caption: "نمسك بعهد الأبدية", category: "وعود" },
        4: { caption: "نخب لحبنا وجمعنا السعيد", category: "احتفالات" },
        5: { caption: "تحت دفء الضوء الذهبي", category: "مناظر" },
      },
      credits: "ليلى وعمر • ٢٠٢٦",
    },
    rsvp: {
      tag: "تأكيد الحضور",
      title: "كن ضيفنا العزيز",
      deadline: "يرجى الرد قبل ٢٠ نوفمبر ٢٠٢٦",
      nameLabel: "الاسم الكريم *",
      namePlaceholder: "مثال: صوفيا سميث",
      emailLabel: "البريد الإلكتروني *",
      emailPlaceholder: "مثال: sofia@example.com",
      attendLabel: "هل ستشرفنا بالحضور؟",
      acceptTitle: "أقبل بكل سرور",
      acceptSub: "سأكون هناك للاحتفال معكم",
      declineTitle: "أعتذر بأسف",
      declineSub: "سأحتفل معكم بقلبي من بعيد",
      guestsLabel: "عدد المرافقين",
      guest1: "مرافق واحد (أنا فقط)",
      guest2: "مرافقان (أنا ومرافق)",
      guest3: "٣ مرافقين",
      guest4: "٤ مرافقين",
      wishesLabel: "التهاني أو الاحتياجات الغذائية",
      wishesPlaceholder: "أرسل كلمة طيبة للعروسين...",
      sending: "جاري إرسال تأكيد الحضور...",
      sendBtn: "إرسال الرد",
      successTitle: "♥ شكرًا لك، تم استلام ردك الجميل.",
      successDesc: "تم تسجيل ردك بنجاح. نحن متحمسون للغاية لمشاركتك يومنا المميز والاحتفال معًا!",
      editBtn: "تعديل الرد",
    },
    footer: {
      monogram: "ل & ع",
      love: "مع كل حبنا وامتناننا",
      details: "معًا للأبد، ابتداءً من العشرين من ديسمبر",
      subDetails: "القاهرة · ٢٠٢٦",
      credits: "© ٢٠٢٦ ليلى وعمر • صُنع بكل حب",
    },
  },
};

// Global App State
let currentLang = "en";
let isOpen = false;
let rsvpStatus = "idle"; // 'idle' | 'submitting' | 'success'

// Helper to get nested object property by string path (e.g. 'preloader.title')
function getNestedTranslation(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

// Language Initialization & Switcher
function initLanguage() {
  const savedLang = localStorage.getItem("preferred-language");
  if (savedLang === "en" || savedLang === "ar") {
    currentLang = savedLang;
  } else {
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "ar") {
      currentLang = "ar";
    }
  }
  updateLanguageUI();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred-language", lang);
  updateLanguageUI();
}

function toggleLanguage() {
  setLanguage(currentLang === "en" ? "ar" : "en");
}

function updateLanguageUI() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  const t = dictionaries[currentLang];

  // Update Language Button Text
  const langBtnText = document.getElementById("lang-btn-text");
  if (langBtnText) {
    langBtnText.textContent = currentLang === "en" ? "العربية" : "English";
  }

  // Update elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getNestedTranslation(t, key);
    if (val !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", val);
        }
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update Timeline Milestones dynamically
  t.timeline.milestones.forEach((m, idx) => {
    const yearEl = document.getElementById(`timeline-year-${idx}`);
    const titleEl = document.getElementById(`timeline-title-${idx}`);
    const descEl = document.getElementById(`timeline-desc-${idx}`);
    if (yearEl) yearEl.textContent = m.year;
    if (titleEl) titleEl.textContent = m.title;
    if (descEl) descEl.textContent = `"${m.desc}"`;
  });

  // Update Gallery Image Captions & Categories
  [1, 2, 3, 4, 5].forEach((id) => {
    const imgInfo = t.gallery.images[id];
    if (imgInfo) {
      const capEl = document.getElementById(`gallery-caption-${id}`);
      const catEl = document.getElementById(`gallery-category-${id}`);
      if (capEl) capEl.textContent = `"${imgInfo.caption}"`;
      if (catEl) catEl.textContent = imgInfo.category;
    }
  });

  // Update RSVP select options
  const opt1 = document.getElementById("guest-opt-1");
  const opt2 = document.getElementById("guest-opt-2");
  const opt3 = document.getElementById("guest-opt-3");
  const opt4 = document.getElementById("guest-opt-4");
  if (opt1) opt1.textContent = t.rsvp.guest1;
  if (opt2) opt2.textContent = t.rsvp.guest2;
  if (opt3) opt3.textContent = t.rsvp.guest3;
  if (opt4) opt4.textContent = t.rsvp.guest4;
}

// Envelope Preloader Controls
function openInvitation() {
  isOpen = true;
  document.body.style.overflow = "";

  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");
  const langBtn = document.getElementById("lang-toggle-btn");

  if (preloader) {
    preloader.classList.add("preloader-hidden");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }

  if (mainContent) {
    mainContent.classList.remove("hidden-content");
    mainContent.classList.add("visible-content");
  }

  if (langBtn) {
    langBtn.classList.remove("btn-hidden");
    langBtn.classList.add("btn-visible");
  }
}

// Countdown Timer Engine
function calculateTimeLeft() {
  const targetDate = new Date("2026-12-20T20:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function updateCountdown() {
  const timeLeft = calculateTimeLeft();

  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minutesEl = document.getElementById("countdown-minutes");
  const secondsEl = document.getElementById("countdown-seconds");

  if (daysEl) daysEl.textContent = timeLeft.days.toString().padStart(2, "0");
  if (hoursEl) hoursEl.textContent = timeLeft.hours.toString().padStart(2, "0");
  if (minutesEl) minutesEl.textContent = timeLeft.minutes.toString().padStart(2, "0");
  if (secondsEl) secondsEl.textContent = timeLeft.seconds.toString().padStart(2, "0");
}

// Photo Gallery Carousel Scroll & Pagination
function initGalleryCarousel() {
  const carousel = document.getElementById("gallery-carousel");
  const dotsContainer = document.getElementById("gallery-dots");

  if (!carousel || !dotsContainer) return;

  const slidesCount = 5;

  function updateActiveDot() {
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    const totalScrollable = scrollWidth - clientWidth;
    if (totalScrollable <= 0) return;

    const scrollFraction = scrollLeft / totalScrollable;
    const activeIndex = Math.min(
      Math.round(scrollFraction * (slidesCount - 1)),
      slidesCount - 1
    );

    const dots = dotsContainer.querySelectorAll(".gallery-dot");
    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.className = "gallery-dot h-[3px] rounded-full transition-all duration-500 cursor-pointer w-10 bg-gold";
      } else {
        dot.className = "gallery-dot h-[3px] rounded-full transition-all duration-500 cursor-pointer w-4 bg-gold/20 hover:bg-gold/40";
      }
    });
  }

  carousel.addEventListener("scroll", updateActiveDot, { passive: true });
}

function scrollToSlide(index) {
  const carousel = document.getElementById("gallery-carousel");
  if (carousel) {
    const { scrollWidth, clientWidth } = carousel;
    const totalScrollable = scrollWidth - clientWidth;
    const scrollPosition = (index / 4) * totalScrollable;
    carousel.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }
}

// RSVP Form Controls & Handlers
function initRSVPForm() {
  const form = document.getElementById("rsvp-form");
  const attendanceYes = document.getElementById("attendance-yes");
  const attendanceNo = document.getElementById("attendance-no");
  const guestsContainer = document.getElementById("guests-container");
  const submitBtn = document.getElementById("rsvp-submit-btn");
  const submitBtnText = document.getElementById("rsvp-submit-text");
  const submitBtnIcon = document.getElementById("rsvp-submit-icon");
  const submitBtnSpinner = document.getElementById("rsvp-submit-spinner");
  const formWrapper = document.getElementById("rsvp-form-wrapper");
  const successCard = document.getElementById("rsvp-success-card");

  // Radio toggle for guests dropdown
  function handleAttendanceChange() {
    if (attendanceYes && attendanceYes.checked) {
      if (guestsContainer) {
        guestsContainer.style.display = "flex";
      }
    } else {
      if (guestsContainer) {
        guestsContainer.style.display = "none";
      }
    }
  }

  if (attendanceYes) attendanceYes.addEventListener("change", handleAttendanceChange);
  if (attendanceNo) attendanceNo.addEventListener("change", handleAttendanceChange);

  // Form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("rsvp-name");
      const emailInput = document.getElementById("rsvp-email");

      if (!nameInput || !nameInput.value || !emailInput || !emailInput.value) return;

      rsvpStatus = "submitting";
      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = dictionaries[currentLang].rsvp.sending;
      if (submitBtnIcon) submitBtnIcon.style.display = "none";
      if (submitBtnSpinner) submitBtnSpinner.style.display = "inline-block";

      setTimeout(() => {
        rsvpStatus = "success";
        if (formWrapper) formWrapper.style.display = "none";
        if (successCard) successCard.style.display = "flex";
      }, 1800);
    });
  }
}

function resetRSVPForm() {
  const form = document.getElementById("rsvp-form");
  const formWrapper = document.getElementById("rsvp-form-wrapper");
  const successCard = document.getElementById("rsvp-success-card");
  const submitBtn = document.getElementById("rsvp-submit-btn");
  const submitBtnText = document.getElementById("rsvp-submit-text");
  const submitBtnIcon = document.getElementById("rsvp-submit-icon");
  const submitBtnSpinner = document.getElementById("rsvp-submit-spinner");

  if (form) form.reset();

  rsvpStatus = "idle";
  if (submitBtn) submitBtn.disabled = false;
  if (submitBtnText) submitBtnText.textContent = dictionaries[currentLang].rsvp.sendBtn;
  if (submitBtnIcon) submitBtnIcon.style.display = "inline-block";
  if (submitBtnSpinner) submitBtnSpinner.style.display = "none";

  if (successCard) successCard.style.display = "none";
  if (formWrapper) formWrapper.style.display = "block";

  const attendanceYes = document.getElementById("attendance-yes");
  const guestsContainer = document.getElementById("guests-container");
  if (attendanceYes) attendanceYes.checked = true;
  if (guestsContainer) guestsContainer.style.display = "flex";
}

// Scroll Reveal Animations
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// Initialization on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Lock scroll on preloader startup
  document.body.style.overflow = "hidden";

  initLanguage();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initGalleryCarousel();
  initRSVPForm();
  initScrollReveal();
});
