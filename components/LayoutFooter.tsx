import Title from "./title";
import { FaWhatsapp } from "react-icons/fa";

export default function LayoutFooter() {
  return (
    <div
      className="py-10 bg-cover bg-center text-center  "
      style={{ backgroundImage: 'url("/footerbg.png")' }}
    >
      <div>
        <Title titleText="اطلبي بسهولة على واتساب" color="secondary" />
      </div>
      <p className="mt-4 text-secondary font-semibold">تواصلي معنا مباشرة</p>

      <button
        type="button"
        className="mt-4 text-light bg-[#546E3C] border border-[#546E3C] 
                  rounded-4xl font-semi-bold text-md px-5 py-2.5 flex items-center gap-1 m-auto"
      >
        <FaWhatsapp />
        اطلبي على الواتساب
      </button>
    </div>
  );
}
