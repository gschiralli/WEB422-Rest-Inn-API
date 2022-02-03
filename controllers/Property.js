const express = require("express");
const router = express.Router();
const propertyService = require("../services/Property.js");
const {
  isValidId,
  createPropertyValidate,
} = require("../middleware/validation.js");

//Create a property
router.post("/", createPropertyValidate, propertyService.createProperty);

//Retrieve all properties
router.get("/", propertyService.getAllProperties);

//Retrieve all property types
router.get("/types", propertyService.getAllPropertyTypes);

//Retrieve all best sellers
router.get("/best-sellers", propertyService.getBestSellers);

//Retrieve property by id
router.get("/:id", isValidId, propertyService.getPropertyByID);

//Update property by id
router.put("/:id", isValidId, propertyService.updatePropertyByID);

module.exports = router;
