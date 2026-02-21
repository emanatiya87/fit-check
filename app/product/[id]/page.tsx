import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery"; // تأكدي من المسار
// الفانكشن اللي بتجيب داتا المنتج الواحد
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
    return <div className="text-center py-20">المنتج غير موجود</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 text-right" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* الجزء الخاص بالصور */}
        {/* استدعاء الجاليري الجديد */}
        <ImageGallery mainImage={product.mainImage} gallery={product.gallery} />

        {/* تفاصيل المنتج */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-purple-600">
              {product.price} ج.م
            </span>
            {product.lastPrice && (
              <span className="text-gray-400 line-through">
                {product.lastPrice} ج.م
              </span>
            )}
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description || "لا يوجد وصف متوفر لهذا المنتج حالياً."}
          </p>

          {/* المقاسات والألوان (لو موجودة) */}
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

          {/* زرار الواتساب (Just Click!!) */}
          <a
            href={`https://wa.me/201113364852?text=${encodeURIComponent(`أهلاً FitCheck، حابة أطلب: ${product.title}`)}`}
            target="_blank"
            className="bg-black text-white text-center py-4 rounded-xl font-bold text-xl hover:bg-gray-800 transition shadow-lg"
          >
            اطلبي الآن (Just Click!!) 🖱️
          </a>
        </div>
      </div>
    </div>
  );
}
