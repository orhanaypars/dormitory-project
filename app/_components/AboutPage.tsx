import { Button } from "@/components/ui/button";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex flex-col gap-10 p-10 lg:p-20 bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 mt-10 text-center lg:flex-row max-w-6xl mx-auto rounded-lg shadow-lg lg:mt-30">
      <div>
        <Image
          src="/about-image.jpg"
          alt="About Us"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="max-w-xl">
        <h1 className="text-3xl mb-5">Hakkımızda</h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellat tenetur totam cumque in debitis sit voluptatibus.
          Consequuntur amet autem labore nihil vero, voluptate voluptas delectus
          magni aliquid repudiandae quaerat laborum iste ducimus, esse itaque.
        </p>
        <Button>Daha Fazla Bilgi</Button>
      </div>
    </div>
  );
}

export default AboutPage;
