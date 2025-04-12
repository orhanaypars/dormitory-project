"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { GiCctvCamera } from "react-icons/gi";
import { FaBed, FaCouch, FaMountain, FaShower } from "react-icons/fa";
import { useEffect, useState } from "react";

const items = [
  {
    image: "/image-1.jpeg",
    title: "7/24 Güvenlik",
    icon: <GiCctvCamera className="text-4xl text-blue-500" />,
  },
  {
    image: "/image-2.jpeg",
    title: "Konforlu Odalar",
    icon: <FaBed className="text-4xl text-yellow-500" />,
  },
  {
    image: "/view-image.jpg",
    title: "Eşsiz Manzara",
    icon: <FaMountain className="text-4xl text-green-500" />,
  },
  {
    image: "/hol-image.jpg",
    title: "Geniş ve Ferah Hol",
    icon: <FaCouch className="text-4xl text-orange-500" />,
  },
  {
    image: "/banyo-image.jpg",
    title: "Modern Banyolar",
    icon: <FaShower className="text-4xl text-blue-400" />,
  },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-center items-center w-full mt-10 lg:mt-5 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-gray-800 dark:via-gray-900 py-10 lg:py-2 dark:to-gray-800 ">
      <Carousel className="w-full max-w-md lg:max-w-6xl lg:min-h-[600px]">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="shadow-lg bg-fuchsia-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                <CardTitle className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <h1 className="text-lg font-semibold text-white">
                      {item.title}
                    </h1>
                    {item.icon}
                  </div>
                </CardTitle>
                <CardContent className="flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800">
                  {mounted && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={800}
                      className="rounded-lg object-cover object-center"
                    />
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
        <CarouselNext className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
      </Carousel>
    </div>
  );
}
