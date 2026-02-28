import { client } from "@/lib/sanity";
import { FaWhatsapp } from "react-icons/fa";
import ImageGallery from "@/components/ImageGallery";
import { getColorCode } from "@/functions/colors";
import Link from "next/link";
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
      {/* Breadcrumbs */}
      <nav className="flex mb-4 text-sm text-gray-500 gap-2 items-center">
        <a href="/" className="hover:text-secondary transition">
          الرئيسية
        </a>
        <span>/</span>
        <span className="text-secondary font-medium">{product.title}</span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ImageGallery mainImage={product.mainImage} gallery={product.gallery} />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-secondary">{product.title}</h1>
          <div className="h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
          <div className="flex flex-col gap-1">
            {" "}
            {/* حاوية للسعر عشان لو حبيتي تضيفي "شامل الضريبة" مثلاً */}
            <div className="flex items-baseline gap-3">
              {" "}
              {/* items-baseline بتخلي الحروف على سطر واحد مهما اختلف حجم الخط */}
              {/* السعر الحالي */}
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-secondary">EGP</span>
                <span className="text-4xl font-bold text-secondary tracking-tight">
                  {product.price}
                </span>
              </div>
              {/* السعر القديم ونسبة الخصم */}
              {product.lastPeice && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-lg decoration-red-400/50">
                    {product.lastPeice}
                  </span>

                  {/* بادج الخصم - اختياري بس بيحفز جداً على الشراء */}
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    وفرت {Number(product.lastPeice) - Number(product.price)}{" "}
                    جنيه
                  </span>
                </div>
              )}
            </div>
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
          <Link
            href={`https://wa.me/201113364852?text=${encodeURIComponent(`أهلاً FitCheck، حابة أطلب: ${product.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mt-4 bg-gray-100 text-[#25D366] border border-gray-200
             hover:bg-[#25D366] hover:text-white hover:border-[#25D366]
             rounded-full font-semibold text-md px-5 py-2.5 
             flex items-center gap-2 m-auto transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            اطلبي على الواتساب
          </Link>
        </div>
      </div>
    </div>
  );
}
