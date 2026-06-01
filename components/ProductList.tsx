import { CardComponent } from "./Card";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
export default function ProductList({
  products,
}: {
  products: any[];
  appearFilter?: boolean;
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
      </div>
    </>
  );
}
