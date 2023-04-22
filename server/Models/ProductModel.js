
const dbConn = require("../Dao/database");
const mongoose = dbConn.getDB();
const { Schema } = mongoose;

const ProductSchema = new Schema({
  type: String,
  brand: String,
  brandNickName: String,
  name: String,
  price: Number,
  image: String,
  featured: Boolean
});
const ProductsModel = mongoose.model("products", ProductSchema);

// const next = new ProductsModel({
//   type: "handbag",
//   brand: "gucci",
//   brandNickName: "null",
//   name: "Classic Handbag",
//   price: 1750.99,
//   image: "testImage2.jpg",
//   featured: true
// });
// next.save();

module.exports.Products = ProductsModel;

module.exports.findAll = async () => {
  return await ProductsModel.find().exec();
};

module.exports.findByFeatured = async () => {
  return await ProductsModel.find({ featured: true }).exec();
};
