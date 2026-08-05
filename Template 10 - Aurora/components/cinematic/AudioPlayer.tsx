'use client';

import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  lang: 'ar' | 'en';
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, onToggle, lang }) => {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 end-6 z-50 flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0A1D1A]/80 backdrop-blur-xl border border-[#E2C799]/30 text-[#E2C799] shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(226,199,153,0.15)] transition-colors hover:border-[#E2C799]/60"
      aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
    >
      <div className="flex items-center gap-1 h-4">
        {isPlaying ? (
          <>
            <motion.span
              animate={{ height: ['4px', '16px', '8px', '14px', '4px'] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-0.5 bg-[#E2C799] rounded-full"
            />
            <motion.span
              animate={{ height: ['12px', '4px', '16px', '6px', '12px'] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
              className="w-0.5 bg-[#8EEBE3] rounded-full"
            />
            <motion.span
              animate={{ height: ['6px', '14px', '4px', '16px', '6px'] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut', delay: 0.4 }}
              className="w-0.5 bg-[#E2C799] rounded-full"
            />
          </>
        ) : (
          <Music className="w-4 h-4 text-[#7A9994]" />
        )}
      </div>

      <span className="text-xs font-medium tracking-wider uppercase text-[#F5F9F8]">
        {isPlaying
          ? lang === 'ar'
            ? 'الموسيقى تشمل الحفل'
            : 'Soundtrack Active'
          : lang === 'ar'
          ? 'تشغيل الموسيقى'
          : 'Play Music'}
      </span>

      {isPlaying ? (
        <Volume2 className="w-4 h-4 text-[#8EEBE3] animate-pulse" />
      ) : (
        <VolumeX className="w-4 h-4 text-[#7A9994]" />
      )}
    </motion.button>
  );
};
