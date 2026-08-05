'use client';

import { useState, useEffect, useRef } from 'react';

export function useAudio(src: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => setAudioLoaded(true);
    audio.addEventListener('canplaythrough', handleCanPlay);

    return () => {
      audio.pause();
      audio.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio playback error:', err);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return { isPlaying, isMuted, audioLoaded, togglePlay, toggleMute };
}
