const CrudSchema = require("../models/userSchema")


const Create=async(req,res)=>{
    const {Name,Age,Place}=req.body
    const User=await CrudSchema.create({Name,Age,Place});
    res.json(User)
}

module.exports=Create