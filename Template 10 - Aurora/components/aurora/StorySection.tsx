'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { dictionary } from '@/lib/dictionary';
import { weddingData } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface StorySectionProps {
  lang: 'ar' | 'en';
}

export const StorySection: React.FC<StorySectionProps> = ({ lang }) => {
  const t = dictionary[lang].story;

  const chapters = [
    {
      date: t.ch1Date,
      title: t.ch1Title,
      subtitle: t.ch1Subtitle,
      desc: t.ch1Desc,
      image: weddingData.story[0].image,
    },
    {
      date: t.ch2Date,
      title: t.ch2Title,
      subtitle: t.ch2Subtitle,
      desc: t.ch2Desc,
      image: weddingData.story[1].image,
    },
    {
      date: t.ch3Date,
      title: t.ch3Title,
      subtitle: t.ch3Subtitle,
      desc: t.ch3Desc,
      image: weddingData.story[2].image,
    },
  ];

  return (
    <section id="story" className="relative py-24 px-4 max-w-6xl mx-auto">
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

        {/* Chapters Stack */}
        <div className="flex flex-col gap-12 w-full">
          {chapters.map((ch, index) => (
            <GlassCard
              key={index}
              glow={index % 2 === 0 ? 'cyan' : 'gold'}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10"
            >
              {/* Text Block */}
              <div
                className={`lg:col-span-7 flex flex-col gap-3 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <span className="text-xs font-semibold tracking-widest text-[#E2C799] uppercase">
                  {ch.date}
                </span>
                <h3 className="text-2xl md:text-3xl font-display text-[#F5F9F8]">
                  {ch.title}
                </h3>
                <h4 className="text-sm text-[#8EEBE3] font-serif italic">
                  {ch.subtitle}
                </h4>
                <p className="text-sm md:text-base text-[#C2D6D3] font-serif leading-relaxed mt-2">
                  {ch.desc}
                </p>
              </div>

              {/* Image Block */}
              <div
                className={`lg:col-span-5 relative h-60 md:h-72 rounded-2xl overflow-hidden border border-white/10 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <Image src={ch.image} alt={ch.title} fill className="object-cover" />
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
