'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { luxurySpring } from '@/lib/motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'gold' | 'emerald' | 'none';
  interactiveTilt?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = 'gold',
  interactiveTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -4; // Max 4 deg tilt
    const rY = ((x - centerX) / centerX) * 4;

    setRotateX(rX);
    setRotateY(rY);

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const glowStyles = {
    cyan: 'hover:border-[#8EEBE3]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(142,235,227,0.2)]',
    gold: 'hover:border-[#E2C799]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(226,199,153,0.2)]',
    emerald: 'hover:border-[#34D399]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(52,211,153,0.2)]',
    none: '',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={luxurySpring}
      style={{ transformStyle: 'preserve-3d' }}
      className={cn(
        'relative rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-500 overflow-hidden',
        'bg-[#0A1D1A]/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]',
        glowStyles[glow],
        className
      )}
    >
      {/* Light Reflection Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
        }}
      />

      {children}
    </motion.div>
  );
};
