import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col gap-10 p-6 md:p-10 lg:p-20 bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 mt-10 text-center md:flex-row items-center max-w-6xl mx-auto rounded-lg shadow-lg lg:mt-30">
      <div className="w-full md:w-1/2 lg:w-3/4 mx-auto">
        <Image
          src="/about-image.jpg"
          alt="About Us"
          width={1200}
          height={1200}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2 max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-gray-800 dark:text-gray-200">
          Hakkımızda
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-5 text-gray-700 dark:text-gray-400">
          Özel Kız Yurdu olarak, öğrencilerimize güvenli, konforlu ve modern bir
          yaşam alanı sunmayı hedefliyoruz. Yurdumuz, merkezi konumu sayesinde
          üniversitelere ve toplu taşıma araçlarına kolay erişim imkanı sağlar.
          7/24 güvenlik hizmetlerimiz ve yüksek hızlı internet altyapımız ile
          öğrencilerimizin ihtiyaçlarını en iyi şekilde karşılıyoruz.
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-5 text-gray-700 dark:text-gray-400">
          Odalarımız, öğrencilerimizin rahat bir şekilde ders çalışabileceği ve
          dinlenebileceği şekilde tasarlanmıştır. Ayrıca, 7/24 sıcak su, geniş
          sosyal alanlar ve düzenli temizlik hizmetleri ile öğrencilerimize
          evlerindeki konforu sunuyoruz. Yurdumuzda düzenlenen sosyal
          etkinlikler ve aktiviteler sayesinde öğrencilerimiz hem eğleniyor hem
          de yeni arkadaşlıklar kurma fırsatı buluyor.
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-5 text-gray-700 dark:text-gray-400">
          Özel Kız Yurdu, sadece bir konaklama alanı değil, aynı zamanda
          öğrencilerimizin akademik ve sosyal hayatlarını destekleyen bir yaşam
          alanıdır. Siz de bu ayrıcalıklı hizmetlerden faydalanmak için bizimle
          iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
}

export default page;
