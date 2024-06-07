import Cart from "./dbSchemas/cart";

export const getCart = async (username: string) => {
  try {
    const data = await Cart.find({});

    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [];
  }
};

export const addToCart = async (userID: string, cartItem: any) => {
  try {
    const newCartItem = {
      userID: "user",
      id: crypto.randomUUID(),
      prodID: cartItem.prodID,
      name: cartItem.name,
      image: cartItem.image,
      price: cartItem.price,
      quantity: cartItem.quantity,
    };

    const data = await Cart.create(newCartItem);

    if (data.acknowledged === true) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const removeCartItem = async (itemID: string) => {
  try {
    const data = await Cart.deleteOne({ id: itemID });
    return data?.acknowledged || false;
  } catch (e) {
    return false;
  }
};
