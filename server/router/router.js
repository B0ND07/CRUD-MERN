const express = require("express");
const Create = require("../controller/Create");
const ReadData = require("../controller/ReadData");
const router = express.Router();

router.route("/create").post(Create)

router.route("/get").get(ReadData)

module.exports = router;
