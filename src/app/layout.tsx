import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { MusicPlayerProvider } from "@/context/MusicPlayerContext";
import { NowPlaying } from "@/components/ui/NowPlaying";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul Ojoko — Guitarist & Data Analyst",
  description:
    "Paul Ojoko is a guitarist and data analyst based in Lagos. He finds patterns in both music and data — and tells stories with both.",
  keywords: ["guitarist", "data analyst", "portfolio", "Lagos", "music", "data visualization"],
  authors: [{ name: "Paul Ojoko" }],
  openGraph: {
    title: "Paul Ojoko — Guitarist & Data Analyst",
    description: "Music and data, told as one story.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <MusicPlayerProvider>
          {children}
          <NowPlaying />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
