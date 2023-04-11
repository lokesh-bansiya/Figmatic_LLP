const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  title: String,
  company: String,
  price: String,
  img: String,
  category: String,
  sub_category: String,
});

const ProductModel = mongoose.model("products", productsSchema);

module.exports = {
  ProductModel
};