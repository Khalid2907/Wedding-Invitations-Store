'use client';

import React, { useState, useEffect } from 'react';
import { AuroraBackground } from '@/components/cinematic/AuroraBackground';
import { FloatingParticles } from '@/components/cinematic/FloatingParticles';
import { AudioPlayer } from '@/components/cinematic/AudioPlayer';
import { LanguageToggle } from '@/components/cinematic/LanguageToggle';

import { HeroSection } from '@/components/aurora/HeroSection';
import { CoupleSection } from '@/components/aurora/CoupleSection';
import { StorySection } from '@/components/aurora/StorySection';
import { CountdownSection } from '@/components/aurora/CountdownSection';
import { TimelineSection } from '@/components/aurora/TimelineSection';
import { VenueSection } from '@/components/aurora/VenueSection';
import { GallerySection } from '@/components/aurora/GallerySection';
import { RsvpSection } from '@/components/aurora/RsvpSection';
import { GiftRegistrySection } from '@/components/aurora/GiftRegistrySection';
import { FooterSection } from '@/components/aurora/FooterSection';

import { useAudio } from '@/hooks/useAudio';
import { dictionary } from '@/lib/dictionary';

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const { isPlaying, togglePlay } = useAudio(
    'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-piano-114407.mp3'
  );

  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const nav = dictionary[lang].nav;

  return (
    <main className="relative min-h-screen bg-[#040D0A] text-[#F5F9F8] overflow-x-hidden">
      {/* Background Volumetric Shader & Ambient Stardust */}
      <AuroraBackground />
      <FloatingParticles />

      {/* Floating Sticky Header Controls */}
      <header className="fixed top-4 inset-x-0 z-40 px-4 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          <span className="text-xs font-display gold-gradient-text tracking-widest px-3 py-1.5 rounded-full bg-[#0A1D1A]/70 backdrop-blur-md border border-[#E2C799]/30">
            RAB6 · AURORA
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-3">
          {/* Quick Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-4 px-4 py-1.5 rounded-full bg-[#0A1D1A]/70 backdrop-blur-md border border-white/10 text-xs font-medium text-[#C2D6D3]">
            <a href="#couple" className="hover:text-[#8EEBE3] transition-colors">
              {nav.couple}
            </a>
            <a href="#story" className="hover:text-[#8EEBE3] transition-colors">
              {nav.story}
            </a>
            <a href="#countdown" className="hover:text-[#8EEBE3] transition-colors">
              {nav.countdown}
            </a>
            <a href="#timeline" className="hover:text-[#8EEBE3] transition-colors">
              {nav.timeline}
            </a>
            <a href="#venue" className="hover:text-[#8EEBE3] transition-colors">
              {nav.venue}
            </a>
            <a href="#gallery" className="hover:text-[#8EEBE3] transition-colors">
              {nav.gallery}
            </a>
            <a href="#rsvp" className="hover:text-[#8EEBE3] transition-colors">
              {nav.rsvp}
            </a>
          </nav>

          <LanguageToggle currentLang={lang} onToggle={toggleLanguage} />
        </div>
      </header>

      {/* Floating Audio Controller */}
      <AudioPlayer isPlaying={isPlaying} onToggle={togglePlay} lang={lang} />

      {/* 10 Cinematic Scroll Journey Sections */}
      <div className="relative z-10">
        <HeroSection lang={lang} />
        <CoupleSection lang={lang} />
        <StorySection lang={lang} />
        <CountdownSection lang={lang} />
        <TimelineSection lang={lang} />
        <VenueSection lang={lang} />
        <GallerySection lang={lang} />
        <RsvpSection lang={lang} />
        <GiftRegistrySection lang={lang} />
        <FooterSection lang={lang} />
      </div>
    </main>
  );
}
