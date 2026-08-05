/* ============================================================
   LUXURY DIGITAL INVITATIONS — script.js
   Navy × Gold Edition — Zeekraa-Inspired Redesign

   SECTIONS:
   1.  Utility helpers
   2.  Theme Toggle (Dark ✕ Light mode)
   3.  Header scroll behaviour
   4.  Mobile navigation toggle
   5.  Language toggle (EN / AR)
   6.  Scroll-reveal (Intersection Observer)
   7.  Hero Particle Field
   8.  Device Preview toggle
   9.  Testimonials drag-scroll carousel
   10. Testimonial dot indicator sync + auto-play
   11. 3D Card Tilt Effect
   12. Footer year update
   ============================================================ */

'use strict';

/* ============================================================
   1. UTILITY HELPERS
   ============================================================ */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const lerp = (a, b, t) => a + (b - a) * t;


/* ============================================================
   2. THEME TOGGLE — Dark ✕ Light Mode
   Persists preference in localStorage.
   Toggles [data-theme="light"] on <html>.
   ============================================================ */
(function initThemeToggle() {
  const btn = $('#theme-toggle-btn');
  const root = document.documentElement;
  if (!btn) return;

  // Read saved preference, fallback to dark
  const saved = localStorage.getItem('theme') || 'dark';
  const apply = (theme) => {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      // Update meta theme-color for browser chrome
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.content = '#EBEBEB';
    } else {
      root.removeAttribute('data-theme');
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.content = '#001D3D';
    }
    btn.setAttribute('aria-label',
      theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
    );
    btn.setAttribute('aria-pressed', theme === 'light');
  };

  // Apply on page load
  apply(saved);

  // Toggle on click
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();


/* ============================================================
   3. HEADER SCROLL BEHAVIOUR
   Adds `.scrolled` class once the user scrolls past 60px,
   which triggers the glassmorphism background.
   ============================================================ */
(function initHeaderScroll() {
  const header = $('.site-header');
  if (!header) return;

  const THRESHOLD = 60;

  const toggle = () => {
    header.classList.toggle('scrolled', window.scrollY > THRESHOLD);
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
})();


/* ============================================================
   4. MOBILE NAVIGATION TOGGLE
   ============================================================ */
(function initMobileNav() {
  const hamburger = $('.header__hamburger');
  const mobileNav = $('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  const toggle = () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileNav.classList.toggle('is-open', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen);
  };

  hamburger.addEventListener('click', toggle);

  $$('a', mobileNav).forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', false);
    });
  });
})();


/* ============================================================
   5. LANGUAGE TOGGLE (EN / AR) + TRANSLATIONS
   ============================================================ */
(function initLangToggle() {
  const buttons = $$('.lang-toggle__btn');
  if (!buttons.length) return;

  const dictionary = {
    en: {
      /* ── Navigation ── */
      nav_process: 'Process',
      nav_designs: 'Designs',
      nav_pricing: 'Pricing',
      nav_why_us: 'Why Us',
      nav_contact: 'Contact',

      /* ── Hero ── */
      hero_eyebrow: 'Luxury Digital Invitations',
      hero_title_1: 'A Memory Worth',
      hero_title_2: 'Keeping.',
      hero_desc: 'Crafting your story with the finest details and the luxury of modern design.',
      hero_btn_1: 'Begin Your Memory',
      hero_btn_2: 'Explore Designs',

      /* ── Collection ── */
      collection_eyebrow: 'Our Portfolio',
      collection_title: 'The Collection:',
      collection_title_em: 'Designs Worthy of Your Story.',
      collection_desc: 'Each template is handcrafted with cinematic detail. Browse, fall in love, and make it yours.',
      collection_standard: 'Standard Collection',
      collection_premium: 'Premium Collection',

      /* Cards */
      card_try_demo: 'Try Demo',
      card_00_name: 'Glass Pavilion (T0)',
      card_00_meta: 'Ethereal Glassmorphism · Stardust',
      card_00_desc: 'Luminous glass tilt cards, ambient stardust, and delicate gold typography for dreamy celebrations.',
      card_01_name: 'Velvet Arabic (T1)',
      card_01_meta: 'Burgundy Velvet · Calligraphy',
      card_01_desc: 'Deep burgundy tones, intricate gold foil arabesque borders, and authentic calligraphic monograms.',
      card_02_name: 'Pure Minimalist (T2)',
      card_02_meta: 'Refined Minimalism · Modern',
      card_02_desc: 'Clean lines, high-contrast serif typography, and uncompromised focus on your love story.',
      card_03_name: 'Digital Product (T3)',
      card_03_meta: 'Interactive Components · RSVP',
      card_03_desc: 'Interactive RSVP step flows, audio controller, and responsive gallery grid with light accents.',
      card_04_name: 'Romantic Silk (T4)',
      card_04_meta: '3D Interactive Envelope · Wax Seal',
      card_04_desc: 'Flagship interactive 3D envelope with custom wax seal break, letter slide physics, and rose petal glow.',
      card_05_name: 'Noir Soirée (T5)',
      card_05_meta: 'Obsidian Night · Rose Gold',
      card_05_desc: 'High-fashion black-tie aesthetics with deep obsidian gradients, dynamic lighting, and cinematic story cards.',
      card_06_name: 'Elysium Flagship (T6)',
      card_06_meta: 'Northern Lights · Crystal Shader',
      card_06_desc: 'The pinnacle of digital luxury. Volumetric background shaders, audio spectrum, dynamic countdown & interactive venue.',
      card_07_name: 'Constellation Flagship (T7)',
      card_07_meta: 'Interactive Celestial Voyage · Web Audio',
      card_07_desc: 'Arabic stardust calligraphy, 7 story chapters, planetary memories, solar countdown & "Send a Star" RSVP ritual.',

      /* ── Preview ── */
      preview_eyebrow: 'Live Preview',
      preview_title: 'Your Design,',
      preview_title_em: 'In Every Hand.',
      preview_desc: 'Switch between devices to see exactly how your invitation looks across every screen.',
      preview_device_mobile: '📱 Mobile',
      preview_device_tablet: '⬜ Tablet',
      preview_device_desktop: '🖥 Desktop',

      /* ── Process ── */
      process_eyebrow: 'How It Works',
      process_title: 'Your Journey',
      process_title_em: 'with Us.',
      process_1_label: 'Get in Touch',
      process_1_sub: 'Reach out via WhatsApp to confirm your booking.',
      process_1_title: 'Contact Us',
      process_1_desc: 'Send us a message and we\'ll help you choose the perfect starting point.',
      process_2_title: 'Choose Your Design',
      process_2_desc: 'Browse our collection and fall in love with the template that speaks your story.',
      process_3_label: 'Fill in Your Details',
      process_3_sub: 'We\'ll send you a form for your event info and photos.',
      process_3_title: 'Personalize It',
      process_3_desc: 'Share your details and the personal touches that make the moment uniquely yours.',
      process_4_title: 'Receive Your Link',
      process_4_desc: 'Get your final invitation link — ready to share instantly with all your guests.',

      /* ── Features ── */
      features_eyebrow: 'The Difference',
      features_title: 'Why Choose',
      features_title_em: 'Us.',
      feature_1_title: 'Bespoke Artistry',
      feature_1_desc: 'Every template is crafted with a jeweller\'s precision — balancing beauty, hierarchy, and emotion in perfect proportion.',
      feature_2_title: 'Perfect Harmony',
      feature_2_desc: 'Typography, color, and spacing converge seamlessly across every device, creating an experience that feels truly native.',
      feature_3_title: 'Instant Delivery',
      feature_3_desc: 'From checkout to shareable link in moments. No waiting, no complexity — just effortless elegance, immediately.',
      feature_4_title: 'Fully Responsive',
      feature_4_desc: 'Each design is meticulously tested on mobile, tablet, and desktop to guarantee a flawless guest experience everywhere.',
      feature_5_title: 'Effortless Sharing',
      feature_5_desc: 'One elegant link. Share directly via WhatsApp, Instagram, or email — no app required for your guests.',
      feature_6_title: 'Lasting Legacy',
      feature_6_desc: 'Your invitation remains live and accessible long after the event — a digital keepsake as timeless as the memory itself.',

      /* ── Pricing ── */
      pricing_eyebrow: 'Pricing Packages',
      pricing_title: 'Choose Your',
      pricing_title_em: 'Experience.',
      pricing_offer: 'Offer until 30 July',
      pricing_cta_start: 'Get Started',
      pricing_cta_contact: 'Contact Us',
      pricing_std_name: 'Standard Plan',
      pricing_std_savings: 'save 400 EGP',
      pricing_std_f1: 'Pick a template from our collection',
      pricing_std_f2: 'Your information and colors applied to the design',
      pricing_std_f3: 'Personalized background music of your choice',
      pricing_std_f4: 'Add or remove sections (Countdown, Location, Guidelines & Gallery)',
      pricing_popular_badge: '✦ Most couples choose this',
      pricing_prm_name: 'Premium Plan',
      pricing_prm_savings: 'save 500 EGP',
      pricing_prm_f1: 'Pick a template from our premium collection',
      pricing_prm_f2: 'Animated Preloader & Cinematic Hero Section',
      pricing_prm_f3: 'Your information and colors applied to the design',
      pricing_prm_f4: 'Personalized background music of your choice',
      pricing_prm_f5: 'Priority delivery within 12 hours',
      pricing_cst_badge: '◈ 100% Unique Design',
      pricing_cst_name: 'Customized Plan',
      pricing_cst_price: 'Tailored Cost',
      pricing_cst_note: 'Depends on the details',
      pricing_cst_f1: '100% fully customized design built from scratch',
      pricing_cst_f2: 'Add any custom sections tailored exactly to your needs',
      pricing_cst_f3: 'We bring any theme, idea, or concept to life',
      pricing_cst_f4: 'Highly personalized details matching your unique love story',
      pricing_cst_f5: 'Unlimited revisions until it matches your exact vision',

      /* ── Testimonials ── */
      testimonials_eyebrow: 'Client Stories',
      testimonials_title: 'Loved by Our',
      testimonials_title_em: 'Clients.',
      testimonials_desc: 'Real words from real couples who trusted us with their most special moments.',

      /* ── Pre-footer CTA ── */
      cta_eyebrow: 'Begin Today',
      cta_title: 'Let Us Craft',
      cta_title_em: 'Yours.',
      cta_subtitle: 'Every great story deserves a cinematic beginning.',
      cta_btn_whatsapp: 'Start on WhatsApp',
      cta_btn_browse: 'Browse Designs',
    },

    ar: {
      /* ── Navigation ── */
      nav_process: 'كيف نعمل',
      nav_designs: 'التصاميم',
      nav_pricing: 'الأسعار',
      nav_why_us: 'لماذا نحن',
      nav_contact: 'تواصل معنا',

      /* ── Hero ── */
      hero_eyebrow: 'دعوات رقمية فاخرة',
      hero_title_1: 'ذكرى تستحق',
      hero_title_2: 'الاحتفاظ بها.',
      hero_desc: 'نصيغ قصتك بأدق التفاصيل وفخامة التصميم الحديث.',
      hero_btn_1: 'ابدأ ذكراك',
      hero_btn_2: 'استكشف التصاميم',

      /* ── Collection ── */
      collection_eyebrow: 'معرض أعمالنا',
      collection_title: 'المجموعة:',
      collection_title_em: 'تصاميم تليق بقصتك.',
      collection_desc: 'كل قالب مصنوع بعناية سينمائية. تصفّح، أحبّ، واجعله ملكك.',
      collection_standard: 'المجموعة الأساسية',
      collection_premium: 'المجموعة المميزة',

      /* Cards */
      card_try_demo: 'جرّب العرض',
      card_00_name: 'الجناح الزجاجي (T0)',
      card_00_meta: 'زجاج مضيء · غبار النجوم',
      card_00_desc: 'بطاقات زجاجية تفاعلية، غبار نجوم ساحر، وخطوط ذهبية راقية للمناسبات الحالمة.',
      card_01_name: 'الخمل المخملي (T1)',
      card_01_meta: 'مخمل عِنابي · خط عربي',
      card_01_desc: 'ألوان عِنابية عميقة، إطارات رقش ذهبية، وشعارات خطية عربية أصيلة.',
      card_02_name: 'البساطة الراقية (T2)',
      card_02_meta: 'تصميم حديث · بساطة متبعة',
      card_02_desc: 'خطوط ناعمة، تباين فاخر، وتركيز كامل على قصة حبكما الساحرة.',
      card_03_name: 'التصميم التفاعلي (T3)',
      card_03_meta: 'مكونات تفاعلية · تأكيد حضور',
      card_03_desc: 'خطوات تأكيد حضور تفاعلية، مشغل صوتيات، ومعرض صور متجاوب.',
      card_04_name: 'الحرير الرومانسي (T4)',
      card_04_meta: 'ظرف ثلاثي الأبعاد · ختم شمعي',
      card_04_desc: 'تجربة الظرف التفاعلي ثلاثي الأبعاد مع كسر الختم الشمعي وانزلاق الرسالة وتناثر البتلات.',
      card_05_name: 'أمسية نوار (T5)',
      card_05_meta: 'سواد العقيق · ذهب وردي',
      card_05_desc: 'طابع راقٍ باللون الأسود العميق والذهب الوردي مع إضاءات سينمائية.',
      card_06_name: 'إليزيوم الراية (T6)',
      card_06_meta: 'الشفق قطبي · ظلال الكريستال',
      card_06_desc: 'قمة الفخامة الرقمية. خلفية الشفق التفاعلية، طيف الصوت، العداد التنازلي والموقع الجغرافي.',
      card_07_name: 'الكوكبة الفلكية (T7)',
      card_07_meta: 'رحلة سماوية تفاعلية · هندسة الصوت',
      card_07_desc: 'خط عربي بفرشاة غبار النجوم، ٧ فصول سينمائية، ذكريات يدور حولها الفلك، وطقس أطلق نجمتك لتأكيد الحضور.',

      /* ── Preview ── */
      preview_eyebrow: 'معاينة مباشرة',
      preview_title: 'تصميمك،',
      preview_title_em: 'في كل يد.',
      preview_desc: 'بدّل بين الأجهزة لترى كيف تبدو دعوتك على كل شاشة بالضبط.',
      preview_device_mobile: '📱 جوال',
      preview_device_tablet: '⬜ لوحي',
      preview_device_desktop: '🖥 كمبيوتر',

      /* ── Process ── */
      process_eyebrow: 'كيف نعمل',
      process_title: 'رحلتك',
      process_title_em: 'معنا.',
      process_1_label: 'تواصل معنا',
      process_1_sub: 'تواصل عبر واتساب لتأكيد حجزك.',
      process_1_title: 'تواصل معنا',
      process_1_desc: 'أرسل لنا رسالة وسنساعدك في اختيار نقطة البداية المثالية.',
      process_2_title: 'اختر تصميمك',
      process_2_desc: 'تصفح مجموعتنا واعثر على القالب الذي يعبّر عن قصتك.',
      process_3_label: 'أدخل بياناتك',
      process_3_sub: 'سنرسل لك نموذجًا لبيانات مناسبتك وصورك.',
      process_3_title: 'أضف لمستك',
      process_3_desc: 'شاركنا تفاصيلك واللمسات الشخصية التي تجعل اللحظة فريدة لك.',
      process_4_title: 'استلم الرابط',
      process_4_desc: 'احصل على رابط دعوتك النهائي — جاهز للمشاركة فورًا مع ضيوفك.',

      /* ── Features ── */
      features_eyebrow: 'ما يميّزنا',
      features_title: 'لماذا تختارنا',
      features_title_em: 'نحن.',
      feature_1_title: 'فن حصري',
      feature_1_desc: 'كل قالب مصنوع بدقة الصائغ — يجمع بين الجمال والتسلسل والعاطفة في توازن مثالي.',
      feature_2_title: 'تناسق تام',
      feature_2_desc: 'الخطوط والألوان والمسافات تتلاقى بسلاسة على كل جهاز، مما يخلق تجربة تبدو طبيعية تمامًا.',
      feature_3_title: 'تسليم فوري',
      feature_3_desc: 'من الطلب إلى الرابط القابل للمشاركة في لحظات. لا انتظار، لا تعقيد — فقط أناقة سهلة فورًا.',
      feature_4_title: 'يعمل على كل جهاز',
      feature_4_desc: 'كل تصميم مُختبر بعناية على الجوال والجهاز اللوحي والكمبيوتر لضمان تجربة ضيف مثالية في كل مكان.',
      feature_5_title: 'مشاركة سهلة',
      feature_5_desc: 'رابط أنيق واحد. شاركه مباشرةً عبر واتساب أو إنستغرام أو البريد — لا يحتاج ضيفك لأي تطبيق.',
      feature_6_title: 'إرث دائم',
      feature_6_desc: 'دعوتك تبقى حية ويمكن الوصول إليها طويلًا بعد الحفل — تذكار رقمي لا يفنى مثل الذكرى نفسها.',

      /* ── Pricing ── */
      pricing_eyebrow: 'باقات الأسعار',
      pricing_title: 'اختر',
      pricing_title_em: 'تجربتك.',
      pricing_offer: 'عرض حتى 30 يوليو',
      pricing_cta_start: 'ابدأ الآن',
      pricing_cta_contact: 'تواصل معنا',
      pricing_std_name: 'الباقة الأساسية',
      pricing_std_savings: 'وفّر 400 جنيه',
      pricing_std_f1: 'اختر قالبًا من مجموعتنا',
      pricing_std_f2: 'بياناتك وألوانك مطبّقة على التصميم',
      pricing_std_f3: 'موسيقى خلفية شخصية من اختيارك',
      pricing_std_f4: 'إضافة أو إزالة أقسام (عداد، الموقع، التعليمات والمعرض)',
      pricing_popular_badge: '✦ الخيار الأكثر شيوعًا',
      pricing_prm_name: 'الباقة المميزة',
      pricing_prm_savings: 'وفّر 500 جنيه',
      pricing_prm_f1: 'اختر قالبًا من مجموعتنا المميزة',
      pricing_prm_f2: 'شاشة تحميل متحركة وقسم بطولي سينمائي',
      pricing_prm_f3: 'بياناتك وألوانك مطبّقة على التصميم',
      pricing_prm_f4: 'موسيقى خلفية شخصية من اختيارك',
      pricing_prm_f5: 'تسليم ذو أولوية خلال 12 ساعة',
      pricing_cst_badge: '◈ تصميم فريد 100%',
      pricing_cst_name: 'الباقة المخصصة',
      pricing_cst_price: 'سعر مخصص',
      pricing_cst_note: 'يعتمد على التفاصيل',
      pricing_cst_f1: 'تصميم فريد 100% مبني من الصفر',
      pricing_cst_f2: 'إضافة أي أقسام مخصصة تناسب احتياجاتك تمامًا',
      pricing_cst_f3: 'نُحيي أي فكرة أو مفهوم أو طابع تطلبه',
      pricing_cst_f4: 'تفاصيل شخصية عالية الدقة تعكس قصة حبك الفريدة',
      pricing_cst_f5: 'تعديلات غير محدودة حتى يطابق رؤيتك بالضبط',

      /* ── Testimonials ── */
      testimonials_eyebrow: 'قصص عملائنا',
      testimonials_title: 'أحبّنا',
      testimonials_title_em: 'عملاؤنا.',
      testimonials_desc: 'كلمات حقيقية من أزواج حقيقيين وثقوا بنا في أجمل لحظاتهم.',

      /* ── Pre-footer CTA ── */
      cta_eyebrow: 'ابدأ اليوم',
      cta_title: 'دعنا نصنع',
      cta_title_em: 'قصتك.',
      cta_subtitle: 'كل قصة عظيمة تستحق بداية سينمائية.',
      cta_btn_whatsapp: 'ابدأ عبر واتساب',
      cta_btn_browse: 'تصفح التصاميم',
    }
  };


  const translatePage = (lang) => {
    const els = $$('[data-i18n]');
    els.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[lang] && dictionary[lang][key]) {
        el.textContent = dictionary[lang][key];
      }
    });
  };

  const setLanguage = (lang) => {
    buttons.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }

    translatePage(lang);
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
})();


/* ============================================================
   6. SCROLL-REVEAL (Intersection Observer)
   Elements with .reveal / .reveal-left / .reveal-right classes
   animate in as they enter the viewport.
   ============================================================ */
(function initScrollReveal() {
  const targets = $$('.reveal, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.10,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach(el => observer.observe(el));
})();



/* ============================================================
   7. GLOBAL PARTICLE FIELD (Twinkling Stars)
   Creates floating golden star particles globally across the site.
   ============================================================ */
(function initParticleField() {
  const container = $('#site-particles');
  if (!container) return;

  const PARTICLE_COUNT = 100;
  const symbols = ['✦', '✧', '·', '⋆', '∗'];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const el = document.createElement('span');
    el.classList.add('particle', 'particle--star');
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.setAttribute('aria-hidden', 'true');

    // Random position across full document width/height
    el.style.left = `${Math.random() * 100}vw`;
    el.style.top = `${Math.random() * 100}vh`;

    // Random animation
    const duration = 4 + Math.random() * 10;  // 4–14s
    const delay = -Math.random() * duration; // staggered start
    const opacity = 0.1 + Math.random() * 0.4;
    const scale = 0.5 + Math.random() * 1.5;
    const fontSize = 0.3 + Math.random() * 0.5;

    el.style.fontSize = `${fontSize}rem`;
    el.style.opacity = opacity;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;
    el.style.color = Math.random() > 0.7 ? 'var(--color-gold-light)' : 'var(--color-gold)';

    container.appendChild(el);
  }
})();


/* ============================================================
   8. DEVICE PREVIEW TOGGLE & TEMPLATE LOAD
   ============================================================ */
(function initDevicePreview() {
  const toggleButtons = $$('.device-toggle');
  const frame = $('#preview-frame');
  const iframe = $('#preview-iframe');
  const frameTitle = $('#preview-frame-title');
  if (!frame) return;

  const widthMap = {
    mobile: '375px',
    tablet: '768px',
    desktop: '100%',
  };

  const setDevice = (device) => {
    toggleButtons.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.device === device);
      btn.setAttribute('aria-pressed', btn.dataset.device === device);
    });

    frame.dataset.device = device;
    frame.style.maxWidth = widthMap[device] ?? '375px';
  };

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => setDevice(btn.dataset.device));
  });

  // Handle template "Live Preview" buttons from template cards
  const previewButtons = $$('.btn-preview-template');
  previewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.dataset.templateUrl;
      const name = btn.dataset.templateName;

      if (iframe && url) {
        iframe.src = url;
      }
      if (frameTitle && name) {
        frameTitle.textContent = name;
      }

      // Smooth scroll to preview section
      const previewSec = $('#preview');
      if (previewSec) {
        previewSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  setDevice('mobile');
})();


/* ============================================================
   9. TESTIMONIALS — DRAG SCROLL CAROUSEL
   ============================================================ */
(function initTestimonialCarousel() {
  const track = $('.testimonials__track');
  if (!track) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.userSelect = 'none';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => { isDown = false; });
  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.userSelect = '';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch support
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  }, { passive: true });
})();


/* ============================================================
   10. TESTIMONIAL DOT INDICATORS + AUTO-PLAY
   ============================================================ */
(function initTestimonialDots() {
  const track = $('.testimonials__track');
  const dots = $$('.dot');
  const cards = $$('.quote-card', track);
  if (!track || !dots.length || !cards.length) return;

  let autoPlayTimer = null;
  let currentIndex = 0;

  const scrollToCard = (index) => {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    currentIndex = index;
    const offset = 48;
    track.scrollTo({ left: cards[index].offsetLeft - offset, behavior: 'smooth' });
  };

  const updateDots = () => {
    const scrolled = track.scrollLeft;
    let closest = 0;
    let minDist = Infinity;

    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - scrolled);
      if (dist < minDist) { minDist = dist; closest = i; }
    });

    currentIndex = closest;
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === closest);
      dot.setAttribute('aria-pressed', i === closest);
    });
  };

  // Dot click → scroll to card
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => scrollToCard(i));
  });

  track.addEventListener('scroll', updateDots, { passive: true });

  // Auto-play every 4 seconds
  const startAutoPlay = () => {
    autoPlayTimer = setInterval(() => {
      scrollToCard(currentIndex + 1);
    }, 4000);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayTimer);
  };

  // Pause auto-play on hover/touch
  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('touchstart', stopAutoPlay, { passive: true });
  track.addEventListener('mouseleave', startAutoPlay);
  track.addEventListener('touchend', startAutoPlay, { passive: true });

  startAutoPlay();
  updateDots();
})();


/* ============================================================
   11. 3D CARD TILT EFFECT
   Mouse-tracking perspective tilt on template cards.
   ============================================================ */
(function initCardTilt() {
  const cards = $$('.template-card');
  if (!cards.length) return;

  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  const INTENSITY = 8; // degrees max tilt

  cards.forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, box-shadow 0.3s';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotateX = -dy * INTENSITY;
      const rotateY = dx * INTENSITY;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    });
  });
})();


/* ============================================================
   12. FOOTER YEAR AUTO-UPDATE
   ============================================================ */
(function updateFooterYear() {
  const el = $('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ============================================================
   INIT — DOMContentLoaded safety wrapper
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Smooth anchor link offset correction (accounts for fixed header)
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height')
      ) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Register PWA Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Rab6 Service Worker Registered:', reg.scope))
        .catch(err => console.warn('Rab6 Service Worker Failed:', err));
    });
  }

  console.log('%cLuxury Invitations — Navy × Gold Edition ✦', 'color:#CCA000;font-family:serif;font-size:14px;');
});
