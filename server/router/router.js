const express = require("express");
const Create = require("../controller/Create");
const router = express.Router();

router.route("/create").post(Create)

module.exports = router;
