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
    const delta = 1; // how many pages around current page

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
    <div className="flex items-center justify-center gap-2 my-6">
      {/* Prev */}
      <Link
        href={buildUrl(page - 1)}
        className={`px-3 py-1 rounded border ${
          page <= 1
            ? "pointer-events-none opacity-50 border-gray-200"
            : "hover:bg-gray-100 border-gray-300"
        }`}
      >
        Prev
      </Link>

      {/* Pages */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-2">
            ...
          </span>
        ) : (
          <Link
            key={p}
            href={buildUrl(p)}
            className={`px-3 py-1 rounded border ${
              page === p
                ? "bg-primary text-white border-primary pointer-events-none"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {p}
          </Link>
        ),
      )}

      {/* Next */}
      <Link
        href={buildUrl(page + 1)}
        className={`px-3 py-1 rounded border ${
          page >= totalPages
            ? "pointer-events-none opacity-50 border-gray-200"
            : "hover:bg-gray-100 border-gray-300"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
