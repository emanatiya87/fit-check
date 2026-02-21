"use client";
import { useFav } from "@/context/FavContext";
import Title from "@/components/title";
import Link from "next/link";
import { CardComponent } from "@/components/Card";
interface Product {
  _id: string;
  title: string;
  price: string;
  lastPrice?: string;
  imgSrc: string;
}
export default function FavouritePage() {
  const { favorites } = useFav();

  return (
    <>
      <Title titleText="Features" color="primary" />
      <div className="w-[85vw] m-auto flex flex-wrap items-start justify-center">
        {favorites.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-gray-500 text-xl p-2 mx-3" dir="rtl">
              <Link href={"/"}> لسه مفيش قطع في المفضلة.. الحقي التريند!</Link>
            </p>
          </div>
        ) : (
          <>
            {favorites.map((product: Product) => (
              <Link
                href={`/product/${product._id}`}
                key={product._id}
                className="w-1/2 sm:w-1/3 md:w-1/4 px-2 mb-3"
              >
                <CardComponent
                  key={product._id}
                  _id={product._id}
                  title={product.title}
                  price={product.price}
                  lastPrice={product.lastPrice ? product.lastPrice : ""}
                  imgSrc={product.imgSrc}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
}
