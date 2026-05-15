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
import SampleProducts from "./sampleProducts";
export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Suspense fallback={<ProductSkeleton />}>
        <Products />
      </Suspense>
      <Suspense fallback={<ProductSkeleton />}>
        <SampleProducts
          category={"tshirts"}
          title={"احدث التيشرتات والبلوزات"}
        />
      </Suspense>
      <Suspense fallback={<ProductSkeleton />}>
        <SampleProducts category={"home-wear"} title={"احدث ملابس المنزل"} />
      </Suspense>
      <Suspense fallback={<ProductSkeleton />}>
        <SampleProducts category={"pants"} title={"احدث البناطيل"} />
      </Suspense>
      <Suspense fallback={<ProductSkeleton />}>
        <SampleProducts category={"suits"} title={"احدث الاطقم (suits)"} />
      </Suspense>
      <Suspense fallback={<ProductSkeleton />}>
        <SampleProducts category={"dresses"} title={"احدث الفساتين"} />
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
