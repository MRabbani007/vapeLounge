import mongoose from "mongoose";

interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  address: string;
  roles: { User?: number; Admin?: number };
  lastSignin: Date;
  active: Boolean;
  accessToken: String;
  refreshToken: String;
  createdAt: Date;
}

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 3, max: 24 },
  email: { type: String, required: false, default: "" },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Admin: Number,
  },
  phone: { type: String, required: false, default: "" },
  address: { type: String, required: false, default: "" },
  lastSignin: { type: Date, required: false, default: "" },
  active: { type: Boolean, required: false, default: false },
  accessToken: { type: String, required: false, default: "" },
  refreshToken: { type: String, required: false, default: "" },
  createdAt: { type: Date, required: false, default: new Date() },
});

const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);

export default User;
