"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Intent = "music" | "data" | "other";

const INTENT_OPTIONS: { value: Intent; label: string; description: string }[] = [
  { value: "music",  label: "Book a Performance",   description: "Corporate events, private concerts, studio sessions" },
  { value: "data",   label: "Start a Data Project", description: "Analysis, dashboards, visualisations, insight" },
  { value: "other",  label: "Just saying hello",    description: "Collaborations, press, or anything else" },
];

export function ContactForm() {
  const [intent, setIntent] = useState<Intent>("music");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: submit to an API route or form service
    setSubmitted(true);
  }

  return (
    <section className="section-padding">
      <div className="section-container">

        {/* ── Page header ── */}
        <ScrollReveal className="mb-16">
          <Link
            href="/"
            className="text-xs font-figtree font-500 text-muted hover:text-text transition-colors mb-8 inline-flex items-center gap-1"
          >
            ← Back home
          </Link>
          <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-4">Contact</p>
          <h1
            className="font-figtree font-800 text-text leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Let&apos;s make
            <br />
            something.
          </h1>
          <p className="mt-5 font-figtree font-400 text-muted max-w-lg leading-relaxed text-lg">
            Whether you need a guitarist who reads rooms or an analyst who finds stories
            in numbers — it starts with a message.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20">

          {/* ── Left: Info ── */}
          <ScrollReveal direction="left" className="flex flex-col gap-10">

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-2">
                  Direct email
                </p>
                <Link
                  href="mailto:paul@paulojoko.com"
                  className="font-figtree font-600 text-text text-lg hover:text-accent transition-colors"
                >
                  paul@paulojoko.com
                </Link>
              </div>

              <div>
                <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="font-figtree font-400 text-muted">Lagos, Nigeria</p>
                <p className="font-figtree font-400 text-subtle text-sm mt-0.5">Available to travel</p>
              </div>

              <div>
                <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-2">
                  Response time
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="font-figtree font-400 text-muted">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border" />

            {/* Social */}
            <div>
              <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-4">
                Find me online
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "GitHub",    href: "https://github.com",    note: "Code & projects" },
                  { label: "LinkedIn",  href: "https://linkedin.com",  note: "Professional network" },
                  { label: "Spotify",   href: "#",                     note: "Stream the music" },
                  { label: "Instagram", href: "https://instagram.com", note: "Behind the scenes" },
                ].map(({ label, href, note }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="font-figtree font-500 text-text text-sm group-hover:text-accent transition-colors">
                      {label}
                    </span>
                    <span className="font-figtree font-400 text-subtle text-xs group-hover:text-muted transition-colors">
                      {note} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Closing note */}
            <div className="border-l-2 border-accent pl-4">
              <p className="font-figtree font-400 text-muted text-sm italic leading-relaxed">
                &ldquo;The best conversations — like the best songs — start with one note.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* ── Right: Form ── */}
          <ScrollReveal direction="right" delay={0.1}>
            {submitted ? (
              <SuccessState name={form.name} />
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

                {/* Intent selector */}
                <fieldset>
                  <legend className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-3">
                    What can Paul help with?
                  </legend>
                  <div className="flex flex-col gap-2">
                    {INTENT_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-start gap-3 p-4 border cursor-pointer transition-colors ${
                          intent === opt.value
                            ? "border-accent bg-accent/5"
                            : "border-border bg-bg hover:border-text/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="intent"
                          value={opt.value}
                          checked={intent === opt.value}
                          onChange={() => setIntent(opt.value)}
                          className="mt-0.5 accent-[#C9943C] shrink-0"
                        />
                        <div>
                          <p className="font-figtree font-600 text-text text-sm">{opt.label}</p>
                          <p className="font-figtree font-400 text-muted text-xs mt-0.5">{opt.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-border bg-bg font-figtree font-400 text-text text-sm placeholder:text-subtle/60 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-border bg-bg font-figtree font-400 text-text text-sm placeholder:text-subtle/60 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={
                      intent === "music"
                        ? "Tell me about your event — date, venue, occasion..."
                        : intent === "data"
                        ? "Describe the data problem you're trying to solve..."
                        : "What's on your mind?"
                    }
                    className="w-full px-4 py-3 border border-border bg-bg font-figtree font-400 text-text text-sm placeholder:text-subtle/60 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-text text-bg font-figtree font-600 text-sm hover:bg-accent transition-colors"
                >
                  Send message →
                </button>

                <p className="text-[10px] font-figtree font-400 text-subtle text-center">
                  No spam, ever. Paul reads every message personally.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SuccessState({ name }: { name: string }) {
  return (
    <div className="flex flex-col justify-center gap-6 py-12">
      <div className="w-12 h-12 border border-accent flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M4 10l5 5L16 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <h2 className="font-figtree font-700 text-2xl text-text mb-2">
          Message sent{name ? `, ${name.split(" ")[0]}` : ""}.
        </h2>
        <p className="font-figtree font-400 text-muted leading-relaxed">
          Paul will get back to you within 24 hours. In the meantime, feel free
          to browse the music or data work.
        </p>
      </div>
      <div className="flex items-center gap-6 mt-4">
        <Link href="/#music" className="text-sm font-figtree font-600 text-text underline underline-offset-4 decoration-text/20 hover:decoration-accent hover:text-accent transition-all">
          Hear the music →
        </Link>
        <Link href="/#data" className="text-sm font-figtree font-400 text-muted hover:text-text transition-colors">
          See the data work →
        </Link>
      </div>
    </div>
  );
}
