const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: { type: String },
  Age: { type: Number },
  Place: { type: String },
});

const CrudSchema = mongoose.model("CRUD", userSchema);

module.exports = CrudSchema;
