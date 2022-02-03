const mongoose = require("mongoose");
const Joi = require("joi");

const createPropertySchema = Joi.object({
  title: Joi.string().required(),
  rentalPrice: Joi.number().required(),
  description: Joi.string(),
  type: Joi.string().required(),
  houseRules: Joi.array().items(Joi.string()),
  amenities: Joi.array().items(Joi.string()).required(),
  location: Joi.string().required(),
  bestSeller: Joi.boolean().required(),
  photoURL: Joi.string(),
});

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
