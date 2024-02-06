const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        return res.json({
            message: "Un-authorized: Missing Token"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRETE_KEY);
        if(!decoded){
            return "Error in verifying Token, please check the token"
        }
        return decoded;
    } catch (error) {
        console.log("Error in Token", error);
    }
}

module.exports = verifyToken;