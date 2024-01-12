const CrudSchema = require("../models/userSchema")


const ReadData=async(req,res)=>{
    const Read=await CrudSchema.find()
    res.json(Read)
}

module.exports=ReadData