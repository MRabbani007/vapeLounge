import { redirect } from "next/navigation";
import User from "./dbSchemas/user";
import dbConnect from "./mongoose";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs-react";

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await dbConnect();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password.toString(), salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
};

export const updateUser = async (formData: FormData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await dbConnect();

    const updateFields = {
      username: username.toString(),
      email: email.toString(),
      password: password.toString(),
      phone: parseInt(phone.toString()),
      address: address.toString(),
      isAdmin: Boolean(isAdmin.toString()),
      isActive: Boolean(isActive.toString()),
    };

    // Object.keys(updateFields).forEach(
    //   (key) =>
    //     (updateFields[key as keyof ObjectType] === "" || undefined) &&
    //     delete updateFields[key as keyof ObjectType]
    // );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
};

export const deleteUser = async (formData: FormData) => {
  try {
    const { id } = Object.fromEntries(formData);
    await dbConnect();
    await User.deleteOne({ id }).exec();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
};

export const fetchUsers = async (query: string, page: number) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await dbConnect();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id: string) => {
  try {
    await dbConnect();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUser = async (username: string, password: string) => {
  try {
    await dbConnect();

    const user: User | null = await User.findOne({ username, password });
    return user;
  } catch (err) {
    return null;
  }
};

export const register = async (
  username: string,
  password: string,
  confirm: string
) => {
  try {
    if (!username || password !== confirm)
      throw new Error("Provide Credentials");

    await dbConnect();

    const foundUser = await User.findOne({ username });

    if (foundUser?.id) {
      throw new Error("Username already registered");
    }

    const data = await User.create({
      id: crypto.randomUUID(),
      username,
      password,
    });

    return { status: "ok", message: "success" };
  } catch (err) {
    console.log(err);
    throw new Error("Register Error");
  }
};
