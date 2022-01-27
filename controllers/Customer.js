const express = require("express");
const router = express.Router();
const customerService = require("../services/Customer.js");

//Create a customer
router.post("/", customerService.createCustomer);

//Read One
router.get("/:id", customerService.getCustomerById);

module.exports = router;
