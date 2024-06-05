import mongoose from "mongoose";

interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  roles: { User?: number; Admin?: number };
  createDate: Date;
  lastSigin: Date;
  active: Boolean;
  accessToken: String;
  refreshToken: String;
}

const userSchema = new mongoose.Schema({
  id: { type: String, required: false },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: false },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Admin: Number,
  },
  createDate: { type: Date, required: false },
  lastSigin: { type: Date, required: false },
  active: { type: Boolean, required: false },
  accessToken: { type: String, required: false },
  refreshToken: { type: String, required: false },
});

const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);

export default User;
