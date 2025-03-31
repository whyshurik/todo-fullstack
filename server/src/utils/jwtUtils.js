// src/utils/jwtUtils.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (userId, role) => {
    return jwt.sign({ id: userId, role: role}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
