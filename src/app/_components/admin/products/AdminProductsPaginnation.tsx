"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function AdminProductsPagination({ count }: { count: number }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = parseInt(searchParams.get("page") || "1");

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < +count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (page - 1).toString())
      : params.set("page", (page + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-between">
      <button
        className="py-2 px-1 border-1px border-slate-100 rounded-sm"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="py-2 px-1 border-1px border-slate-100 rounded-sm"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
}
