"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  page: number;
  totalPages: number;
  category: string;
}

export default function Pagination({ page, totalPages, category }: Props) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const season = searchParams.get("season");
  const sort = searchParams.get("sort");

  const buildUrl = (nextPage: number | string) => {
    const params = new URLSearchParams();
    params.set("page", nextPage.toString());

    if (season) params.set("season", season);
    if (sort) params.set("sort", sort);

    return `/${category}?${params.toString()}`;
  };

  const getPages = () => {
    const delta = 1;
    const range: (number | string)[] = [];
    const left = Math.max(2, page - delta);
    const right = Math.min(totalPages - 1, page + delta);

    range.push(1);

    if (left > 2) range.push("...");

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) range.push("...");

    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-6 text-sm sm:text-base">
      {/* Prev Button */}
      <Link
        href={buildUrl(page - 1)}
        className={`px-2.5 py-1.5 sm:px-3 sm:py-1 rounded border transition-colors ${
          page <= 1
            ? "pointer-events-none opacity-40 border-gray-200"
            : "hover:bg-gray-100 border-gray-300"
        }`}
      >
        Prev
      </Link>

      {/* Mobile Page Indicator (Shows only on small screens) */}
      <span className="sm:hidden px-2 text-xs font-medium text-gray-600">
        {page} / {totalPages}
      </span>

      {/* Desktop Page Numbers (Hidden on mobile) */}
      <div className="hidden sm:flex items-center gap-2">
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`dots-${i}`} className="px-1 text-gray-400">
              ...
            </span>
          ) : (
            <Link
              key={p}
              href={buildUrl(p)}
              className={`px-3 py-1 rounded border transition-colors ${
                page === p
                  ? "bg-primary text-white border-primary pointer-events-none font-semibold"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {p}
            </Link>
          ),
        )}
      </div>

      {/* Next Button */}
      <Link
        href={buildUrl(page + 1)}
        className={`px-2.5 py-1.5 sm:px-3 sm:py-1 rounded border transition-colors ${
          page >= totalPages
            ? "pointer-events-none opacity-40 border-gray-200"
            : "hover:bg-gray-100 border-gray-300"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
