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
  const queryString = {};

  if (req.query.location) {
    queryString.location = req.query.location;
  }
  if (req.query.type) {
    queryString.type = req.query.type;
  }

  try {
    const properties = await propertyModel.find(queryString);

    res.json({
      message: "List of all properties",
      data: properties,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPropertyTypes = async (req, res) => {
  try {
    const propertyTypes = await propertyModel.find().distinct("type");

    res.json({
      message: "List of all the property types",
      data: propertyTypes,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getBestSellers = async (req, res) => {
  try {
    const bestSellers = await propertyModel.find({ bestSeller: true });

    res.json({
      message: "List of all the properties that are best sellers",
      data: bestSellers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPropertyByID = async (req, res) => {
  try {
    const property = await propertyModel.findById(req.params.id);
    if (property) {
      res.json({
        message: `Property with the id of ${req.params.id}`,
        data: property,
      });
    } else {
      res.status(404).json({
        message: `The property with the id of ${req.params.id} is not in the database`,
      });
    }
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      res.status(404).json({
        message: `The property with the id of ${req.params.id} is not in the database`,
      });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

exports.updatePropertyByID = async (req, res) => {
  try {
    const property = await propertyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (property) {
      res.json({ message: "Update successful", data: property });
    } else {
      res.status(404).json({
        message: `The property with the id of ${req.params.id} is not in the database`,
      });
    }
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      res.status(404).json({
        message: `The property with the id of ${req.params.id} is not in the database`,
      });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

exports.deletePropertyByID = async (req, res) => {
  try {
    const property = await propertyModel.findByIdAndRemove(req.params.id);
    if (property) {
      res.json({
        message: `The property with the id of ${req.params.id} was deleted`,
      });
    } else {
      res.status(404).json({
        message: `The property with the id of ${req.params.id} is not in the database`,
      });
    }
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      res.status(404).json({
        message: `The property with the id of ${req.params.id} is not in the database`,
      });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
