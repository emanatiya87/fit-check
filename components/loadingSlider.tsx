import Title from "./title";
export default function LoadingSlider() {
  return (
    <>
      <Title titleText="All Categories" color="primary" />
      <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"></div>
    </>
  );
}
