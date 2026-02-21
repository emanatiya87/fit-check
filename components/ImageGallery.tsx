"use client"; // لازم عشان الـ Interactivity

import { useState } from "react";
import { urlFor } from "@/lib/sanity";

interface iAppProps {
  mainImage: any;
  gallery?: any[]; // مصفوفة اختيارية
}

export default function ImageGallery({ mainImage, gallery }: iAppProps) {
  // الصورة الكبيرة بتبدأ بالـ mainImage
  const [bigImage, setBigImage] = useState(mainImage);

  const handleImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* الصورة الكبيرة المختار عرضها حالياً */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 border aspect-square">
        <img
          src={urlFor(bigImage).url()}
          alt="Product"
          className="h-full w-full object-cover object-center transition duration-300"
        />
      </div>

      {/* عرض الجاليري (الصور الصغيرة) */}
      {gallery && gallery.length > 0 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {/* بنضيف الـ mainImage كأول خيار في الجاليري برضه */}
          {[mainImage, ...gallery].map((image, idx) => (
            <div
              key={idx}
              className={`cursor-pointer overflow-hidden rounded-lg border-2 w-24 h-24 flex-shrink-0 transition ${
                bigImage === image ? "border-purple-600" : "border-transparent"
              }`}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={urlFor(image).url()}
                alt="Thumbnail"
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
