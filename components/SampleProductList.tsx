"use client";

import { useRef } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { CardComponent } from "./Card";
import { TbChevronRight, TbChevronLeft, TbArrowLeft } from "react-icons/tb";

export default function SampleProductList({
  products,
  href,
}: {
  products: any[];
  href: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    // scroll by one card width (including gap)
    const card = track.querySelector(
      "a, div[data-viewall]",
    ) as HTMLElement | null;
    const cardW = card ? card.offsetWidth + 12 : 220;
    track.scrollBy({
      left: dir === "next" ? -cardW : cardW,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:w-[85vw] w-[95%] m-auto" dir="rtl" data-aos="fade-up">
      <div className="relative">
        {/* Prev arrow (right side in RTL) */}
        <button
          onClick={() => scroll("prev")}
          aria-label="السابق"
          className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10
                     w-9 h-9 flex items-center justify-center
                     rounded-full bg-white shadow-md border border-gray-100
                     hover:bg-primary hover:text-white hover:border-primary
                     transition-all duration-200 text-gray-500"
        >
          <TbChevronRight size={18} />
        </button>

        {/* Next arrow (left side in RTL) */}
        <button
          onClick={() => scroll("next")}
          aria-label="التالي"
          className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 z-10
                     w-9 h-9 flex items-center justify-center
                     rounded-full bg-white shadow-md border border-gray-100
                     hover:bg-primary hover:text-white hover:border-primary
                     transition-all duration-200 text-gray-500"
        >
          <TbChevronLeft size={18} />
        </button>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="flex flex-row-reverse gap-3 overflow-x-auto px-6
                     scroll-smooth snap-x snap-mandatory
                     scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product: any) => (
            <Link
              href={`/product/${product._id}`}
              key={product._id}
              className="snap-start shrink-0 w-[47%] sm:w-[23%] md:w-[18%]"
            >
              <CardComponent
                _id={product._id}
                title={product.title}
                price={product.price}
                lastPrice={product.lastPeice || ""}
                imgSrc={
                  product.mainImage
                    ? urlFor(product.mainImage).url()
                    : "/placeholder.jpg"
                }
                isInStock={product.isInStock}
              />
            </Link>
          ))}

          {/* View-All card */}
          <Link
            href={`/${href}`}
            data-viewall="true"
            className="snap-start shrink-0 w-[47%] sm:w-[23%] md:w-[18%]"
          >
            <div
              className="group flex flex-col items-center justify-center h-full min-h-[220px]
                         rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5
                         hover:bg-primary/10 transition-colors duration-300 gap-3 p-4 text-center"
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full
                           bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <TbArrowLeft className="text-primary text-xl group-hover:translate-x-[-4px] transition-transform duration-300" />
              </span>
              <p className="text-primary font-bold text-sm leading-snug">
                عرض كل المنتجات
              </p>
              <p className="text-xs text-gray-400">
                اضغط لاستعراض التشكيلة كاملة
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
