const express = require("express");
const router = express.Router();
const propertyService = require("../services/Property.js");

//Retrieve all properties
router.get("/", propertyService.getAllProperties);

module.exports = router;
