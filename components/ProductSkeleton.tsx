import Title from "./title";
export default function ProductSkeleton() {
  const skeletons = [1, 2, 3, 4, 5];

  return (
    <>
      <Title titleText="New Products" color="primary" />
      <div className="md:w-[85vw] w-[95%] m-auto flex flex-wrap items-start justify-center ">
        {skeletons.map((i) => (
          <div
            key={i}
            className="w-1/2 sm:w-1/4 md:w-1/5 px-2 mb-3 h-87.5 bg-gray-200 animate-pulse rounded-xl"
          >
            <div className="w-full h-2/3 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
