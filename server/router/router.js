const express = require("express");
const Create = require("../controller/Create");
const ReadData = require("../controller/ReadData");
const Delete = require("../controller/Delete");
const router = express.Router();

router.route("/create").post(Create)

router.route("/get").get(ReadData)

router.route('/delete/:id').delete(Delete)

module.exports = router;
