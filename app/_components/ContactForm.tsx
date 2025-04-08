"use client"; // Dosyanın client component olduğunu belirtir

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";
import { toast } from "sonner";

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmail(values);
    toast.success("Mesajınız başarıyla gönderilmiştir");
  }

  return (
    <div
      id="contact"
      className="flex flex-col gap-10 p-8 lg:p-16 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 mt-10 text-center lg:flex-row max-w-6xl mx-auto rounded-lg shadow-xl lg:mt-20 md:mb-5 lg:mb-15"
    >
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
          className="rounded-full shadow-lg lg:absolute lg:top-36 lg:right-[-10px]"
        />
      </div>

      {/* Sağ Bölüm: Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full lg:w-1/2"
        >
          {/* Ad Soyad */}
          <div className="flex flex-col gap-2 text-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Ad ve Soyad
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Adınızı ve Soyadınızı giriniz..."
                      {...field}
                      className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email giriniz..."
                      {...field}
                      className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Telefon Numarası */}
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Telefon No.
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefon numarınızı giriniz giriniz..."
                      {...field}
                      className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Mesaj Kısmı */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesaj
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Mesajınız..."
                    {...field}
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gönder Butonu */}
          <Button
            type="submit"
            className="w-full px-2 py-2 bg-green-500 hover:bg-green-600"
          >
            Gönder
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
