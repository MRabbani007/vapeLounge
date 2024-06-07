import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: false, default: "" },
  title: { type: String, required: false, default: "" },
  brand: { type: String, required: false, default: "" },
  model: { type: String, required: false, default: "" },
  flavor: { type: String, required: false, default: "" },
  imageURL: { type: String, required: false, default: "" },
  image: { type: String, required: false, default: "" },
  price: { type: Number, required: false, default: 0 },
  salePrice: { type: Number, required: false, default: 0 },
  onSale: { type: Boolean, required: false, default: false },
  qtyAvailable: { type: Number, required: false, default: 0 },
  qtySold: { type: Number, required: false, default: 0 },
  visible: { type: Boolean, required: false, default: true },
  createDate: { type: Date, required: false, default: new Date() },
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);

export default Product;
