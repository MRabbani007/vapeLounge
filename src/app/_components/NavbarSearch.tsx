"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function NavbarSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/store/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-1 items-center border-2 border-white rounded-full px-4 mx-6 max-w-[500px]"
    >
      <input
        type="text"
        title="Search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-transparent text-white py-2 outline-none"
      />
      <button type="submit" title="Search">
        <IoIosSearch size={32} />
      </button>
    </form>
  );
}
