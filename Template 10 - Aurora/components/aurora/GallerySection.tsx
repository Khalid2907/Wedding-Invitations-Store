'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '@/components/cinematic/GlassCard';
import { LightboxModal } from '@/components/cinematic/LightboxModal';
import { dictionary } from '@/lib/dictionary';
import { weddingData } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  lang: 'ar' | 'en';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const t = dictionary[lang].gallery;
  const photos = weddingData.gallery;
  const [activeCategory, setActiveCategory] = useState<'all' | 'portrait' | 'moments'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory || (activeCategory === 'moments' && p.category === 'prewedding'));

  return (
    <section id="gallery" className="relative py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E2C799] font-semibold">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#F5F9F8] mt-2 mb-4">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-[#C2D6D3] font-serif italic">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={fadeInUp} className="flex gap-2 p-1.5 rounded-full bg-[#0A1D1A]/80 border border-white/15">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-[#E2C799] text-[#040D0A] shadow-md'
                : 'text-[#C2D6D3] hover:text-[#F5F9F8]'
            }`}
          >
            {t.all}
          </button>
          <button
            onClick={() => setActiveCategory('portrait')}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === 'portrait'
                ? 'bg-[#E2C799] text-[#040D0A] shadow-md'
                : 'text-[#C2D6D3] hover:text-[#F5F9F8]'
            }`}
          >
            {t.portraits}
          </button>
          <button
            onClick={() => setActiveCategory('moments')}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === 'moments'
                ? 'bg-[#E2C799] text-[#040D0A] shadow-md'
                : 'text-[#C2D6D3] hover:text-[#F5F9F8]'
            }`}
          >
            {t.moments}
          </button>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredPhotos.map((photo, index) => (
            <GlassCard
              key={photo.id}
              glow="cyan"
              className="group cursor-pointer p-3 overflow-hidden relative"
            >
              <div
                className="relative h-72 rounded-xl overflow-hidden"
                onClick={() => setActiveLightboxIndex(index)}
              >
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs text-[#F5F9F8] font-medium">
                    {photo.caption}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          isOpen={activeLightboxIndex !== null}
          imageUrl={filteredPhotos[activeLightboxIndex].url}
          caption={filteredPhotos[activeLightboxIndex].caption}
          onClose={() => setActiveLightboxIndex(null)}
          onPrev={() =>
            setActiveLightboxIndex(
              (activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
            )
          }
          onNext={() =>
            setActiveLightboxIndex((activeLightboxIndex + 1) % filteredPhotos.length)
          }
        />
      )}
    </section>
  );
};
