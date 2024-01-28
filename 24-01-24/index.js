const express = require("express");
const app = express();
//db configuracija
require("./config/db-connect").config();
require("./config/express-middlewares").config(app);

app.listen(3000, () => {
  console.log("Server is running on adress: http://localhost:3000/");
});
