import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactAbout } from "@/components/contact-about";

export const metadata = {
  title: "Contact Us | krinAI Agency",
  description:
    "Get in touch with krinAI Agency to discuss your AI initiatives. Schedule a consultation with our team of experts.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950">
        <ContactHero />
        <ContactForm />
        <ContactAbout />
      </main>
      <Footer />
    </>
  );
}
