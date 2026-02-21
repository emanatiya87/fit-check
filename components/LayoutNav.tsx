"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHeart } from "react-icons/ci";

export default function LayoutNav() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center gap-6 items-center py-1">
      <Link href="/">
        <span
          className={`text-secondary sm:text-lg ${pathname === "/" ? "font-semibold" : ""}`}
        >
          Home
        </span>
      </Link>

      <Link href="/replace">
        <span
          className={`text-secondary sm:text-lg ${pathname === "/replace" ? "font-semibold" : ""}`}
        >
          replace!
        </span>
      </Link>

      <Link href="/favourit">
        <span
          className={`text-secondary sm:text-lg flex items-center gap-1 ${pathname === "/favourit" ? "font-semibold" : ""}`}
        >
          favourit <CiHeart />
        </span>
      </Link>
    </div>
  );
}
