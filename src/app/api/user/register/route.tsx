import User from "@/app/_lib/dbSchemas/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import clientPromise from "@/app/_lib/db";
import dbConnect from "@/app/_lib/mongoose";

export async function POST(request: Request, response: Response) {
  try {
    const client = await dbConnect();

    const temp = await request.json();
    console.log(temp);

    const { username, password, confirm }: Partial<User> = temp;

    console.log(username, password);

    if (!username || !password || !confirm)
      return NextResponse.json({ message: "Missing required data" });

    // const db = client.db("vapeLounge");
    // const collection = db.collection("users");
    // const duplicate = await collection.findOne({ username });

    // console.log(duplicate);
    const duplicate = await User.findOne({ username });

    if (duplicate)
      return NextResponse.json({ message: "Username already exists" });
    else {
      // encrypt password
      // const hashedPwd = await bcrypt.hash(password, 10);

      // const password_hash = createHash('sha256').update(password).digest('hex');

      const data = await User.create({
        id: crypto.randomUUID(),
        username,
        password,
        email: "",
        roles: 2001,
        createDate: new Date(),
        active: false,
        lastSigin: new Date("1900-01-01"),
        refreshToken: "",
        accessToken: "",
      });

      // const cookie = cookies(request, response);
      // cookies.set("username", username);

      return NextResponse.json({ message: "User Registered" });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
