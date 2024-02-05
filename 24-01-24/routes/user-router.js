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

  const newUser = new UserModal({
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
  req.session.user = {
    id: newUser._id,
    logedIn: true,
    admin: newUser.username === "dodenisas",
  };
  console.log(newUser);
  res.status(200).json({ message: "labas" });
});

router.post("/login", async (req, res) => {
  const { loginName, password } = req.body;

  const existingUser = loginName.includes("@")
    ? await UserModal.findOne({ email: loginName })
    : await UserModal.findOne({ username: loginName });

  if (!existingUser) {
    return res.redirect("/login");
  }
  if (
    !security.isValidCredentials(
      password,
      existingUser.salt,
      existingUser.password
    )
  ) {
    return res.redirect("/login");
  }
  req.session.user = {
    id: existingUser._id,
    logedIn: true,
    admin: existingUser.admin,
  };
  res.redirect("/");
});

router.get("/users", async (req, res) => {
  if (!req.session.user.admin)
    return res.status(200).json("you don't have permisssions");
  console.log(req.session.user);
  const users = await UserModal.find({});
  res.status(200).json(users);
});

router.get("/logout", async (req, res) => {
  if (!req.session?.user?.logedIn) {
    console.log("Loged out user trying to log out...");
    res.redirect("/");
  } else {
    req.session.destroy((err) => {
      if (err) {
        console.log("error deleting session");
        console.error(err);
        return res.redirect("/");
      } else {
        console.log("succesfully logged out");
        res.clearCookie("connect.sid");
        return res.redirect("/login");
      }
    });
  }
});

// router.get("/check-session", async (req, res) => {
//   res.json({ message: "will implement in future" });
// });

module.exports = router;
