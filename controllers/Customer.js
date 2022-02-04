const express = require("express");
const router = express.Router();
const customerService = require("../services/Customer.js");
const { createCustomerValidate } = require("../middleware/validation.js");

//Create a customer
router.post("/", createCustomerValidate, customerService.createCustomer);

//Read One
router.get("/:id", customerService.getCustomerById);

module.exports = router;
