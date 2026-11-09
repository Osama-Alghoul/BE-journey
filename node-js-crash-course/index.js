import { getPosts, getPostsById, getPostsLength } from "./postsControler.js";
import genenrateRandomNumber from "./untils.js";

console.log(getPosts());
console.log(genenrateRandomNumber());

console.log(getPostsById(1));
console.log("Posts length", getPostsLength());
