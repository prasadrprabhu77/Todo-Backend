const express = require("express")
const connectDB = require("./config.js/DB")
const userRoute = require("./routes/userRoutes")
const todoRoute = require("./routes/todoRoutes")
const dotenv = require("dotenv")

dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())

connectDB()

app.get("/test", (req,res) => res.send("test route is working fine"))

app.use("/user",userRoute)
app.use("/todo",todoRoute)

app.use((req,res) =>{
    res.json({message:"something went wrong"})
})

app.listen(PORT, () =>{
    console.log(`localhost running on PORT ${PORT}`)
})