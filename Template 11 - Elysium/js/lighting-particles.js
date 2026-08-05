/* ==========================================================================
   ELYSIUM — Volumetric Light Shafts & Particle Canvas Module
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 45;
    this.isRendering = false;
    this.animId = null;
    this.mouseX = 0;
    this.mouseY = 0;
  }

  init() {
    if (!this.canvas) return;
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.start();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.4 - 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / this.width - 0.5) * 20;
      this.mouseY = (e.clientY / this.height - 0.5) * 20;
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw Subtle Soft Volumetric Sunbeam Radial Gradient
    const sunGradient = this.ctx.createRadialGradient(
      this.width * 0.5 + this.mouseX, 0 + this.mouseY, 10,
      this.width * 0.5, this.height * 0.5, this.width * 0.8
    );
    sunGradient.addColorStop(0, 'rgba(230, 199, 134, 0.08)');
    sunGradient.addColorStop(0.5, 'rgba(248, 249, 250, 0.02)');
    sunGradient.addColorStop(1, 'transparent');
    this.ctx.fillStyle = sunGradient;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw Floating Dust Motes
    for (let p of this.particles) {
      p.x += p.speedX + this.mouseX * 0.01;
      p.y += p.speedY + this.mouseY * 0.01;
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.003;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(230, 199, 134, ${Math.max(0.05, Math.min(0.65, p.alpha))})`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = 'rgba(230, 199, 134, 0.4)';
      this.ctx.fill();
    }
  }

  render() {
    if (!this.isRendering) return;
    this.draw();
    this.animId = requestAnimationFrame(() => this.render());
  }

  start() {
    if (!this.isRendering) {
      this.isRendering = true;
      this.render();
    }
  }

  stop() {
    this.isRendering = false;
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}

window.particleEngine = new ParticleEngine('particle-canvas');
