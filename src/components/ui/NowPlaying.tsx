"use client";

import { motion, AnimatePresence } from "motion/react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";

/* Equalizer bar delays — staggered so they feel organic */
const EQ = [0, 0.12, 0.24, 0.06, 0.18, 0.30, 0.09, 0.21, 0.15, 0.27, 0.03, 0.33];

export function NowPlaying() {
  const { currentTrack, isPlaying, progress, togglePlay, stop } = useMusicPlayer();

  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.div
          key="now-playing"
          initial={{ y: 140, opacity: 0, scale: 0.92 }}
          animate={{ y: 0,   opacity: 1, scale: 1    }}
          exit={{   y: 140, opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", damping: 26, stiffness: 280, mass: 0.8 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          style={{ width: "min(380px, calc(100vw - 2rem))" }}
        >
          {/* ── Outermost shadow ring (depth illusion) ── */}
          <div
            className="absolute inset-0 rounded-[28px]"
            style={{
              boxShadow: [
                "0 40px 80px rgba(0,0,0,0.18)",
                "0 16px 40px rgba(0,0,0,0.12)",
                "0  4px 12px rgba(0,0,0,0.08)",
              ].join(", "),
            }}
          />

          {/* ── Glass shell ── */}
          <div
            className="relative rounded-[28px] overflow-hidden"
            style={{
              /* The real iOS glass secret: heavy blur + saturation boost */
              backdropFilter:         "blur(60px) saturate(220%) brightness(1.08)",
              WebkitBackdropFilter:   "blur(60px) saturate(220%) brightness(1.08)",
              /* Low-opacity white — lets the page show through the blur */
              background: "rgba(255, 255, 255, 0.22)",
              /* Three-layer border: white specular top, neutral sides, dark micro-shadow bottom */
              border: "1px solid rgba(255,255,255,0.60)",
              /* Inset highlights that make it read as solid glass, not just a blur box */
              boxShadow: [
                "inset 0  1px  0   rgba(255,255,255,0.95)",  /* top specular */
                "inset 0 -1px  0   rgba(0,0,0,0.06)",        /* bottom edge shadow */
                "inset 1px 0   0   rgba(255,255,255,0.60)",   /* left edge */
                "inset -1px 0  0   rgba(255,255,255,0.40)",   /* right edge */
              ].join(", "),
            }}
          >
            {/* ── Top diagonal shine — the "liquid glass" highlight ── */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: [
                  "linear-gradient(135deg,",
                  "  rgba(255,255,255,0.30) 0%,",
                  "  rgba(255,255,255,0.08) 30%,",
                  "  transparent 55%",
                  ")",
                ].join(""),
                borderRadius: "inherit",
              }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 p-4 flex flex-col gap-3">

              {/* Row 1 — Art + Info + Close */}
              <div className="flex items-center gap-3">

                {/* Album art */}
                <div
                  className="w-[62px] h-[62px] shrink-0 rounded-[14px] flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,148,60,0.18) 0%, rgba(201,148,60,0.08) 100%)",
                    boxShadow: [
                      "0 4px 16px rgba(0,0,0,0.14)",
                      "inset 0 1px 0 rgba(255,255,255,0.6)",
                    ].join(", "),
                    border: "1px solid rgba(201,148,60,0.25)",
                  }}
                >
                  {/* Guitar icon */}
                  <svg
                    width="26" height="26"
                    viewBox="0 0 24 24" fill="none"
                    stroke="rgba(201,148,60,0.9)" strokeWidth="1.4"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6"  cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>

                  {/* Art inner shine */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
                      borderRadius: "inherit",
                    }}
                  />
                </div>

                {/* Track info */}
                <div className="flex-1 min-w-0">
                  <p className="font-figtree font-700 text-text text-[14px] leading-tight truncate">
                    {currentTrack.title}
                  </p>
                  <p className="font-figtree font-400 text-muted text-[12px] mt-[3px] truncate">
                    {currentTrack.genre}
                  </p>

                  {/* Equalizer — shows when playing, frozen bars when paused */}
                  <div className="flex items-end gap-[2.5px] h-[14px] mt-[6px]">
                    {EQ.map((delay, i) => (
                      <span
                        key={i}
                        className="eq-bar rounded-sm"
                        style={{
                          animationDelay:      `${delay}s`,
                          animationPlayState:  isPlaying ? "running" : "paused",
                          height:              isPlaying ? undefined : "3px",
                          opacity:             isPlaying ? 1 : 0.4,
                          background:          "var(--color-accent)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Close button — glass pill */}
                <button
                  onClick={stop}
                  aria-label="Close player"
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-60 active:scale-95"
                  style={{
                    background:  "rgba(24,24,27,0.08)",
                    border:      "1px solid rgba(255,255,255,0.50)",
                    boxShadow:   "inset 0 1px 0 rgba(255,255,255,0.7)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-muted">
                    <path d="M1 1l6 6M7 1L1 7"/>
                  </svg>
                </button>
              </div>

              {/* Row 2 — Progress bar */}
              <div className="flex flex-col gap-1">
                {/* Track */}
                <div
                  className="relative h-[4px] rounded-full overflow-hidden"
                  style={{ background: "rgba(24,24,27,0.10)" }}
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, var(--color-accent), rgba(201,148,60,0.7))",
                      boxShadow: "0 0 6px rgba(201,148,60,0.5)",
                    }}
                    transition={{ ease: "linear", duration: 0.25 }}
                  />
                  {/* Scrubber dot */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                    style={{
                      left: `calc(${progress}% - 6px)`,
                      background: "white",
                      boxShadow: "0 1px 6px rgba(0,0,0,0.25)",
                    }}
                    transition={{ ease: "linear", duration: 0.25 }}
                  />
                </div>
              </div>

              {/* Row 3 — Controls */}
              <div className="flex items-center justify-between px-3">

                {/* Rewind */}
                <button
                  onClick={togglePlay}
                  aria-label="Restart"
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-60 active:scale-90"
                  style={{ color: "rgba(24,24,27,0.5)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
                  </svg>
                </button>

                {/* Play / Pause — large, glass-button style */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all active:scale-95"
                  style={{
                    background: "rgba(24,24,27,0.88)",
                    boxShadow: [
                      "0 6px 20px rgba(0,0,0,0.22)",
                      "0 2px  8px rgba(0,0,0,0.14)",
                      "inset 0 1px 0 rgba(255,255,255,0.15)",
                    ].join(", "),
                  }}
                >
                  {isPlaying ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                      <rect x="2"   y="1.5" width="3.5" height="11" rx="1.2" />
                      <rect x="8.5" y="1.5" width="3.5" height="11" rx="1.2" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="white" style={{ marginLeft: 2 }}>
                      <path d="M3 1.8L12 7 3 12.2V1.8Z" />
                    </svg>
                  )}
                </button>

                {/* Fast-forward */}
                <button
                  aria-label="Next"
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-60 active:scale-90"
                  style={{ color: "rgba(24,24,27,0.5)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>
                  </svg>
                </button>
              </div>

              {/* "Now Playing" label */}
              <div className="flex items-center justify-center gap-1.5 -mt-1">
                <span
                  className="font-figtree font-500 text-[10px] uppercase tracking-[0.12em]"
                  style={{ color: "rgba(24,24,27,0.35)" }}
                >
                  {isPlaying ? "Now Playing" : "Paused"}
                </span>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
