import Product from "./dbSchemas/product";
import { revalidatePath } from "next/cache";
import dbConnect from "./mongoose";
import { ITEM_PER_PAGE } from "./utils";

export const getProducts = async (page?: number) => {
  try {
    await dbConnect();

    const pageNum = !page || (!!page && isNaN(page)) ? 1 : page;

    const count = await Product.countDocuments({ visible: true });
    const products = await Product.find({ visible: true })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pageNum - 1));

    return { count, products };
  } catch (err) {
    console.log(err);
    return { count: 0, products: [] };
  }
};

export const searchProducts = async (query?: string, page?: number) => {
  try {
    await dbConnect();

    const pageNum = !page || (!!page && isNaN(page)) ? 1 : page;

    const count = await Product.countDocuments({
      title: { $regex: query, $options: "i" },
    });
    const products = await Product.find({
      title: { $regex: query, $options: "i" },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pageNum - 1));

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

export const getProductByName = async (name: string) => {
  try {
    await dbConnect();
    const product = await Product.findOne({ name });
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const getProductByModel = async (brand: string, model: string) => {
  try {
    await dbConnect();

    const data = await Product.find({ brand, model });
    return Array.isArray(data) ? data : ([] as Product[]);
  } catch (error) {
    console.log("Error");
    return [];
  }
};

export const getProductSale = async () => {
  try {
    await dbConnect();

    const data = await Product.find({ onSale: true });
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log("Error: get products sale");
    return [];
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

export const getProductTypes = async (): Promise<ProductModel[]> => {
  try {
    await dbConnect();

    const models: ProductModel[] = await Product.aggregate([
      { $group: { _id: { brand: "$brand", model: "$model" } } },
      {
        $replaceRoot: { newRoot: "$_id" },
      },
      { $sort: { brand: 1, mode: 1 } },
    ]);

    return Array.isArray(models) ? models : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getProductModels = async (brand: string) => {
  try {
    await dbConnect();

    const data = await Product.distinct("model", { brand });

    return data;
  } catch (error) {
    console.log("Error: Get product models");
    return [];
  }
};

export const getProductBrands = async () => {
  try {
    await dbConnect();

    const data = await Product.distinct("brand", {});

    return data;
  } catch (error) {
    console.log("Error: Get product brands");
    console.log(error);
    return [];
  }
};
