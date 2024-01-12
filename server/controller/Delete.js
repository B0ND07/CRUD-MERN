const CrudSchema = require("../models/userSchema")

const Delete=async(req,res)=>{
    const _id=req.params.id
    const Delete=await CrudSchema.findByIdAndDelete(_id)
    res.json("deleted successfully")
}

module.exports=Delete