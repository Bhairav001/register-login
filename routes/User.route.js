const express = require("express")
const { userModel } = require("../model/User.model")
const jwt = require("jsonwebtoken")
const userRouter = express.Router()


userRouter.post("/register",async(req,res)=>{
    const payload = (req.body)
    try {
        const user = await userModel(payload)
        await user.save()
        res.send({"msg":"User Registered successfully!"})
    } catch (error) {
        res.send({"msg":"Error while Registered successfully!","error":error.message})
    }
   
      
})




userRouter.post("/login",async(req,res)=>{
    
    const {email,pass} = (req.body)
    try {
        const user = await userModel.find({email,pass})
        if(user.length>0){
            let token = jwt.sign({course:"backend"},"masai")
            res.send({"msg":"Loggin in","token":token})
        }else{
            res.send({"msg":"wrong Credintials"})
        }
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }
})



module.exports={
    userRouter
}