const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlenght: 5,
    maxlength: 70,
  },
  email: {
    type: String,
    required: true,
    maxlength: 120,
  },
  salt: String,
  password: {
    type: String,
    required: true,
    minlenght: 7,
    maxlength: 70,
  },
  firstName: {
    type: String,
    required: true,
    maxlength: 70,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 70,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("user", schema);

module.exports = model;
