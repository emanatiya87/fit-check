import { client } from "@/lib/sanity";
import Title from "./title";
import ProductList from "./ProductList";
export const dynamic = "force-dynamic";

export default async function SampleProducts({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  const products = await client.fetch(
    `*[_type == "product" && category == $category] | order(_createdAt desc) [0...5]`,
    { category },
    { next: { revalidate: 30 } },
  );

  return (
    <>
      <Title titleText={title} color="primary" />
      <ProductList products={products} />
    </>
  );
}
