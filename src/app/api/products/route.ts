import clientPromise from "@/app/_lib/db";
import Product from "@/app/_lib/dbSchemas/product";
import dbConnect from "@/app/_lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // const origin = request?.headers?.get("origin") || "*";
    const client = await dbConnect();

    const data = await Product.find({});

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

export async function POST(request: Request) {
  try {
    const product = await request.json();

    const db = await dbConnect();

    const newProduct = new Product({ ...product });
    const data = await newProduct.save();

    console.log(data);
    return new NextResponse(JSON.stringify(data));
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  } finally {
  }
}

export async function PATCH(request: Request) {
  try {
    const product = await request.json();

    const db = await dbConnect();

    const { id, name, title, brand, model, flavor, price, quantity } = product;

    const data = await Product.updateOne(
      { id },
      { $set: name, title, brand, model, flavor, price, quantity }
    ).exec();

    return new NextResponse(JSON.stringify({ status: "success" }));
  } catch (e) {
    console.log(e);
  } finally {
  }
}

export async function DELETE(request: Request) {
  try {
    const action = await request.json();
    const id = action.payload;

    const client = await clientPromise;

    const data = await Product.deleteOne({ id }).exec();

    return new NextResponse(JSON.stringify({ status: "success" }));
  } catch (e) {
    console.log(e);
  } finally {
  }
}
