import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
async function getProducts() {
  return await client.fetch(`*[_type == "product"]`);
}
export default async function Page() {
  // const products = await getProducts();
  return <></>;
}
