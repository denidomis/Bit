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
  password: {
    type: String,
    required: true,
    minlenght: 7,
    maxlength: 70,
  },
});

const model = mongoose.model("user", schema);

module.exports = model;
