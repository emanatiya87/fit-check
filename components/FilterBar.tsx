"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Dropdown, DropdownItem } from "flowbite-react";
import { TbArrowsSort } from "react-icons/tb";
import { useState } from "react";
export default function FilterBar() {
  const [titleText, setTitleText] = useState("الموسم");

  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center  md:w-[85vw] w-[95%] m-auto px-3 mb-3 my-3">
      {/* SORT */}
      <span className="text-secondary font-semibold">
        <Dropdown
          label={
            <div className="flex items-center gap-2">
              <TbArrowsSort /> <span>الترتيب </span>
            </div>
          }
          inline
          className="z-30"
        >
          <DropdownItem onClick={() => updateQuery("sort", "low")}>
            من الأقل للأعلى
          </DropdownItem>
          <DropdownItem onClick={() => updateQuery("sort", "high")}>
            من الأعلى للأقل
          </DropdownItem>
        </Dropdown>
      </span>
      {/* SEASON */}
      <span className="text-secondary font-semibold" dir="ltr">
        <Dropdown
          label={
            <div className="flex items-center gap-2">
              <span>{titleText} </span>
            </div>
          }
          inline
          className="z-30"
        >
          <DropdownItem
            onClick={() => {
              updateQuery("season", "summer");
              setTitleText("صيفي");
            }}
          >
            صيف
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              updateQuery("season", "winter");
              setTitleText("شتوي");
            }}
          >
            شتاء
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              updateQuery("season", "all");
              setTitleText("كل الفصول");
            }}
          >
            الكل
          </DropdownItem>
        </Dropdown>
      </span>
    </div>
  );
}
