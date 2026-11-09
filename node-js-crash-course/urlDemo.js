import url from "url";

const urlString = "https://search.brave.com/search?q=Eng Osama Alghoul";

// URL object
const urlObj = new URL(urlString);

console.log(urlObj);

// format();
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath();
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
params.append("limit", 5);
console.log("params ==>", params);
console.log(params.get("q"));
