import { getProductModels } from "@/app/_lib/productControllers";
import Link from "next/link";
import React, { useState } from "react";

export default async function ProductModels({ brand }: { brand: string }) {
  const models = await getProductModels(brand);

  return (
    <ul className="flex flex-wrap gap-4 p-4">
      {models.map((item, index) => {
        return (
          <li key={index} className="">
            <Link
              href={{
                pathname: "/store/model/",
                query: { brand, model: item },
              }}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
