import { Mongoose } from "mongoose";
import NextAuth, { DefaultSession, DefaultUser, AdapterUser } from "next-auth";

/* eslint-disable no-var */

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}
