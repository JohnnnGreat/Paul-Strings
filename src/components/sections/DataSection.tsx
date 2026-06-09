"use client";

import Link from "next/link";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Marquee } from "@/components/ui/Marquee";
import { dataProjects } from "@/lib/data";

const TOOLS_TICKER = [
  "Python", "SQL", "Tableau", "Power BI", "Pandas",
  "Matplotlib", "Scikit-learn", "Excel", "Google Sheets", "Spotify API",
];

const IMPACT_STATS = [
  { value: "340%", label: "Streaming growth identified" },
  { value: "87%",  label: "Forecast accuracy achieved" },
  { value: "60%",  label: "Time saved for clients" },
  { value: "20+",  label: "Projects completed" },
];

export function DataSection() {
  const featured = dataProjects.filter((p) => p.featured);

  return (
    <section id="data" className="section-padding bg-surface">
      <div className="section-container">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <ScrollReveal direction="left">
            <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-4">Data Work</p>
            <h2
              className="font-figtree font-800 text-text leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              The Analyst.
            </h2>
            <p className="mt-5 font-figtree font-400 text-muted leading-relaxed max-w-md">
              I turn raw numbers into stories that change decisions. With Python, SQL,
              and Tableau — and a musician&apos;s ear for the patterns everyone else misses.
            </p>
          </ScrollReveal>

          {/* Impact stats */}
          <ScrollReveal direction="right" delay={0.1}>
            <StaggerReveal className="grid grid-cols-2 gap-px bg-border" stagger={0.08} delay={0.1}>
              {IMPACT_STATS.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="p-5 bg-bg">
                    <div className="font-figtree font-800 text-3xl text-text mb-1">{s.value}</div>
                    <p className="text-xs font-figtree font-400 text-muted leading-snug">{s.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </ScrollReveal>
        </div>

        {/* Philosophy */}
        <ScrollReveal className="mb-12">
          <div className="border-l-2 border-accent pl-5">
            <p className="font-figtree font-600 text-lg text-text">
              &ldquo;Data without a story is just numbers. I make the numbers sing.&rdquo;
            </p>
            <cite className="text-xs font-figtree font-400 text-accent not-italic mt-2 block">— Paul Ojoko</cite>
          </div>
        </ScrollReveal>

        {/* Projects */}
        <ScrollReveal className="mb-5">
          <div className="flex items-center justify-between">
            <h3 className="font-figtree font-600 text-text">Featured Projects</h3>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-figtree font-400 text-muted hover:text-text transition-colors"
            >
              View all on GitHub →
            </Link>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" stagger={0.1}>
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Tools marquee */}
        <ScrollReveal className="mb-10">
          <p className="text-[10px] font-figtree font-500 text-subtle uppercase tracking-widest mb-3">
            Tools &amp; Technologies
          </p>
          <Marquee
            items={TOOLS_TICKER}
            direction="right"
            className="border-y border-border py-3"
            itemClassName="text-subtle/50 text-xs tracking-widest uppercase"
          />
        </ScrollReveal>

        {/* Hire CTA */}
        <ScrollReveal>
          <div className="border border-border p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] font-figtree font-600 text-accent uppercase tracking-widest mb-2">
                Available for Projects
              </p>
              <h3 className="font-figtree font-700 text-xl text-text mb-1">
                Have data that needs a story?
              </h3>
              <p className="text-sm font-figtree font-400 text-muted">
                Analysis, dashboards, visualisations, and strategic insight.
                Remote-friendly. Responds fast.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 bg-text text-bg font-figtree font-600 text-sm hover:bg-accent transition-colors text-center whitespace-nowrap"
              >
                Start a Project
              </Link>
              <p className="text-[10px] font-figtree font-400 text-subtle text-center">
                Free 30-min discovery call
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
