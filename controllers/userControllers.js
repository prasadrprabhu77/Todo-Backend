const bcrypt = require("bcryptjs")
const user = require("../models/user");
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashed = await bcrypt.hash(password, 10);
        console.log(hashed)
        const newUser = await user.create({ name, email, password: hashed })
        res.status(201).json({ message: "user Signup successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const User = await user.findOne({email});
        if(!User){
        return res.status(404).json({ message: "user Not Found"});    
        }
        
        const isMatch = await bcrypt.compare(password,User.password);
        if(!isMatch){
            return res.status(404).json({ message: "Incorrect Credentials"});
        }
        const token = jwt.sign({userId: User._id}, process.env.JWT_SECRET_KEY)

        res.status(200).send({message:"Login success", token})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { signup, login }