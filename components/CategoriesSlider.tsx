"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "./title";
import { useRef } from "react";
const categories = [
  {
    id: 1,
    name: "Dresses",
    href: "/dresses",
    image: "/dress.jpg",
    items: "15+ items",
  },
  { id: 2, name: "Tops", href: "/tops", image: "/top.jpg", items: "40+ items" },
  {
    id: 3,
    name: "Pants",
    href: "/pants",
    image: "/pants.jpg",
    items: "11+ items",
  },
  {
    id: 4,
    name: "Suits",
    href: "/suits",
    image: "/Suit.jpg",
    items: "8+ items",
  },
  {
    id: 5,
    name: "home-wear",
    href: "/home-wear",
    image: "/homewear.jpg",
    items: "5+ items",
  },
  {
    id: 6,
    name: "All Categories",
    href: "/shop",
    image: "/shoping.jpg",
    items: "70+ items",
  },
];

export default function CategoriesSliderAutoSnap() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(4);

  // responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(2);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let currentIndex = 0;
    const totalSlides = Math.ceil(categories.length / cardsPerView);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      slider.scrollTo({
        left: slider.scrollWidth * (currentIndex / totalSlides),
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 md:w-[85vw] w-[95%] m-auto ">
      <Title titleText="All Categories" color="primary" />
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 py-4 scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="shrink-0 w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 snap-start"
          >
            <Link href={category.href}>
              <div className="relative w-full h-70  rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  <p className="text-sm">{category.items}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
