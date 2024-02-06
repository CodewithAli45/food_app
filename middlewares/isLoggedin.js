const User = require("../models/userModel");
const verifyToken = require("../util/verifyToken");

const isLoggedin = async(req, res, next) => {
    try {
        const decodedId = await verifyToken(req);
        const user = await User.findById(decodedId.id);
        if(!user){
            return res.json({message: "Unauthorized : Invalid Token"})
        };

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in logging in", error);
    }
}

module.exports = isLoggedin;