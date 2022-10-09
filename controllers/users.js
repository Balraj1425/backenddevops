const mongoose = require("mongoose");
const userForm = require("../models/userModel");

function addDataCtrl(req, res) {
    let userData = userForm.userModel({
      Name: req.body.name,
      Email: req.body.email,
      Comment: req.body.comment
      
    });
   
    userData.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ success: true });
      }
    });
  }

  async function listDataCtrl(req, res) {
    const filter = {};
    let listofdata = await userForm.userModel.find(filter);
    console.log(listofdata);
    res.json(listofdata);
  }

  module.exports = {addDataCtrl,listDataCtrl};
