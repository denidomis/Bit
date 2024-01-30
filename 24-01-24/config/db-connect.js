const mongoose = require("mongoose");
//laikinai sukonfiguruoja .env kintamuosius, kad jie butu matomi musu kurimo aplinkose
require("dotenv").config();

const mongoUrl = process.env.MONGO_CONNECTION.replace(
  "__DB_USER",
  process.env.DB_USER
)
  .replace("__DB_PASSWORD", process.env.DB_PASSWORD)
  .replace("__DB_HOST", process.env.DB_HOST)
  .replace("__DB_NAME", process.env.DB_NAME);

function config() {
  // sujungimas su duomenu baze
  mongoose.connect(mongoUrl);
  const db = mongoose.connection;

  // db listeneriai, kurie sako ar prie db buvo sekmingai prisijungta ar ne
  db.on("error", () => {
    console.error("error: ", error);
  });

  db.once("open", () => {
    console.info("Conection to db secured");
  });
}

module.exports = { config, mongoUrl };
