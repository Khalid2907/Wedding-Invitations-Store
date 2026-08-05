'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { dictionary } from '@/lib/dictionary';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { CheckCircle2, Send, Sparkles, User, Phone, MessageSquare, Utensils } from 'lucide-react';

interface RsvpSectionProps {
  lang: 'ar' | 'en';
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ lang }) => {
  const t = dictionary[lang].rsvp;
  const [attending, setAttending] = useState<boolean>(true);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [dietary, setDietary] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8EEBE3] font-semibold">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#F5F9F8] mt-2 mb-4">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-[#C2D6D3] font-serif italic leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* RSVP Glass Form Card */}
        <GlassCard glow="gold" className="w-full p-8 md:p-12 relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Attendance Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#E2C799]">
                    {t.attendingLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAttending(true)}
                      className={`p-4 rounded-xl text-xs md:text-sm font-medium border transition-all flex items-center justify-center gap-2 ${
                        attending
                          ? 'bg-[#8EEBE3]/15 border-[#8EEBE3] text-[#F5F9F8] shadow-[0_0_20px_rgba(142,235,227,0.2)]'
                          : 'bg-white/5 border-white/10 text-[#C2D6D3] hover:border-white/20'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-[#8EEBE3]" />
                      <span>{t.attendingYes}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttending(false)}
                      className={`p-4 rounded-xl text-xs md:text-sm font-medium border transition-all flex items-center justify-center gap-2 ${
                        !attending
                          ? 'bg-white/15 border-white/40 text-[#F5F9F8]'
                          : 'bg-white/5 border-white/10 text-[#C2D6D3] hover:border-white/20'
                      }`}
                    >
                      <span>{t.attendingNo}</span>
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#E2C799]">
                    {t.nameLabel} *
                  </label>
                  <div className="relative">
                    <User className="absolute start-4 top-3.5 w-4 h-4 text-[#7A9994]" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full ps-11 pe-4 py-3 rounded-xl bg-[#040D0A]/70 border border-white/15 text-sm text-[#F5F9F8] placeholder-[#7A9994] focus:outline-none focus:border-[#8EEBE3] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#E2C799]">
                    {t.phoneLabel}
                  </label>
                  <div className="relative">
                    <Phone className="absolute start-4 top-3.5 w-4 h-4 text-[#7A9994]" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.phonePlaceholder}
                      className="w-full ps-11 pe-4 py-3 rounded-xl bg-[#040D0A]/70 border border-white/15 text-sm text-[#F5F9F8] placeholder-[#7A9994] focus:outline-none focus:border-[#8EEBE3] transition-colors"
                    />
                  </div>
                </div>

                {/* Guest Count (if attending) */}
                {attending && (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#E2C799]">
                      {t.guestsLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuestCount(num)}
                          className={`py-3 rounded-xl text-xs font-medium border transition-all ${
                            guestCount === num
                              ? 'bg-[#E2C799]/20 border-[#E2C799] text-[#E2C799]'
                              : 'bg-white/5 border-white/10 text-[#C2D6D3]'
                          }`}
                        >
                          {num === 1
                            ? t.guestSelf
                            : num === 2
                            ? t.guestPlusOne
                            : t.guestPlusTwo}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dietary Notes */}
                {attending && (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#E2C799]">
                      {t.dietaryLabel}
                    </label>
                    <div className="relative">
                      <Utensils className="absolute start-4 top-3.5 w-4 h-4 text-[#7A9994]" />
                      <input
                        type="text"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        placeholder={t.dietaryPlaceholder}
                        className="w-full ps-11 pe-4 py-3 rounded-xl bg-[#040D0A]/70 border border-white/15 text-sm text-[#F5F9F8] placeholder-[#7A9994] focus:outline-none focus:border-[#8EEBE3] transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Heartfelt Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#E2C799]">
                    {t.messageLabel}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute start-4 top-3.5 w-4 h-4 text-[#7A9994]" />
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.messagePlaceholder}
                      className="w-full ps-11 pe-4 py-3 rounded-xl bg-[#040D0A]/70 border border-white/15 text-sm text-[#F5F9F8] placeholder-[#7A9994] focus:outline-none focus:border-[#8EEBE3] transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-[#FAF5EB] via-[#E2C799] to-[#B89762] text-[#040D0A] font-semibold text-sm tracking-wider uppercase shadow-[0_10px_30px_rgba(226,199,153,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.submitting : t.submitBtn}</span>
                </button>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#8EEBE3]/20 border border-[#8EEBE3] flex items-center justify-center text-[#8EEBE3] shadow-[0_0_40px_rgba(142,235,227,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-[#F5F9F8]">
                  {t.successTitle}
                </h3>
                <p className="text-sm md:text-base text-[#C2D6D3] font-serif max-w-md">
                  {t.successDesc}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-medium text-[#F5F9F8] hover:bg-white/10 transition-colors"
                >
                  {t.closeBtn}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </motion.div>
    </section>
  );
};
