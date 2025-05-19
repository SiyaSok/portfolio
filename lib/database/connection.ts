/** @format */

import mongoose from "mongoose";

let connected = false;

const connectDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Connected to Mongoose");
    return;
  }

  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoURI);
    connected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
