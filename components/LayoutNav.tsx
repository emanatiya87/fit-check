"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function SidebarNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/favourit", label: "Favourite" },
    { href: "/dresses", label: "Dresses" },
    { href: "/tops", label: "Tops" },
    { href: "/pants", label: "Pants" },
    { href: "/suits", label: "Suits" },
    { href: "/replace", label: "Replacement" },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="flex justify-between gap-6 items-center py-1 px-4 ">
        <div className="flex gap-3">
          <Link href="/">
            <span className="text-secondary text-2xl flex items-center gap-1 ">
              {pathname === "/" ? <IoHome /> : <IoHomeOutline />}
            </span>
          </Link>
          <Link href="/favourit">
            <span
              className={`text-secondary text-2xl flex items-center gap-1 `}
            >
              {pathname === "/favourit" ? <FaHeart /> : <FaRegHeart />}
            </span>
          </Link>
        </div>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl"
            aria-label="Toggle Sidebar"
          >
            <FaGripLines />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-56 bg-background shadow-md
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          z-40 flex flex-col py-6 px-2
        `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" fixed top-4 right-4 text-xl"
          aria-label="Toggle Sidebar"
        >
          <MdClose />
        </button>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-4 py-2 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-secondary
                hover:text-secondary
                ${pathname === link.href ? "text-secondary font-semibold" : "text-gray-700"}
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
