import { CardComponent } from "./Card";
import Title from "./title";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
export const dynamic = "force-dynamic";
export const revalidate = 30;
const builder = createImageUrlBuilder(client);
interface Product {
  _id: string;
  title: string;
  price: string;
  lastPeice?: string;
  image?: any;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
}
export default async function Products() {
  const products = await client.fetch(
    `*[_type == "product"]`,
    {},
    {
      next: { revalidate: 0 },
      cache: "no-store",
    },
  );
  console.log(products);
  return (
    <>
      <Title titleText="Features" color="primary" />

      <div className="w-[85vw] m-auto flex flex-wrap items-start justify-center ">
        {products.map((product: Product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="w-1/2 sm:w-1/4 md:w-1/5 px-2 mb-3"
          >
            <CardComponent
              _id={product._id}
              title={product.title}
              price={product.price}
              lastPrice={product.lastPeice ? product.lastPeice : ""}
              imgSrc={
                product.mainImage
                  ? urlFor(product.mainImage).url()
                  : "/placeholder.jpg"
              }
            />
          </Link>
        ))}
      </div>
    </>
  );
}
