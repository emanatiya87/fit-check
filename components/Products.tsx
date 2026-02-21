import { CardComponent } from "./Card";
import { client, urlFor } from "@/lib/sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const builder = createImageUrlBuilder(client);
interface Product {
  _id: string;
  title: string;
  price: string;
  lastPrice?: string;
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
    <div className="w-[85vw] m-auto flex flex-wrap items-start justify-center ">
      {products.map((product: Product) => (
        <CardComponent
          key={product._id}
          title={product.title}
          price={product.price}
          lastPrice={product.lastPrice ? product.lastPrice : ""}
          imgSrc={
            product.mainImage
              ? urlFor(product.mainImage).url()
              : "/placeholder.jpg"
          }
        />
      ))}
    </div>
  );
}
