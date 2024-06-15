import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { type DefaultSession, type DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    user: DefaultSession["user"] & {
      id: string;
      role: number;
      username: string | null | undefined;
      userID: string;
    };
  }

  interface User extends DefaultUser {
    id: string;
    username?: string | null | undefined;
    userID?: string | null | undefined;
    role: number;
  }
}

declare module "@auth/core/adapters" {
  export interface AdapterUser extends BaseAdapterUser {
    // Add your additional properties here:
    username: string | null | undefined;
    id: string | null | undefined;
  }
}

declare module "next-auth/jwt" {
  export interface JWT {
    id: string | null | undefined;
    username: string | null | undefined;
    role: number;
  }
}
