const fs = require("fs");

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

const jsonContent = JSON.stringify(alphabet);

fs.writeFile("./alphabet.json", jsonContent, "utf-8", (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

fetch("./alphabet.json");
