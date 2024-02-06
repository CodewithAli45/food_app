const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const generateToken = require('../util/generateToken');

const register = async (req, res) => {
    const {firstName, lastName, fullName, email, password, confirmPassword, address, phone} = req.body;

    try {
        if(password !== confirmPassword){
            return res.status(401).json({
                status: "Error",
                message: "Password does not matches, Confirm Password should be same"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            firstName, 
            lastName, 
            fullName, email, 
            password: hashedPassword,
            confirmPassword: hashedPassword, 
            address, 
            phone
        });

        const newUser = await User.create(user);

        res.status(201).json({
            status: "Success",
            userData: newUser,
        });

    } catch (error) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            status: "Failure",
            message: "Please provide email and password"
        })
    }
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                status: "Failure",
                message: "User not found"
            })
        };

        const matchPassword = await bcrypt.compare(password, user.password);
        if(!matchPassword){
            return res.status(404).json({
                status: "Failure",
                message: "Password is incorrect"
            })
        }

        res.status(201).json({
            status: "Success",
            userData: user,
            token: generateToken(user._id),
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
    register,
    login,
}