const express = require("express");
const router = express.Router();
const propertyService = require("../services/Property.js");
const {
  createPropertyValidate,
  updatePropertyValidate,
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
router.get("/:id", propertyService.getPropertyByID);

//Update property by id
router.put(
  "/:id",

  updatePropertyValidate,
  propertyService.updatePropertyByID
);

//Delete property by id
router.delete("/:id", propertyService.deletePropertyByID);

module.exports = router;
