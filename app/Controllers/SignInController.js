const bcrypt = require("bcryptjs");
const UserModel = require("../models/userModel");

//Handle user signin

exports.signInController = async (req, res) => {
  const { username, password } = req.body;
};
