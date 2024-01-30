const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 70,
  },
  language: {
    type: String,
    required: true,
    maxlength: 120,
  },
  title: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 70,
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

const bookModel = mongoose.model("book", schema);

module.exports = bookModel;
