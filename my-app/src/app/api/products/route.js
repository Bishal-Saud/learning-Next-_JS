import { Products } from "@/model/Database_Model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("SuccessFully Connected");
    data = await Products.find();
  } catch (error) {
    return error.message;
  }
  return NextResponse.json({ result: "Working", data: data });
}

export async function POST(request) {
  const payload = await request.json();

  await mongoose.connect(process.env.DB_URL);
  const data = new Products({
    name: payload.name,
    age: payload.age,
    email: payload.email,
  });

  const result = await data.save();
  return NextResponse.json({ success: true, result });
}
