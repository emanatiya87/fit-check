"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      router.push("/shop?page=1");
      return;
    }
    router.push(`/shop?search=${encodeURIComponent(trimmedSearch)}&page=1`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
      <label
        htmlFor="search"
        className="block mb-2.5 text-sm font-medium text-heading sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-body"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-gray-300 text-heading text-sm rounded-xl  focus:border-primary/50 focus:outline-none shadow-xs placeholder:text-body"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
        <button
          type="submit"
          className="absolute cursor-pointer end-1.5 bottom-1.5 text-white bg-primary hover:bg-brand-strong box-border border border-transparent shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
}
