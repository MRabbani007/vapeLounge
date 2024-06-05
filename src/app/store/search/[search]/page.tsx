import CardProduct from "@/app/_components/CardProduct";
import { PRODUCTS } from "@/app/_lib/products";
import React from "react";

type Props = {
  params: {
    search: string;
  };
};

export default function StoreSearchPage({ params }: Props) {
  const result = PRODUCTS.filter((item: Product) =>
    item.name.toLowerCase().includes(params.search.toLowerCase())
  );

  return (
    <main>
      <h1>Search</h1>
      <div>{params.search}</div>
      <div className="flex flex-wrap gap-4">
        {result.map((item, index) => {
          return <CardProduct product={item} key={index} />;
        })}
      </div>
    </main>
  );
}
