const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();

// set-up static folder
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "P1" },
  { id: 2, title: "P2" },
  { id: 3, title: "P3" },
];

// get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit >= 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// get a post by ID
app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));

  if (!post) {
    res.status(404).json({ msg: `A post with the id ${id}` });
  } else {
    res.status(200).json(post);
  }
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`),
);
