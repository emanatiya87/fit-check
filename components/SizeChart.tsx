"use client";
import Image from "next/image";
export default function SizeChart({ product }: { product: any }) {
  if (!product?.isSizeAvailable) return null;

  const { category, tshirtWidth, tshirtHeight, pantsWidth, pantsHeight } =
    product;

  const cat = category?.toLowerCase();
  const isPants = cat === "pants";
  const isSuits = cat === "suits" || cat === "home-wear";
  const isTshirts = cat === "tshirts";

  return (
    <section className="mt-10 w-full max-w-2xl mx-auto bg-white shadow-sm p-6 rounded-xl border border-gray-100">
      <h2 className="text-lg font-semibold mb-2" dir="rtl">
        المقاس:
      </h2>

      <p className="text-sm text-gray-600 mb-6" dir="rtl">
        تأكد من أن ملابسك الجديدة تناسبك تمامًا ! تصفح جدول المقاسات أدناه
        للتأكد من مقاسك.
      </p>

      {/* 🟦 PANTS CATEGORY ONLY */}
      {isPants && (
        <>
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-4 text-center ">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">عرض البنطلون</p>
                <p className="text-xl font-semibold">{pantsWidth} cm</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">طول البنطلون</p>
                <p className="text-xl font-semibold">{pantsHeight} cm</p>
              </div>
            </div>

            {/* Pants Image */}

            <Image
              src="/pants-chart.png"
              alt="pants size"
              className=" mt-6 rounded-lg border m-auto text-center"
              width={200}
              height={200}
            />
          </div>
        </>
      )}
      {/* 🟦 T-SHIRTS CATEGORY ONLY */}
      {isTshirts && (
        <>
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-4 text-center ">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">عرض التيشرت</p>
                <p className="text-xl font-semibold">{tshirtWidth} cm</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">طول التيشرت</p>
                <p className="text-xl font-semibold">{tshirtHeight} cm</p>
              </div>
            </div>

            {/* T-Shirt Image */}

            <Image
              src="/tshirt-chart.png"
              alt="tshirt size"
              className=" mt-6 rounded-lg border m-auto text-center"
              width={200}
              height={200}
            />
          </div>
        </>
      )}

      {/* 🟩 SUITS CATEGORY → SHOW BOTH */}
      {isSuits && (
        <>
          <h3 className="text-md font-semibold mt-6 mb-3" dir="rtl">
            مقاس التيشرت:
          </h3>
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-4 text-center ">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500" dir="rtl">
                  عرض التيشرت
                </p>
                <p className="text-xl font-semibold">{tshirtWidth} cm</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">طول التيشرت</p>
                <p className="text-xl font-semibold">{tshirtHeight} cm</p>
              </div>
            </div>

            {/* Shirt Image */}

            <Image
              src="/tshirt-chart.png"
              alt="shirt size"
              className=" mt-6 rounded-lg border m-auto text-center"
              width={200}
              height={200}
            />
          </div>

          <h3 className="text-md font-semibold mt-8 mb-3" dir="rtl">
            مقاس البنطلون:
          </h3>
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-4 text-center ">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">عرض البنطلون</p>
                <p className="text-xl font-semibold">{pantsWidth} cm</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">طول البنطلون</p>
                <p className="text-xl font-semibold">{pantsHeight} cm</p>
              </div>
            </div>

            {/* Pants Image */}

            <Image
              src="/pants-chart.png"
              alt="pants size"
              className=" mt-6 rounded-lg border m-auto text-center"
              width={200}
              height={200}
            />
          </div>
        </>
      )}
    </section>
  );
}
