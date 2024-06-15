import React from "react";
import { MdLogout } from "react-icons/md";
import styles from "./menu.module.css";
import { signOut } from "../../../../../auth";

export default function AdminLogout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
      className={styles.link_container}
    >
      <button className={styles.link} title="Logout">
        <MdLogout size={28} />
        <span>Logout</span>
      </button>
    </form>
  );
}
