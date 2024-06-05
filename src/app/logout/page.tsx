"use client";

import React from "react";

export default function LogoutPage() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign Out</h1>
        <button type="submit" title="Sign Out" className="submit__button">
          Sign Out
        </button>
      </form>
    </main>
  );
}
