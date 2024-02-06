
const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(users.length <= 0){
            return res.status(404).json({
                message: "Zero user found in database"
            })
        }
        res.status(200).json({
            status: "Success",
            data: {
                users
            }
        })
    } catch (error) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error",
            error: error.message
        })
    }
}


module.exports = {
    getAllUsers
}