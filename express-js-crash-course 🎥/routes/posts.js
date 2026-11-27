import express from "express";
import {
  getPosts,
  getPostsById,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/postControler.js";
const router = express.Router();

// get all posts
router.get("/", getPosts);

// get a post by ID
router.get("/:id", getPostsById);

// create a new post
router.post("/", createPost);

// update a post
router.put("/:id", updatePost);

// delete a post
router.delete("/:id", deletePost);

export default router;
