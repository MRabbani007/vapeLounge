"use client";

import React, { FormEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function AdminSearch() {
  const [search, setSearch] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center py-1 px-2 rounded-xl border-2 border-slate-100"
    >
      <input
        type="text"
        id="admin_search"
        name="admin_search"
        placeholder="Search"
        title="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" bg-transparent flex-1"
      />
      <button type="submit">
        <IoIosSearch size={25} />
      </button>
    </form>
  );
}
