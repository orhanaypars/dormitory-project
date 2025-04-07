import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GiCctvCamera } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaFireExtinguisher } from "react-icons/fa";
import { FireExtinguisher } from "lucide-react";

function Features() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-15 text-center space-y-8 md:space-y-8 md:px-50 lg:px-70 lg:mt-20 ">
      {/* Kartlar için grid düzeni */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <Card className="rounded-lg bg-orange-100 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle>100 mbps internet</CardTitle>
              <FaWifi size={70} className="text-sky-600" />
              <CardDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, laudantium?
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="rounded-lg bg-orange-100 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle>Sıcak su ve oda imkanı</CardTitle>
              <FaFireAlt size={70} className="text-red-500" />
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                velit?
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="rounded-lg bg-orange-100 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle>7/24 Güvenlik</CardTitle>
              <GiCctvCamera size={70} className="text-yellow-600" />
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, suscipit?
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="rounded-lg bg-orange-100 p-6 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center justify-center gap-3">
              <CardTitle>Eksiksiz afet yönetimi</CardTitle>
              <FireExtinguisher size={70} className="text-red-800" />
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                quasi?
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Features;
