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
    <div className=" bg-fuchsia-100 dark:bg-charcoalGray p-20 rounded-xl mt-10 lg:mt-30 max-w-6xl mx-auto shadow-lg">
      <div>
        <h1 className="text-center text-4xl">Yorumlar</h1>
      </div>
      <div className="flex flex-col gap-6 text-center justify-center items-center mt-5 bg-softRose max-w-md mx-auto lg:flex-row lg:max-w-6xl lg:gap-10 lg:mt-10">
        {/* Card'ların aynı boyutta olması için ortak sınıflar eklendi */}
        <Card className="w-full max-w-sm h-[350px] bg-warmCream dark:bg-gray-700 shadow-2xl lg:max-w-lg bg-orange-100">
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
            <CardTitle>Simay</CardTitle>
            {/* CardDescription içeriğini düz metin olarak düzenledim */}
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, quidem.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm h-[350px] bg-warmCream dark:bg-gray-700 shadow-2xl lg:max-w-lg bg-orange-100">
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
            <CardTitle>Ayşe</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, quidem.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm h-[350px] bg-warmCream dark:bg-gray-700 shadow-2xl lg:max-w-lg bg-orange-100">
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
            <CardTitle>Ceren</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, quidem.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default CommentsSection;
