const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const Area = require("../../models/area");

const router = express.Router();

mongoose
  .connect(
    "mongodb+srv://flat-app-admin:LB8jFSHzp9Dtspi@cluster0.utljp.mongodb.net/organization",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
//   .then(() => console.log("Connected to db"))
//   .catch((err) => console.error("cannot connect", err));

router.get("/", async (req, res) => {
//   const { branch } = req.body;
//   console.log(branch);
//   const area = await Area.find({ branch: branch });
//   res.send(area);
  //   res.send(await branches.find({}).toArray());
});
router.post("/createNewArea", async (req, res) => {
  let newArea = new Area({
    name: req.body.name,
    config: req.body.config,
    division: req.body.division,
  });
  newArea.save();
});

module.exports = router;
