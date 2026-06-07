import { CardComponent } from "./Card";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { TbArrowRight } from "react-icons/tb";
export default function ProductList({
  products,
  appearAllCard = false,
}: {
  products: any[];
  appearFilter?: boolean;
  appearAllCard?: boolean;
}) {
  return (
    <>
      <div className="md:w-[85vw] w-[95%] m-auto flex flex-wrap items-start justify-center ">
        {products.map((product: any) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="w-1/2 sm:w-1/4 md:w-1/5 px-2 mb-3"
          >
            <CardComponent
              _id={product._id}
              title={product.title}
              price={product.price}
              lastPrice={product.lastPeice || ""}
              imgSrc={
                product.mainImage
                  ? urlFor(product.mainImage).url()
                  : "/placeholder.jpg"
              }
              isInStock={product.isInStock}
            />
          </Link>
        ))}
        {appearAllCard && (
          <Link
            href={`/shop`}
            data-viewall="true"
            className="snap-start shrink-0 w-[47%] sm:w-[23%] md:w-[18%]"
          >
            <div
              className="group flex flex-col items-center justify-center h-full min-h-55
                         rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5
                         hover:bg-primary/10 transition-colors duration-300 gap-3 p-4 text-center"
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full
                           bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <TbArrowRight className="text-primary text-xl group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
              <p className="text-primary font-bold text-sm leading-snug">
                عرض كل المنتجات
              </p>
              <p className="text-xs text-gray-400">
                اضغط لاستعراض التشكيلة كاملة
              </p>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
