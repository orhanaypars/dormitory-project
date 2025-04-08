import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Logo from "@/public/favicon.png";
import Link from "next/link";

function MobileNavbar() {
  const navLinks = [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
    { label: "İletişim", href: "/contact" },
    { label: "Konum", href: "/location" },
  ];

  return (
    <div className="flex flex-row justify-between items-center p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 fixed top-0 w-full z-50 shadow-lg">
      <div className="text-lg font-semibold text-white">Özel Kız Yurdu</div>
      <div className="flex flex-row gap-4 items-center">
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu
              size={30}
              className="text-white hover:text-gray-300 transition-colors"
            />
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <SheetHeader>
              <div className="flex justify-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="rounded-full mb-5"
                />
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </div>
  );
}

export default MobileNavbar;
