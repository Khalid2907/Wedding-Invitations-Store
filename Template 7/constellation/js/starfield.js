/* ============================================================
   RAB6 TEMPLATE 7 — CONSTELLATION (STARDUST PARTICLE ENGINE)
   ============================================================ */

export class StarfieldEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.particles = [];
    this.shootingStars = [];
    this.cursor = { x: -1000, y: -1000 };
    this.numParticles = 120;
    this.calligraphyPoints = [];
    this.animId = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
    window.addEventListener('mousemove', (e) => {
      this.cursor.x = e.clientX;
      this.cursor.y = e.clientY;
    }, { passive: true });

    this.createParticles();
    this.scheduleShootingStars();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }
  }

  scheduleShootingStars() {
    setInterval(() => {
      if (Math.random() > 0.3) {
        this.shootingStars.push({
          x: Math.random() * this.width,
          y: Math.random() * (this.height * 0.5),
          len: Math.random() * 120 + 80,
          speed: Math.random() * 8 + 6,
          angle: 45,
          opacity: 1
        });
      }
    }, 4500);
  }

  drawConstellationLines() {
    const maxDist = 130;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(226, 199, 153, ${alpha})`;
          this.ctx.lineWidth = 0.6;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render Ambient Stardust Particles
    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Cursor gravity interaction
      const dx = this.cursor.x - p.x;
      const dy = this.cursor.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        p.x -= (dx / dist) * 0.8;
        p.y -= (dy / dist) * 0.8;
      }

      this.ctx.beginPath();
      this.ctx.fillStyle = `rgba(226, 199, 153, ${p.alpha})`;
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.drawConstellationLines();

    // Render Shooting Stars
    this.shootingStars.forEach((star, index) => {
      star.x += star.speed;
      star.y += star.speed * 0.6;
      star.opacity -= 0.015;

      if (star.opacity <= 0) {
        this.shootingStars.splice(index, 1);
        return;
      }

      const grad = this.ctx.createLinearGradient(star.x, star.y, star.x - star.len, star.y - star.len * 0.6);
      grad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      grad.addColorStop(1, 'rgba(226, 199, 153, 0)');

      this.ctx.beginPath();
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 1.5;
      this.ctx.moveTo(star.x, star.y);
      this.ctx.lineTo(star.x - star.len, star.y - star.len * 0.6);
      this.ctx.stroke();
    });

    this.animId = requestAnimationFrame(() => this.animate());
  }
}
