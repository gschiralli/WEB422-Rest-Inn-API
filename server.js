const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rest-Inn API is up and running on PORT ${PORT}`);
});
