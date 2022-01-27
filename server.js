const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "config/keys.env" });
const customerController = require("./controllers/Customer.js");

const app = express();

app.use(express.json());

app.use("/customers", customerController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Rest-Inn API is up and running on PORT ${PORT}`);

  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
});
