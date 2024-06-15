import { fetchUser, updateUser } from "@/app/_lib/userControllers";
import styles from "../users.module.css";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function SingleUserPage({ params }: Props) {
  const user: Partial<User> = await fetchUser(params?.id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user?.img || "/noavatar.png"} alt="" fill />
        </div>
        {user?.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone?.toString()}
          />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <input type="phone" placeholder="phone" name="phone" />
          <input type="checkbox" name="isAdmin" id="isAdmin" />
          <label htmlFor="isAdmin">Admin</label>
          <input type="checkbox" name="isActive" id="isActive" />
          <label htmlFor="isActive">Admin</label>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
