// import fs from "fs";
import fs from "fs/promises";

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

// fs.readFile("./test.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// readFile();

// write file

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I'm writing to this file");
    console.log("File written to...");
  } catch (err) {
    console.log(err);
  }
};

//append file
const apeendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File appended to...");
  } catch (err) {
    console.log(err);
  }
};

writeFile();
apeendFile();
readFile();
