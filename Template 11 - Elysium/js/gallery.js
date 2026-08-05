/* ==========================================================================
   ELYSIUM — Museum Gallery Exhibition & Lightbox Module
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

class GalleryExhibition {
  constructor() {
    this.frames = [];
    this.currentIndex = 0;
  }

  init() {
    this.bindFilters();
    this.bindLightbox();
  }

  bindFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const frames = document.querySelectorAll('.museum-frame');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const cat = btn.getAttribute('data-filter');

        frames.forEach(frame => {
          const itemCat = frame.getAttribute('data-category');
          if (cat === 'all' || itemCat === cat) {
            frame.style.display = 'block';
          } else {
            frame.style.display = 'none';
          }
        });
      });
    });
  }

  bindLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close-btn');
    this.frames = Array.from(document.querySelectorAll('.museum-frame'));

    this.frames.forEach((frame, idx) => {
      frame.addEventListener('click', () => {
        this.openIndex(idx);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (modal) modal.classList.remove('is-open');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('is-open');
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!modal || !modal.classList.contains('is-open')) return;

      if (e.key === 'Escape') {
        modal.classList.remove('is-open');
      } else if (e.key === 'ArrowRight') {
        this.nextImage();
      } else if (e.key === 'ArrowLeft') {
        this.prevImage();
      }
    });
  }

  openIndex(index) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    if (!this.frames[index]) return;

    this.currentIndex = index;
    const img = this.frames[index].querySelector('img');
    if (img && modal && modalImg) {
      modalImg.src = img.src;
      modalImg.alt = img.alt || 'Gallery artwork';
      modal.classList.add('is-open');
    }
  }

  nextImage() {
    const nextIdx = (this.currentIndex + 1) % this.frames.length;
    this.openIndex(nextIdx);
  }

  prevImage() {
    const prevIdx = (this.currentIndex - 1 + this.frames.length) % this.frames.length;
    this.openIndex(prevIdx);
  }
}

window.galleryExhibition = new GalleryExhibition();
