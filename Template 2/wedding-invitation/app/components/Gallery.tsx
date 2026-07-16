import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    caption: "The details that bind us",
    category: "Details",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    caption: "Walking into our future",
    category: "Moments",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    caption: "Holding onto forever",
    category: "Promises",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    caption: "A toast to our love",
    category: "Celebrations",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80",
    caption: "Under the golden light",
    category: "Scenery",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable <= 0) return;
      
      // Calculate fraction of scroll completed
      const scrollFraction = scrollLeft / totalScrollable;
      const index = Math.min(Math.round(scrollFraction * (galleryItems.length - 1)), galleryItems.length - 1);
      setActiveSlide(index);
    }
  };

  useEffect(() => {
    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      const scrollPosition = (index / (galleryItems.length - 1)) * totalScrollable;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-28 md:py-40 bg-cream border-b border-gold/15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-3 font-semibold font-sans"
        >
          {t.gallery.tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl md:text-5xl text-charcoal mb-4 font-light tracking-wide"
        >
          {t.gallery.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[10px] md:text-xs tracking-widest font-serif italic text-gold uppercase mt-2 font-medium"
        >
          {t.gallery.instruction}
        </motion.p>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="w-full relative px-4 md:px-12">
        <div 
          ref={carouselRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-6 scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {galleryItems.map((item, index) => {
            const imageInfo = t.gallery.images[item.id as 1 | 2 | 3 | 4 | 5];
            const caption = imageInfo?.caption || item.caption;
            const category = imageInfo?.category || item.category;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                className="w-[280px] sm:w-[350px] md:w-[400px] shrink-0 snap-center"
              >
                {/* Polaroid-style Card Frame with Luxury Deckled Details */}
                <div className="deckled-card p-4 sm:p-5 rounded shadow-[0_12px_35px_rgba(26,38,32,0.04)] hover:shadow-[0_20px_45px_rgba(197,160,89,0.15)] hover:-translate-y-1 transition-all duration-500 relative">
                  
                  {/* Decorative internal card frame lines */}
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-gold/20 pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-gold/20 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-gold/20 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-gold/20 pointer-events-none" />

                  {/* Image Wrap */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream mb-4 border border-gold/15">
                    {/* Inset shadows */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent z-10 pointer-events-none" />
                    
                    <img
                      src={item.url}
                      alt={caption}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Category Pill Tag */}
                    <span className="absolute top-3 start-3 z-20 px-2 py-0.5 bg-cream/90 backdrop-blur-xs border border-gold/25 text-[8px] tracking-widest uppercase font-bold text-charcoal rounded-sm shadow-xs">
                      {category}
                    </span>
                  </div>

                  {/* Hand-written-looking Caption */}
                  <div className="pt-2 pb-1 text-center">
                    <p className="font-serif italic text-base sm:text-lg text-charcoal/95 tracking-wide">
                      "{caption}"
                    </p>
                    <span className="block text-[9px] tracking-widest text-gold font-bold uppercase mt-3 font-sans">
                      {t.gallery.credits}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elegant horizontal pagination dashes below scroll */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSlide(index)}
              className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer ${
                activeSlide === index ? "w-10 bg-gold" : "w-4 bg-gold/20 hover:bg-gold/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
