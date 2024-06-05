import Link from "next/link";
import React from "react";
import styles from "./menu.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import AdminLogout from "./AdminLogout";

export default function AdminMenu() {
  return (
    <div className="bg-sky-950 text-slate-100 py-4 px-2 font-light flex flex-col items-start gap-2">
      <Link href={"/admin"} className="flex items-center gap-2 px-2">
        <FaUserCircle size={28} />
        <span>Admin</span>
      </Link>
      <div className={styles.link_container}>
        <h2>Pages</h2>
        <ul>
          <li>
            <Link href={"/admin"} className={styles.link}>
              <MdDashboard size={25} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href={"/admin/users"} className={styles.link}>
              <MdSupervisedUserCircle size={25} />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link href={"/admin/products"} className={styles.link}>
              <MdShoppingBag size={25} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link href={"/admin/transactions"} className={styles.link}>
              <MdAttachMoney size={25} />
              <span>Transactions</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.link_container}>
        <h2>Analytics</h2>
        <ul>
          <li>
            <Link href={"/admin"} className={styles.link}>
              <MdWork size={25} />
              <span>Revenue</span>
            </Link>
          </li>
          <li>
            <Link href={"/admin"} className={styles.link}>
              <MdAnalytics size={25} />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link href={"/admin"} className={styles.link}>
              <MdPeople size={25} />
              <span>Teams</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.link_container}>
        <h2>User</h2>
        <ul>
          <li>
            <Link href={"/admin"} className={styles.link}>
              <MdOutlineSettings size={25} />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href={"/admin"} className={styles.link}>
              <MdHelpCenter size={25} />
              <span>Help</span>
            </Link>
          </li>
        </ul>
        <AdminLogout />
      </div>
    </div>
  );
}
