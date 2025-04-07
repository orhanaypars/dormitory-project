import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GiCctvCamera } from "react-icons/gi";
import { FaWifi, FaFireAlt } from "react-icons/fa";
import { FireExtinguisher } from "lucide-react";

function Features() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-10 text-center space-y-8 px-4 md:px-10 lg:px-20 lg:mt-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200">
        Özelliklerimiz
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
        Yurdumuzda sunduğumuz hizmetler ve özellikler ile öğrencilerimize
        konforlu bir yaşam alanı sağlıyoruz.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <Card className="rounded-lg bg-orange-100 dark:bg-gray-800 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                100 Mbps İnternet
              </CardTitle>
              <FaWifi size={70} className="text-sky-600" />
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                Yüksek hızlı internet ile kesintisiz bağlantı.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="rounded-lg bg-orange-100 dark:bg-gray-800 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Sıcak Su ve Oda İmkanı
              </CardTitle>
              <FaFireAlt size={70} className="text-red-500" />
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                7/24 sıcak su ve konforlu odalar.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="rounded-lg bg-orange-100 dark:bg-gray-800 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                7/24 Güvenlik
              </CardTitle>
              <GiCctvCamera size={70} className="text-yellow-600" />
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                Güvenliğiniz için 7/24 kamera ve güvenlik hizmeti.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="rounded-lg bg-orange-100 dark:bg-gray-800 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Eksiksiz Afet Yönetimi
              </CardTitle>
              <FireExtinguisher size={70} className="text-red-700" />
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                Afet durumlarında eksiksiz yönetim ve güvenlik.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>Americano cano cano kalp Hanzel</div>
    </div>
  );
}

export default Features;
