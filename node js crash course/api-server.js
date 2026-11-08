import { createServer } from "http";

const users = [
  { id: 1, name: "osama" },
  { id: 2, name: "ayman" },
  { id: 3, name: "anas" },
];

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON Middleware
const jsonMiddlware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Rout handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Rout handler for GET /api/users/:id
const getUsersByIdHandler = (req, res) => {
  const id = parseInt(req.url.split("/")[3]);
  const user = users.find((i) => i.id === id);
  res.write(JSON.stringify(user));
  res.end();
};

// Router handler for POST /qpi/users
const createUserHandler = (req, res) => {
  let body = "";
  // Listen fo data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    try {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.statusCode = 201;
      res.write(JSON.stringify(newUser));
    } catch (error) {
      res.statusCode = 400; // Bad Request: the client sent bad data
      res.write(JSON.stringify({ message: "Invalid JSON body" }));
    }
    res.end();
  });
};

// Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddlware(req, res, () => {
      logger(req, res, () => {
        if (req.url === "/api/users" && req.method === "GET") {
          getUsersHandler(req, res);
        } else if (
          req.url.match(/\/api\/users\/([0-9]+)/) &&
          req.method === "GET"
        ) {
          getUsersByIdHandler(req, res);
        } else if (req.url === "/api/users" && req.method === "POST") {
          createUserHandler(req, res);
        } else {
          notFoundHandler(req, res);
        }
      });
    });
  });
});

server.listen(3001, () => {
  console.log("server is running on port 3001");
});
