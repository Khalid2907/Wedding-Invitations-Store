'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { dictionary } from '@/lib/dictionary';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { Crown, GlassWater, Sparkles, Heart, Music } from 'lucide-react';

interface TimelineSectionProps {
  lang: 'ar' | 'en';
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ lang }) => {
  const t = dictionary[lang].timeline;

  const events = [
    {
      time: t.t1Time,
      title: t.t1Title,
      desc: t.t1Desc,
      icon: <Crown className="w-5 h-5 text-[#E2C799]" />,
    },
    {
      time: t.t2Time,
      title: t.t2Title,
      desc: t.t2Desc,
      icon: <GlassWater className="w-5 h-5 text-[#8EEBE3]" />,
    },
    {
      time: t.t3Time,
      title: t.t3Title,
      desc: t.t3Desc,
      icon: <Sparkles className="w-5 h-5 text-[#E2C799]" />,
    },
    {
      time: t.t4Time,
      title: t.t4Title,
      desc: t.t4Desc,
      icon: <Heart className="w-5 h-5 text-[#34D399]" />,
    },
    {
      time: t.t5Time,
      title: t.t5Title,
      desc: t.t5Desc,
      icon: <Music className="w-5 h-5 text-[#8EEBE3]" />,
    },
  ];

  return (
    <section id="timeline" className="relative py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E2C799] font-semibold">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#F5F9F8] mt-2 mb-4">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-[#C2D6D3] font-serif italic">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Vertical Timeline Stack */}
        <div className="relative w-full flex flex-col gap-6 before:absolute before:start-1/2 before:top-4 before:bottom-4 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-[#8EEBE3]/40 before:via-[#E2C799]/40 before:to-[#34D399]/40">
          {events.map((ev, index) => (
            <GlassCard
              key={index}
              glow={index % 2 === 0 ? 'cyan' : 'gold'}
              className="relative flex flex-col md:flex-row items-center gap-6 p-6 md:p-8"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A1D1A] border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(226,199,153,0.2)]">
                {ev.icon}
              </div>

              <div className="flex-grow text-center md:text-start">
                <span className="text-xs font-semibold tracking-wider text-[#E2C799] uppercase">
                  {ev.time}
                </span>
                <h3 className="text-xl md:text-2xl font-display text-[#F5F9F8] mt-1">
                  {ev.title}
                </h3>
                <p className="text-sm text-[#C2D6D3] font-serif leading-relaxed mt-2">
                  {ev.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
