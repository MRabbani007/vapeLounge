import React from "react";
import { MdLogout } from "react-icons/md";
import styles from "./menu.module.css";

export default function AdminLogout() {
  return (
    <form
      action={async () => {
        "use server";
        () => {};
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
