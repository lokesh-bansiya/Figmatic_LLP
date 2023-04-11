const mongoose = require("mongoose");

const dashboardSchema = mongoose.Schema({
    img: String,
    status: String,
    title: String,
    lesson: Number,
    minute: Number,
    last_update: String,
    tag: Array
});

const DashboardModel = mongoose.model("dashboardData", dashboardSchema);

module.exports = {
    DashboardModel
};