"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
const categories = [
  {
    id: 1,
    name: "Dresses",
    href: "/dresses",
    image: "/dress.jpg",
    color: "from-pink-500/20",
    items: "15+ items",
  },
  {
    id: 2,
    name: "Tops",
    href: "/tops",
    image: "/top.jpg",
    color: "from-blue-500/20",
    items: "8+ items",
  },
  {
    id: 3,
    name: "Pants",
    href: "/pants",
    image: "/pants.jpg",
    color: "from-purple-500/20",
    items: "3+ items",
  },
  {
    id: 4,
    name: "Suits",
    href: "/suits",
    image: "/Suit.jpg",
    color: "from-yellow-500/20",
    items: "3+ items",
  },
];
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Title from "./title";
export default function CategoriesSlider() {
  return (
    <>
      <Title titleText="All Categories" color="primary" />
      <section className=" px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2} // Shows 2 items on mobile by default
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true} // This enables infinite looping
            // loopAdditionalSlides={2} // Adds extra slides for smoother loop
            breakpoints={{
              // When window width is >= 640px (tablet)
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // When window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="category-swiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <Link href={category.href} className="group block">
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-3/4">
                    {/* Image */}
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 mb-2">
                        {category.items}
                      </p>
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold group-hover:bg-primary transition-colors">
                        Shop
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Styles */}
          <style jsx global>{`
            .category-swiper {
              padding: 8px 4px 32px 4px !important;
            }

            .category-swiper .swiper-button-next,
            .category-swiper .swiper-button-prev {
              color: var(--color-primary);
              background: white;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            }

            .category-swiper .swiper-button-next:after,
            .category-swiper .swiper-button-prev:after {
              font-size: 16px;
            }

            .category-swiper .swiper-pagination-bullet-active {
              background: var(--color-primary);
            }

            /* Hide navigation on mobile */
            @media (max-width: 640px) {
              .category-swiper .swiper-button-next,
              .category-swiper .swiper-button-prev {
                display: none;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
