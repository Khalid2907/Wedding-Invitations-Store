/* ============================================================
   RAB6 CINEMATIC AMBIENT AUDIO ENGINE — ELYSIUM MORNING EDITION
   Track: Nebtedy Menen El Hekaya Live — Abdel Halim Hafez
   Start Offset: 07:15 (435 Seconds)
   ============================================================ */

class AudioController {
  constructor() {
    // Core Audio Elements & State
    this.audio = new Audio('/assets/soundtrack.mp3');
    this.audio.preload = 'auto';
    this.audio.loop = true;

    // Default Configuration
    this.targetVolume = 0.22; // 22% default volume
    this.fadeDuration = 2500; // 2.5s fade-in
    this.fadeOutDuration = 1500; // 1.5s fade-out
    this.startTimeOffset = 0; // Trimmed audio starts at 0 (original 07:15)

    this.isPlaying = false;
    this.isMuted = false;
    this.fadeInterval = null;
    this.audioContext = null;

    // Restore Preferences from localStorage
    this.loadPreferences();

    // DOM Elements
    this.audioDock = document.getElementById('audio-controller-bar');
    this.playPauseBtn = document.getElementById('audio-toggle-btn');
    this.muteBtn = document.getElementById('audio-mute-btn');
    this.volumeSlider = document.getElementById('audio-volume-slider');
    this.progressBar = document.getElementById('audio-progress-bar');
    this.progressFill = document.getElementById('audio-progress-fill');
    this.currentTimeEl = document.getElementById('audio-current-time');
    this.totalTimeEl = document.getElementById('audio-total-time');
    this.trackTitleEl = document.getElementById('audio-track-title');
    this.visualizerBars = document.querySelectorAll('.v-bar');
    this.init();
  }

  // Web Audio Sound FX Synthesizers
  getAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.audioContext = new AudioCtx();
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    return this.audioContext;
  }

  playWaxCrackSFX() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // High-pitched snap burst
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);

      // Noise burst for ceramic crack texture
      const bufferSize = ctx.sampleRate * 0.06;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.25, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      noise.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(now);
    } catch (e) {
      console.warn('Wax crack SFX warning:', e);
    }
  }

  playPaperRustleSFX() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const duration = 0.45;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.Q.setValueAtTime(1.5, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
    } catch (e) {
      console.warn('Paper rustle SFX warning:', e);
    }
  }

  init() {
    // Audio initial volume setup
    this.audio.volume = 0;

    // Bind event listeners
    if (this.playPauseBtn) {
      this.playPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlayPause();
      });
    }

    if (this.muteBtn) {
      this.muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMute();
      });
    }

    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('input', (e) => {
        this.setVolume(parseFloat(e.target.value) / 100);
      });
    }

    if (this.progressBar) {
      this.progressBar.addEventListener('click', (e) => {
        this.seek(e);
      });
    }

    if (this.promptToast) {
      this.promptToast.addEventListener('click', () => {
        this.playWithFade();
        this.hidePrompt();
      });
    }

    // Update track time & progress
    this.audio.addEventListener('timeupdate', () => this.onTimeUpdate());
    this.audio.addEventListener('loadedmetadata', () => this.onMetadataLoaded());

    // Page visibility handling (fade out on tab hide, fade in on tab return if was playing)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.isPlaying) {
          this.fadeOut(1000, () => this.audio.pause());
        }
      } else {
        const userPref = localStorage.getItem('rab6_audio_user_pref');
        if (userPref !== 'paused' && this.isPlaying) {
          this.audio.play().then(() => this.fadeIn());
        }
      }
    });

    // Fade out before page unload
    window.addEventListener('beforeunload', () => {
      if (this.isPlaying) {
        this.audio.volume = 0;
      }
    });
  }

  loadPreferences() {
    const storedVol = localStorage.getItem('rab6_audio_volume');
    if (storedVol !== null) {
      this.targetVolume = Math.max(0.05, Math.min(1.0, parseFloat(storedVol)));
    }

    const storedMute = localStorage.getItem('rab6_audio_muted');
    if (storedMute === 'true') {
      this.isMuted = true;
      this.audio.muted = true;
    }
  }

  playWithFade() {
    const userPref = localStorage.getItem('rab6_audio_user_pref');
    if (userPref === 'paused') {
      // User explicitly paused previously; respect their choice
      return;
    }

    if (this.isPlaying) return;

    if (this.audio.currentTime === 0 && this.startTimeOffset > 0) {
      this.audio.currentTime = this.startTimeOffset;
    }

    this.audio.volume = 0;
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.updateUIState();
          this.fadeIn(this.isMuted ? 0 : this.targetVolume, this.fadeDuration);
          this.startVisualizer();
          this.hidePrompt();
          localStorage.setItem('rab6_audio_user_pref', 'playing');
        })
        .catch((err) => {
          console.warn('Audio playback waiting for gesture:', err);
          this.showPrompt();
        });
    }
  }

  pauseWithFade() {
    if (!this.isPlaying) return;

    this.fadeOut(this.fadeOutDuration, () => {
      this.audio.pause();
      this.isPlaying = false;
      this.updateUIState();
      this.stopVisualizer();
      localStorage.setItem('rab6_audio_user_pref', 'paused');
    });
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pauseWithFade();
    } else {
      localStorage.setItem('rab6_audio_user_pref', 'playing');
      this.playWithFade();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    localStorage.setItem('rab6_audio_muted', this.isMuted ? 'true' : 'false');
    this.updateUIState();
  }

  setVolume(vol) {
    this.targetVolume = Math.max(0, Math.min(1.0, vol));
    localStorage.setItem('rab6_audio_volume', this.targetVolume);

    if (this.isMuted && this.targetVolume > 0) {
      this.isMuted = false;
      this.audio.muted = false;
      localStorage.setItem('rab6_audio_muted', 'false');
    }

    if (this.isPlaying && !this.fadeInterval) {
      this.audio.volume = this.targetVolume;
    }

    this.updateUIState();
  }

  seek(e) {
    if (!this.progressBar) return;
    const rect = this.progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * (this.audio.duration || 1);
    this.audio.currentTime = Math.max(0, Math.min(seekTime, this.audio.duration || 0));
  }

  fadeIn(target = this.targetVolume, duration = this.fadeDuration) {
    clearInterval(this.fadeInterval);
    const startVol = this.audio.volume;
    const diff = target - startVol;
    const stepTime = 50;
    const steps = duration / stepTime;
    const volStep = diff / steps;

    let currentStep = 0;

    this.fadeInterval = setInterval(() => {
      currentStep++;
      const newVol = startVol + volStep * currentStep;

      if (currentStep >= steps || newVol >= target) {
        this.audio.volume = Math.max(0, Math.min(1.0, target));
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      } else {
        this.audio.volume = Math.max(0, Math.min(1.0, newVol));
      }
    }, stepTime);
  }

  fadeOut(duration = this.fadeOutDuration, callback = null) {
    clearInterval(this.fadeInterval);
    const startVol = this.audio.volume;
    const stepTime = 50;
    const steps = duration / stepTime;
    const volStep = startVol / steps;

    let currentStep = 0;

    this.fadeInterval = setInterval(() => {
      currentStep++;
      const newVol = startVol - volStep * currentStep;

      if (currentStep >= steps || newVol <= 0) {
        this.audio.volume = 0;
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        if (typeof callback === 'function') callback();
      } else {
        this.audio.volume = Math.max(0, newVol);
      }
    }, stepTime);
  }

  onTimeUpdate() {
    const current = this.audio.currentTime || 0;
    const duration = this.audio.duration || 1;
    const pct = (current / duration) * 100;

    if (this.progressFill) {
      this.progressFill.style.width = `${pct}%`;
    }

    if (this.currentTimeEl) {
      this.currentTimeEl.textContent = this.formatTime(current);
    }
  }

  onMetadataLoaded() {
    if (this.totalTimeEl) {
      this.totalTimeEl.textContent = this.formatTime(this.audio.duration || 0);
    }
  }

  formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  updateUIState() {
    if (this.audioDock) {
      if (this.isPlaying) {
        this.audioDock.classList.add('audio-playing');
      } else {
        this.audioDock.classList.remove('audio-playing');
      }
    }

    if (this.playPauseBtn) {
      this.playPauseBtn.setAttribute('aria-label', this.isPlaying ? 'Pause Music' : 'Play Music');
      this.playPauseBtn.innerHTML = this.isPlaying
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    }

    if (this.muteBtn) {
      this.muteBtn.setAttribute('aria-label', this.isMuted ? 'Unmute' : 'Mute');
      this.muteBtn.innerHTML = this.isMuted
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
    }

    if (this.volumeSlider) {
      this.volumeSlider.value = this.isMuted ? 0 : Math.round(this.targetVolume * 100);
    }
  }

  startVisualizer() {
    if (this.visualizerBars.length === 0) return;
    this.visualizerBars.forEach((bar) => {
      bar.style.animationPlayState = 'running';
    });
  }

  stopVisualizer() {
    if (this.visualizerBars.length === 0) return;
    this.visualizerBars.forEach((bar) => {
      bar.style.animationPlayState = 'paused';
    });
  }

  showPrompt() {
    if (this.promptToast) {
      this.promptToast.classList.add('is-visible');
    }
  }

  hidePrompt() {
    if (this.promptToast) {
      this.promptToast.classList.remove('is-visible');
    }
  }
}

// Global Audio Engine Instance
document.addEventListener('DOMContentLoaded', () => {
  window.AudioModule = new AudioController();
});
