import React from "react";
import Menu from "../_components/Menu";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4 w-full h-full">
      <Menu />
      {children}
    </div>
  );
}
