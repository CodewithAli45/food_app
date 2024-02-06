const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    fullName: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    confirmPassword: {type: String},
    phone: {type: Number},
    address: {type: String},
    userType: {type: String, required: true, default: 'Client', enum: ["Client", "Admin", "Vendor", "Driver"]},
    profile: {type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_71WQ0KLC08i2AikdxbUHh11pline15bCt7EsBFvSOMIEvtVQ-Ppuxl46Q&s"}
}, {timeseries: true});

const User = mongoose.model('user', userSchema);

module.exports = User;