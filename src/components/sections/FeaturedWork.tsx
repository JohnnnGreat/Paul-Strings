"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { dataProjects, musicReleases, type DataProject, type MusicRelease } from "@/lib/data";

export function FeaturedWork() {
  const featuredData  = dataProjects.filter((p) => p.featured).slice(0, 2);
  const featuredMusic = musicReleases.slice(0, 1);

  return (
    <section id="featured" className="section-padding">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <ScrollReveal>
            <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-3">
              Selected Work
            </p>
            <h2
              className="font-figtree font-800 text-text leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            >
              Both worlds. One portfolio.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <p className="text-sm font-figtree font-400 text-muted max-w-xs">
              Music and data work living side by side, the way they do in my head.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto">

          {featuredData[0] && (
            <ScrollReveal direction="up" className="lg:col-span-7">
              <DataHeroCard project={featuredData[0]} />
            </ScrollReveal>
          )}

          {featuredMusic[0] && (
            <ScrollReveal direction="up" delay={0.08} className="lg:col-span-5">
              <MusicBentoCard release={featuredMusic[0]} />
            </ScrollReveal>
          )}

          {featuredData[1] && (
            <ScrollReveal direction="up" delay={0.12} className="lg:col-span-5">
              <DataCard project={featuredData[1]} />
            </ScrollReveal>
          )}

          <ScrollReveal direction="up" delay={0.16} className="lg:col-span-7">
            <IntersectionCard />
          </ScrollReveal>
        </div>

        {/* Footer links */}
        <ScrollReveal delay={0.2} className="mt-10 flex items-center justify-center gap-8">
          <Link
            href="#music"
            className="text-sm font-figtree font-500 text-muted hover:text-text transition-colors"
          >
            All Music →
          </Link>
          <span className="w-px h-4 bg-border" />
          <Link
            href="#data"
            className="text-sm font-figtree font-500 text-muted hover:text-text transition-colors"
          >
            All Data Work →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function DataHeroCard({ project }: { project: DataProject }) {
  return (
    <motion.div
      className="bg-surface border border-border p-7 flex flex-col gap-5 min-h-[300px] group"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-start justify-between">
        <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest">Data Analysis</p>
        <Link href={`/data/${project.slug}`} className="text-xs font-figtree text-muted hover:text-text transition-colors">
          View →
        </Link>
      </div>

      <div className="flex-1">
        <h3 className="font-figtree font-700 text-xl text-text leading-tight mb-3">
          {project.title}
        </h3>
        <p className="text-muted font-figtree font-400 text-sm leading-relaxed">{project.summary}</p>
      </div>

      {project.impact && (
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 border border-accent/30 text-accent text-xs font-figtree font-600">
            {project.impact}
          </span>
          <span className="text-xs font-figtree font-400 text-muted">impact achieved</span>
        </div>
      )}

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tools.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] font-figtree font-500 text-subtle border border-border px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function MusicBentoCard({ release }: { release: MusicRelease }) {
  return (
    <motion.div
      className="bg-surface border border-border p-7 flex flex-col gap-5 min-h-[300px]"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-start justify-between">
        <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest">Music</p>
        <span className="text-[10px] font-figtree font-500 text-subtle border border-border px-2 py-0.5">
          {release.type}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-figtree font-700 text-xl text-text leading-tight mb-2">
          {release.title}
        </h3>
        <p className="text-xs font-figtree font-500 text-accent mb-3">{release.genre} · {release.year}</p>
        <p className="text-muted font-figtree font-400 text-sm leading-relaxed">{release.description}</p>
      </div>

      <Link
        href="#music"
        className="self-start text-sm font-figtree font-600 text-text underline underline-offset-4 decoration-text/20 hover:decoration-accent hover:text-accent transition-all"
      >
        Listen on Spotify →
      </Link>
    </motion.div>
  );
}

function DataCard({ project }: { project: DataProject }) {
  return (
    <motion.div
      className="bg-surface border border-border p-6 flex flex-col gap-4"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-start justify-between">
        <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest">{project.category}</p>
        {project.impact && (
          <span className="text-xs font-figtree font-600 text-accent">{project.impact}</span>
        )}
      </div>

      <div>
        <h3 className="font-figtree font-700 text-text text-base leading-snug mb-2">{project.title}</h3>
        <p className="text-xs font-figtree font-400 text-muted leading-relaxed">{project.summary}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tools.slice(0, 3).map((t) => (
          <span key={t} className="text-[10px] font-figtree font-500 text-subtle border border-border px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function IntersectionCard() {
  return (
    <div className="bg-surface border border-border p-7 flex flex-col md:flex-row md:items-center gap-6">
      <div className="flex-1">
        <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-3">The Intersection</p>
        <h3 className="font-figtree font-700 text-xl text-text leading-tight mb-2">
          Need someone who bridges creativity and analysis?
        </h3>
        <p className="text-sm font-figtree font-400 text-muted">
          Paul brings a musician&apos;s intuition and a data analyst&apos;s rigour to every project.
          That combination is rare — and it&apos;s what makes his work move people.
        </p>
      </div>

      <div className="flex flex-col gap-3 shrink-0">
        <Link
          href="/contact"
          className="px-6 py-3 bg-text text-bg font-figtree font-600 text-sm hover:bg-accent transition-colors text-center whitespace-nowrap"
        >
          Work with Paul
        </Link>
        <Link
          href="#about"
          className="text-center text-xs font-figtree font-400 text-muted hover:text-text transition-colors"
        >
          Read his story →
        </Link>
      </div>
    </div>
  );
}
