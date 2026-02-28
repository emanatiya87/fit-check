import Title from "./title";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function LayoutFooter() {
  return (
    <div
      className="py-10 bg-cover bg-center text-center  "
      style={{ backgroundImage: 'url("/footerbg.png")' }}
    >
      <div>
        <Title titleText="تواصلي معنا مباشرة" color="secondary" />
      </div>
      <Link
        href="https://wa.me/201113364852?text=hello%20Fit%20Check%20i%20want%20to%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mt-4 bg-gray-100 text-[#25D366] border border-gray-200
             hover:bg-[#25D366] hover:text-white hover:border-[#25D366]
             rounded-full font-semibold text-md px-5 py-2.5 
             flex items-center gap-2 m-auto transition-all duration-300"
      >
        <FaWhatsapp className="text-xl" />
        اطلبي على الواتساب
      </Link>
    </div>
  );
}
