const CrudSchema = require("../models/userSchema");

const Update = async (req, res) => {
  try {
    const { Name, Age, Place } = req.body;
    const _id = req.params.id;
    const userUpdate = await CrudSchema.findByIdAndUpdate(_id, {
      Name,
      Age,
      Place,
    });
    res.json(userUpdate);
  } catch (err) {
    console.log(err);
  }
};
module.exports = Update;
