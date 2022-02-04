const customerModel = require("../models/Customer.js");

exports.createCustomer = async (req, res) => {
  const customer = new customerModel(req.body);
  try {
    await customer.save();
    res.json({ message: "Customer was created successfully", data: customer });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await customerModel.findById(req.params.id);
    if (customer) {
      res.json({
        message: `Customer with the id ${req.params.id}`,
        data: customer,
      });
    } else {
      res.status(404).json({
        message: `Customer with the id ${req.params.id} is not in our database`,
      });
    }
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      res.status(500).json({
        message: `Customer with the id ${req.params.id} is not in our database`,
      });
    } else {
      res.status(500).json({
        message: error,
      });
    }
  }
};
