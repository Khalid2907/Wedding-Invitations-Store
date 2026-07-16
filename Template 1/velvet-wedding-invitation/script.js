/* ==========================================================================
   "VELVET" VINTAGE INVITATION INTERACTIVE CONTROLLER
   Handling Envelope transitions, Slide Projector animations, Web Audio
   Sound Synthesis, and Interactive Vinyl Playback.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- AUDIO SYNTHESIS & SYSTEM SETUP ---
  // Web Audio Context for tactile mechanical sound synthesis (no external assets required!)
  let audioCtx = null;
  const clickSoundBtn = document.getElementById('music-toggle-btn');
  const bgMusic = document.getElementById('bg-music');
  let isPlayingMusic = false;

  // Initialize Audio Context on user click to comply with browser autoplay policies
  function initAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  /**
   * Synthesizes a realistic 1970s mechanical slide projector sound.
   * Emulates a mechanical shutter release click + carousel rotary slot lock thump.
   */
  function playProjectorSound(isClose = false) {
    initAudioContext();
    if (!audioCtx) return;

    // Create Audio Nodes
    const osc = audioCtx.createOscillator();
    const noise = audioCtx.createBufferSource();
    const noiseFilter = audioCtx.createBiquadFilter();
    const oscGain = audioCtx.createGain();
    const noiseGain = audioCtx.createGain();

    // 1. High Frequency Shutter Click (Metal latch snap)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isClose ? 600 : 850, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);
    
    oscGain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09);

    // 2. White Noise Burst (Aged mechanical air release / friction)
    const bufferSize = audioCtx.sampleRate * 0.12; // 120ms burst
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(isClose ? 1200 : 1800, audioCtx.currentTime);
    noiseFilter.Q.setValueAtTime(3, audioCtx.currentTime);

    noiseGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.11);

    // 3. Low Frequency Carousel Thump (Solenoid slot drop)
    const thumpOsc = audioCtx.createOscillator();
    const thumpGain = audioCtx.createGain();
    thumpOsc.type = 'sine';
    thumpOsc.frequency.setValueAtTime(65, audioCtx.currentTime);
    thumpOsc.frequency.exponentialRampToValueAtTime(20, audioCtx.currentTime + 0.15);

    thumpGain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    thumpGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.16);

    // Connect nodes to destination
    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    thumpOsc.connect(thumpGain);
    thumpGain.connect(audioCtx.destination);

    // Start & Stop playback
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.1);
    
    noise.start(audioCtx.currentTime);
    noise.stop(audioCtx.currentTime + 0.12);

    thumpOsc.start(audioCtx.currentTime);
    thumpOsc.stop(audioCtx.currentTime + 0.18);
  }

  /**
   * Synthesizes a wax cracking and paper slide sound for the opening seal.
   */
  function playEnvelopeOpenSound() {
    initAudioContext();
    if (!audioCtx) return;

    // 1. Wax Crackle (High frequency random noise spikes)
    const bufferSize = audioCtx.sampleRate * 0.4; // 400ms duration
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Create random sharp impulses
      data[i] = Math.random() > 0.985 ? (Math.random() * 2 - 1) : 0;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.38);

    // 2. Swoosh (Heavy cotton paper pull)
    const swooshOsc = audioCtx.createOscillator();
    const swooshGain = audioCtx.createGain();
    swooshOsc.type = 'triangle';
    swooshOsc.frequency.setValueAtTime(180, audioCtx.currentTime);
    swooshOsc.frequency.linearRampToValueAtTime(80, audioCtx.currentTime + 0.8);
    
    swooshGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    swooshGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.7);

    noise.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    swooshOsc.connect(swooshGain);
    swooshGain.connect(audioCtx.destination);

    noise.start(audioCtx.currentTime);
    noise.stop(audioCtx.currentTime + 0.4);

    swooshOsc.start(audioCtx.currentTime);
    swooshOsc.stop(audioCtx.currentTime + 0.85);
  }


  // --- ENVELOPE OPENING HANDLER ---
  const appContainer = document.getElementById('app-container');
  const waxSeal = document.getElementById('wax-seal');

  waxSeal.addEventListener('click', () => {
    // 1. Initialize audio and play tactile sound effects
    initAudioContext();
    playEnvelopeOpenSound();

    // 2. Begin Envelope open animation sequence
    appContainer.classList.add('open');

    // 3. Wait for envelope flap to rotate and card to stick out
    setTimeout(() => {
      // Slide envelope out and transition main invitation in
      appContainer.classList.add('content-active');
      playProjectorSound(false); // Play projector start chime/click
      
      // Auto-unlock background music on initial seal break
      toggleBackgroundMusic(true);
    }, 1400);
  });


  // --- SLIDE PROJECTOR CAROUSEL CONTROLLER ---
  const slides = document.querySelectorAll('.projector-slide');
  const btnPrev = document.getElementById('btn-prev-slide');
  const btnNext = document.getElementById('btn-next-slide');
  const currentSlideNum = document.getElementById('current-slide-num');
  const projectorViewport = document.getElementById('projector-viewport');
  let activeIndex = 0; // 0 matches slide-intro (Index 1)

  function showSlide(index) {
    if (index === activeIndex) return;

    // 1. Play projector sound & trigger shutter close animation (Brief darkness)
    playProjectorSound(true);
    projectorViewport.classList.add('shutter-closed');
    
    // Add transition styling to existing active slide
    slides[activeIndex].classList.add('transitioning');

    // 2. Middle of the slide change (Shutter is fully closed)
    setTimeout(() => {
      // Clean up old active classes
      slides[activeIndex].classList.remove('active', 'transitioning');
      
      // Set new active slide
      activeIndex = index;
      slides[activeIndex].classList.add('active');
      
      // Update Monospace footer counter (e.g. 01, 02)
      currentSlideNum.textContent = String(activeIndex + 1).padStart(2, '0');
      
      // Release mechanical shutter (fades back in)
      projectorViewport.classList.remove('shutter-closed');
      playProjectorSound(false);
    }, 320); // Syncs with CSS projector-shutter transition timing
  }

  // Next / Previous Knob bindings
  btnNext.addEventListener('click', () => {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0; // Loop back
    }
    showSlide(nextIndex);
  });

  btnPrev.addEventListener('click', () => {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) {
      prevIndex = slides.length - 1; // Loop back
    }
    showSlide(prevIndex);
  });

  // Support Arrow Keys and Spacebar for true vintage slide presentation feel
  document.addEventListener('keydown', (e) => {
    // Only intercept key presses if invitation is active (envelope is opened)
    if (!appContainer.classList.contains('content-active')) return;

    if (e.key === 'ArrowRight' || e.key === 'Spacebar' || e.key === ' ') {
      e.preventDefault();
      btnNext.click();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      btnPrev.click();
    }
  });


  // --- INTERACTIVE VINYL RECORD TURNTABLE ---
  const vinylDisc = document.getElementById('vinyl-disc');
  const tonearm = document.getElementById('tonearm');
  const turntableSwitch = document.getElementById('turntable-switch');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const trackName = document.getElementById('track-name');

  function updateMusicUI(isPlaying) {
    if (isPlaying) {
      document.body.classList.add('music-playing');
      tonearm.classList.add('active');
      
      setTimeout(() => {
        vinylDisc.classList.add('playing');
      }, 800); // Wait for tonearm to swing onto record before spinning
      
      musicToggleBtn.querySelector('.btn-text').textContent = "Music On";
      musicToggleBtn.classList.add('music-playing');
      trackName.textContent = "Spinning: Folk Roots & Coast Ballads";
    } else {
      document.body.classList.remove('music-playing');
      vinylDisc.classList.remove('playing');
      tonearm.classList.remove('active');
      
      musicToggleBtn.querySelector('.btn-text').textContent = "Music Off";
      musicToggleBtn.classList.remove('music-playing');
      trackName.textContent = "Vinyl Stopped";
    }
  }

  function toggleBackgroundMusic(forceState = null) {
    initAudioContext();
    
    // Determine new state
    const targetState = (forceState !== null) ? forceState : !isPlayingMusic;
    
    if (targetState === isPlayingMusic) return;
    
    isPlayingMusic = targetState;
    updateMusicUI(isPlayingMusic);
    
    if (isPlayingMusic) {
      // Play HTML5 background music element
      bgMusic.play().catch(err => {
        console.warn("Background music autoplay was blocked: ", err);
        isPlayingMusic = false;
        updateMusicUI(false);
      });
    } else {
      bgMusic.pause();
    }
  }

  // Bind audio triggers across different items
  vinylDisc.addEventListener('click', () => toggleBackgroundMusic());
  turntableSwitch.addEventListener('click', () => toggleBackgroundMusic());
  musicToggleBtn.addEventListener('click', () => toggleBackgroundMusic());


  // --- RSVP FORM HANDLE ---
  const rsvpForm = document.getElementById('rsvp-form');
  const rsvpSuccess = document.getElementById('rsvp-success-message');

  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Extract Form details
    const name = document.getElementById('rsvp-name').value;
    const attendance = rsvpForm.elements['attendance'].value;
    const guests = document.getElementById('rsvp-guests').value;
    const diet = document.getElementById('rsvp-diet').value;

    console.log("RSVP Submission received:", { name, attendance, guests, diet });
    
    // Synthesize slide writing sound (scratch paper simulation)
    if (audioCtx) {
      const writeOsc = audioCtx.createOscillator();
      const writeGain = audioCtx.createGain();
      writeOsc.type = 'sine';
      writeOsc.frequency.setValueAtTime(400, audioCtx.currentTime);
      writeGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
      writeGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      writeOsc.connect(writeGain);
      writeGain.connect(audioCtx.destination);
      writeOsc.start();
      writeOsc.stop(audioCtx.currentTime + 0.3);
    }

    // Hide RSVP card form & Reveal handwritten Thank You note
    rsvpForm.classList.add('hidden');
    rsvpSuccess.classList.remove('hidden');

    // Add entry automatically to Guestbook ledger on next slide
    addLedgerEntry(name, attendance === 'accept' ? "Joyfully Accepting!" : "Regretfully Declining.");
  });


  // --- DIGITAL GUESTBOOK LEDGER HANDLER ---
  const ledgerContainer = document.getElementById('ledger-messages-container');
  const ledgerNameInput = document.getElementById('guestbook-name');
  const ledgerMsgInput = document.getElementById('guestbook-msg');
  const ledgerAddBtn = document.getElementById('guestbook-submit-btn');

  function addLedgerEntry(name, message) {
    if (!name || !message) return;

    // Create Row elements
    const row = document.createElement('div');
    row.className = 'ledger-row';
    
    const sender = document.createElement('span');
    sender.className = 'ledger-sender';
    sender.textContent = name;

    const text = document.createElement('span');
    text.className = 'ledger-text';
    text.textContent = `"${message}"`;

    row.appendChild(sender);
    row.appendChild(text);

    // Append to ledger list
    ledgerContainer.appendChild(row);

    // Auto-scroll to bottom of ledger paper
    ledgerContainer.scrollTop = ledgerContainer.scrollHeight;
  }

  // Handle "+" manual guestbook message additions
  ledgerAddBtn.addEventListener('click', () => {
    const name = ledgerNameInput.value.trim();
    const msg = ledgerMsgInput.value.trim();

    if (name && msg) {
      addLedgerEntry(name, msg);
      
      // Clear inputs
      ledgerNameInput.value = '';
      ledgerMsgInput.value = '';

      // Soft pencil-scratch synthesis
      if (audioCtx) {
        const scratchSource = audioCtx.createBufferSource();
        const bufferSize = audioCtx.sampleRate * 0.15;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        scratchSource.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1000;
        filter.Q.value = 1.5;
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);

        scratchSource.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        scratchSource.start();
        scratchSource.stop(audioCtx.currentTime + 0.15);
      }
    }
  });

  // Support pressing 'Enter' inside ledger inputs
  ledgerMsgInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      ledgerAddBtn.click();
    }
  });


  // =========================================================================
  //  BILINGUAL TRANSLATION SYSTEM (English ⇄ Arabic)
  // =========================================================================

  const translations = {
    en: {
      // Page title
      page_title: 'Velvet — Julian & Sophia Wedding Invitation',
      // Header
      brand: 'Velvet',
      // Envelope
      envelope_title: 'The Wedding of',
      envelope_date: 'OCTOBER 14, 1974',
      seal_hint: 'Click to Break Seal',
      label_to: 'Kindly Invited To Share Our Joy',
      label_name: 'Our Dear Friends & Family',
      // Language / Music buttons
      lang_btn: 'العربية',
      music_btn: 'Music Off',
      music_btn_on: 'Music On',
      // Slide 1
      slide1_cordially: 'Cordially Invite You',
      slide1_celebrate: 'TO CELEBRATE THEIR UNION',
      slide1_day: 'Saturday Afternoon',
      slide1_date: 'OCTOBER 14, 1974',
      slide1_time: "At Four O'Clock",
      slide1_venue: 'The Glass Pavilion',
      slide1_address: '1200 Whispering Pines Road',
      slide1_city: 'Big Sur, California',
      polaroid_caption: "Big Sur, Spring '74",
      // Slide 2
      slide2_title: 'Our Vintage Journey',
      slide2_subtitle: 'A story built on film & folk music',
      slide2_dropcap: 'I',
      slide2_para1: 't began in San Francisco, Autumn of 1971. In a candle-lit corner of a small vinyl record shop, we both reached for the same rare Joni Mitchell record. A brief conversation turned into a walk through Golden Gate Park, which soon became a lifetime of shared dreams, acoustic guitars, and road trips down the Pacific Coast Highway.',
      slide2_para2: 'Big Sur became our sanctuary. Among the towering redwoods and the crashing Pacific waves, we promised to always build a life defined by warmth, simple pleasures, and an enduring, romantic love. We cannot wait to write our next chapter in the company of those we cherish most.',
      // Slide 3 — Schedule
      slide3_title: 'The Schedule of Celebrations',
      slide3_subtitle: 'Saturday, the fourteenth of October',
      time1_hour: '4:00',
      time2_hour: '5:30',
      time3_hour: '7:00',
      time_pm: 'PM',
      event1_title: 'The Ceremony',
      event1_desc: 'Under the towering redwoods of the Big Sur grove. Light coats recommended for the coastal breeze.',
      event1_loc: 'The Redwood Grove Sanctuary',
      event2_title: 'Cocktails & Records',
      event2_desc: 'Artisanal warm cider and whiskey cocktails served to the sounds of classic vinyl records spinning live.',
      event2_loc: 'The Sunset Ocean Patio',
      event3_title: 'Dinner & Dancing',
      event3_desc: 'A candlelight dinner featuring locally sourced organic California fare, followed by joyful dancing.',
      event3_loc: 'The Pavilion Hall',
      // Slide 4 — RSVP
      rsvp_title: 'R. S. V. P.',
      rsvp_deadline: 'Kindly reply by September 1, 1974',
      rsvp_name_label: 'Name(s)',
      rsvp_name_placeholder: 'M. and Mme. Julian Vane',
      rsvp_accept: 'Joyfully Accepts',
      rsvp_decline: 'Regretfully Declines',
      rsvp_guests_label: 'Number of Guests',
      rsvp_guest1: '1 Guest',
      rsvp_guest2: '2 Guests',
      rsvp_guest3: '3 Guests',
      rsvp_guest4: '4 Guests',
      rsvp_diet_label: 'Dietary Notes / Warm Wishes',
      rsvp_diet_placeholder: 'Any special dietary requirements, or a little note...',
      rsvp_submit: 'Send Response',
      rsvp_thanks_title: 'Thank You',
      rsvp_thanks_body: 'Your response has been sealed and sent. We look forward to sharing our day with you!',
      // Slide 5 — Vinyl & Guestbook
      slide5_title: 'The Wedding Soundtrack',
      slide5_subtitle: 'Interactive Vinyl Player',
      turntable_title: 'Toggle record spin',
      track_name: 'Spinning: Folk Roots & Coast Ballads',
      track_hint: 'Click the switch or the vinyl record to play/pause',
      ledger_title: 'The Digital Ledger',
      ledger_subtitle: 'Guest Notes & Well Wishes',
      ledger_name_ph: 'Your Name',
      ledger_msg_ph: 'Leave a sweet note here...',
      ledger_msg0: '"So happy for you both! Can\'t wait for redwood breeze."',
      ledger_msg1: '"The PCH road trips were just the start. Love always!"',
      ledger_msg2: '"Spin that record! Counting down the days."',
      // Footer controls
      btn_prev: 'PREV SLIDE',
      btn_next: 'NEXT SLIDE',
      slide_label: 'SLIDE NO.',
    },

    ar: {
      // Page title
      page_title: 'فيلفيت — دعوة حفل زفاف جوليان وسوفيا',
      // Header
      brand: 'فيلفيت',
      // Envelope
      envelope_title: 'زفاف',
      envelope_date: '١٤ أكتوبر ١٩٧٤',
      seal_hint: 'انقر لكسر الختم',
      label_to: 'يُشرّفنا دعوتكم لمشاركة فرحتنا',
      label_name: 'أعزّاؤنا من الأهل والأصدقاء',
      // Language / Music buttons
      lang_btn: 'English',
      music_btn: 'الموسيقى متوقفة',
      music_btn_on: 'الموسيقى تعزف',
      // Slide 1
      slide1_cordially: 'يدعوانكم بكل سرور',
      slide1_celebrate: 'للاحتفال بزفافهما',
      slide1_day: 'مساء السبت',
      slide1_date: '١٤ أكتوبر ١٩٧٤',
      slide1_time: 'في تمام الرابعة مساءً',
      slide1_venue: 'جناح الزجاج',
      slide1_address: '١٢٠٠ طريق الصنوبر الهامس',
      slide1_city: 'بيغ سور، كاليفورنيا',
      polaroid_caption: 'بيغ سور، ربيع ١٩٧٤',
      // Slide 2
      slide2_title: 'رحلتنا العتيقة',
      slide2_subtitle: 'قصة نُسجت على الأفلام والموسيقى الشعبية',
      slide2_dropcap: 'ب',
      slide2_para1: 'دأت قصتنا في سان فرانسيسكو، خريف عام ١٩٧١. في زاوية مضاءة بالشموع داخل متجر صغير للأسطوانات الموسيقية، مدّ كلانا يده نحو أسطوانة نادرة لجوني ميتشل في آنٍ واحد. تحوّل حديث عابر إلى نزهة في حديقة غولدن غيت، ثم إلى عمر من الأحلام المشتركة والجيتارات الصوتية والرحلات على طول الطريق الساحلي للمحيط الهادئ.',
      slide2_para2: 'أصبح بيغ سور ملاذنا. بين أشجار السيكويا الشاهقة وأمواج المحيط الهادئة الزاخرة، وعدنا دومًا ببناء حياة تتسم بالدفء والبهجة البسيطة والحب الرومانسي الخالد. ونتطلع بفارغ الصبر إلى كتابة فصلنا القادم في رحاب من نحبهم.',
      // Slide 3 — Schedule
      slide3_title: 'جدول الاحتفالات',
      slide3_subtitle: 'السبت، الرابع عشر من أكتوبر',
      time1_hour: '٤:٠٠',
      time2_hour: '٥:٣٠',
      time3_hour: '٧:٠٠',
      time_pm: 'م',
      event1_title: 'مراسم العقد',
      event1_desc: 'تحت أشجار السيكويا الشاهقة في بستان بيغ سور. يُنصح بارتداء معاطف خفيفة بسبب النسيم الساحلي.',
      event1_loc: 'ملاذ بستان الأشجار الحمراء',
      event2_title: 'كوكتيل وأسطوانات',
      event2_desc: 'عصير تفاح دافئ وكوكتيلات الويسكي الحرفية، على أنغام الأسطوانات الكلاسيكية التي تدور على الهواء مباشرة.',
      event2_loc: 'فناء غروب المحيط',
      event3_title: 'العشاء والرقص',
      event3_desc: 'عشاء بالشموع يضم أفضل المنتجات العضوية الطازجة من كاليفورنيا، يعقبه رقص بهيج.',
      event3_loc: 'قاعة الجناح',
      // Slide 4 — RSVP
      rsvp_title: 'تأكيد الحضور',
      rsvp_deadline: 'يُرجى الرد قبل ١ سبتمبر ١٩٧٤',
      rsvp_name_label: 'الاسم / الأسماء',
      rsvp_name_placeholder: 'السيد والسيدة جوليان فان',
      rsvp_accept: 'أحضر بكل سرور',
      rsvp_decline: 'آسف للاعتذار',
      rsvp_guests_label: 'عدد الضيوف',
      rsvp_guest1: 'ضيف واحد',
      rsvp_guest2: 'ضيفان',
      rsvp_guest3: '٣ ضيوف',
      rsvp_guest4: '٤ ضيوف',
      rsvp_diet_label: 'ملاحظات غذائية / تمنياتكم الطيبة',
      rsvp_diet_placeholder: 'أي متطلبات غذائية خاصة، أو كلمة تودّون قولها...',
      rsvp_submit: 'إرسال الرد',
      rsvp_thanks_title: 'شكراً لكم',
      rsvp_thanks_body: 'وصلنا ردّكم مختومًا. نتطلع بشوق لمشاركتكم يومنا المميز!',
      // Slide 5 — Vinyl & Guestbook
      slide5_title: 'الموسيقى التذكارية للزفاف',
      slide5_subtitle: 'مشغّل الأسطوانة التفاعلي',
      turntable_title: 'تبديل دوران الأسطوانة',
      track_name: 'تعزف الآن: ألحان شعبية وبالادات ساحلية',
      track_hint: 'انقر على المفتاح أو الأسطوانة للتشغيل/الإيقاف',
      ledger_title: 'سجل الضيوف الرقمي',
      ledger_subtitle: 'ملاحظات الضيوف وتمنياتهم',
      ledger_name_ph: 'اسمك',
      ledger_msg_ph: 'اترك كلمة عذبة هنا...',
      ledger_msg0: '«سعيدان جداً بكما! لا نطيق الانتظار لنشمّ عبق الأشجار.»',
      ledger_msg1: '«رحلات الطريق الساحلي كانت مجرد البداية. محبةٌ دائمة!»',
      ledger_msg2: '«أدر تلك الأسطوانة! نعدّ الأيام بفارغ الصبر.»',
      // Footer controls
      btn_prev: 'الشريحة السابقة',
      btn_next: 'الشريحة التالية',
      slide_label: 'رقم الشريحة',
    },
  };

  let currentLang = 'en';

  /**
   * Applies the given language to the entire page.
   * Updates textContent, placeholder, title attributes, direction, and font.
   */
  function applyLanguage(lang) {
    const t = translations[lang];
    const isArabic = lang === 'ar';

    // 1. Update <html> lang and dir for proper RTL layout
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.title = t.page_title;

    // 2. Translate all tagged text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // 3. Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // 4. Translate title (tooltip) attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (t[key] !== undefined) {
        el.title = t[key];
      }
    });

    // 5. Re-apply music button state (it changes dynamically)
    const musicBtnText = musicToggleBtn.querySelector('.btn-text');
    musicBtnText.textContent = isPlayingMusic ? t.music_btn_on : t.music_btn;

    // 6. Apply Noto Naskh Arabic body font when in Arabic mode — elegant & refined
    if (isArabic) {
      document.body.style.fontFamily = "'Noto Naskh Arabic', 'Cormorant Garamond', Georgia, serif";
    } else {
      document.body.style.fontFamily = '';
    }

    // 6. Flip the lang-toggle button label to the opposite language
    const langIcon = document.querySelector('#lang-toggle-btn .lang-icon');
    if (langIcon) {
      langIcon.textContent = isArabic ? 'A' : 'ع';
    }
  }

  // Bind language toggle button
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(currentLang);

    // Subtle projector click sound for feedback
    playProjectorSound(false);

    // Animate the button
    langToggleBtn.classList.add('lang-switching');
    setTimeout(() => langToggleBtn.classList.remove('lang-switching'), 400);
  });

  // Override updateMusicUI to also translate its dynamic text
  const _originalUpdateMusicUI = updateMusicUI;
  // Patch music toggle text to respect active language
  musicToggleBtn.addEventListener('click', () => {
    // After toggleBackgroundMusic runs, re-sync the button text with current lang
    requestAnimationFrame(() => {
      const t = translations[currentLang];
      musicToggleBtn.querySelector('.btn-text').textContent =
        isPlayingMusic ? t.music_btn_on : t.music_btn;
    });
  });
  vinylDisc.addEventListener('click', () => {
    requestAnimationFrame(() => {
      const t = translations[currentLang];
      musicToggleBtn.querySelector('.btn-text').textContent =
        isPlayingMusic ? t.music_btn_on : t.music_btn;
    });
  });
  turntableSwitch.addEventListener('click', () => {
    requestAnimationFrame(() => {
      const t = translations[currentLang];
      musicToggleBtn.querySelector('.btn-text').textContent =
        isPlayingMusic ? t.music_btn_on : t.music_btn;
    });
  });

});
