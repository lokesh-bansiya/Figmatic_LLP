const express = require("express");
const { CalculatorModel } = require("../models/Calculator.model");
const calculatorRouter = express.Router();
 

// localhost:6292/calculator?page=1&limit=2
calculatorRouter.get("/", async (req, res) => {
  let {page, limit} = req.query;
  let count = 0;
  try {
    const products = await CalculatorModel.find().skip((page-1) * limit).limit(limit)
    const data = await CalculatorModel.find();
    count = data.length;
    const sum = data.reduce((sum, el) => {
        return sum + el.price[el.designCount] + el.price[el.integrationCount] + el.price[el.interactionsCount]
    }, 0)
    console.log(sum)
    res.send({products, count, sum});
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find data!" });
  }
});


// get by ID
calculatorRouter.get("/getById/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const productItem = await CalculatorModel.findById({ _id: id });
    res.send(productItem);
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find data item by given id!" });
  }
});

calculatorRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;

  try {
    await CalculatorModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ Message: "data Updated!" });
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "data can't be updated!" });
  }
});

// Insert many
calculatorRouter.post("/addmany", async (req, res) => {
  const payload = req.body;
  try {
    await CalculatorModel.insertMany(payload);
    res.send({ Message: "All data added successfully!" });
    console.log(product);
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "All data can't be added!" });
  }
});

// All product delete
calculatorRouter.delete("/deletemany", async (req, res) => {
  try {
    await CalculatorModel.deleteMany();
    res.send({ Message: "All data deleted!" });
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "All data can not be deleted!" });
  }
});

calculatorRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const product = new CalculatorModel(payload);
    await product.save();
    res.send({ Message: "data added successfully!" });
    console.log(product);
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "data can not be added!" });
  }
});

calculatorRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await CalculatorModel.findByIdAndDelete({ _id: id });
    res.send("data deleted Successfully!");
  } catch (error) {
    console.log(err);
    res.send({ msg: "data can't be deleted!" });
  }
});

module.exports = { calculatorRouter };
