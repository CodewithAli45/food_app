const jwt = require('jsonwebtoken');
const secreteKey = process.env.SECRETE_KEY;

const generateToken = (id) => {
    return jwt.sign({id: id}, secreteKey, {expiresIn: '3d'})
}

module.exports = generateToken;