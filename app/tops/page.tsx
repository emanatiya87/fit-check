import { client } from "@/lib/sanity";
import ProductList from "@/components/ProductList";
import CategoriesSlider from "@/components/CategoriesSlider";
import Title from "@/components/title";
import Pagination from "@/components/Pagination";
import FilterBar from "@/components/FilterBar";

const PAGE_SIZE = 12;

export default async function Tops({
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

  const baseFilter = `_type == "product" && category == "tshirts"`;

  let filters = baseFilter;

  if (season && season !== "all") {
    filters += ` && (season == "${season}" || season == "mix")`;
  }

  // 1. Secondary sort based on user selection
  const secondarySort = sort
    ? `price ${sort === "high" ? "desc" : "asc"}`
    : `_createdAt desc`;

  // 2. Primary sort: isInStock desc (true first, false last)
  const sortQuery = `| order(select(defined(isInStock) => isInStock, true) desc, ${secondarySort})`;

  const products = await client.fetch(
    `*[${filters}] ${sortQuery} [$start...$end]`,
    { start, end },
  );

  const total = await client.fetch(`count(*[${filters}])`);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <>
      <Title titleText="تيشرتات وبلوزات" color="primary" />
      <FilterBar />
      <ProductList products={products} />
      <Pagination totalPages={totalPages} page={page} category="tops" />
      <CategoriesSlider />
    </>
  );
}
