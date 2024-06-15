import React from "react";
import AdminSearch from "./AdminSearch";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";

export default function AdminNavbar() {
  return (
    <div className="py-4 px-6 flex items-center justify-between bg-zinc-800 text-slate-100 rounded-xl">
      <span>Dashboard</span>
      <div className="flex items-center gap-2">
        <AdminSearch />
        {/* <IoChatbubbleEllipsesOutline size={20} /> */}
        <MdOutlineChat size={25} />
        <MdNotifications size={25} />
        <MdPublic size={25} />
      </div>
    </div>
  );
}
