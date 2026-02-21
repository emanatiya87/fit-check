export default function ProductSkeleton() {
  // هنعمل مصفوفة وهمية من 4 عناصر عشان نرسم شكل الكروت
  const skeletons = [1, 2, 3, 4];

  return (
    <div className="w-[85vw] m-auto flex flex-wrap items-start justify-center gap-4 py-10">
      {skeletons.map((i) => (
        <div
          key={i}
          className="w-62.5 h-87.5 bg-gray-200 animate-pulse rounded-xl"
        >
          <div className="w-full h-2/3 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
