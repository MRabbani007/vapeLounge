import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function DropDownUser() {
  return (
    <div className="group relative">
      <AiOutlineUser size={32} title="Sign Out" />

      <ul className="group-hover:translate-y-0 group-hover:opacity:100 group-hover:visible -translate-y-4 invisible absolute top-full right-0 z-10 bg-zinc-100 text-zinc-900 font-normal rounded-md duration-200">
        <li className="py-2 px-4">
          <Link href={"/orders"}>Orders</Link>
        </li>
        <li className="py-2 px-4">Profile</li>
        <li className="py-2 px-4">
          <Link href={"/settings"}>Settings</Link>
        </li>
        <li className="py-2 px-4">
          <Link href={"/logout"}>Logout</Link>
        </li>
      </ul>
    </div>
  );
}
