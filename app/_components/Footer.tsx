"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sol Bölüm: Logo ve Açıklama */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">Özel Kız Yurdu</h1>
            <p className="text-sm mt-2">
              Konforlu ve güvenli bir yaşam alanı sunuyoruz.
            </p>
          </div>

          {/* Orta Bölüm: Linkler */}
          <div className="flex flex-col md:flex-row gap-4 text-center">
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="hover:text-yellow-300 transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="hover:text-yellow-300 transition-colors"
            >
              İletişim
            </Link>
          </div>

          {/* Sağ Bölüm: Sosyal Medya */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>

        {/* Alt Bölüm: Telif Hakkı */}
        <div className="mt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Özel Kız Yurdu. Tüm hakları saklıdır. by
          Aypars Çelik
        </div>
      </div>
    </footer>
  );
}

export default Footer;
