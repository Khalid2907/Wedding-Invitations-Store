// ============================================================
// AHMED & MENNA — Vanilla JavaScript App
// ============================================================

// ── Translations ──────────────────────────────────────────
const T = {
  en: {
    dir: "ltr",
    langLabel: "العربية",
    preEyebrow: "— A Little Something For You —",
    openWithLove: "Open with love",
    heroEyebrow: "With hearts full of joy · MMXXVI",
    heroTitle: "Ahmed & Menna",
    heroSub: "invite you to celebrate their love",
    heroPoem1: "Where feluccas drift on rose-gold water",
    heroPoem2: "and jasmine blooms wild along the shore,",
    heroPoem3: "we invite you to a garden filled with",
    heroPoemLove: "— love",
    heroDate: "14 · November · 2026",
    heroPlace: "Sunset · Aswan, Egypt",
    scrollHint: "Wander down",

    countdownEyebrow: "Softly counting",
    countdownTitle: "until we meet",
    countdownScript: "by the water",
    dLabel: "Days",
    hLabel: "Hours",
    mLabel: "Minutes",
    sLabel: "Seconds",

    storyEyebrow: "Once upon a time in Cairo",
    storyTitleA: "Their",
    storyTitleB: "Love Story",
    storyChapters: [
      {
        year: "2019",
        chapter: "The First Hello",
        img: "assets/story-cafe.jpg",
        body: "It started over two glasses of mint tea at El Fishawy, the oldest café in Khan el-Khalili. Ahmed reached for the sugar at the exact moment Menna did. Their eyes met, and the whole alley seemed to hold its breath. He offered to share his tea. She laughed and ordered a new glass — but didn't leave.",
        side: "left",
      },
      {
        year: "2021",
        chapter: "Learning Each Other",
        img: "assets/story-nile.jpg",
        body: "Two years of evening walks along the Corniche, sunsets from Cairo Tower, and long drives with the windows down. They learned each other's silences, favourite songs, and the exact way each of them takes their morning coffee. Ahmed fell in love with the way Menna hums while she reads. Menna fell in love with the way Ahmed always saves her the window seat.",
        side: "right",
      },
      {
        year: "2023",
        chapter: "He Asked",
        img: "assets/story-proposal.jpg",
        body: "On a warm October night, on a rooftop in Zamalek with the Nile shimmering below, Ahmed got down on one knee. He had rehearsed a speech for weeks. When the moment came, all he said was: \"I don't want another evening without you in it.\" Menna said yes before he had finished the sentence.",
        side: "left",
      },
      {
        year: "2026",
        chapter: "Now, Together",
        img: "assets/story-couple.jpg",
        body: "And now they stand on the edge of forever — choosing each other, again and completely. They cannot imagine celebrating this without the people who have loved them along the way. So they ask, with the warmest of hearts: will you come?",
        side: "right",
      },
    ],

    letterEyebrow: "A little note to you",
    letterTitle: "Welcome, dearest one",
    letterP1a: "There is a place Ahmed and Menna have grown to love — a garden of bougainvillea and old palms perched above the Nile, where the water turns the color of ",
    letterP1b: "pale roses",
    letterP1c: " at dusk.",
    letterP2a: "It is here they wish to gather the people they hold most tenderly. Come as you are, come with an open heart, and let us fill the evening with laughter, candlelight and ",
    letterP2b: "the sweet perfume of home.",
    letterSign: "— with all our love, Ahmed & Menna",

    journeyEyebrow: "The evening, unfolding",
    journeyTitleA: "Our",
    journeyTitleB: "Order of the Day",
    journey: [
      { hour: "18:00", title: "Rose-Gold Arrival",   body: "A welcome of hibiscus lemonade on the terrace as the sun melts into the Nile and feluccas drift home.",                         accent: "Golden hour" },
      { hour: "20:30", title: "A Garden Supper",     body: "A long table beneath jasmine vines and lanterns — a slow, tender meal of Egyptian summer, shared with the people we love.", accent: "Candlelight" },
      { hour: "23:00", title: "Dancing Under Palms", body: "Oud, strings and softly played love songs — an evening that stretches gently into the small hours.",                          accent: "Starlight"   },
    ],

    venueEyebrow: "Where it all happens",
    venueTitleA: "Sofitel Legend",
    venueTitleB: "Old Cataract",
    venueP1a: "High above the first cataract of the Nile in ",
    venueP1b: "Aswan",
    venueP1c: ", our garden watches over Elephantine Island and the pink granite hills of the west bank — the very view that once enchanted Agatha Christie.",
    venueP2: "Come at golden hour and stay for the stars.",
    venueAddress: "Abtal El Tahrir Street · Aswan · Egypt",
    venueMap: "Find us on the map",

    guidelinesEyebrow: "A few gentle notes",
    guidelinesTitleA: "Kindly",
    guidelinesTitleB: "read with love",
    guidelines: [
      { title: "Dress Code",  body: "Soft, romantic tones — blush, sage, dusty rose, cream. Bring a light shawl for when the desert air turns cool." },
      { title: "Little Ones", body: "Children we adore are welcome for the early hours — the evening dancing is reserved for grown hearts." },
      { title: "Arriving",    body: "Gates open at 5:30 PM. Please arrive as the sun begins to lower — you won't want to miss the sky." },
    ],

    rsvpTitle: "Say you'll come",
    rsvpBy: "Kindly reply by the first of November",
    rsvpBtn: "Yes, with all my heart",
    rsvpFoot: "Ahmed & Menna cannot wait to hold you close.",
    footer: "Made with",
    footerTail: "on the Nile · Ahmed & Menna · 2026",
  },

  ar: {
    dir: "rtl",
    langLabel: "English",
    preEyebrow: "— شيءٌ صغير من القلب —",
    openWithLove: "افتحها بحب",
    heroEyebrow: "بقلوبٍ يملؤها الفرح · ٢٠٢٦",
    heroTitle: "أحمد ومنّة",
    heroSub: "يدعوانكم للاحتفال بحبّهما",
    heroPoem1: "حيث تنساب الفلوكات على ماءٍ ورديّ ذهبي",
    heroPoem2: "ويتفتّح الياسمين البريّ على الشاطئ،",
    heroPoem3: "ندعوكم إلى حديقةٍ مليئة",
    heroPoemLove: "— بالحب",
    heroDate: "١٤ · نوفمبر · ٢٠٢٦",
    heroPlace: "عند الغروب · أسوان، مصر",
    scrollHint: "تجوّل معنا",

    countdownEyebrow: "بهدوءٍ نعدّ",
    countdownTitle: "حتى نلتقي",
    countdownScript: "عند الماء",
    dLabel: "أيام",
    hLabel: "ساعات",
    mLabel: "دقائق",
    sLabel: "ثوانٍ",

    storyEyebrow: "حكاية بدأت في القاهرة",
    storyTitleA: "قصّة",
    storyTitleB: "حبّهما",
    storyChapters: [
      {
        year: "٢٠١٩",
        chapter: "أوّل لقاء",
        img: "assets/story-cafe.jpg",
        body: "بدأت الحكاية على كوبَي شاي بالنعناع في مقهى الفيشاوي، أعرق مقاهي خان الخليلي. مدّ أحمد يده نحو السكّر في اللحظة ذاتها التي مدّت فيها منّة يدها. التقت أعينهما، وكأنّ الحارة كلّها توقّفت عن التنفّس. عرض عليها أن يشاركها الشاي، فضحكت وطلبت كوبًا جديدًا — لكنّها لم تغادر.",
        side: "left",
      },
      {
        year: "٢٠٢١",
        chapter: "التعارف",
        img: "assets/story-nile.jpg",
        body: "عامان من المشي على الكورنيش عند المساء، ومن الغروب على برج القاهرة، ومن الجولات الطويلة بالنوافذ المفتوحة. تعلّما صمت بعضهما، وأغانيهما المفضّلة، وطريقة كلٍّ منهما في تحضير قهوة الصباح. أحبّ أحمد طريقة منّة في الدندنة أثناء القراءة. وأحبّت منّة طريقة أحمد في دائمًا يحتفظ لها بمقعد النافذة.",
        side: "right",
      },
      {
        year: "٢٠٢٣",
        chapter: "سألها",
        img: "assets/story-proposal.jpg",
        body: "في ليلة أكتوبر دافئة، على سطح في الزمالك والنيل يلمع في الأسفل، ركع أحمد على ركبة واحدة. كان قد تدرّب على خطابه أسابيع. حين جاءت اللحظة، لم يقل سوى: \"لا أريد أن أعيش مساءً آخر بدونكِ.\" قالت منّة نعم قبل أن يُتمّ جملته.",
        side: "left",
      },
      {
        year: "٢٠٢٦",
        chapter: "معًا إلى الأبد",
        img: "assets/story-couple.jpg",
        body: "والآن يقفان على أعتاب الأبد — يختاران بعضهما، مجدّدًا وكلّيًا. لا يتخيّلان الاحتفال بهذه اللحظة بعيدًا عن الذين أحبّوهما طوال الطريق. لذا يسألان، بأدفأ القلوب: هل ستأتون؟",
        side: "right",
      },
    ],

    letterEyebrow: "كلمةٌ صغيرة إليك",
    letterTitle: "أهلاً بكِ يا أعزّ الناس",
    letterP1a: "هناك مكانٌ أحبّه أحمد ومنّة — حديقةٌ من الجهنمية والنخيل العتيق تعلو النيل، حيث يتحوّل الماء إلى لون ",
    letterP1b: "الورد الشاحب",
    letterP1c: " عند الغروب.",
    letterP2a: "هنا يودّان أن يجمعا أعزّ من يحبّان. تعالوا كما أنتم، بقلوبٍ مفتوحة، ولنملأ المساء بالضحك، والشموع، و",
    letterP2b: "عبقِ الوطن الحبيب.",
    letterSign: "— بكلّ حبّنا، أحمد ومنّة",

    journeyEyebrow: "المساء يتفتّح ورقةً ورقة",
    journeyTitleA: "برنامج",
    journeyTitleB: "الأمسية",
    journey: [
      { hour: "١٨:٠٠", title: "استقبال ذهبيّ",   body: "ترحيبٌ بعصير الكركديه على الشرفة بينما تذوب الشمس في النيل وتعود الفلوكات إلى الميناء.", accent: "ساعة الذهب" },
      { hour: "٢٠:٣٠", title: "عشاءٌ في الحديقة", body: "طاولةٌ طويلة تحت عرائش الياسمين والفوانيس — وليمةٌ حانية من صيف مصر، نتقاسمها مع من نحب.", accent: "ضوء الشموع" },
      { hour: "٢٣:٠٠", title: "رقصٌ تحت النخيل", body: "عود ووتريّات وأغانٍ عذبة — أمسيةٌ تمتدّ برفقٍ حتى ساعات الفجر الأولى.",                   accent: "ضوء النجوم" },
    ],

    venueEyebrow: "حيث يبدأ كلّ شيء",
    venueTitleA: "سوفيتيل ليجند",
    venueTitleB: "أولد كتراكت",
    venueP1a: "عالياً فوق الشلّال الأول للنيل في ",
    venueP1b: "أسوان",
    venueP1c: "، تُطلّ حديقتنا على جزيرة الفنتين وتلال الجرانيت الوردية في الضفة الغربية — المشهد الذي سحر أجاثا كريستي ذات يوم.",
    venueP2: "تعالوا في ساعة الذهب وابقوا حتى تُشعل النجوم السماء.",
    venueAddress: "شارع أبطال التحرير · أسوان · مصر",
    venueMap: "موقعنا على الخريطة",

    guidelinesEyebrow: "همساتٌ لطيفة",
    guidelinesTitleA: "اقرأها",
    guidelinesTitleB: "بحب",
    guidelines: [
      { title: "الزيّ",   body: "ألوانٌ ناعمة رومانسية — ورديّ خفيف، سيج، ورد قديم، كريمي. أحضروا شالاً خفيفاً حين يبرد نسيم الصحراء." },
      { title: "الأطفال", body: "أطفالكم الأحباء أهلاً بهم في الساعات الأولى — أما رقص المساء فمحجوزٌ للقلوب الكبيرة." },
      { title: "الوصول", body: "تُفتح البوابات في الخامسة والنصف مساءً. تعالوا قبل أن تميل الشمس — لا تفوّتوا السماء." },
    ],

    rsvpTitle: "قولي إنّكِ ستأتين",
    rsvpBy: "يسعدنا الردّ قبل الأول من نوفمبر",
    rsvpBtn: "نعم، بكلّ قلبي",
    rsvpFoot: "أحمد ومنّة لا يطيقان الانتظار لضمّكم إلى صدورهما.",
    footer: "صُنعت بـ",
    footerTail: "على ضفاف النيل · أحمد ومنّة · ٢٠٢٦",
  },
};

// ── State ─────────────────────────────────────────────────
let currentLang = "en";
let isOpened = false;
const EVENT_DATE = new Date("2026-11-14T18:00:00").getTime();

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

function ornamentHTML() {
  return `<div class="ornament" aria-hidden="true">
    <span class="ornament-line-left"></span>
    <svg width="44" height="44" viewBox="0 0 44 44" class="ornament-icon sway-slow">
      <g fill="none" stroke="currentColor" stroke-width="0.8">
        <path d="M22 8 C 16 14, 12 18, 12 24 C 12 30, 16 34, 22 34 C 28 34, 32 30, 32 24 C 32 18, 28 14, 22 8 Z"/>
        <path d="M22 14 C 19 18, 17 21, 17 24 C 17 28, 19 30, 22 30 C 25 30, 27 28, 27 24 C 27 21, 25 18, 22 14 Z" fill="currentColor" fill-opacity="0.15"/>
        <circle cx="22" cy="24" r="2" fill="currentColor"/>
      </g>
    </svg>
    <span class="ornament-line-right"></span>
  </div>`;
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
  for (let i = 0; i < 24; i++) {
    const top  = (i * 137) % 100;
    const left = (i * 53)  % 100;
    const dur  = 1.8 + ((i * 7) % 20) / 10;
    const delay = -(i * 0.15);
    const dot = document.createElement("span");
    dot.className = "sparkle-dot";
    dot.style.cssText = `top:${top}%;left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;`;
    container.appendChild(dot);
  }
}

// ── Petals ────────────────────────────────────────────────
function createPetals() {
  const container = document.getElementById("petals-container");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    const left = (i * 6.3 + Math.random() * 4) % 100;
    const dur  = 12 + Math.random() * 14;
    const delay = -(Math.random() * 22);
    const size = 10 + Math.random() * 16;
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.cssText = `left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;`;
    petal.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" style="color:var(--rose)">
      <path d="M10 2 C 6 5, 4 10, 6 14 C 8 17, 12 17, 14 14 C 16 10, 14 5, 10 2 Z" fill="currentColor"/>
    </svg>`;
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
        const el = entry.target;
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

// ── Antigravity Particle & Filament Canvas ────────────────
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
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < 45; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.2 - Math.random() * 0.4,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }
  }

  initFilaments() {
    this.filaments = [];
    for (let i = 0; i < 8; i++) {
      this.filaments.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        length: 80 + Math.random() * 120,
        angle: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.004,
        alpha: 0.2 + Math.random() * 0.35,
      });
    }
  }

  triggerDisintegration(originX, originY) {
    for (let i = 0; i < 90; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 7;
      this.burstParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 3 + Math.random() * 6,
        alpha: 1,
        life: 1,
        decay: 0.008 + Math.random() * 0.012,
        isHeart: Math.random() > 0.4,
        color: Math.random() > 0.5 ? "rgba(197, 155, 108, " : "rgba(180, 50, 80, ",
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render soft light particles
    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

      if (p.y < -10) p.y = this.height + 10;
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 240, 245, ${Math.max(0.1, p.alpha)})`;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "rgba(197, 155, 108, 0.5)";
      this.ctx.fill();
    });

    // Render translucent rose-gold filaments
    this.filaments.forEach((f) => {
      f.angle += f.speed;
      const endX = f.x + Math.cos(f.angle) * f.length;
      const endY = f.y + Math.sin(f.angle) * f.length;

      this.ctx.beginPath();
      this.ctx.moveTo(f.x, f.y);
      this.ctx.quadraticCurveTo(
        f.x + Math.sin(f.angle) * 40,
        f.y + Math.cos(f.angle) * 40,
        endX,
        endY
      );
      this.ctx.strokeStyle = `rgba(197, 155, 108, ${f.alpha})`;
      this.ctx.lineWidth = 1.2;
      this.ctx.stroke();
    });

    // Render particle disintegration burst
    for (let i = this.burstParticles.length - 1; i >= 0; i--) {
      const bp = this.burstParticles[i];
      bp.x += bp.vx;
      bp.y += bp.vy;
      bp.vx *= 0.98;
      bp.vy *= 0.98;
      bp.life -= bp.decay;

      if (bp.life <= 0) {
        this.burstParticles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(bp.x, bp.y);
      this.ctx.fillStyle = `${bp.color}${bp.life})`;
      if (bp.isHeart) {
        this.ctx.beginPath();
        this.ctx.arc(-bp.size / 3, -bp.size / 3, bp.size / 3, 0, Math.PI);
        this.ctx.arc(bp.size / 3, -bp.size / 3, bp.size / 3, 0, Math.PI);
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

// ── Preloader / Envelope ───────────────────────────────────
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
      <!-- Multi-layered Swirling Debris Field (Rose petals, gold flakes & starlight) -->
      <div id="debris-aura" style="position:absolute; width:380px; height:380px; pointer-events:none; z-index:2;" aria-hidden="true">
        <!-- Orbiting Rose Petal 1 -->
        <div style="position:absolute; top:0; left:50%; animation: orbitDebris 12s linear infinite;">
          <svg width="18" height="18" viewBox="0 0 20 20" style="color:var(--rose)"><path d="M10 2 C 6 5, 4 10, 6 14 C 8 17, 12 17, 14 14 C 16 10, 14 5, 10 2 Z" fill="currentColor"/></svg>
        </div>
        <!-- Orbiting Gold Leaf Flake 1 -->
        <div style="position:absolute; top:50%; left:100%; animation: orbitDebris 16s linear infinite reverse;">
          <div style="width:7px; height:7px; background:#C59B6C; border-radius:50%; box-shadow:0 0 10px #C59B6C;"></div>
        </div>
        <!-- Orbiting Rose Petal 2 -->
        <div style="position:absolute; bottom:0; left:30%; animation: orbitDebris 14s linear infinite;">
          <svg width="20" height="20" viewBox="0 0 20 20" style="color:var(--rose-deep)"><path d="M10 2 C 6 5, 4 10, 6 14 C 8 17, 12 17, 14 14 C 16 10, 14 5, 10 2 Z" fill="currentColor"/></svg>
        </div>
        <!-- Orbiting Gold Leaf Flake 2 -->
        <div style="position:absolute; top:20%; left:5%; animation: orbitDebris 20s linear infinite;">
          <div style="width:5px; height:5px; background:#F5D3A6; border-radius:50%; box-shadow:0 0 8px #F5D3A6;"></div>
        </div>
      </div>

      <button id="envelope-btn" aria-label="Open envelope">
        <div id="envelope-letter">
          <div id="envelope-letter-inner">
            <svg width="36" height="18" viewBox="0 0 40 20" style="margin:0 auto 0.4rem auto; display:block; color:var(--rose-gold)" aria-hidden="true">
              <path d="M20 0 L23 7 L30 10 L23 13 L20 20 L17 13 L10 10 L17 7 Z" fill="currentColor"/>
            </svg>
            <p class="eyebrow" id="env-letter-eyebrow">${t.heroEyebrow}</p>
            <p class="script-hand" style="font-size:clamp(1.875rem,5vw,2.25rem)" id="env-letter-title">${t.heroTitle}</p>
          </div>
        </div>
        <div id="envelope-body" class="bloom-in">
          <svg class="envelope-pocket-svg" viewBox="0 0 100 68" preserveAspectRatio="none" shape-rendering="geometricPrecision">
            <defs>
              <linearGradient id="interior-rose-lining" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#9C5A6A"/>
                <stop offset="50%" stop-color="#B87383"/>
                <stop offset="100%" stop-color="#D494A3"/>
              </linearGradient>

              <linearGradient id="side-fold-left" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#F5DFE4"/>
                <stop offset="100%" stop-color="#E6B5C1"/>
              </linearGradient>
              <linearGradient id="side-fold-right" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#F2D8DE"/>
                <stop offset="100%" stop-color="#E0ADB9"/>
              </linearGradient>

              <linearGradient id="bottom-fold-grad" x1="0.5" y1="1" x2="0.5" y2="0">
                <stop offset="0%" stop-color="#E2B0BC"/>
                <stop offset="65%" stop-color="#EBC4CD"/>
                <stop offset="100%" stop-color="#F5DFE4"/>
              </linearGradient>

              <filter id="pocket-fold-shadow" x="-10%" y="-20%" width="120%" height="140%">
                <feDropShadow dx="0" dy="-2" stdDeviation="2.5" flood-color="#7C3B4A" flood-opacity="0.2"/>
              </filter>
            </defs>

            <!-- Soft Dusty Rosewood Interior Lining -->
            <rect width="100" height="68" fill="url(#interior-rose-lining)"/>

            <!-- Left & Right Side Folds -->
            <path d="M0 0 L48 33 Q50 34 52 33 L100 0 L100 68 L0 68 Z" fill="none"/>
            <path d="M0 0 L48 33 L0 68 Z" fill="url(#side-fold-left)"/>
            <path d="M100 0 L52 33 L100 68 Z" fill="url(#side-fold-right)"/>

            <!-- Bottom Main Pocket Fold -->
            <path d="M0 68 L48 33.5 Q50 32 52 33.5 L100 68 Z" fill="url(#bottom-fold-grad)" filter="url(#pocket-fold-shadow)"/>

            <!-- Delicate Champagne Gold Foil Crease Strokes -->
            <path d="M0 68 L48 33.5 Q50 32 52 33.5 L100 68" fill="none" stroke="#D4AF37" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
            <path d="M0 0 L48 33 M100 0 L52 33" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round" opacity="0.5"/>
          </svg>
          <div id="envelope-overlay"></div>
        </div>
        <div id="envelope-flap">
          <svg viewBox="0 0 100 48" preserveAspectRatio="none" shape-rendering="geometricPrecision">
            <defs>
              <linearGradient id="flap-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stop-color="#F6DDE2"/>
                <stop offset="60%"  stop-color="#EBC5CE"/>
                <stop offset="100%" stop-color="#DC9FB0"/>
              </linearGradient>
              <filter id="flap-shadow" x="-10%" y="0%" width="120%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#7C3B4A" flood-opacity="0.18"/>
              </filter>
            </defs>
            <!-- Perfectly Proportioned 44% V-Tip Flap -->
            <path d="M0 0 L100 0 L52 46.5 Q50 48 48 46.5 Z" fill="url(#flap-grad)" filter="url(#flap-shadow)"/>
            <path d="M0 0 L48 46.5 Q50 48 52 46.5 L100 0" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
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

  // Interactive 3D Mouse Parallax & Gyro Tilt
  const wrapper = btn.closest(".floating-element");
  if (wrapper) {
    wrapper.addEventListener("mousemove", (e) => {
      if (opening) return;
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      btn.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.04)`;
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

    // Trigger Particle Disintegration Explosion
    if (antigravityCanvas) {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
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
    const item = document.createElement("div");
    item.className = "story-item" + (isRight ? " story-item--reverse" : "");
    item.setAttribute("data-reveal", isRight ? "right" : "left");
    item.setAttribute("data-delay", String(i * 100));
    item.innerHTML = `
      <div class="story-img-wrap">
        <img src="${ch.img}" alt="${ch.chapter}" loading="lazy" class="story-img"/>
        <div class="story-year">${ch.year}</div>
      </div>
      <div class="story-text">
        <p class="eyebrow story-chapter-eyebrow">${t.storyEyebrow.replace(/once.*/i,"").trim() || "Chapter"}</p>
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
  document.getElementById("hero-eyebrow").textContent   = t.heroEyebrow;
  document.getElementById("hero-title").textContent     = t.heroTitle;
  document.getElementById("hero-sub").textContent       = t.heroSub;
  document.getElementById("hero-poem1").textContent     = t.heroPoem1;
  document.getElementById("hero-poem2").textContent     = t.heroPoem2;
  document.getElementById("hero-poem3").textContent     = t.heroPoem3;
  document.getElementById("hero-poem-love").textContent = t.heroPoemLove;
  document.getElementById("hero-date").textContent      = t.heroDate;
  document.getElementById("hero-place").textContent     = t.heroPlace;
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
      ${!isLast ? `<span class="journey-connector twinkle" aria-hidden="true">♡</span>` : ""}
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
