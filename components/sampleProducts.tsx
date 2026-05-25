// import { client } from "@/lib/sanity";
// import Title from "./title";
// import ProductList from "./ProductList";
// export const dynamic = "force-dynamic";

// export default async function SampleProducts({
//   category,
//   title,
// }: {
//   category: string;
//   title: string;
// }) {
//   const products = await client.fetch(
//     `*[_type == "product" && category == $category] | order(_createdAt desc) [0...5]`,
//     { category },
//     { next: { revalidate: 30 } },
//   );

//   return (
//     <>
//       <Title titleText={title} color="primary" />
//       <ProductList products={products} />
//     </>
//   );
// }
import { client } from "@/lib/sanity";
import Title from "./title";
import SampleProductList from "./SampleProductList";

export const dynamic = "force-dynamic";

export default async function SampleProducts({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  const hrefByCategory: Record<string, string> = {
    tshirts: "tops",
    "home-wear": "home-wear",
    pants: "pants",
    suits: "suits",
    dresses: "dresses",
  };
  const products = await client.fetch(
    `*[_type == "product" && category == $category] | order(_createdAt desc) [0...4]`,
    { category },
    { next: { revalidate: 30 } },
  );
  return (
    <>
      <Title titleText={title} color="primary" />
      <SampleProductList products={products} href={hrefByCategory[category]} />
    </>
  );
}
