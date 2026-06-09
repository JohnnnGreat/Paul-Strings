import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SOCIALS = [
  { label: "GitHub",    href: "https://github.com" },
  { label: "LinkedIn",  href: "https://linkedin.com" },
  { label: "YouTube",   href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Spotify",   href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <ScrollReveal className="mb-14">
            <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-4">Get in Touch</p>
            <h2
              className="font-figtree font-800 text-text leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Let&apos;s create
              <br />
              something.
            </h2>
            <p className="mt-5 font-figtree font-400 text-muted max-w-lg leading-relaxed">
              The stage or the spreadsheet — either way, Paul delivers. Whether you need
              a performer who captivates or an analyst who illuminates, the conversation
              starts here.
            </p>
          </ScrollReveal>

          {/* Dual CTA */}
          <div className="grid sm:grid-cols-2 gap-px bg-border mb-10">
            <ScrollReveal direction="left" delay={0.05}>
              <Link
                href="/contact"
                className="group block p-7 bg-bg hover:bg-surface transition-colors"
              >
                <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-4">Music</p>
                <h3 className="font-figtree font-700 text-text text-lg mb-2">Book a Performance</h3>
                <p className="text-sm font-figtree font-400 text-muted mb-5 leading-relaxed">
                  Corporate events, private concerts, festival bookings, studio sessions,
                  and artist collaborations. Based in Lagos.
                </p>
                <span className="text-sm font-figtree font-600 text-accent group-hover:underline underline-offset-4">
                  Book Now →
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <Link
                href="/contact"
                className="group block p-7 bg-bg hover:bg-surface transition-colors"
              >
                <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-4">Data</p>
                <h3 className="font-figtree font-700 text-text text-lg mb-2">Start a Data Project</h3>
                <p className="text-sm font-figtree font-400 text-muted mb-5 leading-relaxed">
                  Analysis, dashboards, visualisations, and strategic insight.
                  Remote-friendly. Free 30-min discovery call to start.
                </p>
                <span className="text-sm font-figtree font-600 text-accent group-hover:underline underline-offset-4">
                  Get in Touch →
                </span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Trust signals */}
          <ScrollReveal delay={0.15} className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-10 text-xs font-figtree font-400 text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Responds within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-subtle" />
              Remote-friendly, Lagos-based
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Available for immediate projects
            </span>
          </ScrollReveal>

          {/* Direct email */}
          <ScrollReveal delay={0.2} className="mb-12">
            <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-3">Or send a direct message</p>
            <Link
              href="mailto:paul@paulojoko.com"
              className="font-figtree font-600 text-text hover:text-accent transition-colors text-lg"
            >
              paul@paulojoko.com
            </Link>
          </ScrollReveal>

          {/* Socials */}
          <ScrollReveal delay={0.25}>
            <div className="flex items-center gap-6">
              {SOCIALS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-figtree font-400 text-subtle hover:text-text transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* Closing line */}
          <ScrollReveal delay={0.3} className="mt-10 pt-10 border-t border-border">
            <p className="font-figtree font-400 text-muted italic">
              &ldquo;The best conversations — like the best songs — start with one note.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
