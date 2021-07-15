const express = require("express");
const mongoose = require("mongoose");
const Client = require("../../models/Client");

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

router.get("/", async (req, res) => {

});
router.post("/createNewClient", async (req, res) => {
  let newClient = new Client({
    name: req.body.name,
    config: req.body.config,
  });
  newClient.save();
});

module.exports = router;
