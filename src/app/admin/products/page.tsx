import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import Link from "next/link";
import AdminProductsSearch from "@/app/_components/admin/products/AdminProductsSearch";
import AdminProductsPagination from "@/app/_components/admin/products/AdminProductsPaginnation";
import { searchProducts } from "@/app/_lib/productControllers";
import AdminProductCard from "@/app/_components/admin/products/AdminProductCard";

type Props = {
  searchParams: {
    query: string;
    page: number;
  };
};

export default async function AdminProductsPage({ searchParams }: Props) {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;
  const { count, products } = await searchProducts(query, page);

  return (
    <main className="flex flex-col gap-4 p-4 bg-sky-950 text-zinc-100 rounded-lg">
      <div className="flex items-stretch justify-between gap-4">
        <AdminProductsSearch />
        <Link
          href="/admin/products/add"
          className="py-2 px-4 bg-violet-500 rounded-lg"
        >
          Add New
        </Link>
      </div>
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-center bg-sky-900">
            <td className="p-2 rounded-l-md">Title</td>
            <td className="p-2">Description</td>
            <td className="p-2">Price</td>
            <td className="p-2 hidden sm:table-cell">Created At</td>
            <td className="p-2">Stock</td>
            <td className="p-2 rounded-r-md">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <AdminProductCard
              product={JSON.parse(JSON.stringify(product))}
              key={product.id}
            />
          ))}
        </tbody>
      </table>
      <AdminProductsPagination count={count} />
    </main>
  );
}
