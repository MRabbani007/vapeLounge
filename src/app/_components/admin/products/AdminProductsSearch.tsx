"use client";

import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function AdminProductsSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (e.target.value) {
      e.target.value.length > 2 && params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex items-center gap-2 p-2 h-full rounded-lg border-[1px] border-zinc-100">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none border-none"
        onChange={handleSearch}
      />
      <MdSearch size={25} />
    </div>
  );
}
