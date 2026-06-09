"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { type DataProject } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = {
  project: DataProject;
  className?: string;
};

export function ProjectCard({ project, className }: Props) {
  return (
    <article className={cn("group border border-border bg-bg flex flex-col", className)}>
      {/* Category strip */}
      <div className="px-5 pt-5">
        <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-3">
          {project.category}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-5 pb-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-figtree font-600 text-text text-base leading-snug">
            {project.title}
          </h3>
          {project.impact && (
            <span className="text-xs font-figtree font-600 text-accent shrink-0">{project.impact}</span>
          )}
        </div>

        <p className="text-sm font-figtree font-400 text-muted leading-relaxed">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tools.map((tool) => (
            <span key={tool} className="text-[10px] font-figtree font-500 text-subtle border border-border px-2 py-0.5">
              {tool}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center gap-4 pt-1 border-t border-border mt-1">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-figtree font-500 text-muted hover:text-text transition-colors"
              >
                GitHub →
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-figtree font-500 text-muted hover:text-text transition-colors"
              >
                Live →
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
