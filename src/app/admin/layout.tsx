import React from "react";
import AdminNavbar from "../_components/admin/navbar/AdminNavbar";
import AdminMenu from "../_components/admin/menu/AdminMenu";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="flex items-stretch w-full">
        <AdminMenu />
        <div className="p-2 bg-sky-900 flex-1 w-full flex flex-col gap-2">
          <AdminNavbar />
          {children}
        </div>
      </div>
    </div>
  );
}
