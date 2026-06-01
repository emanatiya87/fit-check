import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
import CategoriesSlider from "@/components/CategoriesSlider";
import Title from "@/components/title";
import Pagination from "@/components/Pagination";
import FilterBar from "@/components/FilterBar";
const PAGE_SIZE = 12;

export default async function DressesPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    season?: string;
    sort?: string;
  }>;
}) {
  // pagination and filtration
  const params = await searchParams;

  const page = Number(params.page || 1);
  const season = params.season;
  const sort = params.sort;

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const baseFilter = `_type == "product" && category == "dresses"`;

  let filters = baseFilter;

  if (season && season !== "all") {
    filters += ` && (season == "${season}" || season == "mix")`;
  }

  const sortQuery = sort
    ? `| order(price ${sort === "high" ? "desc" : "asc"})`
    : `| order(_createdAt desc)`;
  const products = await client.fetch(
    `*[${filters}] ${sortQuery} [$start...$end]`,
    { start, end },
  );

  const total = await client.fetch(`count(*[${filters}])`);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  return (
    <>
      <Title titleText="فساتين" color="primary" />
      <FilterBar />
      <ProductList products={products} />
      <Pagination totalPages={totalPages} page={page} category="dresses" />
      <CategoriesSlider />
    </>
  );
}
