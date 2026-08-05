// ============================================================
// MOHAMMAD & YARA — Noir Soirée · Vanilla JavaScript App
// Jumeirah Beach Hotel, Dubai · 14 February 2027
// ============================================================

// ── Translations ──────────────────────────────────────────
const T = {
  en: {
    dir: "ltr",
    langLabel: "العربية",
    preEyebrow: "— An Invitation Written in Starlight —",
    openWithLove: "Open with longing",
    heroEyebrow: "With hearts full of wonder · MMXXVII",
    heroTitle: "Mohammad & Yara",
    heroSub: "request the honour of your presence",
    heroPoem1: "Where the Gulf breathes silver beneath the night sky,",
    heroPoem2: "and the city burns gold along the shore,",
    heroPoem3: "we invite you to a soirée wrapped in",
    heroPoemLove: "— forever",
    heroDate: "14 · February · 2027",
    heroPlace: "Valentines Night · Dubai, UAE",
    scrollHint: "Descend with us",

    countdownEyebrow: "The night draws near",
    countdownTitle: "until we become",
    countdownScript: "one",
    dLabel: "Days",
    hLabel: "Hours",
    mLabel: "Minutes",
    sLabel: "Seconds",

    storyEyebrow: "A story that began in silence",
    storyTitleA: "Their",
    storyTitleB: "Story",
    storyChapters: [
      {
        year: "2020",
        chapter: "The Chance Meeting",
        img: "assets/Gemini_Generated_Image_umgfmpumgfmpumgf.png",
        body: "It was a rainy Thursday evening in Dubai when Mohammad walked into the wrong gallery opening. The art was abstract, the crowd was strangers — and then there was Yara, standing alone in front of a painting that looked exactly like the sea at 3am. He asked what she saw in it. She told him. They talked until the gallery closed around them.",
        side: "left",
      },
      {
        year: "2021",
        chapter: "Falling Into Orbit",
        img: "assets/Gemini_Generated_Image_u5ntmku5ntmku5nt.png",
        body: "A year of morning messages and late drives along Jumeirah Beach Road, of watching storms roll in over the Gulf and sharing playlists that became a private language. Mohammad learned that Yara laughs before the punchline. Yara discovered that Mohammad always orders for two, even when alone — just in case.",
        side: "right",
      },
      {
        year: "2023",
        chapter: "The Question",
        img: "assets/Gemini_Generated_Image_11rsah11rsah11rs.png",
        body: "On a quiet rooftop on Valentine's Night, with the city laid out like scattered diamonds below them, Mohammad placed a ring on the table between their glasses and said simply: \"I want every ordinary Tuesday with you. And every extraordinary one.\" She had already said yes before she picked it up.",
        side: "left",
      },
      {
        year: "2027",
        chapter: "The Soirée",
        img: "assets/Gemini_Generated_Image_1rluds1rluds1rlu.png",
        body: "And now, on the most romantic night of the year, in the place where they first truly saw each other, they choose to begin. They cannot imagine this night without the people who made them who they are. So they ask — with warmth and deep gratitude — will you be there?",
        side: "right",
      },
    ],

    letterEyebrow: "A private word, just for you",
    letterTitle: "Dearest guest",
    letterP1a: "There is a particular magic in the Jumeirah Beach Hotel at night — the way the Gulf holds the city lights in its dark water, the way the air carries salt and",
    letterP1b: " something like possibility.",
    letterP1c: "",
    letterP2a: "This is the place Mohammad and Yara chose for the most important evening of their lives. They ask only that you come as you are — open, warm, ready to celebrate ",
    letterP2b: "a love that chose them both.",
    letterSign: "— with love and gratitude, Mohammad & Yara",

    journeyEyebrow: "The evening, composed",
    journeyTitleA: "The",
    journeyTitleB: "Night's Programme",
    journey: [
      { hour: "18:00", title: "Champagne on Arrival",  body: "Glasses of cold champagne and canapés on the terrace as the sun dissolves into the Arabian Gulf and the first stars appear.",           accent: "Golden Hour"   },
      { hour: "20:00", title: "The Ceremony",           body: "In a candlelit room overlooking the sea, Mohammad and Yara will speak the words that make everything permanent.",                         accent: "Candlelight"  },
      { hour: "21:30", title: "The Grand Dinner",       body: "A long table, low lighting, and a menu that moves through the evening like a slow, beautiful conversation. Stay as long as you like.",  accent: "Midnight Blue" },
      { hour: "23:30", title: "Dance Until Morning",    body: "The floor is yours. The music is theirs. The night will stretch as far as you're willing to take it.",                                  accent: "Starlight"    },
    ],

    venueEyebrow: "Where we gather",
    venueTitleA: "Jumeirah",
    venueTitleB: "Beach Hotel",
    venueP1a: "Rising above the Arabian Gulf in ",
    venueP1b: "Dubai",
    venueP1c: ", the Jumeirah Beach Hotel is a sail-shaped icon on the Jumeirah coastline — a landmark of understated luxury with an unobstructed view of the Burj Al Arab and the open sea.",
    venueP2: "Come for the sunset. Stay for the stars.",
    venueAddress: "Jumeirah Beach Road · Umm Suqeim · Dubai, UAE",
    venueMap: "Find us on the map",

    guidelinesEyebrow: "A few quiet notes",
    guidelinesTitleA: "Please",
    guidelinesTitleB: "read with care",
    guidelines: [
      { title: "Dress Code",  body: "Noir Soirée — formal or black tie. We invite you into a world of obsidian, silver, and deep velvet. Arrive dressed for the occasion." },
      { title: "The Evening", body: "This is an adults' evening of intimacy and celebration. Children are warmly welcomed for the early reception." },
      { title: "Arrival",     body: "Gates open at 5:30 PM. Please arrive before sunset — the view from the terrace at dusk is something you will not want to miss." },
    ],

    rsvpTitle: "Say you'll be there",
    rsvpBy: "Kindly reply by the first of January 2027",
    rsvpBtn: "Yes, with all my heart",
    rsvpFoot: "Mohammad & Yara cannot wait to share this night with you.",
    footer: "Made with",
    footerTail: "in Dubai · Mohammad & Yara · MMXXVII",
  },

  ar: {
    dir: "rtl",
    langLabel: "English",
    preEyebrow: "— دعوةٌ كُتبت بضوء النجوم —",
    openWithLove: "افتحها باشتياق",
    heroEyebrow: "بقلوبٍ مفعمة بالدهشة · ٢٠٢٧",
    heroTitle: "محمد ويارا",
    heroSub: "يشرّفانكم بدعوتكم لحضور زفافهما",
    heroPoem1: "حيث يتنفّس الخليج فضّةً تحت سماء الليل،",
    heroPoem2: "وتحترق المدينة ذهباً على الشاطئ،",
    heroPoem3: "ندعوكم إلى سهرةٍ يلفّها",
    heroPoemLove: "— الأبد",
    heroDate: "١٤ · فبراير · ٢٠٢٧",
    heroPlace: "ليلة الحبّ · دبيّ، الإمارات",
    scrollHint: "انزلوا معنا",

    countdownEyebrow: "تقترب الليلة",
    countdownTitle: "حتى نصبح",
    countdownScript: "واحداً",
    dLabel: "أيام",
    hLabel: "ساعات",
    mLabel: "دقائق",
    sLabel: "ثوانٍ",

    storyEyebrow: "حكايةٌ بدأت بصمت",
    storyTitleA: "قصّتهما",
    storyTitleB: "",
    storyChapters: [
      {
        year: "٢٠٢٠",
        chapter: "اللقاء المصادَف",
        img: "assets/Gemini_Generated_Image_umgfmpumgfmpumgf.png",
        body: "كانت ليلة خميس ماطرة في دبيّ حين دخل محمد إلى معرض فنيّ بالخطأ. كان الفن تجريديًا والحضور غرباء — وكانت يارا تقف وحدها أمام لوحةٍ تشبه البحر في الثالثة فجراً. سألها ماذا ترى فيها. فأخبرته. وتحدّثا حتى أُغلق المعرض من حولهما.",
        side: "left",
      },
      {
        year: "٢٠٢١",
        chapter: "السقوط في الفلك",
        img: "assets/Gemini_Generated_Image_u5ntmku5ntmku5nt.png",
        body: "عامٌ من الرسائل الصباحية والسياقة الليليّة على طريق جميرا، ومن مشاهدة العواصف تعبر الخليج ومشاركة قوائم تشغيل غدت لغةً خاصّة بهما. تعلّم محمد أنّ يارا تضحك قبل ختام النكتة. واكتشفت يارا أنّ محمداً يطلب دائمًا للاثنين، حتى وهو وحده — احتياطاً.",
        side: "right",
      },
      {
        year: "٢٠٢٣",
        chapter: "السؤال",
        img: "assets/Gemini_Generated_Image_11rsah11rsah11rs.png",
        body: "في ليلة هادئة على سطحٍ رومانسيّ، والمدينة تحتهما كأنّها فيضٌ من الماس المتناثر، وضع محمد الخاتم بين كأسَيهما وقال ببساطة: «أريد كلّ ثلاثاء عاديٍّ معكِ. وكلّ ثلاثاء استثنائيّ.» قالت نعم قبل أن ترفعه.",
        side: "left",
      },
      {
        year: "٢٠٢٧",
        chapter: "السهرة",
        img: "assets/Gemini_Generated_Image_1rluds1rluds1rlu.png",
        body: "والآن، في أجمل ليالي العام، وفي المكان الذي رأيا فيه بعضهما حقًا لأول مرة، يختاران أن يبدآ. لا يتخيّلان هذه الليلة بعيداً عمّن صنعاهما ما هما عليه. ويسألان — بكلّ دفء وامتنان عميق — هل ستكونون هناك؟",
        side: "right",
      },
    ],

    letterEyebrow: "كلمةٌ خاصّة، لكِ وحدكِ",
    letterTitle: "أعزّ الضيوف",
    letterP1a: "ثمّة سحرٌ خاصّ في فندق جميرا بيتش ليلاً — الطريقة التي يعكس فيها الخليج أضواء المدينة في مائه الداكن، وتحمل فيها الريحُ الملح",
    letterP1b: " وشيئاً يشبه الإمكان.",
    letterP1c: "",
    letterP2a: "هذا هو المكان الذي اختاره محمد ويارا لأهمّ أمسية في حياتهما. لا يطلبان سوى أن تأتوا كما أنتم — مفتوحين، دافئين، مستعدّين للاحتفال ",
    letterP2b: "بحبٍّ اختار كليهما.",
    letterSign: "— بالحبّ والامتنان، محمد ويارا",

    journeyEyebrow: "الأمسية، مُرتَّبة",
    journeyTitleA: "برنامج",
    journeyTitleB: "الليلة",
    journey: [
      { hour: "١٨:٠٠", title: "شمبانيا الوصول",    body: "كؤوس شمبانيا باردة ومقبّلات على الشرفة وتذوب الشمس في الخليج العربيّ وتظهر أولى النجوم.",                                 accent: "ساعة الذهب"    },
      { hour: "٢٠:٠٠", title: "مراسم الزفاف",      body: "في قاعةٍ مضاءة بالشموع تطلّ على البحر، سيُلقي محمد ويارا الكلمات التي تجعل كلّ شيء دائماً.",                              accent: "ضوء الشموع"    },
      { hour: "٢١:٣٠", title: "العشاء الكبير",      body: "طاولةٌ طويلة وإضاءةٌ خافتة وقائمة طعام تتقدّم مع الأمسية كمحادثةٍ رصينة جميلة. ابقوا ما شئتم.",                           accent: "الأزرق الداكن"  },
      { hour: "٢٣:٣٠", title: "الرقص حتى الفجر",   body: "أرضية الرقص لكم. الموسيقى لهما. والليل يمتدّ بعيداً بقدر ما تريدون.",                                                      accent: "ضوء النجوم"    },
    ],

    venueEyebrow: "حيث نجتمع",
    venueTitleA: "فندق جميرا",
    venueTitleB: "بيتش هوتيل",
    venueP1a: "يرتفع فوق الخليج العربيّ في ",
    venueP1b: "دبيّ",
    venueP1c: "، فندق جميرا بيتش هوتيل أيقونةٌ بتصميم الشراع على ساحل جميرا — معلمٌ من معالم الفخامة الهادئة مع إطلالةٍ لا عائق أمامها على برج العرب والبحر المفتوح.",
    venueP2: "تعالوا على الغروب. وابقوا حتى تُشعل النجوم السماء.",
    venueAddress: "شارع جميرا بيتش · أم سقيم · دبيّ، الإمارات",
    venueMap: "موقعنا على الخريطة",

    guidelinesEyebrow: "بعض الملاحظات الهادئة",
    guidelinesTitleA: "نرجو",
    guidelinesTitleB: "القراءة باهتمام",
    guidelines: [
      { title: "الزيّ الرسميّ",  body: "سهرة نواريّة — ارتداء رسميّ أو بدلة سوداء. ندعوكم إلى عالمٍ من السواد والفضّة والمخمل العميق. تعالوا بأبهى حلّة." },
      { title: "الأمسية",        body: "هذه أمسية بالغين للحميميّة والاحتفال. الأطفال مرحّبٌ بهم بدفء في حفل الاستقبال الأوّل." },
      { title: "الوصول",         body: "تُفتح البوابات الساعة الخامسة والنصف مساءً. تعالوا قبل الغروب — المشهد من الشرفة عند الغسق شيءٌ لن تودّوا تفويته." },
    ],

    rsvpTitle: "قولوا إنّكم ستأتون",
    rsvpBy: "يُرجى الردّ قبل أوّل يناير ٢٠٢٧",
    rsvpBtn: "نعم، بكلّ قلبي",
    rsvpFoot: "محمد ويارا لا يُطيقان الانتظار لمشاركة هذه الليلة معكم.",
    footer: "صُنع بـ",
    footerTail: "في دبيّ · محمد ويارا · ٢٠٢٧",
  },
};

// ── State ─────────────────────────────────────────────────
let currentLang = "en";
let isOpened = false;
const EVENT_DATE = new Date("2027-02-14T18:00:00").getTime();

// ── SVG Helpers ───────────────────────────────────────────
function svgHeart(cls = "") {
  return `<svg class="svg-heart ${cls}" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s-7-4.35-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23 8.5 21.5 12 19 16.65 12 21 12 21z"/>
  </svg>`;
}

function svgSprig(cls = "", style = "") {
  return `<svg viewBox="0 0 60 100" class="${cls}" style="${style}" aria-hidden="true">
    <g class="svg-sprig-group">
      <path class="svg-sprig-stem" d="M30 0 L30 100"/>
      <ellipse cx="20" cy="20" rx="8" ry="4" transform="rotate(-30 20 20)" fill-opacity="0.5"/>
      <ellipse cx="40" cy="30" rx="8" ry="4" transform="rotate(30 40 30)"  fill-opacity="0.5"/>
      <ellipse cx="18" cy="45" rx="8" ry="4" transform="rotate(-30 18 45)" fill-opacity="0.5"/>
      <ellipse cx="42" cy="55" rx="8" ry="4" transform="rotate(30 42 55)"  fill-opacity="0.5"/>
      <ellipse cx="22" cy="72" rx="7" ry="3.5" transform="rotate(-30 22 72)" fill-opacity="0.5"/>
      <ellipse cx="38" cy="82" rx="7" ry="3.5" transform="rotate(30 38 82)"  fill-opacity="0.5"/>
    </g>
  </svg>`;
}

// ── Countdown ─────────────────────────────────────────────
let countdownInterval = null;

function getCountdown() {
  const diff = Math.max(0, EVENT_DATE - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

function updateCountdown() {
  const { d, h, m, s } = getCountdown();
  const t = T[currentLang];
  const values = [
    { id: "cd-d", v: d, label: t.dLabel },
    { id: "cd-h", v: h, label: t.hLabel },
    { id: "cd-m", v: m, label: t.mLabel },
    { id: "cd-s", v: s, label: t.sLabel },
  ];
  values.forEach(({ id, v, label }) => {
    const numEl = document.getElementById(id + "-num");
    const lblEl = document.getElementById(id + "-lbl");
    if (numEl) numEl.textContent = String(v).padStart(2, "0");
    if (lblEl) lblEl.textContent = label;
  });
}

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

// ── Sparkles (preloader) ──────────────────────────────────
function createSparkles(container) {
  for (let i = 0; i < 28; i++) {
    const top   = (i * 137) % 100;
    const left  = (i * 53)  % 100;
    const dur   = 1.8 + ((i * 7) % 20) / 10;
    const delay = -(i * 0.14);
    const dot   = document.createElement("span");
    dot.className = "sparkle-dot";
    dot.style.cssText = `top:${top}%;left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;`;
    container.appendChild(dot);
  }
}

// ── Floating Debris (noir particles) ─────────────────────
function createPetals() {
  const container = document.getElementById("petals-container");
  if (!container) return;
  container.innerHTML = "";
  // Instead of petals: drifting silver/gold orbs
  for (let i = 0; i < 18; i++) {
    const left  = (i * 5.8 + Math.random() * 4) % 100;
    const dur   = 14 + Math.random() * 16;
    const delay = -(Math.random() * 25);
    const size  = 3 + Math.random() * 5;
    const isGold = Math.random() > 0.5;
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.cssText = `left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;`;
    petal.innerHTML = `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${isGold ? "rgba(212,175,55,0.6)" : "rgba(200,208,220,0.5)"};box-shadow:0 0 ${size * 2}px ${isGold ? "rgba(212,175,55,0.4)" : "rgba(200,208,220,0.3)"};"></div>`;
    container.appendChild(petal);
  }
}

// ── Scroll-reveal ─────────────────────────────────────────
function initReveal() {
  const elements = document.querySelectorAll("[data-reveal]:not(.revealed)");
  if (!elements.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const from  = el.dataset.reveal || "up";
        const delay = el.dataset.delay  || "0";
        el.style.animationDelay = delay + "ms";
        el.classList.remove("reveal-hidden");
        el.classList.add("revealed");
        if (from === "left")       el.classList.add("reveal-left");
        else if (from === "right") el.classList.add("reveal-right");
        else                       el.classList.add("reveal-up");
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => {
    if (!el.classList.contains("revealed")) {
      el.classList.add("reveal-hidden");
      io.observe(el);
    }
  });
}

// ── Antigravity Particle & Filament Canvas — Noir Edition ─
class AntigravityCanvas {
  constructor() {
    this.canvas = document.getElementById("antigravity-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.filaments = [];
    this.burstParticles = [];
    this.resize();
    this.initParticles();
    this.initFilaments();
    window.addEventListener("resize", () => this.resize());
    requestAnimationFrame((t) => this.animate(t));
  }

  resize() {
    this.width  = this.canvas.width  = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < 55; i++) {
      // Mix of silver-white and faint rose-gold orbs
      const isGold = Math.random() > 0.65;
      this.particles.push({
        x:          Math.random() * this.width,
        y:          Math.random() * this.height,
        radius:     Math.random() * 1.8 + 0.5,
        alpha:      Math.random() * 0.5 + 0.15,
        vx:         (Math.random() - 0.5) * 0.25,
        vy:         -0.15 - Math.random() * 0.3,
        pulseSpeed: 0.008 + Math.random() * 0.018,
        isGold,
      });
    }
  }

  initFilaments() {
    this.filaments = [];
    for (let i = 0; i < 10; i++) {
      this.filaments.push({
        x:      Math.random() * this.width,
        y:      Math.random() * this.height,
        length: 60 + Math.random() * 100,
        angle:  Math.random() * Math.PI * 2,
        speed:  0.002 + Math.random() * 0.003,
        alpha:  0.08 + Math.random() * 0.18,
        isGold: Math.random() > 0.5,
      });
    }
  }

  triggerDisintegration(originX, originY) {
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 8;
      const isGold = Math.random() > 0.4;
      this.burstParticles.push({
        x:       originX,
        y:       originY,
        vx:      Math.cos(angle) * speed,
        vy:      Math.sin(angle) * speed - 2,
        size:    2 + Math.random() * 6,
        alpha:   1,
        life:    1,
        decay:   0.007 + Math.random() * 0.012,
        isHeart: Math.random() > 0.45,
        // Noir burst: rose-gold and silver
        color:   isGold ? "rgba(201, 149, 107, " : "rgba(200, 208, 220, ",
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.shadowBlur = 0;

    // Silver-white and rose-gold light particles
    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.004;

      if (p.y < -10) p.y = this.height + 10;
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      const a = Math.max(0.05, Math.min(0.6, p.alpha));
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      if (p.isGold) {
        this.ctx.fillStyle = `rgba(212, 175, 55, ${a})`;
        this.ctx.shadowBlur  = 8;
        this.ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
      } else {
        this.ctx.fillStyle = `rgba(210, 218, 228, ${a})`;
        this.ctx.shadowBlur  = 6;
        this.ctx.shadowColor = "rgba(200, 208, 220, 0.3)";
      }
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });

    // Translucent silver / rose-gold filaments
    this.filaments.forEach((f) => {
      f.angle += f.speed;
      const endX = f.x + Math.cos(f.angle) * f.length;
      const endY = f.y + Math.sin(f.angle) * f.length;

      this.ctx.beginPath();
      this.ctx.moveTo(f.x, f.y);
      this.ctx.quadraticCurveTo(
        f.x + Math.sin(f.angle) * 35,
        f.y + Math.cos(f.angle) * 35,
        endX,
        endY
      );
      this.ctx.strokeStyle = f.isGold
        ? `rgba(201, 149, 107, ${f.alpha})`
        : `rgba(158, 168, 184, ${f.alpha * 0.7})`;
      this.ctx.lineWidth = f.isGold ? 1.0 : 0.7;
      this.ctx.stroke();
    });

    // Disintegration burst
    for (let i = this.burstParticles.length - 1; i >= 0; i--) {
      const bp = this.burstParticles[i];
      bp.x  += bp.vx;
      bp.y  += bp.vy;
      bp.vx *= 0.975;
      bp.vy *= 0.975;
      bp.life -= bp.decay;

      if (bp.life <= 0) { this.burstParticles.splice(i, 1); continue; }

      this.ctx.save();
      this.ctx.translate(bp.x, bp.y);
      this.ctx.fillStyle = `${bp.color}${bp.life})`;
      if (bp.isHeart) {
        this.ctx.beginPath();
        this.ctx.arc(-bp.size / 3, -bp.size / 3, bp.size / 3, 0, Math.PI);
        this.ctx.arc( bp.size / 3, -bp.size / 3, bp.size / 3, 0, Math.PI);
        this.ctx.lineTo(0, bp.size / 2);
        this.ctx.closePath();
        this.ctx.fill();
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, bp.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

let antigravityCanvas = null;

// ── Preloader / Envelope — Noir Edition ───────────────────
function buildPreloader(t) {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  preloader.classList.remove("opening");

  const sparklesDiv = document.createElement("div");
  sparklesDiv.style.cssText = "position:absolute;inset:0;overflow:hidden;pointer-events:none;";
  createSparkles(sparklesDiv);

  preloader.innerHTML = `
    <div id="preloader-blush"></div>
    <p id="preloader-eyebrow" class="eyebrow shimmer">${t.preEyebrow}</p>

    <div class="floating-element" style="position:relative; display:flex; justify-content:center; align-items:center;">
      <!-- Noir Orbiting Debris Field: silver & gold orbs -->
      <div id="debris-aura" style="position:absolute; width:340px; height:340px; pointer-events:none; z-index:2;" aria-hidden="true">
        <!-- Silver orb 1 -->
        <div style="position:absolute; top:0; left:50%; animation: orbitDebris 14s linear infinite;">
          <div style="width:6px;height:6px;background:rgba(200,208,220,0.8);border-radius:50%;box-shadow:0 0 10px rgba(200,208,220,0.6);"></div>
        </div>
        <!-- Gold orb 1 -->
        <div style="position:absolute; top:50%; left:100%; animation: orbitDebris 18s linear infinite reverse;">
          <div style="width:7px;height:7px;background:rgba(212,175,55,0.9);border-radius:50%;box-shadow:0 0 12px rgba(212,175,55,0.6);"></div>
        </div>
        <!-- Silver orb 2 -->
        <div style="position:absolute; bottom:0; left:30%; animation: orbitDebris 11s linear infinite;">
          <div style="width:5px;height:5px;background:rgba(158,168,184,0.7);border-radius:50%;box-shadow:0 0 8px rgba(158,168,184,0.4);"></div>
        </div>
        <!-- Rose-gold orb -->
        <div style="position:absolute; top:20%; left:5%; animation: orbitDebris 22s linear infinite;">
          <div style="width:5px;height:5px;background:rgba(201,149,107,0.8);border-radius:50%;box-shadow:0 0 10px rgba(201,149,107,0.5);"></div>
        </div>
        <!-- Diamond spark -->
        <div style="position:absolute; top:70%; left:90%; animation: orbitDebris 9s linear infinite reverse;">
          <div style="width:4px;height:4px;background:rgba(228,235,245,0.9);border-radius:50%;box-shadow:0 0 8px rgba(228,235,245,0.7);"></div>
        </div>
      </div>

      <button id="envelope-btn" aria-label="Open envelope">
        <div id="envelope-letter">
          <div id="envelope-letter-inner">
            <!-- Diamond ornament on letter card -->
            <svg width="28" height="22" viewBox="0 0 40 28" style="margin:0 auto 0.5rem auto; display:block; color:var(--champagne)" aria-hidden="true">
              <path d="M20 2 L28 14 L20 26 L12 14 Z" fill="none" stroke="currentColor" stroke-width="1.2"/>
              <path d="M20 8 L24 14 L20 20 L16 14 Z" fill="currentColor" fill-opacity="0.3"/>
            </svg>
            <p class="eyebrow" id="env-letter-eyebrow">${t.heroEyebrow}</p>
            <p class="script-hand" style="font-size:clamp(1.75rem,4.5vw,2.1rem)" id="env-letter-title">${t.heroTitle}</p>
          </div>
        </div>

        <!-- Envelope body: dark obsidian navy -->
        <div id="envelope-body" class="bloom-in">
          <svg class="envelope-pocket-svg" viewBox="0 0 100 68" preserveAspectRatio="none" shape-rendering="geometricPrecision">
            <defs>
              <linearGradient id="noir-interior" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stop-color="#0D1424"/>
                <stop offset="50%"  stop-color="#111C34"/>
                <stop offset="100%" stop-color="#0A0F1E"/>
              </linearGradient>
              <linearGradient id="side-fold-left" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stop-color="#1A2440"/>
                <stop offset="100%" stop-color="#0E1828"/>
              </linearGradient>
              <linearGradient id="side-fold-right" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%"   stop-color="#162036"/>
                <stop offset="100%" stop-color="#0C1422"/>
              </linearGradient>
              <linearGradient id="bottom-fold-grad" x1="0.5" y1="1" x2="0.5" y2="0">
                <stop offset="0%"   stop-color="#0E1828"/>
                <stop offset="65%"  stop-color="#14213E"/>
                <stop offset="100%" stop-color="#1A2A4A"/>
              </linearGradient>
              <filter id="pocket-fold-shadow" x="-10%" y="-20%" width="120%" height="140%">
                <feDropShadow dx="0" dy="-2" stdDeviation="2" flood-color="#000010" flood-opacity="0.5"/>
              </filter>
            </defs>

            <!-- Deep navy interior -->
            <rect width="100" height="68" fill="url(#noir-interior)"/>

            <!-- Side folds -->
            <path d="M0 0 L48 33 Q50 34 52 33 L100 0 L100 68 L0 68 Z" fill="none"/>
            <path d="M0 0 L48 33 L0 68 Z" fill="url(#side-fold-left)"/>
            <path d="M100 0 L52 33 L100 68 Z" fill="url(#side-fold-right)"/>

            <!-- Bottom fold -->
            <path d="M0 68 L48 33.5 Q50 32 52 33.5 L100 68 Z" fill="url(#bottom-fold-grad)" filter="url(#pocket-fold-shadow)"/>

            <!-- Champagne gold foil crease strokes -->
            <path d="M0 68 L48 33.5 Q50 32 52 33.5 L100 68" fill="none" stroke="#D4AF37" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
            <path d="M0 0 L48 33 M100 0 L52 33" fill="none" stroke="#D4AF37" stroke-width="0.7" stroke-linecap="round" opacity="0.4"/>
          </svg>
          <div id="envelope-overlay"></div>
        </div>

        <!-- Flap: dark with subtle gradient -->
        <div id="envelope-flap">
          <svg viewBox="0 0 100 48" preserveAspectRatio="none" shape-rendering="geometricPrecision">
            <defs>
              <linearGradient id="flap-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stop-color="#161F36"/>
                <stop offset="60%"  stop-color="#101828"/>
                <stop offset="100%" stop-color="#0C1220"/>
              </linearGradient>
              <filter id="flap-shadow" x="-10%" y="0%" width="120%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
              </filter>
            </defs>
            <path d="M0 0 L100 0 L52 46.5 Q50 48 48 46.5 Z" fill="url(#flap-grad)" filter="url(#flap-shadow)"/>
            <path d="M0 0 L48 46.5 Q50 48 52 46.5 L100 0" fill="none" stroke="#D4AF37" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
          </svg>
          <div id="wax-seal">
            ${svgHeart("heartbeat")}
          </div>
        </div>
      </button>
    </div>

    <div id="open-label" style="margin-top: 2rem;">
      <span class="label-text woven-light-label" id="open-with-love-text">${t.openWithLove}</span>
      <div class="velvet-heart-pearl pulse-glow" style="width:1.75rem; height:1.75rem;">
        ${svgHeart("")}
      </div>
    </div>
  `;

  preloader.insertBefore(sparklesDiv, preloader.firstChild);

  const btn = document.getElementById("envelope-btn");
  let opening = false;

  // Interactive 3D Mouse Parallax
  const wrapper = btn.closest(".floating-element");
  if (wrapper) {
    wrapper.addEventListener("mousemove", (e) => {
      if (opening) return;
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      btn.style.transform = `perspective(1000px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale(1.04)`;
    });
    wrapper.addEventListener("mouseleave", () => {
      if (opening) return;
      btn.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
    });
  }

  btn.addEventListener("click", (evt) => {
    if (opening) return;
    opening = true;
    btn.disabled = true;
    btn.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)`;

    if (antigravityCanvas) {
      const rect   = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      antigravityCanvas.triggerDisintegration(centerX, centerY);
    }

    document.getElementById("envelope-flap")?.classList.add("opening-flap");
    document.getElementById("wax-seal")?.classList.add("breaking");
    document.getElementById("envelope-letter")?.classList.add("rising");
    document.getElementById("envelope-body")?.classList.add("fading");
    document.getElementById("open-with-love-text")?.classList.add("scaling");

    setTimeout(() => {
      preloader.classList.add("opening");
      setTimeout(() => {
        preloader.style.display = "none";
        document.body.style.overflow = "";
        isOpened = true;
        createPetals();
        initReveal();
      }, 750);
    }, 1250);
  });
}

// ── Story Section ─────────────────────────────────────────
function renderStory(t) {
  const eyebrow = document.getElementById("story-eyebrow");
  const titleA  = document.getElementById("story-title-a");
  const titleB  = document.getElementById("story-title-b");
  if (eyebrow) eyebrow.textContent = t.storyEyebrow;
  if (titleA)  titleA.textContent  = t.storyTitleA;
  if (titleB)  titleB.textContent  = t.storyTitleB;

  const list = document.getElementById("story-list");
  if (!list) return;
  list.innerHTML = "";

  t.storyChapters.forEach((ch, i) => {
    const isRight = ch.side === "right";
    const item    = document.createElement("div");
    item.className = "story-item" + (isRight ? " story-item--reverse" : "");
    item.setAttribute("data-reveal", isRight ? "right" : "left");
    item.setAttribute("data-delay", String(i * 100));

    // Story image or noir placeholder
    const imgOrPlaceholder = ch.img
      ? `<img src="${ch.img}" alt="${ch.chapter}" loading="lazy" class="story-img"/>`
      : `<div class="story-img" style="background:linear-gradient(135deg,#0D1424,#1A2440);display:flex;align-items:center;justify-content:center;height:100%;">
           <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
             <path d="M20 4 L26 16 L20 28 L14 16 Z" fill="none" stroke="rgba(201,149,107,0.4)" stroke-width="1"/>
           </svg>
         </div>`;

    item.innerHTML = `
      <div class="story-img-wrap">
        ${imgOrPlaceholder}
        <div class="story-year">${ch.year}</div>
      </div>
      <div class="story-text">
        <p class="eyebrow story-chapter-eyebrow">${t.storyEyebrow.split(" ").slice(0, 2).join(" ")}</p>
        <h3 class="story-chapter-title">${ch.chapter}</h3>
        <div class="story-divider-line"></div>
        <p class="story-body">${ch.body}</p>
      </div>
    `;
    list.appendChild(item);
  });

  initReveal();
}

// ── Render all sections ───────────────────────────────────
function renderPage(t) {
  // Lang toggle
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.querySelector(".lang-label").textContent = t.langLabel;

  // Preloader texts
  const preEyebrow = document.getElementById("preloader-eyebrow");
  if (preEyebrow) preEyebrow.textContent = t.preEyebrow;
  const openText = document.getElementById("open-with-love-text");
  if (openText) openText.textContent = t.openWithLove;
  const envEyebrow = document.getElementById("env-letter-eyebrow");
  if (envEyebrow) envEyebrow.textContent = t.heroEyebrow;
  const envTitle = document.getElementById("env-letter-title");
  if (envTitle) envTitle.textContent = t.heroTitle;

  // Hero
  document.getElementById("hero-eyebrow").textContent    = t.heroEyebrow;
  document.getElementById("hero-title").textContent      = t.heroTitle;
  document.getElementById("hero-sub").textContent        = t.heroSub;
  document.getElementById("hero-poem1").textContent      = t.heroPoem1;
  document.getElementById("hero-poem2").textContent      = t.heroPoem2;
  document.getElementById("hero-poem3").textContent      = t.heroPoem3;
  document.getElementById("hero-poem-love").textContent  = t.heroPoemLove;
  document.getElementById("hero-date").textContent       = t.heroDate;
  document.getElementById("hero-place").textContent      = t.heroPlace;
  document.getElementById("scroll-hint-text").textContent = t.scrollHint;

  // Story
  renderStory(t);

  // Countdown
  document.getElementById("cd-eyebrow").textContent = t.countdownEyebrow;
  document.getElementById("cd-title").textContent   = t.countdownTitle;
  document.getElementById("cd-script").textContent  = t.countdownScript;
  updateCountdown();

  // Letter
  document.getElementById("letter-eyebrow").textContent = t.letterEyebrow;
  document.getElementById("letter-title").textContent   = t.letterTitle;
  document.getElementById("letter-p1a").textContent     = t.letterP1a;
  document.getElementById("letter-p1b").textContent     = t.letterP1b;
  document.getElementById("letter-p1c").textContent     = t.letterP1c;
  document.getElementById("letter-p2a").textContent     = t.letterP2a;
  document.getElementById("letter-p2b").textContent     = t.letterP2b;
  document.getElementById("letter-sign").textContent    = t.letterSign;

  // Journey
  document.getElementById("journey-eyebrow").textContent  = t.journeyEyebrow;
  document.getElementById("journey-title-a").textContent  = t.journeyTitleA;
  document.getElementById("journey-title-b").textContent  = t.journeyTitleB;
  const journeyList = document.getElementById("journey-list");
  journeyList.innerHTML = "";
  t.journey.forEach((item, i) => {
    const isLast = i === t.journey.length - 1;
    const from   = i % 2 === 0 ? "left" : "right";
    const div    = document.createElement("div");
    div.className = "journey-item";
    div.setAttribute("data-reveal", from);
    div.setAttribute("data-delay", String(i * 150));
    div.innerHTML = `
      <div class="journey-time">
        <span class="journey-accent">${item.accent}</span>
        <div class="journey-hour">${item.hour}</div>
      </div>
      <div class="journey-divider">
        <span class="vline"></span>
        ${svgHeart("heartbeat")}
        <span class="vline"></span>
      </div>
      <div class="journey-desc">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
      ${!isLast ? `<span class="journey-connector twinkle" aria-hidden="true">◆</span>` : ""}
    `;
    journeyList.appendChild(div);
  });

  // Venue
  document.getElementById("venue-eyebrow").textContent = t.venueEyebrow;
  document.getElementById("venue-title-a").textContent = t.venueTitleA;
  document.getElementById("venue-title-b").textContent = t.venueTitleB;
  document.getElementById("venue-p1a").textContent     = t.venueP1a;
  document.getElementById("venue-p1b").textContent     = t.venueP1b;
  document.getElementById("venue-p1c").textContent     = t.venueP1c;
  document.getElementById("venue-p2").textContent      = t.venueP2;
  document.getElementById("venue-address").textContent = t.venueAddress;
  document.getElementById("venue-map").textContent     = t.venueMap;

  // Guidelines
  document.getElementById("guidelines-eyebrow").textContent  = t.guidelinesEyebrow;
  document.getElementById("guidelines-title-a").textContent  = t.guidelinesTitleA;
  document.getElementById("guidelines-title-b").textContent  = t.guidelinesTitleB;
  const guidelinesGrid = document.getElementById("guidelines-grid");
  guidelinesGrid.innerHTML = "";
  t.guidelines.forEach((it, i) => {
    const card = document.createElement("div");
    card.className = "guideline-card";
    card.setAttribute("data-reveal", "up");
    card.setAttribute("data-delay", String(i * 150));
    card.innerHTML = `
      ${svgSprig("guideline-sprig sway-slow")}
      <h3>${it.title}</h3>
      <p>${it.body}</p>
    `;
    guidelinesGrid.appendChild(card);
  });

  // RSVP
  document.getElementById("rsvp-title").textContent    = t.rsvpTitle;
  document.getElementById("rsvp-by").textContent       = t.rsvpBy;
  document.getElementById("rsvp-btn-text").textContent = t.rsvpBtn;
  document.getElementById("rsvp-foot").textContent     = t.rsvpFoot;

  // Footer
  document.getElementById("footer-pre").textContent  = t.footer;
  document.getElementById("footer-tail").textContent = t.footerTail;

  if (isOpened) initReveal();
}

// ── Language toggle ───────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  const t = T[lang];
  document.documentElement.setAttribute("dir",  t.dir);
  document.documentElement.setAttribute("lang", lang);
  renderPage(t);
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";

  antigravityCanvas = new AntigravityCanvas();

  const t = T[currentLang];
  buildPreloader(t);
  renderPage(t);
  startCountdown();

  const langBtn = document.getElementById("lang-toggle");
  langBtn.addEventListener("click", () => {
    const next = currentLang === "en" ? "ar" : "en";
    setLang(next);
    if (!isOpened) buildPreloader(T[next]);
  });

  initReveal();
});
