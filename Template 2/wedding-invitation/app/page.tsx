// page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./components/LanguageContext";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import CountdownAndVenue from "./components/CountdownAndVenue";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full select-none bg-cream overflow-x-hidden">
      {/* Paper texture grain overlay */}
      <div className="bg-grain-overlay" />

      {/* Envelope preloader screen overlay */}
      <Preloader onOpen={handleOpen} isOpen={isOpen} />
      {isOpen && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          className="fixed top-6 start-6 z-50 flex h-10 px-5 items-center justify-center rounded-full bg-emerald text-cream hover:bg-gold hover:text-emerald border border-gold/30 shadow-[0_4px_15px_rgba(10,37,32,0.25)] hover:shadow-[0_8px_20px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 transition-all duration-300 text-[10px] font-bold tracking-[0.2em] font-sans uppercase cursor-pointer"
        >
          {language === "en" ? "العربية" : "English"}
        </motion.button>
      )}

      {/* Main Single Page Content */}
      <main
        className={`transition-opacity duration-1000 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 max-h-screen overflow-hidden"
        }`}
      >
        <Hero isOpen={isOpen} />
        <Timeline />
        <CountdownAndVenue />
        <Gallery />
        <RSVP />
        <Footer />
      </main>
    </div>
  );
}





