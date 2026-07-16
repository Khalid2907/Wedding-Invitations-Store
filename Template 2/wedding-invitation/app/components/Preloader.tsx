"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface PreloaderProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Preloader({ onOpen, isOpen }: PreloaderProps) {
  const { t, language } = useLanguage();
  const [mounted] = useState(true);

  useEffect(() => {
    // Lock scroll on mount based on isOpen
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-cream p-4 md:p-8 overflow-hidden"
          >
            {/* Elegant Background Patterns */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            
            {/* Card Wrap (Luxury Paper Card Envelope) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-xl aspect-[3/4] md:aspect-[4/3] flex flex-col items-center justify-center border border-gold/25 bg-cream-dark/20 backdrop-blur-md p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(197,160,89,0.15)] rounded-lg"
            >
              {/* Double Gold Filigree Corner Borders */}
              <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-gold/30 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-gold/30 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-gold/30 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-gold/30 rounded-br-sm pointer-events-none" />
              
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/15 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/15 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/15 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/15 rounded-br-sm pointer-events-none" />

              {/* Decorative Header */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-6 font-semibold font-sans"
              >
                {t.preloader.invitation}
              </motion.div>

              {/* Names monogram with Gold Wreath Circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="relative w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center mb-8 bg-cream bg-[radial-gradient(rgba(197,160,89,0.05)_1px,transparent_1px)] [background-size:8px_8px] shadow-[inset_0_4px_12px_rgba(197,160,89,0.05)]"
              >
                {/* Micro outer rotate ring */}
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-gold/20 animate-[spin_60s_linear_infinite]" />
                <span className="font-serif text-3xl italic font-light text-charcoal tracking-wide">{t.preloader.monogram}</span>
              </motion.div>

              {/* Envelope Text */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-serif text-3xl md:text-5xl text-charcoal mb-4 leading-tight font-light tracking-wide"
              >
                {t.preloader.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs md:text-sm tracking-wide text-charcoal/60 max-w-md mx-auto mb-10 font-sans font-light leading-relaxed"
              >
                {t.preloader.desc}
              </motion.p>

              {/* Luxury Wax Seal Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 80 }}
                className="relative flex flex-col items-center gap-3"
              >
                <button
                  onClick={onOpen}
                  className="w-20 h-20 rounded-full bg-romantic-red flex items-center justify-center shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),_0_12px_30px_rgba(143,37,59,0.4)] relative cursor-pointer transition-all duration-500 border-4 border-romantic-red-dark/30 hover:scale-105 active:scale-95 group overflow-hidden"
                >
                  {/* Subtle shine on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  
                  {/* Wax Seal Inner Ring */}
                  <div className="w-14 h-14 rounded-full border border-dashed border-gold/45 flex flex-col items-center justify-center text-gold-light select-none">
                    <MailOpen className="w-5 h-5 text-gold-light/95 mb-0.5 animate-pulse" />
                    <span className="text-[7px] tracking-wider uppercase font-sans font-bold">{language === "en" ? "OPEN" : "افتح"}</span>
                  </div>
                </button>
                <span className="text-[9px] tracking-widest text-gold font-sans uppercase font-medium mt-1 animate-pulse">
                  {t.preloader.openBtn}
                </span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                className="text-[9px] tracking-[0.2em] uppercase text-charcoal/50 mt-8 font-sans font-semibold"
              >
                {t.preloader.location}
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
