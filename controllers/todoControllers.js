const todo = require("../models/todo")

const addTodo = async(req,res) =>{
    try {
        const newTodo = await todo.create({...req.body,userId:req.user})
        await newTodo.save();
        res.status(201).send({message: "New Todo added", newTodo})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
} 


const getTodo = async(req,res) =>{
    try {
        const Todos = await todo.find({userId:req.user});
        res.status(200).send({Todos:Todos})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
} 

const updateTodo = async(req,res) =>{
    try {
        const Todo = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send({"Todo Updated": Todo})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
} 


const deleteTodo = async(req,res) =>{
    try {
        const Todo = await todo.findByIdAndDelete(req.params.id);
        res.status(200).send({"Todo Deleted": Todo})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = {addTodo,getTodo, updateTodo, deleteTodo}