import React, { FormEvent } from "react";
import styles from "./users.module.css";
import { deleteUser, fetchUsers } from "@/app/_lib/userControllers";
import Link from "next/link";
import Image from "next/image";
import FormDeleteUser from "@/app/_components/admin/users/FormDeleteUser";

type Props = {
  searchParams: {
    query: string;
    page: number;
  };
};

export default async function AdminUsersPage({ searchParams }: Props) {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(query, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* <Search placeholder="Search for a user..." /> */}
        <Link href="/admin/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user?.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user?.username}
                </div>
              </td>
              <td>{user?.email}</td>
              <td>{user?.createdAt?.toString().slice(4, 16)}</td>
              <td>{user?.isAdmin ? "Admin" : "Client"}</td>
              <td>{user?.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user?.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <FormDeleteUser id={user?.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  );
}
