import { client } from "@/lib/sanity";
import { FaWhatsapp } from "react-icons/fa";
import ImageGallery from "@/components/ImageGallery";
import { getColorCode } from "@/functions/colors";
import { resolveCategory } from "@/functions/resolveCategory";
import Link from "next/link";
import CategoriesSliderAutoSnap from "@/components/CategoriesSlider";
import { phoneNumer } from "@/constants/number";
import SizeChart from "@/components/SizeChart";
async function getProduct(id: string) {
  const query = `*[_type == "product" && _id == "${id}"][0]`;
  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  const { route, label } = resolveCategory(product.category);
  if (!product) {
    return <div className="text-center py-20 ">المنتج غير موجود</div>;
  }

  return (
    <section>
      <div className="w-[90vw] md:w-[85vw] mx-auto py-6 text-right" dir="rtl">
        {/* Breadcrumbs */}
        <nav className="flex mb-4 text-sm text-gray-500  gap-2 items-center">
          <a
            href="/"
            className="hover:text-secondary dark:hover:text-primary transition"
          >
            الرئيسية
          </a>
          <span>/</span>
          <Link href={`/${route}`} className="hover:text-secondary">
            {label}
          </Link>
          <span>/</span>
          <span className="text-secondary  dark:text-primary font-medium">
            {product.title}
          </span>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ImageGallery
            mainImage={product.mainImage}
            gallery={product.gallery}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-secondary dark:text-primary">
              {product.title}
            </h1>
            <div className="h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
            <div className="flex flex-col gap-1">
              {" "}
              {/* حاوية للسعر عشان لو حبيتي تضيفي "شامل الضريبة" مثلاً */}
              <div className="flex items-baseline gap-3">
                {" "}
                {/* items-baseline بتخلي الحروف على سطر واحد مهما اختلف حجم الخط */}
                {/* السعر الحالي */}
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-secondary dark:text-primary">
                    EGP
                  </span>
                  <span className="text-4xl font-bold text-secondary dark:text-primary tracking-tight">
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
            {product.description && (
              <>
                <div className="h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
                <ul className="list-disc pl-6 text-gray-700 text-md leading-relaxed space-y-1">
                  {product.description
                    ?.split("\n")
                    .filter((line: string) => line.trim() !== "")
                    .map((line: string, index: number) => (
                      <li key={index}>{line}</li>
                    ))}
                </ul>
              </>
            )}
            {product.isSizeAvailable && (
              <div>
                <div className="h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
                <h3
                  className="font-bold text-gray-700 text-md leading-relaxed"
                  dir={"rtl"}
                >
                  تأكد من أن ملابسك الجديدة تناسبك تمامًا ! تصفح جدول المقاسات
                  بالاسفل للتأكد من مقاسك.
                </h3>
              </div>
            )}
            {product.material && (
              <div>
                <div className="h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
                <h3 className="font-bold  text-gray-700 text-md leading-relaxed">
                  الخامه : <span> {product.material}</span>
                </h3>
              </div>
            )}
            {product.sizes && (
              <div className="flex gap-2 items-center">
                <span className="font-bold text-gray-700">المقاسات:</span>
                {product.sizes.map((s: string) => (
                  <span
                    key={s}
                    className="px-3 py-1 border rounded text-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
            {/* قسم الألوان المطور */}
            {product.colors && (
              <div className="flex flex-col gap-3 mt-4">
                <span className="font-bold text-gray-700">
                  الألوان المتاحة:
                </span>

                <div className="flex gap-3 mt-8 flex-wrap">
                  {product.colors.map(
                    (item: { color: string; isColorAvailable: boolean }) => (
                      <div
                        key={item.color}
                        className="group relative flex flex-col items-center mb-6"
                      >
                        {/* Color Circle Container */}
                        {/* الدائرة */}
                        <span
                          className={`
    group relative block w-9 h-9 rounded-full border border-gray-200 shadow-sm ring-1 ring-transparent 
    transition-all duration-300
    ${item.isColorAvailable ? "cursor-pointer hover:ring-secondary hover:scale-105" : "cursor-not-allowed"}
  `}
                          style={{ backgroundColor: getColorCode(item.color) }}
                        >
                          {!item.isColorAvailable && (
                            <>
                              {/* Subtle Overlay to "mute" the color */}
                              <div className="absolute inset-0 bg-black/5 rounded-full" />

                              {/* Container for the X to ensure perfect centering */}
                              <div className="absolute inset-0 flex items-center justify-center p-1">
                                {/* Logic: If color is white (#ffffff or 'white'), use a dark X. 
            Otherwise, use a white X for better contrast on dark colors.
        */}
                                {["ابيض"].includes(item.color.toLowerCase()) ? (
                                  <>
                                    <span className="absolute h-[1.5px] w-full bg-red-600 rotate-45" />
                                    <span className="absolute h-[1.5px] w-full bg-red-600 -rotate-45" />
                                  </>
                                ) : (
                                  <>
                                    <span className="absolute h-[1.5px] w-full bg-gray-100 rotate-45 shadow-sm" />
                                    <span className="absolute h-[1.5px] w-full bg-gray-100 -rotate-45 shadow-sm" />
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </span>

                        {/* Tooltip */}
                        <span
                          className="absolute -top-8 text-center bg-gray-600 text-white text-[10px] px-2 py-1 rounded 
              opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity whitespace-nowrap"
                        >
                          {item.color}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
            {product.isInStock ? (
              <Link
                href={`https://wa.me/${phoneNumer}?text=${encodeURIComponent(`أهلاً FitCheck، حابة أطلب: ${product.title} , https://fit-check-just-click.netlify.app/product/${id}`)}`}
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
            ) : (
              <div className="  w-full  bg-gray-800  flex items-center justify-center z-20 ">
                <span className="text-white text-lg font-bold">نفذ</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <SizeChart product={product} />
      <CategoriesSliderAutoSnap />
    </section>
  );
}
