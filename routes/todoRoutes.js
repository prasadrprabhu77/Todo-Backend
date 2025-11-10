
const express = require("express");
const { addTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todoControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const todoRoute = express.Router();

todoRoute.post("/", authMiddleware, addTodo)
todoRoute.get("/", authMiddleware, getTodo)
todoRoute.put("/:id", authMiddleware, updateTodo)
todoRoute.delete("/:id", authMiddleware, deleteTodo)


module.exports = todoRoute;



