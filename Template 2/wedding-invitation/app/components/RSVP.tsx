import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Heart, Loader2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function RSVP() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "yes", // 'yes' | 'no'
    guests: "1",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("submitting");

    // Simulate API network request
    setTimeout(() => {
      setStatus("success");
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      attendance: "yes",
      guests: "1",
      message: "",
    });
    setStatus("idle");
  };

  return (
    <section id="rsvp" className="py-24 md:py-36 bg-cream-dark/30 relative overflow-hidden border-b border-gold/10">
      <div className="absolute inset-0 bg-grain-overlay opacity-[0.025] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.25em] text-charcoal uppercase mb-3 font-semibold"
          >
            {t.rsvp.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl md:text-5xl text-charcoal"
          >
            {t.rsvp.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs italic text-charcoal/60 mt-3"
          >
            {t.rsvp.deadline}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-12 h-[1px] bg-gold mx-auto mt-6"
          />
        </div>

        {/* RSVP Card Container */}
        <motion.div
          layout
          className="deckled-card p-8 md:p-14 rounded-lg shadow-[0_25px_60px_rgba(26,38,32,0.08)] relative"
        >
          {/* Double fine border inset */}
          <div className="absolute inset-2 border border-gold/15 pointer-events-none rounded-sm" />
          <div className="absolute inset-3 border border-gold/5 pointer-events-none rounded-sm" />

          {/* Double Gold Filigree Corner Borders */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/25 pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/25 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/25 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/25 pointer-events-none" />

          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-8 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold mb-2">
                      {t.rsvp.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={status === "submitting"}
                      placeholder={t.rsvp.namePlaceholder}
                      className="bg-transparent border-b border-gold/25 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-charcoal/30 font-sans font-light"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold mb-2">
                      {t.rsvp.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === "submitting"}
                      placeholder={t.rsvp.emailPlaceholder}
                      className="bg-transparent border-b border-gold/25 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-charcoal/30 font-sans font-light"
                    />
                  </div>
                </div>

                {/* Attendance Selection */}
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold mb-3">
                    {t.rsvp.attendLabel}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Accepts */}
                    <label 
                      className={`flex items-center gap-3 p-4 rounded border transition-all duration-500 cursor-pointer ${
                        formData.attendance === "yes" 
                          ? "border-gold bg-gold/5 shadow-[0_4px_20px_rgba(197,160,89,0.12)]" 
                          : "border-gold/15 bg-cream-dark/10 hover:bg-cream-dark/20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === "yes"}
                        onChange={() => setFormData({ ...formData, attendance: "yes" })}
                        disabled={status === "submitting"}
                        className="accent-gold h-4 w-4"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-charcoal tracking-wide">{t.rsvp.acceptTitle}</span>
                        <span className="text-[9px] text-charcoal/55 font-light font-sans tracking-wide mt-0.5">{t.rsvp.acceptSub}</span>
                      </div>
                    </label>

                    {/* Declines */}
                    <label 
                      className={`flex items-center gap-3 p-4 rounded border transition-all duration-500 cursor-pointer ${
                        formData.attendance === "no" 
                          ? "border-gold bg-gold/5 shadow-[0_4px_20px_rgba(197,160,89,0.12)]" 
                          : "border-gold/15 bg-cream-dark/10 hover:bg-cream-dark/20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === "no"}
                        onChange={() => setFormData({ ...formData, attendance: "no" })}
                        disabled={status === "submitting"}
                        className="accent-gold h-4 w-4"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-charcoal tracking-wide">{t.rsvp.declineTitle}</span>
                        <span className="text-[9px] text-charcoal/55 font-light font-sans tracking-wide mt-0.5">{t.rsvp.declineSub}</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Guests count (Shown only if attending) */}
                {formData.attendance === "yes" && (
                  <motion.div
                    key="guests-selection"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col overflow-hidden"
                  >
                    <label htmlFor="guests" className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold mb-2">
                      {t.rsvp.guestsLabel}
                    </label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      disabled={status === "submitting"}
                      className="bg-transparent border-b border-gold/25 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 font-sans cursor-pointer font-light"
                    >
                      <option value="1" className="bg-cream">{t.rsvp.guest1}</option>
                      <option value="2" className="bg-cream">{t.rsvp.guest2}</option>
                      <option value="3" className="bg-cream">{t.rsvp.guest3}</option>
                      <option value="4" className="bg-cream">{t.rsvp.guest4}</option>
                    </select>
                  </motion.div>
                )}

                {/* Message Input */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold mb-2">
                    {t.rsvp.wishesLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={status === "submitting"}
                    placeholder={t.rsvp.wishesPlaceholder}
                    className="bg-cream-dark/10 border border-gold/20 p-4 text-sm text-charcoal rounded focus:outline-none focus:border-gold transition-colors duration-300 resize-none placeholder:text-charcoal/30 font-sans font-light"
                  />
                </div>

                {/* Submit button: Royal Emerald & Gold Button */}
                <div className="text-center pt-4">
                  <button
                    key={status} // Bypasses Google Translate crash by forcing DOM recreation on state change
                    type="submit"
                    disabled={status === "submitting"}
                    className="relative px-12 py-4 rounded-full bg-emerald hover:bg-gold text-cream hover:text-emerald font-sans font-bold text-xs tracking-[0.2em] uppercase transition-all duration-500 border border-gold/30 hover:border-gold flex items-center justify-center gap-3 w-full sm:w-auto mx-auto cursor-pointer disabled:opacity-50 shadow-[0_10px_25px_rgba(10,37,32,0.2)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.35)] hover:-translate-y-0.5 overflow-hidden group"
                  >
                    {/* Hover shine effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-cream" />
                        <span>{t.rsvp.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{t.rsvp.sendBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                className="text-center py-12 flex flex-col items-center justify-center relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-8 shadow-[0_8px_20px_rgba(197,160,89,0.1)]">
                  <Heart className="w-9 h-9 text-romantic-red fill-romantic-red animate-pulse" />
                </div>
                
                <h3 className="font-serif text-3xl text-charcoal mb-4 italic font-light tracking-wide">
                  {t.rsvp.successTitle}
                </h3>
                
                <p className="text-xs md:text-sm font-sans font-light text-charcoal/60 max-w-md leading-relaxed mb-10 tracking-wide">
                  {t.rsvp.successDesc}
                </p>

                <button
                  onClick={handleReset}
                  className="text-[10px] font-sans font-bold tracking-[0.2em] text-gold hover:text-romantic-red transition-all duration-300 uppercase underline cursor-pointer"
                >
                  {t.rsvp.editBtn.replace("[", "").replace("]", "")}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
