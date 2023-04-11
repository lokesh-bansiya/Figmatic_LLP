const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  brand: String,
  name: String,
  weight: String,
  price: Number,
  mrp: Number,
  ImgSrc: String,
  category: String,
  sasta: String,
  packet: String,
  offers: String,
  isavailable: Boolean,
  quantity: Number,
  orderID: String,
});

const OrdereModel = mongoose.model("orderedItems", orderSchema);

module.exports = {
  OrdereModel
};