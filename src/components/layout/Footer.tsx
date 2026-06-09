import Link from "next/link";

const links = [
  { label: "GitHub",    href: "https://github.com" },
  { label: "LinkedIn",  href: "https://linkedin.com" },
  { label: "Spotify",   href: "#" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm font-figtree text-subtle">
          © {new Date().getFullYear()} Paul Ojoko
        </p>
        <div className="flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-figtree text-subtle hover:text-text transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
