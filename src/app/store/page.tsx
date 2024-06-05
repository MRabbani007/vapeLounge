import React from "react";
import CardProduct from "../_components/CardProduct";
import { PRODUCTS } from "../_lib/products";
import CardTitle from "../_components/CardTitle";
import { getProducts } from "../_lib/utils";

export default async function StorePage() {
  // const products = await getProducts();

  return (
    <main className="p-4">
      <CardTitle title={"All Products"} />
      <div className="flex flex-row flex-wrap items-center justify-between">
        {/* {products.map((item, index) => {
          return <CardProduct product={item} key={index} />;
        })} */}
      </div>
    </main>
  );
}
