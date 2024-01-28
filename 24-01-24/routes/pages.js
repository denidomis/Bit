const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Forum application",
    message: "Hello world!",
    username: "Dode",
    list: ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6"],
  });
  //Kartu paduodami ir parametrai ejst failui
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "register page",
    message: "Hello world!",
  });
});

module.exports = router;
