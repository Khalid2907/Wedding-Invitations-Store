"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface HeroProps {
  isOpen: boolean;
}

export default function Hero({ isOpen }: HeroProps) {
  const { t, language } = useLanguage();

  // Stagger Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  // Item Fade Up
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number], // elegant ease-out
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-dark">
      {/* Background Image with Dark Vignette/Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      {/* Luxury Editorial Overlay Gradients: Rich Emerald Wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald/75 to-emerald-dark/90 opacity-95" />
      
      {/* Fine-line double border frame around viewport */}
      <div className="absolute inset-4 md:inset-8 border border-gold/20 pointer-events-none z-20 rounded-sm">
        <div className="absolute inset-1 border border-gold/10 pointer-events-none rounded-sm" />
      </div>

      {/* Grain texture overlay (adds cinematic warmth) */}
      <div className="absolute inset-0 bg-grain-overlay opacity-[0.035] pointer-events-none" />

      {/* Hero Content */}
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full text-cream"
        >
          {/* Accent Header */}
          <motion.p
            variants={itemVariants}
            className="text-[10px] md:text-xs tracking-[0.45em] text-gold uppercase font-semibold mb-6 flex items-center gap-2 font-sans"
          >
            <span className="text-[8px] animate-pulse">✦</span> {t.hero.saveDate} <span className="text-[8px] animate-pulse">✦</span>
          </motion.p>

          {/* Main Couple Names with gold-foil text accents */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-wide font-light leading-none"
          >
            {language === "ar" ? (
              <>
                ليلى <span className="font-serif italic font-light text-gold-light opacity-90">&amp;</span> عمر
              </>
            ) : (
              <>
                Layla <span className="font-serif italic font-light text-gold-light opacity-90">&amp;</span> Omar
              </>
            )}
          </motion.h1>

          {/* Subtitle / Grid Details */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-[1px] bg-gold/40 mb-8"
          />

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 w-full max-w-2xl text-center items-center text-xs md:text-sm tracking-[0.25em] font-sans font-light text-cream/90"
          >
            <div className="px-4 py-2 border-b md:border-b-0 md:border-e border-gold/20 flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-gold/60 font-semibold">{language === "en" ? "WHEN" : "التاريخ"}</span>
              <span className="font-medium text-cream">{t.hero.date}</span>
            </div>
            <div className="px-4 py-2 border-b md:border-b-0 md:border-e border-gold/20 flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-gold/60 font-semibold">{language === "en" ? "TIME" : "الوقت"}</span>
              <span className="font-medium text-cream">{t.hero.time}</span>
            </div>
            <div className="px-4 py-2 flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-gold/60 font-semibold">{language === "en" ? "WHERE" : "المكان"}</span>
              <span className="font-medium text-cream">{t.hero.venue}</span>
            </div>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-lg h-[1px] bg-[radial-gradient(ellipse_at_center,_var(--color-gold-light)_0%,_transparent_70%)] opacity-30 mt-10 mb-14"
          />

          {/* Scroll Down Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gold/70 cursor-pointer hover:text-gold transition-colors duration-300"
            onClick={() => {
              const storySection = document.getElementById("our-story");
              storySection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-[9px] tracking-[0.25em] uppercase font-sans font-bold mb-1">
              {t.hero.scrollDown}
            </span>
            {/* Elegant fine vertical line animation */}
            <div className="relative w-[1px] h-10 bg-gold/20 overflow-hidden">
              <motion.div
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-gold"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
