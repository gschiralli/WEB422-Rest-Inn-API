const express = require("express");
const router = express.Router();

//Create
router.post("/", (req, res) => {
  res.json({ message: "Post route working" });
});

//Read One
router.get("/:id", (req, res) => {
  res.json({ message: `Retrieved customer with the id of ${req.params.id}` });
});

module.exports = router;
