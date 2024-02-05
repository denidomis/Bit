const express = require("express");
const pagesRouter = require("../routes/pages");
const MongoStore = require("connect-mongo");
const userRouter = require("../routes/user-router");
const session = require("express-session");
const bookRouter = require("../routes/books-router");
const bodyParser = require("body-parser");

function config(app) {
  //Nustatymas EJS aktyvavimui
  app.set("view engine", "ejs");
  const publicRouter = express.Router();
  publicRouter.use(express.static("public"));
  app.use(express.json());
  app.use(bodyParser.urlencoded());
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: require("./db-connect").mongoUrl,
        collectionName: "sessions",
      }),
      cookie: {
        maxAge: 1000 * 24 * 60 * 60 * 7,
      },
    })
  );
  app.use("/public", publicRouter);
  //puslapiu rautinimas
  app.use(pagesRouter);
  app.use("/api/user", userRouter);
  app.use("/api/book", bookRouter);
}

module.exports = { config };
