const express = require("express");
const router = express.Router();
const PCModel = require("../model/PcModel");

router.post("/", async (req, res) => {
  try {
    const {
      computer_owner,
      processor,
      graphics_card,
      ram_type,
      ram_speed,
      amount_of_ram,
      rental_history,
      computer_type,
    } = req.body;
    const newPC = new PCModel({
      computer_owner,
      processor,
      graphics_card,
      ram_type,
      ram_speed,
      amount_of_ram,
      rental_history,
      computer_type,
    });
    await newPC.save();
    res.send(newPC.getInstance());
  } catch (err) {
    console.error(err);
    if (err.errno === 1062)
      res
        .status(400)
        .send(
          "Iterpimas negalimas, Įrašas yra pasikartojantis - duomenų bazė to neleidžia"
        );
    else {
      res.status(500).send("Serverio klaida");
    }
  }
});

router.get("/:id", async (req, res) => {
  const pc = await PCModel.findById(req.params.id);
  res.send(pc.getInstance());
});

// router.get("/", async (req, res) => {
//   const allPCWithoutId = await PCModel.findAll();
//   const allPC = allPCWithoutId.map((value) => value.getInstance());
//   res.send(allPC);
// });

router.delete("/:id", async (req, res) => {
  try {
    const result = await PCModel.deleteById(req.params.id);
    res.send("Irasas buvo sekmingai pasalintas");
  } catch (err) {
    if (err.message === "not found")
      res
        .status(404)
        .send("Irasas su id = " + req.params.id + " buvo nerastas");
    else res.status(500).send("Server error!");
  }
});

router.put("/:id", async (req, res) => {
  const {
    computer_owner,
    processor,
    graphics_card,
    ram_type,
    ram_speed,
    amount_of_ram,
    rental_history,
    computer_type,
  } = req.body;
  const pcObj = await PCModel.findById(req.params.id);
  if (computer_owner) pcObj.computer_owner = computer_owner;
  if (processor) pcObj.processor = processor;
  if (graphics_card) pcObj.graphics_card = graphics_card;
  if (ram_type) pcObj.ram_type = ram_type;
  if (ram_speed) pcObj.ram_speed = ram_speed;
  if (amount_of_ram) pcObj.amount_of_ram = amount_of_ram;
  if (rental_history) pcObj.rental_history = rental_history;
  if (computer_type) pcObj.computer_type = computer_type;
  await pcObj.update();
  res.send(pcObj.getInstance());
});

module.exports = router;
