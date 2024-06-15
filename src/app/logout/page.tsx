import React from "react";
import { signOut } from "../../../auth";

export default function LogoutPage() {
  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="login-form"
      >
        <h1>Sign Out</h1>
        <button type="submit" title="Sign Out" className="submit__button">
          Sign Out
        </button>
      </form>
    </main>
  );
}
