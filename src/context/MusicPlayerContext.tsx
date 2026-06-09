"use client";

import { createContext, useContext, useRef, useState, useCallback } from "react";

export type PlayerTrack = {
  slug: string;
  title: string;
  genre: string;
  type: string;
  audioUrl: string;
};

type MusicPlayerContextType = {
  currentTrack: PlayerTrack | null;
  isPlaying: boolean;
  progress: number;
  play: (track: PlayerTrack) => void;
  togglePlay: () => void;
  stop: () => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export function MusicPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<PlayerTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Use any here — Howl type only exists in browser context
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const howlRef = useRef<any>(null);
  const rafRef = useRef<number>(0);

  const tick = useCallback(() => {
    if (!howlRef.current) return;
    const seek = howlRef.current.seek() as number;
    const duration = howlRef.current.duration() as number || 1;
    setProgress((seek / duration) * 100);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stop = useCallback(() => {
    if (howlRef.current) {
      howlRef.current.stop();
      howlRef.current.unload();
      howlRef.current = null;
    }
    cancelAnimationFrame(rafRef.current);
    setCurrentTrack(null);
    setIsPlaying(false);
    setProgress(0);
  }, []);

  const togglePlay = useCallback(() => {
    if (!howlRef.current) return;
    if (isPlaying) {
      howlRef.current.pause();
      cancelAnimationFrame(rafRef.current);
      setIsPlaying(false);
    } else {
      howlRef.current.play();
      rafRef.current = requestAnimationFrame(tick);
      setIsPlaying(true);
    }
  }, [isPlaying, tick]);

  const play = useCallback(async (track: PlayerTrack) => {
    // Toggle same track
    if (currentTrack?.slug === track.slug) {
      togglePlay();
      return;
    }

    // Stop existing
    if (howlRef.current) {
      howlRef.current.stop();
      howlRef.current.unload();
      howlRef.current = null;
    }
    cancelAnimationFrame(rafRef.current);
    setProgress(0);
    setCurrentTrack(track);

    // Dynamic import — keeps Howler out of SSR bundle
    const { Howl } = await import("howler");

    const howl = new Howl({
      src: [track.audioUrl],
      html5: true,
      onplay() {
        setIsPlaying(true);
        rafRef.current = requestAnimationFrame(tick);
      },
      onpause() {
        setIsPlaying(false);
        cancelAnimationFrame(rafRef.current);
      },
      onstop() {
        setIsPlaying(false);
        cancelAnimationFrame(rafRef.current);
      },
      onend() {
        setIsPlaying(false);
        setProgress(100);
        cancelAnimationFrame(rafRef.current);
      },
      onloaderror(_id: number, err: unknown) {
        console.error("Howler load error", err);
        setIsPlaying(false);
      },
    });

    howlRef.current = howl;
    howl.play();
  }, [currentTrack, togglePlay, tick]);

  return (
    <MusicPlayerContext.Provider value={{ currentTrack, isPlaying, progress, play, togglePlay, stop }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const ctx = useContext(MusicPlayerContext);
  if (!ctx) throw new Error("useMusicPlayer must be inside MusicPlayerProvider");
  return ctx;
}
