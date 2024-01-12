const express = require("express");
const app = express();
const env = require("dotenv").config();
const cors=require("cors")

const mongodb = require("./config/mongodb");
const router = require("./router/router");

mongodb();
app.use(express.json())
app.use(cors())

app.use("/", router);

app.listen(5000, console.log("server is running on 5000"));
