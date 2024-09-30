import Image from "next/image";
import { Utensils, Coffee, IceCream } from "lucide-react";

export default function CuisineSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:px-28 px-10 mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Our <span className="text-purple-600">Cuisine</span>
        </h2>
        <p className="text-gray-600 mb-8">
          At [Hotel Name], we believe that every guest deserves more than just a
          stay—they deserve an experience. Nestled in the heart of [City Name],
          we combine the charm of local cuisine with world-class culinary
          expertise.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { icon: Utensils, title: "Fine Dining", color: "bg-amber-700" },
              { icon: Coffee, title: "Café & Bakery", color: "bg-yellow-500" },
              { icon: IceCream, title: "Desserts", color: "bg-orange-500" },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.color} text-white p-6 rounded-lg`}
              >
                <div className="flex items-center mb-4">
                  <item.icon className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p>
                  At [Hotel Name], we believe that every guest deserves more
                  than just a stay—they deserve an experience. Nestled in the
                  heart of [City Name], we combine the charm of local cuisine
                  with innovative culinary techniques.
                </p>
              </div>
            ))}
            <button className="text-purple-600 font-semibold hover:underline">
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Delicious main course"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg col-span-2"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Appetizing side dish"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Mouth-watering dessert"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
