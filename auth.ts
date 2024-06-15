import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs-react";
import { getUser } from "@/app/_lib/userControllers";
import { authConfig } from "./authconfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  trustHost: true,
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        // email: {},
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, request): Promise<any> => {
        let user = null;

        // logic to salt and hash password
        // const salt = bcrypt.genSaltSync(10);
        // const pwHash = bcrypt.hashSync(credentials.password as string, salt);
        // console.log(pwHash);
        // logic to verify if user exists
        user = await getUser(
          credentials.username as string,
          credentials.password as string
        );

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }
        // console.log("authorize", user);
        // return user object with the their profile data
        return user;
      },
    }),
  ],
});
