const CrudSchema = require("../models/userSchema");

const ReadData = async (req, res) => {
  try {
    const Read = await CrudSchema.find();
    res.json(Read);
  } catch (err) {
    console.log(err);
  }
};

module.exports = ReadData;
