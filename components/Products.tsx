import { CardComponent } from "./Card";
import { client } from "@/lib/sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url";
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
  const products = await client.fetch(`*[_type == "product"]`);

  const urlFor = (source: SanityImageSource) => builder.image(source).url();
  console.log(products);
  return (
    <div className="w-[85vw] m-auto flex flex-wrap items-center content-center ">
      {products.map((product: Product) => (
        <CardComponent
          key={product._id}
          title={product.title}
          price={product.price}
          lastPrice={product.lastPrice ? product.lastPrice : ""}
          imgSrc={
            product.mainImage ? urlFor(product.mainImage) : "/placeholder.jpg"
          }
        />
      ))}
    </div>
  );
}
