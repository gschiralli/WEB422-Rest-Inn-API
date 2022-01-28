const propertyModel = require("../models/Property.js");

exports.getAllProperties = async (req, res) => {
  res.json({ message: "Get all properties working" });
};
