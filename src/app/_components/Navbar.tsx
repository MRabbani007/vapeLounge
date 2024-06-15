import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import NavbarSearch from "./NavbarSearch";
import Image from "next/image";
import Link from "next/link";
import { getProductBrands } from "../_lib/productControllers";
import CartDropDown from "./store/CartDropDown";
import { getCart } from "../_lib/cartControllers";
import { auth } from "../../../auth";
import DropDownUser from "./DropDownUser";

export default async function Navbar() {
  const brands = await getProductBrands();
  const cart: CartItem[] = await getCart("user");

  const session = await auth();
  const isLoggedIn = session?.user?.username;

  return (
    <nav className="w-full text-white bg-violet-900 font-bold">
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
      <div className="flex items-center justify-between px-6 py-2">
        {/* <PiCigaretteThin size={40} /> */}
        <Link title="Home" href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={200}
            height={105}
            className="w-24 h-auto"
          />
        </Link>

        <NavbarSearch />

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              {session?.user?.username}
              <DropDownUser />
            </>
          ) : (
            <Link href={"/login"}>
              <AiOutlineUser size={32} title="Sign In" />
            </Link>
          )}
          <CartDropDown cart={JSON.parse(JSON.stringify(cart))} />
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
