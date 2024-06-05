import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { PiCigaretteThin, PiShoppingCartLight } from "react-icons/pi";
import NavbarSearch from "./NavbarSearch";
import { PRODUCT_TITLE } from "../_lib/products";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-tr from-zinc-900 to-sky-900 text-white">
      <div className="flex items-center justify-between px-8 py-4">
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
      <div className="flex items-center justify-between px-8 py-2">
        {/* <PiCigaretteThin size={40} /> */}
        <Link title="Home" href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={100} height={70} />
        </Link>

        <NavbarSearch />

        <div className="flex items-center gap-2">
          <Link href={"/login"}>
            <AiOutlineUser size={32} title="Sign In" />
          </Link>
          <Link title="Cart" href={"/cart"} className="flex items-center gap-2">
            <PiShoppingCartLight size={32} />
            <span>
              <u>
                0.00<b>KZT</b>
              </u>
            </span>
          </Link>
        </div>
      </div>
      <ul className="flex items-center justify-center px-8 py-4 font-light gap-8 uppercase">
        <li>
          <Link href={"/store/sale"}>Products on Sale</Link>
        </li>
        <li>
          <Link href={"/store"}>All Products</Link>
        </li>
        {PRODUCT_TITLE.map((item, index) => {
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
