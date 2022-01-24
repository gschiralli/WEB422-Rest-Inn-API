const { Console } = require("console");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Up and running" });
});

app.listen(PORT, () => {
  console.log(`Rest-Inn API is up and running on PORT ${PORT}`);
});
