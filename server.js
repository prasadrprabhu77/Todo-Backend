const express = require("express")
const cors = require("cors");
const userRoute = require("./routes/userRoutes")
const todoRoute = require("./routes/todoRoutes")
const dotenv = require("dotenv");
const connectDB = require("./config/DB");

const app = express()
dotenv.config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

const startServer = async () => {
  try {
    await connectDB(); 
    console.log("✅ DB Connected, starting server...");

    app.get("/test", (req, res) => res.send("Test route is working fine"));

    app.use("/user", userRoute);
    app.use("/todo", todoRoute);

    app.use((req, res) => {
      res.status(404).json({ message: "Route not found" });
    });

    app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err.message);
  }
};

startServer();