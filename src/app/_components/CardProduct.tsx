"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

export default function CardProduct({ product }: { product: Product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.name}`);
  };

  const handleAddtoCart = async () => {
    const cartItem = {
      prodID: product.id,
      name: product.name,
      image: (product?.imageURL || "") + product?.image,
      price: product.price,
      quantity: 1,
    };
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItem }),
    });
    alert("Added to Cart");
  };

  const temp =
    (product?.imageURL ? product?.imageURL : "") +
    (product?.image ? product?.image : "");

  const image = Array.from(temp)[0] === "/" ? temp : "/products/noproduct.jpg";

  return (
    <div className="max-w-[350px] p-2 flex flex-col items-center rounded-xl hover:bg-zinc-100 hover:shadow-lg shadow-zinc-500 group duration-200">
      <div onClick={handleClick} className="relative">
        <Image src={image} alt={product?.name} width={300} height={400} />
        {product?.onSale === true ? (
          <span className="absolute top-5 right-5 -rotate-12 py-1 px-2 rounded-lg uppercase font-extrabold underline border-2 border-red-700 text-red-700">
            Sale
          </span>
        ) : null}
      </div>
      <p className="text-wrap whitespace-break-spaces text-center text-base">
        {product.name}
      </p>
      <div className="flex items-center justify-evenly w-full">
        <p>
          <span>
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <span className="ml-1 text-sm">KZT</span>
        </p>
        <button
          onClick={handleAddtoCart}
          className="text-zinc-800 group-hover:text-yellow-600 group-hover:scale-110 duration-200"
        >
          <FaCartArrowDown size={30} title="Add to Cart" />
        </button>
      </div>
    </div>
  );
}
