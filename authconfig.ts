import type { Account, NextAuthConfig, Profile, Session } from "next-auth";
import { AdapterSession } from "next-auth/adapters";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { NextRequest } from "next/server";

type Params = {
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
};

type NewUser = Partial<AdapterUser> & {
  username: string;
};

export const authConfig = {
  pages: {
    signIn: "/login", // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks

  // params: { user: User | AdapterUser; account: Account | null; profile?: Profile | undefined; email?: { verificationRequest?: boolean | undefined; } | undefined; credentials?: Record<...> | undefined; }
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      // used to control if user can signin, after sending email verification (check isVerified) //or check if user is blocked...
      // console.log(user, account, profile, email, credentials);
      // debugger;
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
        // return Promise.resolve(true);
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    jwt: async ({ token, user, account, profile }) => {
      // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }

      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.id;
        token.username = user?.username;
        // token.roles = user.roles;
      }
      return token;
    },
    session: async ({ session, user, token }) => {
      // session: async (session, user) => { return Promise.resolve(session) },
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;
      session.user.username = token?.username || null;
      // session.user.email = user?.email || "";
      // session.user.roles = token.roles;

      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      // use to redirect user after login
      // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
      // Allows relative callback URLs
      if (url.startsWith("/")) {
        return baseUrl + url;
      }
      if (new URL(url).origin === baseUrl) {
        // Allows callback URLs on the same origin
        return url;
      }
      return baseUrl;
    },
    authorized: ({
      auth,
      request,
    }: {
      auth: Session | null;
      request: NextRequest;
    }) => {
      console.log("authorized", auth);
      const isLoggedIn = auth?.user;
      const isOnAdmin = request.nextUrl.pathname.includes("/admin");
      if (isOnAdmin) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/admin", request.nextUrl));
      }
      return true;
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    // events: {},
  },
  // providers added to satisfy NextAuthConfig
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
