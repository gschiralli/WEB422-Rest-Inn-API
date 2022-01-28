const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rentalPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  houseRules: {
    type: [String],
    default: undefined,
  },
  amenities: {
    type: [String],
    required: true,
    default: undefined,
  },
  location: {
    type: String,
    required: true,
  },
  bestSeller: {
    type: Boolean,
    required: true,
  },
  photoURL: {
    type: String,
  },
});

const Property = mongoose.model("Short Term Property", propertySchema);

module.exports = Property;
