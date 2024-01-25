const express = require('express');
const dbConnection = require('./db');

const app = express();

app.use(express.json());

dbConnection();

module.exports = app;