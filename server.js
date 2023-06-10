const express = require("express");
require("dotenv").config();
const connectDB = require("./Config/db_config");
const userRoutes = require("./app/Routes/userRoutes");

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

app.use("/user", userRoutes);

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
