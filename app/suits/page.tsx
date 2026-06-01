import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
import CategoriesSlider from "@/components/CategoriesSlider";
import Title from "@/components/title";
import Pagination from "@/components/Pagination";
const PAGE_SIZE = 12;

export default async function Suits({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const page = Number(params.page || 1);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const totalProducts = await client.fetch(
    `count(*[
      _type == "product" &&
      category == "suits"
    ])`,
  );

  const products = await client.fetch(
    `*[
      _type == "product" &&
      category == "suits"
    ]
    | order(_createdAt desc)
    [$start...$end]`,
    { start, end },
  );

  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  return (
    <>
      <Title titleText="اطقم سوتس" color="primary" />
      <ProductList products={products} />
      <Pagination totalPages={totalPages} page={page} category="suits" />
      <CategoriesSlider />
    </>
  );
}
