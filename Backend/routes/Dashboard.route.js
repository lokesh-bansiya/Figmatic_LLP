const express = require("express");
const { DashboardModel } = require("../models/Dashboard");
const dashboardRouter = express.Router();

// localhost:6292/dashboard?page=1&limit=2&status=DRAFT
dashboardRouter.get("/", async (req, res) => {
    let {tag, status, page, limit} = req.query;
    let count = 0;
  try {
    if(status){
        const products = await DashboardModel.find({status: status}).skip((page-1) * limit).limit(limit);
        const data = await DashboardModel.find({status: status});
        count = data.length;
        res.send({products,count});
    }
    else if(tag){
        const products = await DashboardModel.find({tag: tag}).skip((page-1) * limit).limit(limit);
        const data = await DashboardModel.find({tag: tag});
        count = data.length;
        res.send({products,count});
    }
    else{
        const products = await DashboardModel.find().skip((page-1) * limit).limit(limit);
        const data = await DashboardModel.find();
        count = data.length;
        res.send({products,count});
    }
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find data!" });
  }
});


// get by ID
dashboardRouter.get("/getById/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const productItem = await DashboardModel.findById({ _id: id });
    res.send(productItem);
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find data item by given id!" });
  }
});


dashboardRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;

  try {
    await DashboardModel.findByIdAndUpdate({ _id: id }, payload);
    console.log(payload);
    res.send({ Message: "data Updated!" });
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "data can't be updated!" });
  }
});


// Insert many
dashboardRouter.post("/addmany", async (req, res) => {
  const payload = req.body;
  try {
    await DashboardModel.insertMany(payload);
    res.send({ Message: "All data added successfully!" });
    console.log(product);
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "All data can't be added!" });
  }
});

// All product delete
dashboardRouter.delete("/deletemany", async (req, res) => {
  try {
    await DashboardModel.deleteMany();
    res.send({ Message: "All data deleted!" });
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "All data can not be deleted!" });
  }
});


dashboardRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const product = new DashboardModel(payload);
    await product.save();
    res.send({ Message: "data added successfully!" });
    console.log(product);
  } 
  catch (err) {
    console.log(err);
    res.send({ Message: "data can not be added!" });
  }
});


dashboardRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await DashboardModel.findByIdAndDelete({ _id: id });
    res.send("data deleted Successfully!");
  } catch (error) {
    console.log(err);
    res.send({ msg: "data can't be deleted!" });
  }
});

module.exports = { dashboardRouter };