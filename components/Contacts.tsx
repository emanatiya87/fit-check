import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export function Contacts() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            width={100}
            height={10}
            alt="Picture of the author"
          />
          <p className="text-gray-500 text-sm leading-relaxed">
            اختيارك الأول للأناقة الرمضانية والملابس العصرية بجودة ممتازة وسعر
            يناسبك.
          </p>
          <div className="flex gap-3 mt-2 flex-wrap">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-[#ee2a7b] transition-all duration-300 
             hover:bg-linear-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] 
             hover:text-white"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/groups/750706561027930/?ref=share&mibextid=NSMWBT"
              className="p-2 bg-gray-100 rounded-full text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            >
              <FaFacebookF className="text-xl" />
            </Link>
            <Link
              target="_blank"
              href="https://wa.me/201113364852?text=hello%20Fit%20Check%20i%20want%20to%20order"
              className="p-2 bg-gray-100 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </Link>
          </div>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="font-bold text-secondary mb-6 text-lg">روابط تهمك</h3>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm">
            <li>
              <Link href="/" className="hover:text-secondary transition">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/favourit"
                className="hover:text-secondary transition"
              >
                المفضلة
              </Link>
            </li>
            <li>
              <Link href="/replace" className="hover:text-secondary transition">
                سياسة الاستبدال والاسترجاع
              </Link>
            </li>
          </ul>
        </div>
        {/* الدفع */}
        <div>
          <h3 className="font-bold text-secondary mb-6 text-lg">
            طرق الدفع المتاحة
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {/* InstaPay */}
            <div className="group relative bg-white p-2 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <Image
                src="/instapay.png"
                width={60}
                height={30}
                className="object-contain  group-hover:grayscale-0 transition-all"
                alt="InstaPay"
              />
              {/* Optional Tooltip for clarity */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                انستا باي
              </span>
            </div>

            {/* Cash on Delivery */}
            <div className="group relative bg-white p-2 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center min-w-20">
              <Image
                src="/cash.jfif"
                width={60}
                height={30}
                className="object-contain  group-hover:grayscale-0 transition-all"
                alt="الدفع عند الاستلام"
              />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                الدفع عند الاستلام
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-50 text-center">
        <p className="text-xs text-gray-400">
          © 2026 جميع الحقوق محفوظة. صنع بكل حب لجمالك.
        </p>
      </div>
    </footer>
  );
}
