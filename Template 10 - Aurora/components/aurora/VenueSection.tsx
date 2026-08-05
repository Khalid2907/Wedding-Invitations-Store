'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { dictionary } from '@/lib/dictionary';
import { weddingData } from '@/lib/data';
import { generateGoogleCalendarUrl, downloadIcsFile } from '@/lib/calendar';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { MapPin, Calendar, ExternalLink, Download, Shirt, ShieldCheck } from 'lucide-react';

interface VenueSectionProps {
  lang: 'ar' | 'en';
}

export const VenueSection: React.FC<VenueSectionProps> = ({ lang }) => {
  const t = dictionary[lang].venue;
  const venue = weddingData.venue;
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  const handleGoogleCal = () => {
    const url = generateGoogleCalendarUrl({
      title: `${dictionary[lang].hero.groom} & ${dictionary[lang].hero.bride} Wedding`,
      description: `Wedding celebration of ${dictionary[lang].hero.groom} & ${dictionary[lang].hero.bride} at Four Seasons Nile Plaza Cairo`,
      location: venue.name,
      startDate: weddingData.eventDate,
      endDate: weddingData.endDate,
    });
    window.open(url, '_blank');
  };

  const handleIcsDownload = () => {
    downloadIcsFile({
      title: `${dictionary[lang].hero.groom} & ${dictionary[lang].hero.bride} Wedding`,
      description: `Wedding celebration at Four Seasons Nile Plaza Cairo`,
      location: venue.name,
      startDate: weddingData.eventDate,
      endDate: weddingData.endDate,
    });
  };

  return (
    <section id="venue" className="relative py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8EEBE3] font-semibold">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#F5F9F8] mt-2 mb-4">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-[#C2D6D3] font-serif italic">
            {t.hall}
          </p>
        </motion.div>

        {/* Venue Glass Card */}
        <GlassCard glow="cyan" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10 w-full">
          {/* Image & Map Preview */}
          <div className="lg:col-span-6 relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/15">
            <Image
              src={venue.image}
              alt={venue.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 start-4 flex flex-col gap-1">
              <span className="text-xs text-[#E2C799] font-medium tracking-wide">
                {venue.city}, {venue.country}
              </span>
              <span className="text-sm text-[#F5F9F8] font-display font-light">
                {t.hall}
              </span>
            </div>
          </div>

          {/* Details & Actions */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-[#C2D6D3]">
                <MapPin className="w-5 h-5 text-[#8EEBE3] flex-shrink-0 mt-0.5" />
                <span>{t.address}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#C2D6D3]">
                <Calendar className="w-5 h-5 text-[#E2C799] flex-shrink-0" />
                <span>{t.dateValue}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#C2D6D3]">
                <Shirt className="w-5 h-5 text-[#34D399] flex-shrink-0" />
                <span>
                  <strong>{t.dressCodeLabel}:</strong> {t.dressCodeValue}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#C2D6D3]">
                <ShieldCheck className="w-5 h-5 text-[#8EEBE3] flex-shrink-0" />
                <span>{t.valetValue}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8EEBE3]/10 border border-[#8EEBE3]/40 text-xs font-semibold text-[#8EEBE3] hover:bg-[#8EEBE3]/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.openGoogleMaps}</span>
              </a>

              <a
                href={venue.appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-xs font-semibold text-[#F5F9F8] hover:bg-white/10 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.openAppleMaps}</span>
              </a>

              {/* Add to Calendar Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E2C799]/10 border border-[#E2C799]/40 text-xs font-semibold text-[#E2C799] hover:bg-[#E2C799]/20 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.addToCalendar}</span>
                </button>

                {calendarMenuOpen && (
                  <div className="absolute top-full mt-2 start-0 z-20 w-48 rounded-xl bg-[#0A1D1A] border border-white/20 shadow-2xl p-2 flex flex-col gap-1">
                    <button
                      onClick={handleGoogleCal}
                      className="text-start px-3 py-2 text-xs text-[#F5F9F8] hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {t.addToGoogle}
                    </button>
                    <button
                      onClick={handleIcsDownload}
                      className="flex items-center gap-2 text-start px-3 py-2 text-xs text-[#E2C799] hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.downloadIcs}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
