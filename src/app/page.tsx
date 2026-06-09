import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { MusicSection } from "@/components/sections/MusicSection";
import { DataSection } from "@/components/sections/DataSection";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <MusicSection />
        <DataSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
