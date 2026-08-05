'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { dictionary } from '@/lib/dictionary';
import { fadeInUp, staggerContainer, glowPulse } from '@/lib/motion';
import { Sparkles, ChevronDown, Calendar, MapPin } from 'lucide-react';

interface HeroSectionProps {
  lang: 'ar' | 'en';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = dictionary[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background Radial Light Beam */}
      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#8EEBE3]/20 via-[#34D399]/10 to-transparent blur-3xl pointer-events-none"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Bismillah / Sacred Header */}
        <motion.p
          variants={fadeInUp}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#E2C799] font-serif"
        >
          {t.bismillah}
        </motion.p>

        {/* Invitation Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#E2C799]/30 text-xs font-medium text-[#C2D6D3] shadow-inner"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8EEBE3]" />
          <span>{t.invitationBadge}</span>
        </motion.div>

        {/* Monogram Crest */}
        <motion.div
          variants={fadeInUp}
          className="relative my-4 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-[#0A1D1A]/80 border border-[#E2C799]/40 shadow-[0_0_50px_rgba(226,199,153,0.25)] group"
        >
          <div className="absolute inset-1 rounded-full border border-dashed border-[#8EEBE3]/30 animate-spin-slow" />
          <span className="text-3xl md:text-4xl font-display font-light gold-gradient-text">
            T & L
          </span>
        </motion.div>

        {/* Couple Names */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-normal tracking-wide text-[#F5F9F8]">
            <span className="gold-gradient-text">{t.groom}</span>
            <span className="mx-4 text-3xl md:text-5xl font-serif text-[#8EEBE3] italic">
              {t.and}
            </span>
            <span className="cyan-gradient-text">{t.bride}</span>
          </h1>
        </motion.div>

        {/* Sacred Verse */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-sm md:text-base text-[#C2D6D3] font-serif leading-relaxed italic px-4"
        >
          {t.verse}
        </motion.p>

        {/* Date & Location Pill Cards */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center items-center gap-3 mt-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A1D1A]/60 border border-white/10 text-xs md:text-sm text-[#F5F9F8]">
            <Calendar className="w-4 h-4 text-[#8EEBE3]" />
            <span>{t.date}</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A1D1A]/60 border border-white/10 text-xs md:text-sm text-[#F5F9F8]">
            <MapPin className="w-4 h-4 text-[#E2C799]" />
            <span>{t.location}</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#couple"
          variants={fadeInUp}
          className="mt-12 flex flex-col items-center gap-2 text-xs text-[#7A9994] hover:text-[#8EEBE3] transition-colors group"
        >
          <span>{t.scrollDown}</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#8EEBE3]" />
        </motion.a>
      </motion.div>
    </section>
  );
};
