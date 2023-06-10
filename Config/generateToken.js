const jwt = require("jsonwebtoken");
const SECRET_TOKEN = "ImeneALLOUCHE";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN || SECRET_TOKEN, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
