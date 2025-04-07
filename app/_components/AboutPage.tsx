import { Button } from "@/components/ui/button";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex flex-col gap-10 p-6 md:p-10 lg:p-20 bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 mt-10 text-center md:flex-row max-w-6xl mx-auto rounded-lg shadow-lg lg:mt-30">
      <div className="w-full md:w-1/2">
        <Image
          src="/about-image.jpg"
          alt="About Us"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2 max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-gray-800 dark:text-gray-200">
          Hakkımızda
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-5 text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellat tenetur totam cumque in debitis sit voluptatibus.
          Consequuntur amet autem labore nihil vero, voluptate voluptas delectus
          magni aliquid repudiandae quaerat laborum iste ducimus, esse itaque.
        </p>
        <Button className="px-6 py-3 text-sm md:text-base lg:text-lg bg-orange-500 hover:bg-orange-600 text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200">
          Daha Fazla Bilgi
        </Button>
        <div>Aybars lavuğu</div>
      </div>
    </div>
  );
}

export default AboutPage;
