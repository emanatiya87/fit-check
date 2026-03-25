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
  const [titleText, setTitleText] = useState("الموسم");
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
  const filterSeason = (selected: string) => {
    if (selected === "all") {
      setViewedProducts(products);
      setTitleText("كل الفصول");

      return;
    }

    const result = products.filter(
      (item) => item.season === selected || item.season === "mix",
    );

    setViewedProducts(result);
    if (selected == "summer") {
      setTitleText("صيفي");
    } else if (selected == "winter") {
      setTitleText("شتوي");
    }
  };
  console.log(viewedProducts);

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
                <TbArrowsSort /> <span>الترتيب </span>
              </div>
            }
            inline
            className="z-30"
          >
            <DropdownItem onClick={() => sortProducts("low-to-high")}>
              السعر: من الاقل للاعلى
            </DropdownItem>
            <DropdownItem onClick={() => sortProducts("high-to-low")}>
              السعر: من الاعلى للاقل
            </DropdownItem>
          </Dropdown>
        </span>
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
            <DropdownItem onClick={() => filterSeason("winter")}>
              شتاء
            </DropdownItem>

            <DropdownItem onClick={() => filterSeason("summer")}>
              صيف
            </DropdownItem>

            <DropdownItem onClick={() => filterSeason("all")}>
              الكل
            </DropdownItem>
          </Dropdown>
        </span>
        {appearFilter && (
          <span className="text-secondary font-semibold">
            <Dropdown label="تصنيف" inline className="z-30 ">
              <DropdownItem onClick={() => filterCategory("dresses")}>
                فساتين
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("tshirts")}>
                تيشرتات
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("pants")}>
                بناطيل
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("suits")}>
                اطقم سوتس
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("home-wear")}>
                ملابس منزل
              </DropdownItem>
              <DropdownItem onClick={() => filterCategory("all")}>
                الكل
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
              isInStock={product.isInStock}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
