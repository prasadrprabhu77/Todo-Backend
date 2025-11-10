const jwt = require("jsonwebtoken")
const authMiddleware = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(token){
            const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.user = decoded.userId;
            next();
        }else{
            return res.status(401).send({error:"Cannot Found token, Please login"})
        }
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = authMiddleware;