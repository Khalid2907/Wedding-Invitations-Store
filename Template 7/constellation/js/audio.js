/* ============================================================
   RAB6 TEMPLATE 7 — CONSTELLATION (WEB AUDIO SYNTHESIZER)
   ============================================================ */

export class CelestialAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNode = null;
  }

  init() {
    if (this.audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    this.audioCtx = new AudioContext();
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
    this.gainNode.connect(this.audioCtx.destination);
  }

  play() {
    this.init();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    if (this.isPlaying) return;

    const freqs = [130.81, 196.00, 261.63, 329.63, 493.88]; // C3, G3, C4, E4, B4 (Celestial Maj7 Chord)
    this.oscillators = freqs.map((freq) => {
      const osc = this.audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      osc.connect(this.gainNode);
      osc.start();
      return osc;
    });

    this.isPlaying = true;
  }

  pause() {
    if (!this.isPlaying) return;
    this.oscillators.forEach((osc) => {
      try { osc.stop(); } catch (e) {}
    });
    this.oscillators = [];
    this.isPlaying = false;
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }
}
