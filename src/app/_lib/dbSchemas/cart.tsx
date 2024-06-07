import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  id: { type: String, required: false, unique: true },
  prodID: { type: String, required: true },
  name: { type: String, required: false, default: "" },
  title: { type: String, required: false, default: "" },
  brand: { type: String, required: false, default: "" },
  model: { type: String, required: false, default: "" },
  flavor: { type: String, required: false, default: "" },
  image: { type: String, required: false, default: "" },
  price: { type: String, required: false, default: 0 },
  quantity: { type: Number, required: false, default: 1 },
  addedDate: { type: Date, required: false, default: new Date() },
});

const Cart = mongoose.models?.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
