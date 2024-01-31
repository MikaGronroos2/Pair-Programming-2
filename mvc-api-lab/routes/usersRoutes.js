// routes/usersRoutes.js

const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

// Get All users
router.get("/", usersController.getAllusers);

// Get Single user by ID
router.get("/:id", usersController.getuserById);

// Create a New user
router.post("/", usersController.createuser);

// Update user by ID
router.put("/:id", usersController.updateuser);

// Delete user by ID
router.delete("/:id", usersController.deleteuser);

module.exports = router;
