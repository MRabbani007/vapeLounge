"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response?.status === 200) {
      alert("Registered");
      // router.push("/login");
    } else {
      alert("Failed to register");
      // router.push("/register");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} name="form_register" className="login-form">
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
            autoFocus
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
          />
        </div>
        <div>
          <button type="submit" title="Sign In" className="submit__button">
            Sign Up
          </button>
          or <Link href={"/login"}>Sign In</Link>
        </div>
      </form>
    </main>
  );
}
