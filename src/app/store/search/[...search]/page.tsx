import CardProduct from "@/app/_components/CardProduct";
import { searchProducts } from "@/app/_lib/productControllers";
import { PRODUCTS } from "@/app/_lib/products";
import React from "react";

type Props = {
  searchParams: {
    search?: string;
    page?: number;
  };
};

export default async function StoreSearchPage({ searchParams }: Props) {
  const query = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const { count, products } = await searchProducts(query, page);

  return (
    <main>
      <h1>Search</h1>
      <div>{query}</div>
      <div className="flex flex-wrap gap-4">
        {products.map((item, index) => {
          return <CardProduct product={item} key={index} />;
        })}
      </div>
    </main>
  );
}
