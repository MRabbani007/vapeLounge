"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function CardCartItem({ cartItem }: { cartItem: CartItem }) {
  const [quantity, setQuantity] = useState(cartItem.quantity.toString());

  const handleUpdate = async () => {
    const newCartItem = { id: cartItem.id, quantity };
    const response = await fetch("/api/cart", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItem: newCartItem }),
    });
    alert("Quantity Updated");
  };

  const handleRemove = async () => {
    const newCartItem = { id: cartItem.id, quantity };
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: cartItem.id }),
    });
    alert("Item Removed");
  };

  return (
    <article className="flex items-stretch gap-4">
      <div className="w-32 h-auto">
        <Image src={cartItem.image} alt="Product" width={200} height={300} />
      </div>
      <div className="flex flex-col gap-2">
        <p>{cartItem.name}</p>
        <div className="flex items-center gap-2">
          <span>Quantity</span>
          <select
            name="quantity"
            id={cartItem.prodID}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span>{cartItem.price}</span>
          <span>KZT</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Total</span>
          <span>{+quantity * cartItem.price}</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleUpdate()}
            className="p-2 bg-green-600 text-white rounded-md"
          >
            Update
          </button>
          <button
            onClick={() => handleRemove()}
            className="p-2 bg-red-600 text-white rounded-md"
          >
            Remove Item
          </button>
        </div>
      </div>
    </article>
  );
}
