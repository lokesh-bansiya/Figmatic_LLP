const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { calculatorRouter } = require("./routes/Calculator.route");
const { dashboardRouter } = require("./routes/Dashboard.route");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.get("/", (req,res) => {
    res.send({Message: "Welcome to Awesome-Products Backend"});
});

app.use("/calculator", calculatorRouter);
app.use("/dashboard", dashboardRouter);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to the Database of AwesomeProducts");
        console.log(`Server is running...`);
    }
    catch (err) {
        console.log(err);
        console.log("Connection Failed!");
    }
});