const { register, login } = require('../controllers/authController');

const authRoute = require('express').Router();


authRoute.post('/register', register);
authRoute.post('/login', login);

module.exports = authRoute;