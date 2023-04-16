const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
