import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// set-up static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`),
);
