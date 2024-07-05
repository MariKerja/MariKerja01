const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// Routes (full path is /auth/...) -- defined in index.js
router.post("/register", authController.registerUser); // full path is /auth/register
router.post("/login", authController.loginUser); // full path is /auth/login
router.get("/profile", authController.getProfile); // full path is /auth/profile
router.get("/", authController.testConnectivityAuth); // full path is /auth

// Export router
module.exports = router;
