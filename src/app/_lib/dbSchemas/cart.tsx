import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  id: { type: String, required: false, unique: true },
  name: { type: String, required: false, default: "" },
  title: { type: String, required: false, default: "" },
  brand: { type: String, required: false, default: "" },
  model: { type: String, required: false, default: "" },
  flavor: { type: String, required: false, default: "" },
  image: { type: String, required: false, default: "" },
  price: { type: String, required: false, default: 0 },
  quantity: { type: Number, required: false },
  addedDate: { type: Date, required: false },
});

const Cart = mongoose.models?.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
