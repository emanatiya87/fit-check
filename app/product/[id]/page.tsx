import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import ImageGallery from "@/components/ImageGallery";
import { getColorCode } from "@/functions/colors";
async function getProduct(id: string) {
  const query = `*[_type == "product" && _id == "${id}"][0]`;
  const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) {
    return <div className="text-center py-20 ">المنتج غير موجود</div>;
  }

  return (
    <div className="w-[85vw] mx-auto py-6 text-right" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ImageGallery mainImage={product.mainImage} gallery={product.gallery} />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-secondary">{product.title}</h1>
          <div className="h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
          <div className="flex items-center gap-4">
            <span className="text-2xl  text-secondary">LE {product.price}</span>
            {product.lastPeice && (
              <span className="text-gray-400 line-through text-xl">
                {product.lastPeice}
              </span>
            )}
          </div>
          <div className="h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description || ""}
          </p>
          {product.sizes && (
            <div className="flex gap-2 items-center">
              <span className="font-bold">المقاسات:</span>
              {product.sizes.map((s: string) => (
                <span key={s} className="px-3 py-1 border rounded">
                  {s}
                </span>
              ))}
            </div>
          )}
          {/* قسم الألوان المطور */}
          {product.colors && (
            <div className="flex flex-col gap-3 mt-4">
              <span className="font-bold text-gray-700">الألوان المتاحة:</span>
              <div className="flex gap-3">
                {product.colors.map((color: string) => (
                  <div key={color} className="group relative">
                    <span
                      className="block w-8 h-8 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 cursor-pointer hover:ring-secondary transition-all"
                      style={{ backgroundColor: getColorCode(color) }}
                    ></span>
                    <span className="absolute -top-8 right-1/2 translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <a
            href={`https://wa.me/201113364852?text=${encodeURIComponent(`أهلاً FitCheck، حابة أطلب: ${product.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mt-4 text-light bg-[#546E3C] border border-[#546E3C] 
                       rounded-4xl font-semi-bold text-md px-5 py-2.5 flex items-center gap-1 "
          >
            <FaWhatsapp />
            اطلبي على الواتساب
          </a>
        </div>
      </div>
    </div>
  );
}
