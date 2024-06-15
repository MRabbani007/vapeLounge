import Image from "next/image";
import { PRODUCTS, PRODUCT_MODELS, PRODUCT_TEMPLATE } from "./_lib/products";
import CardProduct from "./_components/CardProduct";
import CardTitle from "./_components/CardTitle";
import { getProductSale, getProductTypes } from "./_lib/productControllers";

export default async function Home() {
  const products = await getProductSale();
  const models = await getProductTypes();

  return (
    <main className="flex flex-col gap-4 w-full">
      <CardTitle title={"Products"} />
      <ul className="flex flex-wrap gap-4 p-4">
        {models.map((item, index) => {
          return (
            <li
              key={index}
              className={
                (false ? "text-yellow-600 underline" : "") + " duration-200"
              }
            >
              <button>{item.brand + " " + item.model}</button>
            </li>
          );
        })}
      </ul>
      {models.length !== 0 ? (
        <>
          <CardTitle title={"On Sale"} />
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {products.map((item, index) => {
              return (
                <CardProduct
                  product={JSON.parse(JSON.stringify(item))}
                  key={index}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>No products for this model</p>
      )}
      ;
    </main>
  );
}
