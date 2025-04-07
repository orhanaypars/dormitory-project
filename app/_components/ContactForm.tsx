"use client"; // Dosyanın client component olduğunu belirtir

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons"; // Radix UI'den tik ikonu

function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-10 p-8 lg:p-16 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 mt-10 text-center lg:flex-row max-w-6xl mx-auto rounded-lg shadow-xl lg:mt-20">
      {/* Sol Bölüm: Başlık ve Görsel */}
      <div className="relative flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200">
          Bizimle İletişime Geçin
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sorularınız mı var? Formu doldurun, size en kısa sürede geri dönüş
          yapalım.
        </p>
        <Image
          src="/contact-image.png"
          alt="contact-image"
          width={150}
          height={150}
          className="rounded-full shadow-lg lg:absolute lg:top-16 lg:right-[-40px]"
        />
      </div>

      {/* Sağ Bölüm: Form */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Ad Soyad */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Ad Soyad
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Adınızı ve soyadınızı girin"
            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Email adresinizi girin"
            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Telefon Numarası */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="phone"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Telefon Numarası
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Telefon numaranızı girin"
            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Şartlar ve Koşullar */}
        <div className="flex items-center gap-3">
          <Checkbox
            id="terms"
            className="h-5 w-5 rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:ring-2 hover:border-green-400 focus:ring-2 focus:border-green-400 flex items-center justify-center"
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked === true)}
          >
            {/* Tik İşareti */}
            {isChecked && <CheckIcon className="text-green-800 w-16 h-16" />}
          </Checkbox>
          <Label
            htmlFor="terms"
            className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
          >
            Şartları ve koşulları kabul ediyorum
          </Label>
        </div>

        {/* Gönder Butonu */}
        <Button
          className={`w-full py-3 rounded-lg ${
            isChecked
              ? "bg-green-500 hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500 text-white"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isChecked}
        >
          Gönder
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
