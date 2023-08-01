const {
  userRegistration,
  userLogin,
  loggedUser
} = require("../controllers/userController");
const express = require("express");
const checkUserAuth = require("../middlewares/auth-middleware");
const router = express.Router();

router.use("/changepassword", checkUserAuth);
router.use("/loggeduser", checkUserAuth);

// Public routes-- It should be displayed to any user
router.post("/register", userRegistration);
router.post("/login", userLogin);

// Protected Routes
router.get("/loggeduser", loggedUser);

module.exports = router;
