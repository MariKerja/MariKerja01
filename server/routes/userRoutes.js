const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// Routes (full path is /users/...) -- defined in index.js
router.get("/:id", userController.fetchUserProfile); // Get user profile, full path is /users/:id
router.put("/:id", userController.updateUserProfile); // Update user profile, full path is /users/:id
// Export router
module.exports = router;
