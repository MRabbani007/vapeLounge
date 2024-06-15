"use client";

import { addUser } from "@/app/_lib/userControllers";
import styles from "./addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <input type="checkbox" name="isAdmin" id="isAdmin" />
        <label htmlFor="isAdmin">Admin</label>
        <input type="checkbox" name="isActive" id="isActive" />
        <label htmlFor="isActive">Active</label>
        <textarea
          name="address"
          id="address"
          rows={10}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
