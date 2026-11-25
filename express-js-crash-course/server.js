const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();

// set-up static folder
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "P1" },
  { id: 2, title: "P2" },
  { id: 2, title: "P3" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`),
);
