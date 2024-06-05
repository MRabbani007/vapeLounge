import React from "react";

export default function CardTitle({ title }: { title: string }) {
  return (
    <div className="relative flex items-center gap-4 w-full">
      <span className="border-b-4 border-blue-700 flex-1 w-full rounded-full"></span>
      <span className="text-blue-900 font-semibold text-xl uppercase">
        {title}
      </span>
      <span className="border-b-4 border-blue-700 flex-1 w-full rounded-full"></span>
    </div>
  );
}
