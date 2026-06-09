import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact — Paul Ojoko",
  description: "Book Paul Ojoko for a performance or start a data project. Based in Lagos, available worldwide.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
