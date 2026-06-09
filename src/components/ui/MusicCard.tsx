"use client";

import Link from "next/link";
import { type MusicRelease } from "@/lib/data";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { cn } from "@/lib/utils";

type Props = {
  release: MusicRelease;
  className?: string;
};

export function MusicCard({ release, className }: Props) {
  const { currentTrack, isPlaying, play } = useMusicPlayer();

  const isThisPlaying = currentTrack?.slug === release.slug && isPlaying;
  const isThisLoaded  = currentTrack?.slug === release.slug;

  const platforms = [
    release.spotifyUrl     && { label: "Spotify",     url: release.spotifyUrl },
    release.appleMusicUrl  && { label: "Apple Music", url: release.appleMusicUrl },
    release.soundcloudUrl  && { label: "SoundCloud",  url: release.soundcloudUrl },
    release.youtubeUrl     && { label: "YouTube",     url: release.youtubeUrl },
  ].filter(Boolean) as { label: string; url: string }[];

  function handlePlay() {
    if (!release.audioUrl) return;
    play({
      slug:     release.slug,
      title:    release.title,
      genre:    release.genre,
      type:     release.type,
      audioUrl: release.audioUrl,
    });
  }

  return (
    <article className={cn("group border border-border bg-bg flex flex-col", className)}>

      {/* Cover + Play overlay */}
      <div className="aspect-square bg-surface relative overflow-hidden">

        {/* Background label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest">
            {release.genre}
          </span>
        </div>

        {/* Play button — visible on hover or when this track is active */}
        {release.audioUrl && (
          <button
            onClick={handlePlay}
            aria-label={isThisPlaying ? "Pause" : "Play preview"}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
              isThisLoaded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(255, 252, 248, 0.55)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            />

            {/* Button circle */}
            <div
              className={cn(
                "relative z-10 w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105",
                isThisLoaded ? "bg-text" : "bg-text/80"
              )}
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
            >
              {isThisPlaying ? (
                /* Pause icon */
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <rect x="1.5" y="1" width="3" height="10" rx="1" />
                  <rect x="7.5" y="1" width="3" height="10" rx="1" />
                </svg>
              ) : (
                /* Play icon */
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <path d="M2.5 1.5L10.5 6L2.5 10.5V1.5Z" />
                </svg>
              )}
            </div>

            {/* EQ bars when playing */}
            {isThisPlaying && (
              <div className="absolute bottom-3 left-0 right-0 flex items-end justify-center gap-[2px] h-4 z-10">
                {[0, 0.1, 0.2, 0.07, 0.15, 0.25, 0.05].map((delay, i) => (
                  <span
                    key={i}
                    className="eq-bar"
                    style={{ animationDelay: `${delay}s`, background: "var(--color-accent)" }}
                  />
                ))}
              </div>
            )}
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-figtree font-600 text-accent uppercase tracking-widest">
            {release.type}
          </span>
          <span className="text-[10px] font-figtree font-400 text-subtle">{release.year}</span>
        </div>
        <h3 className={cn(
          "font-figtree font-600 text-sm transition-colors",
          isThisLoaded ? "text-accent" : "text-text"
        )}>
          {release.title}
        </h3>
        <p className="text-xs font-figtree font-400 text-muted">{release.genre}</p>

        {platforms.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2 border-t border-border mt-1">
            {platforms.map((p) => (
              <Link
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-figtree font-500 text-muted hover:text-text transition-colors"
              >
                {p.label} →
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
