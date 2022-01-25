const express = require("express");
require("dotenv").config({ path: "config/keys.env" });
const customerController = require("./controllers/Customer.js");

const app = express();

app.use(express.json());

//customers route
app.use("/customers", customerController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rest-Inn API is up and running on PORT ${PORT}`);
});
