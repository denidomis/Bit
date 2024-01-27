const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://vardas:slaptazodis@forum.zgo5wgp.mongodb.net/forumhub"
);
const db = mongoose.connection;

// db listeneriai, kurie sako ar prie db buvo sekmingai prisijungta ar ne
db.on("error", () => {
  console.error("error: ", error);
});

db.once("open", () => {
  console.info("Conection to db secured");
});

//Nustatymas EJS aktyvavimui
app.set("view engine", "ejs");
const publicRouter = express.Router();
publicRouter.use(express.static("public"));
app.use("/public", publicRouter);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Forum application",
    message: "Hello world!",
    username: "Dode",
    list: ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6"],
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "register page",
    message: "Hello world!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on adress: http://localhost:3000/");
});
