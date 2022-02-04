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
