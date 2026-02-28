"use client";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useFav } from "@/context/FavContext";
export function CardComponent({
  _id,
  imgSrc,
  title,
  lastPrice = "",
  price,
}: {
  _id: string;
  imgSrc: string;
  title: string;
  lastPrice: string;
  price: string;
}) {
  const { addToFav, removeFromFav, isFavorite } = useFav();
  const liked = isFavorite(_id);

  const toggleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    if (liked) {
      removeFromFav(_id);
    } else {
      addToFav({ _id, title, price, imgSrc });
    }
  };
  return (
    <div className="block shadow-2xl  dark:border dark:border-background">
      <div className="overflow-hidden  relative text-center">
        <button
          onClick={toggleFav}
          className={`absolute top-2 end-2 z-10 text-xl rounded-lg cursor-pointer transition-colors duration-300 p-1
    ${
      liked
        ? "bg-red-500 text-white"
        : "bg-gray-200 text-primary hover:bg-primary hover:text-gray-200"
    }`}
        >
          {liked ? <FaHeart /> : <CiHeart />}
        </button>
        <img
          className="transition-transform duration-300 hover:scale-110 max-h-50 m-auto"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="py-2 px-1 text-center gap-2 flex flex-col justify-center items-center">
        <div className="inline-flex items-center border border-primary text-xs text-primary font-medium px-1.5 py-0.5 rounded-sm shadow-xl w-fit">
          <FaFire className="text-primary  " />
          Trending
        </div>
        <h5 className="border-b-gray-300  w-full border pb-2 border-t-0 border-x-0 text-md font-semibold tracking-tight text-gray-900 dark:text-white ">
          {title}
        </h5>
        <div className="flex items-baseline gap-3" dir="rtl">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-secondary dark:text-primary">
              EGP
            </span>
            <span className="text-2xl font-bold text-secondary dark:text-primary">
              {price}
            </span>
          </div>
          {lastPrice && (
            <span className="text-gray-400 line-through text-sm decoration-red-400/50">
              {lastPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
