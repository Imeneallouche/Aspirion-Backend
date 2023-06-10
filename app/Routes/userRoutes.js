const express = require("express");
const signInController = require("../Controllers/SignInController");
const signUpController = require("../Controllers/SignUpController");

const userRoutes = express.Router();

userRoutes.route("/SignUp").post(signUpController);
//userRoutes.post("/SignIn", signInController);

module.exports = userRoutes;
