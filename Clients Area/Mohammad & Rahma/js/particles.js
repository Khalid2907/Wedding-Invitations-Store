/* ============================================================
   RAB6 AMBIENT CANVAS PARTICLES — ELYSIUM MORNING EDITION
   Morning Sunlight Dust & Floating Rose Petals
   ============================================================ */

class AmbientParticles {
  constructor() {
    this.canvas = document.getElementById('ambient-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.petals = [];
    this.animFrameId = null;
    this.isPaused = false;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Scale particle density by viewport for 60fps on mobile
    const vw = window.innerWidth;
    const particleCount = vw < 360 ? 14 : vw < 480 ? 20 : vw < 768 ? 28 : vw < 1024 ? 40 : 55;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.5 + 0.8,
        opacity: Math.random() * 0.45 + 0.15,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.3
      });
    }

    // Scale floating rose petals
    const petalCount = vw < 360 ? 3 : vw < 480 ? 4 : vw < 768 ? 6 : 12;
    for (let i = 0; i < petalCount; i++) {
      this.petals.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 8 + 6,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 1.5,
        speedY: Math.random() * 0.5 + 0.2,
        speedX: Math.sin(Math.random() * Math.PI) * 0.4,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    // Visibility listener for tab pause
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pause();
      } else {
        this.resume();
      }
    });

    this.loop();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  pause() {
    this.isPaused = true;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  resume() {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.loop();
  }

  loop() {
    if (this.isPaused) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render & update morning dust
    this.ctx.fillStyle = '#C59B6C';
    for (let p of this.particles) {
      this.ctx.globalAlpha = p.opacity;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();

      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
    }

    // Render & update floating rose petals
    this.ctx.fillStyle = '#D49B8E';
    for (let petal of this.petals) {
      this.ctx.save();
      this.ctx.globalAlpha = petal.opacity;
      this.ctx.translate(petal.x, petal.y);
      this.ctx.rotate((petal.rotation * Math.PI) / 180);

      // Draw oval petal shape
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, petal.size, petal.size * 0.6, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      petal.y += petal.speedY;
      petal.x += Math.sin(petal.y * 0.01) * 0.5;
      petal.rotation += petal.rotSpeed;

      if (petal.y > this.height + 20) {
        petal.y = -20;
        petal.x = Math.random() * this.width;
      }
    }

    // Render & update wax burst fragments
    if (this.waxChips) {
      for (let i = this.waxChips.length - 1; i >= 0; i--) {
        let chip = this.waxChips[i];
        this.ctx.save();
        this.ctx.globalAlpha = chip.opacity;
        this.ctx.fillStyle = chip.color;
        this.ctx.translate(chip.x, chip.y);
        this.ctx.rotate(chip.rotation);
        this.ctx.fillRect(-chip.size / 2, -chip.size / 2, chip.size, chip.size);
        this.ctx.restore();

        chip.x += chip.vx;
        chip.y += chip.vy;
        chip.vy += 0.25; // Gravity
        chip.vx *= 0.96; // Drag
        chip.rotation += chip.vRot;
        chip.opacity -= 0.015;

        if (chip.opacity <= 0) {
          this.waxChips.splice(i, 1);
        }
      }
    }

    this.animFrameId = requestAnimationFrame(() => this.loop());
  }

  spawnWaxBurst(originX, originY) {
    if (!this.waxChips) this.waxChips = [];
    const colors = ['#A82531', '#7A1C24', '#D4AF37', '#FFFDF5', '#9E7444'];
    const count = 35;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      this.waxChips.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.3,
        opacity: 1
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.ambientParticlesInstance = new AmbientParticles();
});
