const mongoose = require("mongoose")

const mongooseSchma = mongoose.Schema({
    name:String,
    email:String,
    pass:Number
})

const userModel = mongoose.model("gotam",mongooseSchma)

module.exports={
    userModel
}