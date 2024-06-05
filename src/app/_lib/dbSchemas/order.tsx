import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  id: { type: String, required: false, unique: true },
  products: [
    {
      prodID: { type: String },
      name: { type: String, required: false, default: "" },
      image: { type: String, required: false, default: "" },
      quantity: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      deliveryDate: { type: Date, required: false },
      deliveryStatus: { type: Date, required: false, default: false },
    },
  ],
  createDate: { type: Date, required: false, default: new Date() },
  completed: { type: Boolean, required: false, default: false },
});

const Order = mongoose.models?.Order || mongoose.model("Order", orderSchema);

export default Order;
