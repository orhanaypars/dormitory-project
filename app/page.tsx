import AboutPage from "./_components/AboutPage";
import CommentsSection from "./_components/CommentsSection";
import ContactForm from "./_components/ContactForm";
import FavQuest from "./_components/FavQuest";
import Features from "./_components/Features";
import LocationSection from "./_components/LocationSection";
import { Hero } from "./_components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Güvenli ve Konforlu Kız Öğrenci Yurdu | Özel Yurt</title>
        <meta
          name="description"
          content="Modern yapısı, güvenli ortamı ve uygun fiyatlarıyla kız öğrenci yurdumuzu keşfedin. Tüm detaylar için hemen inceleyin."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Güvenli Kız Öğrenci Yurdu" />
        <meta
          property="og:description"
          content="Öğrenciler için modern, konforlu ve güvenli bir yaşam alanı."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seninsiten.com/" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main>
        <Hero />
        <Features />
        <AboutPage />
        <CommentsSection />
        <FavQuest />
        <ContactForm />
        <LocationSection />
      </main>
    </>
  );
}
