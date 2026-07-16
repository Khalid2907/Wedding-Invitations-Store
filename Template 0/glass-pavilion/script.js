document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Intersection Observer for Scroll Reveal ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once revealed to keep performance slick
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  // --- 2. Countdown Timer ---
  // Wedding Date: Oct 10, 2026 at 15:00 (3:00 PM)
  const targetDate = new Date('Oct 10, 2026 15:00:00').getTime();

  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      if (timerDays) timerDays.textContent = '00';
      if (timerHours) timerHours.textContent = '00';
      if (timerMinutes) timerMinutes.textContent = '00';
      if (timerSeconds) timerSeconds.textContent = '00';
      return;
    }

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format to lead with 0
    if (timerDays) timerDays.textContent = String(days).padStart(2, '0');
    if (timerHours) timerHours.textContent = String(hours).padStart(2, '0');
    if (timerMinutes) timerMinutes.textContent = String(minutes).padStart(2, '0');
    if (timerSeconds) timerSeconds.textContent = String(seconds).padStart(2, '0');
  }

  // Initial call and set interval
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);


  // --- 3. RSVP Form Handling & Logic ---
  const rsvpForm = document.getElementById('wedding-rsvp-form');
  const attendanceYes = document.getElementById('attendance-yes');
  const attendanceNo = document.getElementById('attendance-no');
  const guestsGroup = document.getElementById('guests-group');
  const dietaryGroup = document.getElementById('dietary-group');
  const submitBtn = document.getElementById('rsvp-submit-btn');

  // Interactive form display adjustments
  if (attendanceYes && attendanceNo) {
    attendanceYes.addEventListener('change', () => {
      guestsGroup.style.opacity = '1';
      guestsGroup.style.pointerEvents = 'auto';
      guestsGroup.style.maxHeight = '200px';
      guestsGroup.style.transition = 'all 0.5s ease';
      dietaryGroup.style.opacity = '1';
      dietaryGroup.style.pointerEvents = 'auto';
      dietaryGroup.style.maxHeight = '200px';
      dietaryGroup.style.transition = 'all 0.5s ease';
    });

    attendanceNo.addEventListener('change', () => {
      guestsGroup.style.opacity = '0.3';
      guestsGroup.style.pointerEvents = 'none';
      guestsGroup.style.maxHeight = '0px';
      guestsGroup.style.transition = 'all 0.5s ease';
      dietaryGroup.style.opacity = '0.3';
      dietaryGroup.style.pointerEvents = 'none';
      dietaryGroup.style.maxHeight = '0px';
      dietaryGroup.style.transition = 'all 0.5s ease';
    });
  }

  // Submit RSVP Form
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get values
      const name = document.getElementById('rsvp-name').value;
      const email = document.getElementById('rsvp-email').value;
      const attending = attendanceYes.checked;
      const guests = document.getElementById('rsvp-guests').value;
      const dietary = document.getElementById('rsvp-dietary').value;
      const notes = document.getElementById('rsvp-notes').value;

      // Animate submit button
      const btnText = submitBtn.querySelector('span');
      const btnIcon = submitBtn.querySelector('i');
      
      btnText.textContent = 'Sending...';
      btnIcon.className = 'fa-solid fa-circle-notch fa-spin';
      submitBtn.disabled = true;

      // Mock API latency
      setTimeout(() => {
        btnText.textContent = 'Sent Successfully';
        btnIcon.className = 'fa-solid fa-check';

        // Show toast popup
        const toastMsg = attending 
          ? `Thank you, ${name}! We've saved a seat for you & ${guests - 1} guests.` 
          : `Thank you for letting us know, ${name}. You will be missed!`;
        
        showToast(toastMsg);

        // Reset form after delay
        setTimeout(() => {
          rsvpForm.reset();
          btnText.textContent = 'Send RSVP';
          btnIcon.className = 'fa-solid fa-paper-plane';
          submitBtn.disabled = false;
          // Trigger style resets
          guestsGroup.style.opacity = '1';
          guestsGroup.style.pointerEvents = 'auto';
          guestsGroup.style.maxHeight = '200px';
          dietaryGroup.style.opacity = '1';
          dietaryGroup.style.pointerEvents = 'auto';
          dietaryGroup.style.maxHeight = '200px';
        }, 3000);

      }, 1500);
    });
  }


  // --- 4. Wallet & Calendar Integrations ---
  const appleWalletBtn = document.getElementById('btn-apple-wallet');
  const googleCalendarBtn = document.getElementById('btn-google-calendar');

  if (appleWalletBtn) {
    appleWalletBtn.addEventListener('click', () => {
      // Simulate download
      showToast('Generating Glass Pavilion Apple Wallet Pass...');
      setTimeout(() => {
        showToast('Pass downloaded. Double-click to add to Wallet.');
      }, 1500);
    });
  }

  if (googleCalendarBtn) {
    googleCalendarBtn.addEventListener('click', () => {
      showToast('Redirecting to Google Calendar...');
      
      // Build actual Google Calendar event URL
      const title = 'Elena & Marcus Wedding';
      const details = 'Join us to celebrate the marriage of Elena & Marcus at the Glass Pavilion.';
      const location = 'The Glass Pavilion, Reflecting Pool Courtyard';
      const startDate = '20261010T150000';
      const endDate = '20261011T020000';
      
      const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
      
      setTimeout(() => {
        window.open(gCalUrl, '_blank');
      }, 1000);
    });
  }


  // --- 5. Helper Toast Function ---
  const toastNotification = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  let toastTimeout;

  function showToast(message) {
    if (!toastNotification || !toastText) return;
    
    // Clear previous timeout if active
    clearTimeout(toastTimeout);
    
    toastText.textContent = message;
    toastNotification.classList.add('show');
    
    // Auto-hide toast after 4 seconds
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4000);
  }


  // --- 6. 3D Glass Cards Tilt Effect ---
  const glassPanels = document.querySelectorAll('.glass-panel');
  glassPanels.forEach(panel => {
    panel.addEventListener('mousemove', (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 7;
      const rotateY = ((x - centerX) / centerX) * 7;
      
      panel.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });
    
    panel.addEventListener('mouseleave', () => {
      panel.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });


  // --- 7. Timeline Scroll Progress ---
  const timeline = document.querySelector('.timeline');
  const progressLine = document.getElementById('timeline-progress');
  
  if (timeline && progressLine) {
    window.addEventListener('scroll', () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const timelineHeight = rect.height;
      const scrolledPast = windowHeight/2 - rect.top;
      
      let percentage = (scrolledPast / timelineHeight) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      progressLine.style.height = `${percentage}%`;
    });
  }


  // --- 8. Dynamic Floating Sparkles Generator ---
  function createSparkles() {
    const mainBody = document.body;
    const sparkleCount = 15;
    const motifs = ['✦', '✧', '•', '°'];
    
    for (let i = 0; i < sparkleCount; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const isStar = Math.random() > 0.6;
        if (isStar) {
          sparkle.classList.add('sparkle-star');
          sparkle.textContent = motifs[Math.floor(Math.random() * motifs.length)];
        }
        
        const size = Math.random() * 8 + 4;
        sparkle.style.width = isStar ? 'auto' : `${size}px`;
        sparkle.style.height = isStar ? 'auto' : `${size}px`;
        sparkle.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 8 + 8;
        sparkle.style.animationDuration = `${duration}s`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        
        mainBody.appendChild(sparkle);
        
        setTimeout(() => {
          sparkle.remove();
        }, (duration + 3) * 1000);
      }, i * 500);
    }
  }

  createSparkles();
  setInterval(createSparkles, 12000);

});
