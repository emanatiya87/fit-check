import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
export const dynamic = "force-dynamic";
import CategoriesSlider from "@/components/CategoriesSlider";
import Title from "@/components/title";
export default async function Shop() {
  const products = await client.fetch(
    `*[_type == "product"]`,
    {},
    { next: { revalidate: 0 } },
  );
  return (
    <>
      <Title titleText="All Products" color="primary" />
      <ProductList products={products} appearFilter={true} />
      <CategoriesSlider />
    </>
  );
}
