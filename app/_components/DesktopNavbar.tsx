"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/favicon.png";

const navLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Fiyatlar", href: "/fiyatlar" },
  { label: "Konum", href: "/konum" },
];

function DesktopNavbar() {
  return (
    <div className="hidden lg:flex items-center justify-between  py-6 shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="text-2xl font-bold text-white">Özel Kız Yurdu</div>
        </div>

        {/* Sağ taraf: Linkler ve toggle */}
        <div className="flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-white hover:text-yellow-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
