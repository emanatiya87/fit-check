import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
import CategoriesSlider from "@/components/CategoriesSlider";
import Title from "@/components/title";
import Pagination from "@/components/Pagination";
import Searchbar from "@/components/searchbar";
const PAGE_SIZE = 20;

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  const search = params.search || "";
  const page = Number(params.page || 1);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const totalProducts = await client.fetch(
    `count(*[
    _type == "product" &&
    ($search == "" || title match "*" + $search + "*")
  ])`,
    { search },
  );

  const products = await client.fetch(
    `*[
    _type == "product" &&
    ($search == "" || title match "*" + $search + "*")
  ]
  | order(_createdAt desc)
  [$start...$end]`,
    {
      search,
      start,
      end,
    },
  );

  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  return (
    <>
      <Title titleText="كل القطع المتاحه" color="primary" />
      <Searchbar />
      <ProductList products={products} />
      <Pagination totalPages={totalPages} page={page} category="shop" />
      <CategoriesSlider />
    </>
  );
}
