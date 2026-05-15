import Title from "./title";
export default function ProductSkeleton() {
  const skeletons = [1, 2, 3, 4, 5];

  return (
    <>
      <Title titleText="New Products" color="primary" />
      <div className="md:w-[85vw] w-[95%] m-auto flex flex-wrap items-start justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-1/2 sm:w-1/4 md:w-1/5 px-2 mb-3">
            {/* Outer Card Wrapper */}
            <div className="block shadow-2xl dark:border dark:border-background relative bg-gray-200 dark:bg-gray-700 animate-pulse overflow-hidden">
              {/* Image Section */}
              <div className="h-52 bg-gray-300 dark:bg-gray-600 relative flex items-center justify-center">
                {/* Favorite Button Placeholder */}
                <div className="absolute top-2 end-2 w-8 h-8 bg-gray-400 dark:bg-gray-500 rounded-lg"></div>
              </div>

              {/* Content Section */}
              <div className="py-2 px-1 text-center gap-2 flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-700">
                {/* Trending Badge Placeholder */}
                <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>

                {/* Title Placeholder */}
                <div className="w-full min-h-12 border-b border-gray-300 dark:border-gray-600 bg-gray-300 dark:bg-gray-600 rounded"></div>

                {/* Price & Old Price Placeholder */}
                <div className="flex items-baseline gap-3 w-full justify-center mt-1">
                  <div className="h-7 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="h-4 w-12 bg-gray-400 dark:bg-gray-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
