const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync =require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const {reviewSchema} = require("../schema.js");
const Review = require("../models/review.js")
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReview} = require("../middleware.js")
const reviewController = require("../controllers/reviews.js");


//Review Routes
//post review route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
// delete review route
router.delete("/:reviewId", isLoggedIn,isReview, wrapAsync(reviewController.deleteReview));
module.exports = router;