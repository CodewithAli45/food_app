const express = require('express');
const dbConnection = require('./db');
const router = require('../routes/index');

const app = express();

app.use(express.json());

dbConnection();
// auth routers
app.use('/api/v1/auth', router.authRoute);

// user router
app.use('/api/v1/users', router.userRoute);

module.exports = app;