import crypto, { createDecipheriv } from "crypto";

// createHash();
const hash = crypto.createHash("sha256");
hash.update("password1234");
console.log(hash.digest("hex"));

// randomBytes();
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString("hex"));
});

// createCipheriv & createDecipheriv
const alogrithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(alogrithm, key, iv);
let encrypted = cipher.update(
  "Hello, this is a secret message",
  "utf-8",
  "hex",
);
encrypted += cipher.final("hex");
console.log(encrypted);

const deCipher = crypto.createDecipheriv(alogrithm, key, iv);
let decrypted = deCipher.update(encrypted, "hex", "utf-8");
decrypted += deCipher.final("utf-8");
console.log(decrypted);
