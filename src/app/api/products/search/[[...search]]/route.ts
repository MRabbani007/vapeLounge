import Product from "@/app/_lib/dbSchemas/product";
import dbConnect from "@/app/_lib/mongoose";
import { NextResponse } from "next/server";

type Props = {
  params: {
    name: string;
  };
};

export async function GET(request: Request, context: Props) {
  try {
    const name = context.params?.name || "";
    const temp = request.url;
    const uri = new URL(temp);

    console.log(uri);
    console.log(temp);
    console.log(context);
    const client = await dbConnect();

    const data = await Product.find({ name: { $regex: name } });

    return new NextResponse(JSON.stringify(data));
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  } finally {
  }
}
