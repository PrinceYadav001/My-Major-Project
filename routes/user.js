const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl, isLoggedIn } = require("../middleware");
const userController = require("../controllers/users");

//routers started with "/signup"
router.route("/signup")
.get(userController.renderSignUpForm)// SignUp render form router
.post(wrapAsync(userController.signupUser))//signup router

//rourtes started with "/login"
router.route("/login")
.get(userController.renderLoginForm)//login render form router
.post(saveRedirectUrl,passport.authenticate('local',{failureRedirect:'/login', failureFlash:true}),userController.userLogin);//autantication login router

//user Logout router
router.get("/logout",userController.userLogout)

module.exports= router;
