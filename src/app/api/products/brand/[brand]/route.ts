import Product from "@/app/_lib/dbSchemas/product";
import dbConnect from "@/app/_lib/mongoose";
import { NextResponse } from "next/server";

type Props = {
  params: {
    brand: string;
  };
};

export async function GET(request: Request, context: Props) {
  try {
    const { params } = context;
    const { brand } = params;
    // const origin = request?.headers?.get("origin") || "*";

    // const { searchParams } = new URL(request.url);
    // const brand = searchParams.get("brand");

    const client = await dbConnect();

    const data = await Product.find({
      brand: { $regex: brand, $options: "i" },
    });

    return new NextResponse(JSON.stringify(data), {
      // headers: {
      //   "Access-Control-Allow-Origin": origin || "*",
      //   "Content-Type": "application/json",
      // },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  } finally {
  }
}
