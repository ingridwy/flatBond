const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose")
const Branch = require("../../models/branch");
const { route } = require("./area");

const router = express.Router();

mongoose.connect(
    "mongodb+srv://flat-app-admin:LB8jFSHzp9Dtspi@cluster0.utljp.mongodb.net/organization",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
// .then(()=> console.log("Connected to db"))
// .catch( err =>console.error("cannot connect",err));

router.get("/:id", async (req, res) => {
    const branch = await Branch.find({_id: req.params.id})
    .populate({path:"area", model:"Area",populate:{path:"division",model:"Division"}}).exec((err, branch) => {
      res.json(branch)
    })
    
    console.log(branch)
});

router.get("/", async (req, res) => {
  try {
    const branch = await Branch.find({})
    res.json(branch)
    console.log(branch)
  }
  catch(err){
    console.log(err)
  }
});

router.post('/createNewBranch', async (req,res) => {
    let newBranch = new Branch ({
        name: req.body.name,
        config: req.body.config,
        area: req.body.area
    });
    newBranch.save();
})



module.exports = router;
