import React from "react";
import { MdLogout } from "react-icons/md";

export default function AdminLogout() {
  return (
    <form
      action={async () => {
        "use server";
        () => {};
      }}
    >
      <button className="flex items-center gap-2">
        <MdLogout size={28} />
        <span>Logout</span>
      </button>
    </form>
  );
}
