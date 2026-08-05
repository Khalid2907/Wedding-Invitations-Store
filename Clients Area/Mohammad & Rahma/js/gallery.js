/* ============================================================
   RAB6 GALLERY LIGHTBOX MODULE — ELYSIUM MORNING EDITION
   Keyboard & Mobile Touch Swipe Support
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  function getGalleryItems() {
    return Array.from(document.querySelectorAll('.gallery-item'));
  }

  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }

  function updateLightboxContent() {
    const items = getGalleryItems();
    if (!items.length) return;
    
    if (currentIndex < 0) currentIndex = items.length - 1;
    if (currentIndex >= items.length) currentIndex = 0;

    const item = items[currentIndex];
    const img = item.querySelector('img');

    if (img && lightboxImg) {
      const resolvedSrc = img.currentSrc || img.src || 'assets/placeholder.svg';
      lightboxImg.src = resolvedSrc;
      lightboxImg.alt = img.alt || '';
    }

    if (lightboxCounter) {
      const isArabic = document.documentElement.getAttribute('lang') === 'ar';
      const currentDisplay = isArabic ? toArabicDigits(currentIndex + 1) : currentIndex + 1;
      const totalDisplay = isArabic ? toArabicDigits(items.length) : items.length;
      lightboxCounter.textContent = `${currentDisplay} / ${totalDisplay}`;
    }
  }

  function toArabicDigits(num) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).replace(/\d/g, d => arabicDigits[d]);
  }

  function showNext() {
    const items = getGalleryItems();
    if (!items.length) return;
    currentIndex = (currentIndex + 1) % items.length;
    updateLightboxContent();
  }

  function showPrev() {
    const items = getGalleryItems();
    if (!items.length) return;
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateLightboxContent();
  }

  // Bind gallery items dynamically
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      const items = getGalleryItems();
      const index = items.indexOf(item);
      if (index !== -1) {
        openLightbox(index);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      isRTL ? showPrev() : showNext();
    }
    if (e.key === 'ArrowLeft') {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      isRTL ? showNext() : showPrev();
    }
  });

  // Touch Swipe Support
  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) < 40) return; // Threshold

    if (diff < 0) {
      showNext();
    } else {
      showPrev();
    }
  }
});
