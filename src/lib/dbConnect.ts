import mongoose from "mongoose";
import { Monofett } from "next/font/google";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected =  db.connections[0].readyState;
    console.log("DB connected Succesfully")
  } catch (error) {
    console.log("DB connecction failed",error);
    process.exit(1);
  }
}
export default dbConnect;
