"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

export default function MenuGroup({
  brand,
  models,
}: {
  brand: string;
  models: ProductModel[];
}) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setExpand((curr) => !curr)}
        className="flex items-center justify-between gap-2 py-2 px-4 w-full"
      >
        <span>{brand}</span>
        <IoChevronForward
          size={25}
          className={(expand ? "rotate-90" : "") + " duration-200"}
        />
      </button>
      <ul
        className={
          (expand ? "" : "-translate-y-4 opacity-0 h-0 invisible") +
          " duration-200 font-extralight"
        }
      >
        {models
          .filter((item) => item.brand === brand)
          .map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={{
                    pathname: "/store/model",
                    query: {
                      brand: item.brand || "",
                      model: item.model || "",
                    },
                  }}
                  className="block py-2 px-4 border-b-[1px] text-nowrap hover:bg-white duration-200"
                >
                  {item.brand + " " + item.model}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
