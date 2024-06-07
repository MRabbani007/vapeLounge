"use client";

import { getCart } from "@/app/_lib/cartControllers";
import Image from "next/image";
import React from "react";

export default async function CartDropDown({
  showCartDropDown,
}: {
  showCartDropDown: boolean;
}) {
  const cart: CartItem[] = await getCart("user");

  return (
    <ul
      className={
        showCartDropDown
          ? ""
          : "-translate-y-4 opacity-0 invisible" +
            " max-w-[400px] absolute top-full left-0"
      }
    >
      {cart.map((item, index) => {
        return (
          <li className="flex items-start gap-4" key={index}>
            <div>
              <Image src={item.image} alt={item.name} width={90} height={200} />
            </div>
            <p className="text-wrap">{item.name}</p>
            <p>{item.price}</p>
          </li>
        );
      })}
    </ul>
  );
}
