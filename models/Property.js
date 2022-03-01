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

propertySchema.pre("save", function (next) {
  this.type =
    this.type.trim()[0].toUpperCase() + this.type.slice(1).toLowerCase();
  next();
});
const Property = mongoose.model("Short Term Property", propertySchema);

module.exports = Property;
