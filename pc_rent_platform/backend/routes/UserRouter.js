const express = require("express");
const router = express.Router();
const User = require("../model/UserModel");
const Address = require("../model/AddressModel");
const security = require("../utils/security");

router.post("/register", async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      birthDate,
      phone,
      country,
      county,
      municipality,
      zipCode,
      city,
      street,
      streetNumber,
      apartmentNumber,
    } = req.body;

    const newAddress = new Address({
      country,
      county,
      municipality,
      zipCode,
      city,
      street,
      streetNumber,
      apartmentNumber,
    });
    await newAddress.save();

    const salt = security.generateSalt();
    const hashedPassword = security.hashPassword(password, salt);
    const newUser = new User({
      username,
      passEncoded: hashedPassword,
      salt,
      email,
      birthDate,
      phone,
      addressId: newAddress.id,
    });
    await newUser.save();
    // 3. Užregistruoti vartotojo sesiją
    req.session.user = {
      username: newUser.username,
      email: newUser.email,
      id: newUser.id,
    };

    req.session.isLoggedIn = true;

    res.status(201).send({
      user: newUser.getInstance(),
      address: newAddress.getInstance(),
    });
  } catch (err) {
    console.error(err);
    if (err.errno === 1062) {
      res.status(400).json({ message: "Duomenys yra neunikalūs" });
    } else {
      res.status(500).json({ message: "Serverio klaida" });
    }
  }
});

router.get("/", (req, res) => {
  res.send("Veikia routas");
});

module.exports = router;
