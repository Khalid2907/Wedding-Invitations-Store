'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { dictionary } from '@/lib/dictionary';
import { weddingData } from '@/lib/data';
import { copyToClipboard } from '@/lib/utils';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { Gift, Copy, Check } from 'lucide-react';

interface GiftRegistrySectionProps {
  lang: 'ar' | 'en';
}

export const GiftRegistrySection: React.FC<GiftRegistrySectionProps> = ({ lang }) => {
  const t = dictionary[lang].registry;
  const reg = weddingData.registry;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(reg.iban);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="registry" className="relative py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-12"
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

        {/* Registry Card */}
        <GlassCard glow="cyan" className="w-full p-8 md:p-12 flex flex-col items-center gap-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[#8EEBE3]/15 border border-[#8EEBE3]/40 flex items-center justify-center text-[#8EEBE3] shadow-[0_0_30px_rgba(142,235,227,0.2)]">
            <Gift className="w-6 h-6" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-[#8EEBE3] tracking-wider uppercase">
              {reg.bankName}
            </span>
            <h3 className="text-xl md:text-2xl font-display text-[#F5F9F8]">
              {reg.accountHolder}
            </h3>
            <span className="text-xs text-[#7A9994] font-serif">{reg.branch}</span>
          </div>

          {/* IBAN Box */}
          <div className="w-full max-w-lg p-4 rounded-xl bg-[#040D0A]/80 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col text-start gap-0.5">
              <span className="text-[10px] uppercase text-[#7A9994] tracking-widest">
                {t.ibanLabel}
              </span>
              <span className="text-xs md:text-sm font-mono text-[#E2C799] tracking-wider font-semibold">
                {reg.iban}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E2C799]/15 border border-[#E2C799]/40 text-xs font-medium text-[#E2C799] hover:bg-[#E2C799]/30 transition-all flex-shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34D399]" />
                  <span className="text-[#34D399]">{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.copyIban}</span>
                </>
              )}
            </button>
          </div>

          {/* Swift code info */}
          <div className="text-xs text-[#C2D6D3] font-serif">
            <span>{t.swiftLabel}: </span>
            <span className="font-mono text-[#F5F9F8]">{reg.swiftCode}</span>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
