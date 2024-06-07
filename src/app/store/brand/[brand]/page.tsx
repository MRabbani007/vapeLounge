import CardProduct from "@/app/_components/CardProduct";
import CardTitle from "@/app/_components/CardTitle";
import ProductModels from "@/app/_components/store/ProductModels";
import {
  getProductByModel,
  getProductModels,
} from "@/app/_lib/productControllers";

type Props = {
  params: {
    brand: string;
  };
};

export default async function StoreBrandPage({ params }: Props) {
  const brand = params?.brand ? params.brand.replaceAll("%20", " ") : "";
  // const products = await getProdBarnd(params.brand);

  const brandModels = await getProductModels(brand);
  const products = await getProductByModel(brand, brandModels[0]);

  return (
    <main className="flex flex-col gap-4 w-full border-2">
      <CardTitle title={brand} />
      <ProductModels brand={brand} />
      {brandModels.length !== 0 ? (
        <>
          <CardTitle title={brand + " " + brandModels[0]} />
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
    </main>
  );
}
