const express = require("express");
const mongoose = require("mongoose");

const customerController = require("./controllers/Customer.js");
const propertyController = require("./controllers/Property.js");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/keys.env" });
}
const PORT = process.env.PORT || 3000;

const app = express();

let allowlist = ["http://localhost:3000"];
let corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.use(express.json());

app.use("/customers", customerController);

app.use("/properties", propertyController);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint does not exist!" });
});

app.listen(PORT, async () => {
  console.log(`Rest-Inn API is up and running on PORT ${PORT}`);

  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
});
