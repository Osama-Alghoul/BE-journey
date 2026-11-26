import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "P1" },
  { id: 2, title: "P2" },
  { id: 3, title: "P3" },
];

// get all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit >= 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// get a post by ID
router.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id ${req.params.id} was not found` });
  }
  res.status(200).json(post);
});

export default router;
