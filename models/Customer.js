const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please enter a first Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter a last Name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  phoneNumbers: { type: [String], default: undefined },
});

customerSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
