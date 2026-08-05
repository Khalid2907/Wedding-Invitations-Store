document.addEventListener('DOMContentLoaded', () => {

  // ═══════════════════════════════════════════════════════════
  // 1. WEB AUDIO SYNTHESIZER FOR SOUND EFFECTS
  // ═══════════════════════════════════════════════════════════
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Synthesize wax seal break sound (satisfying pop + sparkle chime)
  function playSealBreakSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Pop sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);

      // Chime sparkle sound
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const chimeOsc = ctx.createOscillator();
        const chimeGain = ctx.createGain();

        chimeOsc.type = 'sine';
        chimeOsc.frequency.value = freq;

        const startTime = now + 0.08 + (i * 0.05);
        chimeGain.gain.setValueAtTime(0.1, startTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(ctx.destination);

        chimeOsc.start(startTime);
        chimeOsc.stop(startTime + 0.4);
      });
    } catch (e) {
      console.log('Audio Context unavailable', e);
    }
  }

  // Synthesize subtle UI click sound
  function playClickSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }


  // ═══════════════════════════════════════════════════════════
  // 2. WAX SEAL ENVELOPE UNSEAL EXPERIENCE
  // ═══════════════════════════════════════════════════════════
  const envelopeOverlay = document.getElementById('envelope-overlay');
  const envelopeContainer = document.getElementById('envelope-container');
  const waxSealBtn = document.getElementById('wax-seal-btn');
  const envelopeReopenBtn = document.getElementById('envelope-reopen-btn');

  function openEnvelope(e) {
    playSealBreakSound();
    if (window.triggerStardustBurst) {
      const rect = waxSealBtn ? waxSealBtn.getBoundingClientRect() : null;
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      window.triggerStardustBurst(x, y);
    }
    envelopeContainer.classList.add('unsealed');
    
    // Smoothly start romantic background music right after the entrance seal break sound finishes
    setTimeout(() => {
      playBackgroundMusic();
    }, 550);

    // Animate overlay departure after inner card glides up
    setTimeout(() => {
      envelopeOverlay.classList.remove('active');
      setTimeout(() => {
        envelopeContainer.classList.remove('unsealed');
      }, 700);
    }, 1400);
  }

  if (waxSealBtn) {
    waxSealBtn.addEventListener('click', openEnvelope);
  }

  if (envelopeReopenBtn) {
    envelopeReopenBtn.addEventListener('click', (e) => {
      playClickSound();
      if (window.triggerStardustBurst) {
        window.triggerStardustBurst(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);
      }
      envelopeOverlay.classList.add('active');
    });
  }


  // ═══════════════════════════════════════════════════════════
  // 3. BILINGUAL TRANSLATION ENGINE (ENGLISH & ARABIC)
  // ═══════════════════════════════════════════════════════════
  const translations = {
    en: {
      doc_title: "Elena & Marcus — Glass Pavilion Digital Wedding Invitation",
      music_play: "Music",
      nav_envelope: "Envelope",
      env_invitation: "Save The Date",
      env_couple_names: "Elena & Marcus",
      env_date: "10 . 10 . 2026",
      seal_hint: "Click to Unseal",
      badge_save_date: "Save the Date",
      bride_name: "Elena",
      groom_name: "Marcus",
      hero_venue: "The Glass Pavilion",
      hero_explore: "Explore Our World",
      story_title: "Our Story",
      story1_date: "May 14, 2021",
      story1_title: "The First Encounter",
      story1_text: "Our paths crossed on a rain-swept afternoon in London. Sheltering beneath the glass canopy of a botanical greenhouse, a shared cup of coffee blossomed into a conversation that lasted until twilight.",
      story2_date: "October 22, 2023",
      story2_title: "The Shared Horizon",
      story2_text: "From hiking alpine peaks to wandering quiet museum galleries, we built a shared life of curiosity and comfort. We learned that love is looking outward in the same direction.",
      story3_date: "December 25, 2025",
      story3_title: "The Proposal",
      story3_text: "Under a dome of starlight in the Swiss Alps, Marcus asked Elena to share a lifetime of adventures. With tears of joy and the mountains as our witnesses, we promised our forevers.",
      details_title: "The Celebration",
      ceremony_title: "The Ceremony",
      ceremony_time: "Three o'clock in the afternoon",
      ceremony_loc: "The Grand Sanctuary",
      ceremony_sub: "Reflecting pool courtyard",
      event_date: "October 10, 2026",
      reception_title: "The Reception",
      reception_time: "Five o'clock in the evening",
      reception_loc: "The Glass Pavilion",
      reception_sub: "Dining & Dancing under the stars",
      dresscode_title: "Dress Code",
      dresscode_style: "Ethereal Formal",
      dresscode_colors: "Palettes of blush, soft sage, cream, lavender, and gold neutrals are welcomed.",
      dresscode_note: "Ensure comfort for an outdoor evening terrace.",
      dresscode_meta: "Formal Attire",
      widget_apple: "Add to Apple / iCal Calendar",
      widget_google: "Add to Google Calendar",
      countdown_title: "Counting the Moments",
      timer_days: "Days",
      timer_hours: "Hours",
      timer_minutes: "Minutes",
      timer_seconds: "Seconds",
      gallery_title: "Gallery",
      gal1_cap: "The Glass Pavilion",
      gal2_cap: "Golden Hour Joy",
      gal3_cap: "Our Shared Laughter",
      gal4_cap: "The Promise",
      gal5_cap: "Ethereal Styling",
      gal6_cap: "Midnight Glow",
      wishwall_title: "Messages of Love",
      wishwall_sub: "Leave your heartfelt wishes for Elena & Marcus",
      wish_ph_name: "Your Name",
      wish_ph_relation: "Relation (e.g. Best Friend, Cousin)",
      wish_ph_msg: "Write your warm wish here...",
      wish_btn_send: "Post Wish",
      rsvp_title: "RSVP",
      rsvp_sub: "Please confirm your presence to celebrate with us",
      rsvp_label_name: "Your Full Name",
      rsvp_ph_name: "Elena Rostova",
      rsvp_label_email: "Email Address",
      rsvp_ph_email: "elena@example.com",
      rsvp_label_join: "Will you join us?",
      rsvp_opt_yes: "Attending with Joy",
      rsvp_opt_no: "Declined with Regret",
      rsvp_label_guests: "Number of Guests",
      rsvp_opt_g1: "1 (Just me)",
      rsvp_opt_g2: "2 (Plus guest)",
      rsvp_label_diet: "Dietary Preferences",
      rsvp_ph_diet: "None, Vegetarian, Gluten-Free, etc.",
      rsvp_label_notes: "A Message for the Couple (Optional)",
      rsvp_ph_notes: "Share your warm wishes or notes here...",
      rsvp_btn_send: "Send RSVP",
      footer_sub: "Created with love, styled under glass."
    },
    ar: {
      doc_title: "إيلينا وماركوس — دعوة زفاف قصر الزجاج الرقمية",
      music_play: "الموسيقى",
      nav_envelope: "الظرف",
      env_invitation: "احفظ التاريخ",
      env_couple_names: "إيلينا وماركوس",
      env_date: "١٠ . ١٠ . ٢٠٢٦",
      seal_hint: "اضغط لفتح الخاتم",
      badge_save_date: "احفظ التاريخ",
      bride_name: "إيلينا",
      groom_name: "ماركوس",
      hero_venue: "قصر الزجاج الأثيري",
      hero_explore: "اكتشف عالمنا",
      story_title: "قصتنا",
      story1_date: "١٤ مايو ٢٠٢١",
      story1_title: "اللقاء الأول",
      story1_text: "تقاطعت طرقنا في بعد ظهر ممطر في قلب لندن. تحت القبة الزجاجية للحديقة النباتية، تحول فنجان قهوة مشترك إلى حديث دافئ استمر حتى الغسق.",
      story2_date: "٢٢ أكتوبر ٢٠٢٣",
      story2_title: "الأفق المشترك",
      story2_text: "من تسلق قمم الجبال إلى التجول في المعارض الهادئة، بنينا حياة مشتركة من الفضول والراحة. تعلمنا أن الحب هو النظر معاً في نفس الاتجاه.",
      story3_date: "٢٥ ديسمبر ٢٠٢٥",
      story3_title: "طلب الزواج",
      story3_text: "تحت قبة من النجوم وفي قلب جبال الألب السويسرية، طلب ماركوس من إيلينا أن تشاركه العمر. ومع دموع الفرح والجبال كشاهد، قطعنا وعد الأبدية.",
      details_title: "الاحتفال",
      ceremony_title: "مراسم الزفاف",
      ceremony_time: "الثالثة عصراً",
      ceremony_loc: "الملاذ الكبير",
      ceremony_sub: "باحة البركة العاكسة",
      event_date: "١٠ أكتوبر ٢٠٢٦",
      reception_title: "حفل الاستقبال",
      reception_time: "الخامسة مساءً",
      reception_loc: "قصر الزجاج",
      reception_sub: "عشاء ورقص تحت النجوم",
      dresscode_title: "قواعد الزي",
      dresscode_style: "رسمي أثيري",
      dresscode_colors: "نرحب بألوان الوردي الناعم، الميرمية، الكريمة، اللافندر، والألوان الذهبية المحايدة.",
      dresscode_note: "يرجى مراعاة الراحة لأمسية خارجية على التراس.",
      dresscode_meta: "زي رسمي فاخر",
      widget_apple: "إضافة إلى تقويم أبل",
      widget_google: "إضافة إلى تقويم جوجل",
      countdown_title: "نعد اللحظات",
      timer_days: "أيام",
      timer_hours: "ساعات",
      timer_minutes: "دقائق",
      timer_seconds: "ثواني",
      gallery_title: "معرض الصور",
      gal1_cap: "قصر الزجاج الأثيري",
      gal2_cap: "بهجة الساعة الذهبية",
      gal3_cap: "ضحكاتنا المشتركة",
      gal4_cap: "وعد الأبدية",
      gal5_cap: "تنسيقات أثيرية",
      gal6_cap: "توهج منتصف الليل",
      wishwall_title: "رسائل الحب",
      wishwall_sub: "اترك أمنياتك القلبية للعروسين إيلينا وماركوس",
      wish_ph_name: "اسمك الكريم",
      wish_ph_relation: "صلة القرابة (مثال: صديق، قريب)",
      wish_ph_msg: "اكتب أمنيتك الدافئة هنا...",
      wish_btn_send: "إرسال الأمنية",
      rsvp_title: "تأكيد الحضور",
      rsvp_sub: "يرجى تأكيد حضوركم لمشاركتنا فرحتنا",
      rsvp_label_name: "الاسم الكامل",
      rsvp_ph_name: "إيلينا روستوفا",
      rsvp_label_email: "البريد الإلكتروني",
      rsvp_ph_email: "elena@example.com",
      rsvp_label_join: "هل ستنضم إلينا؟",
      rsvp_opt_yes: "يشرفني الحضور بكل سرور",
      rsvp_opt_no: "أعتذر عن الحضور مع خالص التقدير",
      rsvp_label_guests: "عدد الضيوف",
      rsvp_opt_g1: "١ (أنا فقط)",
      rsvp_opt_g2: "٢ (مع مرافق)",
      rsvp_label_diet: "تفضلات الطعام",
      rsvp_ph_diet: "لا يوجد، نباتي، خالي من الجلوتين، إلخ.",
      rsvp_label_notes: "رسالة للعروسين (اختياري)",
      rsvp_ph_notes: "اكتب تهنئتك وملاحظاتك هنا...",
      rsvp_btn_send: "إرسال تأكيد الحضور",
      footer_sub: "صُنعت بحب، وصُممت تحت قبة الزجاج."
    }
  };

  let currentLang = localStorage.getItem('invitation_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('invitation_lang', lang);
    const htmlEl = document.documentElement;

    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = translations[lang];

    // Update Title
    if (dict.doc_title) document.title = dict.doc_title;

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update data-i18n-ph elements
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update button label
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'العربية' : 'English';
    }
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      playClickSound();
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  }

  // Initial apply
  applyLanguage(currentLang);


  // ═══════════════════════════════════════════════════════════
  // 4. BACKGROUND AUDIO MUSIC PLAYER & FADE-IN CONTROLLER
  // ═══════════════════════════════════════════════════════════
  const bgMusic = document.getElementById('bg-music');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const vinylIcon = document.getElementById('vinyl-icon');
  let isPlaying = false;

  function playBackgroundMusic() {
    if (!bgMusic || isPlaying) return;
    bgMusic.volume = 0;
    bgMusic.play().then(() => {
      isPlaying = true;
      if (vinylIcon) vinylIcon.classList.add('playing');
      
      // Smooth volume fade-in over 1.5s
      let vol = 0;
      const fadeInterval = setInterval(() => {
        vol += 0.05;
        if (vol >= 0.45) {
          vol = 0.45;
          clearInterval(fadeInterval);
        }
        bgMusic.volume = vol;
      }, 75);

    }).catch(err => {
      console.log('Background music playback waiting for gesture:', err);
    });
  }

  function pauseBackgroundMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
    isPlaying = false;
    if (vinylIcon) vinylIcon.classList.remove('playing');
  }

  if (musicToggleBtn && bgMusic) {
    musicToggleBtn.addEventListener('click', () => {
      playClickSound();
      if (isPlaying) {
        pauseBackgroundMusic();
      } else {
        playBackgroundMusic();
      }
    });
  }


  // ═══════════════════════════════════════════════════════════
  // 5. STARDUST PARTICLES CANVAS ENGINE
  // ═══════════════════════════════════════════════════════════
  const canvas = document.getElementById('stardust-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        color: Math.random() > 0.4 ? 'rgba(243, 211, 117, ' : 'rgba(212, 175, 255, ',
        alpha: Math.random() * 0.7 + 0.2,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

        // Wrap around bounds
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Slight mouse attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x += (dx / dist) * 0.3;
          p.y += (dy / dist) * 0.3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.max(0.1, Math.min(0.9, p.alpha)) + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(243, 211, 117, 0.5)';
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }


  // ═══════════════════════════════════════════════════════════
  // 6. 3D PERSPECTIVE TILT FOR GLASS CARDS
  // ═══════════════════════════════════════════════════════════
  const glassPanels = document.querySelectorAll('.glass-panel');

  glassPanels.forEach(panel => {
    panel.addEventListener('mousemove', (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    panel.addEventListener('mouseleave', () => {
      panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });


  // ═══════════════════════════════════════════════════════════
  // 7. GUESTBOOK / WISH WALL ENGINE
  // ═══════════════════════════════════════════════════════════
  const wishForm = document.getElementById('wish-form');
  const wishesGrid = document.getElementById('wishes-grid');

  const defaultWishes = [
    {
      name: "Sophia & Julian",
      relation: "Close Friends",
      message: "May your love bloom forever under the glass canopy. Wishing you infinite joy, laughter, and romance on this sacred journey!",
      date: "Just now"
    },
    {
      name: "Arthur Pendelton",
      relation: "Family",
      message: "To my dear niece Elena & Marcus—may your union be as resilient and bright as crystal. So thrilled to celebrate with you both!",
      date: "2 hours ago"
    },
    {
      name: "Claire & Vincent",
      relation: "College Classmates",
      message: "From starry botanical nights in London to your dream wedding—cheers to the most magnificent pair! Count us in for dancing!",
      date: "1 day ago"
    }
  ];

  let wishesList = JSON.parse(localStorage.getItem('wedding_wishes')) || defaultWishes;

  function renderWishes() {
    if (!wishesGrid) return;
    wishesGrid.innerHTML = '';

    wishesList.forEach(w => {
      const initial = w.name ? w.name.charAt(0).toUpperCase() : '✦';
      const card = document.createElement('div');
      card.className = 'wish-card glass-panel';
      card.innerHTML = `
        <div class="wish-header">
          <div class="wish-avatar">${initial}</div>
          <div class="wish-meta">
            <h4>${escapeHTML(w.name)}</h4>
            <span>${escapeHTML(w.relation || 'Guest')}</span>
          </div>
        </div>
        <div class="wish-body">"${escapeHTML(w.message)}"</div>
        <div class="wish-footer">${escapeHTML(w.date || 'Recently')}</div>
      `;
      wishesGrid.appendChild(card);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  if (wishForm) {
    wishForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playClickSound();

      const name = document.getElementById('wish-name').value.trim();
      const relation = document.getElementById('wish-relation').value.trim();
      const message = document.getElementById('wish-message').value.trim();

      if (!name || !message) return;

      const newWish = {
        name: name,
        relation: relation || 'Guest',
        message: message,
        date: 'Just now'
      };

      wishesList.unshift(newWish);
      localStorage.setItem('wedding_wishes', JSON.stringify(wishesList));
      renderWishes();
      wishForm.reset();

      showToast(currentLang === 'ar' ? `شكراً لك ${name}! تم إرسال أمنيتك الدافئة.` : `Thank you ${name}! Your wish has been posted.`);
    });
  }

  renderWishes();


  // ═══════════════════════════════════════════════════════════
  // 8. GALLERY LIGHTBOX MODAL
  // ═══════════════════════════════════════════════════════════
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentGalleryIndex = 0;

  function openLightbox(index) {
    currentGalleryIndex = index;
    const item = galleryItems[index];
    if (!item) return;

    const img = item.querySelector('img');
    const caption = item.getAttribute('data-caption') || '';

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption;

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      playClickSound();
      openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      playClickSound();
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(currentGalleryIndex);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      playClickSound();
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
      openLightbox(currentGalleryIndex);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
  });


  // ═══════════════════════════════════════════════════════════
  // 9. INTERSECTION OBSERVER FOR SCROLL REVEAL
  // ═══════════════════════════════════════════════════════════
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));


  // ═══════════════════════════════════════════════════════════
  // 10. COUNTDOWN TIMER
  // ═══════════════════════════════════════════════════════════
  const targetDate = new Date('Oct 10, 2026 15:00:00').getTime();
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      if (timerDays) timerDays.textContent = '00';
      if (timerHours) timerHours.textContent = '00';
      if (timerMinutes) timerMinutes.textContent = '00';
      if (timerSeconds) timerSeconds.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (timerDays) timerDays.textContent = String(d).padStart(2, '0');
    if (timerHours) timerHours.textContent = String(h).padStart(2, '0');
    if (timerMinutes) timerMinutes.textContent = String(m).padStart(2, '0');
    if (timerSeconds) timerSeconds.textContent = String(s).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


  // ═══════════════════════════════════════════════════════════
  // 11. RSVP FORM HANDLING & LOGIC
  // ═══════════════════════════════════════════════════════════
  const rsvpForm = document.getElementById('wedding-rsvp-form');
  const attendanceYes = document.getElementById('attendance-yes');
  const attendanceNo = document.getElementById('attendance-no');
  const guestsGroup = document.getElementById('guests-group');
  const dietaryGroup = document.getElementById('dietary-group');
  const submitBtn = document.getElementById('rsvp-submit-btn');

  if (attendanceYes && attendanceNo) {
    attendanceYes.addEventListener('change', () => {
      guestsGroup.style.opacity = '1';
      guestsGroup.style.pointerEvents = 'auto';
      dietaryGroup.style.opacity = '1';
      dietaryGroup.style.pointerEvents = 'auto';
    });

    attendanceNo.addEventListener('change', () => {
      guestsGroup.style.opacity = '0.3';
      guestsGroup.style.pointerEvents = 'none';
      dietaryGroup.style.opacity = '0.3';
      dietaryGroup.style.pointerEvents = 'none';
    });
  }

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playClickSound();

      const name = document.getElementById('rsvp-name').value;
      const attending = attendanceYes.checked;
      const guests = document.getElementById('rsvp-guests').value;

      const btnText = submitBtn.querySelector('span');
      const btnIcon = submitBtn.querySelector('i');
      
      btnText.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
      btnIcon.className = 'fa-solid fa-circle-notch fa-spin';
      submitBtn.disabled = true;

      setTimeout(() => {
        btnText.textContent = currentLang === 'ar' ? 'تم الإرسال بنجاح' : 'Sent Successfully';
        btnIcon.className = 'fa-solid fa-check';

        const toastMsg = attending 
          ? (currentLang === 'ar' ? `شكراً لك ${name}! تم حفظ مكانك لـ ${guests} ضيف.` : `Thank you, ${name}! We've saved a seat for you & ${guests - 1} guests.`)
          : (currentLang === 'ar' ? `شكراً لإبلاغنا ${name}. سنشتاق لحضورك!` : `Thank you for letting us know, ${name}. You will be missed!`);
        
        showToast(toastMsg);

        setTimeout(() => {
          rsvpForm.reset();
          btnText.textContent = translations[currentLang].rsvp_btn_send || 'Send RSVP';
          btnIcon.className = 'fa-solid fa-paper-plane';
          submitBtn.disabled = false;
        }, 3000);

      }, 1200);
    });
  }


  // ═══════════════════════════════════════════════════════════
  // 12. WALLET & CALENDAR INTEGRATIONS (.ICS GENERATION)
  // ═══════════════════════════════════════════════════════════
  const appleWalletBtn = document.getElementById('btn-apple-wallet');
  const googleCalendarBtn = document.getElementById('btn-google-calendar');

  if (appleWalletBtn) {
    appleWalletBtn.addEventListener('click', () => {
      playClickSound();
      showToast(currentLang === 'ar' ? 'جاري إنشاء ملف التقويم iCal...' : 'Generating iCal Calendar File...');
      
      const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Elena & Marcus Wedding//Glass Pavilion//EN
BEGIN:VEVENT
SUMMARY:Elena & Marcus Wedding Celebration
DESCRIPTION:Join us to celebrate the marriage of Elena & Marcus at The Glass Pavilion.
LOCATION:The Glass Pavilion, Reflecting Pool Courtyard
DTSTART:20261010T150000Z
DTEND:20261011T020000Z
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', 'Elena_Marcus_Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  if (googleCalendarBtn) {
    googleCalendarBtn.addEventListener('click', () => {
      playClickSound();
      showToast(currentLang === 'ar' ? 'جاري التوجيه إلى تقويم جوجل...' : 'Redirecting to Google Calendar...');
      
      const title = 'Elena & Marcus Wedding Celebration';
      const details = 'Join us to celebrate the marriage of Elena & Marcus at The Glass Pavilion.';
      const location = 'The Glass Pavilion, Reflecting Pool Courtyard';
      const startDate = '20261010T150000Z';
      const endDate = '20261011T020000Z';
      
      const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
      
      setTimeout(() => {
        window.open(gCalUrl, '_blank');
      }, 800);
    });
  }


  // ═══════════════════════════════════════════════════════════
  // 13. HELPER TOAST FUNCTION
  // ═══════════════════════════════════════════════════════════
  const toastNotification = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  let toastTimeout;

  function showToast(message) {
    if (!toastNotification || !toastText) return;
    clearTimeout(toastTimeout);
    
    toastText.textContent = message;
    toastNotification.classList.add('show');
    
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4000);
  }


  // ═══════════════════════════════════════════════════════════
  // 14. ETHEREAL STARDUST CANVAS & METEOR ENGINE
  // ═══════════════════════════════════════════════════════════
  function initStardustEngine() {
    const canvas = document.getElementById('stardust-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000 };
    const particles = [];
    const burstParticles = [];
    const meteors = [];

    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 11000), 120);

    const colors = [
      { r: 243, g: 211, b: 117 }, // Gold
      { r: 212, g: 175, b: 255 }, // Violet
      { r: 255, g: 255, b: 255 }, // Diamond
      { r: 255, g: 216, b: 223 }  // Rose
    ];

    function createParticle() {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        baseRadius: Math.random() * 1.8 + 0.6,
        color: color,
        alpha: Math.random() * 0.7 + 0.2,
        baseAlpha: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseAngle: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3 - 0.15
      };
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    function createMeteor() {
      meteors.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * (height * 0.3),
        length: Math.random() * 120 + 80,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }

    setInterval(createMeteor, 4500);

    window.triggerStardustBurst = function (originX, originY) {
      for (let i = 0; i < 45; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        burstParticles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3 + 1.5,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          color: color
        });
      }
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Constellation Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(243, 211, 117, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Ambient Floating Stardust Particles
      particles.forEach((p) => {
        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = Math.max(0.1, p.baseAlpha + Math.sin(p.pulseAngle) * 0.3);

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse magnetic reaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);

        let glowFactor = 1;
        if (mouseDist < 160) {
          const force = (160 - mouseDist) / 160;
          p.x += (dx / mouseDist) * force * 1.2;
          p.y += (dy / mouseDist) * force * 1.2;
          glowFactor = 1 + force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * glowFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.shadowBlur = 10 * glowFactor;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Burst Particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const bp = burstParticles[i];
        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.vy += 0.08;
        bp.alpha -= bp.decay;

        if (bp.alpha <= 0) {
          burstParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(bp.x, bp.y, bp.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bp.color.r}, ${bp.color.g}, ${bp.color.b}, ${bp.alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${bp.color.r}, ${bp.color.g}, ${bp.color.b}, 0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Shooting Stars / Meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0 || m.x > width || m.y > height) {
          meteors.splice(i, 1);
          continue;
        }

        const headX = m.x;
        const headY = m.y;
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(headX, headY, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
        grad.addColorStop(0.3, `rgba(243, 211, 117, ${m.alpha * 0.8})`);
        grad.addColorStop(1, `rgba(212, 175, 255, 0)`);

        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(243, 211, 117, 0.8)';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(draw);
    }

    draw();
  }
  initStardustEngine();

  // ═══════════════════════════════════════════════════════════
  // 15. INTERACTIVE 3D PARALLAX TILT FOR GLASS PANELS
  // ═══════════════════════════════════════════════════════════
  function initGlassParallax3D() {
    const panels = document.querySelectorAll('.glass-panel');
    
    panels.forEach(panel => {
      panel.addEventListener('mousemove', (e) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
        panel.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
        panel.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
      });

      panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      });
    });
  }
  initGlassParallax3D();

  // ═══════════════════════════════════════════════════════════
  // 16. DYNAMIC SCROLL PROGRESS FOR TIMELINE
  // ═══════════════════════════════════════════════════════════
  function initScrollProgress() {
    const progressLine = document.getElementById('timeline-progress');
    const storySection = document.getElementById('story-section');
    if (!progressLine || !storySection) return;

    window.addEventListener('scroll', () => {
      const rect = storySection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      
      let percentage = (currentScroll / (totalHeight + windowHeight * 0.3)) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      progressLine.style.height = `${percentage}%`;
    });
  }
  initScrollProgress();

  // ═══════════════════════════════════════════════════════════
  // 17. SIDE SECTION SCROLL INDICATOR & NAV TRACKER
  // ═══════════════════════════════════════════════════════════
  function initSideScrollNav() {
    const sideNav = document.getElementById('side-scroll-nav');
    const sideNavFill = document.getElementById('side-nav-fill');
    const sideDots = document.querySelectorAll('.side-dot');
    
    if (!sideNav || !sideDots.length) return;

    const sectionElements = Array.from(sideDots).map(dot => {
      const sectionId = dot.getAttribute('data-section');
      return document.getElementById(sectionId);
    }).filter(Boolean);

    function updateActiveSection() {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;

      if (sideNavFill) {
        sideNavFill.style.height = `${scrollPercent}%`;
      }

      let currentSectionId = '';
      sectionElements.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.id;
        }
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 60) {
        currentSectionId = sectionElements[sectionElements.length - 1].id;
      }

      sideDots.forEach(dot => {
        if (dot.getAttribute('data-section') === currentSectionId) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    sideDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        playClickSound();
        const sectionId = dot.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
  }
  initSideScrollNav();

});
