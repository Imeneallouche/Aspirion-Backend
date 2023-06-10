const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../Config/generateToken");

const signUpController = expressAsyncHandler(async (req, res) => {
  const { username, password, email, picture } = req.body;

  if (!username || !password || !email) {
    res.status(400);
    throw new Error("Please enter all the Fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
    picture,
    token: generateToken(user._id),
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      picture: user.picture,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

module.exports = signUpController;
