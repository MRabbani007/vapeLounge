import CardProduct from "@/app/_components/CardProduct";
import CardTitle from "@/app/_components/CardTitle";
import { PRODUCTS } from "@/app/_lib/products";
import React from "react";

type Props = {
  params: {
    model: string;
  };
};

export default function StoreModelPage({ params }: Props) {
  const products = PRODUCTS;
  return (
    <main>
      <CardTitle title={params.model.replaceAll("%20", " ")} />
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {products.map((item, index) => {
          return <CardProduct product={item} key={index} />;
        })}
      </div>
    </main>
  );
}
