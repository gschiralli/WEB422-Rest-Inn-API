const Joi = require("joi");

exports.createPropertySchema = Joi.object({
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

exports.createCustomerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phoneNumbers: Joi.array().items(Joi.string()),
});

exports.updatePropertySchema = Joi.object({
  _id: Joi.string().forbidden(),
  title: Joi.string().min(3).max(30),
  rentalPrice: Joi.number().positive(),
  description: Joi.string(),
  type: Joi.string().min(3).max(30),
  houseRules: Joi.array().items(Joi.string()),
  amenities: Joi.array().items(Joi.string()).min(1),
  location: Joi.string().min(3).max(30),
  bestSeller: Joi.boolean(),
  photoURL: Joi.string(),
});
