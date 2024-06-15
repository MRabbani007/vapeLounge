import React from "react";
import AdminNavbar from "../_components/admin/navbar/AdminNavbar";
import AdminMenu from "../_components/admin/menu/AdminMenu";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user?.username) {
    redirect("/login");
  }

  return (
    <div className="w-full">
      <div className="flex items-stretch w-full">
        <AdminMenu />
        <div className="p-2 bg-sky-900 text-white flex-1 w-full flex flex-col gap-2">
          <AdminNavbar />
          {children}
        </div>
      </div>
    </div>
  );
}
