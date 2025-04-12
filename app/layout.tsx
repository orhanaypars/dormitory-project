import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Özel Kız Öğrenci Yurtları | Güvenli ve Konforlu Yaşam Alanı",
  description:
    "Özel kız öğrenci yurdu olarak güvenli, konforlu ve modern bir yaşam alanı sunuyoruz. Merkezi konum, 7/24 güvenlik, yüksek hızlı internet ve sosyal alanlar ile öğrencilerimize en iyi hizmeti sağlıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* SEO Meta Etiketleri */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="kız öğrenci yurdu, özel kız yurdu, güvenli yurt, konforlu yurt, öğrenci yurdu, merkezi yurt, yüksek hızlı internet, sosyal alanlar"
        />
        <meta
          name="author"
          content="Özel Kız Öğrenci Yurtları - Aypars Çelik"
        />
        <meta
          property="og:title"
          content="Özel Kız Öğrenci Yurtları | Güvenli ve Konforlu Yaşam Alanı"
        />
        <meta
          property="og:description"
          content="Özel kız öğrenci yurdu olarak güvenli, konforlu ve modern bir yaşam alanı sunuyoruz. Merkezi konum, 7/24 güvenlik, yüksek hızlı internet ve sosyal alanlar ile öğrencilerimize en iyi hizmeti sağlıyoruz."
        />
        <meta property="og:image" content="/about-image.jpg" />
        <meta property="og:url" content="https://www.ozelkizyurdu.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
