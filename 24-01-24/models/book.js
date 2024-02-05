const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  recorderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  language: {
    type: String,
    required: true,
    maxlength: 120,
  },
  title: {
    type: String,
    required: true,
  },
  authorFirstName: {
    type: String,
    required: true,
    maxlength: 70,
  },
  authorLastName: {
    type: String,
    required: true,
    maxlength: 70,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  bookPicture: {
    type: String,
    required: false,
  },
});

const Model = mongoose.model("book", schema);

module.exports = Model;
