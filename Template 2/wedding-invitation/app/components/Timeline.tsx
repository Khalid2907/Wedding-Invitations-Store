import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();
  const milestones = t.timeline.milestones;

  return (
    <section id="our-story" className="py-28 md:py-40 bg-cream border-b border-gold/15 relative overflow-hidden">
      {/* Decorative luxury backgrounds */}
      <div className="absolute top-10 left-10 w-44 h-44 rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-3 font-semibold font-sans"
          >
            {t.timeline.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl md:text-6xl text-charcoal font-light tracking-wide"
          >
            {t.timeline.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
          />
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute start-4 md:start-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10 -translate-x-1/2 rtl:translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-28">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Point with Ripple Effect */}
                  <div className="absolute start-4 md:start-1/2 top-2 -translate-x-1/2 rtl:translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                      className="w-8 h-8 rounded-full bg-cream border border-gold flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.2)] relative"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border border-gold/30 pointer-events-none"
                      />
                      <Heart className="w-3.5 h-3.5 text-romantic-red fill-romantic-red" />
                    </motion.div>
                  </div>

                  {/* Content Panel */}
                  <div className="w-full md:w-1/2 ps-12 md:ps-0 md:px-12">
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        x: isEven ? -30 : 30, 
                        y: 30 
                      }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                      className={`deckled-card p-8 sm:p-10 rounded-lg hover:shadow-[0_15px_45px_-5px_rgba(197,160,89,0.18)] transition-all duration-500 group ${
                        isEven ? "md:text-end" : "md:text-start"
                      }`}
                    >
                      {/* Decorative internal double corner lines */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/25 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/25 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/25 pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/25 pointer-events-none" />

                      {/* Serif Year */}
                      <span className="font-serif text-4xl md:text-5xl italic font-extralight tracking-widest text-gold group-hover:text-gold-dark transition-colors duration-300 mb-3 block">
                        {item.year}
                      </span>
                      
                      {/* Milestone Title */}
                      <h3 className="font-serif text-xl md:text-2xl text-charcoal font-medium mb-3 tracking-wide">
                        {item.title}
                      </h3>

                      {/* Thin divider line inside card */}
                      <div className={`w-12 h-[1px] bg-gold/20 my-4 ${isEven ? "md:ms-auto" : "md:me-auto"}`} />

                      {/* Milestone Description */}
                      <p className="text-sm font-sans font-light text-charcoal/75 leading-relaxed italic">
                        "{item.desc}"
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
