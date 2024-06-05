"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleRemember = () => {};

  return (
    <main>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign In</h1>
        <div className="field__group">
          <label htmlFor="user">Username</label>
          <input
            id="user"
            name="user"
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
        <Link href={"/forgot"} className="forgot__password">
          Forgot password?
        </Link>
        <div>
          <button type="submit" title="Sign In" className="submit__button">
            Sign In
          </button>{" "}
          or <Link href={"/register"}>Register</Link>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember" className="remember">
            Remember Me
          </label>
        </div>
      </form>
    </main>
  );
}
