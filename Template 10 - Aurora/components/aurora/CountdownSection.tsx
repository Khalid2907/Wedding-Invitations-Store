'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { useCountdown } from '@/hooks/useCountdown';
import { dictionary } from '@/lib/dictionary';
import { weddingData } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface CountdownSectionProps {
  lang: 'ar' | 'en';
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ lang }) => {
  const t = dictionary[lang].countdown;
  const { days, hours, minutes, seconds } = useCountdown(weddingData.eventDate);

  const units = [
    { label: t.days, value: days },
    { label: t.hours, value: hours },
    { label: t.minutes, value: minutes },
    { label: t.seconds, value: seconds },
  ];

  return (
    <section id="countdown" className="relative py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-12 text-center"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="max-w-2xl">
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

        {/* 4-Column Glass Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 w-full">
          {units.map((u, i) => (
            <GlassCard
              key={i}
              glow="gold"
              className="flex flex-col items-center justify-center p-6 md:p-8"
            >
              <span className="text-4xl md:text-6xl font-display font-light gold-gradient-text tracking-tight">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="text-xs tracking-widest text-[#7A9994] uppercase font-medium mt-2">
                {u.label}
              </span>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
