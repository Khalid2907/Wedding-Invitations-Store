'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { dictionary } from '@/lib/dictionary';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FooterSectionProps {
  lang: 'ar' | 'en';
}

export const FooterSection: React.FC<FooterSectionProps> = ({ lang }) => {
  const t = dictionary[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 px-4 border-t border-white/10 bg-[#040D0A]/90 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Monogram Crest */}
        <div className="w-16 h-16 rounded-full border border-[#E2C799]/30 bg-[#0A1D1A] flex items-center justify-center text-xl font-display gold-gradient-text shadow-[0_0_30px_rgba(226,199,153,0.15)]">
          {t.monogram}
        </div>

        {/* Poetic Quote */}
        <p className="text-sm md:text-base font-serif italic text-[#C2D6D3] max-w-lg">
          {t.quote}
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs text-[#8EEBE3] hover:bg-white/10 hover:border-[#8EEBE3]/40 transition-all"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>{t.backToTop}</span>
        </button>

        {/* Rab6 Brand Attribution */}
        <div className="pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A9994]">
          <span>{t.copyright}</span>
          <div className="flex items-center gap-1 text-[#E2C799]">
            <Sparkles className="w-3 h-3 text-[#8EEBE3]" />
            <span className="font-semibold tracking-wider">RAB6 رابط — Aurora Collection</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
