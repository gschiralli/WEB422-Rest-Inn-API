const mongoose = require("mongoose");
const {
  createPropertySchema,
  createCustomerSchema,
  updatePropertySchema,
} = require("./joi.js");

exports.createPropertyValidate = async (req, res, next) => {
  try {
    const value = await createPropertySchema.validateAsync(req.body, {
      abortEarly: false,
      allowUnknown: true,
    });
    next();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.createCustomerValidate = async (req, res, next) => {
  try {
    const value = await createCustomerSchema.validateAsync(req.body, {
      abortEarly: false,
      allowUnknown: true,
    });
    next();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.updatePropertyValidate = async (req, res, next) => {
  try {
    const value = await updatePropertySchema.validateAsync(req.body, {
      abortEarly: false,
      allowUnknown: true,
    });
    next();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
