"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiShoppingCartLight } from "react-icons/pi";

export default function CartDropDown({ cart }: { cart: CartItem[] }) {
  const [showCartDropDown, setShowCartDropDown] = useState(false);

  return (
    <div
      className="relative"
      onMouseOver={() => setShowCartDropDown(true)}
      onMouseLeave={() => setShowCartDropDown(false)}
    >
      <Link title="Cart" href={"/cart"} className="flex items-center gap-2">
        <PiShoppingCartLight size={32} />
        <span>
          <u>
            0.00<b>KZT</b>
          </u>
        </span>
      </Link>
      <ul
        className={
          (showCartDropDown ? "" : "-translate-y-4 opacity-0 invisible") +
          " max-w-[400px] absolute top-full right-0 z-10 bg-zinc-100 font-normal rounded-md duration-200"
        }
      >
        {cart.map((item, index) => {
          return (
            <li
              className="flex flex-wrap w-full min-w-[300px] flex-1 items-start gap-4 p-2 text-zinc-800"
              key={index}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={90}
                height={200}
                className="w-12 h-auto"
              />
              <p className="text-wrap min-w-[100px]">
                {item.name.split("(")[0]}
              </p>
              <p>{item.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
