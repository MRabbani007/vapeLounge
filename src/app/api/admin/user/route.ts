import User from "@/app/_lib/dbSchemas/user";
import dbConnect from "@/app/_lib/mongoose";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const id = body?.id;

    const client = await dbConnect();

    const data = await User.deleteOne({ id }).exec();

    return new NextResponse(JSON.stringify({ status: "success" }));
  } catch (e) {
    console.log(e);
    return NextResponse.error()
  } finally {
  }
}