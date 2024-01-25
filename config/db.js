const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.DB_URL;

async function dbConnection(){
    try {
        const connection = await mongoose.connect(url);
        console.log("Connected to database ", connection.connection.name);
    } catch (error) {
        console.log("Error in connecting to mongodb database ", error);
    }
}

module.exports = dbConnection;