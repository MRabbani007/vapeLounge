import Image from "next/image";
import { PRODUCTS, PRODUCT_MODELS, PRODUCT_TEMPLATE } from "./_lib/products";
import CardProduct from "./_components/CardProduct";
import CardTitle from "./_components/CardTitle";

export default function Home() {
  const products = PRODUCTS;
  const models = PRODUCT_MODELS;

  return (
    <main className="flex flex-col gap-4 w-full">
      <CardTitle title={"on sale"} />
      <ul className="flex flex-wrap gap-4 p-4">
        {models.map((item, index) => {
          return (
            <li
              key={index}
              className={
                (false ? "text-yellow-600 underline" : "") + " duration-200"
              }
            >
              <button>{item}</button>
            </li>
          );
        })}
      </ul>
      {models.length !== 0 ? (
        <>
          <CardTitle title={models[0]} />
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {products.map((item, index) => {
              return <CardProduct product={item} key={index} />;
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
