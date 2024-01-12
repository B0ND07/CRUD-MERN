const mongoose = require("mongoose");

const mongodb = async () => {
  await mongoose.connect(process.env.MONGO_KEY);
  console.log("database connected");
};

module.exports=mongodb