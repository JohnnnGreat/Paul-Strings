"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/Marquee";

const TICKER = [
  "8 years guitar",
  "20+ data projects",
  "Fingerstyle",
  "Jazz",
  "Python",
  "Tableau",
  "SQL",
  "Lagos",
  "Live performer",
  "Data storyteller",
  "Available for work",
  "Pattern finder",
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col">

      {/* ── Main content ── */}
      <div className="section-container flex-1 flex flex-col justify-center pt-28 pb-16">

        {/* Top meta row */}
        <motion.div
          {...fade(0.1)}
          className="flex items-center justify-between mb-16 text-xs font-figtree font-500 text-subtle uppercase tracking-widest"
        >
          <span>Portfolio — 2025</span>
          <span>Lagos, Nigeria</span>
        </motion.div>

        {/* Name + identity split */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end">

          {/* Left — Name */}
          <div>
            <motion.h1
              {...fade(0.2)}
              className="font-figtree font-800 text-text leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(5rem, 13vw, 11rem)" }}
            >
              Paul
              <br />
              Ojoko.
            </motion.h1>
          </div>

          {/* Right — Role + Description + CTAs */}
          <div className="flex flex-col gap-8 lg:pb-3">
            <motion.div {...fade(0.3)}>
              <p
                className="font-figtree font-300 text-text leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
              >
                Guitarist &amp;
                <br />
                Data Analyst.
              </p>
            </motion.div>

            <motion.div {...fade(0.4)} className="w-12 h-px bg-border" />

            <motion.p {...fade(0.45)} className="text-base font-figtree font-400 text-muted leading-relaxed max-w-sm">
              A musician who thinks in datasets.
              An analyst who moves with rhythm.
              Most people have to choose a lane — Paul never did.
            </motion.p>

            <motion.div {...fade(0.55)} className="flex items-center gap-6">
              <Link
                href="#data"
                className="text-sm font-figtree font-600 text-text underline underline-offset-4 decoration-text/20 hover:decoration-accent hover:text-accent transition-all"
              >
                See the work →
              </Link>
              <Link
                href="#music"
                className="text-sm font-figtree font-400 text-muted hover:text-text transition-colors"
              >
                Hear the music →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Availability strip */}
        <motion.div
          {...fade(0.65)}
          className="mt-20 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs font-figtree font-500 text-subtle uppercase tracking-widest"
        >
          <span>Lagos, Nigeria</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Available for work
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <span>Open to freelance &amp; full-time</span>
        </motion.div>
      </div>

      {/* ── Ticker ── */}
      <div className="border-t border-border py-3 overflow-hidden">
        <Marquee
          items={TICKER}
          direction="left"
          itemClassName="text-subtle/50 text-[11px] tracking-widest uppercase"
          separator="·"
        />
      </div>
    </section>
  );
}
