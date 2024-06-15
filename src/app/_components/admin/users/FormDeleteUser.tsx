import { deleteUser } from "@/app/_lib/userControllers";
import React, { FormEvent } from "react";
import styles from "./users.module.css";

export default function FormDeleteUser({ id }: { id: string }) {
  // const handleDelete = async (event: FormEvent<HTMLFormElement>) => {
  //   const response = await fetch("/api/admin/user", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id }),
  //   });
  // };

  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />
      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
    </form>
  );
}
