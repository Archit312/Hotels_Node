const express = require('express');
const router = express.Router();

const menuItem = require("./../models/MenuItem");
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new menuItem(data);
      const response = await newMenu.save();
      console.log("Data Saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const data = await menuItem.find();
      console.log("Data Fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: "Internal Server Error" });
    }
  });
  
  module.exports = router;