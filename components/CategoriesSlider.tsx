"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "./title";

const categories = [
  {
    id: 1,
    name: "Dresses",
    href: "/dresses",
    image: "/dress.jpg",
    items: "15+ items",
  },
  { id: 2, name: "Tops", href: "/tops", image: "/top.jpg", items: "8+ items" },
  {
    id: 3,
    name: "Pants",
    href: "/pants",
    image: "/pants.jpg",
    items: "3+ items",
  },
  {
    id: 4,
    name: "Suits",
    href: "/suits",
    image: "/Suit.jpg",
    items: "3+ items",
  },
  {
    id: 5,
    name: "All Categories",
    href: "/shop",
    image: "/shoping.jpg",
    items: "20+ items",
  },
];

export default function CategoriesSliderResponsive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  // تحديد عدد الكاردس حسب الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640)
        setCardsPerView(2); // sm
      else setCardsPerView(4); // md & lg
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(categories.length / cardsPerView),
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(categories.length / cardsPerView) - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % Math.ceil(categories.length / cardsPerView),
    );
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <Title titleText="All Categories" color="primary" />
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className={`shrink-0 w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 p-2 `}
            >
              <Link href={category.href}>
                <div className="relative w-full md:h-56 rounded-xl overflow-hidden bg-gray-100 h-70">
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

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
          ›
        </button>
      </div>
    </section>
  );
}
