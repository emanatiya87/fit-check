import { client } from "@/lib/sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

async function getProducts() {
  const builder = createImageUrlBuilder(client);

  return await client.fetch(`*[_type == "product"]`);
}
export default async function Page() {
  // const products = await getProducts();
  return <></>;
}
