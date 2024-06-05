import Product from "./dbSchemas/product";
import { revalidatePath } from "next/cache";
import dbConnect from "./mongoose";
import { ITEM_PER_PAGE } from "./utils";

export const getProducts = async (query: string, page: number) => {
  try {
    await dbConnect();
    const count = await Product.countDocuments({
      title: { $regex: query, $options: "i" },
    });
    const products = await Product.find({
      title: { $regex: query, $options: "i" },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    return { count: 0, products: [] };
  }
};

export const getProductById = async (id: string) => {
  try {
    await dbConnect();
    const product = await Product.findOne({ id });
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await dbConnect();
    await Product.deleteOne({ id });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/admin/dashboard/products");
};
