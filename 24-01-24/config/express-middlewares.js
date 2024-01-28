const express = require("express");
const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/user-router");

function config(app) {
  //Nustatymas EJS aktyvavimui
  app.set("view engine", "ejs");
  const publicRouter = express.Router();
  publicRouter.use(express.static("public"));
  app.use(express.json());
  app.use("/public", publicRouter);
  //puslapiu rautinimas
  app.use(pagesRouter);
  app.use("/api/user", userRouter);
}

module.exports = { config };
