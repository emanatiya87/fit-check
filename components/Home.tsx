import Banner from "./Banner";
import { Suspense } from "react";
import LayoutFooter from "./LayoutFooter";
import Products from "./Products";
import ProductSkeleton from "./ProductSkeleton";
import Features from "./features";
import Newsletter from "./Newsletter";
import CategoriesSlider from "./CategoriesSlider";
import LoadingSlider from "./loadingSlider";
import Categories from "./categories";
export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Suspense fallback={<ProductSkeleton />}>
        <Products />
      </Suspense>
      <Suspense fallback={<LoadingSlider />}>
        <CategoriesSlider />
      </Suspense>
      <Features />
      <LayoutFooter />
      <Newsletter />
    </>
  );
}
