const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")
const connectDB = require("./config.js/DB")
const userRoute = require("./routes/userRoutes")
const todoRoute = require("./routes/todoRoutes")
const dotenv = require("dotenv")

const app = express()
dotenv.config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

connectDB()

app.get("/db-check", (req, res) => {
  const state = mongoose.connection.readyState;
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  const states = ["disconnected", "connected", "connecting", "disconnecting"];

  res.json({
    dbState: states[state],
    message: state === 1 ? "✅ MongoDB Connected!" : "❌ MongoDB Not Connected!"
  });
});

app.get("/test", (req,res) => res.send("test route is working fine"))

app.use("/user",userRoute)
app.use("/todo",todoRoute)

app.use((req,res) =>{
    res.json({message:"something went wrong"})
})

app.listen(PORT, () =>{
    console.log(`localhost running on PORT ${PORT}`)
})