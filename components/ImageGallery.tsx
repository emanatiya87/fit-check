"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// استيراد الاستايلات
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { urlFor } from "@/lib/sanity";

interface iAppProps {
  mainImage: any;
  gallery?: any[];
}

export default function ImageGallery({ mainImage, gallery }: iAppProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const allImages = gallery ? [mainImage, ...gallery] : [mainImage];
  console.log(gallery);
  return (
    <div className="relative w-[70%] mx-auto">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200"
      >
        {allImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Zoom>
              <img
                src={urlFor(image).url()}
                alt="Product"
                className="w-auto h-90 object-cover m-auto"
              />
            </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute left-0 top-4 -translate-x-1/2 z-10 w-20">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={8}
          slidesPerView={"auto"}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-80 py-2 thumb-viewport"
        >
          {allImages.length > 1
            ? allImages.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer"
                  style={{ height: "80px", width: "100%" }}
                >
                  <div className="rounded-xl overflow-hidden border-2 border-white/50 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    <img
                      src={urlFor(image).url()}
                      alt="Thumb"
                      className="w-full h-full aspect-square object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </div>
    </div>
  );
}
