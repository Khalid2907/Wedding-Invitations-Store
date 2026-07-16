"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function CountdownAndVenue() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-12-20T20:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 md:py-36 bg-cream-dark/50 relative overflow-hidden border-b border-gold/10">
      <div className="absolute inset-0 bg-grain-overlay opacity-[0.02] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Countdown */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-start">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-[0.25em] text-charcoal uppercase mb-3 font-semibold"
            >
              {t.countdown.tag}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-4xl md:text-5xl text-charcoal mb-8"
            >
              {t.countdown.title}
            </motion.h2>

            {/* Countdown Grid Container */}
            <div className="w-full max-w-lg">
              {timeLeft ? (
                <div className="grid grid-cols-4 gap-4 md:gap-6">
                  {/* Days */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center bg-cream border border-gold/20 p-4 md:p-6 rounded-lg shadow-sm"
                  >
                    <span translate="no" className="font-serif text-3xl md:text-5xl font-light text-romantic-red notranslate">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] md:text-xs tracking-widest uppercase text-charcoal/55 mt-2 font-medium">
                      {t.countdown.days}
                    </span>
                  </motion.div>

                  {/* Hours */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center bg-cream border border-gold/20 p-4 md:p-6 rounded-lg shadow-sm"
                  >
                    <span translate="no" className="font-serif text-3xl md:text-5xl font-light text-romantic-red notranslate">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] md:text-xs tracking-widest uppercase text-charcoal/55 mt-2 font-medium">
                      {t.countdown.hours}
                    </span>
                  </motion.div>

                  {/* Minutes */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center bg-cream border border-gold/20 p-4 md:p-6 rounded-lg shadow-sm"
                  >
                    <span translate="no" className="font-serif text-3xl md:text-5xl font-light text-romantic-red notranslate">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] md:text-xs tracking-widest uppercase text-charcoal/55 mt-2 font-medium">
                      {t.countdown.minutes}
                    </span>
                  </motion.div>

                  {/* Seconds */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center bg-cream border border-gold/20 p-4 md:p-6 rounded-lg shadow-sm"
                  >
                    <span translate="no" className="font-serif text-3xl md:text-5xl font-light text-romantic-red notranslate">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] md:text-xs tracking-widest uppercase text-charcoal/55 mt-2 font-medium">
                      {t.countdown.secs}
                    </span>
                  </motion.div>
                </div>
              ) : (
                /* Hydration Placeholder Skeleton */
                <div className="grid grid-cols-4 gap-4 md:gap-6 animate-pulse">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-cream border border-gold/10 p-4 md:p-6 rounded-lg h-24 md:h-32 justify-center"
                    >
                      <div className="h-8 w-12 bg-charcoal/10 rounded mb-2" />
                      <div className="h-3 w-8 bg-charcoal/5 rounded" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xs italic text-charcoal/60 mt-6 max-w-sm"
            >
              {t.countdown.footnote}
            </motion.p>
          </div>

          {/* Right Column: Venue Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-cream border border-gold/25 rounded-lg overflow-hidden shadow-[0_15px_45px_rgba(26,26,26,0.04)]"
            >
              {/* Venue Image */}
              <div 
                className="h-64 sm:h-80 w-full bg-cover bg-center rounded-sm border border-charcoal/5"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80')`,
                }}
              />

              {/* Venue Info Panel */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] tracking-widest uppercase font-semibold rounded-full">
                    {t.countdown.venueTag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
                  {t.countdown.venueTitle}
                </h3>

                {/* Details list */}
                <div className="space-y-4 text-sm font-sans font-light text-charcoal/70 mb-8 border-b border-charcoal/5 pb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{t.countdown.venueDate}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{t.countdown.venueTime}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {t.countdown.venueAddress}
                    </span>
                  </div>
                </div>

                {/* Map Link */}
                <div className="text-end">
                  <a
                    href="https://maps.google.com/?q=Al+Bustan+Cairo+Egypt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-sans tracking-widest uppercase font-semibold text-cream bg-emerald hover:bg-gold hover:text-emerald border border-gold/30 rounded-full shadow-[0_10px_25px_rgba(10,37,32,0.15)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t.countdown.mapLink.replace("[", "").replace("]", "")}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
