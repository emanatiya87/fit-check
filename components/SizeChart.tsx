"use client";
import Image from "next/image";
export default function SizeChart({ product }: { product: any }) {
  if (!product?.isSizeAvailable) return null;

  const { category, tshirtWidth, tshirtHeight, pantsWidth, pantsHeight } =
    product;

  const cat = category?.toLowerCase();
  console.log("Product Category:", cat);
  const isPants = cat === "pants";
  const isSuits = cat === "suits" || cat === "home-wear";
  const isTshirts = cat === "tshirts";

  return (
    <section className="mt-10 w-full max-w-2xl mx-auto bg-white shadow-sm p-6 rounded-xl border border-gray-100">
      <h2 className="text-lg font-semibold mb-2">Size Chart</h2>

      <p className="text-sm text-gray-600 mb-6">
        Ensure your new outfit fits perfectly! Explore our size chart below to
        confirm your size.
      </p>

      {/* 🟦 PANTS CATEGORY ONLY */}
      {isPants && (
        <>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">Pants Width</p>
              <p className="text-xl font-semibold">{pantsWidth} cm</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">Pants Height</p>
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
        </>
      )}
      {/* 🟦 T-SHIRTS CATEGORY ONLY */}
      {isTshirts && (
        <>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">T-Shirt Width</p>
              <p className="text-xl font-semibold">{tshirtWidth} cm</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">T-Shirt Height</p>
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
        </>
      )}

      {/* 🟩 SUITS CATEGORY → SHOW BOTH */}
      {isSuits && (
        <>
          <h3 className="text-md font-semibold mt-6 mb-3">T-Shirt Size</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">T-Shirt Width</p>
              <p className="text-xl font-semibold">{tshirtWidth} cm</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">T-Shirt Height</p>
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

          <h3 className="text-md font-semibold mt-8 mb-3">Pants Size</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">Pants Width</p>
              <p className="text-xl font-semibold">{pantsWidth} cm</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">Pants Height</p>
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
        </>
      )}
    </section>
  );
}
