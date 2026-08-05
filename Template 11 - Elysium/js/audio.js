/* ==========================================================================
   ELYSIUM — Ambient Web Audio & Synthetic Soundscape Engine Module
   Rab6 Studio Flagship Collection | "Where time stands still."
   ========================================================================== */

class AudioController {
  constructor() {
    this.audio = null;
    this.audioCtx = null;
    this.synthOscillators = [];
    this.gainNode = null;
    this.isPlaying = false;
    this.isSynth = false;
    this.hasUserInteracted = false;
  }

  init() {
    // Attempt external mp3 first, fallback to synthesized Web Audio pad
    this.audio = new Audio('https://assets.mixkit.co/music/preview/mixkit-ambient-piano-and-strings-1074.mp3');
    this.audio.loop = true;
    this.audio.volume = 0.4;
    this.audio.crossOrigin = 'anonymous';

    this.bindEvents();
  }

  bindEvents() {
    const toggleBtn = document.getElementById('audio-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.togglePlay();
      });
    }

    const unlockAudio = () => {
      if (!this.hasUserInteracted) {
        this.hasUserInteracted = true;
        this.playAudio().catch(() => {});
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('scroll', unlockAudio);
      }
    };

    window.addEventListener('click', unlockAudio);
    window.addEventListener('scroll', unlockAudio);
  }

  async playAudio() {
    try {
      if (this.audio && !this.isSynth) {
        await this.audio.play();
        this.isPlaying = true;
        this.updateUI(true);
        return;
      }
    } catch (err) {
      console.warn("External audio failed or blocked. Initializing Web Audio API Synthesizer fallback...");
      this.playSynth();
      return;
    }

    if (this.isSynth) {
      this.resumeSynth();
    }
  }

  /* ------------------------------------------------------------------------
     Web Audio API Ambient Synthesizer (Bulletproof Zero-Dependency Ambient Pad)
     ------------------------------------------------------------------------ */
  playSynth() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.synthOscillators.length > 0) {
      this.resumeSynth();
      return;
    }

    this.isSynth = true;
    const now = this.audioCtx.currentTime;

    // Master Gain Node with soft attack
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, now);
    this.gainNode.gain.exponentialRampToValueAtTime(0.15, now + 3);

    // Low-pass Filter for warm atmospheric tone
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);

    // F Major 7 / C Chord Frequencies (F3, A3, C4, E4, G4) -> (174.61, 220.00, 261.63, 329.63, 392.00)
    const frequencies = [174.61, 220.00, 261.63, 329.63, 392.00];

    this.synthOscillators = frequencies.map(freq => {
      const osc = this.audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle LFO for breathing movement
      const lfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.1 + Math.random() * 0.1, now);
      lfoGain.gain.setValueAtTime(2.5, now);
      lfo.connect(osc.frequency);
      lfo.start(now);

      osc.connect(filter);
      osc.start(now);
      return osc;
    });

    filter.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);

    this.isPlaying = true;
    this.updateUI(true);
  }

  pauseAudio() {
    if (this.audio && !this.isSynth) {
      this.audio.pause();
    } else if (this.audioCtx && this.gainNode) {
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioCtx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.8);
      setTimeout(() => {
        if (this.audioCtx) this.audioCtx.suspend();
      }, 800);
    }
    this.isPlaying = false;
    this.updateUI(false);
  }

  resumeSynth() {
    if (this.audioCtx && this.gainNode) {
      this.audioCtx.resume();
      this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.15, this.audioCtx.currentTime + 1.5);
      this.isPlaying = true;
      this.updateUI(true);
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }

  updateUI(playing) {
    const eqIcon = document.getElementById('equalizer-icon');
    const soundText = document.getElementById('sound-status-text');

    if (eqIcon) {
      if (playing) {
        eqIcon.classList.add('is-playing');
      } else {
        eqIcon.classList.remove('is-playing');
      }
    }

    if (soundText) {
      const currentLang = window.languageManager ? window.languageManager.currentLang : 'en';
      soundText.textContent = playing 
        ? (currentLang === 'ar' ? 'الصوت يعمل' : 'Sound On')
        : (currentLang === 'ar' ? 'صامت' : 'Muted');
    }
  }
}

window.audioController = new AudioController();
