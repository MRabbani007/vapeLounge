import React from "react";
import CardCartItem from "../_components/CardCartItem";

export default function CartPage() {
  const cart: CartItem[] = [];

  return (
    <main>
      <h1>Cart</h1>
      {cart.length !== 0 ? (
        cart.map((item, index) => {
          return <CardCartItem cartItem={item} key={index} />;
        })
      ) : (
        <p>No items in cart</p>
      )}
    </main>
  );
}
