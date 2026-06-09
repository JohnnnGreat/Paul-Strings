"use client";

import Link from "next/link";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { MusicCard } from "@/components/ui/MusicCard";
import { Marquee } from "@/components/ui/Marquee";
import { musicReleases } from "@/lib/data";

const PLATFORMS = [
  { name: "Spotify",     href: "#" },
  { name: "Apple Music", href: "#" },
  { name: "SoundCloud",  href: "#" },
  { name: "YouTube",     href: "#" },
];

const GENRES = [
  "Fingerstyle", "Jazz Guitar", "Blues", "Classical", "Fusion",
  "Acoustic", "Composition", "Improvisation",
];

export function MusicSection() {
  return (
    <section id="music" className="section-padding">
      <div className="section-container">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <ScrollReveal direction="left">
            <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-4">Music</p>
            <h2
              className="font-figtree font-800 text-text leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              The Guitarist.
            </h2>
            <p className="mt-5 font-figtree font-400 text-muted leading-relaxed max-w-md">
              Eight years of strings, calluses, and late-night sessions. I play where melody meets
              silence — fingerstyle compositions, jazz improvisations, and everything in between.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="p-6 border border-border bg-surface">
              <p className="font-figtree font-600 text-lg text-text leading-snug mb-4">
                &ldquo;I don&apos;t play music. I have a conversation with it.
                Some days it answers.&rdquo;
              </p>
              <cite className="text-xs font-figtree font-500 text-accent not-italic">— Paul Ojoko</cite>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-5">
              <span className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest">Listen on</span>
              {PLATFORMS.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-figtree font-600 text-muted hover:text-text transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Genre Marquee */}
        <ScrollReveal className="mb-12">
          <Marquee
            items={GENRES}
            direction="left"
            className="border-y border-border py-3"
            itemClassName="text-subtle/50 text-xs tracking-widest uppercase"
          />
        </ScrollReveal>

        {/* Releases */}
        <ScrollReveal className="mb-4">
          <h3 className="font-figtree font-600 text-text">Releases</h3>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14" stagger={0.1}>
          {musicReleases.map((release) => (
            <StaggerItem key={release.slug}>
              <MusicCard release={release} />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Booking CTA */}
        <ScrollReveal>
          <div className="border border-border p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] font-figtree font-600 text-accent uppercase tracking-widest mb-2">
                Bookings Open
              </p>
              <h3 className="font-figtree font-700 text-xl text-text mb-1">
                Book Paul for your next event
              </h3>
              <p className="text-sm font-figtree font-400 text-muted">
                Corporate events, private concerts, studio sessions, and artist collaborations.
                Based in Lagos — available to travel.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 bg-text text-bg font-figtree font-600 text-sm hover:bg-accent transition-colors text-center whitespace-nowrap"
              >
                Book a Performance
              </Link>
              <p className="text-[10px] font-figtree font-400 text-subtle text-center">
                Usually responds within 24 hrs
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
