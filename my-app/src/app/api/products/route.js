import { Products } from "@/model/Database_Model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(process.env.DB_URL);
  console.log("SuccessFully Connected");
  const data = await Products.find();
  //   console.log("data", data);
  return NextResponse.json({ result: "Working", data: data });
}
