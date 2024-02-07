import { Products } from "@/model/Database_Model";
import mongoose from "mongoose";

const { NextResponse } = require("next/server");

export async function PUT(request, response) {
  const userID = response.params.employeeID;
  const filter = { _id: userID };
  const payload = await request.json();
  const user = await Products.findByIdAndUpdate(filter, payload);

  return NextResponse.json(
    { result: "Ok put request working", user, success: true },
    { status: 200 }
  );
}

export async function GET(req, res) {
  await mongoose.connect(process.env.DB_URL);
  const employeeID = res.params.employeeID;
  const filter = { _id: employeeID };
  const user = await Products.findById(filter);

  return NextResponse.json(
    { result: "Got it", user, success: true },
    { status: 200 }
  );
}

export async function DELETE(req, res) {
  await mongoose.connect(process.env.DB_URL);
  const employeeID = res.params.employeeID;
  const filter = { _id: employeeID };
  const user = await Products.findByIdAndDelete(filter);

  return NextResponse.json(
    { message: "User deleted Successfully", success: true },
    { status: 200 }
  );
}
