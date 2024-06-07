import React from "react";
import CardCartItem from "../_components/CardCartItem";
import { getCart } from "../_lib/cartControllers";

export default async function CartPage() {
  const cart: CartItem[] = await getCart("user");

  const items = cart.reduce((acc, curr) => (acc += curr.quantity), 0);
  const cartTotal = cart.reduce(
    (acc, curr) => (acc += curr.quantity * curr.price),
    0
  );

  return (
    <main className="">
      <h1>Cart</h1>
      <div className="flex flex-wrap items-start gap-4">
        <div className="max-w-[1024px] mx-auto flex flex-1 flex-col gap-4 ">
          {cart.length !== 0 ? (
            cart.map((item, index) => {
              return (
                <CardCartItem
                  cartItem={JSON.parse(JSON.stringify(item))}
                  key={index}
                />
              );
            })
          ) : (
            <p>No items in cart</p>
          )}
        </div>
        <div className="border-2 border-zinc-500 rounded-md p-4 flex flex-col gap-2">
          <p className="text-center uppercase font-semibold">Summary</p>
          <p className="flex items-center justify-between gap-4">
            <span>Items</span>
            <span>{items}</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span>Total</span>
            <span>{cartTotal}</span>
          </p>
          <button className="py-2 px-4 rounded-md bg-yellow-400 text-white">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
