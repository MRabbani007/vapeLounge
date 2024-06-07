import CardProduct from "@/app/_components/CardProduct";
import CardTitle from "@/app/_components/CardTitle";
import { getProductSale } from "@/app/_lib/productControllers";
import React from "react";

export default async function StoreSalePage() {
  const products = await getProductSale();

  return (
    <main>
      <CardTitle title={"On Sale"} />
      <div className="flex flex-row flex-wrap items-center justify-between">
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
