import { getProductByName } from "@/app/_lib/productControllers";
import { PRODUCTS, PRODUCT_TEMPLATE } from "@/app/_lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type ProductProp = {
  params: {
    name: string;
  };
};

export default async function ProductPage({ params }: ProductProp) {
  const name = decodeURIComponent(params?.name);
  const product = await getProductByName(name);

  if (!product?.id) {
    notFound();
  }

  return (
    <div className="flex flex-wrap items-start justify-center w-full p-8 gap-4">
      <div>
        <Image
          src={(product?.imageURL || "") + product?.image}
          width={500}
          height={700}
          alt={product?.model}
          className="max-h-[300px] w-auto"
        />
      </div>
      <div className="border-2 border-zinc-900 p-6 rounded-xl flex flex-col gap-2">
        <p className="flex items-end gap-2">
          <span className="text-xl">{product?.brand}</span>
          <span>{product?.model}</span>
        </p>
        <p>{product?.flavor}</p>
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
