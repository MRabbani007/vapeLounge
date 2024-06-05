"use client";

import Link from "next/link";
import React, { useState } from "react";
import clientPromise from "../_lib/db";

export default function RegisterPage() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  // };

  return (
    <main>
      <form action={"/api/user/register"} className="login-form">
        <h1>Sign Up</h1>
        <div className="field__group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            title="Username"
            placeholder="Username"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="field__group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            title="Password"
            placeholder="Password"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className="field__group">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            title="Confirm Password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" title="Sign In" className="submit__button">
            Sign Up
          </button>{" "}
          or <Link href={"/login"}>Sign In</Link>
        </div>
      </form>
    </main>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("sample_mflix");
//     const movies = await db
//       .collection("movies")
//       .find({})
//       .sort({ metacritic: -1 })
//       .limit(20)
//       .toArray();
//     return {
//       props: { movies: JSON.parse(JSON.stringify(movies)) },
//     };
//   } catch (e) {
//     console.error(e);
//     return { props: { movies: [] } };
//   }
// };
