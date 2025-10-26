const express = require("express");
const router = express.Router();
const wrapAsync =require('../utils/wrapAsync.js');
const {listingSchema } = require("../schema.js");
const ExpressError = require('../utils/ExpressError.js');
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner ,validateListing} =require("../middleware.js")
const listingController = require("../controllers/listings.js")
const multer = require("multer");
const { cloudinary, storage } = require("../cloudConfig.js");
const upload = multer({storage});
 
// routers started with "/"
router.route("/")
.get(wrapAsync(listingController.index))//Index Route
.post( 
    isLoggedIn, 
    upload.single("image"), 
    validateListing, 
    wrapAsync(listingController.createListing)
);



//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// routers started with "/:id"
router.route("/:id")
.get(wrapAsync(listingController.showListing))//show route
.put(isLoggedIn , isOwner,upload.single("image"), validateListing, wrapAsync(listingController.updateListing))//update route
.delete(isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing))//delete route

module.exports = router;