const express = require("express");
const UserModel = require("../models/user");
const BookModal = require("../models/book");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Library application",
    message: "Hello world!",
    username: "Dodenisas",
    list: ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6"],
    activeTab: "Home",
    logedIn: !!req.session?.user?.logedIn,
    message: req.query.message,
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "register page",
    message: "Hello world!",
    logedIn: !!req.session?.user?.logedIn,
  });
});

router.get("/logIn", (req, res) => {
  res.render("logIn", {
    title: "logIn page",
    message: "logIn!",
    logedIn: !!req.session?.user?.logedIn,
  });
});

router.get("/profile", async (req, res) => {
  const userData = await UserModel.findOne({ _id: req.session.user.id });
  res.render("profile", {
    title: "profile page",
    activeTab: "Profile",
    message: "Hello world!",
    logedIn: !!req.session?.user?.logedIn,
    Firstname: userData.firstName,
    Lastname: userData.lastName,
    Username: userData.username,
    Email: userData.email,
    BirthDate: userData.birthDate,
    Mobile: userData.mobile,
    ProfilePicture: userData.profilePicture,
  });
});

router.get("/library", async (req, res) => {
  const bookData = await BookModal.find({ recorderId: req.session.user.id });
  console.log(bookData);
  res.render("library", {
    title: "library page",
    activeTab: "Library",
    message: "Library",
    logedIn: !!req.session?.user?.logedIn,
    allBooks: bookData,
  });
});

module.exports = router;
