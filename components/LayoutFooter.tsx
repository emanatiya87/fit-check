import Title from "./title";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function LayoutFooter() {
  return (
    <div
      className="py-10 bg-cover bg-center text-center  "
      style={{ backgroundImage: 'url("/footerbg.png")' }}
    >
      <div>
        <Title titleText="تواصلي معنا مباشرة" color="secondary" />
      </div>
      <a
        href="https://wa.me/201113364852?text=hello%20Fit%20Check%20i%20want%20to%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mt-4 text-light bg-[#546E3C] border border-[#546E3C] 
             rounded-4xl font-semi-bold text-md px-5 py-2.5 flex items-center gap-1 m-auto"
      >
        <FaWhatsapp />
        اطلبي على الواتساب
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/groups/750706561027930/?ref=share&mibextid=NSMWBT"
        className="w-fit mt-4 text-light bg-[#0064E0] border border-[#546E3C] 
             rounded-4xl font-semi-bold text-md px-5 py-2.5 flex items-center gap-1 m-auto"
      >
        <FaFacebook /> جروب
      </a>
    </div>
  );
}
