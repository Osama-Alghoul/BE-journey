import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello", name);
}

function goodbyHandler(name) {
  console.log("Goodby", name);
}

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodby", goodbyHandler);

// Emit events
myEmitter.emit("greet", "Osama");
myEmitter.emit("goodby", "Ruba");

// Error handling
myEmitter.on("error", (err) => {
  console.log("An Error Occured", err);
});

// Simulate error
myEmitter.emit("error", new Error("Something went wrong"));
