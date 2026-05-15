import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
export const dynamic = "force-dynamic";
import CategoriesSlider from "@/components/CategoriesSlider";
import Title from "@/components/title";
export default async function Pants() {
  const products = await client.fetch(
    `*[_type == "product"]  | order(_createdAt desc)`,
    {},
    { next: { revalidate: 30 } },
  );
  let filtered = products.filter((p: any) => p.category === "pants");
  return (
    <>
      <Title titleText="بناطيل" color="primary" />

      <ProductList products={filtered} />
      <CategoriesSlider />
    </>
  );
}
