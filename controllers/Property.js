const express = require("express");
const router = express.Router();
const propertyService = require("../services/Property.js");

//Create a property
router.post("/", propertyService.createProperty);

//Retrieve all properties
router.get("/", propertyService.getAllProperties);

module.exports = router;
