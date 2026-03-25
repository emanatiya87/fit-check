import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
export const dynamic = "force-dynamic";
import CategoriesSlider from "@/components/CategoriesSlider";
import Title from "@/components/title";
export default async function Suits() {
  const products = await client.fetch(
    `*[_type == "product"]`,
    {},
    { next: { revalidate: 30 } },
  );
  let filtered = products.filter((p: any) => p.category === "suits");
  return (
    <>
      <Title titleText="اطقم سوتس" color="primary" />

      <ProductList products={filtered} />
      <CategoriesSlider />
    </>
  );
}
