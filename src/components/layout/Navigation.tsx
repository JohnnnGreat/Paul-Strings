"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Music",   href: "#music" },
  { label: "Data",    href: "#data" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-bg/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-sm font-figtree font-600 text-text hover:text-accent transition-colors tracking-tight"
            >
              Paul Ojoko
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-figtree font-400 text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hire CTA — text link, no pill */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="text-sm font-figtree font-600 text-text underline underline-offset-4 decoration-accent hover:text-accent transition-colors"
              >
                Hire me
              </Link>
            </div>

            {/* Mobile burger — text toggle */}
            <button
              className="md:hidden text-sm font-figtree font-500 text-text"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg flex flex-col pt-24 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-0 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-5 border-b border-border text-3xl font-figtree font-700 text-text hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 text-xl font-figtree font-600 text-accent"
            >
              Hire me →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
