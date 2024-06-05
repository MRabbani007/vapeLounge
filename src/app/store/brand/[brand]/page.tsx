"use client";

import CardProduct from "@/app/_components/CardProduct";
import CardTitle from "@/app/_components/CardTitle";
import { PRODUCT_MODELS } from "@/app/_lib/products";
import { getProdBarnd } from "@/app/_lib/utils";
import React, { useState } from "react";

type Props = {
  params: {
    brand: string;
  };
};

export default async function StoreBrandPage({ params }: Props) {
  // const products = await getProdBarnd(params.brand);

  const models = PRODUCT_MODELS.filter((item) =>
    item.replaceAll(" ", "").toLowerCase().includes(params.brand.toLowerCase())
  );

  const [selectedModel, setSelectedModel] = useState(models[0] || "");

  return (
    <main className="flex flex-col gap-4 w-full">
      <CardTitle title={params.brand.replaceAll("%20", " ") || ""} />
      <ul className="flex flex-wrap gap-4 p-4">
        {models.map((item, index) => {
          return (
            <li
              key={index}
              className={
                (selectedModel === item ? "text-yellow-600 underline" : "") +
                " duration-200"
              }
            >
              <button onClick={() => setSelectedModel(item)}>{item}</button>
            </li>
          );
        })}
      </ul>
      {models.length !== 0 ? (
        <>
          <CardTitle title={selectedModel} />
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* {products.map((item, index) => {
              return <CardProduct product={item} key={index} />;
            })} */}
          </div>
        </>
      ) : (
        <p>No products for this model</p>
      )}
    </main>
  );
}
