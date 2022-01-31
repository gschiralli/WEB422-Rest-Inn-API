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
  try {
    const properties = await propertyModel.find();
    res.json({
      message: "list of all the properties in the database",
      data: properties,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.json({ message: "Get all properties working" });
};

exports.getAllPropertyTypes = async (req, res) => {};
