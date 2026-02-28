import { client } from "@/lib/sanity";
import Title from "./title";
import ProductList from "./ProductList";
export const dynamic = "force-dynamic";

export default async function Products() {
  const products = await client.fetch(
    `*[_type == "product"]`,
    {},
    { next: { revalidate: 0 } },
  );

  return (
    <>
      <Title titleText="Features" color="primary" />
      <ProductList products={products} />
    </>
  );
}
