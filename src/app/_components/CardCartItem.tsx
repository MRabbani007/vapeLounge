"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function CardCartItem({ cartItem }: { cartItem: CartItem }) {
  const [quantity, setQuantity] = useState(cartItem.quantity.toString());

  return (
    <div>
      <div>{cartItem.productName}</div>
      <div>
        <div>
          <Image
            src={cartItem.productImage}
            alt="Product"
            width={200}
            height={300}
          />
        </div>
        <div className="flex items-center gap-2">
          <span>Quantity</span>
          <select
            name="quantity"
            id={cartItem.productId}
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
        <div>
          <span>{cartItem.productPrice}</span>
          <span>{cartItem.productCurrency}</span>
        </div>
        <div>
          <span>Total</span>
          <span>{+quantity * cartItem.productPrice}</span>
        </div>
      </div>
    </div>
  );
}
