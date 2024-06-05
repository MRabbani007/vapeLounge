import { PRODUCTS, PRODUCT_TEMPLATE } from "@/app/_lib/products";
import Image from "next/image";
import React from "react";

type ProductProp = {
  params: {
    name: string;
  };
};

export default function ProductPage({ params }: ProductProp) {
  // const product = PRODUCTS.find((prod) => prod.name === params.name);

  const product = PRODUCT_TEMPLATE;

  return (
    <div className="flex flex-wrap items-start w-full p-8">
      <div>
        <Image
          src={product.image}
          width={500}
          height={700}
          alt={product.model}
        />
      </div>
      <div className="border-2 border-zinc-900 p-6 rounded-xl flex flex-col gap-2">
        <p className="flex items-end gap-2">
          <span className="text-xl">{product.brand}</span>
          <span>{product.model}</span>
        </p>
        <p>{product.flavor}</p>
        <p>
          <span>{product.price}</span>
          <span className="text-sm">{product.currency}</span>
        </p>
        <button className="bg-zinc-800 text-white py-2 px-4 mx-auto rounded-xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
