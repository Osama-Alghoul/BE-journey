import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = 5000;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const server = http.createServer(async (req, res) => {
  try {
    let filePath;
    if (req.method === "GET") {
      if (req.url === "/") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>Home page</h1>");

        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>You are in about page</h1>");

        filePath = path.join(__dirname, "public", "about.html");
      } else {
        // res.writeHead(404, { "Content-Type": "text/html" });
        // res.end("<h1>Not found</h1>");

        filePath = path.join(__dirname, "public", "notFound.html");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Internal server error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
