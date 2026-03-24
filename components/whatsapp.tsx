import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/201097541307"
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
