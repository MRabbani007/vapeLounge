import AdminFormProductEdit from "@/app/_components/admin/products/AdminFormProductEdit";
import { getProductById } from "@/app/_lib/productControllers";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: {
    id?: string;
    name?: string;
  };
};

export default async function AdminProductView({ searchParams }: Props) {
  // const name = params?.id || null;

  const id = searchParams?.id || "";
  const product = await getProductById(id);

  return (
    <main className="text-zinc-100">
      <h1>Edit Product</h1>
      <section className="flex flex-wrap gap-4 p-4 w-full">
        <div className="">
          <div className="w-200 h-400">
            <Image
              src={
                product?.image && Array.from(product.image)[0] === "/"
                  ? product.image
                  : "/products/noproduct.jpg"
              }
              alt=""
              width={200}
              height={400}
              // fill
            />
          </div>
          {product?.name}
        </div>
        <AdminFormProductEdit product={JSON.parse(JSON.stringify(product))} />
      </section>
    </main>
  );
}
