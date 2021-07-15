const express = require("express");
const mongoose = require("mongoose");
const Division = require("../../models/division");

const router = express.Router();

mongoose
  .connect(
    "mongodb+srv://flat-app-admin:LB8jFSHzp9Dtspi@cluster0.utljp.mongodb.net/organization",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to db"))
  .catch((err) => console.error("cannot connect", err));

router.get("/", async (req, res) => {});
router.post("/createNewDivision", async (req, res) => {
  let newDivision = new Division({
    name: req.body.name,
    config: req.body.config,
    client: req.body.client,
  });
  newDivision.save();
});

module.exports = router;
