import CardProduct from "@/app/_components/CardProduct";
import CardTitle from "@/app/_components/CardTitle";
import ProductModels from "@/app/_components/store/ProductModels";
import { getProductByModel } from "@/app/_lib/productControllers";
import { PRODUCTS } from "@/app/_lib/products";
import React from "react";

type Props = {
  searchParams: {
    brand: string;
    model: string;
  };
};

export default async function StoreModelPage({ searchParams }: Props) {
  const brand = searchParams?.brand || "";
  const model = searchParams?.model || "";

  const products = await getProductByModel(brand, model);

  return (
    <main>
      <CardTitle title={brand} />
      <ProductModels brand={brand} />
      <CardTitle title={(brand + " " + model).replaceAll("%20", " ")} />
      <div className="flex flex-wrap gap-4 items-center justify-center w-full">
        {products.map((item, index) => {
          return (
            <CardProduct
              product={JSON.parse(JSON.stringify(item))}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
}
