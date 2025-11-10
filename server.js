const express = require("express")
const cors = require("cors");
const connectDB = require("./config/DB")
const userRoute = require("./routes/userRoutes")
const todoRoute = require("./routes/todoRoutes")
const dotenv = require("dotenv")

const app = express()
dotenv.config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

connectDB()

app.get("/test", (req,res) => res.send("test route is working fine"))

app.use("/user",userRoute)
app.use("/todo",todoRoute)

app.use((req,res) =>{
    res.json({message:"something went wrong"})
})

app.listen(PORT, () =>{
    console.log(`server running on PORT ${PORT}`)
})