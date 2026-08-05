'use client';

import React, { useEffect, useRef } from 'react';

export const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Aurora wave nodes
    let time = 0;

    const render = () => {
      time += 0.004;
      ctx.clearRect(0, 0, width, height);

      // Deep dark void background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, '#040D0A');
      bgGradient.addColorStop(0.5, '#0A1D1A');
      bgGradient.addColorStop(1, '#040D0A');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Aurora Wave 1: Soft Cyan Ribbon
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const grad1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 150,
        height * 0.3 + Math.cos(time * 0.8) * 100,
        50,
        width * 0.3,
        height * 0.3,
        width * 0.6
      );
      grad1.addColorStop(0, 'rgba(142, 235, 227, 0.18)');
      grad1.addColorStop(0.5, 'rgba(52, 211, 153, 0.08)');
      grad1.addColorStop(1, 'rgba(4, 13, 10, 0)');

      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(
        width * 0.3 + Math.sin(time) * 150,
        height * 0.3 + Math.cos(time * 0.8) * 100,
        width * 0.5,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Aurora Wave 2: Celestial Gold Ambient Glow
      const grad2 = ctx.createRadialGradient(
        width * 0.7 - Math.cos(time * 0.7) * 120,
        height * 0.6 + Math.sin(time * 0.9) * 120,
        40,
        width * 0.7,
        height * 0.6,
        width * 0.5
      );
      grad2.addColorStop(0, 'rgba(226, 199, 153, 0.14)');
      grad2.addColorStop(0.6, 'rgba(184, 151, 98, 0.04)');
      grad2.addColorStop(1, 'rgba(4, 13, 10, 0)');

      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(
        width * 0.7 - Math.cos(time * 0.7) * 120,
        height * 0.6 + Math.sin(time * 0.9) * 120,
        width * 0.45,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.restore();

      // Tab visibility check for performance
      if (!document.hidden) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        render();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
