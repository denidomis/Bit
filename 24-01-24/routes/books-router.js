const express = require("express");
const router = express.Router();
const BookModel = require("../models/book");
const upload = require("../config/multer").upload;
const validate = require("../utils/validation/userValidation");

router.post("/add-book", upload.single("img"), async (req, res) => {
  console.log(req.body.img);
  const { title, authorFirstName, authorLastName, language, releaseDate } =
    req.body;
  const fileName = require("../config/multer").lastFileName;

  if (
    !title ||
    !authorFirstName ||
    !releaseDate ||
    !authorLastName ||
    !language
  ) {
    return res.status(400).json({ message: "not all data was given" });
  }

  const newBook = new BookModel({
    recorderId: req.session.user.id,
    releaseDate,
    authorLastName,
    title,
    authorFirstName,
    language,
    bookPicture: `http://localhost:3000/public/images/${fileName}`,
  });
  await newBook.save();
  console.log(newBook);
  res.redirect("/library");
});

router.get("/library", async (req, res) => {
  //Visu irasu gavimas
  const allBooks = await BookModel.find({});
  res.status(200).json(allBooks);
  console.log(allBooks);
});

router.get("/:id", async (req, res) => {
  //Vieno konkretaus įrašo gavimas
  const book = await BookModel.findOne({ _id: req.params.id }); //Jei neatrandamas, reiksme tampa undefined
  if (!book) {
    return res.status(404).json({ message: "book was not found" });
  }
  res.status(200).json(book);
});

router.delete("/:id", async (req, res) => {
  const book = await BookModel.findOne({ _id: req.params.id }); //Jei neatrandamas, reiksme tampa undefined
  if (!book) {
    return res.status(404).json({ message: "book was not found" });
  }

  //Jei autorius yra prisijunges vartotojas arba prisijunges vartotojas yra admin, tada leidžiame ištrinti įrašą
  if (book.recorderId === req.session.user.admin) {
    await BookModel.findOneAndDelete({ _id: req.params.id });
    return res
      .status(200)
      .json({ message: "The book was successfully deleted" });
  }
  return res
    .status(403)
    .json({ message: "You do not have the right to delete this book" });

  //Įrašo ištrynimas
});

router.put("/:id", async (req, res) => {
  //Įrašo atnaujinimas
});

module.exports = router;
