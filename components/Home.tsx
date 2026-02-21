import Banner from "./Banner";
import { Suspense } from "react";
import LayoutFooter from "./LayoutFooter";
import Products from "./Products";
import ProductSkeleton from "./ProductSkeleton";
export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<ProductSkeleton />}>
        <Products />
      </Suspense>
      <LayoutFooter />
    </>
  );
}
