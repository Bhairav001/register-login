const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.route")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log({"msg":"connected to DB"})
    } catch (error) {
        console.log({"msg":"error while connected to DB","error":error.message})
    }
    console.log({"msg":`server has running at port ${process.env.port}`})
})