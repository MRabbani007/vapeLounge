import AdminFormProductAdd from "@/app/_components/admin/products/AdminFormProductAdd";
import Image from "next/image";
import React from "react";

export default function AdminProdAddPage() {
  return (
    <main className="text-zinc-50">
      <h1>Add New Products</h1>
      <AdminFormProductAdd />
    </main>
  );
}
