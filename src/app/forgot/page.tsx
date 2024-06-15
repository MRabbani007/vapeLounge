import React, { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  // const [email, setEmail] = useState("");

  return (
    <main>
      <form className="login-form">
        <h1>Forgot Password</h1>
        <div className="flex items-center gap-2">
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            name="email"
            type="email"
            title="Email"
            placeholder="Account Email"
            className="field__input"
          />
        </div>
        <p>
          We will send a link to reset the password of the account linked to
          this email
        </p>
        <button type="submit" className="submit__button">
          Submit
        </button>
      </form>
    </main>
  );
}
