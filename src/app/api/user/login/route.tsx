import User from "@/app/_lib/dbSchemas/user";
import dbConnect from "@/app/_lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  try {
    const client = await dbConnect();

    const { username, password }: Partial<User> = await request.json();

    if (!username || !password)
      return NextResponse.json({ message: "Provide username and password" });

    const foundUser = await User.findOne({ username });

    if (!foundUser) return NextResponse.json({ message: "Wrong details" });

    if (foundUser.password === password) {
      return NextResponse.json({ message: "Success" });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
