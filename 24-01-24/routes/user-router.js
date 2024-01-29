const express = require("express");
const router = express.Router();
const UserModal = require("../models/user");
const upload = require("../config/multer").upload;
const security = require("../utils/security");

router.post("/register", upload.single("img"), async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    birthDate,
    mobile,
    gender,
  } = req.body;
  const fileName = require("../config/multer").lastFileName;

  if (
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    !birthDate ||
    !mobile ||
    !gender
  ) {
    return res.status(400).json({ message: "not all data was given" });
  }

  const salt = security.generateSalt();
  const hashedPassword = security.hashPassword(password, salt);

  const newUser = new UserModel({
    username,
    email,
    firstName,
    lastName,
    salt,
    password: hashedPassword,
    birthDate,
    mobile,
    gender,
    profilePicture: `http://localhost:3000/public/images/${fileName}`,
  });
  await newUser.save();
  console.log(newUser);
  res.status(200).json({ message: "labas" });
});

router.get("/users", async (req, res) => {
  const users = await UserModal.find({ username: "dodenisas" });
  res.status(200).json(users);
});

module.exports = router;
