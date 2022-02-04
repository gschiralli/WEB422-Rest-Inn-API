const mongoose = require("mongoose");
const { createPropertySchema } = require("./joi.js");

exports.isValidId = async (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid ID given" });
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
