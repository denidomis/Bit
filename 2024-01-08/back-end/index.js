// // //import module
// // const sum = require("./math-module").sum;
// // const minus = require("./math-module").minus;

// // console.log(sum(4, 5));
// // console.log(minus(8, 4));

// //Gaunamas http modulis
// const http = require("http");

// //Sukuriamas serverio kintamasis
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     req.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//     res.write("Tai yra mano atsakymas");
//   }
//   if (req.url === "/check") {
//     res.write("Tai yra mano atsakymas");
//     res.end();
//   }
// });

// //Serveris paleidžiamas and port'o 3000
// server.listen(3000);
// console.log("Server is started on port 3000");

const express = require("express");
const cors = require("cors");
const app = express();

const todos = [{ author: "Dode", todo: "live" }];

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/get-todos", (req, res) => {
  res.send(JSON.stringify(todos));
});

app.listen(3000);
