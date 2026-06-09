"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 40;
    const increment = value / steps;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-figtree font-800 text-3xl text-text tabular-nums">
      {count}{suffix}
    </span>
  );
}

const BRIDGE = [
  {
    step: "01",
    title: "Listen",
    music: "Hear patterns in a chord progression",
    data: "Hear signal inside noisy data",
  },
  {
    step: "02",
    title: "Analyse",
    music: "Break a melody into its intervals",
    data: "Break a dataset into its variables",
  },
  {
    step: "03",
    title: "Narrate",
    music: "Perform the story you composed",
    data: "Present the insight you discovered",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="section-container">

        {/* Header */}
        <ScrollReveal className="mb-16">
          <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-4">About</p>
          <h2
            className="font-figtree font-800 text-text leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)" }}
          >
            Why both?
          </h2>
          <p className="mt-4 font-figtree font-400 text-muted text-lg leading-relaxed max-w-xl">
            Because the same mind that finds melody in silence can find meaning in noise.
          </p>
        </ScrollReveal>

        {/* Story + Stats */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start mb-20">

          <div className="flex flex-col gap-7">
            <ScrollReveal direction="left" delay={0.05}>
              <p className="text-text font-figtree font-400 leading-relaxed text-[1.05rem]">
                I picked up a guitar at 14 in Lagos. Not because someone told me to — because I needed to.
                Music gave me a way to say things I didn&apos;t have words for yet. I played through the
                frustration of buzzing strings until I could hear the space between the notes, and that
                space became everything.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <p className="text-muted font-figtree font-400 leading-relaxed">
                Years later, working with data for the first time, I felt the exact same pull. A dataset
                is just noise until you learn to listen to it. The patterns were always there — I just
                had to tune my ear. Suddenly the two disciplines weren&apos;t separate worlds. They were
                the same conversation in different languages.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <p className="text-muted font-figtree font-400 leading-relaxed">
                Both music and data ask the same fundamental question:{" "}
                <em className="text-text not-italic font-500">
                  what does this mean, and how do you make someone else feel it?
                </em>{" "}
                I spend my life answering that question — from stage and from screen.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <blockquote className="border-l-2 border-accent pl-5 mt-2">
                <p className="font-figtree font-600 text-xl text-text leading-snug">
                  &ldquo;Music is structured emotion. Data is structured truth.
                  I speak both languages fluently.&rdquo;
                </p>
                <footer className="mt-3">
                  <cite className="text-xs font-figtree font-500 text-accent not-italic">— Paul Ojoko</cite>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-3">
            <StaggerReveal className="grid grid-cols-2 gap-3" stagger={0.1} delay={0.2}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="p-5 bg-bg border border-border flex flex-col gap-1.5">
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <p className="text-xs font-figtree font-400 text-muted leading-tight">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="p-5 border border-accent/20 bg-bg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-figtree font-600 text-accent uppercase tracking-wider">
                    Available Now
                  </span>
                </div>
                <p className="text-sm font-figtree font-400 text-muted">
                  Open to data roles, analytical freelance projects, and guitar performance bookings.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bridge Steps */}
        <ScrollReveal className="mb-8">
          <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-2">
            The same process, two worlds
          </p>
          <h3 className="font-figtree font-700 text-xl text-text">
            How music trained me to think in data
          </h3>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-px bg-border" stagger={0.12} delay={0.1}>
          {BRIDGE.map((b) => (
            <StaggerItem key={b.step}>
              <div className="bg-bg p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-figtree font-700 text-text text-lg">{b.title}</span>
                  <span className="font-figtree font-300 text-3xl text-border select-none">{b.step}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-[10px] font-figtree font-600 text-accent uppercase tracking-widest mb-1">Music</p>
                    <p className="text-xs font-figtree font-400 text-muted">{b.music}</p>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div>
                    <p className="text-[10px] font-figtree font-600 text-muted uppercase tracking-widest mb-1">Data</p>
                    <p className="text-xs font-figtree font-400 text-muted">{b.data}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

      </div>
    </section>
  );
}
