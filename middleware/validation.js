const mongoose = require("mongoose");
const {
  createPropertySchema,
  createCustomerSchema,
  updatePropertySchema,
} = require("./joi.js");

exports.isValidId = async (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({ message: `The ID ${req.params.id} is invalid` });
  } else {
    next();
  }
};

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
