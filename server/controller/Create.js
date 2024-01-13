const CrudSchema = require("../models/userSchema");

const Create = async (req, res) => {
  try {
    const { Name, Age, Place } = req.body;
    const User = await CrudSchema.create({ Name, Age, Place });
    res.json(User);
  } catch (err) {
    console.log(err);
  }
};

module.exports = Create;
