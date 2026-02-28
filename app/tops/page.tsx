import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
export const dynamic = "force-dynamic";
import CategoriesSlider from "@/components/CategoriesSlider";
export default async function Tops() {
  const products = await client.fetch(
    `*[_type == "product"]`,
    {},
    { next: { revalidate: 0 } },
  );
  let filtered = products.filter((p: any) => p.category === "tshirts");
  return (
    <>
      <ProductList products={filtered} />
      <CategoriesSlider />
    </>
  );
}
