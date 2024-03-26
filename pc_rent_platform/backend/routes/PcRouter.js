const express = require("express");
const router = express.Router();
const PcModel = require("../model/PcModel");
const PcImageModel = require("../model/PcImageModel");
const upload = require("../utils/multerConfig");

router.post("/", upload.array("files", 2), async (req, res) => {
  try {
    const {
      pc_name,
      processor,
      graphics_card,
      ram_type,
      ram_speed,
      amount_of_ram,
      computer_type,
    } = req.body;

    const newPc = new PcModel({
      computer_owner: req.session.user.id,
      pc_name,
      processor,
      graphics_card,
      ram_type,
      ram_speed,
      amount_of_ram,
      computer_type,
    });
    await newPc.save();

    const allPcImageModels = req.files.map(
      (file) => new PcImageModel({ uri: file.path, pcId: newPc.id })
    );
    const allPcImageSavePromises = allPcImageModels.map((model) =>
      model.save()
    );
    await Promise.all(allPcImageSavePromises);
    res.status(201).json({
      message: "PC saved to the database sucessfully",
      newPc: newPc.getInstance(),
      pcImages: allPcImageModels.map((model) => model.getInstance()),
      status: true,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", status: false });
  }
});

router.get("/", async (req, res) => {
  const allPcsWithoutImages = await PcModel.findAll();
  const startTime = Date.now();
  const allPcsWithImages = await Promise.all(
    allPcsWithoutImages.map(async (pcModel) => {
      const pcImages = await PcImageModel.getByPcId(pcModel.id); //2 nuotraukos
      return { ...pcModel.getInstance(), images: pcImages };
    })
  );
  const endTime = Date.now();
  console.log(endTime - startTime);

  console.log(allPcsWithImages);
  res.status(200).json(allPcsWithImages);
});

router.get("/:id", async (req, res) => {
  try {
    const pc = await PcModel.findById(req.params.id);
    if (!pc)
      return res.status(404).json({ message: "pc not found", status: false });
    const pcImages = await PcImageModel.getByPcId(pc.id);

    return res.status(200).json({
      pc: pc.getInstance(),
      pcImages: pcImages.map((pcImage) => pcImage.getInstance()),
      status: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Bad Id", status: false });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const pc = await PcModel.findById(req.params.id);
//     if (!pc)
//       return res.status(404).json({ message: "pc not found", status: false });
//     await PcImageModel.deleteByPcId(pc.id);
//     await PcModel.deleteById(pc.id);
//     return res.status(200).json({ message: "pc deleted", status: true });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).json({ message: "Bad Id", status: false });
//   }
// });

router.get("/my-computers", async (req, res) => {
  const allPcsWithoutImages = await PcModel.findAllAdded();
  const startTime = Date.now();
  const allPcsWithImages = await Promise.all(
    allPcsWithoutImages.map(async (pcModel) => {
      const pcImages = await PcImageModel.getByPcId(pcModel.id); //2 nuotraukos
      return { ...pcModel.getInstance(), images: pcImages };
    })
  );
  const endTime = Date.now();
  console.log(endTime - startTime);

  console.log(allPcsWithImages);
  res.status(200).json(allPcsWithImages);
});

module.exports = router;
