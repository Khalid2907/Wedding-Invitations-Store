'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { dictionary } from '@/lib/dictionary';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface CoupleSectionProps {
  lang: 'ar' | 'en';
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ lang }) => {
  const t = dictionary[lang].couple;

  return (
    <section id="couple" className="relative py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8EEBE3] font-semibold">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#F5F9F8] mt-2 mb-4">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-[#C2D6D3] font-serif italic">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Dual Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {/* Groom Card */}
          <GlassCard glow="cyan" className="flex flex-col items-center text-center p-8">
            <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden mb-6 border-2 border-[#8EEBE3]/30 shadow-[0_0_30px_rgba(142,235,227,0.15)]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                alt={t.groomRole}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs tracking-widest text-[#8EEBE3] uppercase font-semibold">
              {t.groomRole}
            </span>
            <h3 className="text-3xl font-display text-[#F5F9F8] mt-1 mb-2">
              {dictionary[lang].hero.groom}
            </h3>
            <p className="text-xs text-[#E2C799] font-medium mb-4">
              {t.groomParents}
            </p>
            <p className="text-sm text-[#C2D6D3] font-serif leading-relaxed">
              {t.groomBio}
            </p>
          </GlassCard>

          {/* Bride Card */}
          <GlassCard glow="gold" className="flex flex-col items-center text-center p-8">
            <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden mb-6 border-2 border-[#E2C799]/30 shadow-[0_0_30px_rgba(226,199,153,0.15)]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                alt={t.brideRole}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs tracking-widest text-[#E2C799] uppercase font-semibold">
              {t.brideRole}
            </span>
            <h3 className="text-3xl font-display text-[#F5F9F8] mt-1 mb-2">
              {dictionary[lang].hero.bride}
            </h3>
            <p className="text-xs text-[#8EEBE3] font-medium mb-4">
              {t.brideParents}
            </p>
            <p className="text-sm text-[#C2D6D3] font-serif leading-relaxed">
              {t.brideBio}
            </p>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  );
};
