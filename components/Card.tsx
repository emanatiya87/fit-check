import { FaFire } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export function CardComponent() {
  return (
    <div className="w-1/2  sm:w-1/4 md:w-1/5 px-2 mb-3">
      <div className="block shadow-2xl rounded-2xl ">
        <div className="overflow-hidden rounded-t-2xl relative">
          <button className="absolute top-2 end-2 z-10 text-xl text-primary bg-gray-200 hover:bg-primary hover:text-gray-200 focus:bg-primary focus:text-gray-200 rounded-lg cursor-pointer ">
            <CiHeart />
          </button>
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="/cardkin.jpg"
            alt="cardijan"
          />
        </div>
        <div className="py-2 px-1 text-center gap-2 flex flex-col justify-center items-center">
          <div className="inline-flex items-center border border-primary text-xs text-primary font-medium px-1.5 py-0.5 rounded-sm shadow-xl w-fit">
            <FaFire className="text-primary  " />
            Trending
          </div>
          <h5 className="border-b-gray-300  border pb-2 border-t-0 border-x-0 text-sm font-semibold tracking-tight text-gray-900 dark:text-white ">
            كارديجان رمضان | Cardigan
          </h5>
          <div className="flex items-center justify-center">
            <span className="me-2 text-md text-gray-500 line-through dark:text-white">
              $599
            </span>
            <span className="text-md font-semibold text-gray-900 dark:text-white">
              $599
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
