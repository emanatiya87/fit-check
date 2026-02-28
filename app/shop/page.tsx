import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
export const dynamic = "force-dynamic";
import CategoriesSlider from "@/components/CategoriesSlider";
export default async function Shop() {
  const products = await client.fetch(
    `*[_type == "product"]`,
    {},
    { next: { revalidate: 0 } },
  );
  return (
    <>
      <ProductList products={products} appearFilter={true} />
      <CategoriesSlider />
    </>
  );
}
