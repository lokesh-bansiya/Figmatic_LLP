const mongoose = require("mongoose");

const calculatorSchema = mongoose.Schema({
    sNo: Number,
    page: String,
    design: Array,
    interactions: Array,
    integration: Array,
    price: Array,
    designCount: Number,
    interactionsCount: Number,
    integrationCount: Number
});

const CalculatorModel = mongoose.model("calculatorData", calculatorSchema);

module.exports = {
  CalculatorModel
};