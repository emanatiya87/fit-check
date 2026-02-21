import { FaFire } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
export function CardComponent({
  imgSrc,
  title,
  lastPrice = "",
  price,
}: {
  imgSrc: string;
  title: string;
  lastPrice: string;
  price: string;
}) {
  return (
    <div className="w-1/2 sm:w-1/4 md:w-1/5 px-2 mb-3">
      <div className="block shadow-2xl rounded-2xl ">
        <div className="overflow-hidden rounded-t-2xl relative text-center">
          <button className="absolute top-2 end-2 z-10 text-xl text-primary bg-gray-200 hover:bg-primary hover:text-gray-200 focus:bg-primary focus:text-gray-200 rounded-lg cursor-pointer ">
            <CiHeart />
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
          <h5 className="border-b-gray-300  w-full border pb-2 border-t-0 border-x-0 text-sm font-semibold tracking-tight text-gray-900 dark:text-white ">
            {title}
          </h5>
          <div className="flex items-center justify-center">
            <span className="me-2 text-md text-gray-500 line-through dark:text-white">
              {lastPrice}
            </span>
            <span className="text-md font-semibold text-gray-900 dark:text-white">
              {price} LE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
