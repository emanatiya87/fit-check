import Link from "next/link";
import Image from "next/image";
import Title from "./title";
import { categories } from "@/constants/categories";
export default function Categories() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 md:w-[85vw] w-[95%] m-auto ">
      <Title titleText="تسوق حسب المجموعه" color="primary" />
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <div key={category.id} className="w-1/3 md:w-1/4 lg:w-1/6  px-1 my-1">
            <Link href={category.href}>
              <div className="relative w-full h-30  rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="text-lg font-bold text-shadow-xs">
                    {category.name}
                  </h3>
                  <p className="text-sm">{category.items}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
