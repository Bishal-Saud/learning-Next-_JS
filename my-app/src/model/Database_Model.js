import mongoose from "mongoose";

const DbModel = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
});

export const Products =
  mongoose.models.NextJS || mongoose.model("NextJS", DbModel);
//module.exports = Products;
