"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AdminProductCard({ product }: { product: Product }) {
  const handleDelete = async () => {
    // deleteProduct(product?.id);
    await fetch("/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: product.id }),
    });
  };
  //{product.image || "/noproduct.jpg"}

  const temp =
    (product?.imageURL ? product.imageURL : "") +
    (product?.image ? product.image : "");
  const image = Array.from(temp)[0] === "/" ? temp : "/products/noproduct.jpg";

  return (
    <tr key={product.id} className="bg-sky-900 rounded-md text-center">
      <td className="p-2 rounded-l-md">
        <div className="flex flex-wrap items-center pl-2 gap-2">
          <Image
            src={image}
            alt={product.name}
            width={40}
            height={40}
            className=""
          />
          <span>{product.brand}</span>
        </div>
      </td>
      <td className="p-2 text-start text-wrap">{product.name}</td>
      <td className="p-2">{product.price + " KZT"}</td>
      <td className="p-2 hidden sm:table-cell">
        {product.createDate?.toString().slice(0, 10)}
      </td>
      <td className="p-2">{product.qtyAvailable}</td>
      <td className="p-2 text center rounded-r-md">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link
            href={{
              pathname: "/admin/products/product/",
              query: { id: product?.id, name: product?.name },
            }}
          >
            <button className="py-1 px-2 bg-violet-400 rounded-lg">View</button>
          </Link>
          <form
            onSubmit={handleDelete}
            className="py-1 px-2 bg-rose-500 rounded-lg"
          >
            <input type="hidden" name="id" value={product.id} />
            <button type="submit" className="">
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  );
}
