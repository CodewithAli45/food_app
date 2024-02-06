const { getAllUsers } = require('../controllers/userController');
const isLoggedin = require('../middlewares/isLoggedin');

const userRoute = require('express').Router();



userRoute.get('/allusers',isLoggedin, getAllUsers);

module.exports = userRoute;