"use client";

import { useState } from "react";
import { CardComponent } from "./Card";
import Link from "next/link";
import { Dropdown, DropdownItem } from "flowbite-react";
import { TbArrowsSort } from "react-icons/tb";
import { urlFor } from "@/lib/sanity";

export default function ProductList({
  products,
  appearFilter = false,
}: {
  products: any[];
  appearFilter?: boolean;
}) {
  const [viewedProducts, setViewedProducts] = useState(products);

  const filterCategory = (category: string) => {
    if (category === "all") {
      setViewedProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      setViewedProducts(filtered);
    }
  };
  const sortProducts = (order: "high-to-low" | "low-to-high") => {
    const sorted = [...viewedProducts].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (order === "high-to-low") {
        return priceB - priceA;
      } else {
        return priceA - priceB;
      }
    });
    setViewedProducts(sorted);
  };
  return (
    <>
      <div
        className="flex justify-between items-center md:w-[85vw] w-[95%] m-auto px-3 mb-3 my-3"
        dir="rtl"
      >
        <span className="text-secondary font-semibold">
          <Dropdown
            label={
              <div className="flex items-center gap-2">
                <TbArrowsSort /> <span>Sort</span>
              </div>
            }
            inline
            className="z-30"
          >
            <DropdownItem onClick={() => sortProducts("low-to-high")}>
              Price: Low to High
            </DropdownItem>
            <DropdownItem onClick={() => sortProducts("high-to-low")}>
              Price: High to Low
            </DropdownItem>
          </Dropdown>
        </span>
        {appearFilter && (
          <span className="text-secondary font-semibold">
            <Dropdown label="Filter" inline className="z-30 ">
              <DropdownItem onClick={() => filterCategory("dresses")}>
                Dresses
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("tshirts")}>
                Tops
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("pants")}>
                Pants
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("all")}>
                All
              </DropdownItem>
            </Dropdown>
          </span>
        )}
      </div>

      <div className="md:w-[85vw] w-[95%] m-auto flex flex-wrap items-start justify-center ">
        {viewedProducts.map((product: any) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="w-1/2 sm:w-1/4 md:w-1/5 px-2 mb-3"
          >
            <CardComponent
              _id={product._id}
              title={product.title}
              price={product.price}
              lastPrice={product.lastPeice || ""}
              imgSrc={
                product.mainImage
                  ? urlFor(product.mainImage).url()
                  : "/placeholder.jpg"
              }
            />
          </Link>
        ))}
      </div>
    </>
  );
}
