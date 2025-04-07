import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FavQuest() {
  return (
    <div className="flex flex-col gap-10 mt-10 px-4 sm:px-6 lg:px-8 justify-center items-center text-center max-w-4xl mx-auto ">
      {/* Başlık */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200">
        Sık Sorulan Sorular
      </h1>

      {/* Accordion */}
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Yurt odaları kaç kişilik?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Yurt odalarımız 1, 2 ve 4 kişilik seçenekler sunmaktadır. Her oda
            modern mobilyalarla döşenmiş ve öğrencilerin konforu düşünülerek
            tasarlanmıştır.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Yemek hizmeti sunuluyor mu?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Evet, yurdumuzda sabah kahvaltısı ve akşam yemeği hizmeti
            sunulmaktadır. Yemeklerimiz günlük olarak hazırlanır ve hijyen
            standartlarına uygun şekilde servis edilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Güvenlik nasıl sağlanıyor?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Yurdumuzda 7/24 güvenlik hizmeti bulunmaktadır. Ayrıca, giriş ve
            çıkışlar kartlı sistemle kontrol edilmektedir. Güvenlik kameraları
            ile ortak alanlar sürekli izlenmektedir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
            İnternet hizmeti var mı?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Evet, yurdumuzda yüksek hızlı Wi-Fi hizmeti sunulmaktadır.
            Öğrenciler odalarında ve ortak alanlarda internet erişiminden
            faydalanabilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Spor ve sosyal aktiviteler var mı?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Yurdumuzda spor salonu, etkinlik odası ve çeşitli sosyal aktiviteler
            düzenlenmektedir. Öğrencilerimiz hem fiziksel hem de sosyal
            ihtiyaçlarını karşılayabilir.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FavQuest;
