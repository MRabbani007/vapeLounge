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
    const data = await request.json();
    const product = data?.product;
    const db = await dbConnect();

    const newProduct = new Product({ ...product });
    const response = await newProduct.save();

    return new NextResponse(JSON.stringify(response));
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  } finally {
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const product = body?.product;
    console.log("api/patch");
    console.log(product);
    const db = await dbConnect();

    const {
      id,
      name,
      title,
      brand,
      model,
      flavor,
      price,
      salePrice,
      onSale,
      qtyAvailable,
      image,
      imageURL,
    } = product;

    const data = await Product.updateOne(
      { id },
      {
        $set: {
          name,
          title,
          brand,
          model,
          flavor,
          price,
          salePrice,
          onSale,
          qtyAvailable,
          image,
          imageURL,
        },
      }
    ).exec();

    console.log(data);

    if (data?.acknowledged === false) {
      return new NextResponse(JSON.stringify({ status: "failed" }));
    }

    return new NextResponse(JSON.stringify({ status: "success" }));
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  } finally {
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const id = body?.id;

    const client = await dbConnect();

    const data = await Product.deleteOne({ id }).exec();

    return new NextResponse(JSON.stringify({ status: "success" }));
  } catch (e) {
    console.log(e);
  } finally {
  }
}
