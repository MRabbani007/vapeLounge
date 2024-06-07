"use client";

import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import NavbarSearch from "./NavbarSearch";
import Image from "next/image";
import Link from "next/link";
import { getProductBrands } from "../_lib/productControllers";
import CartDropDown from "./store/CartDropDown";

export default async function Navbar() {
  const brands = await getProductBrands();

  const [showCartDropDown, setShowCartDropDown] = useState(false);

  return (
    <nav className="w-full text-zinc-900">
      <div className="flex items-center justify-between px-6 py-2">
        <p className="flex gap-4 font-light">
          <Link href={"/"}>Home</Link>
          <Link href={"/store"}>All Products</Link>
          <Link href={"/admin"}>Admin</Link>
        </p>
        <p className="flex gap-4 font-light">
          <span>Order</span>
          <span>+7 777 777 7777</span>
        </p>
      </div>
      <div className="flex items-center justify-between px-6 py-2 bg-zinc-200">
        {/* <PiCigaretteThin size={40} /> */}
        <Link title="Home" href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={100} height={70} />
        </Link>

        <NavbarSearch />

        <div className="flex items-center gap-2">
          <Link href={"/login"}>
            <AiOutlineUser size={32} title="Sign In" />
          </Link>
          <Link
            title="Cart"
            href={"/cart"}
            onMouseOver={() => setShowCartDropDown(true)}
            onMouseLeave={() => setShowCartDropDown(false)}
            className="flex items-center gap-2"
          >
            <PiShoppingCartLight size={32} />
            <span>
              <u>
                0.00<b>KZT</b>
              </u>
            </span>
            <CartDropDown showCartDropDown={showCartDropDown} />
          </Link>
        </div>
      </div>
      <ul className="flex flex-wrap items-center justify-center px-6 py-2 font-light gap-2 md:gap-8 uppercase">
        <li>
          <Link href={"/store/sale"}>Sale</Link>
        </li>
        <li>
          <Link href={"/store"}>All Products</Link>
        </li>
        {brands.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`/store/brand/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
