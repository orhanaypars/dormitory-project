import AboutPage from "./_components/AboutPage";
import CommentsSection from "./_components/CommentsSection";
import ContactForm from "./_components/ContactForm";
import FavQuest from "./_components/FavQuest";
import Features from "./_components/Features";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutPage />
      <CommentsSection />
      <FavQuest />
      <ContactForm />
    </>
  );
}
