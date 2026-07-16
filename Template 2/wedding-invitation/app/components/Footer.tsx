import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-24 bg-emerald-dark text-cream-dark relative overflow-hidden border-t border-gold/20">
      {/* Top Gold foil divider border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Subtle textured overlay inside footer */}
      <div className="absolute inset-0 bg-grain-overlay opacity-[0.025] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Decorative gold monogram with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-8 bg-emerald shadow-[inset_0_4px_12px_rgba(0,0,0,0.3),_0_0_20px_rgba(197,160,89,0.15)] relative group"
        >
          {/* Dashboard ring */}
          <div className="absolute inset-[-3px] rounded-full border border-dashed border-gold/15 pointer-events-none group-hover:rotate-45 transition-transform duration-1000" />
          <span className="font-serif text-base italic text-gold font-light tracking-wide">{t.footer.monogram}</span>
        </motion.div>

        {/* Closing Sentiment */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-lg sm:text-xl text-cream-dark/95 mb-6 font-light tracking-wide"
        >
          {t.footer.love}
        </motion.p>

        {/* Date and Place details */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold font-semibold max-w-md leading-relaxed border-t border-gold/20 pt-6 px-4"
        >
          {t.footer.details} <br />
          <span className="text-[10px] sm:text-xs text-cream-dark/50 tracking-[0.2em] block mt-2 font-normal">
            {t.footer.subDetails}
          </span>
        </motion.p>

        {/* Small copyright/credits */}
        <div className="mt-20 text-[8px] tracking-[0.18em] text-cream-dark/25 font-sans uppercase">
          {t.footer.credits}
        </div>
      </div>
    </footer>
  );
}
