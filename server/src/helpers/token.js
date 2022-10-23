const jwt = require('jsonwebtoken');

const createToken = ({ email, role }) => jwt.sign({ email, role }, process.env.TOKEN_SECRECT, { expiresIn: "24h" });

const decodeToken = (token) => jwt.verify(token, process.env.TOKEN_SECRECT);

module.exports = {
  createToken,
  decodeToken
};


