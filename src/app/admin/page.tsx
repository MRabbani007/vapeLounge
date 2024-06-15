import React from "react";
import Transactions from "@/app/_components/admin/dashboard/transactions/Transactions";
import Chart from "@/app/_components/admin/dashboard/chart/Chart";
import styles from "@/app/_components/admin/dashboard/dashboard.module.css";
import { cards } from "../_lib/data";
import Card from "../_components/admin/dashboard/card/Card";

export default function AdminPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
}
