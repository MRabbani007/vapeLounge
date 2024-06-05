import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI as string;
const MONGODB_DB: string = process.env.MONGODB_DB as string;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// ?retryWrites=true&w=majority&appName=vapeLounge

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(`${MONGODB_URI}/${MONGODB_DB}`, {
        retryWrites: true,
        appName: "vapeLounge",
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
