// file system
const fs = require("fs");
const data = require("./data.json");
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "secret-bannana",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true },
  })
);

async function readFile() {
  const fileData = await fs.promises.readFile("./data.json", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

async function writeFile(obj) {
  fs.writeFile("./data.json", JSON.stringify(obj), "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

readFile();

app.get("/", async (req, res) => {
  console.log("Patinka");
  data.countOFVisitors++;
  await writeFile(data);
  req.session.userId = 1;

  res.status(200).json({
    message: `Hello World! you are the ${data.countOFVisitors}-th visitor`,
  });
});

app.get("/whats-my-id", (req, res) => {
  if (req.session.userID) {
    console.log(req.session.userID);
    return res.status(200).json({ userId: req.session.userID });
  } else {
    req.session.userID = 1;
    return res.status(200).json({ userId: req.session.userID });
  }
});

app.get("/users", (req, res) => {
  console.log(req.session.userID);
  res.status(200).json({ message: "zinute" });
});

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000/");
});
