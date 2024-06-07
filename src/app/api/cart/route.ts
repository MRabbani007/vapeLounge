import Cart from "@/app/_lib/dbSchemas/cart";
import dbConnect from "@/app/_lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // const origin = request?.headers?.get("origin") || "*";
    const client = await dbConnect();

    const data = await Cart.find({});

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
    const cartItem = data?.cartItem;
    const db = await dbConnect();

    console.log(cartItem);

    const newCartItem = new Cart({
      ...cartItem,
      id: crypto.randomUUID(),
      userID: "user",
      addedDate: new Date(),
    });
    const response = await newCartItem.save();

    return new NextResponse(JSON.stringify(response));
  } catch (e) {
    console.log(e);
    // return NextResponse.error();
  } finally {
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const cartItem = body?.cartItem;
    const db = await dbConnect();

    const { id, quantity } = cartItem;

    const data = await Cart.updateOne(
      { id },
      {
        $set: { quantity },
      }
    ).exec();

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

    const data = await Cart.deleteOne({ id }).exec();

    return new NextResponse(JSON.stringify({ status: "success" }));
  } catch (e) {
    console.log(e);
  } finally {
  }
}
