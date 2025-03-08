const { sign } = require("jsonwebtoken");

const generateToken = (userId, role, options = {}) => {
    return sign({ userId, role }, process.env.JWT_SECRET_KEY, options);
};

module.exports = generateToken;

