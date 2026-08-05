'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  currentLang: 'ar' | 'en';
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1D1A]/70 backdrop-blur-md border border-white/15 text-xs font-medium text-[#F5F9F8] shadow-lg transition-all hover:border-[#8EEBE3]/40 hover:text-[#8EEBE3]"
      aria-label="Switch Language"
    >
      <Globe className="w-3.5 h-3.5 text-[#8EEBE3]" />
      <span>{currentLang === 'ar' ? 'English' : 'عربي'}</span>
    </motion.button>
  );
};
