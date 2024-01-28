const express = require("express");
const router = express.Router();
const UserModal = require("../models/user");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "Please provide username and password",
    });
  }
  const newUser = new UserModal({
    username,
    email,
    password,
  });
  await newUser.save();
  res.status(200).json(newUser);
});

router.get("/users", async (req, res) => {
  const users = await UserModal.find({ username: "dodenisas" });
  res.status(200).json(users);
});

module.exports = router;
