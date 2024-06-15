"use server";

import Link from "next/link";
import { auth, signIn } from "../../../auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

const authenticate = async (formData: FormData) => {
  "use server";
  try {
    const { username, password } = Object.fromEntries(formData);

    const res = await signIn("credentials", {
      username,
      password,
      redirectTo: "/",
    });
  } catch (error: any) {
    if (error.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    } else if (isRedirectError(error)) {
      throw error;
    } else {
      console.log("Sign in error");
    }
  }
};

export default async function LoginPage() {
  const session = await auth();

  if (session?.user?.username) {
    redirect("/logout");
  }

  return (
    <main>
      <form action={authenticate} className="login-form">
        <h1>Sign In</h1>
        <div className="field__group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            title="Username"
            placeholder="Username"
            required
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
          <input id="remember" name="remember" type="checkbox" />
          <label htmlFor="remember" className="remember">
            Remember Me
          </label>
        </div>
      </form>
    </main>
  );
}
