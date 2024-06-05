import Product from "@/app/_lib/dbSchemas/product";
import dbConnect from "@/app/_lib/mongoose";
import { NextResponse } from "next/server";

type Props = {
  params: {
    model: string;
  };
};

export async function GET(request: Request, { params: { model } }: Props) {
  try {
    // const origin = request?.headers?.get("origin") || "*";
    // const { searchParams } = new URL(request.url);
    // const brand = searchParams.get("brand");
    // const model = searchParams.get("model");

    const client = await dbConnect();

    // console.log(brand, model);

    const data = await Product.find({
      model: { $regex: model, $options: "i" },
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
