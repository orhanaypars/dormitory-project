import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function CommentsSection() {
  return (
    <div className="bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-10 lg:p-20 rounded-xl mt-10 lg:mt-30 max-w-6xl mx-auto shadow-lg">
      <div>
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          Yorumlar
        </h1>
      </div>
      <div className="flex flex-col gap-6 text-center justify-center items-center mt-5 max-w-md mx-auto lg:flex-row lg:max-w-6xl lg:gap-10 lg:mt-10">
        <Card className="w-full max-w-sm h-[350px] bg-orange-100 dark:bg-gray-700 shadow-2xl lg:max-w-lg">
          <CardHeader className="h-full flex flex-col justify-center items-center">
            <CardContent className="flex justify-center items-center">
              <Image
                src="/comments-image-1.png"
                alt="Comment 1"
                width={150}
                height={150}
                className="rounded-full mb-5"
              />
            </CardContent>
            <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Simay
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              <p>
                &quot;Yurdun konumu gerçekten harika! Üniversiteye çok yakın ve
                toplu taşıma araçlarına kolayca ulaşabiliyorum. Ayrıca, odalar
                çok konforlu ve temiz.&quot;
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm h-[350px] bg-orange-100 dark:bg-gray-700 shadow-2xl lg:max-w-lg">
          <CardHeader className="h-full flex flex-col justify-center items-center">
            <CardContent className="flex justify-center items-center">
              <Image
                src="/comments-image-2.png"
                alt="Comment 2"
                width={150}
                height={150}
                className="rounded-full mb-5"
              />
            </CardContent>
            <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Ayşe
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              <p>
                &quot;7/24 sıcak su ve güvenlik hizmetleri sayesinde kendimi çok
                güvende hissediyorum. Ayrıca, internet hızı gerçekten çok
                iyi!&quot;
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm h-[350px] bg-orange-100 dark:bg-gray-700 shadow-2xl lg:max-w-lg">
          <CardHeader className="h-full flex flex-col justify-center items-center">
            <CardContent className="flex justify-center items-center">
              <Image
                src="/comments-image-3.png"
                alt="Comment 3"
                width={150}
                height={150}
                className="rounded-full mb-5"
              />
            </CardContent>
            <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Ceren
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              <p>
                &quot;Yurtta düzenlenen sosyal etkinlikler sayesinde birçok yeni
                arkadaş edindim. Burada kendimi evimde gibi hissediyorum!&quot;
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default CommentsSection;
