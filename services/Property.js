const propertyModel = require("../models/Property.js");

exports.createProperty = async (req, res) => {
  const property = new propertyModel(req.body);

  try {
    await property.save();
    res.json({ message: "Successfully created property", data: property });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProperties = async (req, res) => {
  res.json({ message: "Get all properties working" });
};
