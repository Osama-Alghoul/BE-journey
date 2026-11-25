const express = require("express");
const path = require("path");

const app = express();

// set-up static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, () =>
  console.log("Server is running on http://localhost:8000"),
);
