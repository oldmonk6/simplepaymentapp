
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("./config");

function authMiddleware (req, res, next)  {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({message:"wrong user id"});
    }

    const words = authHeader.split(' ');
    const token=words[1];
    

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if(decoded.userid){
            req.userid = decoded.userid;

            next();

        }else{
            return res.status(403).json({message:"canot be decoded prooperly"});

        }

       
    } catch (err) {
        return res.status(403).json({message:"something went wrong"});
    }
};

module.exports = {
    authMiddleware
}