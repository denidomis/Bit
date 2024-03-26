const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    const currentTimestamp = Date.now();
    const localName = currentTimestamp + "-" + file.originalname;
    cb(null, localName);
  },
});

const upload = multer({ storage });

module.exports = upload;
