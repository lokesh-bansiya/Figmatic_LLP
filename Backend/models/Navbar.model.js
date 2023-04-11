const mongoose = require("mongoose");

const navbarSchema = mongoose.Schema({
  name: String,
  item: Array
});

const NavbarModel = mongoose.model("navItem", navbarSchema);

module.exports = {
  NavbarModel
};